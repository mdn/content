---
title: Make network requests
slug: Mozilla/Add-ons/WebExtensions/Make_network_requests
page-type: guide
sidebar: addonsidebar
---

Extensions can use the [`fetch()`](/en-US/docs/Web/API/Fetch_API) API to send and receive data from remote servers. A [content script](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) can initiate requests on behalf of the web origin it's injected into and is subject to the [same origin policy](/en-US/docs/Web/Security/Same-origin_policy), meaning that it can only make a request to the same origin as the web page. However, extension origins aren't so limited. A script executing in an extension background page or foreground tab can communicate with remote servers outside of its origin as long as the extension requests the necessary cross-origin permissions.

## Extension origin

Extension execute in their own security origin. An extension can call `fetch()` to get resources within its installation without requesting additional privileges. For example, if an extension contains a JSON file named `config.json` in the `config_resources/` folder, the extension can retrieve the file's contents like this:

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

Cross-origin permission values can be fully qualified host names like these:

- `"https://www.mozilla.org/"`
- `"https://www.gmail.com/"`

Or match patterns like these:

- `"https://*.mozilla.org/"`
- `"https://*/"`

A match pattern of `"https://*/"` allows HTTPS access to all reachable domains. Only the host portion of the
match pattern](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) is applied; any path information is ignored.

Also, note that access is granted by host and scheme. If an extension wants secure and non-secure HTTP access to a host or hosts, it must declare the permissions separately:

```json
"host_permissions": [
  "http://www.mozilla.org/",
  "https://www.mozilla.org/"
]
```

## Security considerations

### Avoid cross-site scripting vulnerabilities

When using resources retrieved with `fetch()`, your offscreen document, side panel, or popup must be careful to avoid [cross-site scripting](/en-US/docs/Web/Security/Attacks/XSS) attacks. Specifically, avoid using APIs, such as `innerHTML`, that can be used to enable such attacks. For example:

```js
const response = await fetch("https://api.example.com/data.json");
const jsonData = await response.json();
// WARNING! Might be injecting a malicious script!
document.getElementById("resp").innerHTML = jsonData;
...
```

Instead, use APIs that do not run scripts. So, safer versions of the previous code example are:

```js
const response = await fetch("https://api.example.com/data.json");
const jsonData = await response.json();
// JSON.parse does not evaluate the attacker's scripts.
let resp = JSON.parse(jsonData);
```

or

```js
const response = await fetch("https://api.example.com/data.json");
const jsonData = response.json();
// textContent does not let the attacker inject HTML elements.
document.getElementById("resp").textContent = jsonData;
```

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

Then. in the content script:

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

### Adjust the content security policy

If you modify the default [Content Security Policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for your extension by adding a `content_security_policy` attribute to your manifest, you must ensure that any hosts you want to connect are allowed. While the default policy doesn't restrict connections to hosts, be careful when adding the `connect-src` or `default-src` directives.
