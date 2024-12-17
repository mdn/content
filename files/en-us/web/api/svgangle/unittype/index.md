---
title: "SVGAngle: unitType property"
short-title: unitType
slug: Web/API/SVGAngle/unitType
page-type: web-api-instance-property
browser-compat: api.SVGAngle.unitType
---

{{APIRef("SVG")}}

The **`unitType`** property of the {{domxref("SVGAngle")}} interface that represents the type of value the `SVGAngle` holds. This must be one of the constant values defined for the {{domxref("SVGAngle.unitType", "unitType")}} property, with the exception of `SVG_ANGLETYPE_UNKNOWN`.

- `SVGAngle.SVG_ANGLETYPE_DEG`: convert to degrees
- `SVGAngle.SVG_ANGLETYPE_RAD`: convert to radians
- `SVGAngle.SVG_ANGLETYPE_GRAD`: convert to gradians
- `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: convert to a unitless number, interpreted as degrees

## Value

An `unsigned short`; the angle type.

## Examples

Here's an example of how to access the `unitType` property:

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");

// Assume `angle` is an instance of SVGAngle
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
