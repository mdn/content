---
title: 226 IM Used
slug: Web/HTTP/Status/226
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc3229.html#section-10.4.1
---

{{HTTPSidebar}}

> **Warning:** Browsers don't support **delta encoding** with HTTP.
> This status code is sent back by custom servers used by specific clients.

The HTTP **`226 IM Used`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and is used in the context of delta encodings for a server to indicate that it is returning a _delta_ in response to a {{HTTPMethod("GET")}} request.
IM stands for _instance manipulations_, the term used to describe an algorithm generating a _delta_.

With delta encoding, a server responds to {{HTTPMethod("GET")}} requests with differences called _deltas_ relative to a given base document rather than the document in full.
The client uses the `A-IM:` HTTP header to indicate which differencing algorithm to use and the {{HTTPHeader("If-None-Match")}} header to hint the server about the most recent version it has.
The server generates a delta, sending it back in an HTTP response with the `226` status code, an `IM:` header with the name of the algorithm used, and a `Delta-Base:` header with the {{HTTPHeader("ETag")}} matching the base document associated to the delta.

## Status

```plain
226 IM Used
```

## Examples

TODO

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("200")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
