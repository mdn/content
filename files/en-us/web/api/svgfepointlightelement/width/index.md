---
title: "SVGFEPointLightElement: width property"
short-title: width
slug: Web/API/SVGFEPointLightElement/width
page-type: web-api-instance-property
browser-compat: api.SVGFEPointLightElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGFEPointLightElement")}} interface describes the horizontal size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("width")}} attribute of the {{SVGElement("fePointLight")}} element., which can be used to define the light source in a point light effect. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the width of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const fePointLight = document.querySelector("fePointLight");
const horizontalSize = fePointLight.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEPointLightElement.height")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFESpotLightElement")}}
