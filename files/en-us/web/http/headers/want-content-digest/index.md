---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
---

{{HTTPSidebar}}

The **`Want-Content-Digest`** request or response header states the wish for a {{HTTPHeader("Content-Digest")}} header. It is the `Content-` analogue of {{HTTPHeader("Want-Repr-Digest")}}.

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

`Want-Content-Digest` describes an [RFC8941 dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) with its keys being hashing algorithms and its values being the integers `0` (meaning "not acceptable") or `1` to `9` (conveying ascending, relative, weighted preference).

> [!NOTE]
> In contrast to earlier drafts of the specifications, the weighting is _not_ declared via [q-values](/en-US/docs/Glossary/Quality_values).

## Directives

For permissible digest algorithms see {{HTTPHeader("Repr-Digest")}}.

## Examples

```http
Want-Content-Digest: md5=1, sha-512=0, sha-256=4
Want-Content-Digest: md5=0
```

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
