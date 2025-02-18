---
title: "SVGRectElement: height property"
short-title: height
slug: Web/API/SVGRectElement/height
page-type: web-api-instance-property
browser-compat: api.SVGRectElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGRectElement")}} interface describes the vertical size of an SVG rectangle as a {{domxref("SVGAnimatedLength")}}. The length is in user coordinate system units along the y-axis. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

It reflects the {{SVGElement("rect")}} element's {{SVGAttr("height")}} presentational attribute. The CSS {{cssxref("height")}} property takes precedence over the SVG `height` presentational attribute, so the value may not reflect the elements actual size. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const rectangle = document.querySelector("rect");
const rectHeight = rectangle.height;
console.log(rectHeight.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("DOMRect.height")}}
- {{domxref("SVGRectElement.width")}}
