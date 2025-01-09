---
title: "SVGAngle: value property"
short-title: value
slug: Web/API/SVGAngle/value
page-type: web-api-instance-property
browser-compat: api.SVGAngle.value
---

{{APIRef("SVG")}}

The `value` property of the {{domxref("SVGAngle")}} interface represents the floating point value of the [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) in degrees.

Setting this attribute will cause {{domxref("SVGAngle.valueInSpecifiedUnits", "valueInSpecifiedUnits")}} and {{domxref("SVGAngle.valueAsString", "valueAsString")}} to be updated automatically to reflect this setting.

## Value

A number; the angle value in degrees.

## Examples

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the value
angle.value = 45;
console.log(angle.value); // Output: 45

// Reflecting the value
angle.value = 90;
console.log(angle.value); // Output: 90
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle")}}
