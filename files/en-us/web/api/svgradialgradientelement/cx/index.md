---
title: "SVGRadialGradientElement: cx property"
short-title: cx
slug: Web/API/SVGRadialGradientElement/cx
page-type: web-api-instance-property
browser-compat: api.SVGRadialGradientElement.cx
---

{{APIRef("SVG")}}

The **`cx`** read-only property of the {{domxref("SVGRadialGradientElement")}} interface describes the x-axis coordinate of the center of the radial gradient as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("cx")}} attribute on the {{SVGElement("radialGradient")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the x-coordinate of the radial gradient's center in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="50" cy="75" r="30">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
    <radialGradient id="gradient2" cx="25%" cy="50%" r="10%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

We can access the computed values of the `cx` attributes:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const cxGradient1 = radialGradients[0].cx;
const cxGradient2 = radialGradients[1].cx;

console.dir(cxGradient1.baseVal.value); // output: 50
console.dir(cxGradient2.baseVal.value); // output: 50 (25% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGRadialGradientElement.cy")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
