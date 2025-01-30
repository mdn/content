---
title: "SVGEllipseElement: cx property"
short-title: cx
slug: Web/API/SVGEllipseElement/cx
page-type: web-api-instance-property
browser-compat: api.SVGEllipseElement.cx
---

{{APIRef("SVG")}}

The **`cx`** read-only property of the {{domxref("SVGEllipseElement")}} interface describes the x-axis coordinate of the center of the ellipse as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("cx")}} attribute on the {{SVGElement("ellipse")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the x-coordinate of the ellipse's center in the user coordinate system.

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

We can access the computed values of the `cx` attributes:

```js
const ellipses = document.querySelectorAll("ellipse");
const cxPos0 = ellipses[0].cx;
const cxPos1 = ellipses[1].cx;

console.dir(cxPos0.baseVal.value); // output: 50
console.dir(cxPos1.baseVal.value); // output: 50 (25% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGEllipseElement.cy")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
