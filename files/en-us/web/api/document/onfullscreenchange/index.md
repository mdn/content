---
title: Document.onfullscreenchange
slug: Web/API/Document/onfullscreenchange
tags:
  - API
  - Document
  - Event Handler
  - Fullscreen API
  - Property
  - Reference
  - fullscreen
  - onfullscreenchange
browser-compat: api.Document.onfullscreenchange
---
{{APIRef("Fullscreen API")}}

The {{domxref("Document")}} interface's
**`onfullscreenchange`** property is an event handler for the
{{event("fullscreenchange")}} event that is fired immediately before a document
transitions into or out of full-screen mode.

## Syntax

```js
targetDocument.onfullscreenchange = fullscreenChangeHandler;
```

### Value

An event handler which is invoked whenever the document receives a
{{event("fullscreenchange")}} event, indicating that the document is transitioning into
or out of full-screen mode.

## Usage notes

The `fullscreenchange` event does not directly specify whether the
transition is into or out of full-screen mode, so your event handler should look at the
value of {{domxref("Document.fullscreenElement")}}. If it's `null`, the event
indicates a transition _out_ of full-screen mode. Otherwise, the specified
element is about to take over the screen.

## Example

```js
document.onfullscreenchange = function ( event ) {
  console.log("FULL SCREEN CHANGE")
};
document.documentElement.onclick = function () {
  // requestFullscreen() must be in an event handler or it will fail
  document.documentElement.requestFullscreen();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{event("fullscreenchange")}}
- {{domxref("Document.onfullscreenerror")}}
