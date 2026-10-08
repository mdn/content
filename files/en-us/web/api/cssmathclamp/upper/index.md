---
title: "CSSMathClamp: upper property"
short-title: upper
slug: Web/API/CSSMathClamp/upper
page-type: web-api-instance-property
browser-compat: api.CSSMathClamp.upper
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`upper`** read-only property of the {{domxref("CSSMathClamp")}} interface returns a {{domxref("CSSNumericValue")}} object representing its maximum value.

## Value

A {{domxref("CSSNumericValue")}}.

## Examples

### Basic usage

The following code creates a `CSSMathClamp` object, then reads its `upper` value.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
console.log(clamp.upper.value); // 500
console.log(clamp.upper.unit); // "px"
```

`upper` simply returns whatever {{domxref("CSSNumericValue")}} was passed into the constructor — here that's a {{domxref("CSSUnitValue")}}, since `CSS.px(500)` is a `CSSUnitValue`.
Passing a more complex expression, such as `CSS.px(500).add(CSS.em(2))` (a {{domxref("CSSMathSum")}}), means `upper` would return that `CSSMathSum` instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathClamp.lower")}}
- {{domxref("CSSMathClamp.value")}}
