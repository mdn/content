---
title: "CSSRotate: z property"
short-title: z
slug: Web/API/CSSRotate/z
page-type: web-api-instance-property
browser-compat: api.CSSRotate.z
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`z`** property of the {{domxref("CSSRotate")}} interface represents the z-coordinate of the vector denoting the axis of rotation.

## Value

A {{domxref("CSSNumericValue")}}. If set to a number, this is wrapped in a {{domxref("CSSUnitValue")}} of `unit: "number"`.

## Examples

### Reading and setting the rotation axis

```js
const rotate = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate.z.value); // 0

rotate.z = 1;
console.log(rotate.z); // CSSUnitValue {value: 1, unit: "number"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSRotate.CSSRotate", "CSSRotate()")}}
- {{domxref("CSSRotate.x")}}
- {{domxref("CSSRotate.y")}}
- {{domxref("CSSRotate.angle")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
