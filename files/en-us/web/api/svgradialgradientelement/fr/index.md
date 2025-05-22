---
title: "SVGRadialGradientElement: fr property"
short-title: fr
slug: Web/API/SVGRadialGradientElement/fr
page-type: web-api-instance-property
browser-compat: api.SVGRadialGradientElement.fr
---

{{APIRef("SVG")}}

The **`fr`** read-only property of the {{domxref("SVGRadialGradientElement")}} interface describes the radius of the focal circle of the radial gradient as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("fr")}} attribute on the {{SVGElement("radialGradient")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Guides/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Guides/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Guides/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the radius of the focal point of the radial gradient in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG, with two identical gradients declared with different unit types:

```html
<svg viewBox="0 0 200 100" width="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" r="20%" fr="0.5">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
    <radialGradient id="gradient2" r="20%" fr="50%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#gradient1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#gradient2)" />
</svg>
```

We can access the `fr` attributes' unit type, value, and value as specified without the unit type:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const frGradient1 = radialGradients[0].fr;
const frGradient2 = radialGradients[1].fr;

console.log(frGradient1.baseVal.unitType); // 1 (SVGLength.SVG_LENGTHTYPE_NUMBER)
console.log(frGradient1.baseVal.value); // 0.5
console.log(frGradient1.baseVal.valueInSpecifiedUnits); // 0.5

console.log(frGradient2.baseVal.unitType); // 2 (SVGLength.SVG_LENGTHTYPE_PERCENTAGE)
console.log(frGradient2.baseVal.value); // 79.05693817138672
console.log(frGradient2.baseVal.valueInSpecifiedUnits); // 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGRadialGradientElement.fx")}}
- {{domxref("SVGLength.unitType")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
