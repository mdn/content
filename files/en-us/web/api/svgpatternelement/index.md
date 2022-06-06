---
title: SVGPatternElement
slug: Web/API/SVGPatternElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGPatternElement
---
{{APIRef("SVG")}}

The **`SVGPatternElement`** interface corresponds to the {{SVGElement("pattern")}} element.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGElement")}} and implements the ones from {{domxref("SVGFitToViewBox")}}._

- {{domxref("SVGPatternElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given {{SVGElement("pattern")}} element.
- {{domxref("SVGPatternElement.patternUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("patternUnits")}} attribute of the given {{SVGElement("pattern")}} element. Takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGPatternElement.patternContentUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("patternContentUnits")}} attribute of the given {{SVGElement("pattern")}} element. Takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGPatternElement.patternTransform")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedTransformList")}} corresponding to the {{SVGAttr("patternTransform")}} attribute of the given {{SVGElement("pattern")}} element.
- {{domxref("SVGPatternElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("x")}} attribute of the given {{SVGElement("pattern")}} element.
- {{domxref("SVGPatternElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("y")}} attribute of the given {{SVGElement("pattern")}} element.
- {{domxref("SVGPatternElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("width")}} attribute of the given {{SVGElement("pattern")}} element.
- {{domxref("SVGPatternElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("height")}} attribute of the given {{SVGElement("pattern")}} element.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}} and implements the ones from {{domxref("SVGFitToViewBox")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
