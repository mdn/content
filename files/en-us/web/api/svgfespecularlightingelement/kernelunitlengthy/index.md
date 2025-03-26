---
title: "SVGFESpecularLightingElement: kernelUnitLengthY property"
short-title: kernelUnitLengthY
slug: Web/API/SVGFESpecularLightingElement/kernelUnitLengthY
page-type: web-api-instance-property
browser-compat: api.SVGFESpecularLightingElement.kernelUnitLengthY
---

{{APIRef("SVG")}}

The **`kernelUnitLengthX`** read-only property of the {{domxref("SVGFESpecularLightingElement")}} interface reflects the y value of the {{SVGAttr("kernelUnitLength")}} attribute of the given {{SVGElement("feSpecularLighting")}} element.

The `kernelUnitLength` attribute indicates the intended distance in current filter units, as determined by the value of attribute primitiveUnits, for the x and y coordinates. This property reflects the y-value, which is the second value in the `kernelUnitLength`'s space-separated pair of values, or the first value if only one value is set.

## Value

An {{domxref("SVGAnimatedNumber")}} object that corresponds to the Y-component of the {{SVGAttr("kernelUnitLength")}} attribute of the given element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFeSpecularLightingElement.kernelUnitLengthX")}}
- {{domxref("SVGAnimatedNumber")}}
