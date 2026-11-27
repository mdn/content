---
title: "CSSTranslate: z property"
short-title: z
slug: Web/API/CSSTranslate/z
page-type: web-api-instance-property
browser-compat: api.CSSTranslate.z
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`z`** property of the {{domxref("CSSTranslate")}} interface represents the translation distance along the z-axis.
A positive value moves the transformed element closer to the viewer, and a negative value moves it farther away.

## Value

A {{domxref("CSSNumericValue")}} that is a {{cssxref("length")}} value, such as `CSS.px(10)`.
If you don't pass a `z` value to the {{domxref("CSSTranslate.CSSTranslate", "CSSTranslate()")}} constructor, `z` is `0px`.
It's also `0px` for a translation read from a CSS function that doesn't set it, such as `translate()`.

## Description

The `z` value has an effect only when the translation's inherited {{domxref("CSSTransformComponent.is2D", "is2D")}} property is `false`.
If you pass a `z` value to the constructor, `is2D` is `false`, and otherwise it's `true`.
A translation read from CSS has `is2D` set to `false` if it comes from a `translate3d()` or `translateZ()` function.
Setting `z` doesn't change `is2D`.
To make a 2D translation use its `z` value, you also need to set `is2D` to `false`.

Even then, a translation along the z-axis is visible only when the element is in a 3D space.
You can create a 3D space by setting the {{cssxref("perspective")}} property on a parent element.
Perspective makes elements closer to the viewer appear larger, so a positive `z` value makes the element look bigger.

## Examples

### Making a translation 3D

This example sets `z` on a 2D translation and then sets `is2D` to `false` so that `z` takes effect.

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20));

console.log(translate.z); // CSSUnitValue {value: 0, unit: "px"}

translate.z = CSS.px(30);

console.log(translate.is2D); // true
console.log(translate.toString()); // "translate(10px, 20px)"

translate.is2D = false;

console.log(translate.toString()); // "translate3d(10px, 20px, 30px)"
```

After `z` is set, `is2D` is still `true`, so the string form leaves out `z`.
After `is2D` is set to `false`, the string form uses `translate3d()`, which includes `z`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/translateZ", "translateZ()")}}
- {{cssxref("transform-function/translate3d", "translate3d()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
