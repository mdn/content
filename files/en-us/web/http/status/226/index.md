---
title: 226 IM Used
slug: Web/HTTP/Status/226
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc3229.html#section-10.4.1
---

{{HTTPSidebar}}

The HTTP **`226 IM Used`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code indicates that the server is returning a {{Glossary("delta")}} in response to a {{HTTPMethod("GET")}} request.
It is used in the context of _HTTP delta encodings_.

IM stands for _instance manipulation_, which refers to the algorithm generating a _delta_.
In delta encoding, a client sends a {{HTTPMethod("GET")}} request with two headers: `A-IM:`, which indicates a preference for a differencing algorithm, and {{HTTPHeader("If-None-Match")}}, which specifies the version of a resource it has.
The server responds with deltas relative to a given base document, rather than the document in full.
This response uses the `226` status code, an `IM:` header that describes the differencing algorithm used, and may include a `Delta-Base:` header with the {{HTTPHeader("ETag")}} matching the base document associated to the delta.

> [!WARNING]
> Poor support for HTTP delta encodings means there are few implementations.
> Instead, most systems rely solely on [compression methods](/en-US/docs/Web/HTTP/Compression) to reduce bandwidth, although a combination of compression and delta encodings is possible.
>
> Even if the client and server support delta encodings, proxies or caches may not, and the complexity of adding HTTP delta encodings to a system may outweigh the benefits.

## Status

```plain
226 IM Used
```

## Examples

### Receiving a `208` with the `vcdiff` delta algorithm

In the following `GET` request, a client requests a resource and has a cached version with the ETag `abcd123`.
The `A-IM:` header indicates a preference for `vcdiff` and `diffe` delta algorithms:

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

Assuming the server supports delta encodings, it responds with the diff since the version with the ETag `abcd123`.
The `IM` header indicates that the `vcdiff` algorithm is used, and the `Delta-Base:` header indicates that the diff is based on a resource with ETag `abcd123`.

```http
HTTP/1.1 226 IM Used
ETag: "5678a23"
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
