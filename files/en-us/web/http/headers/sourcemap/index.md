---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
page-type: http-header
browser-compat: http.headers.SourceMap
---

{{HTTPSidebar}}

The HTTP **`SourceMap`** {{Glossary("response header")}} links generated code to a {{Glossary("source map")}}, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

The HTTP `SourceMap` header has precedence over a source annotation (`sourceMappingURL=path-to-map.js.map`), and if both are present, the header URL is used to resolve the source map file.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Directives

- `<url>`
  - : A relative (to the request URL) or absolute URL pointing to a source map file.

## Examples

### Linking to a source map using the `SourceMap` header

The following response contains an absolute path in the `SourceMap` header.

```http
HTTP/1.1 200 OK
Content-Type: application/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Developer tools use the mappings between optimized code and the original source to improve readability, which can make debugging easier.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Source map")}}
- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [What are source maps?](https://web.dev/articles/source-maps) on web.dev (2023)
