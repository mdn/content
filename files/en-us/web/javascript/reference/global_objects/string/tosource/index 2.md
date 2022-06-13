---
title: String.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/String/toSource
tags:
  - JavaScript
  - Method
  - Non-standard
  - Deprecated
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the object.

## Syntax

```js
toSource()
```

### Return value

A string representing the source code of the calling object.

## Examples

### Native function

For the built-in {{jsxref("String")}} object, `toSource()` returns the
following string indicating that the source code is not available:

```js
function String() {
    [native code]
}
```

For instances of {{jsxref("String")}} or string literals, `toSource()`
returns a string representing the source code.

This method is usually called internally by JavaScript and not explicitly in web code.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
