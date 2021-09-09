---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
tags:
  - Content Negotiation
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.Accept-Encoding
---
{{HTTPSidebar}}

The **`Accept-Encoding`** request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand. Using [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation), the server selects one of the proposals, uses it and informs the client of its choice with the {{HTTPHeader("Content-Encoding")}} response header.

Even if both the client and the server supports the same compression algorithms, the server may choose not to compress the body of a response, if the `identity` value is also acceptable. Two common cases lead to this:

- The data to be sent is already compressed and a second compression won't lead to smaller data to be transmitted. This may be the case with some image formats;
- The server is overloaded and cannot afford the computational overhead induced by the compression requirement. Typically, Microsoft recommends not to compress if a server uses more than 80% of its computational power.

As long as the `identity` value, meaning no encoding, is not explicitly forbidden, by an `identity;q=0` or a `*;q=0` without another explicitly set value for identity, the server must never send back a {{HTTPStatus("406")}} `Not Acceptable` error.

> **Note:**
>
> - An IANA registry maintains [a complete list of official content encodings](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1).
> - Two others content encoding, `bzip` and `bzip2`, are sometimes used, though not standard. They implement the algorithm used by these two UNIX programs. Note that the first one was discontinued due to patent licensing problems.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the {{Glossary("Quality Values", "quality value")}} syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Directives

- `gzip`
  - : A compression format using the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), with a 32-bit CRC.
- `compress`
  - : A compression format using the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) algorithm.
- `deflate`
  - : A compression format using the [zlib](https://en.wikipedia.org/wiki/Zlib) structure, with the [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) compression algorithm.
- `br`
  - : A compression format using the [Brotli](https://en.wikipedia.org/wiki/Brotli) algorithm.
- `identity`
  - : Indicates the identity function (i.e. no compression, nor modification). This value is always considered as acceptable, even if not present.
- `*`
  - : Matches any content encoding not already listed in the header. This is the default value if the header is not present. It doesn't mean that any algorithm is supported; merely that no preference is expressed.
- `;q=` (qvalues weighting)
  - : Any value is placed in an order of preference expressed using a relative [quality value](/en-US/docs/Glossary/Quality_values) called _weight_.

## Examples

```
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- Header with the result of the content negotiation: {{HTTPHeader("Content-Encoding")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
