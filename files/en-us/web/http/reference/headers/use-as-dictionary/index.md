---
title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
page-type: http-header
browser-compat: http.headers.Use-As-Dictionary
---

{{HTTPSidebar}}

The HTTP **`Use-As-Dictionary`** response header lists the matching criteria that the {{glossary("Compression Dictionary Transport")}} dictionary can be used for, for future requests.

## Directives

- `match`
  - : A string value containing a [URL Pattern](/en-US/docs/Web/API/URL_Pattern_API): only resources whose URLs match this pattern may use this resource as a dictionary.
- `match-dest`
  - : An [Inner List of String values](https://www.rfc-editor.org/rfc/rfc8941#name-inner-lists) that provides a list of [Fetch request destinations](/docs/Web/API/Request/destination) for the dictionary to match.
- `id`
  - : A string value that specifies a server identifier for the dictionary. This ID value will then be added in the  {{HTTPHeader("Dictionary-ID")}} request header when the browser requests a resource which can use this dictionary.
- `type`
  - : A string value that describes the file format of the supplied dictionary. Currently only `raw` is supported (which is the default) so this is more for future compatibility.

## Examples

> [!NOTE]
> See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

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

This uses`match-dest` to ensure the dictionary is inly used for `document` requests so `/product/js/app.js` would not match and hence would not use this dictionary.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

This would allow the dictionary to match both top-level documents and iframes.

> [!NOTE]
> As a [structured field](https://www.rfc-editor.org/rfc/rfc8941), the parameters should be space-separated, quoted strings — as shown above — and not comma-separated, which developers may be more used to.

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
