---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
page-type: webextension-api-type
browser-compat: webextensions.api.proxy.ProxyInfo
sidebar: addonsidebar
---

Contains information about a proxy. This object, or an array of these objects, is returned from the listener to {{WebExtAPIRef("proxy.onRequest")}}. It instructs the browser whether to proxy the request, and if so, which proxy to use.

## Type

Values of this type are objects. They contain the following properties:

- `type`
  - : `string`. This describes whether to proxy at all, and if so, what kind of proxy to use. It may take one of the following values:
    - `"direct"`: don't proxy the request. If this value is given, all other properties of this object are ignored. However, this setting doesn't override any [proxy set by the user](https://support.mozilla.org/en-US/kb/connection-settings-firefox). Use {{WebExtAPIRef("proxy.settings")}} to check whether a manual proxy is being used and, if necessary, monitor those settings for changes using [`BrowserSetting.onChange`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP proxy (or SSL CONNECT for HTTPS)
    - `"https"`: HTTP proxying over TLS connection to proxy
    - `"masque"`: MASQUE (Multiplexed Application Substrate over QUIC Encryption) proxy
    - `"socks"`: SOCKS v5 proxy
    - `"socks4"`: SOCKS v4 proxy

- `host`
  - : `string`. The hostname of the proxy server. Mandatory unless `type` is `"direct"`.
- `port`
  - : `number`. The port number of the proxy server. Mandatory unless `type` is `"direct"`.
- `masqueTemplate`
  - : `string`. The URI template for the MASQUE proxy, starting from the path component of the URI. This must contain the `target_host` and `target_port` template variables as defined in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html#name-client-configuration). For example, `/.well-known/masque/udp/{target_host}/{target_port}/`. Must be set when the proxy type is `"masque"`.
- `username` {{optional_inline}}
  - : `string`. Username for the proxy service. This is usable with "socks". For HTTP proxy authorizations, use [`webRequest.onAuthRequired`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired). Must not be set when proxy is `"masque"`.
- `password` {{optional_inline}}
  - : `string`. Password for the proxy service. This is usable with "socks". For HTTP proxy authorizations, use [`webRequest.onAuthRequired`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired). Must not be set when proxy is `"masque"`.
- `proxyDNS`
  - : `boolean`. If true, the proxy server is used to resolve certain DNS queries (only usable with `"socks4"` and `"socks"`). Defaults to `false`.
- `failoverTimeout`
  - : `number`. Failover timeout in seconds. If the connection fails to connect the proxy server after this number of seconds, the next proxy server in the array returned from the `proxy.onRequest` listener will be used.
- `proxyAuthorizationHeader`
  - : `string`. When set, this is passed to the {{httpheader("Proxy-Authorization")}} request header sent to HTTP or HTTPS proxies as part of a [CONNECT](/en-US/docs/Web/HTTP/Reference/Methods/CONNECT) request. Used to authenticate to HTTP and HTTPS proxies that allow non-challenging authentication.

    For instance, if you want to send "username" and "password" for "basic" authentication, you can set the `proxyAuthorizationHeader` property to `Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. An optional key used for additional isolation of this proxy connection.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
