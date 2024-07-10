---
title: Digest
slug: Web/HTTP/Headers/Digest
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Digest
---

{{HTTPSidebar}}{{Deprecated_Header}}{{non-standard_header}}

> **Note:** This header was removed from the specification in [draft 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-08).
> Use {{HTTPHeader("Content-Digest")}} instead.
> For `id-*` digest algorithms, use {{HTTPHeader("Repr-Digest")}}.

The **`Digest`** response or request HTTP header provides the other side with a {{Glossary("digest")}} of the {{HTTPHeader("Content-Encoding")}}-encoded _selected representation_. It can be requested by using the {{HTTPHeader("Want-Digest")}} header.

Representations are different forms of a particular resource that might be returned from a request: for example, the same resource might be formatted in a particular media type such as XML or JSON, localized to a particular written language or geographical region, and/or compressed or otherwise encoded for transmission.
The _selected representation_ is the actual format of a resource that is returned following [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation), and can be determined from the response's {{Glossary("Representation header","Representation headers")}}.

The digest applies to the whole representation of a resource, not to a particular message.
It can be used to verify that the representation data has not been modified during transmission.

> **Note:** While a representation may be fully contained in the message body of a single response, it can also be sent using multiple messages in response to a [range request](/en-US/docs/Web/HTTP/Range_requests), or omitted altogether in response to a {{HTTPMethod("HEAD")}} request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Digest: <digest-algorithm>=<digest-value>
Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>
```

## Directives

- `<digest-algorithm>`
  - : Digest algorithm values are defined in [6. Digest Algorithm Values](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-07#name-digest-algorithm-values).
    - Permitted digest algorithm values are: `sha-512` and `sha-256`
    - Permitted insecure digest algorithm values are: `md5`, `sha`, `unixsum`, `unixcksum`, `adler32` and `crc32c`
    - Deprecated digest algorithm values include: `id-sha-256`, `id-sha-512`
- `<digest-value>`
  - : The result of applying the digest algorithm to the resource representation and encoding the result (for non-`id-*` digest algorithm values).
    The choice of digest algorithm also determines the encoding to use: for example SHA-256 uses base64 encoding, whilst unixsum is represented by a decimal integer.

## Examples

```http
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,unixsum=30637
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,id-sha-256=0KJL0PvNLH5UbYZLTT7DBFuSyxKpnjyadrWx5E90E/z=
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Want-Digest")}}

- [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests)
- [`206 Partial Content`](/en-US/docs/Web/HTTP/Status/206)
