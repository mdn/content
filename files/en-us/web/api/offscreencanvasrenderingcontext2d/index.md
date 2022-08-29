---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
page-type: web-api-interface
tags:
  - API
  - Canvas
  - OffscreenCanvasRenderingContext2D
  - Games
  - Graphics
  - Reference
browser-compat: api.OffscreenCanvasRenderingContext2D
---

{{APIRef}}

The **`OffscreenCanvasRenderingContext2D`** interface is a {{domxref("CanvasRenderingContext2D")}} interface rendering context for drawing to the bitmap of an `OffscreenCanvas` object.
It is similar to the `CanvasRenderingContext2D` object, with the following differences:

- there is no support for user interface features;
- its canvas attribute refers to an `OffscreenCanvas` object rather than a canvas element;
- it has a `commit()` method for pushing the rendered image to the context's `OffscreenCanvas` object's placeholder canvas element.

## Constructor

- {{domxref("OffscreenCanvasRenderingContext2D.OffscreenCanvasRenderingContext2D()", "OffscreenCanvasRenderingContext2D()")}}
  - : Creates a new `OffscreenCanvasRenderingContext2D` instance.

## Additional methods

The following method is new to `OffscreenCanvasRenderingContext2D` and does not exist in the `CanvasRenderingContext2D` interface:

- {{domxref("OffscreenCanvasRenderingContext2D.commit()", "commit()")}}
  - : Pushes the rendered image to the context's `OffscreenCanvas` object's placeholder canvas element.

## Unsupported features

The following user interface methods are **not supported** by the `OffscreenCanvasRenderingContext2D` interface:

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : If a given element is focused, this method draws a focus ring around the current path.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}} {{Experimental_Inline}}
  - : Scrolls the current path or a given path into the view.

## Inherited properties and methods

_The following properties and methods are inherited from {{domxref("CanvasRenderingContext2D")}}._

### Context

- {{domxref("OffscreenCanvasRenderingContext2D.isContextLost")}}
  - : TODO

### Drawing rectangles

- {{domxref("OffscreenCanvasRenderingContext2D.clearRect()")}}
  - : Sets all pixels in the rectangle defined by starting point _(x, y)_ and size _(width, height)_ to transparent black, erasing any previously drawn content.
- {{domxref("OffscreenCanvasRenderingContext2D.fillRect()")}}
  - : Draws a filled rectangle at _(x, y)_ position whose size is determined by _width_ and _height_.
- {{domxref("OffscreenCanvasRenderingContext2D.strokeRect()")}}
  - : Paints a rectangle which has a starting point at _(x, y)_ and has a _w_ width and an _h_ height onto the canvas, using the current stroke style.

### Drawing text

The following methods and properties control drawing text. See also the {{domxref("TextMetrics")}} object for text properties.

- {{domxref("OffscreenCanvasRenderingContext2D.fillText()")}}
  - : Draws (fills) a given text at the given (x, y) position.
- {{domxref("OffscreenCanvasRenderingContext2D.strokeText()")}}
  - : Draws (strokes) a given text at the given (x, y) position.
- {{domxref("OffscreenCanvasRenderingContext2D.measureText()")}}
  - : Returns a {{domxref("TextMetrics")}} object.
- {{domxref("OffscreenCanvasRenderingContext2D.textRendering}")}}
  - : TODO

### Line styles

The following methods and properties control how lines are drawn.

- {{domxref("OffscreenCanvasRenderingContext2D.lineWidth")}}
  - : Width of lines. Default `1.0`.
- {{domxref("OffscreenCanvasRenderingContext2D.lineCap")}}
  - : Type of endings on the end of lines. Possible values: `butt` (default), `round`, `square`.
- {{domxref("OffscreenCanvasRenderingContext2D.lineJoin")}}
  - : Defines the type of corners where two lines meet. Possible values: `round`, `bevel`, `miter` (default).
- {{domxref("OffscreenCanvasRenderingContext2D.miterLimit")}}
  - : Miter limit ratio. Default `10`.
- {{domxref("OffscreenCanvasRenderingContext2D.getLineDash()")}}
  - : Returns the current line dash pattern array containing an even number of non-negative numbers.
- {{domxref("OffscreenCanvasRenderingContext2D.setLineDash()")}}
  - : Sets the current line dash pattern.
- {{domxref("OffscreenCanvasRenderingContext2D.lineDashOffset")}}
  - : Specifies where to start a dash array on a line.

### Text styles

The following properties control how text is laid out.

- {{domxref("OffscreenCanvasRenderingContext2D.font")}}
  - : Font setting. Default value `10px sans-serif`.
