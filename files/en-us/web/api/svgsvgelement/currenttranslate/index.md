---
title: "SVGSVGElement: currentTranslate property"
short-title: currentTranslate
slug: Web/API/SVGSVGElement/currentTranslate
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.currentTranslate
---

{{APIRef("SVG")}}

The **`currentTranslate`** read-only property of the {{domxref("SVGSVGElement")}} interface reflects the translation factor that takes into account user "magnification" corresponding to an outermost {{SVGElement("svg")}} element.

If the {{SVGElement("svg")}} element is not at the outermost level, then `currentTranslate` is always `{ x: 0, y: 0 }` and is read-only. Otherwise, it is writable.

## Value

A {{domxref("DOMPointReadOnly")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.currentScale")}}
- {{domxref("DOMPointReadOnly")}}
