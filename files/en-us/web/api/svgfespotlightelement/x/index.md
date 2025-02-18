---
title: "SVGFESpotLightElement: x property"
short-title: x
slug: Web/API/SVGFESpotLightElement/x
page-type: web-api-instance-property
browser-compat: api.SVGFESpotLightElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGFESpotLightElement")}} interface describes the horizontal coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedNumber")}}.

It reflects the {{SVGAttr("x")}} attribute of the {{SVGElement("feSpotLight")}} element., which can be used to define the light source in a spotlight effect. The attribute is a [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The default value is `0`.

## Value

An {{domxref("SVGAnimatedNumber")}}.

## Example

```js
const feSpotLight = document.querySelector("feSpotLight");
const leftPosition = feSpotLight.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFESpotLightElement.y")}}
- {{domxref("SVGFESpotLightElement.z")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFEPointLightElement")}}
