---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
page-type: http-header
browser-compat: http.headers.Content-Digest
spec-urls: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-12
status:
  - experimental
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Content-Digest`** response or request header provides a {{Glossary("digest")}} of the actual message content, the stream of octets framed in an HTTP message. As such, `Content-Digest` is dependent on e.&hairsp;g. {{HTTPHeader("Content-Encoding")}} or {{HTTPHeader("Content-Range")}} but not on HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}. `Content-Digest` may coincide with {{HTTPHeader("Repr-Digest")}}.

"content" in this setting refers to a particular octet representation of the [selected representation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) of the target resource.

A client can request that a server emit a `Content-Digest` by issuing {{HTTPHeader("Want-Content-Digest")}}.

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

`Content-Digest` describes a [dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2).

```http
Content-Digest: <digest-algorithm>=:<standard-padded-base64-digest-value>:, ...
Content-Digest: <digest-algorithm-integer-checksum>=<integer-checksum-value>, ...
```

## Directives

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
