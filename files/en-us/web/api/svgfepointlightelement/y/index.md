---
title: "SVGFEPointLightElement: y property"
short-title: y
slug: Web/API/SVGFEPointLightElement/y
page-type: web-api-instance-property
browser-compat: api.SVGFEPointLightElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGFEPointLightElement")}} interface describes the vertical coordinate of the position of an SVG filter primitive as a {{domxref("SVGAnimatedNumber")}}.

It reflects the {{SVGAttr("y")}} attribute of the {{SVGElement("fePointLight")}} element, which can be used to define the light source in a point light effect. The attribute is a [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The default value is `0`.

## Value

An {{domxref("SVGAnimatedNumber")}}.

## Example

```js
const fePointLight = document.querySelector("fePointLight");
const topPosition = fePointLight.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEPointLightElement.x")}}
- {{domxref("SVGFEPointLightElement.z")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFESpotLightElement")}}
