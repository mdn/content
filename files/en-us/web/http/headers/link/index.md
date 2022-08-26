---
title: Link
slug: Web/HTTP/Headers/Link
tags:
  - Draft
  - HTTP
  - HTTP Header
  - Link
  - NeedsCompatTable
  - NeedsContent
  - NeedsSyntax
  - Reference
browser-compat: http.headers.Link
---
{{HTTPSidebar}}

The HTTP **`Link`** entity-header field provides a means for serializing one or more links in HTTP headers. It is semantically equivalent to the HTML {{HTMLElement("link")}} element.

## Syntax

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : The URI reference, must be enclosed between `<` and `>` and [percent encoded](/en-US/docs/Glossary/percent-encoding).

### Parameters

The link header contains parameters, which are separated with `;` and are equivalent to attributes of the {{HTMLElement("link")}} element.

## Examples

The URI (absolute or relative) must be enclosed between `<` and `>`:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### Encoding URLs

The URI (absolute or relative) must encode char codes greater than 255:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Specifying multiple links

You can specify multiple links separated by commas, for example:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus(103, "103 Early Hints")}}
- {{HTMLElement("link")}}
