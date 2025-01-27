---
title: "SVGFEPointLightElement: x property"
short-title: x
slug: Web/API/SVGFEPointLightElement/x
page-type: web-api-instance-property
browser-compat: api.SVGFEPointLightElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGFEPointLightElement")}} interface describes the horizontal coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedNumber")}}.

It reflects the {{SVGAttr("x")}} attribute of the {{SVGElement("fePointLight")}} element, which can be used to define the light source in a point light effect. The attribute is a [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The default value is `0`.

## Value

An {{domxref("SVGAnimatedNumber")}}.

## Example

```js
const fePointLight = document.querySelector("fePointLight");
const leftPosition = fePointLight.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEPointLightElement.y")}}
- {{domxref("SVGFEPointLightElement.z")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFESpotLightElement")}}
