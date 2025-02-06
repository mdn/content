---
title: "SVGFESpotLightElement: y property"
short-title: y
slug: Web/API/SVGFESpotLightElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFESpotLightElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFESpotLightElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedNumber")}}.

It reflects the {{SVGAttr("y")}} attribute of the {{SVGElement("feSpotLight")}} element., which can be used to define the light source in a spotlight effect. The attribute is a [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The default value is `0`.

## Value

An {{domxref("SVGAnimatedNumber")}}.

## Example

```js
const feSpotLight = document.querySelector("feSpotLight");
const topPosition = feSpotLight.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFESpotLightElement.x")}}
- {{domxref("SVGFESpotLightElement.z")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFEPointLightElement")}}
