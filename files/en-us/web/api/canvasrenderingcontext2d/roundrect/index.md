---
title: "CanvasRenderingContext2D: roundRect() method"
short-title: roundRect()
slug: Web/API/CanvasRenderingContext2D/roundRect
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.roundRect
---

{{APIRef}}

The **`CanvasRenderingContext2D.roundRect()`** method of the Canvas 2D API adds a rounded rectangle to the current path.

The radii of the corners can be specified in much the same way as the CSS [`border-radius`](/en-US/docs/Web/CSS/border-radius) property.

Like other methods that modify the current path, this method does not directly render anything.
To draw the rounded rectangle onto a canvas, you can use the {{domxref("CanvasRenderingContext2D.fill", "fill()")}} or {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} methods.

## Syntax

```js-nolint
roundRect(x, y, width, height, radii)
```

### Parameters

- `x`
  - : The x-axis coordinate of the rectangle's starting point, in pixels.
- `y`
  - : The y-axis coordinate of the rectangle's starting point, in pixels.
- `width`
  - : The rectangle's width. Positive values are to the right, and negative to the left.
- `height`
  - : The rectangle's height. Positive values are down, and negative are up.
- `radii`

  - : A number or list specifying the radii of the circular arc to be used for the corners of the rectangle.
    The number and order of the radii function in the same way as the [`border-radius`](/en-US/docs/Web/CSS/border-radius) CSS property when `width` and `height` are _positive_:

    - `all-corners`
    - `[all-corners]`
    - `[top-left-and-bottom-right, top-right-and-bottom-left]`
    - `[top-left, top-right-and-bottom-left, bottom-right]`
    - `[top-left, top-right, bottom-right, bottom-left]`

    If `width` is _negative_ the rounded rectangle is flipped horizontally, so the radius values that normally apply to the left corners are used on the right and vice versa.
    Similarly, when `height` is negative, the rounded rect is flipped vertically.
    The specified radii may be scaled (reduced) if any of the edges are shorter than the combined radius of the vertices on either end.

    The `radii` parameter can also be a {{domxref("DOMPoint")}} or {{domxref("DOMPointReadOnly")}} instance, or an object containing the same properties (`{x: 0, y: 0}`), or a list of such objects, or a list mixing numbers and such objects.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("RangeError")}}
  - : If `radii` is a list that has zero or more than four elements, or if one of its values is a negative number.

## Examples

### Drawing rectangles

This example creates a number of rounded rectangular paths using the `roundRect()` method.
The paths are then rendered using the `stroke()` method.

#### HTML

```html
<canvas id="canvas" width="700" height="300"></canvas>
```

#### JavaScript

First we create a context for drawing our rounded rectangles.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

The code below draws two rectangles, both starting from the point (10, 20) and with a width of 150 and a height of 100.
The first rectangle is drawn in red and specifies a zero radius for all the corners using a number as an argument.
The second is drawn in blue, and specifies a 40px radius as a single element in a list.

```js
// Rounded rectangle with zero radius (specified as a number)
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, 0);
ctx.stroke();

// Rounded rectangle with 40px radius (single element list)
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, [40]);
ctx.stroke();
```

Below the previous rectangle we draw another in orange that specifies the values of the radii of opposite corners.

```js
// Rounded rectangle with 2 different radii
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.roundRect(10, 150, 150, 100, [10, 40]);
ctx.stroke();
```

Finally, we draw two rounded rectangles that have four values for the radii and the same starting point.
The difference here is that the second is drawn with a negative width.

```js
// Rounded rectangle with four different radii
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.roundRect(400, 20, 200, 100, [0, 30, 50, 60]);
ctx.stroke();

// Same rectangle drawn backwards
ctx.strokeStyle = "magenta";
ctx.beginPath();
ctx.roundRect(400, 150, -200, 100, [0, 30, 50, 60]);
ctx.stroke();
```

#### Result

The result is shown below.
For the two rectangles on the right, note how the bottom rectangle is drawn with a negative width, and how this flips the rectangle horizontally.

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 300) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.rect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
