---
title: "SVGAngle: valueAsString property"
short-title: valueAsString
slug: Web/API/SVGAngle/valueAsString
page-type: web-api-instance-property
browser-compat: api.SVGAngle.valueAsString
---

{{APIRef("SVG")}}

The `valueAsString` property of the {{domxref("SVGAngle")}} interface represents the angle's value as a **string**. This string reflects the angle's numeric value and unit (if applicable), and is formatted in a way that can be parsed back to a [`<number>`](/en-US/docs/Web/SVG/Content_type#number) or [`<angle>`](/en-US/docs/Web/SVG/Content_type#angle) using CSS syntax.

If the `SVGAngle` object is **read-only**, setting the `valueAsString` property will throw a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR`.

If the string value cannot be parsed as a valid number or angle, the `valueAsString` property will throw a {{domxref("DOMException")}} with code `SYNTAX_ERR`.

## Value

A string representing the value of the angle, including the numeric factor and the appropriate unit (if applicable).

## Examples

### Setting and retrieving `valueAsString`

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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

### Parsing an invalid value

```js
try {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const angle = svg.createSVGAngle();

  // Attempt to set an invalid valueAsString
  angle.valueAsString = "invalidValue"; // Throws a SyntaxError
} catch (e) {
  console.error(e); // Output: SyntaxError
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAngle.value")}}
- {{domxref("SVGAngle.unitType")}}
- {{domxref("SVGAngle.valueInSpecifiedUnits")}}
