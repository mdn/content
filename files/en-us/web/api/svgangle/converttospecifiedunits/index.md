---
title: "SVGAngle: convertToSpecifiedUnits() method"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGAngle/convertToSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGAngle.convertToSpecifiedUnits
---

{{APIRef("SVG")}}

The `convertToSpecifiedUnits()` method of the {{domxref("SVGAngle")}} interface allows you to convert the angle's value to a specified unit type. This method is used when you want to convert an angle from its current unit type to another specified unit.

## Syntax

```js
svgAngle.convertToSpecifiedUnits(unitType);
```

### Parameters

- `unitType`
  - : A constant representing the unit type to which the angle's value should be converted. This must be one of the constant values defined for the {{domxref("SVGAngle.unitType")}} property, with the exception of `SVG_ANGLETYPE_UNKNOWN`.
    - `SVGAngle.SVG_ANGLETYPE_DEG`: convert to degrees
    - `SVGAngle.SVG_ANGLETYPE_RAD`: convert to radians
    - `SVGAngle.SVG_ANGLETYPE_GRAD`: convert to gradians
    - `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: convert to a unitless number, interpreted as degrees

### Return Value

A reference to the updated {{domxref("SVGAngle")}} object.

When the `convertToSpecifiedUnits()` method is successfully called, the `SVGAngle` object's `valueInSpecifiedUnits` is converted to match the specified `unitType`, and its value is updated accordingly. If the `SVGAngle` reflects the base value of an attribute, the corresponding attribute is re-serialized to reflect the updated angle.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NO_MODIFICATION_ALLOWED_ERR` {{domxref("DOMException")}}
  - : Thrown if the `SVGAngle` object is read-only and modification is attempted.
- `NOT_SUPPORTED_ERR` {{domxref("DOMException")}}
  - : Thrown if the `unitType` is not a valid value or is `SVG_ANGLETYPE_UNKNOWN`.

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
console.log(angle.value); // Output: 90
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
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
- {{domxref("SVGAngle.newValueSpecifiedUnits")}}
