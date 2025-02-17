---
title: "SVGFEConvolveMatrixElement: x property"
short-title: x
slug: Web/API/SVGFEConvolveMatrixElement/x
page-type: web-api-instance-property
browser-compat: api.SVGFEConvolveMatrixElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGFEConvolveMatrixElement")}} interface describes the horizontal coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feConvolveMatrix")}} element's {{SVGAttr("x")}} filter primitive attribute value. The `<feConvolveMatrix>` filter applies a matrix convolution effect, combining pixels in the input image with neighboring pixels to produce a convolution effect such as blurring, edge detection, sharpening, embossing or beveling. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage). The `<coordinate>` is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the x-axis. If the `x` attribute is a percent value, the property value is relative to the width of the filter region in user coordinate system units. The default value is `0`.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feConvolveMatrix = document.querySelector("feConvolveMatrix");
const leftPosition = feConvolveMatrix.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEConvolveMatrixElement.y")}}
- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module
- SVG {{SVGElement("filter")}} element, SVG {{SVGAttr("filter")}} attribute in [SVG](/en-US/docs/Web/SVG)
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
