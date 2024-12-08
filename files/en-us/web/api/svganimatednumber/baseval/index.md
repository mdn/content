---
title: "SVGAnimatedNumber: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedNumber/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumber.baseVal
---

{{APIRef("SVG")}}

The **`baseVal`** property of the {{domxref("SVGAnimatedNumber")}} interface represents the base (non-animated) value of an animatable numeric attribute.

This property reflects the static (non-animated) state of the {{SVGAttr("radius")}} attribute of the {{SVGElement("circle")}} or {{SVGElement("ellipse")}} elements, the {{SVGAttr("opacity")}} attribute of an {{SVGElement("SVGElement")}}, the {{SVGAttr("width")}} and {{SVGAttr("height")}} attributes of the {{SVGElement("rect")}} element, or similar attributes, providing access to the base value unaffected by any ongoing animations.

## Value

A `float` representing the base (non-animated) value of the reflected attribute.

## Examples

```js
const path = document.querySelector("path");

// Set the animatable 'pathLength' attribute
path.setAttribute("pathLength", "10");

// Access the SVGAnimatedNumber object
const animatedNumber = path.pathLength;

// Get the base value
console.log(animatedNumber.baseVal); // Output: 10

// Modify the base value
animatedNumber.baseVal = 15;

// Verify the reflected attribute value
console.log(path.getAttribute("pathLength")); // Output: "15"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
