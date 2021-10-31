---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
tags:
  - Add-ons
  - Extensions
  - Proxy
  - ProxyInfo
  - Type
  - WebExtensions
browser-compat: webextensions.api.proxy.ProxyInfo
---
{{AddonSidebar()}}

Contains information about a proxy. This object, or an array of these objects, is returned from the listener to {{WebExtAPIRef("proxy.onRequest")}}. It instructs the browser whether to proxy the request, and if so, which proxy to use.

## Type

Values of this type are objects. They contain the following properties:

- `type`

  - : `string`. This describes whether to proxy at all, and if so, what kind of proxy to use. It may take one of the following values:

    - `"direct"`: don't proxy the request. If this value is given, all other properties of this object are ignored.
    - `"http"`: HTTP proxy (or SSL CONNECT for HTTPS)
    - `"https"`: HTTP proxying over TLS connection to proxy
    - `"socks"`: SOCKS v5 proxy
    - `"socks4"`: SOCKS v4 proxy

- `host`
  - : `string`. The hostname of the proxy server. Mandatory unless `type` is `"direct"`.
- `port`
  - : `number`. The port number of the proxy server. Mandatory unless `type` is `"direct"`.
- `username`
  - : `string`. Username for the proxy service. This is usable with "socks". For HTTP proxy authorizations, use [`webRequest.onAuthRequired`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired "Fired when the server sends a 401 or 407 status code: that is, when the server is asking the client to provide authentication credentials such as a username and password.").
- `password`
  - : `string`. Password for the proxy service. This is usable with "socks". For HTTP proxy authorizations, use [`webRequest.onAuthRequired`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired "Fired when the server sends a 401 or 407 status code: that is, when the server is asking the client to provide authentication credentials such as a username and password.").
- `proxyDNS`
  - : `boolean`. If true, the proxy server is used to resolve certain DNS queries (only usable with `"socks4"` and `"socks"`). Defaults to `false`.
- `failoverTimeout`
  - : `number`.  Failover timeout in seconds. If the connection fails to connect the proxy server after this number of seconds, the next proxy server in the array returned from the `proxy.onRequest` listener will be used.
- `proxyAuthorizationHeader`

  - : `string.` This string, if set to non-empty, is passed directly as a value to the {{httpheader("Proxy-Authorization")}} request header sent to HTTP proxies as part of plain HTTP requests and CONNECT requests. In other words, this can be used to directly authenticate to HTTP proxies requiring (non-challenging) authentication.

    For instance, if you want to send "username" and "password" for "basic" authentication, you can set the `proxyAuthorizationHeader` property to `Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

- `connectionIsolationKey` {{optional_inline}}
  - : `string.` An optional key used for additional isolation of this proxy connection.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}
