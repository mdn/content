---
title: CanvasRenderingContext2D.createPattern()
slug: Web/API/CanvasRenderingContext2D/createPattern
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.createPattern
---
{{APIRef}}

The
**`CanvasRenderingContext2D.createPattern()`**
method of the Canvas 2D API creates a pattern using the specified image and repetition.
This method returns a {{domxref("CanvasPattern")}}.

This method doesn't draw anything to the canvas directly. The pattern it creates must
be assigned to the {{domxref("CanvasRenderingContext2D.fillStyle")}} or
{{domxref("CanvasRenderingContext2D.strokeStyle")}} properties, after which it is
applied to any subsequent drawing.

## Syntax

```js
CanvasPattern ctx.createPattern(image, repetition);
```

### Parameters

- `image`

  - : A {{domxref("CanvasImageSource")}} to be used as the pattern's image. It can be any
    of the following:

    - {{domxref("HTMLImageElement")}} ({{HTMLElement("img")}})
    - {{domxref("SVGImageElement")}} ({{SVGElement("image")}})
    - {{domxref("HTMLVideoElement")}} ({{HTMLElement("video")}}, by using the capture
      of the video)
    - {{domxref("HTMLCanvasElement")}} ({{HTMLElement("canvas")}})
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}

- `repetition`

  - : A {{domxref("DOMString")}} indicating how to repeat the pattern's image. Possible
    values are:

    - `"repeat"` (both directions)
    - `"repeat-x"` (horizontal only)
    - `"repeat-y"` (vertical only)
    - `"no-repeat"` (neither direction)

    If `repetition` is specified as an empty string (`""`) or
    {{jsxref("null")}} (but not {{jsxref("undefined")}}), a value of `"repeat"`
    will be used.

### Return value

- {{domxref("CanvasPattern")}}
  - : An opaque object describing a pattern.

## Examples

### Creating a pattern from an image

This example uses the `createPattern()` method to create a
{{domxref("CanvasPattern")}} with a repeating source image. Once created, the pattern is
assigned to the canvas context's fill style and applied to a rectangle.

The original image looks like this:

![A flowery pattern](canvas_createpattern.png)

#### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = 'canvas_createpattern.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
```

{{ EmbedLiveSample('Creating_a_pattern_from_an_image', 700, 310) }}

### Creating a pattern from a canvas

In this example we create a pattern from the contents of an offscreen canvas. We then
apply it to the fill style of our primary canvas, and fill that canvas with the pattern.

#### JavaScript

```js
// Create a pattern, offscreen
const patternCanvas = document.createElement('canvas');
const patternContext = patternCanvas.getContext('2d');

// Give the pattern a width and height of 50
patternCanvas.width = 50;
patternCanvas.height = 50;

// Give the pattern a background color and draw an arc
patternContext.fillStyle = '#fec';
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(0, 0, 50, 0, .5 * Math.PI);
patternContext.stroke();

// Create our primary canvas and fill it with the pattern
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const pattern = ctx.createPattern(patternCanvas, 'repeat');
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

### Gecko-specific notes

- Starting with Gecko 5.0 {{geckoRelease("5.0")}}, specifying a `null` or
  `undefined` image correctly throws a `TYPE_MISMATCH_ERR`
  exception.
- Starting with Gecko 16.0 {{geckoRelease("16.0")}}, specifying `null` for
  the `repetition` parameter is now allowed and results in the repetition
  being set to `"repeat"` ({{bug(762657)}}).

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasPattern")}}
