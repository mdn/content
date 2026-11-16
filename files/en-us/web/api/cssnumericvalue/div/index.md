---
title: "CSSNumericValue: div() method"
short-title: div()
slug: Web/API/CSSNumericValue/div
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.div
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`div()`** method of the {{domxref("CSSNumericValue")}} interface returns a new value that is the `CSSNumericValue` divided by the supplied values.

## Syntax

```js-nolint
div()
div(number1)
div(number1, number2)
div(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.
    A number is converted to a {{domxref("CSSUnitValue")}} whose unit is `"number"`, so `2` is treated as [`CSS.number(2)`](/en-US/docs/Web/API/CSS/factory_functions_static).

### Return value

A {{domxref('CSSUnitValue')}} if the `CSSNumericValue` is a single value (a `CSSUnitValue`) and every supplied value is a plain number (a value whose unit is `"number"`).
Otherwise, a {{domxref('CSSMathProduct')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the values have types that can't be used together in a division.
    This is rare, because most types can be divided by each other.
- {{jsxref("RangeError")}}
  - : Thrown if any supplied value is the plain number `0` or `-0`.

## Description

The method inverts each supplied value (turning it into 1 divided by that value), and then multiplies the `CSSNumericValue` by the inverted values.
It follows the same rules as {{domxref("CSSNumericValue.mul()", "mul()")}}, with one difference: a supplied value with a unit can't be inverted into a single value.

If the `CSSNumericValue` is a single value and every supplied value is a plain number, the result is a single {{domxref("CSSUnitValue")}} in the unit of the `CSSNumericValue`.
For example, `CSS.px(24).div(2)` returns `12px`.
If the `CSSNumericValue` is a calculation, such as a {{domxref("CSSMathSum")}}, the result is a `CSSMathProduct`, even when dividing by a plain number.

If any supplied value has a unit, it's wrapped in a {{domxref("CSSMathInvert")}}, and the method returns a {{domxref("CSSMathProduct")}}.
This happens even if the units are the same.
For example, `CSS.px(10).div(CSS.px(2))` returns `calc(10px / 2px)`, not `5`.

If the `CSSNumericValue` is already a `CSSMathProduct`, the inverted values are added as extra terms of that product, rather than the existing product becoming one term inside a new product.
The terms of the result are in order: first the `CSSNumericValue` (or, if it's already a `CSSMathProduct`, its terms), then the inverted supplied values in the order they were passed.

Dividing by the plain number `0` throws a `RangeError`.
Dividing by a zero value that has a unit, such as `CSS.px(0)`, doesn't throw, because that value is wrapped in a `CSSMathInvert` rather than inverted immediately.

Most types can be divided by each other, including a length and a time.
The method only throws a `TypeError` when two values each mix a percentage with a different kind of value, such as a length plus a percentage and an angle plus a percentage, because their percentages can't be resolved to a common type.

## Examples

### Dividing by plain numbers

When every supplied value is a plain number, the result is a single `CSSUnitValue`:

```js
const half = CSS.px(24).div(2);
console.log(half.toString()); // "12px"
```

### Dividing by values that have units

When a supplied value has a unit, the result is a `CSSMathProduct`, even if the units are the same:

```js
const ratio = CSS.px(10).div(CSS.px(2));
console.log(ratio.toString()); // "calc(10px / 2px)"

const mathProduct = CSS.px(24).div(CSS.percent(4));
console.log(mathProduct.toString()); // "calc(24px / 4%)"
```

### Dividing by zero

Dividing by the plain number `0` throws a `RangeError`, but dividing by a zero length doesn't:

```js
try {
  CSS.px(10).div(0);
} catch (e) {
  console.log(e instanceof RangeError); // true
}

console.log(CSS.px(10).div(CSS.px(0)).toString()); // "calc(10px / 0px)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.mul()")}}
- {{domxref("CSSMathProduct")}}
- {{domxref("CSSMathInvert")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
