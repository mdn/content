---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
tags:
  - JavaScript
  - Non-standard
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.fileName
---
{{JSRef}} {{non-standard_header}}

The **`fileName`** property contains the path to the file that raised this error.

## Description

This non-standard property contains the path to the file that raised this error. If called from a debugger context, the Firefox Developer Tools for example, "debugger eval code" is returned.

## Examples

### Using fileName

```js
const e = new Error('Could not parse input');
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
