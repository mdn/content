---
title: SVGMaskElement
slug: Web/API/SVGMaskElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGMaskElement
---
{{APIRef("SVG")}}

The **`SVGMaskElement`** interface provides access to the properties of {{SVGElement("mask")}} elements, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGMaskElement.maskUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("maskUnits")}} attribute of the given {{SVGElement("mask")}} element. Takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGMaskElement.maskContentUnits")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("maskContentUnits")}} attribute of the given {{SVGElement("mask")}} element. Takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGMaskElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given {{SVGElement("mask")}} element.
- {{domxref("SVGMaskElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given {{SVGElement("mask")}} element.
- {{domxref("SVGMaskElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given {{SVGElement("mask")}} element.
- {{domxref("SVGMaskElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given {{SVGElement("mask")}} element.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("mask")}}
