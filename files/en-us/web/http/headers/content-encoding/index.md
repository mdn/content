---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
tags:
  - HTTP
  - Headers
  - Reference
browser-compat: http.headers.Content-Encoding
---
{{HTTPSidebar}}

The **`Content-Encoding`** {{Glossary("representation header")}} lists any encodings that have been applied to the representation (message payload), and in what order.
This lets the recipient know how to decode the representation in order to obtain the original payload format.
Content encoding is mainly used to compress the message data without losing information about the origin media type.

Note that the original media/content type is specified in the {{HTTPHeader("Content-Type")}} header, and that the `Content-Encoding` applies to the representation, or "coded form", of the data. If the original media is encoded in some way (e.g. a zip file) then this information would not be included in the `Content-Encoding` header.

Servers are encouraged to compress data as much as possible, and should use content encoding where appropriate. Compressing a compressed media type such as a zip or jpeg may not be appropriate, as this can make the payload larger.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br

// Multiple, in the order in which they were applied
Content-Encoding: deflate, gzip
```

## Directives

- `gzip`
  - : A format using the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77)
    (LZ77), with a 32-bit CRC. This is the original format of the UNIX _gzip_
    program. The HTTP/1.1 standard also recommends that the servers supporting this
    content-encoding should recognize `x-gzip` as an alias, for compatibility
    purposes.
- `compress`
  - : A format using the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) algorithm. The
    value name was taken from the UNIX _compress_ program, which implemented this
    algorithm. Like the compress program, which has disappeared from most UNIX
    distributions, this content-encoding is not used by many browsers today, partly
    because of a patent issue (it expired in 2003).
- `deflate`
  - : Using the [zlib](https://en.wikipedia.org/wiki/Zlib)
    structure (defined in [RFC 1950](https://tools.ietf.org/html/rfc1950)) with the [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) compression
    algorithm (defined in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1951)).
- `br`
  - : A format using the [Brotli](https://en.wikipedia.org/wiki/Brotli)
    algorithm.

## Examples

### Compressing with gzip

On the client side, you can advertise a list of compression schemes that will be sent
along in an HTTP request. The {{HTTPHeader("Accept-Encoding")}} header is used for
negotiating content encoding.

```
Accept-Encoding: gzip, deflate
```

The server responds with the scheme used, indicated by the
`Content-Encoding` response header.

```
Content-Encoding: gzip
```

Note that the server is not obligated to use any compression method. Compression highly
depends on server settings and used server modules.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
