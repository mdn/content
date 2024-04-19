---
title: "OffscreenCanvas: contextrestored event"
short-title: contextrestored
slug: Web/API/OffscreenCanvas/contextrestored_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.OffscreenCanvas.contextrestored_event
---

{{APIRef}}{{SeeCompatTable}}

The **`contextrestored`** event of the [Canvas API](/en-US/docs/Web/API/Canvas_API) is fired if the user agent restores the backing storage for a [`OffscreenCanvasRenderingContext2D`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D).

You can redraw, re-retrieve resources, and reinitialize the state of your context after receiving this event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("contextrestored", (event) => {});

oncontextrestored = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

The code fragment below detects the context restored event.

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

canvas.addEventListener(
  "contextrestored",
  (e) => {
    console.log(e);
    // call to redrawCanvas() or similar
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`OffscreenCanvas: contextlost` event](/en-US/docs/Web/API/OffScreenCanvas/contextlost_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextrestored` event](/en-US/docs/Web/API/HTMLCanvasElement/contextrestored_event)
