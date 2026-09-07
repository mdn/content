---
title: Dictionary-ID header
short-title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Dictionary-ID
sidebar: http
---

{{SeeCompatTable}}

The HTTP **`Dictionary-ID`** request header references a dictionary that can be used in {{glossary("Compression Dictionary Transport")}} to compress the server's response.

A server can indicate that a resource can be used as a dictionary by sending the {{httpheader("Use-As-Dictionary")}} header with the response. The server may include an `id` directive in the `Use-As-Dictionary` header, thus assigning an ID value to the dictionary. If the server does this, then when the browser requests a resource that can be compressed using the dictionary, the resource request must include the `Dictionary-ID` header, and its value must match the ID that was given in `Use-As-Dictionary`.

This allows the server to identify and find a dictionary that is referenced by some arbitrary key, rather than having to use the {{glossary("hash function","dictionary hash")}} as a key (if that approach is used, the server will have to hash every response that includes the `Use-As-Dictionary` header just in case the resource might eventually be used as a dictionary).

Note that while the server can identify and locate the dictionary from its `Dictionary-ID`, it must still check the hash from the `Available-Dictionary` header to confirm that it is a correct match.

See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

## Syntax

```http
Dictionary-ID: "<string-identifier>"
```

## Directives

- `<string-identifier>`
  - : A string representing the dictionary's server-assigned ID.

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
