---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.trunc
---

{{JSRef}}

The **`Math.trunc()`** static method returns the integer part of a number by removing any fractional digits.

{{InteractiveExample("JavaScript Demo: Math.trunc()")}}

```js interactive-example
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0

console.log(Math.trunc(-0.123));
// Expected output: -0
```

## Syntax

```js-nolint
Math.trunc(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The integer part of `x`.

## Description

The way `Math.trunc()` works is more straightforward than the other three `Math` methods: {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} and {{jsxref("Math.round()")}}; it _truncates_ (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.

Because `trunc()` is a static method of `Math`, you always use it as `Math.trunc()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.trunc()

```js
Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity
```

### Using bitwise no-ops to truncate numbers

> [!WARNING]
> This is not a polyfill for `Math.trunc()` because of non-negligible edge cases.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.trunc` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
