---
title: Element.onfullscreenchange
slug: Web/API/Element/onfullscreenchange
tags:
  - API
  - Element
  - Event Handler
  - Full
  - Full-screen
  - Fullscreen API
  - Property
  - Reference
  - fullscreen
  - onfullscreenchange
  - screen
browser-compat: api.Element.onfullscreenchange
---
{{ApiRef("Fullscreen API")}}

The {{domxref("Element")}} interface's
**`onfullscreenchange`** property is an event handler for the
{{event("fullscreenchange")}} event that is fired when the element has transitioned
into or out of full-screen mode.

## Syntax

```js
targetDocument.onfullscreenchange = fullscreenChangeHandler;
```

### Value

An event handler for the {{event("fullscreenchange")}} event, indicating that the
element has changed in or out of full-screen mode.

## Example

This example establishes a `fullscreenchange` event handler,
`handleFullscreenChange()`. This function determines which element it was
called on by checking the value of {{domxref("event.target")}}, then compares the
document's {{domxref("Document.fullscreenElement", "fullscreenElement")}} value to the
element to see if they're the same node.

This gives us a value, `isFullscreen`, which we pass into a function called
`adjustMyControls()`, which we imagine to be a function that makes
adjustments to the app's user interface to present itself optimally when it's in
full-screen mode versus being displayed in a window.

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  elem.onfullscreenchange = handleFullscreenChange;
  if (!document.fullscreenElement) {
    elem.requestFullscreen().then({}).catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

function handleFullscreenChange(event) {
  let elem = event.target;
  let isFullscreen = document.fullscreenElement === elem;

  adjustMyControls(isFullscreen);
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
- {{domxref("Element.onfullscreenerror")}}
- The {{domxref("Document")}} equivalent: {{domxref("Document.onfullscreenchange",
    "onfullscreenchange")}}.
