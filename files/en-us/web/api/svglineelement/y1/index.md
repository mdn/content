---
title: "SVGLineElement: y1 property"
short-title: y1
slug: Web/API/SVGLineElement/y1
page-type: web-api-instance-property
browser-compat: api.SVGLineElement.y1
---

{{APIRef("SVG")}}

The **`y1`** read-only property of the {{domxref("SVGLineElement")}} interface describes the start of the SVG line along the y-axis as an {{domxref("SVGAnimatedLength")}}. It reflects the {{SVGElement("line")}} element's {{SVGAttr("y1")}} geometric attribute.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is that start position as a length along the y-axis in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="30" x2="40" y2="50" stroke="blue" stroke-width="2" />
  <line x1="15%" y1="5%" x2="30%" y2="60%" stroke="red" stroke-width="4" />
</svg>
```

We can access the computed values of the `y1` attributes:

```js
const lines = document.querySelectorAll("line");
const y1Pos0 = lines[0].y1;
const y1Pos1 = lines[1].y1;
console.dir(y1Pos0.baseVal.value); // output: 30 (the value of `y1`)
console.dir(y1Pos1.baseVal.value); // output: 10 (5% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGLineElement.y2")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
