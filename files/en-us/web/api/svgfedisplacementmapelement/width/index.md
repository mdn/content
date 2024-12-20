---
title: "SVGFEDisplacementMapElement: width property"
short-title: width
slug: Web/API/SVGFEDisplacementMapElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEDisplacementMapElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEDisplacementMapElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feDisplacementMap")}} element's {{SVGAttr("width")}} filter primitive attribute. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feDisplacementMap = document.querySelector("feDisplacementMap");
const horizontalSize = feDisplacementMap.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEDisplacementMapElement.height")}}
- {{domxref("SVGFEImageElement")}} API and {{SVGElement("feImage")}} element
- {{domxref("SVGFETurbulenceElement")}} API and {{SVGElement("feTurbulence")}} element
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
