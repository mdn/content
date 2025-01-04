---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530#section-2
---

{{HTTPSidebar}}

The HTTP **`Content-Digest`** {{Glossary("request header", "request")}} and {{Glossary("response header")}} provides a {{Glossary("digest")}} calculated using a hashing algorithm applied to the message content.
A recipient can use the `Content-Digest` to validate the HTTP message content for integrity purposes.

The {{HTTPHeader("Want-Content-Digest")}} field lets a sender request a `Content-Digest` along with their hashing algorithm preferences.
A content digest will differ based on {{HTTPHeader("Content-Encoding")}} and {{HTTPHeader("Content-Range")}}, but not {{HTTPHeader("Transfer-Encoding")}}.

In certain cases, a {{HTTPHeader("Repr-Digest")}} can be used to validate the integrity of partial or multipart messages against the full representation.
For example, in [range requests](/en-US/docs/Web/HTTP/Range_requests), a `Repr-Digest` will always have the same value if only the requested byte ranges differ, whereas the content digest will be different for each part.
For this reason, a `Content-Digest` is identical to a {{HTTPHeader("Repr-Digest")}} when a representation is sent in a single message.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}, {{Glossary("Response header")}}, {{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Content-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>, …
```

## Directives

- `<digest-algorithm>`
  - : The algorithm used to create a digest of the message content.
    Only two registered digest algorithms are considered secure: `sha-512` and `sha-256`.
    The insecure (legacy) registered digest algorithms are: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) and `crc32c`.
- `<digest-value>`
  - : The digest in bytes of the message content using the `<digest-algorithm>`.
    The choice of digest algorithm also determines the encoding to use: `sha-512` and `sha-256` use {{Glossary("base64")}} encoding, while some legacy digest algorithms such as `unixsum` use a decimal integer.
    In contrast to earlier drafts of the specification, the standard base64-encoded digest bytes are wrapped in colons (`:`, ASCII 0x3A) as part of the [dictionary syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

## Description

A `Digest` header was defined in previous specifications, but it proved problematic as the scope of what the digest applied to was not clear.
Specifically, it was difficult to distinguish whether a digest applied to the entire resource representation or to the specific content of a HTTP message.
As such, two separate headers were specified (`Content-Digest` and `Repr-Digest`) to convey HTTP message content digests and resource representation digests, respectively.

## Examples

### User-agent request for a SHA-256 Content-Digest

In the following example, a user-agent requests a digest of the message content with a preference for SHA-256, followed by SHA-1 at a lower preference:

```http
GET /items/123 HTTP/1.1
Host: example.com
Want-Content-Digest: sha-256=10, sha=3
```

The server responds with a `Content-Digest` of the message content using the SHA-256 algorithm:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Identical Content-Digest and Repr-Digest values

A user-agent requests a resource without a `Want-Content-Digest` field:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

The server is configured to send unsolicited digest headers in responses.
The `Repr-Digest` and `Content-Digest` fields have matching values because they are using the same algorithm, and in this case the whole resource is sent in one message:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Diverging Content-Digest and Repr-Digest values

If the same request is repeated as the previous example, but uses a {{HTTPMethod("HEAD")}} method instead of a {{HTTPMethod("GET")}}, the `Repr-Digest` and `Content-Digest` fields will be different:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

The `Repr-Digest` value will be the same as before, but there is no message body, so a different `Content-Digest` would be sent by the server:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### User-agent sending a Content-Digest in requests

In the following example, a user-agent sends a digest of the message content using SHA-512.
It sends both a `Content-Digest` and a `Repr-Digest`, which differ from each other because of the `Content-Encoding`:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

The server may calculate a digest of the content it has received and compare the result with the `Content-Digest` or `Repr-Digest` headers to validate the message integrity.
In requests like the example above, the `Repr-Digest` is more useful to the server as this is calculated over the decoded representation and would be more consistent in different scenarios.

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Want-Content-Digest")}} header to request a content digest
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} representation digest headers
- {{HTTPHeader("ETag")}}
- [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK guide uses `Content-Digest`s for digital signatures in HTTP calls (developer.ebay.com)
