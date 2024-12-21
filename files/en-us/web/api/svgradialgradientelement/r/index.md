---
title: "SVGRadialGradientElement: r property"
short-title: r
slug: Web/API/SVGRadialGradientElement/r
page-type: web-api-instance-property
browser-compat: api.SVGRadialGradientElement.r
---

{{APIRef("SVG")}}

The **`r`** read-only property of the {{domxref("SVGRadialGradientElement")}} interface describes the radius of the radial gradient as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("r")}} attribute on the {{SVGElement("radialGradient")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the radius of the radial gradient in the user coordinate system.

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

We can access the computed values of the `r` attributes:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const rGradient1 = radialGradients[0].r;
const rGradient2 = radialGradients[1].r;

console.dir(rGradient1.baseVal.value); // output: 30
console.dir(rGradient2.baseVal.value); // output: 20 (10% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("r")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
