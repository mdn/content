---
title: RegExp.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toSource
tags:
  - JavaScript
  - Method
  - Non-standard
  - Deprecated
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the object.

## Syntax

```js
toSource()
```

### Return value

A string representing the source code of the given {{jsxref("RegExp")}} object.

## Examples

### Native function

For the built-in {{jsxref("RegExp")}} object, `toSource()` returns the
following string indicating that the source code is not available:

```js
function RegExp() {
    [native code]
}
```

For instances of {{jsxref("RegExp")}}, `toSource()` returns a string
representing the source code.

This method is usually called internally by JavaScript and not explicitly in web code.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
