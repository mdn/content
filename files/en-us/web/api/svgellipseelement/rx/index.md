---
title: "SVGEllipseElement: rx property"
short-title: rx
slug: Web/API/SVGEllipseElement/rx
page-type: web-api-instance-property
browser-compat: api.SVGEllipseElement.rx
---

{{APIRef("SVG")}}

The **`rx`** read-only property of the {{domxref("SVGEllipseElement")}} interface describes the x-axis radius of the ellipse as an {{domxref("SVGAnimatedLength")}}. It reflects the computed value of the {{SVGAttr("rx")}} attribute on the {{SVGElement("ellipse")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the radius of the ellipse along the x-axis in the user coordinate system.

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

We can access the computed values of the `rx` attributes:

```js
const ellipses = document.querySelectorAll("ellipse");
const rxPos0 = ellipses[0].rx;
const rxPos1 = ellipses[1].rx;

console.dir(rxPos0.baseVal.value); // output: 30
console.dir(rxPos1.baseVal.value); // output: 20 (10% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGEllipseElement.ry")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
