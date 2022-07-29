---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
tags:
  - JavaScript
  - Math
  - Method
  - Number
  - Reference
browser-compat: javascript.builtins.Math.round
---
{{JSRef}}

The **`Math.round()`** function returns the value of a number
rounded to the nearest integer.

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## Syntax

```js
Math.round(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The value of the given number rounded to the nearest integer.

## Description

If the fractional portion of the argument is greater than 0.5, the argument is rounded
to the integer with the next higher absolute value. If it is less than 0.5, the argument
is rounded to the integer with the lower absolute value.  If the fractional portion is
exactly 0.5, the argument is rounded to the next integer in the direction of +∞.
**Note that this differs from many languages' `round()` functions,
which often round this case to the next integer _away from zero_**,
instead giving a different result in the case of negative numbers with a fractional part
of exactly 0.5.

Because `round()` is a static method of `Math`, you always use it
as `Math.round()`, rather than as a method of a `Math` object you
created (`Math` has no constructor).

## Examples

### Using round

```js
Math.round(20.49);  //  20
Math.round(20.5);   //  21
Math.round(42);     //  42
Math.round(-20.5 ); // -20
Math.round(-20.51); // -21
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.toPrecision()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
