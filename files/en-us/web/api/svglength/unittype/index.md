---
title: "SVGLength: unitType property"
short-title: unitType
slug: Web/API/SVGLength/unitType
page-type: web-api-instance-property
browser-compat: api.SVGLength.unitType
---

{{APIRef("SVG")}}

The **`unitType`** property of the {{domxref("SVGLength")}} interface that represents type of the value as specified by one of the `SVG_LENGTHTYPE_*` constants defined on this interface.

## Value

One of the following:

- `SVGLength.SVG_LENGTHTYPE_UNKNOWN` (0)
- `SVGLength.SVG_LENGTHTYPE_NUMBER` (1)
- `SVGLength.SVG_LENGTHTYPE_PERCENTAGE` (2)
- `SVGLength.SVG_LENGTHTYPE_EMS` (3)
- `SVGLength.SVG_LENGTHTYPE_EXS` (4)
- `SVGLength.SVG_LENGTHTYPE_PX` (5)
- `SVGLength.SVG_LENGTHTYPE_CM` (6)
- `SVGLength.SVG_LENGTHTYPE_MM` (7)
- `SVGLength.SVG_LENGTHTYPE_IN` (8)
- `SVGLength.SVG_LENGTHTYPE_PT` (9)
- `SVGLength.SVG_LENGTHTYPE_PC` (10)

## Examples

Here's an example of how to access the `unitType` property:

```js
// Get an SVGLength object
const svg = document.querySelector("svg");

// Assume `length` is an instance of SVGLength
const length = svg.createSVGLength();

// Set the length value
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 20);

// Check the unit type
console.log(length.unitType); // Output: 2 (SVG_LENGTHTYPE_PERCENTAGE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength")}}
