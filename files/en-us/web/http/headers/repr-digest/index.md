---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
---

{{HTTPSidebar}}

The HTTP **`Repr-Digest`** {{Glossary("Request header", "request")}} and {{Glossary("Response header", "response header")}} provides a {{Glossary("digest")}} of the [selected representation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) of the target resource.
Variants in {{HTTPHeader("Content-Encoding")}} and {{HTTPHeader("Content-Range")}}, for example, have no influence on the `Repr-Digest` digests, as opposed to the {{HTTPHeader("Content-Digest")}}, which does vary based on such changes to message content.
Furthermore, [Content Negotiation](/en-US/docs/Web/HTTP/Content_negotiation) can result in different selected representations which results in different representation digests.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Repr-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Repr-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>
```

## Directives

- `<digest-algorithm>`
  - : The algorithm used to create a digest of the representation.
    Only two registered digest algorithms are considered secure: `sha-512` and `sha-256`.
    The insecure (legacy) registered digest algorithms are: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) and `crc32c`.
- `<digest-value>`
  - : The digest in bytes of the representation using the `<digest-algorithm>`.
    The choice of digest algorithm also determines the encoding to use: `sha-512` and `sha-256` use base64 encoding, while some legacy digest algorithms such as `unixsum` use a decimal integer.
    In contrast to earlier drafts of the specification, the standard-base64-encoded digest bytes are wrapped in colons (`:`, ASCII 0x3A) as part of the [dictionary syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

### Usage notes

Usage of digest algorithms which are considered insecure is discouraged as collisions can realistically be forced, rendering the digest's usefulness weak.
Unless working with legacy systems (which is unlikely since most will expect the legacy {{HTTPHeader("Digest")}} header and not understand this specification), consider omitting a `Repr-Digest` instead of including one with an insecure digest algorithm.

## Examples

### HTTP response where `Repr-Digest` and `Content-Digest` coincide

An HTTP server may send content octets equivalent to the selected representation's octets.
In this case, `Repr-Digest` and `Content-Digest` have equal values for the same digest algorithms:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
Content-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
…
Content-Type: text/yaml
Content-Encoding: identity
Content-Length: 38054
Content-Range: 0-38053/38054
…

[message body]
```

### HTTP responses where `Repr-Digest` and `Content-Digest` diverge

A static file server may compress an HTML page, meaning the {{HTTPHeader("Content-Digest")}} will have a different value to the `Repr-Digest` header in a response, given the same digest algorithm:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:293wcr5IoFAsDCzdoDXR1Qppgf2yxOPO1bvQ3nZQtuI=:, unixsum=54809
…
Content-Type: text/html; charset=utf-8
Content-Encoding: br
…

[message body]
```

In another response, the server uses a different compression method, resulting in a new `Content-Digest`, but the same `Repr-Digest` digests:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:rv9Jivc4TmcacLUshzN3OdX7Hz+ORnQRaiTaIKZQ0zk=:
…
Content-Type: text/html; charset=utf-8
Content-Encoding: deflate, deflate, deflate
…

[message body]
```

### Successful HTTP request-response employing `Want-Repr-Digest`, `Repr-Digest`, and `Content-Digest`

The following {{HTTPMethod("PUT")}} request includes a `Want-Repr-Digest` header, indicating that the server should include a `Repr-Digest` header with a `sha-256` digest if the operation is successful:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

The server responds with a successful {{HTTPStatus("201", "201 Created")}} response, including `Repr-Digest` and `Content-Digest` headers with sha-256 digests of the representation and content, respectively:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Unsuccessful HTTP request-response employing `Repr-Digest`

In the following message, a client requests a resource with a specific sha-256 digest:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

A {{HTTPStatus("406", "406 Not Acceptable")}} is returned by the server to indicate the operation failed given a specific digest for the resource.
A `Repr-Digest` header is included with the SHA-256 digest value that would result in a successful response if the client repeated the request with that value:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
