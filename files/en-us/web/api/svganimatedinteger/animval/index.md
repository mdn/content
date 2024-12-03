---
title: "SVGAnimatedInteger: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedInteger/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedInteger.animVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedInteger.animVal`** property of the {{domxref("SVGAnimatedInteger")}} interface represents the animated value of an integer attribute. If no animation is applied, `animVal` equals `baseVal`.

For attributes that accept two integers, `animVal` reflects either the first or second integer, depending on the associated object.

## Steps for Accessing animVal

1. **Getting `animVal`**:
   - Retrieve the value of the reflected attribute, or use its initial value if not present or invalid.
   - If the attribute accepts two integers:
     - If this object reflects the first integer, return the first value.
     - If this object reflects the second integer, return the second value if explicitly specified, or the implicit value as defined by the attribute.
   - Otherwise, return the single integer value of the attribute.

## Value

A read-only `long` integer representing the animated value of the attribute.

## Examples

```js
// Assume an existing SVG element with an animated integer attribute
const feTurbulence = document.querySelector("feTurbulence");

// Access the SVGAnimatedInteger object
const animatedInteger = feTurbulence.numOctaves;

// Get the animated value (read-only)
console.log(animatedInteger.animVal); // Outputs the current animated value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger.baseVal")}}
