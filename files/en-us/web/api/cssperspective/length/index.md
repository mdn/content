---
title: "CSSPerspective: length property"
short-title: length
slug: Web/API/CSSPerspective/length
page-type: web-api-instance-property
browser-compat: api.CSSPerspective.length
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`length`** property of the {{domxref("CSSPerspective")}} interface represents the distance between the viewer and the z=0 plane.
The z=0 plane is the flat surface where an element sits before any 3D transform moves it toward or away from the viewer.
A shorter distance makes the perspective effect stronger.

## Value

A {{domxref("CSSNumericValue")}} or {{domxref("CSSKeywordValue")}}.
This is a {{cssxref("length")}} value, such as `CSS.px(500)`, or the keyword `none`, which applies no perspective.
A length smaller than `1px`, including a negative length, is treated as `1px` when the element is drawn (the `length` value isn't actually changed).

## Examples

### Reading and setting the perspective distance

This example creates a perspective, logs its `length` value, and then changes that value twice: to a longer distance and to the keyword `none`.

```js
const perspective = new CSSPerspective(CSS.px(500));

console.log(perspective.length); // CSSUnitValue {value: 500, unit: "px"}

perspective.length = CSS.px(1000);

console.log(perspective.toString()); // "perspective(1000px)"

perspective.length = new CSSKeywordValue("none");

console.log(perspective.toString()); // "perspective(none)"
```

The longer distance of `1000px` would make the perspective effect weaker than the original `500px`, and `none` would remove the perspective.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform-function/perspective", "perspective()")}}
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
