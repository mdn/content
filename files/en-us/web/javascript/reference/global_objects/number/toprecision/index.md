---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
page-type: javascript-instance-method
browser-compat: javascript.builtins.Number.toPrecision
---

{{JSRef}}

The **`toPrecision()`** method of {{jsxref("Number")}} values returns a string representing
this number to the specified precision.

{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}

## Syntax

```js-nolint
toPrecision()
toPrecision(precision)
```

### Parameters

- `precision` {{optional_inline}}
  - : An integer specifying the number of significant digits.

### Return value

A string representing a {{jsxref("Number")}} object in fixed-point or exponential
notation rounded to `precision` significant digits. See the discussion of
rounding in the description of the {{jsxref("Number.prototype.toFixed()")}} method,
which also applies to `toPrecision()`.

If the `precision` argument is omitted, behaves as
{{jsxref("Number.prototype.toString()")}}. If the `precision` argument is a
non-integer value, it is rounded to the nearest integer.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `precision` is not between `1` and `100` (inclusive).

## Examples

### Using `toPrecision`

```js
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // '1.2e+3'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
