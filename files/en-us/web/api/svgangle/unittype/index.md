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

- `SVGAngle.SVG_ANGLETYPE_UNKNOWN` (0): The angle type is unknown or not specified.
- `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED` (1): A unitless number, interpreted as degrees.
- `SVGAngle.SVG_ANGLETYPE_DEG` (2): The angle is specified in degrees (`deg`).
- `SVGAngle.SVG_ANGLETYPE_RAD` (3): The angle is specified in radians (`rad`).
- `SVGAngle.SVG_ANGLETYPE_GRAD` (4): The angle is specified in gradians (`grad`).

## Description

The `unitType` IDL attribute indicates the type of value that the `SVGAngle` holds. When the property is accessed, the following steps are executed:

1. If the `SVGAngle`'s value is a unitless `<number>` or an `<angle>` with a `deg`, `rad`, or `grad` unit, the corresponding constant value from the angle unit type table is returned.
2. If the `SVGAngle`'s value is of any other type (e.g., an `<angle>` with a `turn` unit), `SVG_ANGLETYPE_UNKNOWN` is returned.

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
console.log(angle.unitType); // Outputs: 2 (SVG_ANGLETYPE_DEG)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAngle.value")}}
- {{domxref("SVGAngle.valueInSpecifiedUnits")}}
- {{domxref("SVGAngle.valueAsString")}}
