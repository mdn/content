---
title: "SVGAngle: value property"
short-title: value
slug: Web/API/SVGAngle/value
page-type: web-api-instance-property
browser-compat: api.SVGAngle.value
---

{{APIRef("SVG")}}

The `value` property of the {{domxref("SVGAngle")}} interface represents the numeric value of the angle in **degrees**. This property can be **read** or **set**, depending on whether the `SVGAngle` object is read-only.

## Value

A floating-point number indicating the angle value in degrees.

## Description

The `value` property provides direct access to the angle's numeric value in degrees. Setting this property automatically updates the other attributes of the `SVGAngle` object, such as {{domxref("SVGAngle.valueInSpecifiedUnits")}} and {{domxref("SVGAngle.valueAsString")}}.

However, if the `SVGAngle` object is **read-only**, an attempt to set the `value` property will throw a `NO_MODIFICATION_ALLOWED_ERR`.

## Behavior

- **`On Get`**:

  1. The internal value of the `SVGAngle` is accessed.
  2. If the internal value is a `<number>` (unitless), that number is returned directly.
  3. Otherwise, the internal value is converted into degrees and returned.

- **`On Set`**:

  1. If the `SVGAngle` object is read-only, a {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is thrown.
  2. The internal value is updated to the provided number, interpreted as degrees.
  3. If the `SVGAngle` reflects the base value of a reflected attribute, the corresponding attribute is **re-serialized** to reflect the new value.

## Exceptions

- **`On Set`**: A {{domxref("DOMException")}} with code `NO_MODIFICATION_ALLOWED_ERR` is thrown if the `SVGAngle` object is read-only.

## Examples

```js
// Create an SVGAngle object
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const angle = svg.createSVGAngle();

// Set the value
angle.value = 45;
console.log(angle.value); // Outputs: 45

// Reflecting the value
angle.value = 90;
console.log(angle.value); // Outputs: 90
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
  console.error(e.name); // Outputs: NoModificationAllowedError
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
