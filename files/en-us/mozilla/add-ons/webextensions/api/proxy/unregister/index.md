---
title: proxy.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/proxy/unregister
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Proxy
  - Reference
  - WebExtensions
  - unregister
browser-compat: webextensions.api.proxy.unregister
---
{{AddonSidebar()}}{{deprecated_header}}

> **Warning:** This method was deprecated in Firefox 68 and removed in Firefox 71. In Firefox 68–70, calling this method logs an error message to the console:
>
> ![](proxy_unregister_warning.png)

Unregisters a [Proxy Auto-Configuration (PAC) file](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file). that was registered by an earlier call to {{WebExtAPIRef("proxy.register()")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let unregistering = browser.proxy.unregister()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the PAC file has been unregistered.

## Examples

```js
browser.proxy.unregister();
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
