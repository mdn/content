---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
browser-compat: http.headers.SourceMap
---
{{HTTPSidebar}}

The **`SourceMap`** [HTTP](/en-US/docs/Web/HTTP) response header links generated code to a [source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html), enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Directives

- \<url>
  - : A relative (to the request URL) or absolute URL pointing to a source map file.

## Examples

```http
SourceMap: /path/to/file.js.map
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
