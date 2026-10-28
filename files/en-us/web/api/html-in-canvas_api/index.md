---
title: HTML-in-Canvas API
slug: Web/API/HTML-in-Canvas_API
page-type: web-api-overview
browser-compat: html.elements.canvas.content
---

{{DefaultAPISidebar("HTML-in-Canvas API")}}{{securecontext_header}}

The **HTML-in-Canvas API** allows you to draw DOM subtrees directly into a 2D or 3D canvas context. This enables taking advantage of the high-performance, graphically rich nature of canvas, while the content's DOM representation is retained in the background, meaning that it remains interactive, accessible, and integrated with key browser features such as autocomplete, text selection, find-in-page, and keyboard navigation.

## Concepts and usage

Drawing UI features inside a {{htmlelement("canvas")}} element is a common path for developers that want to create graphically rich websites that offer different experiences than might be possible using DOM elements. However, this comes with its own set of problems. Traditionally, anything drawn into a canvas context is just a set of pixels, and therefore isn't accessible, and doesn't benefit from the same level of interactivity or browser integration as the DOM.

HTML-in-Canvas provides a solution, allowing DOM subtrees to be drawn into a canvas context. The content's state is retained in the background, meaning that it remains accessible, while its visual rendering can be manipulated using your chosen canvas API ([2D Canvas API](/en-US/docs/Web/API/Canvas_API), [WebGL](/en-US/docs/Web/API/WebGL_API), or [WebGPU](/en-US/docs/Web/API/WebGPU_API)) in whatever way you like.

To prepare DOM content to be rendered in a canvas, you first need to place it between your `<canvas>` tags. You then opt your `<canvas>` into rendering its descendants rather than treating them as fallback content by setting its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute to `drawable`. Finally, each DOM subtree that you want to render on the canvas independently is given a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute.

```html
<canvas width="640" height="480" content="drawable">
  <div id="subtree1" drawable>...</div>
  <div id="subtree2" drawable>...</div>
</canvas>
```

Each context type comes with a feature to draw `drawable` DOM trees onto the context. For example, the {{domxref("CanvasRenderingContext2D.drawElementImage()")}} method takes a DOM reference and various other arguments to declare where and how it should be drawn. The simplest version takes `x` and `y` coordinates that define where the top-left corner of the element should be placed:

```js
const canvas = document.querySelector("canvas");
const div1 = document.querySelector("#subtree1");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
// ...
ctx.drawElementImage(div1, 100, 100);
```

In 3D contexts, the elements are uploaded/drawn into textures to be used inside fragment shaders: {{domxref("WebGLRenderingContext.texElementSubImage2D()")}} in the case of WebGL, and {{domxref("GPUQueue.drawElementImageToTexture()")}} in the case of WebGPU.

Other features include:

- The {{domxref("GlobalEventHandlers.paint_event", "paint")}} event, which fires on the `<canvas>` whenever `drawable` descendants are repainted, enabling you to only repaint the ones that have changed.
- The {{domxref("HTMLCanvasElement.requestPaint()")}} method, which schedules a single `paint` event even if no repaints occurred, useful for example if you want to move elements around the canvas.
- The {{domxref("HTMLCanvasElement.updateElementGeometry()")}} method, which updates the size, shape, and position of a rendered element's underlying DOM presence, for example so you can still click a rendered {{htmlelement("button")}} after the canvas rendering has moved.

For more information, read our guides, starting with [Using the HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API/Using).

## Interfaces

- {{domxref("CanvasPaintEvent")}}
  - : Event object for the {{domxref("GlobalEventHandlers.paint_event", "paint")}} event, which fires when `drawable` elements have been repainted.
- {{domxref("ElementGeometryUpdateEvent")}}
  - : Event object for the {{domxref("GlobalEventHandlers.elementgeometryupdate_event", "elementgeometryupdate")}} event, which fires when `drawable` element geometry has been updated via an {{domxref("OffscreenCanvas")}}.
