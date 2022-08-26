---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
page-type: web-api-interface
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Games
  - Graphics
  - Reference
browser-compat: api.CanvasRenderingContext2D
---
{{APIRef}}

The **`CanvasRenderingContext2D`** interface, part of the [Canvas API](/en-US/docs/Web/API/Canvas_API), provides the 2D rendering context for the drawing surface of a {{HTMLElement("canvas")}} element. It is used for drawing shapes, text, images, and other objects.

See the interface's properties and methods in the sidebar and below. The [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial) has more explanation, examples, and resources, as well.

## Basic example

To get a `CanvasRenderingContext2D` instance, you must first have an HTML `<canvas>` element to work with:

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

To get the canvas' 2D rendering context, call {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} on the `<canvas>` element, supplying `'2d'` as the argument:

```js
const canvas = document.getElementById('my-house');
const ctx = canvas.getContext('2d');
```

With the context in hand, you can draw anything you like. This code draws a house:

```js
// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
```

The resulting drawing looks like this:

{{EmbedLiveSample("Basic_example", 700, 330)}}

## Reference

### Drawing rectangles

There are three methods that immediately draw rectangles to the canvas.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Sets all pixels in the rectangle defined by starting point _(x, y)_ and size _(width, height)_ to transparent black, erasing any previously drawn content.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Draws a filled rectangle at _(x, y)_ position whose size is determined by _width_ and _height_.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Paints a rectangle which has a starting point at _(x, y)_ and has a _w_ width and an _h_ height onto the canvas, using the current stroke style.

### Drawing text

The following methods draw text. See also the {{domxref("TextMetrics")}} object for text properties.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Draws (fills) a given text at the given (x, y) position.
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Draws (strokes) a given text at the given (x, y) position.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Returns a {{domxref("TextMetrics")}} object.

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

### Drawing paths

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Fills the current sub-paths with the current fill style.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Strokes the current sub-paths with the current stroke style.
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : If a given element is focused, this method draws a focus ring around the current path.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}} {{Experimental_Inline}}
  - : Scrolls the current path or a given path into the view.
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
  - : A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if it is not associated with a {{HTMLElement("canvas")}} element.
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
  - : Returns an object containing the actual context attributes. Context attributes can be requested with {{domxref("HTMLCanvasElement.getContext()")}}.

### Filters

- {{domxref("CanvasRenderingContext2D.filter")}}
  - : Applies a CSS or SVG filter to the canvas, e.g., to change its brightness or blurriness.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
