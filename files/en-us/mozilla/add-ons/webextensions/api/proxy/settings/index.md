---
title: proxy.settings
slug: Mozilla/Add-ons/WebExtensions/API/proxy/settings
page-type: webextension-api-property
browser-compat: webextensions.api.proxy.settings
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object used to change the browser's proxy settings.

> [!NOTE]
> Changing proxy settings requires private browsing window access because proxy settings affect private and non-private windows. Whether an extension can access private browsing windows is under user control. See [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing) for details. Your extension can check whether it has access to private browsing windows using {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}}. If your extension doesn't have private window permission, calls to `proxy.settings.set()` throw an exception.

The underlying value is an object. When setting this object, all properties are optional. Any omitted properties are reset to their default value.

- `autoConfigUrl` {{optional_inline}}
  - : `string`. A URL to use to configure the proxy.
- `autoLogin` {{optional_inline}}
  - : `boolean`. Don't prompt for authentication if the password is saved. Defaults to `false`.
- `ftp` {{optional_inline}} {{Deprecated_Inline}}
  - : `string`. The address of the FTP proxy. Can include a port.
- `http` {{optional_inline}}
  - : `string`. The address of the HTTP proxy. Can include a port.
- `httpProxyAll` {{optional_inline}}
  - : `boolean`. Use the HTTP proxy server for all protocols. Defaults to `false`.
- `passthrough` {{optional_inline}}

  - : `string`. A comma-separated list of hosts that shouldn't be proxied. Can be defined as:

    - `HOST_NAME[:PORT]`, for example: `example.com` or `example.com:1234`
    - `IP_LITERAL[:PORT]`
    - `IP_LITERAL/PREFIX_LENGTH_IN_BITS`, using [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)
    - `<local>`, to bypass proxying for all hostnames that don't contain periods.

    You can use IPv6 addresses. For example, `[::123]`.

    Hosts `localhost`, `127.0.0.1`, and `[::1]` are never proxied.

- `proxyDNS` {{optional_inline}}
  - : `boolean`. Whether to proxy DNS when using a SOCKS proxy. Defaults to `true` when using SOCKS5 and `false` when using SOCKS4. Prior to Firefox 128, it defaulted to `false` for SOCKS4 and SOCKS5.
- `proxyType` {{optional_inline}}
  - : `string`. The type of proxy to use. This may take: "none", "autoDetect", "system", "manual", "autoConfig". Defaults to "system".
- `socks` {{optional_inline}}
  - : `string`. The address of the SOCKS proxy. Can include a port.
- `socksVersion` {{optional_inline}}
  - : `integer`. The version of the SOCKS proxy. May be 4 or 5. Defaults to 5.
- `ssl` {{optional_inline}}
  - : `string`. The address of the TLS/SSL proxy. Can include a port.

## Examples

```js
let proxySettings = {
  proxyType: "manual",
  http: "http://proxy.org:8080",
  socksVersion: 4,
  passthrough: ".example.org",
};

browser.proxy.settings.set({ value: proxySettings });
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
