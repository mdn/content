---
title: "SVGSVGElement: width property"
short-title: width
slug: Web/API/SVGSVGElement/width
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGSVGElement")}} interface describes the horizontal size of element as an {{domxref("SVGAnimatedLength")}}. It reflects the {{SVGElement("svg")}} element's {{SVGAttr("width")}} attribute, which may not be the SVG's rendered width.

The CSS {{cssxref("width")}} property takes precedence over the `<svg>` element's `width` attribute, so the value may not reflect the element's appearance. If both the {{SVGAttr("viewBox")}} and `width` attributes are omitted, the `width` property reflects that actual width.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const svg = document.querySelector("svg");
const inlineSize = svg.width;
console.dir(inlineSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.viewBox")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
