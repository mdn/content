---
title: "SVGFEOffsetElement: y property"
short-title: y
slug: Web/API/SVGFEOffsetElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFEOffsetElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFEOffsetElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("y")}} attribute of the {{SVGElement("feOffset")}} element, which offsets the input image relative to its current position. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the filter along the y-axis. If the `y` attribute is a percent value, the property value is a relative to the height of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feOffset = document.querySelector("feOffset");
const topPosition = feOffset.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEOffsetElement.x")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
