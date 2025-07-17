---
title: SVGViewElement
slug: Web/API/SVGViewElement
page-type: web-api-interface
browser-compat: api.SVGViewElement
---

{{APIRef("SVG")}}

The **`SVGViewElement`** interface provides access to the properties of {{SVGElement("view")}} elements, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGViewElement.viewBox")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedRect")}} corresponding to the {{SVGAttr("viewBox")}} attribute of the given {{SVGElement("view")}} element.
- {{domxref("SVGViewElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedPreserveAspectRatio")}} corresponding to the {{SVGAttr("preserveAspectRatio")}} attribute of the given {{SVGElement("view")}} element.

## Instance methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("view")}}
