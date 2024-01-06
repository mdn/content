---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
page-type: http-header
browser-compat: http.headers.Transfer-Encoding
---

{{HTTPSidebar}}

The **`Transfer-Encoding`** header specifies the form of encoding used to safely transfer the {{Glossary("Payload body","payload body")}} to the user.

> **Note:** [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) disallows all uses of the Transfer-Encoding header other than the HTTP/2 specific: `"trailers"`. HTTP 2 provides its own more efficient mechanisms for data streaming than chunked transfer and forbids the use of the header. Usage of the header in HTTP/2 may likely result in a specific `protocol error` as HTTP/2 Protocol prohibits the use.

`Transfer-Encoding` is a [hop-by-hop header](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers), that is applied to a message between two nodes, not to a resource itself.
Each segment of a multi-node connection can use different `Transfer-Encoding` values.
If you want to compress data over the whole connection, use the end-to-end {{HTTPHeader("Content-Encoding")}} header instead.

When present on a response to a {{HTTPMethod("HEAD")}} request that has no body, it indicates the value that would have applied to the corresponding {{HTTPMethod("GET")}} message.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}}, {{Glossary("Response header")}}, {{Glossary("Payload header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip

// Several values can be listed, separated by a comma
Transfer-Encoding: gzip, chunked
```

## Directives

- `chunked`
  - : Data is sent in a series of chunks. The {{HTTPHeader("Content-Length")}} header is omitted in this case and at the beginning of each chunk you need to add the length of the current chunk in hexadecimal format, followed by '`\r\n`' and then the chunk itself, followed by another '`\r\n`'.
    The terminating chunk is a regular chunk, with the exception that its length is zero.
    It is followed by the trailer, which consists of a (possibly empty) sequence of header fields.
- `compress`
  - : A format using the [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) algorithm.
    The value name was taken from the UNIX _compress_ program, which implemented this algorithm.
    Like the compress program, which has disappeared from most UNIX distributions, this content-encoding is used by almost no browsers today, partly because of a patent issue (which expired in 2003).
- `deflate`
  - : Using the [zlib](https://en.wikipedia.org/wiki/Zlib) structure (defined in [RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950)), with the [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) compression algorithm (defined in [RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952)).
- `gzip`
  - : A format using the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), with a 32-bit CRC.
    This is originally the format of the UNIX _gzip_ program.
    The HTTP/1.1 standard also recommends that the servers supporting this content-encoding should recognize `x-gzip` as an alias, for compatibility purposes.

## Examples

### Chunked encoding

Chunked encoding is useful when larger amounts of data are sent to the client and the total size of the response may not be known until the request has been fully processed.
For example, when generating a large HTML table resulting from a database query or when transmitting large images. \
A chunked response looks like this:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
11\r\n
Developer Network\r\n
0\r\n
\r\n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- Header fields that regulate the use of trailers: {{HTTPHeader("TE")}} (requests) and {{HTTPHeader("Trailer")}} (responses).
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
