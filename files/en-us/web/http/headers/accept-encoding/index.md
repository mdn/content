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

The **`Accept-Encoding`** request HTTP header indicates the content encoding (usually a compression algorithm) that the client can understand.  The server uses [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) to select one of the proposals and informs the client of that choice with the {{HTTPHeader("Content-Encoding")}} response header.

Even if both the client and the server support the same compression algorithms, the server may choose not to compress the body of a response if the `identity` value is also acceptable. Two common cases lead to this:

- The data to be sent is already compressed, therefore a second compression will not reduce the transmitted data size. This is true for pre-compressed image formats (JPEG, for instance);
- The server is overloaded and cannot allocate computing resources to perform the compression. For example, Microsoft recommends not to compress if a server uses more than 80% of its computational power.

As long as the `identity;q=0` or `*;q=0` directives do not explicitly forbid the `identity` value that means no encoding, the server must never return a {{HTTPStatus("406")}} `Not Acceptable` error.

> **Note:**
>
> - An IANA registry maintains [a complete list of official content encodings](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1).
> - Two other content encodings, namely `bzip` and `bzip2`, are sometimes used, These non-standard encodings implement the algorithm that these two UNIX programs use. Note that `bzip` was discontinued due to patent licensing issues.

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

```http
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
  - : A compression format that uses the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) with a 32-bit CRC.
- `compress`
  - : A compression format that uses the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) algorithm.
- `deflate`
  - : A compression format that uses the [zlib](https://en.wikipedia.org/wiki/Zlib) structure with the [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) compression algorithm.
- `br`
  - : A compression format that uses the [Brotli](https://en.wikipedia.org/wiki/Brotli) algorithm.
- `identity`
  - : Indicates the identity function (that is, without modification or compression). This value is always considered as acceptable, even if omitted.
- `*`
  - : Matches any content encoding not already listed in the header. This is the default value if the header is not present. This directive does not suggest that any algorithm is supported but indicates that no preference is expressed.
- `;q=` (qvalues weighting)
  - : Any value is placed in an order of preference expressed using a relative [quality value](/en-US/docs/Glossary/Quality_values) called _weight_.

## Examples

```http
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
- A header with the result of the content negotiation: {{HTTPHeader("Content-Encoding")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
