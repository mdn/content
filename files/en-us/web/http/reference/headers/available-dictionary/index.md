---
title: Available-Dictionary header
short-title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Available-Dictionary
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`Available-Dictionary`** request header allows the browser to specify the best matching dictionary it has to allow the server to use {{glossary("Compression Dictionary Transport")}} for a resource request.

Clients can send an `Available-Dictionary` header when they support `dcb` or `dcz` encodings. The header is a colon-surrounded base-64 encoded SHA-256 {{glossary("Hash_function", "hash")}} of the dictionary contents.

See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

## Syntax

```http
Available-Dictionary: :<base64-hash>:
```

## Directives

- `<base64-hash>`
  - : A base-64 encoded SHA-256 {{glossary("Hash_function", "hash")}} of the dictionary contents.

## Examples

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Use-As-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
