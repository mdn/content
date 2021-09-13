---
title: Date.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Date/toSource
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the object.

## Syntax

```js
dateObj.toSource()
Date.toSource()
```

### Return value

A string representing the source code of the given {{jsxref("Global_Objects/Date",
  "Date")}} object.

## Examples

### Native function

For the built-in {{jsxref("Date")}} object, `toSource()` returns the
following string indicating that the source code is not available:

```js
function Date() {
    [native code]
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
