---
title: "SVGLength: newValueSpecifiedUnits() method"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGLength/newValueSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGLength.newValueSpecifiedUnits
---

{{APIRef("SVG")}}

The `newValueSpecifiedUnits()` method of the {{domxref("SVGLength")}} interface resets the value as a number with an associated {{domxref("SVGLength.unitType", "unitType")}}, thereby replacing the values for all of the attributes on the object.

## Syntax

```js-nolint
newValueSpecifiedUnits(unitType, valueInSpecifiedUnits)
```

### Parameters

- `unitType`

  - : A constant representing the unit type to which the length's value should be converted. This must be one of the constant values defined for the {{domxref("SVGLength.unitType", "unitType")}} property, with the exception of `SVG_LENGTHTYPE_UNKNOWN`.
    - `SVGLength.SVG_LENGTHTYPE_NUMBER`: convert to unitless number
    - `SVGLength.SVG_LENGTHTYPE_PERCENTAGE`: convert to percentage
    - `SVGLength.SVG_LENGTHTYPE_EMS`: convert to em units
    - `SVGLength.SVG_LENGTHTYPE_EXS`: convert to ex units
    - `SVGLength.SVG_LENGTHTYPE_PX`: convert to pixels
    - `SVGLength.SVG_LENGTHTYPE_CM`: convert to centimeters
    - `SVGLength.SVG_LENGTHTYPE_MM`: convert to millimeters
    - `SVGLength.SVG_LENGTHTYPE_IN`: convert to inches
    - `SVGLength.SVG_LENGTHTYPE_PT`: convert to points
    - `SVGLength.SVG_LENGTHTYPE_PC`: convert to picas

- `valueInSpecifiedUnits`
  - : The numeric factor for the length value, expressed in the specified unit type.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `unitType` is `SVG_LENGTHTYPE_UNKNOWN` or not a valid unit type constant.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGLength")}} corresponds to a read-only attribute or when the object itself is read-only.

## Examples

### Setting a length value with specific units

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set a new value with specific units
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, 45);
console.log(length.valueInSpecifiedUnits); // Output: 45
console.log(length.unitType); // Output: 1 (SVG_LENGTHTYPE_NUMBER)
console.log(length.value); // The value converted to the user coordinate system

// Change the value to pixels
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 100);
console.log(length.valueInSpecifiedUnits); // Output: 100
console.log(length.unitType); // Output: 5 (SVG_LENGTHTYPE_PX)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength")}}
