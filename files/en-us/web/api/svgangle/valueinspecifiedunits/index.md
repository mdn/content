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

## Description

The `valueInSpecifiedUnits` property lets you interact with the numeric portion of an angle, separate from the unit type (e.g., degrees or radians).

- When **getting** the property, if the value is a unitless `<number>`, that number is returned. Otherwise, if the value is an angle, the numeric factor is returned, while the unit (such as degrees) is omitted.
- When **setting** the property, the numeric factor is updated, and the value of the `SVGAngle` object is adjusted accordingly. If the angle is in units (e.g., degrees or radians), the unit remains unchanged, and only the numeric factor is modified.

If the `SVGAngle` object is **read-only**, setting the `valueInSpecifiedUnits` will throw a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR`.

## Behavior

- **`On Get`**:

  1. The internal value of the `SVGAngle` is accessed.
  2. If the value is a `<number>`, that number is returned.
  3. If the value is an `<angle>`, the numeric factor (without the unit) is returned.

- **`On Set`**:
  1. If the `SVGAngle` object is read-only, a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is thrown.
  2. The internal numeric value is updated to the provided number.
  3. If the value is an angle, only the numeric part of the angle is updated, leaving the unit unchanged.
  4. If the `SVGAngle` reflects the base value of a reflected attribute, the corresponding attribute is **re-serialized** to reflect the new numeric value.

## Exceptions

- **`On Set`**: A `DOMException` with code `NO_MODIFICATION_ALLOWED_ERR` is thrown if the `SVGAngle` object is read-only.

## Examples

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the value of the angle in degrees
angle.value = 45;
console.log(angle.valueInSpecifiedUnits); // Outputs: 45

// Update the numeric factor of the angle
angle.valueInSpecifiedUnits = 90;
console.log(angle.valueInSpecifiedUnits); // Outputs: 90
console.log(angle.value); // Outputs: 90 (with the same unit, degrees)
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
  angle.valueInSpecifiedUnits = 90; // Throws an error
} catch (e) {
  console.error(e.name); // Outputs: NoModificationAllowedError
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
