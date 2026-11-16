---
title: "CSSNumericValue: sub() method"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.sub
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`sub()`** method of the {{domxref("CSSNumericValue")}} interface returns a new value that is the `CSSNumericValue` minus the supplied values.

## Syntax

```js-nolint
sub()
sub(number1)
sub(number1, number2)
sub(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.
    A number is converted to a {{domxref("CSSUnitValue")}} whose unit is `"number"`, so `2` is treated as [`CSS.number(2)`](/en-US/docs/Web/API/CSS/factory_functions_static).

### Return value

A {{domxref('CSSUnitValue')}} if the `CSSNumericValue` and every supplied value have the same unit.
Otherwise, a {{domxref('CSSMathSum')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the values have incompatible types, such as a length and a time.

## Description

The method subtracts each supplied value by negating it (flipping its sign) and then adding it, so it follows the same rules as {{domxref("CSSNumericValue.add()", "add()")}}.

If the `CSSNumericValue` and all the supplied values have exactly the same unit, the result is a single {{domxref("CSSUnitValue")}}.
For example, `CSS.px(10).sub(CSS.px(3))` returns `7px`.

Otherwise, the method returns a {{domxref("CSSMathSum")}} that keeps each value as a separate term.
A supplied value that is a single value, such as `4%`, is added to the sum with its sign flipped, so it appears as `+ -4%` when the sum is written as a string.
A supplied value that is itself a calculation, such as a sum, is wrapped in a {{domxref("CSSMathNegate")}}, and appears as `- (…)`.
Units aren't converted, so subtracting a `cm` length from a `px` length gives a sum with two terms.

If the `CSSNumericValue` is already a `CSSMathSum`, the negated values are added as extra terms of that sum, rather than the existing sum becoming one term inside a new sum.
The terms of the result are in order: first the `CSSNumericValue` (or, if it's already a `CSSMathSum`, its terms), then the negated supplied values in the order they were passed.

The values must have types that can be subtracted, such as two lengths, or a length and a percentage.
Subtracting a time or a plain number from a length throws a `TypeError`.

## Examples

### Subtracting values with the same unit

When every value has the same unit, the result is a single `CSSUnitValue`:

```js
const remaining = CSS.px(10).sub(CSS.px(3), CSS.px(2));
console.log(remaining.toString()); // "5px"
```

### Subtracting values with different units

Values with different units are kept as separate terms of a `CSSMathSum`.
Each subtracted value is added to the sum with its sign flipped, so the result is written with `+ -` rather than `-`:

```js
const mathSum = CSS.px(23).sub(CSS.percent(4)).sub(CSS.cm(3)).sub(CSS.in(9));
console.log(mathSum.toString()); // "calc(23px + -4% + -3cm + -9in)"
```

### Subtracting a sum

When the supplied value is itself a sum, it's wrapped in a `CSSMathNegate`, which is written with `-`:

```js
const composite = CSS.px(10).add(CSS.percent(5));
const result = CSS.px(100).sub(composite);
console.log(result.values[1].constructor.name); // "CSSMathNegate"
console.log(result.toString()); // "calc(100px - (10px + 5%))"
```

### Subtracting values that can't be subtracted

Subtracting a time from a length throws a `TypeError`:

```js
try {
  CSS.px(1).sub(CSS.s(1));
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.add()")}}
- {{domxref("CSSMathSum")}}
- {{domxref("CSSMathNegate")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
