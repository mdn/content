---
title: "SVGAnimatedNumber: animVal property"
short-title: animVal
slug: Web/API/SVGAnimatedNumber/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedNumber.animVal
---

{{APIRef("SVG")}}

The **`animVal`** read-only property of the {{domxref("SVGAnimatedNumber")}} interface represents the animated value of an SVG element's numeric attribute.

This property reflects the animated state of the {{SVGAttr("radius")}} attribute of the {{SVGElement("circle")}} or {{SVGElement("ellipse")}} elements, the {{SVGAttr("opacity")}} attribute of an {{SVGElement("SVGElement")}}, the {{SVGAttr("width")}} and {{SVGAttr("height")}} attributes of the {{SVGElement("rect")}} element, or similar attributes, providing access to the current animated value during animations.

## Value

A `float` representing the animated value of the reflected attribute.

## Examples

```html
<path d="M 0,40 h100" pathLength="90" id="pth">
  <animate
    attributeName="pathLength"
    values="50; 90; 50;"
    dur="10s"
    repeatCount="indefinite" />
</path>
```

```js
const rect = document.querySelector("rect");
rect.setAttribute("width", "100");

// Access the SVGAnimatedNumber object
const animatedWidth = rect.width;

// Simulate animation (for example, through CSS or JS)
console.log(animatedWidth.animVal); // Output: 100 (animated value in motion)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
