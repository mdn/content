---
title: "SVGLineElement: x2 property"
short-title: x2
slug: Web/API/SVGLineElement/x2
page-type: web-api-instance-property
browser-compat: api.SVGLineElement.x2
---

{{APIRef("SVG")}}

The **`x2`** read-only property of the {{domxref("SVGLineElement")}} interface describes the x-axis coordinate value of the end of a line as an {{domxref("SVGAnimatedLength")}}. It reflects the {{SVGElement("line")}} element's {{SVGAttr("x2")}} geometric attribute.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is that end position along the x-axis in user coordinate system units.

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

We can access the computed values of the `x2` attributes:

```js
const lines = document.querySelectorAll("line");
const x2Pos0 = lines[0].x2;
const x2Pos1 = lines[1].x2;
console.dir(x2Pos0.baseVal.value); // output: 40 (the value of `x2`)
console.dir(x2Pos1.baseVal.value); // output: 90 (30% of 300)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGLineElement.y2")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
