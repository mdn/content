---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
page-type: http-header
browser-compat: http.headers.SourceMap
---

{{HTTPSidebar}}

The HTTP **`SourceMap`** {{Glossary("response header")}} links generated code to a {{Glossary("source map")}}, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

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

### Linking to a source map using `SourceMap`

The following response contains an absolute

```http
SourceMap: /path/to/file.js.map
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Source map")}}
- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
