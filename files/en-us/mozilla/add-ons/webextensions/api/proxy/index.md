---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
page-type: webextension-api
browser-compat: webextensions.api.proxy
---

{{AddonSidebar}}

Use the proxy API to proxy web requests. You can use the {{WebExtAPIRef("proxy.onRequest")}} event listener to intercept web requests, and return an object that describes whether and how to proxy them.

The advantage of the {{WebExtAPIRef("proxy.onRequest")}} approach is that the code that implements your proxy policy runs in your extension's background script, so it gets full access to the WebExtension APIs available to your extension (including, for example, access to your extension's [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage) and networking APIs like [`dns`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Apart from this API, extensions can also use the [`browserSettings.proxyConfig`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) property to configure global proxy settings.

Google Chrome provides [an extension API also called "proxy"](https://developer.chrome.com/docs/extensions/reference/proxy/) which is functionally similar to this API, in that extensions can use it to implement a proxying policy. However, the design of the Chrome API is completely different to this API. Because this API is incompatible with the Chrome `proxy` API, this API is only available through the `browser` namespace.

To use this API you need to have the "proxy" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Also, where you want to intercept requests, you also need [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the URLs of intercepted requests.

> **Note:** The "proxy" permission requires `"strict_min_version"` to be set to "91.1.0" or above. To use this permission, add or update the [`"browser_specific_settings"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in your [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) to specify a minimum Firefox version. See [Securing the proxy API for Firefox add-ons](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/) for more information.

> **Note:** The browser can make speculative connections, where it determines that a request to a URI may be coming soon. This type of connection does not provide valid tab information, so request details such as `tabId`, `frameId`, `parentFrameId`, etc. are inaccurate. These connections have a {{WebExtAPIRef("webRequest.ResourceType")}} of `speculative`.

## Types

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Describes a proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Contains information about a web request that the browser is about to make.

## Properties

- {{WebExtAPIRef("proxy.settings")}}
  - : Get and set proxy settings.

## Events

- {{WebExtAPIRef("proxy.onError")}}
  - : Fired when the system encounters an error running the PAC script or the `onRequest` listener.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Fired when a web request is about to be made, giving the extension an opportunity to proxy it.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
