---
title: ContentVisibilityAutoStateChangedEvent.skipped
slug: Web/API/ContentVisibilityAutoStateChangedEvent/skipped
page-type: web-api-instance-property
tags:
  - API
  - ContentVisibilityAutoStateChangedEvent
  - CSS
  - CSS Containment
  - Experimental
  - Layout
  - Paint
  - Property
  - Reference
  - skipped
  - Style
  - Visibility
  - Web
browser-compat: api.ContentVisibilityAutoStateChangedEvent.skipped
---

{{ APIRef }}{{seecompattable}}

The `skipped` read-only property of the {{ domxref("ContentVisibilityAutoStateChangedEvent") }} interface
returns `true` if the user agent is skipping the element's rendering, or `false` otherwise.

## Value

A boolean—returns `true` if the user agent is skipping the element's rendering, or `false` otherwise.

## Examples

```js
const canvasElem = document.querySelector('canvas');

function init() {
  canvasElem.addEventListener('contentvisibilityautostatechanged', stateChanged);
  canvasElem.style.contentVisibility = 'auto';
}

function stateChanged(event) {
  if (event.skipped) {
    stopCanvasUpdates(canvasElem);
  } else {
    startCanvasUpdates(canvasElem);
  }
}

// Call this when the canvas updates need to start.
function startCanvasUpdates(canvas) { ... }

// Call this when the canvas updates need to stop.
function stopCanvasUpdates(canvas) { ... }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("contentvisibilityautostatechanged_event", "contentvisibilityautostatechanged")}} event
- [CSS Containment](/en-US/docs/Web/CSS/CSS_Containment)
- The {{cssxref("content-visibility")}} property
- The {{cssxref("contain")}} property
