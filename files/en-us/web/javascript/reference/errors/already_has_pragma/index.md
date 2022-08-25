---
title: 'Warning: -file- is being assigned a //# sourceMappingURL, but already has one'
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
tags:
  - Error
  - Errors
  - JavaScript
  - Source maps
  - Warning
---
{{jsSidebar("Errors")}}

The JavaScript warning "-file- is being assigned a //# sourceMappingURL, but already has one." occurs when a source map has been specified more than once for a given JavaScript source.

## Message

```
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Error type

A warning. JavaScript execution won't be halted.

## What went wrong?

A source map has been specified more than once for a given JavaScript source.

JavaScript sources are often combined and minified to make delivering them from the server more efficient. With [source maps](https://developer.chrome.com/blog/sourcemaps/), the debugger can map the code being executed to the original source files. There are two ways to assign a source map, either by using a comment or by setting a header to the JavaScript file.

## Examples

### Setting source maps

Setting a source map by using a comment in the file:

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Or, alternatively, you can set a header to your JavaScript file:

```http example-good
X-SourceMap: /path/to/file.js.map
```

## See also

- [How to use a source map – Firefox Tools documentation](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Introduction to source maps (2012)](https://developer.chrome.com/blog/sourcemaps/)