- {{domxref("OffscreenCanvasRenderingContext2D.textAlign")}}
  - : Text alignment setting. Possible values: `start` (default), `end`, `left`, `right`, `center`.
- {{domxref("OffscreenCanvasRenderingContext2D.textBaseline")}}
  - : Baseline alignment setting. Possible values: `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, `bottom`.
- {{domxref("OffscreenCanvasRenderingContext2D.direction")}}
  - : Directionality. Possible values: `ltr`, `rtl`, `inherit` (default).
- {{domxref("OffscreenCanvasRenderingContext2D.fontKerning")}}
  - : TODO
- {{domxref("OffscreenCanvasRenderingContext2D.fontStretch")}}
  - : TODO
- {{domxref("OffscreenCanvasRenderingContext2D.fontVariantCaps")}}
  - : TODO
- {{domxref("OffscreenCanvasRenderingContext2D.letterSpacing")}}
  - : TODO
- {{domxref("OffscreenCanvasRenderingContext2D.wordSpacing")}}
  - : TODO

### Fill and stroke styles

Fill styling is used for colors and styles inside shapes and stroke styling is used for the lines around shapes.

- {{domxref("OffscreenCanvasRenderingContext2D.fillStyle")}}
  - : Color or style to use inside shapes. Default `#000` (black).
- {{domxref("OffscreenCanvasRenderingContext2D.strokeStyle")}}
  - : Color or style to use for the lines around shapes. Default `#000` (black).

### Gradients and patterns

- {{domxref("OffscreenCanvasRenderingContext2D.createConicGradient()")}}
  - : Creates a conic gradient around a point given by coordinates represented by the parameters.
- {{domxref("OffscreenCanvasRenderingContext2D.createLinearGradient()")}}
  - : Creates a linear gradient along the line given by the coordinates represented by the parameters.
- {{domxref("OffscreenCanvasRenderingContext2D.createRadialGradient()")}}
  - : Creates a radial gradient given by the coordinates of the two circles represented by the parameters.
- {{domxref("OffscreenCanvasRenderingContext2D.createPattern()")}}
  - : Creates a pattern using the specified image. It repeats the source in the directions specified by the repetition argument. This method returns a {{domxref("CanvasPattern")}}.

### Shadows

- {{domxref("OffscreenCanvasRenderingContext2D.shadowBlur")}}
  - : Specifies the blurring effect. Default: `0`.
- {{domxref("OffscreenCanvasRenderingContext2D.shadowColor")}}
  - : Color of the shadow. Default: fully-transparent black.
- {{domxref("OffscreenCanvasRenderingContext2D.shadowOffsetX")}}
  - : Horizontal distance the shadow will be offset. Default: `0`.
- {{domxref("OffscreenCanvasRenderingContext2D.shadowOffsetY")}}
  - : Vertical distance the shadow will be offset. Default: `0`.

### Paths

The following methods can be used to manipulate paths of objects.

- {{domxref("OffscreenCanvasRenderingContext2D.beginPath()")}}
  - : Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
- {{domxref("OffscreenCanvasRenderingContext2D.closePath()")}}
  - : Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.
- {{domxref("OffscreenCanvasRenderingContext2D.moveTo()")}}
  - : Moves the starting point of a new sub-path to the (x, y) coordinates.
- {{domxref("OffscreenCanvasRenderingContext2D.lineTo()")}}
  - : Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.
- {{domxref("OffscreenCanvasRenderingContext2D.bezierCurveTo()")}}
  - : Adds a cubic Bézier curve to the current path.
