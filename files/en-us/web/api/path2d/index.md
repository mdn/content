---
title: Path2D
slug: Web/API/Path2D
page-type: web-api-interface
browser-compat: api.Path2D
---

{{APIRef("Canvas API")}}

The **`Path2D`** interface of the Canvas 2D API is used to declare a path that can then be used on a {{domxref("CanvasRenderingContext2D")}} object. The [path methods](/en-US/docs/Web/API/CanvasRenderingContext2D#paths) of the `CanvasRenderingContext2D` interface are also present on this interface, which gives you the convenience of being able to retain and replay your path whenever desired.

## Constructors

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : `Path2D` constructor. Creates a new `Path2D` object.

## Instance methods

- {{domxref("Path2D.addPath()")}}
  - : Adds a path to the current path.
- {{domxref("CanvasRenderingContext2D.closePath", "Path2D.closePath()")}}
  - : Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.
- {{domxref("CanvasRenderingContext2D.moveTo()", "Path2D.moveTo()")}}
  - : Moves the starting point of a new sub-path to the (`x, y`) coordinates.
- {{domxref("CanvasRenderingContext2D.lineTo()", "Path2D.lineTo()")}}
  - : Connects the last point in the subpath to the (`x, y`) coordinates with a straight line.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()", "Path2D.bezierCurveTo()")}}
  - : Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using `moveTo()` before creating the Bézier curve.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()", "Path2D.quadraticCurveTo()")}}
  - : Adds a quadratic Bézier curve to the current path.
- {{domxref("CanvasRenderingContext2D.arc()", "Path2D.arc()")}}
  - : Adds an arc to the path which is centered at (`x, y`) position with radius `r` starting at `startAngle` and ending at `endAngle` going in the given direction by `counterclockwise` (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.arcTo()", "Path2D.arcTo()")}}
  - : Adds a circular arc to the path with the given control points and radius, connected to the previous point by a straight line.
- {{domxref("CanvasRenderingContext2D.ellipse()", "Path2D.ellipse()")}}
  - : Adds an elliptical arc to the path which is centered at (`x, y`) position with the radii `radiusX` and `radiusY` starting at `startAngle` and ending at `endAngle` going in the given direction by `counterclockwise` (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.rect()", "Path2D.rect()")}}
  - : Creates a path for a rectangle at position (`x, y`) with a size that is determined by `width` and `height`.
- {{domxref("CanvasRenderingContext2D.roundRect()", "Path2D.roundRect()")}}
  - : Creates a path for a rounded rectangle at position (`x, y`) with a size that is determined by `width` and `height` and the radii of the circular arc to be used for the corners of the rectangle is determined by `radii`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}}
