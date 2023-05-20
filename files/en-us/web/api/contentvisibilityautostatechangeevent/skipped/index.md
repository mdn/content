---
title: "ContentVisibilityAutoStateChangeEvent: skipped property"
short-title: skipped
slug: Web/API/ContentVisibilityAutoStateChangeEvent/skipped
page-type: web-api-instance-property
browser-compat: api.ContentVisibilityAutoStateChangeEvent.skipped
---

{{APIRef("CSS Containment")}}

The `skipped` read-only property of the {{ domxref("ContentVisibilityAutoStateChangeEvent") }} interface returns `true` if the user agent [skips the element's contents](/en-US/docs/Web/CSS/CSS_Containment#skips_its_contents), or `false` otherwise.

## Value

A boolean. Returns `true` if the user agent skips the element's contents, or `false` otherwise.

## Examples

```js
const canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("contentvisibilityautostatechange", stateChanged);
canvasElem.style.contentVisibility = "auto";

function stateChanged(event) {
  if (event.skipped) {
    stopCanvasUpdates(canvasElem);
  } else {
    startCanvasUpdates(canvasElem);
  }
}

// Call this when the canvas updates need to start.
function startCanvasUpdates(canvas) {
  // …
}

// Call this when the canvas updates need to stop.
function stopCanvasUpdates(canvas) {
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event
- [CSS Containment](/en-US/docs/Web/CSS/CSS_Containment)
- The {{cssxref("content-visibility")}} property
- The {{cssxref("contain")}} property
