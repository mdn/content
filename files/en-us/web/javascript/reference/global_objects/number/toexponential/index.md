---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
browser-compat: javascript.builtins.Number.toExponential
---
{{JSRef}}

The **`toExponential()`** method returns a string representing
the {{jsxref("Number")}} object in exponential notation.

{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}

## Syntax

```js
toExponential()
toExponential(fractionDigits)
```

### Parameters

- `fractionDigits` {{optional_inline}}
  - : Optional. An integer specifying the number of digits after the decimal point.
    Defaults to as many digits as necessary to specify the number.

### Return value

A string representing the given {{jsxref("Number")}} object in exponential notation
with one digit before the decimal point, rounded to
`fractionDigits` digits after the decimal point.

### Exceptions

- {{jsxref("RangeError")}}
  - : If `fractionDigits` is too small or too large. Values between
    `0` and `100`, inclusive, will not cause a
    {{jsxref("RangeError")}}.
- {{jsxref("TypeError")}}
  - : If this method is invoked on an object that is not a {{jsxref("Number")}}.

## Description

If the `fractionDigits` argument is omitted, the number of digits
after the decimal point defaults to the number of digits necessary to represent the
value uniquely.

If you use the `toExponential()` method for a numeric literal and the
numeric literal has no exponent and no decimal point, leave whitespace(s) before the dot
that precedes the method call to prevent the dot from being interpreted as a decimal
point.

If a number has more digits than requested by the
`fractionDigits` parameter, the number is rounded to the nearest
number represented by `fractionDigits` digits. See the discussion
of rounding in the description of the {{jsxref("Number.prototype.toFixed",
  "toFixed()")}} method, which also applies to `toExponential()`.

## Examples

### Using toExponential

```js
var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
