---
title: Path2D
slug: Web/API/Path2D
page-type: web-api-interface
browser-compat: api.Path2D
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`Path2D`** interface of the Canvas 2D API is used to declare a path that can then be used on a {{domxref("CanvasRenderingContext2D")}} object. The [path methods](/en-US/docs/Web/API/CanvasRenderingContext2D#paths) of the `CanvasRenderingContext2D` interface are also present on this interface, which gives you the convenience of being able to retain and replay your path whenever desired.

## Constructors

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : `Path2D` constructor. Creates a new `Path2D` object.

## Instance methods

- {{domxref("Path2D.addPath()")}}
  - : Adds a path to the current path.
- {{domxref("CanvasRenderingContext2D.closePath", "Path2D.closePath()")}}
  - : Causes the point of the pen to move back to the start of the current sub-path.
- {{domxref("CanvasRenderingContext2D.moveTo()", "Path2D.moveTo()")}}
  - : Moves the starting point of a new sub-path to the (`x, y`) coordinates.
- {{domxref("CanvasRenderingContext2D.lineTo()", "Path2D.lineTo()")}}
  - : Connects the last point in the subpath to the (`x, y`) coordinates with a straight line.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()", "Path2D.bezierCurveTo()")}}
  - : Adds a cubic Bézier curve to the path.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()", "Path2D.quadraticCurveTo()")}}
  - : Adds a quadratic Bézier curve to the current path.
- {{domxref("CanvasRenderingContext2D.arc()", "Path2D.arc()")}}
  - : Adds an arc to the path.
- {{domxref("CanvasRenderingContext2D.arcTo()", "Path2D.arcTo()")}}
  - : Adds a circular arc to the path.
- {{domxref("CanvasRenderingContext2D.ellipse()", "Path2D.ellipse()")}}
  - : Adds an elliptical arc to the path.
- {{domxref("CanvasRenderingContext2D.rect()", "Path2D.rect()")}}
  - : Creates a rectangular path.
- {{domxref("CanvasRenderingContext2D.roundRect()", "Path2D.roundRect()")}}
  - : Creates a rounded rectangle path.

## Examples

### Creating and copying paths

This example demonstrates how a `Path2D` object can be copied and extended.

First, `path1` creates a rectangle.
Then, `path2` is created as a copy of `path1`.
After that, `path2` is extended with a circle.
Finally, only `path2` is drawn.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const path1 = new Path2D();
path1.rect(10, 10, 100, 100);

const path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}}

