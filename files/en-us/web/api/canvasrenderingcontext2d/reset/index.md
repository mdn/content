---
title: "CanvasRenderingContext2D: reset() method"
short-title: reset()
slug: Web/API/CanvasRenderingContext2D/reset
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.reset
---

{{APIRef}}

The **`CanvasRenderingContext2D.reset()`** method of the Canvas 2D API resets the rendering context to its default state, allowing it to be reused for drawing something else without having to explicitly reset all the properties.

Resetting clears the backing buffer, drawing state stack, any defined paths, and styles.
This includes the current [transformation](/en-US/docs/Web/API/CanvasRenderingContext2D#transformations) matrix, [compositing](/en-US/docs/Web/API/CanvasRenderingContext2D#compositing) properties, clipping region, dash list, [line styles](/en-US/docs/Web/API/CanvasRenderingContext2D#line_styles), [text styles](/en-US/docs/Web/API/CanvasRenderingContext2D#text_styles), [shadows](/en-US/docs/Web/API/CanvasRenderingContext2D#shadows), [image smoothing](/en-US/docs/Web/API/CanvasRenderingContext2D#image_smoothing), [filters](/en-US/docs/Web/API/CanvasRenderingContext2D#filters), and so on.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows how we can use `reset()` to completely clear the context before redrawing.

First we define a button and a canvas.

```css
#toggle-reset {
  display: block;
}
```

```html
<button id="toggle-reset">Toggle</button>
<canvas id="my-house" width="500" height="200"></canvas>
```

The code first gets a `2d` context for the canvas.
It then defines functions that can use the context to draw a rectangle and a circle, respectively.

```js
// Get the 2d context
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

function drawRect() {
  // Set line width
  ctx.lineWidth = 10;

  // Stroke rect outline
  ctx.strokeRect(50, 50, 150, 100);

  // Create filled text
  ctx.font = "50px serif";
  ctx.fillText("Rect!", 70, 110);
}

function drawCircle() {
  // Set line width
  ctx.lineWidth = 5;

  // Stroke out circle
  ctx.beginPath();
  ctx.arc(300, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // Create filled text
  ctx.font = "25px sans-serif";
  ctx.fillText("Circle!", 265, 100);
}
```

We then draw the rectangle using its function.
The button toggles drawing the circle and rectangle.
Note how `reset()` is called before drawing to clear the context.

```js
drawRect();

// Toggle between circle and rectangle using button
let toggle = true;
const mybutton = document.getElementById("toggle-reset");

mybutton.addEventListener("click", () => {
  ctx.reset(); // Clear the context!
  if (toggle) {
    drawCircle();
  } else {
    drawRect();
  }
  toggle = !toggle;
});
```

The result looks like this:

{{EmbedLiveSample("Examples", 500, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
