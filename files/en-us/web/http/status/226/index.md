---
title: 226 IM Used
slug: Web/HTTP/Status/226
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc3229.html#section-10.4.1
---

{{HTTPSidebar}}

> **Note:** Browsers don't support _delta encoding_ with HTTP. This status code is sent back by custom servers used by specific clients.

In the context of delta encodings, the HTTP **`226 IM Used`** status code is set by the server to indicate that it is returning a _delta_ to the {{HTTPMethod("GET")}} request that it received.

With delta encoding a server responds to {{HTTPMethod("GET")}} requests with differences (called _deltas_) relative to a given base document (rather than the current document). The client uses the `A-IM:` HTTP header to indicate which differencing algorithm to use and the `If-None-Match:` header to hint the server about the last version it got. The server generates a delta, sending it back in an HTTP response with the `226` status code and containing the `IM:` (with the name of the algorithm used) and `Delta-Base:` (with the {{HTTPHeader("ETag")}} matching the base document associated to the delta) HTTP headers.

IM stands for _instance manipulations_ the term used to describe an algorithm generating a _delta_.

## Status

```
226 IM Used
```

## Specifications

{{Specifications}}
