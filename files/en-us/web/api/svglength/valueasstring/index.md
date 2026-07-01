---
title: "SVGLength: valueAsString property"
short-title: valueAsString
slug: Web/API/SVGLength/valueAsString
page-type: web-api-instance-property
browser-compat: api.SVGLength.valueAsString
---

{{APIRef("SVG")}}

The `valueAsString` property of the {{domxref("SVGLength")}} interface represents the [\<length>](/en-US/docs/Web/SVG/Guides/Content_type#length)'s value as a string, in the units expressed by {{domxref("SVGLength.unitType", "unitType")}}.

Setting this attribute will cause {{domxref("SVGLength.value", "value")}}, {{domxref("SVGLength.valueInSpecifiedUnits", "valueInSpecifiedUnits")}}, and {{domxref("SVGLength.unitType", "unitType")}} to be updated automatically to reflect this setting.

## Value

A string.

## Examples

### Setting and retrieving `valueAsString`

```js
// Create an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set the length as a string
length.valueAsString = "45%";
console.log(length.valueAsString); // Output: "45%"
console.log(length.unitType); // Output: 2 (SVG_LENGTHTYPE_PERCENTAGE)
console.log(length.valueInSpecifiedUnits); // Output: 45

// Change the length value
length.valueAsString = "100px";
console.log(length.valueAsString); // Output: "100px"
console.log(length.unitType); // Output: 5 (SVG_LENGTHTYPE_PX)
console.log(length.value); // Output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<number>`](/en-US/docs/Web/SVG/Guides/Content_type#number)
- [`<length>`](/en-US/docs/Web/SVG/Guides/Content_type#length)
- {{domxref("SVGAnimatedLength")}}
