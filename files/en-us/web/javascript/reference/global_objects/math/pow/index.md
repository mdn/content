---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.pow
---

{{JSRef}}

The **`Math.pow()`** static method returns the value of a base raised to a power. That is

<math display="block"><semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚙𝚘𝚠</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo>,</mo><mi>𝚢</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>y</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.pow}(x, y)} = x^y</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## Syntax

```js-nolint
Math.pow(base, exponent)
```

### Parameters

- `base`
  - : The base number.
- `exponent`
  - : The exponent number.

### Return value

A number representing `base` taken to the power of `exponent`. Returns {{jsxref("NaN")}} in one of the following cases:

- `exponent` is `NaN`.
- `base` is `NaN` and `exponent` is not `0`.
- `base` is ±1 and `exponent` is ±`Infinity`.
- `base < 0` and `exponent` is not an integer.

## Description

`Math.pow()` is equivalent to the [`**`](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) operator, except `Math.pow()` only accepts numbers.

`Math.pow(NaN, 0)` (and the equivalent `NaN ** 0`) is the only case where {{jsxref("NaN")}} doesn't propagate through mathematical operations — it returns `1` despite the operand being `NaN`. In addition, the behavior where `base` is 1 and `exponent` is non-finite (±Infinity or `NaN`) is different from IEEE 754, which specifies that the result should be 1, whereas JavaScript returns `NaN` to preserve backward compatibility with its original behavior.

Because `pow()` is a static method of `Math`, use it as `Math.pow()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.pow()

```js
// Simple cases
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// Fractional exponents
Math.pow(4, 0.5); // 2 (square root of 4)
Math.pow(8, 1 / 3); // 2 (cube root of 8)
Math.pow(2, 0.5); // 1.4142135623730951 (square root of 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (cube root of 2)

// Signed exponents
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Signed bases
Math.pow(-7, 2); // 49 (squares are positive)
Math.pow(-7, 3); // -343 (cubes can be negative)
Math.pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
// Due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN,
// even when the mathematical result is real
Math.pow(-7, 1 / 3); // NaN

// Zero and infinity
Math.pow(0, 0); // 1 (anything ** ±0 is 1)
Math.pow(Infinity, 0.1); // Infinity (positive exponent)
Math.pow(Infinity, -1); // 0 (negative exponent)
Math.pow(-Infinity, 1); // -Infinity (positive odd integer exponent)
Math.pow(-Infinity, 1.5); // Infinity (positive exponent)
Math.pow(-Infinity, -1); // -0 (negative odd integer exponent)
Math.pow(-Infinity, -1.5); // 0 (negative exponent)
Math.pow(0, 1); // 0 (positive exponent)
Math.pow(0, -1); // Infinity (negative exponent)
Math.pow(-0, 1); // -0 (positive odd integer exponent)
Math.pow(-0, 1.5); // 0 (positive exponent)
Math.pow(-0, -1); // -Infinity (negative odd integer exponent)
Math.pow(-0, -1.5); // Infinity (negative exponent)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN: only Math.pow(NaN, 0) does not result in NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
