---
title: "SVGRectElement: width property"
short-title: width
slug: Web/API/SVGRectElement/width
page-type: web-api-instance-property
browser-compat: api.SVGRectElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGRectElement")}} interface describes the horizontal size of an SVG rectangle as a {{domxref("SVGAnimatedLength")}}. The length is in user coordinate system units along the x-axis. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

It reflects the {{SVGElement("rect")}} element's {{SVGAttr("width")}} presentational attribute. The CSS {{cssxref("width")}} property takes precedence over the SVG `width` presentational attribute, so the value may not reflect the elements actual size. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const rectangle = document.querySelector("rect");
const rectWidth = rectangle.width;
console.log(rectWidth.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("DOMRect.width")}}
- {{domxref("SVGRectElement.height")}}
