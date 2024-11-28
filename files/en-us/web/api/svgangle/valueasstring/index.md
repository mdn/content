---
title: "SVGAngle: valueAsString property"
short-title: valueAsString
slug: Web/API/SVGAngle/valueAsString
page-type: web-api-instance-property
browser-compat: api.SVGAngle.valueAsString
---

{{APIRef("SVG")}}

The `valueAsString` property of the {{domxref("SVGAngle")}} interface represents the angle's value as a **string**. This string reflects the angle's numeric value and unit (if applicable), and is formatted in a way that can be parsed back to a number or angle using CSS syntax.

## Value

A string representing the value of the angle, including the numeric factor and the appropriate unit (if applicable).

## Description

The `valueAsString` property allows you to retrieve or set the `SVGAngle` value as a string.

- When **getting** the property, the numeric factor of the angle is represented as a string. If the value is an angle (e.g., in degrees or radians), the unit is appended to the numeric value.
- When **setting** the property, the string value is parsed using CSS syntax for a `<number>` or `<angle>`. The parsed value is then assigned to the `SVGAngle` object.

If the `SVGAngle` object is **read-only**, setting the `valueAsString` property will throw a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR`.

## Behavior

- **`On Get`**:

  1. The internal value of the `SVGAngle` is accessed.
  2. If the value is a `<number>`, that number is returned as a string.
  3. If the value is an `<angle>`, the numeric factor is returned as a string, followed by the canonical spelling of the unit (e.g., "deg" for degrees).
  4. The string is formatted in a way that, if parsed using CSS syntax, would return the closest numeric value to the internal factor.

- **`On Set`**:
  1. If the `SVGAngle` object is read-only, a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is thrown.
  2. The string value is parsed according to CSS syntax for `<number>` or `<angle>`.
  3. If parsing fails, a {{domxref("DOMException")}} with code `SYNTAX_ERR` is thrown.
  4. If parsing is successful, the `SVGAngle` value is updated to the parsed value.
  5. If the `SVGAngle` reflects the base value of a reflected attribute, the corresponding attribute is **re-serialized** to reflect the new value.

## Exceptions

- **`On Set`**: A {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is thrown if the `SVGAngle` object is read-only.
- **`On Set`**: A {{domxref("DOMException")}} with code `SYNTAX_ERR` is thrown if the string value cannot be parsed as a valid number or angle.

## Examples

Setting and retrieving `valueAsString`

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the value using valueAsString in degrees
angle.valueAsString = "45deg";
console.log(angle.valueAsString); // Outputs: "45deg"
console.log(angle.value); // Outputs: 45 (in degrees)

// Set the value using valueAsString in radians
angle.valueAsString = "1.57rad";
console.log(angle.valueAsString); // Outputs: "1.57rad"
console.log(Math.round(angle.value)); // Outputs: 90 (since 1.57 radians is approximately 90 degrees)
```

Parsing an invalid value

```js
try {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const angle = svg.createSVGAngle();

  // Attempt to set an invalid valueAsString
  angle.valueAsString = "invalidValue"; // Throws a SyntaxError
} catch (e) {
  console.error(e); // Outputs: SyntaxError
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
