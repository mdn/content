---
title: Geometry interfaces
slug: Web/API/Geometry_interfaces
page-type: web-api-overview
browser-compat:
  - api.DOMMatrix
  - api.DOMMatrixReadOnly
  - api.DOMPoint
  - api.DOMPointReadOnly
  - api.DOMQuad
  - api.DOMRect
  - api.DOMRectReadOnly
---

{{DefaultAPISidebar("Geometry Interfaces")}}

**Geometry interfaces** is a CSS module that provides interfaces for working with 3D and 2D graphics — in particular, for working with points, rectangles, quadrilaterals and [transformation matrices](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices) (for operations that translate/move, scale, rotate, skew/shear/slant, and flip graphics, as well as for multiplying/chaining and inverting/undoing those operations).

As a web developer, you don't always use the geometry interfaces directly, but instead use other features that rely on them behind the scenes: parts of [CSS Transforms](/en-US/docs/Web/CSS/CSS_Transforms), the [Canvas API](/en-US/docs/Web/API/Canvas_API), the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API), and (more directly) {{domxref('VideoFrame.visibleRect')}}, {{domxref('Element.getClientRects()')}}, and {{domxref('Element.getBoundingClientRect()')}}.

## Interfaces

- {{domxref('DOMMatrix')}}
  - : Represents a [transformation matrix](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web#transformation_matrices), for operations that translate/move, scale, rotate, skew/shear/slant, and flip graphics, as well as for multiplying/chaining and inverting/undoing those operations.
- {{domxref('DOMMatrixReadOnly')}}
  - : Read-only version of {{domxref('DOMMatrix')}}.
- {{domxref('DOMPoint')}}
  - : Represents a 2D or 3D point in a coordinate system; it includes values for the coordinates in up to three dimensions, as well as an optional perspective value.
- {{domxref('DOMPointReadOnly')}}
  - : Read-only version of {{domxref('DOMPoint')}}.
- {{domxref('DOMQuad')}}
  - : Represents a collection of four {{domxref('DOMPoint')}} objects defining the corners of a [quadrilateral](https://en.wikipedia.org/wiki/Quadrilateral).
- {{domxref('DOMRect')}}
  - : Represents the size and position of a rectangle.
- {{domxref('DOMRectReadOnly')}}
  - : Read-only version of {{domxref('DOMRect')}}.

## Examples

The {{domxref('Path2D.addPath()')}} and {{domxref('CanvasPattern.setTransform()')}} articles have examples that use some of the geometry interfaces.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('Path2D.addPath()')}}
- {{domxref('CanvasPattern.setTransform()')}}
- {{domxref('CanvasRenderingContext2D.getTransform()')}}
- {{domxref('CanvasRenderingContext2D.setTransform()')}}
- {{domxref('CSSTransformValue.toMatrix()')}}
- {{domxref('CSSTransformComponent.toMatrix()')}}
- {{domxref('Element.getBoundingClientRect()')}}
- {{domxref('Element.getClientRects()')}}
- {{domxref('VideoFrame.visibleRect')}}
- {{domxref('XRLightEstimate')}}
- {{domxref('XRRigidTransform')}}
