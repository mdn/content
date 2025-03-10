---
title: "SVGTextPositioningElement: y property"
short-title: y
slug: Web/API/SVGTextPositioningElement/y
page-type: web-api-instance-property
browser-compat: api.SVGTextPositioningElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGTextPositioningElement")}} interface describes the y-axis coordinate of the {{domxref("SVGTextElement")}}, {{domxref("SVGTSpanElement")}}, or {{domxref("SVGTRefElement")}} as an {{domxref("SVGAnimatedLengthList")}}. It reflects the {{SVGAttr("y")}} attribute's vertical position of the individual text glyphs in the user coordinate system.

The attribute value is a list of [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric values in the {{domxref("SVGAnimatedLengthList.baseVal")}} reflect the y-coordinates in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLengthList")}}.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20">Hello</text>
  <text x="50" y="50">World</text>
</svg>
```

We can access the computed values of the `y` attributes:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].y.baseVal[0].value); // output: 20
console.log(texts[1].y.baseVal[0].value); // output: 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTextPositioningElement.x")}}
- {{domxref("SVGAnimatedLengthList.baseVal")}}
