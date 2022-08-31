---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
page-type: web-api-interface
tags:
  - API
  - Canvas
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLCanvasElement
---
{{APIRef("Canvas API")}}

The **`HTMLCanvasElement`** interface provides properties and methods for manipulating the layout and presentation of {{HtmlElement("canvas")}} elements. The `HTMLCanvasElement` interface also inherits the properties and methods of the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : The {{htmlattrxref("height", "canvas")}} HTML attribute of the {{HTMLElement("canvas")}} element is a positive `integer` reflecting the number of logical pixels (or RGBA values) going down one column of the canvas. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `150` is used. If no \[separate] CSS height is assigned to the {{HTMLElement("canvas")}}, then this value will also be used as the height of the canvas in the length-unit CSS Pixel.
- {{domxref("HTMLCanvasElement.width")}}
  - : The {{htmlattrxref("width", "canvas")}} HTML attribute of the {{HTMLElement("canvas")}} element is a positive `integer` reflecting the number of logical pixels (or RGBA values) going across one row of the canvas. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `300` is used. If no \[separate] CSS width is assigned to the {{HTMLElement("canvas")}}, then this value will also be used as the width of the canvas in the length-unit CSS Pixel.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}} {{deprecated_inline}}
  - : A boolean value reflecting the {{htmlattrxref("moz-opaque", "canvas")}} HTML attribute of the {{HTMLElement("canvas")}} element. It lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported in Mozilla-based browsers; use the standardized {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} instead.
- {{domxref("HTMLCanvasElement.mozPrintCallback")}} {{non-standard_inline}}
  - : A `function` that is Initially null. Web content can set this to a JavaScript function that will be called when the canvas is to be redrawn while the page is being printed. When called, the callback is passed a "printState" object that implements the [MozCanvasPrintState](https://searchfox.org/mozilla-central/search?q=interface%20MozCanvasPrintState&path=HTMLCanvasElement.webidl) interface. The callback can get the context to draw to from the printState object and must then call done() on it when finished. The purpose of `mozPrintCallback` is to obtain a higher resolution rendering of the canvas at the resolution of the printer being used. [See this blog post.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.captureStream()")}}
  - : Returns a {{domxref("CanvasCaptureMediaStreamTrack")}} that is a real-time video capture of the surface of the canvas.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Returns a drawing context on the canvas, or null if the context ID is not supported. A drawing context lets you draw on the canvas. Calling getContext with `"2d"` returns a {{domxref("CanvasRenderingContext2D")}} object, whereas calling it with `"webgl"` (or `"experimental-webgl"`) returns a {{domxref("WebGLRenderingContext")}} object. This context is only available on browsers that implement [WebGL](/en-US/docs/Web/API/WebGL_API).
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Returns a data-URL containing a representation of the image in the format specified by the `type` parameter (defaults to `png`). The returned image is in a resolution of 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Creates a {{domxref("Blob")}} object representing the image contained in the canvas; this file may be cached on the disk or stored in memory at the discretion of the user agent.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : Transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main thread or on a worker.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener).

- [`webglcontextcreationerror`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - : Fired if the user agent is unable to create a `WebGLRenderingContext` or `WebGL2RenderingContext` context.
- [`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - : Fired if the user agent detects that the drawing buffer associated with a `WebGLRenderingContext` or `WebGL2RenderingContext` object has been lost.
- [`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
  - : Fired if the user agent restores the drawing buffer for a `WebGLRenderingContext` or `WebGL2RenderingContext` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("canvas")}}
