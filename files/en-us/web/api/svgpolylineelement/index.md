---
title: SVGPolylineElement
slug: Web/API/SVGPolylineElement
page-type: web-api-interface
browser-compat: api.SVGPolylineElement
---

{{APIRef("SVG")}}

The **`SVGPolylineElement`** interface provides access to the properties of {{SVGElement("polyline")}} elements, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGPolylineElement.animatedPoints")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("SVGPointList")}} representing the animated value of the element's {{SVGAttr("points")}} attribute. If the {{SVGAttr("points")}} attribute is not being animated, it contains the same value as the `points` property.
- {{domxref("SVGPolylineElement.points")}}
  - : A {{DOMxRef("SVGPointList")}} representing the base (i.e., static) value of the element's {{SVGAttr("points")}} attribute. Modifications via the {{DOMxRef("SVGPointList")}} object are reflected in the {{SVGAttr("points")}} attribute, and vice versa.

## Instance methods

_This interface doesn't implement any specific methods, but inherits methods from its parent, {{domxref("SVGGeometryElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("polyline")}}
