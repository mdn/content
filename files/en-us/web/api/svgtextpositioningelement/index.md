---
title: SVGTextPositioningElement
slug: Web/API/SVGTextPositioningElement
page-type: web-api-interface
browser-compat: api.SVGTextPositioningElement
---

{{APIRef("SVG")}}

The **`SVGTextPositioningElement`** interface is implemented by elements that support attributes that position individual text glyphs. It is inherited by {{domxref("SVGTextElement")}}, {{domxref("SVGTSpanElement")}}, and {{domxref("SVGTRefElement")}}.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGTextContentElement")}}._

- {{domxref("SVGTextPositioningElement.x")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLengthList")}} reflecting the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGTextPositioningElement.y")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLengthList")}} reflecting the {{SVGAttr("y")}} attribute of the given element.
- {{domxref("SVGTextPositioningElement.dx")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLengthList")}} reflecting the {{SVGAttr("dx")}} attribute of the given element.
- {{domxref("SVGTextPositioningElement.dy")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLengthList")}} reflecting the {{SVGAttr("dy")}} attribute of the given element.
- {{domxref("SVGTextPositioningElement.rotate")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedNumberList")}} reflecting the {{SVGAttr("rotate")}} attribute of the given element.

## Instance methods

_This interface doesn't provide any specific methods, but inherits methods from its parent, {{domxref("SVGTextContentElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
