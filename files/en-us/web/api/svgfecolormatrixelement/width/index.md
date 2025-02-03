---
title: "SVGFEColorMatrixElement: width property"
short-title: width
slug: Web/API/SVGFEColorMatrixElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEColorMatrixElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEColorMatrixElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feColorMatrix")}} element's {{SVGAttr("width")}} filter primitive attribute. The `<feColorMatrix>` filter applies a matrix transformation on the {{glossary("RGB")}} color and {{glossary("alpha")}} values. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feColorMatrix = document.querySelector("feColorMatrix");
const horizontalSize = feColorMatrix.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEColorMatrixElement.height")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} element, SVG {{SVGAttr("filter")}} attribute in [SVG](/en-US/docs/Web/SVG)
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
