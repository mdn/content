---
title: "SVGFEImageElement: width property"
short-title: width
slug: Web/API/SVGFEImageElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEImageElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEImageElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} attribute of the {{SVGElement("feImage")}} element, which fetches image data from an external source and provides the pixel data as output. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feImage = document.querySelector("feImage");
const horizontalSize = feImage.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEImageElement.height")}}
- [SVG tutorial: Filter effects](/en-US/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