- {{domxref("ElementImage")}}
  - : Represents a precaptured snapshot of a `drawable` element (captured using {{domxref("HTMLCanvasElement.captureElementImage()")}}), which can be rendered later on.

## Extensions to other interfaces

### `HTMLCanvasElement`

- {{domxref("HTMLCanvasElement.captureElementImage()")}}
  - : Captures a snapshot of a `drawable` element, which can be rendered later on.
- {{domxref("HTMLCanvasElement.updateElementGeometry()")}}
  - : Supplies a {{domxref("DOMMatrix")}} that updates the size, shape, and position of a `drawable` element's underlying DOM presence so that it can be kept in sync with the canvas rendering as it updates for hit testing purposes.
- {{domxref("HTMLCanvasElement.clearElementGeometry()")}}
  - : Clears any previous `DOMMatrix` applied to a `drawable` element's underlying DOM presence, returning it to its original size, shape, and position.
- {{domxref("HTMLCanvasElement.getElementImageDefaultSize()")}}
  - : Returns an object containing a `drawable` element's original size as it would be rendered in the DOM.
- {{domxref("HTMLCanvasElement.getElementTransform()")}}
  - : Returns the `DOMMatrix` representing the transform currently applied to a `drawable` element's underlying DOM presence.
- {{domxref("HTMLCanvasElement.requestPaint()")}}
  - : schedules a single {{domxref("GlobalEventHandlers.paint_event", "paint")}} event even if no repaints occurred.

### `OffscreenCanvas`

- {{domxref("OffscreenCanvas.updateElementGeometry()")}}
  - : Supplies a {{domxref("DOMMatrix")}} that updates the size, shape, and position of a `drawable` element's underlying DOM presence, once it has been transferred to an offscreen canvas.
- {{domxref("OffscreenCanvas.clearElementGeometry()")}}
  - : Clears any previous `DOMMatrix` applied to a `drawable` element's underlying DOM presence, once it has been transferred to an offscreen canvas.
- {{domxref("OffscreenCanvas.getElementImageDefaultSize()")}}
  - : Returns an object containing a `drawable` element's original size as it would be rendered in the DOM, once it has been transferred to an offscreen canvas.

### 2D canvas context

- {{domxref("CanvasRenderingContext2D.drawElementImage()")}}
  - : Draws the current state of a `drawable` element (or an {{domxref("ElementImage")}}) to a 2D canvas content.
- {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage()")}}
  - : Draws the current state of a `drawable` element (or an {{domxref("ElementImage")}}) to an offscreen 2D canvas content.

### WebGL context

- {{domxref("WebGLRenderingContext.texElementSubImage2D()")}}
  - : Uploads the current state of a `drawable` element (or an {{domxref("ElementImage")}}) into a texture that can be used in a WebGL canvas content.

### WebGPU context

- {{domxref("GPUQueue.drawElementImageToTexture()")}}
  - : Draws the current state of a `drawable` element (or an {{domxref("ElementImage")}}) into a texture that can be used in a WebGPU canvas content.

### Events

- {{domxref("GlobalEventHandlers.paint_event", "paint")}}
  - : Fired when `drawable` elements have been repainted.
- {{domxref("GlobalEventHandlers.elementgeometryupdate_event", "elementgeometryupdate")}}
  - : Fired when `drawable` element geometry has been updated via an {{domxref("OffscreenCanvas")}}.

## HTML additions

- `<canvas>` [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute
  - : Enables opting a `<canvas>` element into rendering its descendants rather than treating them as fallback content.
- Global [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute
  - : Marks an element as a **paint root**, meaning that it (along with its descendants) can be rendered independently on a parent `<canvas content="drawable">` element.

## Examples

- [MDN HTML-in-canvas examples](https://mdn.github.io/dom-examples/html-in-canvas/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Canvas API](/en-US/docs/Web/API/Canvas_API)
- [WebGL API](/en-US/docs/Web/API/WebGL_API)
- [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [HTML-in-Canvas](https://developer.chrome.com/docs/web-platform/html-in-canvas) on developer.chrome.com (2026)
