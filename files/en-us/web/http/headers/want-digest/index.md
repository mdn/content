---
title: Want-Digest
slug: Web/HTTP/Headers/Want-Digest
tags:
  - HTTP
  - HTTP Header
  - Request header
  - Response header
browser-compat: http.headers.Want-Digest
---
{{HTTPSidebar}}

The **`Want-Digest`** HTTP header is primarily used in a HTTP
request, to ask the responder to provide a {{Glossary("digest")}} of the requested
resource using the [`Digest`](/en-US/docs/Web/HTTP/Headers/Digest)
response header.

The header contains identifiers for one or more digest algorithms that the sender
wishes the responder to use to create the digest. The sender may use [quality values](/en-US/docs/Glossary/Quality_values) to indicate its
preference ordering among the choices it offers.

If `Want-Digest` does not include any digest algorithms that the server
supports, the server may respond with:

- a digest calculated using a different digest algorithm, or
- a [`400 Bad Request`](/en-US/docs/Web/HTTP/Status/400) error,
  and include another `Want-Digest` header with that response, listing the
  algorithms that it does support.

See the page for the
[`Digest`](/en-US/docs/Web/HTTP/Headers/Digest) header for more
information.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Want-Digest: <digest-algorithm>

// Multiple algorithms, weighted with the quality value syntax:
Want-Digest: <digest-algorithm><q-value>,<digest-algorithm><q-value>
```

## Directives

- \<digest-algorithm>
  - : Supported digest algorithms are defined in [RFC 3230](https://datatracker.ietf.org/doc/html/rfc3230) and [RFC 5843](https://datatracker.ietf.org/doc/html/rfc5843), and include
    `SHA-256` and `SHA-512`. Some of the supported algorithms,
    including `unixsum` and `MD5` are subject to collisions and are
    thus not suitable for applications in which collision-resistance is important.
- \<q-value>
  - : The [quality value](/en-US/docs/Glossary/Quality_values) to apply to that
    option.

## Examples

```
Want-Digest: sha-256
Want-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0
```

### Basic operation

The sender provides a list of digests which it is prepared to accept, and the server
uses one of them:

Request:

```
GET /item
Want-Digest: sha-256;q=0.3, sha;q=1
```

Response:

```
HTTP/1.1 200 Ok
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

### Unsupported digests

The server does not support any of the requested digest algorithms, so uses a different
algorithm:

Request:

```
GET /item
Want-Digest: sha;q=1
```

Response:

```
HTTP/1.1 200 Ok
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

The server does not support any of the requested digest algorithms, so responds with a
400 error and includes another `Want-Digest` header, listing the algorithms
that it does support:

Request:

```
GET /item
Want-Digest: sha;q=1
```

Response:

```
HTTP/1.1 400 Bad Request
Want-Digest: sha-256, sha-512
```

## Specifications

| Specification                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| [draft-ietf-httpbis-digest-headers-latest](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers) |

This header was originally defined in [RFC 3230](https://datatracker.ietf.org/doc/html/rfc3230),
but the definition of "selected representation"
in [RFC 7231](https://www.rfc-editor.org/info/rfc7231)
made the original definition inconsistent with current HTTP specifications.
When released, The "Resource Digests for HTTP" draft therefore will obsolete RFC 3230
and will update the standard to be consistent.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Digest")}}
