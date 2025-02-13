---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.f16round
---

{{JSRef}}

The **`Math.f16round()`** static method returns the nearest [16-bit half precision](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) float representation of a number.

{{InteractiveExample("JavaScript Demo: Math.f16round()")}}

```js interactive-example
console.log(Math.f16round(5.5));
// Expected output: 5.5

console.log(Math.f16round(5.05));
// Expected output: 5.05078125

console.log(Math.f16round(5));
// Expected output: 5

console.log(Math.f16round(-5.05));
// Expected output: -5.05078125
```

## Syntax

```js-nolint
Math.f16round(doubleFloat)
```

### Parameters

- `doubleFloat`
  - : A number.

### Return value

The nearest [16-bit half precision](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) float representation of `doubleFloat`.

## Description

`Math.f16round` is the 16-bit counterpart of {{jsxref("Math.fround()")}}. It is intended to smooth some rough edges when interacting with float16 numbers, such as when reading from a {{jsxref("Float16Array")}}. Internally, JavaScript continues to treat the number as a 64-bit float, it just performs a "round to even" on the 10th bit of the mantissa, and sets all following mantissa bits to `0`. If the number is outside the range of a 16-bit float, {{jsxref("Infinity")}} or `-Infinity` is returned.

Because `f16round()` is a static method of `Math`, you always use it as `Math.f16round()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.f16round()

The number 1.5 can be precisely represented in the binary numeral system, and is identical in 16-bit and 64-bit:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

However, the number 1.337 cannot be precisely represented in the binary numeral system, so it differs in 16-bit and 64-bit:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 is too big for a 16-bit float, so `Infinity` is returned:

```js
Math.f16round(100000); // Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.f16round` in `core-js`](https://github.com/zloirock/core-js#float16-methods)
- {{jsxref("Math.fround()")}}
- {{jsxref("Math.round()")}}
