---
title: SVGGeometryElement
slug: Web/API/SVGGeometryElement
page-type: web-api-interface
browser-compat: api.SVGGeometryElement
---

{{APIRef("SVG")}}

The `SVGGeometryElement` interface represents SVG elements whose rendering is defined by geometry with an equivalent path, and which can be filled and stroked. This includes paths and the basic shapes.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGGeometryElement.pathLength")}} {{ReadOnlyInline}}
  - : This property reflects the {{SVGAttr("pathLength")}} attribute.

## Instance methods

_This interface also inherits methods from its parent, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGGeometryElement.isPointInFill()")}}
  - : Determines whether a given point is within the fill shape of an element. Normal hit testing rules apply; the value of the {{cssxref("pointer-events")}} property on the element determines whether a point is considered to be within the fill.
- {{domxref("SVGGeometryElement.isPointInStroke()")}}
  - : Determines whether a given point is within the stroke shape of an element. Normal hit testing rules apply; the value of the {{cssxref("pointer-events")}} property on the element determines whether a point is considered to be within the stroke.
- {{domxref("SVGGeometryElement.getTotalLength()")}}
  - : Returns the user agent's computed value for the total length of the path in user units.
- {{domxref("SVGGeometryElement.getPointAtLength()")}}
  - : Returns the point at a given distance along the path.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
