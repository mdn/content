---
title: "SVGTextPositioningElement: rotate property"
short-title: rotate
slug: Web/API/SVGTextPositioningElement/rotate
page-type: web-api-instance-property
browser-compat: api.SVGAnimationElement.rotate
---

{{APIRef("SVG")}}

The **`rotate`** read-only property of the {{domxref("SVGTextPositioningElement")}} interface reflects the rotation of individual text glyphs, as specified by the {{SVGAttr("rotate")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedNumberList")}} object.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" rotate="45">Hello</text>
  <text x="50" y="50" rotate="90">World</text>
</svg>
```

We can access the `rotate` attribute:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].rotate.baseVal); // output: 45
console.log(texts[1].rotate.baseVal); // output: 90
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumberList")}}
