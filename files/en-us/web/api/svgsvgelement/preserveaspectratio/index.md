---
title: "SVGSVGElement: preserveAspectRatio property"
short-title: preserveAspectRatio
slug: Web/API/SVGSVGElement/preserveAspectRatio
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.preserveAspectRatio
---

{{APIRef("SVG")}}

The **`preserveAspectRatio`** read-only property of the {{domxref("SVGSVGElement")}} interface reflects the {{SVGAttr("preserveAspectRatio")}} attribute of the given element. It defines how the SVG element's content should be scaled to fit the given space, preserving its aspect ratio.

## Value

An {{domxref("SVGAnimatedPreserveAspectRatio")}} object.

## Example

Given the following SVG, we can use the `preserveAspectRatio` property to retrieve the scaling behavior for the SVG element:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  preserveAspectRatio="xMidYMid meet">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

We can access the `preserveAspectRatio` attribute:

```js
const svgElement = document.querySelector("svg");

console.log(svgElement.preserveAspectRatio.baseVal); // output: SVGPreserveAspectRatio {align: 1, meetOrSlice: 1}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("preserveAspectRatio")}}
