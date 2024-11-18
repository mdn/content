---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
page-type: http-header
browser-compat: http.headers.Content-Encoding
---

{{HTTPSidebar}}

The HTTP **`Content-Encoding`** {{Glossary("representation header")}} lists the encodings and the order in which they have been applied to a resource.
This lets the recipient know how to decode the data in order to obtain the original content format described in the {{HTTPHeader("Content-Type")}} header.
Content encoding is mainly used to compress content without losing information about the original media type.

Servers should compress data as much as possible, and should use content encoding where appropriate.
Compressing already compressed media types, such as .zip or .jpeg, is usually not appropriate because it can increase the file size.
If the original media is already encoded (e.g., as a .zip file), this information is not included in the `Content-Encoding` header.

When the `Content-Encoding` header is present, other metadata (e.g., {{HTTPHeader("Content-Length")}}) refer to the encoded form of the data, not the original resource, unless explicitly stated.
Content encoding differs to {{HTTPHeader("Transfer-Encoding")}} in that `Transfer-Encoding` handles how HTTP messages themselves are delivered across the network on a [hop-by-hop basis](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br
Content-Encoding: zstd

// Multiple, in the order in which they were applied
Content-Encoding: deflate, gzip
```

## Directives

- `gzip`
  - : A format using the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), with a 32-bit CRC.
    This is the original format of the UNIX _gzip_ program.
    The HTTP/1.1 standard also recommends that the servers supporting this content-encoding should recognize `x-gzip` as an alias, for compatibility purposes.
- `compress`
  - : A format using the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) algorithm.
    The value name was taken from the UNIX _compress_ program, which implemented this algorithm.
    Like the compress program, which has disappeared from most UNIX distributions, this content-encoding is not used by many browsers today, partly because of a patent issue (it expired in 2003).
- `deflate`
  - : Using the [zlib](https://en.wikipedia.org/wiki/Zlib) structure (defined in {{rfc(1950)}}) with the [deflate](https://en.wikipedia.org/wiki/Deflate) compression algorithm (defined in {{rfc(1951)}}).
- `br`
  - : A format using the {{glossary("Brotli compression","Brotli")}} algorithm structure (defined in {{rfc(7932)}}).
- `zstd`
  - : A format using the {{glossary("Zstandard compression","Zstandard")}} algorithm structure (defined in {{rfc(8878)}}).

## Examples

### Compressing with gzip

On the client side, you can advertise a list of compression schemes that will be sent along in an HTTP request. The {{HTTPHeader("Accept-Encoding")}} header is used for negotiating content encoding.

```http
Accept-Encoding: gzip, deflate
```

The server responds with the scheme used, indicated by the `Content-Encoding` response header.

```http
Content-Encoding: gzip
```

Whether a server uses compression methods requested by the client depends on server configuration and capabilities.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{Glossary("Brotli compression")}}
- {{Glossary("GZip compression")}}
- {{Glossary("Zstandard compression")}}
