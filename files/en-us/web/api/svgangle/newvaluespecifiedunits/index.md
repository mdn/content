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

- **{{domxref("SVGAngle.unitType")}}**
  A constant representing the unit type for the angle. This can be one of the following:

  - `SVG_ANGLETYPE_DEG` — Degrees
  - `SVG_ANGLETYPE_RAD` — Radians
  - `SVG_ANGLETYPE_GRAD` — Gradians
  - `SVG_ANGLETYPE_UNSPECIFIED` — Unitless (a number only)

- **{{domxref("SVGAngle.valueInSpecifiedUnits")}}**
  The numeric factor for the angle value, expressed in the specified unit type (e.g., a number for degrees, radians, or gradians).

### Return Value

A reference to the updated {{domxref("SVGAngle")}} object.

If the `newValueSpecifiedUnits()` method is successfully called, the `SVGAngle` object's `valueInSpecifiedUnits` is updated to the specified numeric factor, and the `unitType` is set to the provided unit type. For `SVG_ANGLETYPE_UNSPECIFIED`, the angle is treated as a unitless number. When the `SVGAngle` reflects a base value of an attribute, the corresponding attribute is re-serialized to reflect the updated angle.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NO_MODIFICATION_ALLOWED_ERR` {{domxref("DOMException")}}
  - : Thrown if the `SVGAngle` object is read-only and modification is attempted.
- `NOT_SUPPORTED_ERR` {{domxref("DOMException")}}
  - : Thrown if the `unitType` is not a valid value or is `SVG_ANGLETYPE_UNKNOWN`.

## Examples

Setting an angle in degrees

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

Setting an angle in radians

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

Setting an angle in gradians

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

Attempting to set an unsupported unit type

```js
try {
  // Create an SVGAngle object
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const angle = svg.createSVGAngle();

  // Attempt to set an invalid unit type
  angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_UNKNOWN, 45);
} catch (e) {
  console.error(e.name); // Output: NotSupportedError
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
