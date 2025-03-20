---
title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-id
page-type: http-header
browser-compat: http.headers.Dictionary-id
---

{{HTTPSidebar}}

The HTTP **`Dictionary-ID`** header used in {{glossary("Compression Dictionary Transport")}} to reference a dictionary in later requests.

## Examples

> [!NOTE]
> See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

An optional `id` can also be provided in the {{HTTPHeader("Use-As-Dictionary")}} header:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

In which case the `id` will be used in the {{HTTPHeader("Dictionary-ID")}} HTTP Header of future requests, along with the SHA-256 hash of the dictionary enclosed in colons in the {{HTTPHeader("Available-Dictionary")}} HTTP Header:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Use-As-Dictionary")}}
