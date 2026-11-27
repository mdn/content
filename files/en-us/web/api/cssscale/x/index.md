---
title: "CSSScale: x property"
short-title: x
slug: Web/API/CSSScale/x
page-type: web-api-instance-property
browser-compat: api.CSSScale.x
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`x`** property of the {{domxref("CSSScale")}} interface represents the scale factor along the x-axis.
A value greater than `1` makes the transformed element wider, and a value between `0` and `1` makes it narrower.
A value of `1` leaves the width unchanged, and `0` collapses the element so that it isn't displayed.
A negative value flips the element horizontally, and otherwise has the same effect as the positive value, so `-2` flips the element and doubles its width.

## Value

A {{domxref("CSSNumericValue")}} that is a {{cssxref("number")}} value, such as `CSS.number(2)`.
You can also set `x` to a JavaScript number, which is converted to a {{domxref("CSSUnitValue")}} with the unit `"number"`.

## Examples

### Reading and setting the `x` scale factor

This example creates a scale, logs its `x` scale factor, and then sets it to a negative number.

```js
const scale = new CSSScale(2, 0.5);

console.log(scale.x); // CSSUnitValue {value: 2, unit: "number"}

scale.x = -1;

console.log(scale.x); // CSSUnitValue {value: -1, unit: "number"}
console.log(scale.toString()); // "scale(-1, 0.5)"
```

The number `-1` is converted to a `CSSUnitValue`.
The new `x` value would flip an element horizontally without changing its width.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
