---
title: Want-Repr-Digest
slug: Web/HTTP/Headers/Want-Repr-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
---

{{HTTPSidebar}}

The HTTP **`Want-Repr-Digest`** {{glossary("request header", "request")}} and {{glossary("response header")}} header indicates that the recipient should send a {{HTTPHeader("Repr-Digest")}} header.

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
Want-Repr-Digest: <algorithm>=<preference>
```

## Directives

- `<algorithm>`
  - : For permissible digest algorithms see {{HTTPHeader("Repr-Digest")}}.
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
