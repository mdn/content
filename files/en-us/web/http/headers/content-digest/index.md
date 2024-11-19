---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530#section-2
---

{{HTTPSidebar}}

The HTTP **`Content-Digest`** {{Glossary("request header", "request")}} and {{Glossary("response header")}} provides a {{Glossary("digest")}} calculated using a hashing algorithm applied to the message content.

A client can request that a server emit a `Content-Digest` by issuing {{HTTPHeader("Want-Content-Digest")}}.
The `Content-Digest` value will be different based on {{HTTPHeader("Content-Encoding")}} and {{HTTPHeader("Content-Range")}}, but {{HTTPHeader("Transfer-Encoding")}} has no influence on the digest.

A `Content-Digest` may be identical to a {{HTTPHeader("Repr-Digest")}} when a representation is sent in a single message (not a partial or multipart message).
In this context, the _content_ refers to a particular octet sequence of a selected representation of the target resource.

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

```plain
Content-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Digest: unixcksum=916142062
Content-Digest: md5=:+thA//8pGVGk2VYuJkFNvA==:, unixsum=26869
```

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Want-Content-Digest")}} header to request a content digest
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} representation digest headers
- {{HTTPHeader("ETag")}}
