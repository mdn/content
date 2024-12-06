---
title: "SVGAnimatedInteger: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedInteger/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedInteger.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** property of the {{domxref("SVGAnimatedInteger")}} interface represents the base (non-animated) value of an animatable [`<integer>`](/en-US/docs/Web/SVG/Content_type#integer).

This property reflects the {{SVGAttr("numOctaves")}} attribute of the {{SVGElement("feTurbulence")}} element or the {{SVGAttr("order")}} attribute of the {{SVGElement("feConvolveMatrix")}} element as a read-only `long` integer, providing access to a static {{domxref("SVGAnimatedInteger")}} object.

## Value

A `long` integer representing the base (non-animated) value of the reflected attribute.

## Examples

```js
const feTurbulence = document.querySelector("feTurbulence");

// Set the animatable 'numOctaves' attribute
feTurbulence.setAttribute("numOctaves", "4");

// Access the SVGAnimatedInteger object
const animatedInteger = feTurbulence.numOctaves;

// Get the base value
console.log(animatedInteger.baseVal); // Outputs: 4

// Modify the base value
animatedInteger.baseVal = 6;

// Verify the reflected attribute value
console.log(feTurbulence.getAttribute("numOctaves")); // Outputs: "6"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<integer>`](/en-US/docs/Web/SVG/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
- {{SVGElement("feTurbulence")}}
- {{SVGElement("feConvolveMatrix")}}
