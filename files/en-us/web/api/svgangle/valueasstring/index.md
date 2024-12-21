---
title: "SVGAngle: valueAsString property"
short-title: valueAsString
slug: Web/API/SVGAngle/valueAsString
page-type: web-api-instance-property
browser-compat: api.SVGAngle.valueAsString
---

{{APIRef("SVG")}}

The `valueAsString` property of the {{domxref("SVGAngle")}} interface represents the angle's value as a **string**. This string reflects the angle's numeric value and unit (if applicable), and is formatted in a way that can be parsed back to a [`<number>`](/en-US/docs/Web/SVG/Content_type#number) or [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) using CSS syntax.

## Value

A `string`; the value of the angle.

## Examples

### Setting and retrieving `valueAsString`

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the value using valueAsString in degrees
angle.valueAsString = "45deg";
console.log(angle.valueAsString); // Output: "45deg"
console.log(angle.value); // Output: 45 (in degrees)

// Set the value using valueAsString in radians
angle.valueAsString = "1.57rad";
console.log(angle.valueAsString); // Output: "1.57rad"
console.log(Math.round(angle.value)); // Output: 90 (since 1.57 radians is approximately 90 degrees)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<number>`](/en-US/docs/Web/SVG/Content_type#number)
- [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle)
- {{domxref("SVGAnimatedAngle")}}
