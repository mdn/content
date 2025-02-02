---
title: "SVGFECompositeElement: width property"
short-title: width
slug: Web/API/SVGFECompositeElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFECompositeElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFECompositeElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGElement("feComposite")}} element's {{SVGAttr("width")}} filter primitive attribute. The `<feComposite>` SVG filter primitive combines two input images using a Porter-Duff compositing operation. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const feComposite = document.querySelector("feComposite");
const horizontalSize = feComposite.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFECompositeElement.height")}}
- CSS {{cssxref("blend-mode")}} data type
- CSS {{cssxref("mix-blend-mode")}} property
