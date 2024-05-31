---
title: "OffscreenCanvas: contextlost event"
short-title: contextlost
slug: Web/API/OffscreenCanvas/contextlost_event
page-type: web-api-event
browser-compat: api.OffscreenCanvas.contextlost_event
---

{{APIRef("Canvas API")}}

The **`contextlost`** event of the {{domxref("OffscreenCanvas")}} interface is fired if the browser detects that the [`OffscreenCanvasRenderingContext2D`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D) context is lost.
Contexts can be lost for several reasons, such as an associated GPU driver crashes, or the application runs out of memory, and so on.

By default the user agent will attempt to restore the context and then fire the [`contextrestored` event](/en-US/docs/Web/API/OffscreenCanvas/contextrestored_event).
User code can prevent the context from being restored by calling [`Event.preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) during event handling.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("contextlost", (event) => {});

oncontextlost = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The code fragment below detects the `contextlost` event.

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

// Do drawing etc

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

To prevent the context from being restored the event handler code might instead look like this:

```js
canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`OffScreenCanvas: contextrestored` event](/en-US/docs/Web/API/OffscreenCanvas/contextrestored_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextlost` event](/en-US/docs/Web/API/HTMLCanvasElement/contextlost_event)
