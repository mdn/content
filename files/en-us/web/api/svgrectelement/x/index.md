---
title: "SVGRectElement: x property"
short-title: x
slug: Web/API/SVGRectElement/x
page-type: web-api-instance-property
browser-compat: api.SVGRectElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGRectElement")}} interface describes the horizontal coordinate of the position of an SVG rectangle as a {{domxref("SVGAnimatedLength")}}. The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the x-axis. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

It reflects the {{SVGElement("rect")}} element's {{SVGAttr("x")}} geometric attribute value. The CSS {{cssxref("x")}} property takes precedence over the SVG `x` geometric attribute, so the value may not reflect the element's appearance. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const rectangle = document.querySelector("rect");
const leftPosition = rectangle.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXref("DOMRect.x")}}
- {{domxref("SVGRectElement.y")}}
