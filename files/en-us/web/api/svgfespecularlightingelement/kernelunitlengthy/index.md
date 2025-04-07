---
title: "SVGFESpecularLightingElement: kernelUnitLengthY property"
short-title: kernelUnitLengthY
slug: Web/API/SVGFESpecularLightingElement/kernelUnitLengthY
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.kernelUnitLengthY
---

{{APIRef("SVG")}}

The **`kernelUnitLengthY`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the y value of the {{SVGAttr("kernelUnitLength")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

The `kernelUnitLength` attribute indicates the intended distance in current filter units, specified by the `primitiveUnits` attribute, for the x and y coordinates. It contains one or two values, with the y value defaulting to x if not present, and the `kernelUnitLengthY` property gets and sets the last value.

## Value

An {{domxref("SVGAnimatedNumber")}} object that corresponds to the Y-component of the {{SVGAttr("kernelUnitLength")}} attribute of the given element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFeSpecularLightingElement.kernelUnitLengthX")}}
- {{domxref("SVGAnimatedNumber")}}
