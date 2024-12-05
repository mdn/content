---
title: "SVGAnimatedInteger: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedInteger/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedInteger.animVal
---

{{APIRef("SVG")}}

The **`animVal`** property of the {{domxref("SVGAnimatedInteger")}} interface represents the animated value of an [`<integer>`](/en-US/docs/Web/SVG/Content_type#integer). If no animation is applied, `animVal` equals `baseVal`.

This property reflects the {{SVGAttr("numOctaves")}} attribute of the {{SVGElement("feTurbulence")}} element or the {{SVGAttr("order")}} attribute of the {{SVGElement("feConvolveMatrix")}} element as a read-only `long` integer, providing access to a static {{domxref("SVGAnimatedInteger")}} object.

## Value

A read-only `long` integer representing the animated value of the attribute.

## Examples

```js
const feTurbulence = document.querySelector("[feTurbulence]");

// Set the animatable 'numOctaves' attribute
feTurbulence.setAttribute("numOctaves", "4");

// Access the SVGAnimatedInteger object
const animatedInteger = feTurbulence.numOctaves;

// Get the animated value (read-only)
console.log(animatedInteger.animVal); // Outputs the current animated value, e.g., 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger.baseVal")}}
