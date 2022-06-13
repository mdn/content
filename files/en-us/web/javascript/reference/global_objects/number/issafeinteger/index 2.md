---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
  - Polyfill
browser-compat: javascript.builtins.Number.isSafeInteger
---
{{JSRef}}

The **`Number.isSafeInteger()`** method determines whether the
provided value is a number that is a _safe integer_.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

A safe integer is an integer that

- can be exactly represented as an IEEE-754 double precision number, and
- whose IEEE-754 representation cannot be the result of rounding any other integer to
  fit the IEEE-754 representation.

For example, `2^53 - 1` is a safe integer: it can be exactly
represented, and no other integer rounds to it under any IEEE-754 rounding mode. In
contrast, `2^53` is _not_ a safe integer: it can be exactly
represented in IEEE-754, but the integer `2^53 + 1` can't be
directly represented in IEEE-754 but instead rounds to `2^53` under
round-to-nearest and round-to-zero rounding. The safe integers consist of all integers
from `-(2^53 - 1)` inclusive to `2^53 - 1`
inclusive (± `9007199254740991` or ± 9,007,199,254,740,991).

Handling values larger or smaller than \~9 quadrillion with full precision requires
using an [arbitrary
precision arithmetic library](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic). See [What
Every Programmer Needs to Know about Floating Point Arithmetic](http://floating-point-gui.de/) for more
information on floating point representations of numbers.

For larger integers, consider using the {{jsxref("BigInt")}} type.

## Syntax

```js
Number.isSafeInteger(testValue)
```

### Parameters

- `testValue`
  - : The value to be tested for being a safe integer.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the given value is a number that is a
safe integer.

## Polyfill

```js
Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};
```

## Examples

### Using isSafeInteger

```js
Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger('3');                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Number.isSafeInteger` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- The {{jsxref("Number")}} object it belongs to.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
