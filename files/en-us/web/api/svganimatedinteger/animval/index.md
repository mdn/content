---
title: "SVGAnimatedInteger: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedInteger/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedInteger.animVal
---

{{APIRef("SVG")}}

The **`animVal`** property of the {{domxref("SVGAnimatedInteger")}} interface represents the animated value of an [`<integer>`](/en-US/docs/Web/SVG/Content_type#integer). If no animation is applied, `animVal` equals `baseVal`.

Some attributes, like the {{SVGAttr("numOctaves")}} attribute of the {{SVGElement("feTurbulence")}} element or the {{SVGAttr("order")}} attribute of the {{SVGElement("feConvolveMatrix")}} accept a `long` integer as a value. This property provides access to the current animated state of the attribute as a number.

## Value

A `long`; the animated value of the attribute.

## Examples

```js
const feTurbulence = document.querySelector("feTurbulence");

// Set the animatable 'numOctaves' attribute
feTurbulence.setAttribute("numOctaves", "4");

// Access the SVGAnimatedInteger object
const animatedInteger = feTurbulence.numOctaves;

// Get the animated value (read-only)
console.log(animatedInteger.animVal); // Output: 4 (the current animated value)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<integer>`](/en-US/docs/Web/SVG/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
