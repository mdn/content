---
title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
page-type: http-header
browser-compat: http.headers.SourceMap
---

{{HTTPSidebar}}

The HTTP **`SourceMap`** {{Glossary("response header")}} provides the location of a {{Glossary("source map")}} for the resource.

The HTTP `SourceMap` header has precedence over a source annotation (`sourceMappingURL=path-to-map.js.map`), and if both are present, the header URL is used to resolve the source map file.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
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
Content-Type: text/javascript
SourceMap: /path/to/file.js.map

<optimized-javascript>
```

Developer tools use the source map to reconstruct the original source from the optimized JavaScript returned in the response, allowing developers to debug the original code rather than the format that has been optimized for sending.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Source map")}}
- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [What are source maps?](https://web.dev/articles/source-maps) on web.dev (2023)
