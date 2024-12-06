---
title: Source map
slug: Glossary/Source_map
page-type: glossary-definition
---

{{GlossarySidebar}}

A **source map** is a file that maps between minified or transformed code received by the browser and its original unmodified form, allowing the original code to be reconstructed and used when debugging.

The JavaScript code executed by the browser has often been transformed in some way from the original source created by a developer.
For example, sources are often combined and minified to make delivering them from the server more efficient.
Additionally, JavaScript running on a page is often machine-generated, such as compiled from a language like TypeScript.

In these situations, debugging the original source is much easier than the source in the transformed state that the browser has downloaded.

## See also

- HTTP {{HTTPHeader("SourceMap")}} response header
- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
