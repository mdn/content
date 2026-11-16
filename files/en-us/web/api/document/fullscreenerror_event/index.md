---
title: "Document: fullscreenerror event"
short-title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
page-type: web-api-event
browser-compat: api.Document.fullscreenerror_event
---

{{APIRef("Fullscreen API")}}

The **`fullscreenerror`** event is fired when the browser cannot switch to fullscreen mode.

As with the [`fullscreenchange` event](/en-US/docs/Web/API/Document/fullscreenchange_event), two `fullscreenerror` events are fired; the first is sent to the {{domxref("Element")}} which failed to change modes, and the second is sent to the {{domxref("Document")}} which owns that element.

For some reasons that switching into fullscreen mode might fail, see [the guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide).

This event is not cancelable.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("fullscreenerror", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onfullscreenerror = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const requestor = document.querySelector("div");

function handleError(event) {
  console.error("an error occurred changing into fullscreen");
  console.log(event);
}

document.addEventListener("fullscreenerror", handleError);
// Or (but note that this replaces other event listeners
// added using onfullscreenerror, if any)
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}
- {{domxref("Element")}}: {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} event
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
