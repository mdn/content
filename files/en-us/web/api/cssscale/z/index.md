---
title: "CSSScale: z property"
short-title: z
slug: Web/API/CSSScale/z
page-type: web-api-instance-property
browser-compat: api.CSSScale.z
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`z`** property of the {{domxref("CSSScale")}} interface represents the scale factor along the z-axis, which points toward the viewer.

## Value

A {{domxref("CSSNumericValue")}} that is a {{cssxref("number")}} value, such as `CSS.number(2)`.
You can also set `z` to a JavaScript number, which is converted to a {{domxref("CSSUnitValue")}} with the unit `"number"`.
If you don't pass a `z` value to the {{domxref("CSSScale.CSSScale", "CSSScale()")}} constructor, `z` is `1`.
It's also `1` for a scale read from a CSS function that doesn't set it, such as `scale()`.

## Description

The `z` value has an effect only when the scale's inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property is `false`.
If you pass a `z` value to the constructor, `is2D` is `false`, and otherwise it's `true`.
A scale read from CSS has `is2D` set to `false` if it comes from a `scale3d()` or `scaleZ()` function.
Setting `z` doesn't change `is2D`.
To make a 2D scale use its `z` value, you also need to set `is2D` to `false`.

An element is flat, so a z-axis scale on its own doesn't change how the element looks.
The scale affects 3D transforms that come after it in the same `transform` value.
For example, in `scaleZ(2) translateZ(50px)`, the scale doubles the translation, so the element moves 100 pixels closer to the viewer.
As with any 3D transform, you see the result only when the element is in a 3D space.
You can create a 3D space by setting the {{cssxref("perspective")}} property on a parent element.

## Examples

### Making a scale 3D

This example sets `z` on a 2D scale and then sets `is2D` to `false` so that `z` takes effect.

```js
const scale = new CSSScale(2, 0.5);

console.log(scale.z); // CSSUnitValue {value: 1, unit: "number"}

scale.z = 3;

console.log(scale.is2D); // true
console.log(scale.toString()); // "scale(2, 0.5)"

scale.is2D = false;

console.log(scale.toString()); // "scale3d(2, 0.5, 3)"
```

After `z` is set, `is2D` is still `true`, so the string form leaves out `z`.
After `is2D` is set to `false`, the string form uses `scale3d()`, which includes `z`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
