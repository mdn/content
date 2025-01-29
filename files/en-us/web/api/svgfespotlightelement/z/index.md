---
title: "SVGFESpotLightElement: z property"
short-title: z
slug: Web/API/SVGFESpotLightElement/z
page-type: web-api-instance-property
browser-compat: api.SVGFESpotLightElement.z
---

{{APIRef("SVG")}}

The **`z`** read-only property of the {{domxref("SVGFESpotLightElement")}} interface describes the z-axis value of the position of an SVG filter primitive as a {{domxref("SVGAnimatedNumber")}}. A positive Z-axis comes out towards the person viewing the content.

It reflects the {{SVGAttr("z")}} attribute of the {{SVGElement("feSpotLight")}} element, which can be used to define the light source in a spotlight effect. The attribute is a [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The default value is `0`.

## Value

An {{domxref("SVGAnimatedNumber")}}.

## Example

```js
const feSpotLight = document.querySelector("feSpotLight");
const zVal = feSpotLight.z;
console.log(zVal.baseVal.value); // the `z` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFESpotLightElement.x")}}
- {{domxref("SVGFESpotLightElement.y")}}
- {{domxref("SVGFEDistantLightElement")}}
- {{domxref("SVGFEPointLightElement")}}
