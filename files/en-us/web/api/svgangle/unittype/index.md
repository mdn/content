---
title: "SVGAngle: unitType property"
short-title: unitType
slug: Web/API/SVGAngle/unitType
page-type: web-api-instance-property
browser-compat: api.SVGAngle.unitType
---

{{APIRef("SVG")}}

The **`unitType`** property of the {{domxref("SVGAngle")}} interface that represents the type of value the `SVGAngle` holds. It takes one of the `SVG_ANGLETYPE_*` constants defined on this interface.

## Value

An `integer`; the angle type.

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
