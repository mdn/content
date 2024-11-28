---
title: "SVGAngle: newValueSpecifiedUnits() method"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGAngle/newValueSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGAngle.newValueSpecifiedUnits
---

{{APIRef("SVG")}}

The `newValueSpecifiedUnits()` method of the {{domxref("SVGAngle")}} interface allows you to set the angle's value in a specified unit type. This method is used when you want to provide a unit alongside the numeric value of the angle.

## Description

The method sets the `SVGAngle`'s value by specifying both the unit type and the numeric value. The unit type can be one of several predefined constants such as degrees, radians, or gradians. If the {{domxref("SVGAngle.unitType")}} is unknown or unsupported, an error is thrown.

## Syntax

```js
svgAngle.newValueSpecifiedUnits(unitType, valueInSpecifiedUnits);
```

## Parameters

- **{{domxref("SVGAngle.unitType")}}**
  A constant representing the unit type for the angle. This can be one of the following:

  - `SVG_ANGLETYPE_DEG` — Degrees
  - `SVG_ANGLETYPE_RAD` — Radians
  - `SVG_ANGLETYPE_GRAD` — Gradians
  - `SVG_ANGLETYPE_UNSPECIFIED` — Unitless (a number only)

- **{{domxref("SVGAngle.valueInSpecifiedUnits")}}**
  The numeric factor for the angle value, expressed in the specified unit type (e.g., a number for degrees, radians, or gradians).

## Behavior

1. **On Calling `newValueSpecifiedUnits()`**:

   - If the `SVGAngle` object is read-only, a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is thrown.
   - If `unitType` is `SVG_ANGLETYPE_UNKNOWN` or any unsupported unit type, a {{domxref("DOMException")}} with code `NOT_SUPPORTED_ERR` is thrown.
   - If `unitType` is `SVG_ANGLETYPE_UNSPECIFIED`, the angle is set as a unitless number (the value is directly set as `valueInSpecifiedUnits`).
   - Otherwise, the angle is updated with the numeric factor `valueInSpecifiedUnits` and the unit is set according to the `unitType`.

2. **Reserialization**
   If the `SVGAngle` reflects the base value of a reflected attribute (or an element of the base value), the reflected attribute is re-serialized to reflect the updated angle.

## Exceptions

- **`NO_MODIFICATION_ALLOWED_ERR`**
  Thrown if the `SVGAngle` object is read-only and modification is attempted.

- **`NOT_SUPPORTED_ERR`**
  Thrown if the `unitType` is not a valid value or is `SVG_ANGLETYPE_UNKNOWN`.

## Examples

Setting an angle in degrees

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the angle's value in degrees using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// Retrieve the angle's value in degrees
console.log(angle.value); // Outputs: 45
console.log(angle.unitType); // Outputs: 2 (SVG_ANGLETYPE_DEG)
```

Setting an angle in radians

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the angle's value in radians using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// Retrieve the angle's value
console.log(angle.value); // Outputs: 90
console.log(angle.unitType); // Outputs: 3 (SVG_ANGLETYPE_RAD)
```

Setting an angle in gradians

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the angle's value in gradians using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_GRAD, 100);

// Retrieve the angle's value in gradians
console.log(angle.value); // Outputs: 90
console.log(angle.unitType); // Outputs: 4 (SVG_ANGLETYPE_GRAD)
```

Attempting to set an unsupported unit type

```js
try {
  // Create an SVGAngle object
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const angle = svg.createSVGAngle();

  // Attempt to set an invalid unit type
  angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_UNKNOWN, 45);
} catch (e) {
  console.error(e.name); // Outputs: NotSupportedError
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAngle.unitType")}}
- {{domxref("SVGAngle.valueInSpecifiedUnits")}}
- {{domxref("SVGAngle.convertToSpecifiedUnits")}}
