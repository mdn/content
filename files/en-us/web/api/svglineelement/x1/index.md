---
title: "SVGLineElement: x1 property"
short-title: x1
slug: Web/API/SVGLineElement/x1
page-type: web-api-instance-property
browser-compat: api.SVGLineElement.x1
---

{{APIRef("SVG")}}

The **`x1`** read-only property of the {{domxref("SVGLineElement")}} interface describes the start of the SVG line along the x-axis as an {{domxref("SVGAnimatedLength")}}. It reflects the {{SVGElement("line")}} element's {{SVGAttr("x1")}} geometric attribute.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is that start position as a length along the x-axis in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="0" x2="30%" y2="60" stroke="red" stroke-width="4" />
</svg>
```

We can access the computed values of the `x1` attributes:

```js
const lines = document.querySelectorAll("line");
const x1Pos0 = lines[0].x1;
const x1Pos1 = lines[1].x1;
console.dir(x1Pos0.baseVal.value); // output: 20 (the value of `x1`)
console.dir(x1Pos1.baseVal.value); // output: 45 (15% of 300)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGLineElement.x2")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
