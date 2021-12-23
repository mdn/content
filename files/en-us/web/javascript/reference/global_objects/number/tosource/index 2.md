---
title: Number.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Number/toSource
tags:
  - JavaScript
  - Method
  - Number
  - Deprecated
  - Prototype
browser-compat: javascript.builtins.Number.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the object.

## Syntax

```js
toSource()
```

### Return value

A string representing the source code of the object.

## Examples

### Native function

For the built-in {{jsxref("Number")}} object, `toSource()` returns the
following string indicating that the source code is not available:

```js
function Number() {
    [native code]
}
```

For instances of {{jsxref("Number")}}, `toSource()` returns a string
representing the source code.

This method is usually called internally by JavaScript and not explicitly in web code.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
