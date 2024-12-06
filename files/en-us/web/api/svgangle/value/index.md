---
title: "SVGAngle: value property"
short-title: value
slug: Web/API/SVGAngle/value
page-type: web-api-instance-property
browser-compat: api.SVGAngle.value
---

{{APIRef("SVG")}}

The `value` property of the {{domxref("SVGAngle")}} interface represents the numeric value of the angle in **degrees**. Setting this property automatically updates the {{domxref("SVGAngle.valueInSpecifiedUnits")}} and {{domxref("SVGAngle.valueAsString")}} attributes of the `SVGAngle` object.

## Value

A floating-point number indicating the angle value in degrees.

## Examples

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the value
angle.value = 45;
console.log(angle.value); // Output: 45

// Reflecting the value
angle.value = 90;
console.log(angle.value); // Output: 90
```

Attempting to modify a read-only `SVGAngle` object will result in an error:

```js
try {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  rect.setAttribute("transform", "rotate(45)");
  svg.appendChild(rect);

  // Access the animVal (read-only)
  const angle = rect.transform.baseVal.getItem(0).angle;
  angle.value = 90; // Throws an error
} catch (e) {
  console.error(e.name); // Output: NoModificationAllowedError
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAngle.unitType")}}
- {{domxref("SVGAngle.valueInSpecifiedUnits")}}
- {{domxref("SVGAngle.valueAsString")}}
