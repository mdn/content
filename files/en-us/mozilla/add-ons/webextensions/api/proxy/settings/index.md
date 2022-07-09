---
title: proxy.settings
slug: Mozilla/Add-ons/WebExtensions/API/proxy/settings
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Proxy
  - Reference
  - Settings
  - WebExtensions
browser-compat: webextensions.api.proxy.settings
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to change the browser's proxy settings.

> **Note:** The ability to change proxy settings requires private window access because proxy settings affect both private and non-private windows. Therefore, if an extension has not been granted private window permission, calls to `proxy.settings.set()` will throw an exception.

The underlying value is an object with the properties listed below.

When setting this object, all properties are optional. Note that any properties that are omitted will be reset to their default value.

- `autoConfigUrl` {{optional_inline}}
  - : `string`. A URL to use to configure the proxy.
- `autoLogin` {{optional_inline}}
  - : `boolean`. Do not prompt for authentication if the password is saved. Defaults to `false`.
- `ftp` {{optional_inline}} {{Deprecated_Inline}}
  - : `string`. The address of the FTP proxy. Can include a port.
- `http` {{optional_inline}}
  - : `string`. The address of the HTTP proxy. Can include a port.
- `httpProxyAll` {{optional_inline}}
  - : `boolean`. Use the HTTP proxy server for all protocols. Defaults to `false`.
- `passthrough` {{optional_inline}}
  - : `string`. A comma-separated list of hosts which should not be proxied. Defaults to "localhost, 127.0.0.1".
- `proxyDNS` {{optional_inline}}
  - : `boolean`. Proxy DNS when using SOCKS5. Defaults to `false`.
- `proxyType` {{optional_inline}}
  - : `string`. The type of proxy to use. This may take any one of the following values: "none", "autoDetect", "system", "manual", "autoConfig". Defaults to "system".
- `socks` {{optional_inline}}
  - : `string`. The address of the SOCKS proxy. Can include a port.
- `socksVersion` {{optional_inline}}
  - : `integer`. The version of the SOCKS proxy. May be 4 or 5. Defaults to 5.
- `ssl` {{optional_inline}}
  - : `string`. The address of the SSL proxy. Can include a port.

## Examples

```js
let proxySettings = {
  proxyType: "manual",
  http: "http://proxy.org:8080",
  socksVersion: 4,
  passthrough: ".example.org"
};

browser.proxy.settings.set({value: proxySettings});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
