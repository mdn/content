---
title: "CSSMathNegate: value property"
short-title: value
slug: Web/API/CSSMathNegate/value
page-type: web-api-instance-property
browser-compat: api.CSSMathNegate.value
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`value`** read-only property of the {{domxref("CSSMathNegate")}} interface returns the {{domxref("CSSNumericValue")}} that is being negated.

This is the value passed to the constructor, rectified to a {{domxref("CSSNumericValue")}} (if it isn't one already).
If a plain number was passed to the constructor the value returned by this property is the passed value wrapped in a {{domxref("CSSUnitValue")}} with `unit: "number"`.

## Value

A {{domxref("CSSNumericValue")}} or one of its derived types.

## Examples

### Basic usage

The following code creates a `CSSMathNegate` object, then reads its `value`.

In this case, we passed `CSS.px(10)`, so `value` is a {{domxref("CSSUnitValue")}}.
Passing a composite expression such as `CSS.px(10).add(CSS.percent(5))` would result in `value` returning a {{domxref("CSSMathSum")}}.

```js
const negated = new CSSMathNegate(CSS.px(10));

console.log(negated.value); // CSSUnitValue {value: 10, unit: "px"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathInvert.value")}}
