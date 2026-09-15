---
title: "CSSMathClamp: lower property"
short-title: lower
slug: Web/API/CSSMathClamp/lower
page-type: web-api-instance-property
browser-compat: api.CSSMathClamp.lower
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`lower`** read-only property of the {{domxref("CSSMathClamp")}} interface returns a {{domxref("CSSNumericValue")}} object representing its minimum value.

## Value

A {{domxref("CSSNumericValue")}}.

## Examples

### Basic usage

The following code creates a `CSSMathClamp` object, then reads its `lower` value.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.lower.value); // 10
console.log(clamp.lower.unit); // "px"
```

`lower` simply returns whatever {{domxref("CSSNumericValue")}} was passed into the constructor — here that's a {{domxref("CSSUnitValue")}}, since `CSS.px(10)` is a `CSSUnitValue`.
Passing a more complex expression, such as `CSS.px(10).add(CSS.em(2))` (a {{domxref("CSSMathSum")}}), means `lower` would return that `CSSMathSum` instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathClamp.value")}}
- {{domxref("CSSMathClamp.upper")}}
