---
title: "CSSMathClamp: value property"
short-title: value
slug: Web/API/CSSMathClamp/value
page-type: web-api-instance-property
browser-compat: api.CSSMathClamp.value
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`value`** read-only property of the {{domxref("CSSMathClamp")}} interface returns a {{domxref("CSSNumericValue")}} instance representing its preferred value.

## Value

A {{domxref("CSSNumericValue")}}.

## Examples

### Basic usage

The following code creates a `CSSMathClamp` object, then reads its `value`.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.value.value); // 50
console.log(clamp.value.unit); // "percent"
```

`value` simply returns whatever {{domxref("CSSNumericValue")}} was passed into the constructor — here that's a {{domxref("CSSUnitValue")}}, since `CSS.percent(50)` is a `CSSUnitValue`.
Passing a more complex expression, such as `CSS.percent(50).add(CSS.em(2))` (a {{domxref("CSSMathSum")}}), means `value` would return that `CSSMathSum` instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathClamp.lower")}}
- {{domxref("CSSMathClamp.upper")}}
