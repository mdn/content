---
title: "SVGFEColorMatrixElement: y property"
short-title: y
slug: Web/API/SVGFEColorMatrixElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFEColorMatrixElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFEColorMatrixElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feColorMatrix")}} element's {{SVGAttr("y")}} filter primitive attribute value. The `<feColorMatrix>` filter applies a matrix transformation on the {{glossary("RGB")}} color and {{glossary("alpha")}} values. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the filter along the y-axis. If the `y` attribute is a percent value, the property value is a relative to the height of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feColorMatrix = document.querySelector("feColorMatrix");
const topPosition = feColorMatrix.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEColorMatrixElement.x")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}} element, SVG {{SVGAttr("filter")}} attribute in [SVG](/en-US/docs/Web/SVG)
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
