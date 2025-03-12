---
title: "SVGRectElement: y property"
short-title: y
slug: Web/API/SVGRectElement/y
page-type: web-api-instance-property
browser-compat: api.SVGRectElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGRectElement")}} interface describes the vertical coordinate of the position of an SVG rectangle as a {{domxref("SVGAnimatedLength")}}. The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the y-axis. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

It reflects the {{SVGElement("rect")}} element's {{SVGAttr("y")}} geometric attribute value. The CSS {{cssxref("y")}} property takes precedence over the SVG `y` attribute, so the value may not reflect the element's appearance. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const rectangle = document.querySelector("rect");
const topPosition = rectangle.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("DOMRect.y")}}
- {{domxref("SVGRectElement.x")}}
