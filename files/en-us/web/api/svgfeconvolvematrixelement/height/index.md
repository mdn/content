---
title: "SVGFEConvolveMatrixElement: height property"
short-title: height
slug: Web/API/SVGFEConvolveMatrixElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEConvolveMatrixElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEConvolveMatrixElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feConvolveMatrix")}} element's {{SVGAttr("height")}} filter primitive attribute. The `<feConvolveMatrix>` filter applies a matrix convolution effect, combining pixels in the input image with neighboring pixels to produce a convolution effect such as blurring, edge detection, sharpening, embossing or beveling. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feConvolveMatrix = document.querySelector("feConvolveMatrix");
const verticalSize = feConvolveMatrix.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEConvolveMatrixElement.width")}}
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module
- SVG {{SVGElement("filter")}} element, SVG {{SVGAttr("filter")}} attribute in [SVG](/en-US/docs/Web/SVG)
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
