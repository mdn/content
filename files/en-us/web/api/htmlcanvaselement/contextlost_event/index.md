---
title: 'HTMLCanvasElement: contextlost event'
slug: Web/API/HTMLCanvasElement/contextlost_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Canvas
browser-compat: api.HTMLCanvasElement.contextlost_event
---
{{APIRef}}

The **`contextlost`** event of the [Canvas API](/en-US/docs/Web/API/Canvas_API) is fired if the user agent detects that the backing storage associated with a [`CanvasRenderingContext2D`](/en-US/docs/Web/API/CanvasRenderingContext2D) or [`OffscreenCanvasRenderingContext2D`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D) context is lost.

Contexts can be lost for several reasons like driver crashes or the application runs out of memory, etc.

The `cancelable` attribute of this event is `true`. You can cancel this event in order to cancel the future restoration of the context.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('contextlost', (event) => {});

oncontextlost = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

The code fragment below detects the context lost event.

```js
const canvas = document.getElementById('canvas');

canvas.addEventListener('contextlost', (event) => {
  console.log(event);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`HTMLCanvasElement: contextrestored` event](/en-US/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`CanvasRenderingContext2D.isContextLost()`](/en-US/docs/Web/API/CanvasRenderingContext2D/isContextLost)
