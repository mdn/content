---
title: >-
  SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //#
  instead
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
tags:
  - Error
  - Errors
  - JavaScript
  - Source maps
---
{{jsSidebar("Errors")}}

The JavaScript warning "Using `//@` to indicate sourceURL pragmas is deprecated. Use `//#` instead" occurs when there is a deprecated source map syntax in a JavaScript source.

## Message

```js
Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
```

## Error type

A warning that a {{jsxref("SyntaxError")}} occurred. JavaScript execution won't be halted.

## What went wrong?

There is a deprecated source map syntax in a JavaScript source.

JavaScript sources are often combined and minified to make delivering them from the server more efficient. With [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/), the debugger can map the code being executed to the original source files.

The source map specification changed the syntax due to a conflict with IE whenever it was found in the page after `//@cc_on` was interpreted to turn on conditional compilation in the IE JScript engine. The [conditional compilation comment](https://msdn.microsoft.com/library/8ka90k2e%28v=vs.94%29.aspx) in IE is a little known feature, but it broke source maps with [jQuery](https://bugs.jquery.com/ticket/13274) and other libraries.

## Examples

### Deprecated syntax

Syntax with the "@" sign is deprecated.

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### Standard syntax

Use the "#" sign instead.

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Or, alternatively, you can set a {{HTTPHeader("SourceMap")}} header to your JavaScript file to avoid having a comment at all:

```js example-good
SourceMap: /path/to/file.js.map
```

## See also

- [How to use a source map – Firefox Tools documentation](/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)
- [Introduction to source maps – HTML5 rocks](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
- {{HTTPHeader("SourceMap")}}
