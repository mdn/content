---
title: "CSSRotate: angle property"
short-title: angle
slug: Web/API/CSSRotate/angle
page-type: web-api-instance-property
browser-compat: api.CSSRotate.angle
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`angle`** property of the {{domxref("CSSRotate")}} interface represents the angle of rotation.
A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

## Value

A {{domxref("CSSNumericValue")}}

## Examples

### Reading and setting the angle

```js
const rotate = new CSSRotate(CSS.deg(45));

console.log(rotate.angle.value); // 45
console.log(rotate.angle.unit); // "deg"

rotate.angle = CSS.deg(90);
console.log(rotate.toString()); // "rotate(90deg)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSRotate.CSSRotate", "CSSRotate()")}}
- {{domxref("CSSRotate.x")}}
- {{domxref("CSSRotate.y")}}
- {{domxref("CSSRotate.z")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
