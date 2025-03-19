---
title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
page-type: http-header
browser-compat: http.headers.Use-As-Dictionary
---

{{HTTPSidebar}}

The HTTP **`Use-As-Dictionary`** header lists the matching criteria that the {{glossary("Compression Dictionary Transport")}} dictionary can be used for, for future requests.

## Directives

- `match`
  - : A string value that provides the {{domxref("URL Pattern API", "URL Pattern")}} to use for future request matching.
- `match-dest`
  - : An [Inner List of String values](https://www.rfc-editor.org/rfc/rfc8941#name-inner-lists) that provides a list of [Fetch request destinations](/docs/Web/API/Request/destination) for the dictionary to match.
- `id`
  - : A string value that specifies a server identifier for the dictionary. This will then be added as a {{HTTPHeader("Dictionary-ID")}} to resource requests where that dictionary can be used for.
- `type`
  - : A token value that describes the file format of the supplied dictionary. Currently only `raw` is supported (which is the default) so this is more for future compatibility.

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

In which case the `id` will be used in the future requests in the {{HTTPHeader("Dictionary-ID")}} HTTP header along with the SHA-256 hash of the dictionary surrounded by colons in the {{HTTPHeader("Available-Dictionary")}} HTTP header:

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

- {{Glossary("Compression Dictionary Transport")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
