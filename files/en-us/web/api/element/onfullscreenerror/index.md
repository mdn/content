---
title: Element.onfullscreenerror
slug: Web/API/Element/onfullscreenerror
tags:
  - API
  - Element
  - Event Handler
  - Full
  - Full-screen API
  - Property
  - Reference
  - fullscreen
  - onfullscreenerror
  - screen
browser-compat: api.Element.onfullscreenerror
---
{{ApiRef("Fullscreen API")}}

The {{domxref("Element")}} interface's
**`onfullscreenerror`** property is an event handler for the
{{domxref("Element/fullscreenerror_event", "fullscreenerror")}} event which is sent to
the element when an error occurs while attempting to transition into or out of
full-screen mode.

## Syntax

```js
targetElement.onfullscreenerror = fullscreenErrorHandler;
```

### Value

An error handler for the {{domxref("Element/fullscreenerror_event",
  "fullscreenerror")}} event.

## Example

This example attempts to switch into full-screen mode from outside a handler for a
user-initiated event (such as a {{domxref("Element/click_event", "click")}} or
{{domxref("Element/keypress_event", "keypress")}} event). Since full-screen mode changes
are only permitted in response to a user input, this causes an error to occur, which
triggers the delivery of the {{domxref("Element/fullscreenerror_event",
  "fullscreenerror")}} event to the error handler,

```js
let elem = document.querySelector("video")}}

elem.onfullscreenerror = function ( event ) {
  displayWarning("Unable to switch into full-screen mode.");
};

//....

elem.requestFullscreen();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
- {{domxref("Element.onfullscreenerror")}}
- {{domxref("Document.onfullscreenerror")}}
