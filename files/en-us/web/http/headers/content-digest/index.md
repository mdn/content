---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc9530
---

{{HTTPSidebar}}

The HTTP **`Content-Digest`** header provides a {{Glossary("digest")}} of the message content in an HTTP message.
As such, `Content-Digest` is dependent on among other things {{HTTPHeader("Content-Encoding")}} and {{HTTPHeader("Content-Range")}}, but not dependent on, for example, HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}.
`Content-Digest` may coincide with {{HTTPHeader("Repr-Digest")}} if a representation was sent in a single message.

In this setting, _content_ refers to a particular octet representation of the [selected representation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) of the target resource.

A client can request that a server emit a `Content-Digest` by issuing {{HTTPHeader("Want-Content-Digest")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}, {{Glossary("Response header")}}, {{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

`Content-Digest` describes an [RFC8941 dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) with its keys being names of digest algorithms and its values being the digest in bytes (or an integer digest for legacy digest algorithms).

> [!NOTE]
> In contrast to earlier drafts of the specification, the standard-base64-encoded digest bytes are wrapped in colons (`:`, ASCII 0x3A) as part of the [dictionary syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

```http
Content-Digest: <digest-algorithm>=:<standard-padded-base64-digest-value>:, ...
Content-Digest: <digest-algorithm-integer-checksum>=<integer-checksum-value>, ...
```

## Directives

For permissible digest algorithms see {{HTTPHeader("Repr-Digest")}}.

## Examples

```plain
Content-Digest: unixcksum=916142062
Content-Digest: md5=:+thA//8pGVGk2VYuJkFNvA==:, unixsum=26869
```

## Specifications

{{Specifications}}

## Browser compatibility

This header has no specification-defined browser integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
