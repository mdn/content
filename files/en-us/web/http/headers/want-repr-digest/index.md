---
title: Want-Repr-Digest
slug: Web/HTTP/Headers/Want-Repr-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
---

{{HTTPSidebar}}

The **`Want-Repr-Digest`** request or response header states the wish for a {{HTTPHeader("Repr-Digest")}} header.

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

`Want-Repr-Digest` describes an [RFC8941 dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) with its keys being hashing algorithms and its values being the integers `0` (meaning "not acceptable") or `1` to `9` (conveying ascending, relative, weighted preference).

> [!NOTE]
> In contrast to earlier drafts of the specifications, the weighting is _not_ declared via [q-values](/en-US/docs/Glossary/Quality_values).

## Directives

For permissible digest algorithms see {{HTTPHeader("Repr-Digest")}}.

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

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
