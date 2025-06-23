---
title: PaintRenderingContext2D
slug: Web/API/PaintRenderingContext2D
page-type: web-api-interface
browser-compat: api.PaintRenderingContext2D
---

{{APIRef("CSS Painting API")}}

The **`PaintRenderingContext2D`** interface of the [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API) is the API's rendering context for drawing to the bitmap. It implements a subset of the {{domxref("CanvasRenderingContext2D")}} API, with the following exceptions:

- It doesn't implement the [`CanvasImageData` pixel manipulation](/en-US/docs/Web/API/CanvasRenderingContext2D#pixel_manipulation), [`CanvasUserInterface` focus](/en-US/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded), [`CanvasText` text drawing](/en-US/docs/Web/API/CanvasRenderingContext2D), or [`CanvasTextDrawingStyles` text style](/en-US/docs/Web/API/CanvasRenderingContext2D#text_styles) interface methods.
- The output bitmap is the size of the object it is rendering to.
- The value `currentColor`, when used as a color, is treated as opaque black.

The interface is only available in {{domxref("PaintWorkletGlobalScope")}}.

## Instance properties and methods

_The `PaintRenderingContext2D` implements a subset of the {{domxref("CanvasRenderingContext2D")}} API, with all properties and methods having the same usage as in `CanvasRenderingContext2D`_

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
  - : Retrieves the current transformation matrix being applied to the context as a {{domxref("DOMMatrix")}}.
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
  - : Alpha value that is applied to shapes and images before they are composited onto the canvas.
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : With `globalAlpha` applied, this sets how shapes and images are drawn onto the existing bitmap.

### Image smoothing

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : Image smoothing mode; if disabled, images will not be smoothed if scaled.
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
  - : Allows you to set the quality of image smoothing.

### Fill and stroke styles

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Color or style to use inside shapes.
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Color or style to use for the lines around shapes.

### Gradients and patterns

- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
  - : Creates a conic gradient around a point given by coordinates represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Creates a linear gradient along the line given by the coordinates represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Creates a radial gradient given by the coordinates of the two circles represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Creates a {{domxref("CanvasPattern")}} pattern of the specified image repeated in the directions specified by the repetition argument.

### Shadows

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Specifies the amount of blur as a number.
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Specifies the color of the shadow as a CSS {{cssxref("&lt;color&gt;")}}.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Specifies the horizontal distance the shadow will be offset as a number.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Specifies the vertical distance the shadow will be offset as a number.

### Drawing rectangles

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Erases the pixels in the given rectangle, setting them to transparent black.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Paints the pixels of the given rectangle, filling it with the current fill style.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Paints the outline of the given rectangle using the current stroke style.

### Drawing paths

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Starts a new path, emptying the list of sub-paths. Call this method when you want to create a new path.
- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Fills the sub-paths of the current path with the current fill style.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Strokes the sub-paths of the current path with the current stroke style.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Turns the current or given path into the current clipping region, using the given fill rule to determine which points are in the path. Subsequent path modifications will appear inside the clipping path only.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : A boolean whose value is `true` if the specified point is contained in the current or specified path.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : A boolean whose value is `true` if the point is inside the area contained by the stroking of a path

### Drawing images

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Draws the given image or specified portion thereof, optionally at a specified size and position.

### Line styles

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : A number specifying the line width, in coordinate space units.
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Type of endings on the end of lines. Possible values: `butt` (default), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Defines the type of corners where two lines meet. Possible values: `round`, `bevel`, `miter` (default).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : A number specifying the miter limit ratio, in coordinate space units.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Returns the current line dash pattern as an [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of numbers that specify the lengths of the alternative lines and gaps in coordinate space units.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Sets the list of line and dash distances as the current line dash pattern (as used when stroking).
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Specifies where to start a dash array on a line.

### Paths

- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Marks the current subpath as closed, drawing a straight line from the current point to the start, and starts a new subpath with a point the same as the start and end of the newly closed subpath. If the shape has already been closed or has only one point, this function does nothing.
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
