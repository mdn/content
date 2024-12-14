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

```html
<path d="M 0,40 h100" pathLength="90" id="path">
  <animate
    attributeName="pathLength"
    values="50; 90; 50;"
    dur="10s"
    repeatCount="indefinite" />
</path>
```

```js
const path = document.getElementById("path");

// Access the SVGAnimatedNumber object
const animatedPathLength = path.pathLength;

// Get the base value
console.log(animatedPathLength.baseVal); // Output: 90
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedInteger")}}
- {{domxref("SVGElement")}}
