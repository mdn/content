---
title: 226 IM Used
slug: Web/HTTP/Status/226
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc3229.html#section-10.4.1
---

{{HTTPSidebar}}

The HTTP **`226 IM Used`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and is used in the context of _HTTP delta encodings_ for a server to indicate that it is returning a {{Glossary("delta")}} in response to a {{HTTPMethod("GET")}} request.
IM stands for _instance manipulations_, the term used to describe an algorithm generating a _delta_.

With delta encoding, a client sends a {{HTTPMethod("GET")}} request with an `A-IM:` HTTP header that indicates a preference for a differencing algorithm and the {{HTTPHeader("If-None-Match")}} header to tell the server what version of a resource it has.
The server responds with deltas relative to a given base document rather than the document in full.
The server's HTTP response uses the `226` status code, an `IM:` header that describes the diff algorithm used, and may include a `Delta-Base:` header with the {{HTTPHeader("ETag")}} matching the base document associated to the delta.

> **Warning:**
> Poor support for HTTP delta encodings means there are few implementations, and instead most systems rely solely on [compression methods](/en-US/docs/Web/HTTP/Compression) to reduce bandwidth, although a combination of compression and delta encodings is possible.
> Even if the client and server support delta encodings, proxies or caches may not, and the complexity of adding HTTP delta encodings to a system may outweigh the benefits.

## Status

```plain
226 IM Used
```

## Examples

### Response using vcdiff algorithm

In the following `GET` request, a client requests a resource and has a cached version with the ETag `abcd123`.
The `A-IM:` header indicates a preference for `vcdiff` and `diffe` delta algorithms:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Given support for delta encodings, the server responds with the diff since a version with the ETag `abcd123`.
The `IM` header indicates that the `vcdiff` algorithm is used, and the `Delta-Base:` header indicates that the diff is based on a resource with ETag `abcd123`.

```http
HTTP/1.1 226 IM Used
ETag: "efgh5678"
IM: vcdiff
Content-Type: text/plain
Content-Length: 123
Delta-Base: abcd123

...
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("200")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [Syndication feed deltas help reduce subscription bandwidth costs](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
