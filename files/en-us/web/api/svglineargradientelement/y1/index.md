---
title: "SVGLinearGradientElement: y1 property"
short-title: y1
slug: Web/API/SVGLinearGradientElement/y1
page-type: web-api-instance-property
browser-compat: api.SVGLinearGradientElement.y1
---

{{APIRef("SVG")}}

The **`y1`** read-only property of the {{domxref("SVGLinearGradientElement")}} interface describes the y-axis coordinate of the start point of the gradient as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("y1")}} attribute on the {{SVGElement("linearGradient")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the y-coordinate of the gradient's starting point in the user coordinate system.

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

We can access the computed values of the `y1` attributes:

```js
const linearGradients = document.querySelectorAll("linearGradient");
const y1Gradient1 = linearGradients[0].y1;
const y1Gradient2 = linearGradients[1].y1;

console.dir(y1Gradient1.baseVal.value); // output: 0 (0% of 200)
console.dir(y1Gradient2.baseVal.value); // output: 0 (0% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGLinearGradientElement.y2")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
