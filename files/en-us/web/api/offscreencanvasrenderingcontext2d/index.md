---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
page-type: web-api-interface
browser-compat: api.OffscreenCanvasRenderingContext2D
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`OffscreenCanvasRenderingContext2D`** interface is a {{domxref("CanvasRenderingContext2D")}} rendering context for drawing to the bitmap of an `OffscreenCanvas` object.
It is similar to the `CanvasRenderingContext2D` object, with the following differences:

- there is no support for user-interface features (`drawFocusIfNeeded`)
- its `canvas` attribute refers to an `OffscreenCanvas` object rather than a {{HtmlElement("canvas")}} element
- the bitmap for the placeholder {{HtmlElement("canvas")}} element belonging to the `OffscreenCanvas` object is updated during the rendering update of the `Window` or `Worker` that owns the `OffscreenCanvas`

## Example

The following code snippet creates a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor.
The `transferControlToOffscreen()` method is used to get an `OffscreenCanvas` object from the {{HtmlElement("canvas")}} element so it can be transferred to the worker:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

In the worker thread, we can use the `OffscreenCanvasRenderingContext2D` to draw to the bitmap of the `OffscreenCanvas` object:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

For a full example, see our [OffscreenCanvas worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([run OffscreenCanvas worker](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Additional methods

The following method is new to the `OffscreenCanvasRenderingContext2D` interface and does not exist in the `CanvasRenderingContext2D` interface:

- {{domxref("OffscreenCanvasRenderingContext2D.commit()", "commit()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Pushes the rendered image to the context's `OffscreenCanvas` object's placeholder {{HtmlElement("canvas")}} element.

## Unsupported features

The following user interface method is **not supported** by the `OffscreenCanvasRenderingContext2D` interface:

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : If a given element is focused, this method draws a focus ring around the current path.

## Inherited properties and methods

_The following properties and methods are inherited from {{domxref("CanvasRenderingContext2D")}}. They have the same usage as in `CanvasRenderingContext2D`_

### Context

- {{domxref("CanvasRenderingContext2D.isContextLost()")}}
  - : Returns `true` if the rendering context was lost.

### Drawing rectangles

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Sets all pixels in the rectangle defined by starting point _(x, y)_ and size _(width, height)_ to transparent black, erasing any previously drawn content.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Draws a filled rectangle at _(x, y)_ position whose size is determined by _width_ and _height_.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Paints a rectangle which has a starting point at _(x, y)_ and has a _w_ width and an _h_ height onto the canvas, using the current stroke style.

### Drawing text

The following methods and properties control drawing text. See also the {{domxref("TextMetrics")}} object for text properties.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Draws (fills) a given text at the given (x, y) position.
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Draws (strokes) a given text at the given (x, y) position.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Returns a {{domxref("TextMetrics")}} object.
- {{domxref("CanvasRenderingContext2D.textRendering")}}
  - : Text rendering. Possible values: `auto` (default), `optimizeSpeed`, `optimizeLegibility`,

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

### Text styles

The following properties control how text is laid out.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Font setting. Default value `10px sans-serif`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Text alignment setting. Possible values: `start` (default), `end`, `left`, `right`, `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Baseline alignment setting. Possible values: `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Directionality. Possible values: `ltr`, `rtl`, `inherit` (default).
- {{domxref("CanvasRenderingContext2D.letterSpacing")}}
  - : Letter spacing. Default: `0px`.
- {{domxref("CanvasRenderingContext2D.fontKerning")}}
  - : Font kerning. Possible values: `auto` (default), `normal`, `none`.
- {{domxref("CanvasRenderingContext2D.fontStretch")}}
  - : Font stretch. Possible values: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (default), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- {{domxref("CanvasRenderingContext2D.fontVariantCaps")}}
  - : Font variant caps. Possible values: `normal` (default), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- {{domxref("CanvasRenderingContext2D.textRendering")}} {{experimental_inline}}
  - : Text rendering. Possible values: `auto` (default), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
  - : Word spacing. Default value: `0px`

### Fill and stroke styles

Fill styling is used for colors and styles inside shapes and stroke styling is used for the lines around shapes.

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

### Paths

The following methods can be used to manipulate paths of objects.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
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

### Drawing paths

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

### Transformations

Objects in the `CanvasRenderingContext2D` rendering context have a current transformation matrix and methods to manipulate it. The transformation matrix is applied when creating the current default path, painting text, shapes and {{domxref("Path2D")}} objects. The methods listed below remain for historical and compatibility reasons as {{domxref("DOMMatrix")}} objects are used in most parts of the API nowadays and will be used in the future instead.

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

### Drawing images

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

### Pixel manipulation

See also the {{domxref("ImageData")}} object.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Creates a new, blank {{domxref("ImageData")}} object with the specified dimensions. All of the pixels in the new object are transparent black.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Returns an {{domxref("ImageData")}} object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at _(sx, sy)_ and has an _sw_ width and _sh_ height.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Paints data from the given {{domxref("ImageData")}} object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.

### Image smoothing

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : Image smoothing mode; if disabled, images will not be smoothed if scaled.
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
  - : Allows you to set the quality of image smoothing.

### The canvas state

The `CanvasRenderingContext2D` rendering context contains a variety of drawing style states (attributes for line styles, fill styles, shadow styles, text styles). The following methods help you to work with that state:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Saves the current drawing style state using a stack so you can revert any change you make to it using `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Restores the drawing style state to the last element on the 'state stack' saved by `save()`.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : A read-only reference to an `OffscreenCanvas` object.
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} {{experimental_inline}}
  - : Returns an object containing the actual context attributes. Context attributes can be requested with {{domxref("HTMLCanvasElement.getContext()")}}.
- {{domxref("CanvasRenderingContext2D.reset()")}}
  - : Resets the current drawing style state to the default values.

### Filters

- {{domxref("CanvasRenderingContext2D.filter")}}
  - : Applies a CSS or SVG filter to the canvas; e.g., to change its brightness or blurriness.

## Unsupported properties and methods

The following method is **not supported** in the `OffscreenCanvasRenderingContext2D` interface:

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : If a given element is focused, this method draws a focus ring around the current path.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
