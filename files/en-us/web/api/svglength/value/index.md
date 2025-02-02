---
title: "SVGLength: value property"
short-title: value
slug: Web/API/SVGLength/value
page-type: web-api-instance-property
browser-compat: api.SVGLength.value
---

{{APIRef("SVG")}}

The `value` property of the {{domxref("SVGLength")}} interface represents the floating point value of the [\<length>](/en-US/docs/Web/SVG/Content_type#length) in user units.

Setting this attribute will cause {{domxref("SVGLength.valueInSpecifiedUnits")}} and {{domxref("SVGLength.valueAsString")}} to be updated automatically to reflect this setting.

## Value

The length value in user units as a float.

## Examples

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set the value
length.value = 10;
console.log(length.value); // Output: 10

// Reflecting the value
length.value = 20;
console.log(length.value); // Output: 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedLength")}}
