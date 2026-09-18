---
title: Make cross-origin network requests
slug: Mozilla/Add-ons/WebExtensions/Cross-origin_network_requests
page-type: guide
sidebar: addonsidebar
---

Extensions often need to make an HTTP request to an origin other than its own. For example, calling a REST API from a background script, or fetching data from a third-party domain in a content script. [Content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), [background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), and other extension pages (such as options pages and popups) can make these requests using the [`window.XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) and [`window.fetch()`](/en-US/docs/Web/API/Fetch_API) APIs.

This article explains how these APIs behave when called from extension code. It also explains how these requests are "privileged" and how cookies are handled.

> [!NOTE]
> This article is about extension code making network requests. To observe, block, or modify requests made elsewhere, such as by a web page, use the {{WebExtAPIRef("declarativeNetRequest")}} or {{WebExtAPIRef("webRequest")}} API instead. See [Intercept HTTP requests](/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests).

## Example

This background script fetches JSON data from `https://example.org/` and logs it to the console:

```js
async function getData() {
  const response = await fetch("https://example.org/data.json");
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  console.log(await response.json());
}

getData();
```

For the request to succeed, the extension must have a host permission covering `https://example.org/`:

```json
{
  "name": "fetch-example",
  "version": "1.0",
  "manifest_version": 3,
  "host_permissions": ["https://example.org/*"],
  "background": {
    "scripts": ["background.js"],
    "service_worker": "background.js"
  }
}
```

## Privileged XHR and fetch instances

Extension code doesn't use the same `XMLHttpRequest` and `fetch()` instances that a web page's scripts would. Instead, it exposes more privileged instances of these APIs, which run with the security domain of the extension itself, rather than that of the web page a content script is running in. This means:

- The request isn't subject to the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) that applies to requests made by a page's scripts. Instead, whether a cross-origin request succeeds depends on the extension's host permissions (Manifest V2), or on the destination server opting in with [CORS](/en-US/docs/Web/HTTP/Guides/CORS) (Manifest V3).
- The request doesn't automatically set the [`Origin`](/en-US/docs/Web/HTTP/Reference/Headers/Origin) and [`Referer`](/en-US/docs/Web/HTTP/Reference/Headers/Referer) headers to the requesting page's URL, as a request from the page would. This is often desirable to prevent the request from revealing its cross-origin nature.
- Header restrictions that normally apply to page scripts are relaxed. For example, a privileged instance can set the `Origin` header explicitly, which a page script cannot, because `Origin` is a {{Glossary("Forbidden_request_header", "forbidden request header")}} for non-privileged requests.
- Background scripts, extension pages, and popups always make requests through a privileged instance, because there's no less-privileged "page" context for them to fall back to. Content scripts get the same privileged instance and run in the page's context.

### Cross-domain permissions

Content scripts get the same cross-domain privileges as the rest of the extension. If the extension has requested cross-domain access for a domain using the [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) key in `manifest.json`, then its content scripts get access to that domain too. Background scripts and other extension pages likewise need [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for a host before they can make cross-origin requests to it.

#### CORS needed for Manifest V3 content scripts

In Manifest V3, content scripts can perform cross-origin requests when the destination server opts in using [CORS](/en-US/docs/Web/HTTP/Guides/CORS); host permissions don't work. Host permissions continue to apply to requests from regular extension pages and background scripts.

In Chrome, starting with version 73, and Firefox, starting with version 101, when using Manifest V3, content scripts are subject to the same [CORS](/en-US/docs/Web/HTTP/Guides/CORS) policy as the page they run in. Only background scripts have elevated cross-domain privileges. See [Changes to Cross-Origin Requests in Chrome Extension Content Scripts](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches/).

### Content like requests

In Manifest V2 (Firefox and Safari), extensions that need to make requests that behave as if the content itself sent them can use `content.XMLHttpRequest` and `content.fetch()` instead, from a content script.

For cross-browser extensions, these methods must be detected at runtime.

This isn't possible in Manifest V3 because `content.XMLHttpRequest` and `content.fetch()` aren't available.

### Relative and absolute URLs in content scripts

In Manifest V2 (Firefox and Safari), content script requests (for example, using [`fetch()`](/en-US/docs/Web/API/Fetch_API/Using_Fetch)) happen in the context of an extension, so your extension must provide an absolute URL to reference page content.

In Manifest V3, these requests occur in the page context, so they are made to a relative URL. For example, `/api` is sent to `https://«current page URL»/api`.

## Cookies

Setting the `Origin` header to a specific value doesn't, by itself, cause the browser to send that domain's cookies with the request. Cookie handling is controlled separately, by the request's credentials mode: the [`credentials`](/en-US/docs/Web/API/RequestInit#credentials) option for `fetch()`, or [`XMLHttpRequest.withCredentials`](/en-US/docs/Web/API/XMLHttpRequest/withCredentials) for `XMLHttpRequest`.

A privileged request is always considered cross-origin; its origin is the extension's `moz-extension://` (or `chrome-extension://`), not the target site's origin. Therefore, cookies for the destination domain are only included if the request opts in, using `credentials: "include"` (for `fetch()`) or `withCredentials = true` (for `XMLHttpRequest`). When it does, the browser attaches the cookies for the target domain from the current cookie store, subject to each cookie's `SameSite`, `Secure`, and partitioning attributes, exactly as it would for any other cross-origin request that includes credentials. The value of the `Origin` header has no bearing on this.

## Cookie stores

There is currently no way for an extension to specify which [`cookieStoreId`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities#using_cookiestoreid) (for example, a particular container) a `fetch()` or `XMLHttpRequest` call made from a background script or other extension page should use. These requests always use the default cookie store, not a specific container's, so they can't be used to send or receive cookies scoped to a particular container. See [Firefox bug 1670278](https://bugzil.la/1670278) for the status of adding this capability.

## Cross-browser compatibility

### Chrome: no `XMLHttpRequest` in Manifest V3 service workers

In Chrome, a Manifest V3 background script runs as a service worker. A web-platform restriction on service workers is that they don't implement `XMLHttpRequest`. Calling `XMLHttpRequest` from a Chrome Manifest V3 background service worker throws a `ReferenceError`, so background code must use `fetch()` instead. Content scripts and other extension pages that run in a normal DOM context, rather than a service worker, can use `XMLHttpRequest` in Chrome.

Firefox doesn't use service workers for Manifest V3 background scripts, so it doesn't have this restriction, and `XMLHttpRequest` remains available.

Using `fetch()` is recommended, as it works in all contexts across Firefox, Chrome, and Safari.

## Security considerations

Because extension code runs with more privilege than a web page, and content scripts in particular can be exposed to untrusted page content. This section outlines some considerations to avoid issues.

### Avoid cross-site scripting vulnerabilities

Don't insert untrusted strings into the DOM using unsafe methods such as `innerHTML`, and be careful about trusting messages received from the page. See [Safely inserting external content into a page](/en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) and the warning in [Communicating with the web page](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_the_web_page).

### Limit content script access to cross-origin requests

A compromised content script can make cross-origin requests to any host the extension has been granted access to. Therefore, only request the [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) your content scripts need, rather than broad or `<all_urls>` permissions. See [Cross-domain permissions](#cross-domain_permissions) above.

### Prefer HTTPS over HTTP

Where possible, use `https://` (and `wss://`) in match patterns and host permissions rather than `http://`. This ensures that content scripts and the requests they make aren't exposed to network-level tampering. See [Upgrade insecure network requests in Manifest V3](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#upgrade_insecure_network_requests_in_manifest_v3).

### Adjust the content security policy

In Manifest V3, content scripts share the extension's content security policy (CSP), which restricts capabilities such as `eval()` and inline scripts. See [Content Security Policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for the default policy and advice on adjusting it.

## See also

- {{WebExtAPIRef("webRequest")}}
- [Content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
- [Intercept HTTP requests](/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
