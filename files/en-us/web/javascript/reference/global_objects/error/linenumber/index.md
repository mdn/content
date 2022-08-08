---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
tags:
  - JavaScript
  - Non-standard
  - Property
  - Prototype
  - Reference
browser-compat: javascript.builtins.Error.lineNumber
---
{{JSRef}} {{non-standard_header}}

The **`lineNumber`** property contains the line number in the file that raised this error.

## Examples

### Using lineNumber

```js
try {
  throw new Error('Could not parse input');
} catch (err) {
  console.log(err.lineNumber) // 2
}
```

### Alternative example using error event

```js
window.addEventListener('error', (e) => {
  console.log(e.lineNumber); // 5
});
const e = new Error('Could not parse input');
throw e;
```

This is not a standard feature and lacks widespread support. See the browser compatibility table below.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
