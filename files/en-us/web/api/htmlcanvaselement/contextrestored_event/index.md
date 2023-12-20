---
title: "HTMLCanvasElement: contextrestored event"
short-title: contextrestored
slug: Web/API/HTMLCanvasElement/contextrestored_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLCanvasElement.contextrestored_event
---

{{APIRef}}{{SeeCompatTable}}

The **`contextrestored`** event of the [Canvas API](/en-US/docs/Web/API/Canvas_API) is fired if the user agent restores the backing storage for a [`CanvasRenderingContext2D`](/en-US/docs/Web/API/CanvasRenderingContext2D).

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
const canvas = document.getElementById("canvas");

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

- [`HTMLCanvasElement: contextlost` event](/en-US/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`CanvasRenderingContext2D.isContextLost()`](/en-US/docs/Web/API/CanvasRenderingContext2D/isContextLost)
