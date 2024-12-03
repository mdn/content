---
title: "SVGAnimatedNumber: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedNumber/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumber.animVal
---

{{APIRef("SVG")}}

The **`SVGAnimatedNumber.animVal`** read-only property of the {{domxref("SVGAnimatedNumber")}} interface represents the animated value of an SVG attribute that takes a single `<number>` or one part of an attribute accepting a `<number>` followed by an optional second `<number>`.

## Steps for Accessing animVal

1. **Getting `animVal`**:

   - Retrieve the value of the reflected attribute.
   - If the attribute is currently being animated, `animVal` reflects the real-time animation value.
   - If not animated, `animVal` is identical to {{domxref("SVGAnimatedNumber.baseVal")}}.

## Value

A `float` representing the animated value of the reflected attribute.

## Examples

```js
// Create an SVG element and animate a numeric attribute
const svgNamespace = "http://www.w3.org/2000/svg";
const rect = document.createElementNS(svgNamespace, "rect");
rect.setAttribute("width", "100");

// Access the SVGAnimatedNumber object
const animatedWidth = rect.width;

// Simulate animation (for example, through CSS or JS)
console.log(animatedWidth.animVal); // Outputs: 100 (or animated value if in motion)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
