---
title: "SVGAngle: valueInSpecifiedUnits property"
short-title: valueInSpecifiedUnits
slug: Web/API/SVGAngle/valueInSpecifiedUnits
page-type: web-api-instance-property
browser-compat: api.SVGAngle.valueInSpecifiedUnits
---

{{APIRef("SVG")}}

The `valueInSpecifiedUnits` property of the {{domxref("SVGAngle")}} interface represents the numeric factor of the angle's value. It provides access to the angle value **without its unit**, allowing you to retrieve or modify the numeric portion of the angle while preserving its associated unit.

## Value

A floating-point number representing the numeric factor of the angle.

## Examples

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the value of the angle in degrees
angle.value = 45;
console.log(angle.valueInSpecifiedUnits); // Output: 45

// Update the numeric factor of the angle
angle.valueInSpecifiedUnits = 90;
console.log(angle.valueInSpecifiedUnits); // Output: 90
console.log(angle.value); // Output: 90 (with the same unit, degrees)
```

### Attempting to modify a read-only `SVGAngle` object

```js
try {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  rect.setAttribute("transform", "rotate(45)");
  svg.appendChild(rect);

  // Access the animVal (read-only)
  const angle = rect.transform.baseVal.getItem(0).angle;
  angle.valueInSpecifiedUnits = 90; // Throws an error
} catch (e) {
  console.error(e.name); // Output: NoModificationAllowedError
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAngle.value")}}
- {{domxref("SVGAngle.unitType")}}
- {{domxref("SVGAngle.valueAsString")}}
