---
title: PaintRenderingContext2D
slug: Web/API/PaintRenderingContext2D
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PaintRenderingContext2D
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

The **`PaintRenderingContext2D`** interface of the [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API) is the rendering context for drawing to the bitmap for the [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API). It implements a subset of the {{domxref("CanvasRenderingContext2D")}} API.

The interface is only available in {{domxref("CanvasRenderingContext2D", "paint worklet global scope", "", 1)}}.

## Instance properties and methods

_All PaintRenderingContext2D's properties and methods have the same usage as in `CanvasRenderingContext2D`_

### Context

- {{domxref("CanvasRenderingContext2D.isContextLost()")}}
  - : Returns `true` if the rendering context was lost.

### State

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Saves the current drawing style state using a stack so you can revert any change you make to it using `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Restores the drawing style state to the last element on the 'state stack' saved by `save()`.
- {{domxref("CanvasRenderingContext2D.reset()")}}
  - : Resets the current drawing style state to the default values.

### Transformations

- {{domxref("CanvasRenderingContext2D.getTransform()")}}
  - : Retrieves the current transformation matrix being applied to the context.
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Adds a translation transformation by moving the canvas and its origin x horizontally and y vertically on the grid.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multiplies the current transformation matrix with the matrix described by its arguments.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Resets the current transform to the identity matrix, and then invokes the `transform()` method with the same arguments.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}}
  - : Resets the current transform by the identity matrix.

### Compositing

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Alpha value that is applied to shapes and images before they are composited onto the canvas. Default `1.0` (opaque).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : With `globalAlpha` applied this sets how shapes and images are drawn onto the existing bitmap.

### Image smoothing

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : Image smoothing mode; if disabled, images will not be smoothed if scaled.
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
  - : Allows you to set the quality of image smoothing.

### Fill and stroke styles

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Color or style to use inside shapes. Default `#000` (black).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Color or style to use for the lines around shapes. Default `#000` (black).

### Gradients and patterns

- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
  - : Creates a conic gradient around a point given by coordinates represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Creates a linear gradient along the line given by the coordinates represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Creates a radial gradient given by the coordinates of the two circles represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Creates a pattern using the specified image. It repeats the source in the directions specified by the repetition argument. This method returns a {{domxref("CanvasPattern")}}.

### Shadows

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Specifies the blurring effect. Default: `0`.
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Color of the shadow. Default: fully-transparent black.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Horizontal distance the shadow will be offset. Default: `0`.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Vertical distance the shadow will be offset. Default: `0`.

### Drawing rectangles

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Sets all pixels in the rectangle defined by starting point _(x, y)_ and size _(width, height)_ to transparent black, erasing any previously drawn content.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Draws a filled rectangle at _(x, y)_ position whose size is determined by _width_ and _height_.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Paints a rectangle which has a starting point at _(x, y)_ and has a _w_ width and an _h_ height onto the canvas, using the current stroke style.

### Drawing paths

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Fills the current sub-paths with the current fill style.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Strokes the current sub-paths with the current stroke style.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Creates a clipping path from the current sub-paths. Everything drawn after `clip()` is called appears inside the clipping path only. For an example, see [Clipping paths](/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing) in the Canvas tutorial.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Reports whether or not the specified point is contained in the current path.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Reports whether or not the specified point is inside the area contained by the stroking of a path.

### Drawing images

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

### Line styles

The following methods and properties control how lines are drawn.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Width of lines. Default `1.0`.
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Type of endings on the end of lines. Possible values: `butt` (default), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Defines the type of corners where two lines meet. Possible values: `round`, `bevel`, `miter` (default).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Miter limit ratio. Default `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Returns the current line dash pattern array containing an even number of non-negative numbers.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Sets the current line dash pattern.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Specifies where to start a dash array on a line.

### Paths

- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Moves the starting point of a new sub-path to the (x, y) coordinates.
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Adds a cubic Bézier curve to the current path.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Adds a quadratic Bézier curve to the current path.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Adds a circular arc to the current path.
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Adds an arc to the current path with the given control points and radius, connected to the previous point by a straight line.
- {{domxref("CanvasRenderingContext2D.ellipse()")}}
  - : Adds an elliptical arc to the current path.
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Creates a path for a rectangle at position (x, y) with a size that is determined by _width_ and _height_.
- {{domxref("CanvasRenderingContext2D.roundRect()")}}
  - : Creates a path for a rectangle with rounded corners at position (x, y) with a size that is determined by _width_ and _height_ and radii determined by _radii_.

### Filters

- {{domxref("CanvasRenderingContext2D.filter")}} {{Non-standard_Inline}}
  - : Applies a CSS or SVG filter to the canvas, e.g., to change its brightness or blurriness.

## Examples

See full examples at [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)
