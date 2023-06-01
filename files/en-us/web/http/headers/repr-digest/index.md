---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
page-type: http-header
browser-compat: http.headers.Repr-Digest
spec-urls: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-digest-headers-12
status:
  - experimental
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Repr-Digest`** response or request header provides a {{Glossary("digest"}} of the [selected representation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) of the target resource. It is invariant under e.&hairsp;g. {{HTTPHeader("Content-Encoding")}} or {{HTTPHeader("Content-Range")}}, which do affect the {{HTTPHeader("Content-Digest")}}.

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

`Repr-Digest` takes on an [RFC8941 dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) whose keys are digest algorithms and whose values for `sha-256` and `sha-512` are [byte sequences](https://www.rfc-editor.org/rfc/rfc8941#section-3.3.5) (colon-wrapped standard base64 with padding).

## Directives

### Digest algorithms

Only two digest algorithms are currently registered and not considered insecure: `sha-512` and `sha-256`.

The registered insecure digest algorithms are: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) and `crc32c`.

## Examples

An HTTP server may send content octets equivalent to the selected representation's octets:

```http
...
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
Content-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
...
Content-Type: text/yaml
Content-Encoding: identity
Content-Length: 38054
Content-Range: 0-38053/38054
...
```

A static file server may however choose to compress an HTML page, resulting in differing {{HTTPHeader("Content-Digest")}} and `Repr-Digest` header values:

```http
...
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:293wcr5IoFAsDCzdoDXR1Qppgf2yxOPO1bvQ3nZQtuI=:, unixsum=54809
...
Content-Type: text/html; charset=utf-8
Content-Encoding: br
...

...
```

```http
...
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:rv9Jivc4TmcacLUshzN3OdX7Hz+ORnQRaiTaIKZQ0zk=:
...
Content-Type: text/html; charset=utf-8
Content-Encoding: deflate, deflate, deflate
...

...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
