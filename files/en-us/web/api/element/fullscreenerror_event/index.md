---
title: "Element: fullscreenerror event"
short-title: fullscreenerror
slug: Web/API/Element/fullscreenerror_event
page-type: web-api-event
browser-compat: api.Element.fullscreenerror_event
---

{{APIRef("Fullscreen API")}}

The **`fullscreenerror`** event is fired when the browser cannot switch to fullscreen mode.

As with the [`fullscreenchange` event](/en-US/docs/Web/API/Element/fullscreenchange_event), two `fullscreenerror` events are fired; the first is sent to the {{domxref("Element")}} which failed to change modes, and the second is sent to the {{domxref("Document")}} which owns that element.

For some reasons that switching into fullscreen mode might fail, see [the guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide).

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
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

requestor.addEventListener("fullscreenerror", handleError);
// or
requestor.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fullscreenchange`](/en-US/docs/Web/API/Element/fullscreenchange_event)
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
