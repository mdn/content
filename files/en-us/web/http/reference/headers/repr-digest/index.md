---
title: Repr-Digest header
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
sidebar: http
---

The HTTP **`Repr-Digest`** {{Glossary("Request header", "request")}} and {{Glossary("Response header", "response header")}} provides a {{Glossary("hash function", "digest")}} of the selected representation of the target resource.
It can be used validate the integrity of the whole selected representation once it has been received and reconstructed.

The _selected representation_ is the specific format of a resource chosen through [content negotiation](/en-US/docs/Web/HTTP/Guides/Content_negotiation).
Details about the representation can be determined from {{Glossary("Representation header", "representation headers")}}, such as {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}}, and {{HTTPHeader("Content-Encoding")}}.

The representation digest applies to the whole representation rather than the encoding or chunking of the messages that are used to send it.
A {{HTTPHeader("Content-Digest")}} applies to the content of a specific message, and will have different values based on the {{HTTPHeader("Content-Encoding")}} and {{HTTPHeader("Content-Range")}} of each message.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}, {{Glossary("Response header")}}, {{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Repr-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

`Repr-Digest` is a _structured field dictionary_ ({{rfc("9651","Structured Field Values for HTTP")}}), whose keys are `<digest-algorithm>` and values are `<digest-value>`.

## Directives

- `<digest-algorithm>`
  - : The algorithm used to create a digest of the representation.
    Only two registered digest algorithms are considered secure: `sha-512` and `sha-256`.
    The insecure (legacy) registered digest algorithms are: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) and `crc32c`.
- `<digest-value>`
  - : The digest of the entire selected representation data (see [Section 8.1 of the HTTP Semantics specification](https://www.rfc-editor.org/info/rfc9110/#section-8.1)) using the `<digest-algorithm>`, {{Glossary("base64")}}-encoded and wrapped in colons (`:`, ASCII 0x3A). This encoding is referred to as a [byte sequence](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) in the specification.

## Examples

In all of the examples, endpoints are configured to send unsolicited digest headers. The {{HTTPHeader("Want-Content-Digest")}} and {{HTTPHeader("Want-Repr-Digest")}} fields could optionally be used by a sender to request a `Content-Digest` or `Repr-Digest` along with their hashing algorithm preferences."

### A SHA-256 Repr-Digest in a response

A user-agent requests a resource:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

The server responds with a `Repr-Digest` of the representation using the SHA-256 algorithm.
The digest is calculated over the exact bytes of the representation, `{"hello": "mdn"}` (16 bytes, explicitly not including any trailing line break):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Identical Content-Digest and Repr-Digest values

A user-agent requests a resource:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

The server responds with a `Content-Digest` and `Repr-Digest` of the message content using the SHA-256 algorithm.
The `Repr-Digest` and `Content-Digest` fields have matching values because they are calculated using the same algorithm over the same bytes, `{"hello": "mdn"}` (16 bytes), and in this case the entire representation is sent in one message:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Diverging Content-Digest and Repr-Digest values

A user-agent requests only part of a resource using a [range request](/en-US/docs/Web/HTTP/Guides/Range_requests):

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

The server returns a {{HTTPStatus("206", "206 Partial Content")}} response containing only the requested bytes, `{"hello"` (8 bytes), as the message content.
`Content-Digest` covers only those bytes, while `Repr-Digest` still covers the entire representation, `{"hello": "mdn"}` (16 bytes), so the two values differ:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Digest of a gzip-encoded representation

In this request the client uses the {{httpheader("Accept-Encoding")}} header to indicate that it accepts gzip compression:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

The server response includes the {{httpheader("Content-Encoding")}} header, indicating that the message bytes are from the gzip representation of the resource.

The digest is calculated over the gzip-encoded bytes instead of the original unencoded text.
Here, the 16-byte JSON body `{"hello": "mdn"}` is gzip-compressed to a 36-byte representation, and `Content-Digest` and `Repr-Digest` are calculated over those 36 bytes (shown here as hex for readability):

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:

1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Repr-Digest handling of no content

If the same resource is requested with a {{HTTPMethod("HEAD")}} method instead of a {{HTTPMethod("GET")}}, the response has no content:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

The `Repr-Digest` value is the same as before, since it always applies to the full representation, `{"hello": "mdn"}`.
However, the server will not send any content in the response and can omit the `Content-Digest` header:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Instead of omitting `Content-Digest` when there is no content, a server can explicitly compute it over an empty string.
Per [Section 6.3 of RFC 9530](https://www.rfc-editor.org/info/rfc9530/#section-6.3), this lets a recipient, particularly when the digest is covered by an HTTP message signature, verify that no content was added or removed, rather than only that the header was left out:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### User-agent sending digests in requests

In the following example, a user-agent sends a digest of the message content using SHA-512.
The digest is calculated over the exact bytes of the message body, `{"recipient":"Alex","amount":900000000}` (39 bytes, explicitly not including any trailing line break).
Since the entire representation is sent in this single request, `Content-Digest` and `Repr-Digest` have the same value:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 39
Content-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:
Repr-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:

{"recipient":"Alex","amount":900000000}
```

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK guide uses `Content-Digest`s for digital signatures in HTTP calls (developer.ebay.com)
