---
title: "SVGAngle: convertToSpecifiedUnits() method"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGAngle/convertToSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGAngle.convertToSpecifiedUnits
---

{{APIRef("SVG")}}

The `convertToSpecifiedUnits()` method of the {{domxref("SVGAngle")}} interface allows you to convert the angle's value to a specified unit type. This method is used when you want to convert an angle from its current unit type to another specified unit.

## Description

The method converts the `SVGAngle`'s value to the desired unit type, which can be one of several predefined constants like degrees, radians, or gradians. The `SVGAngle`'s current value is converted into the specified unit type.

## Syntax

```js
svgAngle.convertToSpecifiedUnits(unitType);
```

## Parameters

- **{{domxref("SVGAngle.unitType")}}**
  A constant representing the unit type to which the angle's value should be converted. This can be one of the following:
  - `SVG_ANGLETYPE_DEG` — Degrees
  - `SVG_ANGLETYPE_RAD` — Radians
  - `SVG_ANGLETYPE_GRAD` — Gradians
  - `SVG_ANGLETYPE_UNSPECIFIED` — Unitless (a number only)

## Behavior

1. **On Calling `convertToSpecifiedUnits()`**:

   - If the `SVGAngle` object is read-only, a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is thrown.
   - If `unitType` is `SVG_ANGLETYPE_UNKNOWN` or any unsupported unit type, a {{domxref("DOMException")}} with code `NOT_SUPPORTED_ERR` is thrown.
   - The method converts the current value of the `SVGAngle` to the specified `unitType` and updates its value accordingly.

2. **Reserialization**
   If the `SVGAngle` reflects the base value of a reflected attribute (or an element of the base value), the reflected attribute is re-serialized to reflect the updated angle.

## Exceptions

- **`NO_MODIFICATION_ALLOWED_ERR`**
  Thrown if the `SVGAngle` object is read-only and modification is attempted.

- **`NOT_SUPPORTED_ERR`**
  Thrown if the `unitType` is not a valid value or is `SVG_ANGLETYPE_UNKNOWN`.

## Examples

Converting an angle to degrees

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the angle's value in radians (Math.PI / 2)
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// Convert the angle's value to degrees
angle.convertToSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG);

// Retrieve the angle's value in degrees
console.log(angle.value); // Outputs: 90
console.log(angle.unitType); // Outputs: 2 (SVG_ANGLETYPE_DEG)
```

Attempting to convert to an unsupported unit type

```js
try {
  // Create an SVGAngle object
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const angle = svg.createSVGAngle();

  // Attempt to convert to an invalid unit type
  angle.convertToSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_UNKNOWN);
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
- {{domxref("SVGAngle.newValueSpecifiedUnits")}}
