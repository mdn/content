---
title: "SVGAngle: valueAsString property"
short-title: valueAsString
slug: Web/API/SVGAngle/valueAsString
page-type: web-api-instance-property
browser-compat: api.SVGAngle.valueAsString
---

{{APIRef("SVG")}}

The `valueAsString` property of the {{domxref("SVGAngle")}} interface represents the angle's value as a string, in the units expressed by {{domxref("SVGAngle.unitType", "unitType")}}.

Setting this attribute will cause {{domxref("SVGAngle.value", "value")}}, {{domxref("SVGAngle.valueInSpecifiedUnits", "valueInSpecifiedUnits")}}, and {{domxref("SVGAngle.unitType", "unitType")}} to be updated automatically to reflect this setting.

## Value

A string; the value of the angle.

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

- [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle)
- {{domxref("SVGAnimatedAngle")}}
