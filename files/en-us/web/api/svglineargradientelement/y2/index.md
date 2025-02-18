---
title: "SVGLinearGradientElement: y2 property"
short-title: y2
slug: Web/API/SVGLinearGradientElement/y2
page-type: web-api-instance-property
browser-compat: api.SVGLinearGradientElement.y2
---

{{APIRef("SVG")}}

The **`y2`** read-only property of the {{domxref("SVGLinearGradientElement")}} interface describes the y-axis coordinate of the start point of the gradient as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("y2")}} attribute on the {{SVGElement("linearGradient")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the y-coordinate of the gradient's end point in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient1" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
    <linearGradient id="gradient2" x1="25%" y1="0%" x2="75%" y2="100%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

We can access the computed values of the `y2` attributes:

```js
const linearGradients = document.querySelectorAll("linearGradient");
const y2Gradient1 = linearGradients[0].y2;
const y2Gradient2 = linearGradients[1].y2;

console.dir(y2Gradient1.baseVal.value); // output: 200 (100% of 200)
console.dir(y2Gradient2.baseVal.value); // output: 200 (100% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGLinearGradientElement.y1")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
