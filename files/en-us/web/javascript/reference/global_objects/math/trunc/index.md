---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.trunc
---
{{JSRef}}

The **`Math.trunc()`** function returns the integer part of a
number by removing any fractional digits.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Syntax

```js
Math.trunc(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The integer part of the given number.

## Description

Unlike the other three `Math` methods: {{jsxref("Math.floor()")}},
{{jsxref("Math.ceil()")}} and {{jsxref("Math.round()")}}, the way
`Math.trunc()` works is very simple. It *truncates* (cuts off) the dot
and the digits to the right of it, no matter whether the argument is a positive or
negative number.

The argument passed to this method will be converted to number type implicitly.

Because `trunc()` is a static method of `Math`, you always use it
as `Math.trunc()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Using bitwise no-ops to truncate numbers

> **Warning:** This is not a polyfill for `Math.trunc()` because of non-negligible edge cases.

Bitwise operations convert their operands to 32-bit integers, which people have historically taken advantage of to truncate float-point numbers. Common techniques include:

```js
const original = 3.14;
const truncated1 = ~~original; // Double negation
const truncated2 = original & -1; // Bitwise AND with -1
const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0
```

Beware that this is essentially `toInt32`, which is not the same as `Math.trunc`. When the value does not satisfy -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value` < 2147483648), the conversion would overflow.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

Only use `~~` as a substitution for `Math.trunc()` when you are confident that the range of input falls within the range of 32-bit integers.

## Examples

### Using Math.trunc()

```js
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.trunc` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
