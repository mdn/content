---
title: "SVGLength: valueInSpecifiedUnits property"
short-title: valueInSpecifiedUnits
slug: Web/API/SVGLength/valueInSpecifiedUnits
page-type: web-api-instance-property
browser-compat: api.SVGLength.valueInSpecifiedUnits
---

{{APIRef("SVG")}}

The `valueInSpecifiedUnits` property of the {{domxref("SVGLength")}} interface represents floating point value, in the units expressed by {{domxref("SVGLength.unitType", "unitType")}}.

Setting this attribute will cause {{domxref("SVGLength.value", "value")}} and {{domxref("SVGLength.valueAsString", "valueAsString")}} to be updated automatically to reflect this setting.

## Value

The numeric factor of the length as a float.

## Examples

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set the value of the length
length.value = 10;
console.log(length.valueInSpecifiedUnits); // Output: 10

// Update the numeric factor of the length
length.valueInSpecifiedUnits = 20;
console.log(length.valueInSpecifiedUnits); // Output: 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength")}}
