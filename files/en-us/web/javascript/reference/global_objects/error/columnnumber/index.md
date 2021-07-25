---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
tags:
  - JavaScript
  - Non-standard
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.columnNumber
---
{{JSRef}} {{non-standard_header}}

The **`columnNumber`** property contains the column number in the line of the file that raised this error.

## Examples

### Using columnNumber

```js
var e = new Error('Could not parse input');
throw e;
console.log(e.columnNumber) // 0
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
