---
title: Want-Content-Digest
slug: Web/HTTP/Headers/Want-Content-Digest
page-type: http-header
browser-compat: http.headers.Want-Content-Digest
spec-urls: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-12
status:
  - experimental
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
`Want-Content-Digest` describes a [dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) with its keys being hashing algorithms and its values being the integers `0` (meaning "not acceptable") or `1` to `9` (conveying ascending, relative, weighted preference).

## Directives

## Examples
```http
Want-Content-Digest: sha-512=8, sha-256=6, adler=0, sha=1
Want-Content-Digest: sha-512=10, sha-256=1, md5=0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
