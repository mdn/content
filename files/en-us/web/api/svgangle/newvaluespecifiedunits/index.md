---
title: "SVGAngle: newValueSpecifiedUnits() method"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGAngle/newValueSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGAngle.newValueSpecifiedUnits
---

{{APIRef("SVG")}}

The `newValueSpecifiedUnits()` method of the {{domxref("SVGAngle")}} interface allows you to set the angle's value in a specified unit type. This method is used when you want to provide a unit alongside the numeric value of the angle.

## Syntax

```js
svgAngle.newValueSpecifiedUnits(unitType, valueInSpecifiedUnits);
```

### Parameters

- **{{domxref("SVGAngle.unitType", "unitType")}}**
  A constant representing the unit type for the angle. This can be one of the following:

  - `SVG_ANGLETYPE_DEG` — Degrees
  - `SVG_ANGLETYPE_RAD` — Radians
  - `SVG_ANGLETYPE_GRAD` — Gradians
  - `SVG_ANGLETYPE_UNSPECIFIED` — Unitless (a number only)

- **{{domxref("SVGAngle.valueInSpecifiedUnits", "valueInSpecifiedUnits")}}**
  The numeric factor for the angle value, expressed in the specified unit type (e.g., a number for degrees, radians, or gradians).

### Return value

A reference to the updated {{domxref("SVGAngle")}} object.

If the `newValueSpecifiedUnits()` method is successfully called, the `SVGAngle` object's `valueInSpecifiedUnits` is updated to the specified numeric factor, and the `unitType` is set to the provided unit type. For `SVG_ANGLETYPE_UNSPECIFIED`, the angle is treated as a unitless number. When the `SVGAngle` reflects a base value of an attribute, the corresponding attribute is re-serialized to reflect the updated angle.

## Examples

### Setting an angle in degrees

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the angle's value in degrees using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// Retrieve the angle's value in degrees
console.log(angle.value); // Output: 45
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
```

### Setting an angle in radians

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the angle's value in radians using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// Retrieve the angle's value
console.log(angle.value); // Output: 90
console.log(angle.unitType); // Output: 3 (SVG_ANGLETYPE_RAD)
```

### Setting an angle in gradians

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the angle's value in gradians using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_GRAD, 100);

// Retrieve the angle's value in gradians
console.log(angle.value); // Output: 90
console.log(angle.unitType); // Output: 4 (SVG_ANGLETYPE_GRAD)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle")}}
- {{domxref("Document.createElementNS()")}}
