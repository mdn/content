---
title: Optimizing canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
page-type: guide
tags:
  - Advanced
  - Canvas
  - Graphics
  - HTML
  - Tutorial
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

The {{HTMLElement("canvas")}} element is one of the most widely used tools for rendering 2D graphics on the web. However, when websites and apps push the Canvas API to its limits, performance begins to suffer. This article provides suggestions for optimizing your use of the canvas element to ensure that your graphics perform well.

## Performance tips

The following is a collection of tips to improve canvas performance.

### Pre-render similar primitives or repeating objects on an offscreen canvas

If you find yourself repeating some of the same drawing operations on each animation frame, consider offloading them to an offscreen canvas. You can then render the offscreen image to your primary canvas as often as needed, without unnecessarily repeating the steps needed to generate it in the first place.

```js
myCanvas.offscreenCanvas = document.createElement('canvas');
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext('2d').drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### Avoid floating-point coordinates and use integers instead

Sub-pixel rendering occurs when you render objects on a canvas without whole values.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

This forces the browser to do extra calculations to create the anti-aliasing effect. To avoid this, make sure to round all co-ordinates used in calls to {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} using {{jsxref("Math.floor()")}}, for example.

### Don't scale images in `drawImage`

Cache various sizes of your images on an offscreen canvas when loading as opposed to constantly scaling them in {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}.

### Use multiple layered canvases for complex scenes

In your application, you may find that some objects need to move or change frequently, while others remain relatively static. A possible optimization in this situation is to layer your items using multiple `<canvas>` elements.

For example, let's say you have a game with a UI on top, the gameplay action in the middle, and a static background on the bottom. In this case, you could split your game into three `<canvas>` layers. The UI would change only upon user input, the gameplay layer would change with every new frame, and the background would remain generally unchanged.

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }

  canvas { position: absolute; }
  #ui-layer { z-index: 3; }
  #game-layer { z-index: 2; }
  #background-layer { z-index: 1; }
</style>
```

### Use plain CSS for large background images

If you have a static background image, you can draw it onto a plain {{HTMLElement("div")}} element using the CSS {{cssxref("background")}} property and position it under the canvas. This will negate the need to render the background to the canvas on every tick.

### Scaling canvas using CSS transforms

[CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms) are faster since they use the GPU. The best case is to not scale the canvas, or have a smaller canvas and scale up rather than a bigger canvas and scale down.

```js
const scaleX = window.innerWidth / canvas.width;
const scaleY = window.innerHeight / canvas.height;

const scaleToFit = Math.min(scaleX, scaleY);
const scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = `scale(${scaleToFit})`;
```

### Turn off transparency

If your application uses canvas and doesn't need a transparent backdrop, set the `alpha` option to `false` when creating a drawing context with {{domxref("HTMLCanvasElement.getContext()")}}. This information can be used internally by the browser to optimize rendering.

```js
const ctx = canvas.getContext('2d', { alpha: false });
```

### Scaling for high resolution displays

You may find that canvas items appear blurry on higher-resolution displays. While many solutions may exist, a simple first step is to scale the canvas size up and down simultaneously, using its attributes, styling, and its context's scale.

```js
// Get the DPR and size of the canvas
const dpr = window.devicePixelRatio;
const rect = canvas.getBoundingClientRect();

// Set the "actual" size of the canvas
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

// Scale the context to ensure correct drawing operations
ctx.scale(dpr, dpr);

// Set the "drawn" size of the canvas
canvas.style.width = `${rect.width}px`;
canvas.style.height = `${rect.height}px`;
```

### More tips

- Batch canvas calls together. For example, draw a polyline instead of multiple separate lines.
- Avoid unnecessary canvas state changes.
- Render screen differences only, not the whole new state.
- Avoid the {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} property whenever possible.
- Avoid [text rendering](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text) whenever possible.
- Try different ways to clear the canvas ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} vs. {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} vs. resizing the canvas).
- With animations, use {{domxref("window.requestAnimationFrame()")}} instead of {{domxref("setInterval()")}} .
- Be careful with heavy physics libraries.

## See also

- [Optimizing your JavaScript game for Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}
