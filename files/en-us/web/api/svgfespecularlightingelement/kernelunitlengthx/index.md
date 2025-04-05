---
title: "SVGFESpecularLightingElement: kernelUnitLengthX property"
short-title: kernelUnitLengthX
slug: Web/API/SVGFESpecularLightingElement/kernelUnitLengthX
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.kernelUnitLengthX
---

{{APIRef("SVG")}}

The **`kernelUnitLengthX`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the x value of the {{SVGAttr("kernelUnitLength")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

The `kernelUnitLength` attribute indicates the intended distance in current filter units, as determined by the value of attribute primitiveUnits, for the x and y coordinates. This property reflects the value, or the first value in a space-separated pair of values.

## Value

An {{domxref("SVGAnimatedNumber")}} object that corresponds to the X-component of the {{SVGAttr("kernelUnitLength")}} attribute of the given element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFeSpecularLightingElement.kernelUnitLengthY")}}
- {{domxref("SVGAnimatedNumber")}}
