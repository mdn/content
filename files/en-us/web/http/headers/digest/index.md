---
title: Digest
slug: Web/HTTP/Headers/Digest
tags:
  - HTTP
  - HTTP Header
browser-compat: http.headers.Digest
---
{{HTTPSidebar}}

The **`Digest`** response HTTP header provides a
{{Glossary("digest")}} of the requested resource.

In [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231) terms,
this is the _selected representation_ of a resource.
The selected representation depends
on the [`Content-Type`](/en-US/docs/Web/HTTP/Headers/Content-Type)
and [`Content-Encoding`](/en-US/docs/Web/HTTP/Headers/Content-Encoding) header values,
so a single resource may have multiple different digest values.

The digest is calculated over the entire representation. The representation itself may be:

- fully contained in the response message body,
- not at all contained in the message body (for example, in a response to a [`HEAD`](/en-US/docs/Web/HTTP/Methods/HEAD) request),
- or partially contained in the message body (for example, in a response to a [range request](/en-US/docs/Web/HTTP/Range_requests)).

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

```
Digest: <digest-algorithm>=<digest-value>
Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>
```

## Directives

- `<digest-algorithm>`
  - : Supported digest algorithms are defined in [RFC 3230](https://datatracker.ietf.org/doc/html/rfc3230) and [RFC 5843](https://datatracker.ietf.org/doc/html/rfc5843), and include
    `SHA-256` and `SHA-512`. Some of the supported algorithms,
    including `unixsum` and `MD5` are subject to collisions and are
    thus not suitable for applications in which collision-resistance is important.
- `<digest-value>`
  - : The result of applying the digest algorithm to the resource representation and
    encoding the result. The choice of digest algorithm also determines the encoding to
    use: for example `SHA-256` uses base64 encoding.

## Examples

```
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,unixsum=30637
```

## Specifications

| Specification                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| [draft-ietf-httpbis-digest-headers-latest](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers) |

This header was originally defined in [RFC 3230](https://datatracker.ietf.org/doc/html/rfc3230),
but the definition of "selected representation" in [RFC 7231](https://www.rfc-editor.org/info/rfc7231) made the original definition inconsistent with current HTTP specifications.
When released, The "Resource Digests for HTTP" draft therefore will obsolete RFC 3230
and will update the standard to be consistent.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Want-Digest")}}
- [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests)
- [`206 Partial Content`](/en-US/docs/Web/HTTP/Status/206 "The HTTP 206 Partial Content success status response code indicates that the request has succeeded and has the body contains the requested ranges of data, as described in the Range header of the request.")
