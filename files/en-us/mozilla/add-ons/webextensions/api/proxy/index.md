---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
tags:
  - API
  - Add-ons
  - Proxy
  - WebExtensions
browser-compat: webextensions.api.proxy
---
{{AddonSidebar}}

Use the proxy API to proxy web requests. You can use the {{WebExtAPIRef("proxy.onRequest")}} event listener to intercept web requests, and return an object that describes whether and how to proxy them.

The advantage of the {{WebExtAPIRef("proxy.onRequest")}} approach is that the code that implements your proxy policy runs in your extension's background script, so it gets full access to the WebExtension APIs available to your extension (including, for example, access to your extension's [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage) and networking APIs like [`dns`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Apart from this API, extensions can also use the [`browserSettings.proxyConfig`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) property to configure global proxy settings.

Google Chrome provides [an extension API also called "proxy"](https://developer.chrome.com/extensions/proxy) which is functionally similar to this API, in that extensions can use it to implement a proxying policy. However, the design of the Chrome API is completely different to this API. Because this API is incompatible with the Chrome `proxy` API, this API is only available through the `browser` namespace.

To use this API you need to have the "proxy" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Also, where you want to intercept requests, you also need [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the URLs of intercepted requests.

## Types

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Describes a proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Contains information about a web request that the browser is about to make.

## Properties

- {{WebExtAPIRef("proxy.settings")}}
  - : Get and set proxy settings.

## Functions

> **Warning:** You should not use these methods ({{WebExtAPIRef("proxy.register()")}} or {{WebExtAPIRef("proxy.unregister()")}}) to register and remove an extended [Proxy Auto-Configuration (PAC) file](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register#pac_file_specification). They were deprecated in Firefox 68 and removed in Firefox 71.

- {{WebExtAPIRef("proxy.register()")}} {{Deprecated_Inline}}
  - : Registers the given proxy script.
- {{WebExtAPIRef("proxy.unregister()")}} {{Deprecated_Inline}}
  - : Unregisters the proxy script.

## Events

- {{WebExtAPIRef("proxy.onError")}}
  - : Fired when the system encounters an error running the PAC script or the `onRequest` listener.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Fired when a web request is about to be made, giving the extension an opportunity to proxy it.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
