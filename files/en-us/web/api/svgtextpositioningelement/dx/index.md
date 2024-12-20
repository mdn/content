---
title: "SVGTextPositioningElement: dx property"
short-title: dx
slug: Web/API/SVGTextPositioningElement/dx
page-type: web-api-instance-property
browser-compat: api.SVGTextPositioningElement.dx
---

{{APIRef("SVG")}}

The **`dx`** read-only property of the {{domxref("SVGTextPositioningElement")}} interface describes the x-axis coordinate of the {{domxref("SVGTextElement")}}, {{domxref("SVGTSpanElement")}}, or {{domxref("SVGTRefElement")}} as an {{domxref("SVGAnimatedLengthList")}}. It reflects the {{SVGAttr("dx")}} attribute's horizontal displacement of the individual text glyphs in the user coordinate system.

The attribute value is a list of [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric values in the {{domxref("SVGAnimatedLengthList.baseVal")}} reflect the horizontal displacements in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLengthList")}}.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" dx="5">Hello</text>
  <text x="50" y="50" dx="10">World</text>
</svg>
```

We can access the computed values of the `dx` attributes:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].dx.baseVal[0].value); // output: 5
console.log(texts[1].dx.baseVal[0].value); // output: 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTextPositioningElement.dy")}}
- {{domxref("SVGAnimatedLengthList.baseVal")}}
