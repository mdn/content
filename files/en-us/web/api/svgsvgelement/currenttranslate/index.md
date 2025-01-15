---
title: "SVGSVGElement: currentTranslate property"
short-title: currentTranslate
slug: Web/API/SVGSVGElement/currentTranslate
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.currentTranslate
---

{{APIRef("SVG")}}

The **`currentTranslate`** read-only property of the {{domxref("SVGSVGElement")}} interface reflects the translation factor that takes into account user "magnification" corresponding to an outermost {{SVGElement("svg")}} element.

The behavior is undefined for {{SVGElement("svg")}} elements that are not at the outermost level.

## Value

A {{domxref("DOMPointReadOnly")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.currentScale")}}
- {{domxref("DOMPointReadOnly")}}
