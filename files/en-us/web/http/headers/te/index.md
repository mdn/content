---
title: TE
slug: Web/HTTP/Headers/TE
page-type: http-header
browser-compat: http.headers.TE
---

{{HTTPSidebar}}

The HTTP **`TE`** {{Glossary("request header")}} specifies the transfer encodings the user agent is willing to accept.
Some people informally consider "`Accept-Transfer-Encoding`" to be a more intuitive name for this header.

Note that `chunked` is always acceptable for HTTP/1.1 recipients and you don't have to specify `chunked` using the `TE` header.
However, it is useful if the client is accepting trailer fields in a chunked transfer coding using the `trailers` value.

See the {{HTTPHeader("Transfer-Encoding")}} response header for more details on transfer encodings.

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

Multiple directives with {{glossary("quality values")}} as weights:

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
  - : Indicates that the client is willing to accept trailer fields in a chunked transfer coding.
- `q`
  - : When multiple transfer codings are acceptable, the `q` parameter ({{glossary("quality values")}}) syntax can order codings by preference.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
