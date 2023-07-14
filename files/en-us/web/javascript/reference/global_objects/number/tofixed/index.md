---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
page-type: javascript-instance-method
browser-compat: javascript.builtins.Number.toFixed
---

{{JSRef}}

The **`toFixed()`** method formats a number using fixed-point notation.

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## Syntax

```js-nolint
toFixed()
toFixed(digits)
```

### Parameters

- `digits` {{optional_inline}}
  - : The number of digits to appear after the decimal point; should be a value between `0` and `100`, inclusive. If this argument is omitted, it is treated as `0`.

### Return value

A string representing the given number using fixed-point notation.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `digits` is not between `0` and `100` (inclusive).
- {{jsxref("TypeError")}}
  - : Thrown if this method is invoked on an object that is not a {{jsxref("Number")}}.

## Description

The `toFixed()` method returns a string representation of `numObj` that does not use exponential notation and has exactly `digits` digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.

If the absolute value of `numObj` is greater or equal to 10<sup>21</sup>, this method uses the same algorithm as {{jsxref("Number.prototype.toString()")}} and returns a string in exponential notation. `toFixed()` returns `"Infinity"`, `"NaN"`, or `"-Infinity"` if the value of `numObj` is non-finite.

The output of `toFixed()` may be more precise than [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) for some values, because `toString()` only prints enough significant digits to distinguish the number from adjacent number values. For example:

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

However, choosing a `digits` precision that's too high can return unexpected results, because decimal fractional numbers cannot be represented precisely in floating point. For example:

```js
(0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## Examples

### Using toFixed()

```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'; it rounds up
(2.55).toFixed(1); // '2.5'
// it rounds down as it can't be represented exactly by a float and the
// closest representable float is lower
(2.449999999999999999).toFixed(1); // '2.5'
// it rounds up as it's less than NUMBER.EPSILON away from 2.45.
// This literal actually encodes the same number value as 2.45

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; large numbers still use exponential notation
```

### Using toFixed() with negative numbers

Because member access has higher [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) than unary minus, you need to group the negative number expression to get a string.

```js-nolint
-2.34.toFixed(1); // -2.3, a number
(-2.34).toFixed(1); // '-2.3'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Number.EPSILON")}}
