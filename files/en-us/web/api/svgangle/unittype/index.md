---
title: "SVGAngle: unitType property"
short-title: unitType
slug: Web/API/SVGAngle/unitType
page-type: web-api-instance-property
browser-compat: api.SVGAngle.unitType
---

{{APIRef("SVG")}}

The **`unitType`** property of the {{domxref("SVGAngle")}} interface that represents the type of value the `SVGAngle` holds. This is determined by one of the predefined constants of the `SVGAngle` interface.

## Value

An **unsigned short** indicating the angle type, represented by one of the following constants:

- `SVG_ANGLETYPE_UNKNOWN` = `0`
  - : An unknown type of value.
- `SVG_ANGLETYPE_UNSPECIFIED` = `1`
  - : A unitless [`<number>`](/en-US/docs/Web/SVG/Content_type#number) interpreted as a value in degrees.
- `SVG_ANGLETYPE_DEG` = `2`
  - : An [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) with a `deg` unit.
- `SVG_ANGLETYPE_RAD` = `3`
  - : An [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) with a `rad` unit.
- `SVG_ANGLETYPE_GRAD` = `4`
  - : An [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) with a `grad` unit.

## Examples

Here's an example of how to access the `unitType` property:

```js
// Assume `angle` is an instance of SVGAngle
const angle = document
  .createElementNS("http://www.w3.org/2000/svg", "svg")
  .createSVGAngle();

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

- {{domxref("DOMMatrix")}}
- {{domxref("SVGAnimatedAngle")}}
