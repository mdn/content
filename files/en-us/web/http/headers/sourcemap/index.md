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

The **`SourceMap`** [HTTP](/en-US/docs/Web/HTTP) response header links generated code to a [source map](/en-US/docs/Tools/Debugger/How_to/Use_a_source_map), enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

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

```
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Directives

- \<url>
  - : A relative (to the request URL) or absolute URL pointing to a source map file.

## Examples

```
SourceMap: /path/to/file.js.map
```

## Specifications

| Specification                                       | Title                          |
| --------------------------------------------------- | ------------------------------ |
| [Draft document](https://sourcemaps.info/spec.html) | Source Map Revision 3 Proposal |

## Browser compatibility

{{Compat}}

## See also

- [Firefox Developer Tools: using a source map](/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)
