---
title: "CSSNumericValue: mul() method"
short-title: mul()
slug: Web/API/CSSNumericValue/mul
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.mul
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`mul()`** method of the {{domxref("CSSNumericValue")}} interface returns a new value that is the `CSSNumericValue` multiplied by the supplied values.

## Syntax

```js-nolint
mul()
mul(number1)
mul(number1, number2)
mul(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.
    A number is converted to a {{domxref("CSSUnitValue")}} whose unit is `"number"`, so `2` is treated as [`CSS.number(2)`](/en-US/docs/Web/API/CSS/factory_functions_static).

### Return value

A {{domxref('CSSUnitValue')}} if the `CSSNumericValue` and every supplied value are single values (`CSSUnitValue` objects), and all of them, or all of them except one, are plain numbers (values whose unit is `"number"`).
Otherwise, a {{domxref('CSSMathProduct')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the types of the values can't be combined into a product.
    This is rare, because most types can be multiplied together.

## Description

If all the values are plain numbers, they're multiplied together and returned as a single {{domxref("CSSUnitValue")}} whose unit is `"number"`.
If all the values except one are plain numbers, the result is a single `CSSUnitValue` in the unit of that one value.
For example, `CSS.px(10).mul(2)` returns `20px`.

Otherwise, the method returns a {{domxref("CSSMathProduct")}} that keeps each value as a separate term.
This happens whenever two or more values have units, even if the units are the same.
For example, `CSS.px(2).mul(CSS.px(3))` returns `calc(2px * 3px)`, not a single value.
It also happens if the value with a unit is a calculation, such as a {{domxref("CSSMathSum")}}: for example, `CSS.px(1).add(CSS.percent(2)).mul(2)` returns a product of the sum and `2`.
Multiplying values with units produces a compound type, which {{domxref("CSSNumericValue.type()", "type()")}} reports.
For example, a length multiplied by a length has the type `{ length: 2 }`, which is an area rather than a length.

If the `CSSNumericValue` is already a `CSSMathProduct`, the supplied values are added as extra terms of that product, rather than the existing product becoming one term inside a new product.
The terms of the result are in order: first the `CSSNumericValue` (or, if it's already a `CSSMathProduct`, its terms), then the supplied values in the order they were passed.

Most types can be multiplied together, including a length and a time.
The method only throws a `TypeError` when two values each mix a percentage with a different kind of value, such as a length plus a percentage and an angle plus a percentage, because their percentages can't be resolved to a common type.

## Examples

### Multiplying by plain numbers

When all the values are plain numbers, or all except one, the result is a single `CSSUnitValue`:

```js
const scaled = CSS.px(10).mul(2, 3);
console.log(scaled.toString()); // "60px"

const numbers = CSS.number(2).mul(3);
console.log(numbers.toString()); // "6"
```

### Multiplying values that have units

When two or more values have units, the result is a `CSSMathProduct` with a compound type.
Each `mul()` call adds its value to the existing product, so the chained calls below produce a single product with four terms:

```js
const area = CSS.px(2).mul(CSS.px(3));
console.log(area.toString()); // "calc(2px * 3px)"
console.log(JSON.stringify(area.type())); // '{"length":2}'

const mathProduct = CSS.px(23)
  .mul(CSS.percent(4))
  .mul(CSS.cm(3))
  .mul(CSS.in(9));
console.log(mathProduct.toString()); // "calc(23px * 4% * 3cm * 9in)"
```

### Multiplying values that can't be multiplied

In the following code, `percentageLength` mixes a percentage with a length, and `percentageAngle` mixes a percentage with an angle.
Multiplying them throws a `TypeError`, because their percentages can't be resolved to a common type:

```js
const percentageLength = CSS.percent(50).add(CSS.px(10));
const percentageAngle = CSS.percent(50).add(CSS.deg(10));

try {
  percentageLength.mul(percentageAngle);
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.div()")}}
- {{domxref("CSSMathProduct")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
