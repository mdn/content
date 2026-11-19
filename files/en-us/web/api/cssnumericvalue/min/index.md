---
title: "CSSNumericValue: min() method"
short-title: min()
slug: Web/API/CSSNumericValue/min
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.min
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`min()`** method of the {{domxref("CSSNumericValue")}} interface returns the smallest of the `CSSNumericValue` and the supplied values.

## Syntax

```js-nolint
min()
min(number1)
min(number1, number2)
min(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.
    A number is converted to a {{domxref("CSSUnitValue")}} whose unit is `"number"`, so `2` is treated as [`CSS.number(2)`](/en-US/docs/Web/API/CSS/factory_functions_static).

### Return value

A {{domxref('CSSUnitValue')}} if the `CSSNumericValue` and every supplied value have the same unit.
Otherwise, a {{domxref('CSSMathMin')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the values have incompatible types, such as a length and a time.

## Description

If the `CSSNumericValue` and all the supplied values have exactly the same unit, the method compares them and returns the smallest as a single {{domxref("CSSUnitValue")}}.
For example, `CSS.px(10).min(CSS.px(25))` returns `10px`.

Otherwise, the method returns a {{domxref("CSSMathMin")}}, which represents a CSS {{cssxref("min()")}} function, and keeps each value as a separate term.
The browser works out which term is smallest when the value is used.
For example, which of `100px` and `50%` is smaller depends on the size of the element's container.
Units aren't converted, so comparing a `cm` length with an `in` length also gives a `CSSMathMin`, even though both are fixed lengths.

If the `CSSNumericValue` is already a `CSSMathMin`, the supplied values are added as extra terms of it, rather than the existing `CSSMathMin` becoming one term inside a new one.
The terms of the result are in order: first the `CSSNumericValue` (or, if it's already a `CSSMathMin`, its terms), then the supplied values in the order they were passed.

The values must have types that can be compared, such as two lengths, or a length and a percentage.
Comparing a length with a time, or with a plain number, throws a `TypeError`.

## Examples

### Finding the smallest of values with the same unit

When every value has the same unit, the result is a single `CSSUnitValue`:

```js
const smallest = CSS.px(10).min(CSS.px(25), CSS.px(5));
console.log(smallest.toString()); // "5px"
```

### Comparing values with different units

When the units are different, the result is a `CSSMathMin`, even if the values could be converted to the same unit:

```js
const atMost = CSS.px(100).min(CSS.percent(50));
console.log(atMost.toString()); // "min(100px, 50%)"

const lengths = CSS.cm(1).min(CSS.in(0.393701));
console.log(lengths.toString()); // "min(1cm, 0.393701in)"
```

### Comparing values that can't be compared

Comparing a length with a time throws a `TypeError`:

```js
try {
  CSS.px(1).min(CSS.s(1));
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.max()")}}
- {{domxref("CSSMathMin")}}
- CSS {{cssxref("min()")}} function
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
