---
title: "SVGSVGElement: height property"
short-title: height
slug: Web/API/SVGSVGElement/height
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGSVGElement")}} interface describes the vertical size of element as an {{domxref("SVGAnimatedLength")}}. It reflects the {{SVGElement("svg")}} element's {{SVGAttr("height")}} attribute, which may not be the SVG's rendered height.

The CSS {{cssxref("height")}} property takes precedence over the `<svg>` element's `height` attribute, so the value may not reflect the element's appearance. If both the {{SVGAttr("viewBox")}} and `height` attributes are omitted, the `height` property reflects that actual height.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const svg = document.querySelector("svg");
const verticalSize = svg.height;
console.dir(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.viewBox")}}
- {{domxref("SVGSVGElement.width")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