- {{domxref("OffscreenCanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Adds a quadratic Bézier curve to the current path.
- {{domxref("OffscreenCanvasRenderingContext2D.arc()")}}
  - : Adds a circular arc to the current path.
- {{domxref("OffscreenCanvasRenderingContext2D.arcTo()")}}
  - : Adds an arc to the current path with the given control points and radius, connected to the previous point by a straight line.
- {{domxref("OffscreenCanvasRenderingContext2D.ellipse()")}}
  - : Adds an elliptical arc to the current path.
- {{domxref("OffscreenCanvasRenderingContext2D.rect()")}}
  - : Creates a path for a rectangle at position (x, y) with a size that is determined by _width_ and _height_.

### Drawing paths

- {{domxref("OffscreenCanvasRenderingContext2D.fill()")}}
  - : Fills the current sub-paths with the current fill style.
- {{domxref("OffscreenCanvasRenderingContext2D.stroke()")}}
  - : Strokes the current sub-paths with the current stroke style.
- {{domxref("OffscreenCanvasRenderingContext2D.clip()")}}
  - : Creates a clipping path from the current sub-paths. Everything drawn after `clip()` is called appears inside the clipping path only. For an example, see [Clipping paths](/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing) in the Canvas tutorial.
- {{domxref("OffscreenCanvasRenderingContext2D.isPointInPath()")}}
  - : Reports whether or not the specified point is contained in the current path.
- {{domxref("OffscreenCanvasRenderingContext2D.isPointInStroke()")}}
  - : Reports whether or not the specified point is inside the area contained by the stroking of a path.
- {{domxref("OffscreenCanvasRenderingContext2D.roundRect()")}}
  - : TODO - Addition to CanvasPath that allows users to render rectangles with rounded corners.

### Transformations

Objects in the `OffscreenCanvasRenderingContext2D` rendering context have a current transformation matrix and methods to manipulate it. The transformation matrix is applied when creating the current default path, painting text, shapes and {{domxref("Path2D")}} objects. The methods listed below remain for historical and compatibility reasons as {{domxref("DOMMatrix")}} objects are used in most parts of the API nowadays and will be used in the future instead.

- {{domxref("OffscreenCanvasRenderingContext2D.getTransform()")}}
  - : Retrieves the current transformation matrix being applied to the context.
- {{domxref("OffscreenCanvasRenderingContext2D.rotate()")}}
  - : Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.
- {{domxref("OffscreenCanvasRenderingContext2D.scale()")}}
  - : Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
- {{domxref("OffscreenCanvasRenderingContext2D.translate()")}}
  - : Adds a translation transformation by moving the canvas and its origin x horizontally and y vertically on the grid.
- {{domxref("OffscreenCanvasRenderingContext2D.transform()")}}
  - : Multiplies the current transformation matrix with the matrix described by its arguments.
- {{domxref("OffscreenCanvasRenderingContext2D.setTransform()")}}
  - : Resets the current transform to the identity matrix, and then invokes the `transform()` method with the same arguments.
- {{domxref("OffscreenCanvasRenderingContext2D.resetTransform()")}}
  - : Resets the current transform by the identity matrix.

### Compositing

- {{domxref("OffscreenCanvasRenderingContext2D.globalAlpha")}}
  - : Alpha value that is applied to shapes and images before they are composited onto the canvas. Default `1.0` (opaque).
- {{domxref("OffscreenCanvasRenderingContext2D.globalCompositeOperation")}}
  - : With `globalAlpha` applied this sets how shapes and images are drawn onto the existing bitmap.

### Drawing images

- {{domxref("OffscreenCanvasRenderingContext2D.drawImage()")}}
  - : Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

### Pixel manipulation

See also the {{domxref("ImageData")}} object.

- {{domxref("OffscreenCanvasRenderingContext2D.createImageData()")}}
  - : Creates a new, blank {{domxref("ImageData")}} object with the specified dimensions. All of the pixels in the new object are transparent black.
- {{domxref("OffscreenCanvasRenderingContext2D.getImageData()")}}
  - : Returns an {{domxref("ImageData")}} object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at _(sx, sy)_ and has an _sw_ width and _sh_ height.
- {{domxref("OffscreenCanvasRenderingContext2D.putImageData()")}}
  - : Paints data from the given {{domxref("ImageData")}} object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.

### Image smoothing

- {{domxref("OffscreenCanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : Image smoothing mode; if disabled, images will not be smoothed if scaled.
- {{domxref("OffscreenCanvasRenderingContext2D.imageSmoothingQuality")}}
  - : Allows you to set the quality of image smoothing.

### The canvas state

The `OffscreenCanvasRenderingContext2D` rendering context contains a variety of drawing style states (attributes for line styles, fill styles, shadow styles, text styles). The following methods help you to work with that state:

- {{domxref("OffscreenCanvasRenderingContext2D.save()")}}
  - : Saves the current drawing style state using a stack so you can revert any change you make to it using `restore()`.
- {{domxref("OffscreenCanvasRenderingContext2D.restore()")}}
  - : Restores the drawing style state to the last element on the 'state stack' saved by `save()`.
- {{domxref("OffscreenCanvasRenderingContext2D.canvas")}}
  - : A read-only reference to an `OffscreenCanvas` object.
- {{domxref("OffscreenCanvasRenderingContext2D.getContextAttributes()")}}
  - : Returns an object containing the actual context attributes. Context attributes can be requested with {{domxref("HTMLCanvasElement.getContext()")}}.
- {{domxref("OffscreenCanvasRenderingContext2D.reset()")}}
  - : Resets the current drawing style state to the default values.

### Filters

- {{domxref("OffscreenCanvasRenderingContext2D.filter")}}
  - : Applies a CSS or SVG filter to the canvas, e.g., to change its brightness or blurriness.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
