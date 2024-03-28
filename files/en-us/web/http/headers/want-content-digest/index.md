---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Want-Content-Digest
spec-urls: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-12
---

{{HTTPSidebar}}{{SeeCompatTable}}

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

> **Note:** In contrast to earlier drafts of the specifications, the weighting is _not_ declared via [q-values](/en-US/docs/Glossary/Quality_values).

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

{{Compat}}

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
