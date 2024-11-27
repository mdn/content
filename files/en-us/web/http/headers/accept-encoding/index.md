---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
page-type: http-header
browser-compat: http.headers.Accept-Encoding
---

{{HTTPSidebar}}

The HTTP **`Accept-Encoding`** {{glossary("request header", "request")}} and {{glossary("response header")}} indicates the content encoding (usually a compression algorithm) that the sender can understand.
In requests, the server uses [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) to select one of the encoding proposals from the client and informs the client of that choice with the {{HTTPHeader("Content-Encoding")}} response header.
In responses, it provides information about which content encodings the server can understand in messages to the requested resource, so that the encoding can be used in subsequent requests to the resource.
For example, `Accept-Encoding` is included in a {{HTTPStatus("415", "415 Unsupported Media Type")}} response if a request to a resource (e.g., {{HTTPMethod("PUT")}}) used an unsupported encoding.

Even if both the client and the server support the same compression algorithms, the server may choose not to compress the body of a response if the `identity` value is also acceptable.
This happens in two common cases:

1. The data is already compressed, meaning a second round of compression will not reduce the transmitted data size, and may actually increase the size of the content in some cases.
   This is true for pre-compressed image formats (JPEG, for instance).
2. The server is overloaded and cannot allocate computing resources to perform the compression. For example, Microsoft recommends not to compress if a server uses more than 80% of its computational power.

As long as the `identity;q=0` or `*;q=0` directives do not explicitly forbid the `identity` value that means no encoding, the server must never return a {{HTTPStatus("406", "406 Not Acceptable")}} error.

> [!NOTE]
> IANA maintains [a list of official content encodings](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> The `bzip` and `bzip2` encodings are non-standard, but may be used in some cases, particularly for legacy support.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}, {{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: zstd
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the quality value syntax:
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
- `zstd`
  - : A compression format that uses the [Zstandard](https://en.wikipedia.org/wiki/Zstd) algorithm.
- `identity`
  - : Indicates the identity function (that is, without modification or compression). This value is always considered as acceptable, even if omitted.
- `*` (wildcard)
  - : Matches any content encoding not already listed in the header. This is the default value if the header is not present. This directive does not suggest that any algorithm is supported but indicates that no preference is expressed.
- `;q=` (qvalues weighting)
  - : Any value is placed in an order of preference expressed using a relative [quality value](/en-US/docs/Glossary/Quality_values) called _weight_.

## Examples

### Default Accept-Encoding values

Browser navigation typically has the following `Accept-Encoding` request header value:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### Weighted Accept-Encoding values

The following header shows `Accept-Encoding` preferences using a quality value between `0` (lowest priority) and `1` (highest-priority).
Brotli compression is weighted at `1.0`, making `br` the client's first choice, followed by `gzip` at `0.8` priority, and then any other content encoding at `0.1`:

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- A header with the result of the content negotiation: {{HTTPHeader("Content-Encoding")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli compression")}}
- {{Glossary("GZip compression")}}
- {{Glossary("Zstandard compression")}}
