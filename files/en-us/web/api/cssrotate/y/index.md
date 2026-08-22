---
title: "CSSRotate: y property"
short-title: y
slug: Web/API/CSSRotate/y
page-type: web-api-instance-property
browser-compat: api.CSSRotate.y
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`y`** property of the {{domxref("CSSRotate")}} interface represents the y-coordinate of the vector denoting the axis of rotation.

## Value

A {{domxref("CSSNumericValue")}}. If set to a number, this is wrapped in a {{domxref("CSSUnitValue")}} of `unit: "number"`.

## Examples

### Reading and setting the rotation axis

```js
const rotate = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate.y.value); // 1

rotate.y = 0;
console.log(rotate.y); // CSSUnitValue {value: 0, unit: "number"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSRotate.CSSRotate", "CSSRotate()")}}
- {{domxref("CSSRotate.x")}}
- {{domxref("CSSRotate.z")}}
- {{domxref("CSSRotate.angle")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
