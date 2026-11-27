---
title: "CSSScale: y property"
short-title: y
slug: Web/API/CSSScale/y
page-type: web-api-instance-property
browser-compat: api.CSSScale.y
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`y`** property of the {{domxref("CSSScale")}} interface represents the scale factor along the y-axis.
A value greater than `1` makes the transformed element taller, and a value between `0` and `1` makes it shorter.
A value of `1` leaves the height unchanged, and `0` collapses the element so that it isn't displayed.
A negative value flips the element vertically, and otherwise has the same effect as the positive value, so `-2` flips the element and doubles its height.

## Value

A {{domxref("CSSNumericValue")}} that is a {{cssxref("number")}} value, such as `CSS.number(2)`.
You can also set `y` to a JavaScript number, which is converted to a {{domxref("CSSUnitValue")}} with the unit `"number"`.

## Examples

### Reading and setting the `y` scale factor

This example creates a scale, logs its `y` scale factor, and then sets it to a `CSSNumericValue`.

```js
const scale = new CSSScale(2, 0.5);

console.log(scale.y); // CSSUnitValue {value: 0.5, unit: "number"}

scale.y = CSS.number(1.5);

console.log(scale.toString()); // "scale(2, 1.5)"
```

The new `y` value would make an element one and a half times as tall.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
