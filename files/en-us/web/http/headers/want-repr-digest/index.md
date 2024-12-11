---
title: Want-Repr-Digest
slug: Web/HTTP/Headers/Want-Repr-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530#section-4
---

{{HTTPSidebar}}

The HTTP **`Want-Repr-Digest`** {{glossary("request header", "request")}} and {{glossary("response header")}} indicates a preference for the recipient to send a {{HTTPHeader("Repr-Digest")}} integrity header in messages associated with the request URI and representation metadata.

The header includes hashing algorithm preferences that the recipient can use in subsequent messages.
The preferences only serve as a hint, and the recipient may ignore the algorithm choices, or the integrity headers entirely.

Some implementations may send unsolicited `Repr-Digest` headers without requiring a `Want-Repr-Digest` header in a previous message.

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

A comma-separated list of one or more hashing algorithms:

```http
Want-Repr-Digest: <algorithm>=<preference>
Want-Repr-Digest: <algorithm>=<preference>, …, <algorithmN>=<preferenceN>
```

## Directives

- `<algorithm>`
  - : The requested algorithm to create a digest of the representation.
    Only two registered digest algorithms are considered secure: `sha-512` and `sha-256`.
    The insecure (legacy) registered digest algorithms are: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) and `crc32c`.
- `<preference>`
  - : An integer from 0 to 9 where `0` means "not acceptable", and the values `1` to `9` convey ascending, relative, weighted preference.
    In contrast to earlier drafts of the specifications, the weighting is _not_ declared via `q` [quality values](/en-US/docs/Glossary/Quality_values).

## Examples

```http
Want-Repr-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Repr-Digest: sha-512=10, sha-256=1, md5=0
```

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}} digest headers
- [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK guide uses `Content-Digest`s for digital signatures in HTTP calls (developer.ebay.com)
