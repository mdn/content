---
title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
page-type: http-header
browser-compat: http.headers.Dictionary-ID
---

{{HTTPSidebar}}

The HTTP **`Dictionary-ID`** request header references a dictionary that can be used in {{glossary("Compression Dictionary Transport")}} to compress the server's response.

In Compression Dictionary Transport, a server can indicate that a resource can be used as a dictionary by sending the {{httpheader("Use-As-Dictionary")}} header with the response. The server may include an `id` directive in the `Use-As-Dictionary` header, thus assigning an ID value to the dictionary. If the server does this, then when the browser requests a resource that can be compressed using the dictionary, then the resource request must include the `Dictionary-ID` header, and its value must be the ID that was given in `Use-As-Dictionary`.

See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

## Syntax

```http
Dictionary-ID: "<string-identifier>"
```

## Directives

- `<string-identifier>`
  - : A string identifier

## Examples

For example, suppose the server has sent a `Use-As-Dictionary` header containing an `id="dictionary-12345"` directive:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

When the client requests a matching resource, it will include this `id` value in a `Dictionary-ID header`:

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
