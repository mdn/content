---
title: Canvas API
slug: Web/API/Canvas_API
page-type: web-api-overview
tags:
  - API
  - Canvas
  - Graphics
  - JavaScript
  - Overview
  - Reference
browser-compat: html.elements.canvas
---
{{CanvasSidebar}}

The **Canvas API** provides a means for drawing graphics via [JavaScript](/en-US/docs/Web/JavaScript) and the [HTML](/en-US/docs/Web/HTML) {{HtmlElement("canvas")}} element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

The Canvas API largely focuses on 2D graphics. The [WebGL API](/en-US/docs/Web/API/WebGL_API), which also uses the `<canvas>` element, draws hardware-accelerated 2D and 3D graphics.

## Basic example

This simple example draws a green rectangle onto a canvas.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

The {{domxref("Document.getElementById()")}} method gets a reference to the HTML `<canvas>` element. Next, the {{domxref("HTMLCanvasElement.getContext()")}} method gets that element's context—the thing onto which the drawing will be rendered.

The actual drawing is done using the {{domxref("CanvasRenderingContext2D")}} interface. The {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property makes the rectangle green. The {{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} method places its top-left corner at (10, 10), and gives it a size of 150 units wide by 100 tall.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

### Result

{{ EmbedLiveSample('Basic_example', 700, 180) }}

## Reference

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}} {{experimental_inline}}
- {{domxref("Path2D")}} {{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}} {{experimental_inline}}

> **Note:** The interfaces related to the `WebGLRenderingContext` are referenced under [WebGL](/en-US/docs/Web/API/WebGL_API).

> **Note:** {{domxref("OffscreenCanvas")}} is also available in web workers.

{{domxref("CanvasCaptureMediaStreamTrack")}} is a related interface.

## Guides and tutorials

- [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial)
  - : A comprehensive tutorial covering both the basic usage of the Canvas API and its advanced features.
- [HTML5 Canvas Deep Dive](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : A hands-on, book-length introduction to the Canvas API and WebGL.
- [Canvas Handbook](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : A handy reference for the Canvas API.
- [Manipulating video using canvas](/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Combining {{HTMLElement("video")}} and {{HTMLElement("canvas")}} to manipulate video data in real time.

## Libraries

The Canvas API is extremely powerful, but not always simple to use. The libraries listed below can make the creation of canvas-based projects faster and easier.

- [EaselJS](https://www.createjs.com/easeljs) is an open-source canvas library that makes creating games, generative art, and other highly graphical experiences easy.
- [Fabric.js](http://fabricjs.com) is an open-source canvas library with SVG parsing capabilities.
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) is an open-source library for creating canvas-based data heat maps.
- [JavaScript InfoVis Toolkit](https://philogb.github.io/jit/) creates interactive data visualizations.
- [Konva.js](https://konvajs.org/) is a 2D canvas library for desktop and mobile applications.
- [p5.js](https://p5js.org/) has a full set of canvas drawing functionality for artists, designers, educators, and beginners.
- [Paper.js](http://paperjs.org/) is an open-source vector graphics scripting framework that runs on top of the HTML Canvas.
- [Phaser](https://phaser.io/) is a fast, free and fun open source framework for Canvas and WebGL powered browser games.
- [Pts.js](https://ptsjs.org) is a library for creative coding and visualization in canvas and SVG.
- [Rekapi](https://github.com/jeremyckahn/rekapi) is an animation key-framing API for Canvas.
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/) is an open-source JavaScript library for creating and manipulating 2D canvas elements.
- The [ZIM](https://zimjs.com) framework provides conveniences, components, and controls for coding creativity on the canvas — includes accessibility and hundreds of colorful tutorials.

> **Note:** See the [WebGL API](/en-US/docs/Web/API/WebGL_API) for 2D and 3D libraries that use WebGL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGL](/en-US/docs/Web/API/WebGL_API)
