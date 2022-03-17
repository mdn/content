---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
tags:
  - JavaScript
  - Method
  - Number
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Number.isInteger
---
{{JSRef}}

The **`Number.isInteger()`** method determines whether the
passed value is an integer.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## Syntax

```js
Number.isInteger(value)
```

### Parameters

- `value`
  - : The value to be tested for being an integer.

### Return value

The boolean value `true` if the given value is an integer. Otherwise `false`.

## Description

If the target value is an integer, return `true`, otherwise return
`false`. If the value is {{jsxref("NaN")}} or {{jsxref("Infinity")}}, return
`false`. The method will also return `true` for floating point
numbers that can be represented as integer.

## Examples

### Using isInteger

```js
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.isInteger` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- The {{jsxref("Number")}} object it belongs to.
