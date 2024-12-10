---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
---

{{HTTPSidebar}}

The HTTP **`Repr-Digest`** {{Glossary("Request header", "request")}} and {{Glossary("Response header", "response header")}} provides a {{Glossary("digest")}} of the selected representation of the target resource.
It can be used validate the integrity of the whole selected representation once it has been received and reconstructed.

The _selected representation_ is the specific format of a resource chosen through [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation).
Details about the representation can be determined from {{Glossary("Representation header", "representation headers")}}, such as {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}}, and {{HTTPHeader("Content-Encoding")}}.

The representation digest applies to the whole representation rather than the encoding or chunking of the messages that are used to send it.
A {{HTTPHeader("Content-Digest")}} applies to the content of a specific message, and will have different values based on the {{HTTPHeader("Content-Encoding")}} and {{HTTPHeader("Content-Range")}} of each message.

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
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

## Directives

- `<digest-algorithm>`
  - : The algorithm used to create a digest of the representation.
    Only two registered digest algorithms are considered secure: `sha-512` and `sha-256`.
    The insecure (legacy) registered digest algorithms are: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) and `crc32c`.
- `<digest-value>`
  - : The digest in bytes of the representation using the `<digest-algorithm>`.
    The choice of digest algorithm also determines the encoding to use: `sha-512` and `sha-256` use {{Glossary("base64")}} encoding, while some legacy digest algorithms such as `unixsum` use a decimal integer.
    In contrast to earlier drafts of the specification, the standard-base64-encoded digest bytes are wrapped in colons (`:`, ASCII 0x3A) as part of the [dictionary syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

Usage of insecure digest algorithms is discouraged as collisions can realistically be forced, rendering the digest's usefulness weak.
Unless working with legacy systems (which is unlikely since most will expect the deprecated `Digest` header and not understand this specification), consider omitting a `Repr-Digest` instead of including one with an insecure digest algorithm.

## Description

A `Digest` header was defined in previous specifications, but it proved problematic as the scope of what the digest applied to was not clear.
Specifically, it was difficult to distinguish whether a digest applied to the entire resource representation or to the specific content of a HTTP message.
As such, two separate headers were specified (`Content-Digest` and `Repr-Digest`) to convey HTTP message content digests and resource representation digests, respectively.

## Examples

### User-agent sending a Repr-Digest in requests

In the following example, a user-agent sends a digest of the message content using SHA-512.
It sends both a `Content-Digest` and a `Repr-Digest`, which differ from each other because of the `Content-Encoding`:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

The server may calculate a digest of the content it has received and compare the result with the `Content-Digest` or `Repr-Digest` headers to validate the message integrity.
In requests like the example above, the `Repr-Digest` is more useful to the server as this is calculated over the decoded representation and would be more consistent in different scenarios.

### HTTP response where `Repr-Digest` and `Content-Digest` coincide

An HTTP server may send the whole representation unencoded in a single message.
In this case, `Repr-Digest` and `Content-Digest` have equal values for the same digest algorithms:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
Content-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
…
Content-Type: text/yaml
Content-Encoding: br
Content-Length: 38054
Content-Range: 0-38053/38054
…

[message body]
```

### HTTP responses where `Repr-Digest` and `Content-Digest` diverge

A server may compress the content for sending.
In this case {{HTTPHeader("Content-Digest")}} will depend on the {{HTTPHeader("Content-Encoding")}}, and will therefore have a different value to the `Repr-Digest` header in a response:

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
Content-Encoding: zstd
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

In the following message, a user-agent requests a resource with a specific sha-256 digest:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

A {{HTTPStatus("406", "406 Not Acceptable")}} is returned by the server to indicate the operation failed given a specific digest for the resource.
A `Repr-Digest` header is included with the SHA-256 digest value that would result in a successful response if the user-agent repeated the request with that value:

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
- [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK guide uses `Content-Digest`s for digital signatures in HTTP calls (developer.ebay.com)
