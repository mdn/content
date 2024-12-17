---
title: "SVGAngle: value property"
short-title: value
slug: Web/API/SVGAngle/value
page-type: web-api-instance-property
browser-compat: api.SVGAngle.value
---

{{APIRef("SVG")}}

The `value` property of the {{domxref("SVGAngle")}} interface represents the numeric value of the angle in **degrees**. Setting this property automatically updates the {{domxref("SVGAngle.valueInSpecifiedUnits")}} and {{domxref("SVGAngle.valueAsString")}} attributes of the `SVGAngle` object.

## Value

A `number`, the angle value in degrees as a float.

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
