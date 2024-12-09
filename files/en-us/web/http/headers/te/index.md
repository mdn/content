---
title: TE
slug: Web/HTTP/Headers/TE
page-type: http-header
browser-compat: http.headers.TE
---

{{HTTPSidebar}}

The HTTP **`TE`** {{Glossary("request header")}} specifies the transfer encodings the user agent is willing to accept.
The transfer encodings are for message compression and chunking of data during transmission.

Transfer encodings are applied at the protocol layer, so an application consuming responses receives the body as if no encoding was applied.

> [!NOTE]
> In [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) and [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting), the `TE` header field is only accepted if the `trailers` value is set.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
TE: compress
TE: deflate
TE: gzip
TE: trailers
```

Multiple directives in a comma-separated list with {{glossary("quality values")}} as weights:

```http
TE: trailers, deflate;q=0.5
```

## Directives

- `compress`
  - : A format using the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) algorithm is accepted as a transfer coding name.
- `deflate`
  - : Using the [zlib](https://en.wikipedia.org/wiki/Zlib) structure is accepted as a transfer coding name.
- `gzip`
  - : A format using the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), with a 32-bit CRC is accepted as a transfer coding name.
- `trailers`
  - : Indicates that the client will not discard trailer fields in a [chunked transfer coding](/en-US/docs/Web/HTTP/Headers/Transfer-Encoding#chunked).
- `q`
  - : When multiple transfer codings are acceptable, the `q` parameter ({{glossary("quality values")}}) syntax orders codings by preference.

Note that `chunked` is always supported by HTTP/1.1 recipients, so you don't need to specify it using the `TE` header.
See the {{HTTPHeader("Transfer-Encoding")}} header for more details.

## Examples

### Using the TE header with quality values

In the following request, the client indicates a preference for `gzip`-encoded responses with `deflate` as a second preference using a `q` value:

```http
GET /resource HTTP/1.1
Host: example.com
TE: gzip; q=1.0, deflate; q=0.8
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
