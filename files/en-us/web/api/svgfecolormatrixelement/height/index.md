---
title: "SVGFEColorMatrixElement: height property"
short-title: height
slug: Web/API/SVGFEColorMatrixElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEColorMatrixElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEColorMatrixElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feColorMatrix")}} element's {{SVGAttr("height")}} filter primitive attribute. The `<feColorMatrix>` filter applies a matrix transformation on the {{glossary("RGB")}} color and {{glossary("alpha")}} values.

The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feColorMatrix = document.querySelector("feColorMatrix");
const verticalSize = feColorMatrix.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEColorMatrixElement.width")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} element, SVG {{SVGAttr("filter")}} attribute in [SVG](/en-US/docs/Web/SVG)
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
