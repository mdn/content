---
title: "SVGEllipseElement: cy property"
short-title: cy
slug: Web/API/SVGEllipseElement/cy
page-type: web-api-instance-property
browser-compat: api.SVGEllipseElement.cy
---

{{APIRef("SVG")}}

The **`cy`** read-only property of the {{domxref("SVGEllipseElement")}} interface describes the y-axis coordinate of the center of the ellipse as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("cy")}} attribute on the {{SVGElement("ellipse")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the y-coordinate of the ellipse's center in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="75" rx="30" ry="20" fill="blue" />
  <ellipse cx="25%" cy="50%" rx="10%" ry="5%" fill="red" />
</svg>
```

We can access the computed values of the `cy` attributes:

```js
const ellipses = document.querySelectorAll("ellipse");
const cyPos0 = ellipses[0].cy;
const cyPos1 = ellipses[1].cy;

console.dir(cyPos0.baseVal.value); // output: 75
console.dir(cyPos1.baseVal.value); // output: 100 (50% of the viewBox height, 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGEllipseElement.cx")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
