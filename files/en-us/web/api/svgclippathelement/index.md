---
title: SVGClipPathElement
slug: Web/API/SVGClipPathElement
page-type: web-api-interface
browser-compat: api.SVGClipPathElement
---

{{APIRef("SVG")}}

The **`SVGClipPathElement`** interface provides access to the properties of {{SVGElement("clipPath")}} elements, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGElement")}}._

- {{domxref("SVGClipPathElement.clipPathUnits")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("clipPathUnits")}} attribute of the associated {{SVGElement("clipPath")}} element. Takes one of the constants defined in {{domxref("SVGUnitTypes")}}.
- {{domxref("SVGClipPathElement.transform")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedTransformList")}} corresponding to the {{SVGAttr("transform")}} attribute of the associated {{SVGElement("clipPath")}} element.

## Instance methods

_This interface doesn't implement any specific methods, but inherits methods from its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("clipPath")}}
