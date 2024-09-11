---
title: "HTMLCanvasElement: contextlost event"
short-title: contextlost
slug: Web/API/HTMLCanvasElement/contextlost_event
page-type: web-api-event
browser-compat: api.HTMLCanvasElement.contextlost_event
---

{{APIRef}}

The **`contextlost`** event of the [Canvas API](/en-US/docs/Web/API/Canvas_API) is fired if the user agent detects that the backing storage associated with a [`CanvasRenderingContext2D`](/en-US/docs/Web/API/CanvasRenderingContext2D) context is lost.
Contexts can be lost for several reasons like driver crashes or the application runs out of memory, etc.

By default the user agent will attempt to restore the context and then fire the [`contextrestored` event](/en-US/docs/Web/API/HTMLCanvasElement/contextrestored_event).
User code can prevent the context from being restored by calling [`Event.preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) during event handling.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("contextlost", (event) => {});

oncontextlost = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

The code fragment below detects the `contextlost` event.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

To prevent the context from being restored the code might instead look like this:

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`HTMLCanvasElement: contextrestored` event](/en-US/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`CanvasRenderingContext2D.isContextLost()`](/en-US/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- [`OffscreenCanvas: contextlost` event](/en-US/docs/Web/API/OffscreenCanvas/contextlost_event)
