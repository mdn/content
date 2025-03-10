---
title: "SVGAngle: unitType property"
short-title: unitType
slug: Web/API/SVGAngle/unitType
page-type: web-api-instance-property
browser-compat: api.SVGAngle.unitType
---

{{APIRef("SVG")}}

The **`unitType`** property of the {{domxref("SVGAngle")}} interface is one of the [unit type constants](/en-US/docs/Web/API/SVGAngle#constants) and represents the units in which this angle's value is expressed.

## Value

A number representing the numeric value of the constant.

## Examples

Here's an example of how to access the `unitType` property:

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle value
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// Check the unit type
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle")}}
