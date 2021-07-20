---
title: Symbol.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toSource
tags:
  - JavaScript
  - Method
  - Deprecated
  - Prototype
  - Symbol
browser-compat: javascript.builtins.Symbol.toSource
---
{{JSRef}} {{deprecated_header}}

The **`toSource()`** method returns a string representing the
source code of the object.

This method is usually called internally by JavaScript.

## Syntax

```js
toSource()
```

### Return value

A string representing the source code of the object.

## Examples

### Native function

For the built-in `Symbol` object, `toSource` returns the
following string indicating that the source code is not available:

```js
"function Symbol() {
   [native code]
}"
```

For instances of `Symbol`, `toSource` returns a string
representing the source code.

```js
"Symbol()"
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toSource()")}}
