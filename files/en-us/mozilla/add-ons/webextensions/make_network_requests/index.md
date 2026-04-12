---
title: Make network requests
slug: Mozilla/Add-ons/WebExtensions/Make_network_requests
page-type: guide
sidebar: addonsidebar
---

Making network requests from extension scripts is a common task. However, the behavior of these requests may not match your expectations if you've made network requests in your other web development. Differences in how browsers handle origins, permissions, cross-origin restrictions, and content security policies (CSP) across extension contexts can lead to unexpected failures or security vulnerabilities. This guide explains how network requests work in different extension contexts and how to make them safely.

Extensions can use the [`fetch()`](/en-US/docs/Web/API/Fetch_API) API to send and receive data from remote servers. How a request behaves depends on where it originates: an extension page, a background script, a service worker, or a content script.

## Requests from extension contexts

An extension context is any document or worker whose origin is the extension's origin, such as a background page, service worker, popup, sidebar, or an extension page opened in a tab.

### Fetching extension resources

A script running in an extension context can use `fetch()` to retrieve resources bundled in the extension without requesting any additional permissions. For example, if an extension contains a JSON file named `config.json` in the `config_resources/` folder, the extension can retrieve the file's contents like this:

```js
const response = await fetch("/config_resources/config.json");
const jsonData = await response.json();
```

### Cross-origin requests with host permissions

If an extension context attempts to fetch a resource from another origin, such as `https://www.mozilla.org`, the browser blocks the request unless the extension has the appropriate [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions).

When the extension **has** host permissions for the target, the `Origin` header is not included in `GET` and `HEAD` requests, mirroring the behavior of a same-origin request. This behavior means the server treats the request as if it came from the same origin.

When the extension **does not** have host permissions, the extension's origin is included in the `Origin` header, and the request is treated as a cross-origin request. The request succeeds only if the server's [CORS](/en-US/docs/Web/HTTP/Guides/CORS) policy allows it.

### Other considerations for extension requests

