---
title: "SVGSVGElement: currentScale property"
short-title: currentScale
slug: Web/API/SVGSVGElement/currentScale
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.currentScale
---

{{APIRef("SVG")}}

The **`currentScale`** property of the {{domxref("SVGSVGElement")}} interface reflects the current scale factor relative to the initial view to take into account user magnification and panning operations on the outermost {{SVGElement("svg")}} element.

DOM attributes `currentScale` and `currentTranslate` are equivalent to the 2×3 matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. If "magnification" is enabled (i.e., `zoomAndPan="magnify"`), then the effect is as if an extra transformation were placed at the outermost level on the SVG document fragment (i.e., outside the outermost {{SVGElement("svg")}} element).

If the {{SVGElement("svg")}} element is not at the outermost level, then `currentScale` is always `1` and setting it has no effect.

## Value

A float.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.currentTranslate")}}
