---
title: "CanvasRenderingContext2D: createPattern() method"
short-title: createPattern()
slug: Web/API/CanvasRenderingContext2D/createPattern
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.createPattern
---

{{APIRef}}

The **`CanvasRenderingContext2D.createPattern()`** method of the Canvas 2D API creates a pattern using the specified image and repetition.
This method returns a {{domxref("CanvasPattern")}}.

This method doesn't draw anything to the canvas directly.
The pattern it creates must be assigned to the {{domxref("CanvasRenderingContext2D.fillStyle")}} or {{domxref("CanvasRenderingContext2D.strokeStyle")}} properties, after which it is applied to any subsequent drawing.

## Syntax

```js-nolint
createPattern(image, repetition)
```

### Parameters

- `image`

  - : An image to be used as the pattern's image.
    It can be any of the following:

    - {{domxref("HTMLImageElement")}} ({{HTMLElement("img")}})
    - {{domxref("SVGImageElement")}} ({{SVGElement("image")}})
    - {{domxref("HTMLVideoElement")}} ({{HTMLElement("video")}}, by using the capture of the video)
    - {{domxref("HTMLCanvasElement")}} ({{HTMLElement("canvas")}})
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}

- `repetition`

  - : A string indicating how to repeat the pattern's image.
    Possible values are:

    - `"repeat"` (both directions)
    - `"repeat-x"` (horizontal only)
    - `"repeat-y"` (vertical only)
    - `"no-repeat"` (neither direction)

    A [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`): both are synonyms of `"repeat"`.

### Return value

- {{domxref("CanvasPattern")}}
  - : An opaque object describing a pattern.

If the `image` is not fully loaded ({{domxref("HTMLImageElement.complete")}} is `false`), then [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is returned.

## Examples

### Creating a pattern from an image

This example uses the `createPattern()` method to create a {{domxref("CanvasPattern")}} with a repeating source image.
Once created, the pattern is assigned to the canvas context's fill style and applied to a rectangle.

The original image looks like this:

![A flowery pattern](canvas_createpattern.png)

#### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canvas_createpattern.png";
// Only use the image after it's loaded
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

{{ EmbedLiveSample('Creating_a_pattern_from_an_image', 700, 310) }}

### Creating a pattern from a canvas

In this example we create a pattern from the contents of an offscreen canvas.
We then apply it to the fill style of our primary canvas, and fill that canvas with the pattern.

#### JavaScript

```js
// Create a pattern, offscreen
const patternCanvas = document.createElement("canvas");
const patternContext = patternCanvas.getContext("2d");

// Give the pattern a width and height of 50
patternCanvas.width = 50;
patternCanvas.height = 50;

// Give the pattern a background color and draw an arc
patternContext.fillStyle = "#fec";
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
patternContext.stroke();

// Create our primary canvas and fill it with the pattern
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const pattern = ctx.createPattern(patternCanvas, "repeat");
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add our primary canvas to the webpage
document.body.appendChild(canvas);
```

#### Result

{{ EmbedLiveSample('Creating_a_pattern_from_a_canvas', 700, 160) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasPattern")}}
