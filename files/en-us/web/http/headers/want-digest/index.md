---
title: Want-Digest
slug: Web/HTTP/Headers/Want-Digest
page-type: http-header
status:
  - deprecated
browser-compat: http.headers.Want-Digest
---

{{HTTPSidebar}}{{Deprecated_Header}}

The **`Want-Digest`** HTTP header is primarily used in a request, to ask the server to provide a {{Glossary("digest")}} of the requested resource using the {{HTTPHeader("Digest")}} response header.

The header contains identifiers for one or more digest algorithms that the sender wishes the server to use to create the digest.
The request may use {{Glossary("quality values")}} to indicate its preference/order for particular digest algorithms.

If `Want-Digest` does not include any digest algorithms that the server supports, the server may respond with:

- a digest calculated using a different digest algorithm, or
- a [`400 Bad Request`](/en-US/docs/Web/HTTP/Status/400) error, and include another `Want-Digest` header with that response, listing the algorithms that it does support.

See the page for the {{HTTPHeader("Digest")}} header for more information.

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

```http
Want-Digest: <digest-algorithm>

// Multiple algorithms, weighted with the quality value syntax:
Want-Digest: <digest-algorithm><q-value>,<digest-algorithm><q-value>
```

## Directives

- \<digest-algorithm>
  - : Digest algorithms are defined in [Digest Headers](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers/).
    - Permitted digest algorithms values include: `unixsum`, `unixcksum`, `crc32c`, `sha-256` and `sha-512`, `id-sha-256`, `id-sha-512`
    - Deprecated algorithms values include: `md5`, `sha`, `adler32`.
- \<q-value>
  - : The [quality value](/en-US/docs/Glossary/Quality_values) to apply to that
    option.

## Examples

```http
Want-Digest: sha-256
Want-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0
```

### Basic operation

The sender provides a list of digests which it is prepared to accept, and the server
uses one of them:

Request:

```http
GET /item
Want-Digest: sha-256;q=0.3, sha;q=1
```

Response:

```http
HTTP/1.1 200 Ok
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

### Unsupported digests

The server does not support any of the requested digest algorithms, so uses a different algorithm:

Request:

```http
GET /item
Want-Digest: sha;q=1
```

Response:

```http
HTTP/1.1 200 Ok
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

The server does not support any of the requested digest algorithms.
In this case it responds with a 400 error and includes another `Want-Digest` header, listing the algorithms that it does support:

Request:

```http
GET /item
Want-Digest: sha;q=1
```

Response:

```http
HTTP/1.1 400 Bad Request
Want-Digest: sha-256, sha-512
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Digest")}}
