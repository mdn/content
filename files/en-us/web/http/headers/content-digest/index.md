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

The **`Content-Digest`** response or request header provides a {{Glossary("digest")}} of the actual message content, the preimage of computing the _selected representation_.
For example, [Range Requests](/en-US/docs/Web/HTTP/Range_requests) or [Content Encoding](/en-US/docs/Web/HTTP/Content_negotiation).  
Note that the selected representation is independent of wire transmission, such as HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}).
Note furthermore that the actual message content is independent of [Content Negotiation](/en-US/docs/Web/HTTP/Content_negotiation): this means that if a target resource is available in two different MIME types (say), their corresponding {{HTTPHeader("Repr-Digest")}}s without using [Range Requests](/en-US/docs/Web/HTTP/Range_requests) may *both* not match `Content-Digest`, since the "true" content source is never sent.  
A client can request that a server emit a **`Content-Digest`** by issuing {{HTTPHeader("Want-Content-Digest")}}.

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
