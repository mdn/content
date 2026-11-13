---
title: "CSSNumericValue: toSum() method"
short-title: toSum()
slug: Web/API/CSSNumericValue/toSum
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.toSum
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`toSum()`** method of the {{domxref("CSSNumericValue")}} interface converts the `CSSNumericValue` into a {{domxref("CSSMathSum")}} whose terms are {{domxref("CSSUnitValue")}} objects in the specified units.

## Syntax

```js-nolint
toSum()
toSum(unit1)
toSum(unit1, unit2)
toSum(unit1, unit2, /* …, */ unitN)
```

### Parameters

- `unit1`, …, `unitN` {{optional_inline}}
  - : Strings naming the units to use for the terms of the result, such as `"px"` or `"percent"`.

### Return value

A {{domxref('CSSMathSum')}} whose terms are all `CSSUnitValue` objects.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if any of `unit1`, …, `unitN` isn't a valid CSS unit.
- {{jsxref("TypeError")}}
  - : Thrown if:
    - The value can't be written as a sum of single values.
      For example, a term that multiplies two units, such as `CSS.px(1).mul(CSS.s(1))`, can't be written as a `CSSUnitValue`.
    - Units are passed, and the value has a term that can't be converted to any of them, such as an `em` term when only `"px"` is passed.
    - The units passed can't be added together, such as `"px"` and `"s"`.

## Description

The method first combines the terms of the `CSSNumericValue` that can be converted to the same unit, as {{domxref("CSSNumericValue.to()", "to()")}} does.
For example, `1px` and `1in` are combined into `97px`.

If units are passed, the result has one term for each unit, in the order the units were passed.
Each term of the value is converted to the unit it's compatible with.
If no term can be converted to one of the units, the result has a term with the value `0` in that unit.
For example, `CSS.px(1).toSum("px", "percent")` returns `calc(1px + 0%)`.

If no units are passed, the result has one term for each unit left after combining.
The terms are sorted alphabetically by unit name, where the name for `%` is `"percent"`.
For example, `calc(10px + 2em + 5px)` gives `calc(2em + 15px)`.

## Examples

### Converting a sum to specific units

```js
const value = CSS.px(100).add(CSS.percent(10)).add(CSS.in(1));
console.log(value.toString()); // "calc(100px + 10% + 1in)"
console.log(value.toSum("px", "percent").toString()); // "calc(196px + 10%)"

console.log(CSS.px(1).toSum("px", "percent").toString()); // "calc(1px + 0%)"
```

### Simplifying a sum

When no units are passed, terms with the same unit are combined, and the terms are sorted by unit name:

```js
const value = CSS.px(10).add(CSS.em(2), CSS.px(5));
console.log(value.toString()); // "calc(10px + 2em + 5px)"
console.log(value.toSum().toString()); // "calc(2em + 15px)"
```

### Values that can't be converted

A sum with an `em` term can't be converted to `px` only:

```js
try {
  CSS.px(1).add(CSS.em(1)).toSum("px");
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.to()")}}
- {{domxref("CSSMathSum")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
