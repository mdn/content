---
title: "SVGFESpecularLightingElement: kernelUnitLengthX property"
short-title: kernelUnitLengthX
slug: Web/API/SVGFESpecularLightingElement/kernelUnitLengthX
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.kernelUnitLengthX
---

{{APIRef("SVG")}}

The **`kernelUnitLengthX`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the x value of the {{SVGAttr("kernelUnitLength")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

The `kernelUnitLength` attribute indicates the intended distance in current filter units, specified by the `primitiveUnits` attribute, for the x and y coordinates. It contains one or two values, with the y value defaulting to x if not present, and the `kernelUnitLengthX` property gets and sets the first value.

## Value

An {{domxref("SVGAnimatedNumber")}} object that corresponds to the X-component of the {{SVGAttr("kernelUnitLength")}} attribute of the given element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFeSpecularLightingElement.kernelUnitLengthY")}}
- {{domxref("SVGAnimatedNumber")}}
