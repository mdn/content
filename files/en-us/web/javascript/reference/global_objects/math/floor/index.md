---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.floor
---

{{JSRef}}

The **`Math.floor()`** static method always rounds down and returns the largest integer less than or equal to a given number.

{{InteractiveExample("JavaScript Demo: Math.floor()")}}

```js interactive-example
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6
```

## Syntax

```js-nolint
Math.floor(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The largest integer smaller than or equal to `x`. It's the same value as [`-Math.ceil(-x)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).

## Description

Because `floor()` is a static method of `Math`, you always use it as `Math.floor()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.floor()

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

### Decimal adjustment

In this example, we implement a method called `decimalAdjust()` that is an enhancement method of `Math.floor()`, {{jsxref("Math.ceil()")}}, and {{jsxref("Math.round()")}}. While the three `Math` functions always adjust the input to the units digit, `decimalAdjust` accepts an `exp` parameter that specifies the number of digits to the left of the decimal point to which the number should be adjusted. For example, `-1` means it would leave one digit after the decimal point (as in "× 10<sup>-1</sup>"). In addition, it allows you to select the means of adjustment — `round`, `floor`, or `ceil` — through the `type` parameter.

It does so by multiplying the number by a power of 10, then rounding the result to the nearest integer, then dividing by the power of 10. To better preserve precision, it takes advantage of Number's [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) method, which represents large or small numbers in scientific notation (like `6.02e23`).

```js
/**
 * Adjusts a number to the specified digit.
 *
 * @param {"round" | "floor" | "ceil"} type The type of adjustment.
 * @param {number} value The number.
 * @param {number} exp The exponent (the 10 logarithm of the adjustment base).
 * @returns {number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Round
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Floor
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Ceil
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
