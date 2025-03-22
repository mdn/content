---
title: "SVGAngle: valueInSpecifiedUnits property"
short-title: valueInSpecifiedUnits
slug: Web/API/SVGAngle/valueInSpecifiedUnits
page-type: web-api-instance-property
browser-compat: api.SVGAngle.valueInSpecifiedUnits
---

{{APIRef("SVG")}}

The `valueInSpecifiedUnits` property of the {{domxref("SVGAngle")}} interface represents the value of this angle as a number, in the units expressed by the angle's {{domxref("SVGAngle.unitType", "unitType")}}.

Setting this attribute will cause {{domxref("SVGAngle.value", "value")}} and {{domxref("SVGAngle.valueAsString", "valueAsString")}} to be updated automatically to reflect this setting.

## Value

A number; the numeric factor of the angle.

## Examples

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the value of the angle in degrees
angle.value = 45;
console.log(angle.valueInSpecifiedUnits); // Output: 45

// Update the numeric factor of the angle
angle.valueInSpecifiedUnits = 90;
console.log(angle.valueInSpecifiedUnits); // Output: 90
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle")}}
