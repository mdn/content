---
title: "CSSRotate: x property"
short-title: x
slug: Web/API/CSSRotate/x
page-type: web-api-instance-property
browser-compat: api.CSSRotate.x
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`x`** property of the {{domxref("CSSRotate")}} interface represents the x-coordinate of the vector denoting the axis of rotation.

## Value

A {{domxref("CSSNumericValue")}}. If set to a number, this is wrapped in a {{domxref("CSSUnitValue")}} of `unit: "number"`.

## Examples

### Reading and setting the rotation axis

```js
const rotate = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate.x.value); // 1

rotate.x = 0;
console.log(rotate.x); // CSSUnitValue {value: 0, unit: "number"}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSRotate.CSSRotate", "CSSRotate()")}}
- {{domxref("CSSRotate.y")}}
- {{domxref("CSSRotate.z")}}
- {{domxref("CSSRotate.angle")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