Because extension contexts have privileged access (potentially to all web origins when you set host permissions to `"https://*/*"`), there are important privacy and security implications. Extensions making requests from their contexts should be careful not to mix information from different isolated web pages. For example, using cookies or cached data associated with one site when your extension makes a request on behalf of another site can cause privacy leaks. See [bug 1670278](https://bugzil.la/1670278) for further context on cookie and network partitioning considerations.

## Requests from content scripts

[Content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) can run in either the MAIN world or the ISOLATED world, and the behavior of `fetch()` differs depending on which world the script runs in and which manifest version the extension uses.

### MAIN world content scripts

Requests initiated by MAIN world content scripts behave exactly as if the web page itself made them. This behavior includes resource path resolution, cookies, cross-origin restrictions (CORS, CORB, COOP, COEP, etc.), and the page's content security policy. The extension's host permissions do not affect these requests.

### ISOLATED world content scripts

The behavior of `fetch()` in ISOLATED world content scripts varies between browsers and manifest versions:

- **Firefox (Manifest V2):** `fetch()` operates independently of the web page's CSP. It can also perform cross-origin requests when the extension has host permissions. However, CORS doesn't work in MV2 content scripts when the extension doesn't have host permissions ([Firefox bug 1605197](https://bugzil.la/1605197)).
- **Firefox (Manifest V3):** `fetch()` behaves identically to the web page's `fetch()` and follows the page's constraints, including CSP and CORS rules, independently of the extension's host permissions.
- **Chrome (Manifest V3):** Requests must be allowed by the browser's content security policy for isolated world scripts. Many DOM APIs are covered by the extension's CSP rather than the web page's CSP ([crbug 896041](https://crbug.com/896041)).

> [!NOTE]
> ISOLATED world content scripts don't inherit modifications made by the page to the global `fetch()` or `XMLHttpRequest` functions or their prototype chains. The browser provides a clean copy of these APIs.

See [CSP for content scripts in the Content Security Policy article](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts) for more details.

## Requesting cross-origin permissions

To grant an extension context access to servers outside the extension's origin, add [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) matching the target host names to the [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) or [`optional_host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) keys in the manifest file.

```json
{
  "name": "My extension",
  "host_permissions": ["https://www.mozilla.org/"]
}
```

Host permission values can be specific URLs or broader match patterns:

- `"https://www.mozilla.org/"` — one host
- `"https://*.mozilla.org/"` — all subdomains of mozilla.org
- `"https://mozilla.org/*"` — mozilla.org with any path
- `"https://*/"` — all reachable domains over HTTPS

Only the host portion of the [match pattern](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) is relevant for granting network access; any path information is ignored.

Access is granted by host and scheme. If an extension wants both secure (`https:`) and non-secure (`http:`) access to a host, it must declare separate permissions for each scheme, or use a wildcard scheme (`*://www.mozilla.org/`), or the broader `<all_urls>` match pattern.

> [!NOTE]
> In Firefox (MV3 only), HTTP requests are automatically upgraded to HTTPS because the default CSP contains `upgrade-insecure-requests`. See [Default content security policy in the Content Security Policy article](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy) for details.

## Security considerations

### Avoid cross-site scripting vulnerabilities

When using resources retrieved with `fetch()`, extension pages (popups, sidebars, offscreen documents, etc.) must be careful to avoid [cross-site scripting](/en-US/docs/Web/Security/Attacks/XSS) attacks. Avoid using APIs such as `innerHTML` that can run arbitrary scripts. For example:

```js example-bad
const response = await fetch("https://api.example.com/data.json");
const jsonData = await response.json();
// WARNING! Might be injecting a malicious script!
document.getElementById("resp").innerHTML = jsonData;
```

Instead, use APIs that do not execute scripts:

```js example-good
const response = await fetch("https://api.example.com/data.json");
const jsonData = await response.json();
// textContent does not parse HTML, preventing script injection.
document.getElementById("resp").textContent = jsonData;
```

See [Safely insert external content into a page](/en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) for more information.

### Limit content script access to cross-origin requests

When performing cross-origin requests on behalf of a content script, [guard against malicious web pages](https://developer.chrome.com/docs/extensions/develop/security-privacy/stay-secure#content_scripts) that may try to impersonate a content script. In particular, don't allow content scripts to request an arbitrary URL.

Consider an example where an extension performs a cross-origin request so a content script can get an item's price. An insecure approach is for the content script to specify the exact resource fetched by the background page:

In the background script:

```js example-bad
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.contentScriptQuery == "fetchUrl") {
    // WARNING: SECURITY PROBLEM - a malicious web page may abuse
    // the message handler to get access to arbitrary cross-origin
    // resources.
    fetch(request.url)
      .then((response) => response.text())
      .then((text) => sendResponse(text))
      .catch((error) => console.error(error));
    return true; // Responds asynchronously.
  }
});
```

In the content script:

```js example-bad
browser.runtime.sendMessage(
  {
    contentScriptQuery: "fetchUrl",
    url: `https://another-site.com/price-query?itemId=${encodeURIComponent(request.itemId)}`,
  },
  (response) => parsePrice(response.text()),
);
```

In this code, the content script can ask the extension to fetch any URL the extension has access to. A malicious web page could forge messages and trick the extension into providing access to cross-origin resources.

Instead, design message handlers that limit the resources fetched. In this more secure example, only the `itemId` is provided by the content script, not the full URL:

```js example-good
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.contentScriptQuery == "queryPrice") {
    // Validate the itemId's type
    if (typeof request.itemId !== "number") {
      throw new TypeError(
        `queryPrice expected a value of type 'number' but received '${typeof request.itemId}'`,
      );
    }
    const url = `https://another-site.com/price-query?itemId=${encodeURIComponent(request.itemId)}`;
    fetch(url)
      .then((response) => response.text())
      .then((text) => parsePrice(text))
      .then((price) => sendResponse(price))
      .catch((error) => console.error(error));
    return true; // Responds asynchronously.
  }
});
```

And in the content script:

```js example-good
browser.runtime.sendMessage(
  { contentScriptQuery: "queryPrice", itemId: 12345 },
  (price) => console.log(price),
);
```

### Prefer HTTPS over HTTP

Take care with resources retrieved using HTTP. If someone uses your extension on a hostile network, a network attacker (a.k.a., the ["man-in-the-middle"](/en-US/docs/Glossary/MitM)) could modify the response and potentially attack your extension. Use HTTPS whenever possible.

### Adjust the extension's content security policy

If you modify the default [Content Security Policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for your extension by adding a `content_security_policy` key to your manifest, ensure that any hosts you want to connect to are allowed. While the default policy doesn't restrict connections to hosts, be careful when adding the `connect-src` or `default-src` directives.

> [!WARNING]
> It's dangerous to remove Content Security Policy headers and other related security mechanisms entirely. Instead, make the minimum changes possible to allow extension scripts, such as adding the extension's origin or random nonces to the `script-src` list.
