---
title: ContentVisibilityAutoStateChangedEvent
slug: Web/API/ContentVisibilityAutoStateChangedEvent
page-type: web-api-interface
tags:
  - Experimental
  - Interface
  - Reference
browser-compat: api.ContentVisibilityAutoStateChangedEvent
---

{{APIRef}}{{seecompattable}}

The **`ContentVisibilityAutoStateChangedEvent`** interface of the [CSS Containment Module Level 2](https://www.w3.org/TR/css-contain-2/#content-visibility-auto-state-changed) is the event object for the {{domxref("contentvisibilityautostatechanged_event", "contentvisibilityautostatechanged")}} event, which fires on any element with {{cssxref("content-visibility", "content-visibility: auto")}} set on it when its rendering requirements change; i.e. its content starts or stops [skipping its contents](https://www.w3.org/TR/css-contain-2/#skips-its-contents).

This occurs when:

- The element appears in, or disappears from, the viewport, or a user-agent-defined margin around the viewport (the spec recommends 50% of the viewport dimensions, to give the app time to prepare for when the element visibility changes).
- The element or its contents receive focus or stop being focused.
- The element or its contents are selected or stop being selected; for example, manually, by dragging over the text with mouse cursor, or by some other highlight operation as described in [Selecting highlighted contents](https://www.w3.org/TR/css-pseudo-4/#highlight-selectors).
- The element or its contents are placed in or removed from the top layer.

> **Note:** In real terms, "stops being rendered" means that the user agent skips an element's rendering (including layout and painting) until it is actually needed, making preceding page rendering much faster.

This provides a way for an app's code to start or stop rendering processes (e.g. drawing on a {{htmlelement("canvas")}}) when they are not needed, thereby conserving processing power. It should be noted that, even when hidden from view, element contents will remain semantically relevant (e.g. to assistive technology users), so this signal should not be used to skip significant semantic DOM updates.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ContentVisibilityAutoStateChangedEvent.ContentVisibilityAutoStateChangedEvent", "ContentVisibilityAutoStateChangedEvent()")}}
  - : Creates a new `ContentVisibilityAutoStateChangedEvent` object instance.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("ContentVisibilityAutoStateChangedEvent.skipped", "skipped")}} {{ReadOnlyInline}}
  - : Returns `true` if the user agent is skipping the element's rendering, or `false` otherwise.

## Examples

```js
const canvasElem = document.querySelector('canvas');

canvasElem.addEventListener('contentvisibilityautostatechanged', stateChanged);
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

- The {{domxref("contentvisibilityautostatechanged_event", "contentvisibilityautostatechanged")}} event
- [CSS Containment](/en-US/docs/Web/CSS/CSS_Containment)
- The {{cssxref("content-visibility")}} property
- The {{cssxref("contain")}} property
