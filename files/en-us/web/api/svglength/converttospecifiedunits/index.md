---
title: "SVGLength: convertToSpecifiedUnits() method"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGLength/convertToSpecifiedUnits
page-type: web-api-instance-method
browser-compat: api.SVGLength.convertToSpecifiedUnits
---

{{APIRef("SVG")}}

The `convertToSpecifiedUnits()` method of the {{domxref("SVGLength")}} interface allows you to convert the length's value to the specified unit type.

This function will:

- Set the {{domxref("SVGLength.unitType", "unitType")}} property to the given unit type
- Update the {{domxref("SVGLength.valueInSpecifiedUnits", "valueInSpecifiedUnits")}} and {{domxref("SVGLength.valueAsString", "valueAsString")}} properties so the length value is represented in the given unit type

## Syntax

```js-nolint
convertToSpecifiedUnits(unitType)
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

### Return value

None ({{jsxref('undefined')}}).

## Examples

### Converting a length to mm

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set a length value in centimeters
length.valueAsString = "0.5cm";

// Convert the length to millimeters
length.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_MM);

console.log(length.unitType); // Output: 7 (SVG_LENGTHTYPE_MM)
console.log(length.valueInSpecifiedUnits); // Output: 5
console.log(length.valueAsString); // Output: "5mm"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength")}}
