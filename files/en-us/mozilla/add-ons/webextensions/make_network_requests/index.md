---
title: Make network requests
slug: Mozilla/Add-ons/WebExtensions/Make_network_requests
page-type: guide
sidebar: addonsidebar
---

Extension scripts can send and receive data from remote servers using the [`fetch()`](/en-US/docs/Web/API/Fetch_API) Web API. This guide provides a comprehensive overview to using that API in various extension scripts. 

> [!NOTE]
> If you're familiar with using the [`fetch()`] API in web development, network requests in web extensions may not behave as you expect, leading to functional or security issues. This guide provides the information you need to avoid issues.

If the request is made from a [content script](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), the request behaves differently depending on the world the script runs in. If the script is running in the:

- MAIN world, the request must be allowed by the page's cross-origin rules.
- ISOLATED world, the request must be allowed by the browser's default content security policy (CSP) for isolated world scripts.

If the request is made from an extension context, i.e., an extension background page or foreground tab, when the context:

- Has host permissions, the Origin header isn't included in GET and HEAD requests, mirroring the behavior of a same-origin request.
- Doesn't have host permissions, the extension's origin is included in the Origin header, meaning it's treated as a cross-origin request.

## Extension origin

A script is executed within the extension's security origins. An extension can call `fetch()` to get resources within its installation without requesting additional privileges. For example, if an extension contains a JSON file named `config.json` in the `config_resources/` folder, the extension can retrieve the file's contents like this:

```js
const response = await fetch("/config_resources/config.json");
const jsonData = await response.json();
```

If the extension attempts to use another security origin, say https://www.mozilla.org, the browser disallows it unless the extension has requested the appropriate cross-origin permissions.

## Request cross-origin permissions

To request access to servers outside an extension's origin, add hosts, [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), or both to the [host_permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) or [optional_host_permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) manifest file keys.

```json
{
  "name": "My extension",
  ...
  "host_permissions": [
    "https://www.mozilla.org/"
  ],
  ...
}

```

Host permissions values can be base URLs like these:

- `"https://www.mozilla.org/"`
- `"https://www.gmail.com/"`

Or match patterns like these:

- `"https://*.mozilla.org/"`
- `"https://mozilla.org/*"`
- `"https://*/"`

A match pattern of `"https://*/"` allows HTTPS access to all reachable domains. Only the host portion of the
match pattern](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) is applied; any path information is ignored.

Also, note that access is granted by host and scheme. If an extension wants secure and non-secure HTTP access to a host or hosts, it can declare the permissions using a wildcard (e.g., `*://www.mozilla.org/`) or, more broadly, `<all_urls>`.

> [!NOTE]
> In Chrome, if an extension wants secure and non-secure HTTP access to a host or hosts, it must declare the permissions separately:
>
> ```json
> "host_permissions": [
>   "http://www.google.com/",
>   "https://www.google.com/"
> ]
> ```

## Security considerations

### Avoid cross-site scripting vulnerabilities

When using resources retrieved with `fetch()`, your offscreen document, side panel, or popup must be careful to avoid [cross-site scripting](/en-US/docs/Web/Security/Attacks/XSS) attacks. Specifically, avoid using APIs, such as `innerHTML`, that can enable such attacks. For example:

```js
const response = await fetch("https://api.example.com/data.json");
const jsonData = await response.json();
// WARNING! Might be injecting a malicious script!
document.getElementById("resp").innerHTML = jsonData;
...
```

Instead, use APIs that do not run scripts. So, a safer version of the previous code example is:

```js
const response = await fetch("https://api.example.com/data.json");
const jsonData = response.json();
// textContent prevents the attacker from injecting HTML elements.
document.getElementById("resp").textContent = jsonData;
```

See [Safely insert external content into a page](en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) for more information.

### Limit content script access to cross-origin requests

When performing cross-origin requests for a content script, [guard against malicious web pages](https://developer.chrome.com/docs/extensions/develop/security-privacy/stay-secure#content_scripts) that try to impersonate a content script. In particular, don't allow content scripts to request an arbitrary URL.

Take an example where your extension performs a cross-origin request so a content script can get an item's price. An insecure approach is for the content script to specify the exact resource fetched by the background page. For example:

In the background script:

```js
browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == 'fetchUrl') {
      // WARNING: SECURITY PROBLEM - a malicious web page may abuse
      // the message handler to get access to arbitrary cross-origin
      // resources.
      fetch(request.url)
        .then(response => response.text())
        .then(text => sendResponse(text))
        .catch(error => ...)
      return true;  // Responds asynchronously.
    }
  }
);
```

Then in the content script:

```js
browser.runtime.sendMessage(
  {
    contentScriptQuery: "fetchUrl",
    url: `https://another-site.com/price-query?itemId=${encodeURIComponent(request.itemId)}`,
  },
  (response) => parsePrice(response.text()),
);
```

In this code, the content script can ask the extension to fetch any URL the extension has access to. A malicious web page could forge messages and get the extension to provide access to cross-origin resources.

Instead, design message handlers that limit the resources fetched. In this more secure example, only the `itemId` is provided by the content script and not the full URL.

```js
browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == 'queryPrice') {
      // Validate the itemId's type
      if (typeof request.itemId !== 'number') {
        throw new TypeError(`queryPrice expected a value of type 'number' but received '${typeof request.itemId}'`);
      }
      const url = `https://another-site.com/price-query?itemId=${encodeURIComponent(request.itemId)}`
      fetch(url)
        .then(response => response.text())
        .then(text => parsePrice(text))
        .then(price => sendResponse(price))
        .catch(error => ...)
      return true;  // Responds asynchronously.
    }
  }
);
```

And, in the content script:

```js
browser.runtime.sendMessage(
  {contentScriptQuery: 'queryPrice', itemId: 12345},
  price => ...
);
```

### Prefer HTTPS over HTTP

Take care with resources retrieved using HTTP. If your extension is used on a hostile network, a network attacker (a.k.a. the ["man-in-the-middle"](/en-US/docs/Glossary/MitM)) could modify the response and, potentially, attack your extension. Instead, use HTTPS whenever possible.

### Adjust the extension's content security policy

If you modify the default [Content Security Policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for your extension by adding a `content_security_policy` attribute to your manifest, you must ensure that any hosts you want to connect to are allowed. While the default policy doesn't restrict connections to hosts, be careful when adding the `connect-src` or `default-src` directives.

> [!NOTE]
> It's dangerous to remove Content Security Policy headers and other related security mechanisms. Make the minimum changes possible to allow extension scripts, such as adding the extension's origin or random nonces to the `script-src` list.