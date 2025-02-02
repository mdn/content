---
title: "SVGAngle: newValueSpecifiedUnits() method"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGAngle/newValueSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGAngle.newValueSpecifiedUnits
---

{{APIRef("SVG")}}

The `newValueSpecifiedUnits()` method of the {{domxref("SVGAngle")}} interface sets the value to a number with an associated {{domxref("SVGAngle.unitType", "unitType")}}, thereby replacing the values for all of the attributes on the object.

## Syntax

```js-nolint
newValueSpecifiedUnits(unitType, valueInSpecifiedUnits)
```

### Parameters

- `unitType`

  - : A constant representing the unit type to which the angle's value should be converted. This must be one of the constant values defined for the {{domxref("SVGAngle.unitType", "unitType")}} property, with the exception of `SVG_ANGLETYPE_UNKNOWN`.
    - `SVGAngle.SVG_ANGLETYPE_DEG`: convert to degrees
    - `SVGAngle.SVG_ANGLETYPE_RAD`: convert to radians
    - `SVGAngle.SVG_ANGLETYPE_GRAD`: convert to gradians
    - `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: convert to a unitless number, interpreted as degrees

- `valueInSpecifiedUnits`
  - : The numeric factor for the angle value, expressed in the specified unit type.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NotSupportedError` {{domxref("DOMException")}}

  - : Thrown if `unitType` is `SVG_ANGLETYPE_UNKNOWN` or not a valid unit type constant.

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGAngle")}} corresponds to a read-only attribute or when the object itself is read-only.

## Examples

### Setting an angle in degrees

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle's value in degrees using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// Retrieve the angle's value in degrees
console.log(angle.value); // Output: 45
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
```

### Setting an angle in radians

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle's value in radians using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// Retrieve the angle's value
console.log(angle.value); // Output: 90
console.log(angle.unitType); // Output: 3 (SVG_ANGLETYPE_RAD)
```

### Setting an angle in gradians

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
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
