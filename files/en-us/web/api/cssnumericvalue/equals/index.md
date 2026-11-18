---
title: "CSSNumericValue: equals() method"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.equals
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`equals()`** method of the {{domxref("CSSNumericValue")}} interface returns `true` if every value passed to it is the same as the `CSSNumericValue`, and `false` otherwise.

## Syntax

```js-nolint
equals()
equals(number1)
equals(number1, number2)
equals(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}.
    A number is converted to a {{domxref("CSSUnitValue")}} whose unit is `"number"`, so `2` is treated as [`CSS.number(2)`](/en-US/docs/Web/API/CSS/factory_functions_static).

### Return value

`true` if every value passed is the same as the `CSSNumericValue`, and `false` otherwise.
If no values are passed, the method returns `true`.
The [Description](#description) explains how this comparison works for single values, such as a {{domxref("CSSUnitValue")}}, and for calculations, such as a {{domxref("CSSMathSum")}}.

### Exceptions

None.

## Description

The method compares how the values are written, not what they compute to.

Single values, such as those represented by {{domxref("CSSUnitValue")}}, are the same when they have the same {{domxref("CSSUnitValue.value", "value")}} and {{domxref("CSSUnitValue.unit", "unit")}}.
Units aren't converted, so `CSS.in(1)` isn't the same as `CSS.cm(2.54)`, even though both are one inch long.
Comparing values of different types, such as a length and a time, always returns `false`.

Calculations, such as sums represented by {{domxref("CSSMathSum")}}, are the same when they are the same kind of calculation and contain the same values in the same order.
So a sum of `1px` and `2px` isn't the same as a sum of `2px` and `1px`, or as `3px`.

This strict comparison is intentional, because checking that two values are written the same way is fast.

## Examples

### Comparing single values and sums

Values with the same value and unit are the same, and so are sums of the same values in the same order:

```js
console.log(CSS.px(10).equals(CSS.px(10))); // true

const sum = new CSSMathSum(CSS.px(1), CSS.px(2));
console.log(sum.equals(new CSSMathSum(CSS.px(1), CSS.px(2)))); // true
```

The method returns `false` if the values in a sum are in a different order, if a sum is compared with the single value it adds up to, if the same length is written in a different unit, or if the values are different types:

```js
console.log(sum.equals(new CSSMathSum(CSS.px(2), CSS.px(1)))); // false
console.log(sum.equals(CSS.px(3))); // false
console.log(CSS.in(1).equals(CSS.cm(2.54))); // false
console.log(CSS.px(1).equals(CSS.s(1))); // false
```

### Comparing several values

When several values are passed, the method returns `true` only if each of them is the same as the `CSSNumericValue`.
In the first comparison below, the number `5` is converted to `CSS.number(5)`, so both values are the same as the `CSSNumericValue`:

```js
console.log(CSS.number(5).equals(5, CSS.number(5))); // true
console.log(CSS.px(10).equals(CSS.px(10), CSS.px(11))); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnitValue")}}
- {{domxref("CSSMathSum")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
