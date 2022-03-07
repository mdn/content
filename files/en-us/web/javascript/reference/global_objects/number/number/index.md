---
title: Number() constructor
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
tags:
  - Constructor
  - JavaScript
  - Number
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Number.Number
---
{{JSRef}}

The **`Number()` constructor** creates a {{jsxref("Number")}} object.

## Syntax

```js
new Number(value)
```

### Parameters

- `value`
  - : The numeric value of the object being created.

## Examples

### Creating Number objects

```js
const a = new Number('123'); // a === 123 is false
const b = Number('123');     // b === 123 is true
a instanceof Number;         // is true
b instanceof Number;         // is false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of modern `Number` behavior (with support binary and octal literals) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- The {{jsxref("Math")}} global object
- Integers with arbitrary precision: {{jsxref("BigInt")}}
