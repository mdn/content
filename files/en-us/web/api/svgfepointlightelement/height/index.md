---
title: "SVGFEPointLightElement: height property"
short-title: height
slug: Web/API/SVGFEPointLightElement/height
page-type: web-api-instance-property
browser-compat: api.SVGFEPointLightElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGFEPointLightElement")}} interface describes the vertical size of an SVG filter primitive as a {{domxref("SVGAnimatedLength")}}.

It reflects the {{SVGAttr("height")}} attribute of the {{SVGElement("fePointLight")}} element., which can be used to define the light source in a point light effect. The attribute is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) or a [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage) relative to the height of the filter region. The default value is `100%`. The property value is a length in user coordinate system units.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const fePointLight = document.querySelector("fePointLight");
const verticalSize = fePointLight.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEPointLightElement.width")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFESpotLightElement")}}
