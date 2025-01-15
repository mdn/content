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

An `integer`; the length type as an unsigned short.

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
