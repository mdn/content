---
title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
page-type: http-header
browser-compat: http.headers.Available-Dictionary
---

{{HTTPSidebar}}

The HTTP **`Available-Dictionary`** header allows the browser to specify the best matching dictionary it has to allow the server to use {{glossary("Compression Dictionary Transport")}} for a resource request.

## Example

> [!NOTE]
> See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

Clients can send an `Available-Dictionary` HTTP Header when they support `dcb` or `dcz` encodings. The header is a colon-surrounded base-64 encoded SHA-256 {{glossary("Hash")}} of the dictionary contents:

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
