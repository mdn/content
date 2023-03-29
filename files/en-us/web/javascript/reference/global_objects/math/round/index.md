---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.round
---

{{JSRef}}

The **`Math.round()`** static method returns the value of a number rounded to the nearest integer.

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## Syntax

```js-nolint
Math.round(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The value of `x` rounded to the nearest integer.

## Description

If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. If it is less than 0.5, the argument is rounded to the integer with the lower absolute value. If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞.

> **Note:** This differs from many languages' `round()` functions, which often round half-increments _away from zero_, giving a different result in the case of negative numbers with a fractional part of exactly 0.5.

`Math.round(x)` is not exactly the same as [`Math.floor(x + 0.5)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). When `x` is -0, or -0.5 ≤ x < 0, `Math.round(x)` returns -0, while `Math.floor(x + 0.5)` returns 0. However, neglecting that difference and potential precision errors, `Math.round(x)` and `Math.floor(x + 0.5)` are generally equivalent.

Because `round()` is a static method of `Math`, you always use it as `Math.round()`, rather than as a method of a `Math` object you created (`Math` has no constructor).

## Examples

### Using round

```js
Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
