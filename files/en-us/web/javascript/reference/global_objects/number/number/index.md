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

The **`Number()` constructor** creates a {{jsxref("Number")}} object. When called instead as a function, it performs type conversion to a {{Glossary("number", "primitive number")}}, which is usually more useful.

## Syntax

```js
new Number(value)
Number(value)
```

> **Note:** `Number()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but with different effects. See [Return value](#return_value).

### Parameters

- `value`
  - : The numeric value of the object being created.

### Return value

When `Number` is called as a constructor (with [`new`]((/en-US/docs/Web/JavaScript/Reference/Operators/new))), it creates a {{jsxref("Number")}} object, which is **not** a primitive.

When `Number` is called as a function, it coerces the parameter to a number primitive. If the value can't be converted, it returns {{jsxref("NaN")}}.

> **Warning:** You should rarely find yourself using `Number` as a constructor.

## Examples

### Creating Number objects

```js
const a = new Number('123'); // a === 123 is false
const b = Number('123');     // b === 123 is true
a instanceof Number;         // is true
b instanceof Number;         // is false
typeof a // "object"
typeof b // "number"
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
