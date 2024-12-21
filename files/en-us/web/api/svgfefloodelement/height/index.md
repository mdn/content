---
title: "SVGFEFloodElement: height property"
short-title: height
slug: Web/API/SVGFEFloodElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEFloodElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEFloodElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} attribute of the {{SVGElement("feFlood")}} element, which fills an SVG filter subregion with the color and opacity defined by {{SVGAttr("flood-color")}} and {{SVGAttr("flood-opacity")}}. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feFlood = document.querySelector("feFlood");
const verticalSize = feFlood.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEFloodElement.width")}}- [SVG filter tutorial](/en-US/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
