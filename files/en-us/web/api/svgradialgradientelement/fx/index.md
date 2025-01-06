---
title: "SVGRadialGradientElement: fx property"
short-title: fx
slug: Web/API/SVGRadialGradientElement/fx
page-type: web-api-instance-property
browser-compat: api.SVGRadialGradientElement.fx
---

{{APIRef("SVG")}}

The **`fx`** read-only property of the {{domxref("SVGRadialGradientElement")}} interface describes the x-axis coordinate of the focal point of the radial gradient as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("fx")}} attribute on the {{SVGElement("radialGradient")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the x-coordinate of the focal point of the radial gradient in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="50" cy="75" fx="30" fy="60" r="30">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
    <radialGradient id="gradient2" cx="25%" cy="50%" fx="10%" fy="40%" r="10%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

We can access the computed values of the `fx` attributes:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const fxGradient1 = radialGradients[0].fx;
const fxGradient2 = radialGradients[1].fx;

console.dir(fxGradient1.baseVal.value); // output: 30
console.dir(fxGradient2.baseVal.value); // output: 20 (10% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGRadialGradientElement.fy")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
