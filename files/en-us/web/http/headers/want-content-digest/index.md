---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
---

{{HTTPSidebar}}

The HTTP **`Want-Content-Digest`** {{glossary("request header", "request")}} and {{glossary("response header")}} header indicates that the recipient should send a {{HTTPHeader("Content-Digest")}} header.
It is the `Content-` analogue of {{HTTPHeader("Want-Repr-Digest")}}.

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
Want-Content-Digest: <algorithm>=<preference>
```

## Directives

`Want-Content-Digest` describes an [RFC8941 dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) with its keys being hashing algorithms and its values being the integers `0` (meaning "not acceptable") or `1` to `9` (conveying ascending, relative, weighted preference).

- `<algorithm>`
  - : For permissible digest algorithms see {{HTTPHeader("Repr-Digest")}}.
- `<preference>`
  - : An integer from 0 to 9 where `0` means "not acceptable", and the values `1` to `9` convey ascending, relative, weighted preference.
    In contrast to earlier drafts of the specifications, the weighting is _not_ declared via `q` [quality values](/en-US/docs/Glossary/Quality_values).

## Examples

### Using Want-Content-Digest in requests

The following message asks the recipient to send a `Content-Digest` header using SHA-512 algorithm:

```http
Want-Content-Digest: sha-512=9
```

### Want-Content-Digest with multiple values

The following header contains three algorithms, and indicates that SHA-256 is the preferred digest algorithm that the recipient should use, followed by SHA-512, and MD5:

```http
Want-Content-Digest: md5=1, sha-512=2, sha-256=3
```

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} digest headers
