---
title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Use-As-Dictionary
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`Use-As-Dictionary`** response header lists the matching criteria that the {{glossary("Compression Dictionary Transport")}} dictionary can be used for, for future requests.

See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

## Syntax

```http
Use-As-Dictionary: match="<url-pattern>"
Use-As-Dictionary: match-dest=("<destination1>" "<destination2>", …)
Use-As-Dictionary: id="<string-identifier>"
Use-As-Dictionary: type="raw"

// Multiple, in any order
Content-Encoding: match="<url-pattern>", match-dest=("<destination1>")
```

## Directives

- `match`
  - : A string value containing a [URL Pattern](/en-US/docs/Web/API/URL_Pattern_API): only resources whose URLs match this pattern may use this resource as a dictionary.
- `match-dest`
  - : A space-separated list of strings, with each string in quotes and the whole value enclosed in parentheses, that provides a list of [Fetch request destinations](/en-US/docs/Web/API/Request/destination) that requests must match if they are to use this dictionary.
- `id`
  - : A string value that specifies a server identifier for the dictionary. This ID value will then be added in the {{HTTPHeader("Dictionary-ID")}} request header when the browser requests a resource which can use this dictionary.
- `type`
  - : A string value that describes the file format of the supplied dictionary. Currently only `raw` is supported (which is the default) so this is more for future compatibility.

## Examples

### Path prefix

```http
Use-As-Dictionary: match="/product/*"
```

This says the dictionary is only to be used for URLs starting with `/product/`.

### Versioned directories

```http
Use-As-Dictionary: match="/app/*/main.js"
```

This uses a wildcard to match multiple versions of a file.

### Destinations

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

This uses `match-dest` to ensure the dictionary is only used for `document` requests so `<script src="/product/js/app.js">` resource requests for example would not match.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

This would allow the dictionary to match both top-level documents and iframes.

### Id

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

When `Use-As-Dictionary` includes an `id` directive, as in this example, the `id` value will be included in the {{HTTPHeader("Dictionary-ID")}} request header for resources that can use this dictionary. The resource request will also include the SHA-256 hash of the dictionary surrounded by colons in the {{HTTPHeader("Available-Dictionary")}} header:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

The server must still check the hash from the `Available-Dictionary` header — the `Dictionary-ID` is additional information for the server to identify the dictionary but does not replace the need for the `Available-Dictionary` header.

### Type

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Currently, only `raw` is supported (which is the default) so this is more for future compatibility.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
