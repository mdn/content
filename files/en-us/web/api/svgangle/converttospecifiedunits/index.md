---
title: "SVGAngle: convertToSpecifiedUnits() method"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGAngle/convertToSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGAngle.convertToSpecifiedUnits
---

{{APIRef("SVG")}}

The `convertToSpecifiedUnits()` method of the {{domxref("SVGAngle")}} interface allows you to convert the angle's value to the specified unit type.

This function will:

- Set the {{domxref("SVGAngle.unitType", "unitType")}} property to the given unit type
- Update the {{domxref("SVGAngle.valueInSpecifiedUnits", "valueInSpecifiedUnits")}} and {{domxref("SVGAngle.valueAsString", "valueAsString")}} properties so the angle value is represented in the given unit type

## Syntax

```js-nolint
convertToSpecifiedUnits(unitType)
```

### Parameters

- `unitType`
  - : A constant representing the unit type to which the angle's value should be converted. This must be one of the constant values defined for the {{domxref("SVGAngle.unitType", "unitType")}} property, with the exception of `SVG_ANGLETYPE_UNKNOWN`.
    - `SVGAngle.SVG_ANGLETYPE_DEG`: convert to degrees
    - `SVGAngle.SVG_ANGLETYPE_RAD`: convert to radians
    - `SVGAngle.SVG_ANGLETYPE_GRAD`: convert to gradians
    - `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: convert to a unitless number, interpreted as degrees

### Return value

None ({{jsxref('undefined')}}).

## Examples

### Converting an angle to degrees

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle's value in radians (Math.PI / 2)
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// Retrieve the angle's value as a string
console.log(angle.valueAsString); // Output: 1.5708rad
console.log(angle.unitType); // Output: 3 (SVG_ANGLETYPE_RAD)

// Convert the angle's value to degrees
angle.convertToSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG);

// Retrieve the angle's value as a string
console.log(angle.valueAsString); // Output: 90deg
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedAngle")}}
