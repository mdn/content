---
title: Touch.clientY
slug: Web/API/Touch/clientY
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - touch
browser-compat: api.Touch.clientY
---
{{ APIRef("Touch Events") }}

The **`Touch.clientY`** read-only property returns the Y
coordinate of the touch point relative to the browser's viewport, not including any
scroll offset.

## Value

A `long` value representing the Y coordinate of the touch point relative to
the viewport, not including any scroll offset.

## Examples

This example illustrates using the {{domxref("Touch")}} object's
{{domxref("Touch.clientX")}} and {{domxref("Touch.clientY")}} properties. The
{{domxref("Touch.clientX")}} property is the horizontal coordinate of a touch point
relative to the browser's viewport excluding any scroll offset. The
{{domxref("Touch.clientY")}} property is the vertical coordinate of the touch point
relative to the browser's viewport excluding any scroll offset .

In this example, we assume the user initiates a touch on an element with an id of
`source`, moves within the element or out of the element and then releases
contact with the surface. When the {{domxref("Element/touchend_event", "touchend")}}
event handler is invoked, the changes in the {{domxref("Touch.clientX")}} and
{{domxref("Touch.clientY")}} coordinates, from the starting touch point to the ending
touch point, are calculated.

```js
// Register touchstart and touchend listeners for element 'source'
const src = document.getElementById("source");
let clientX;
let clientY;

src.addEventListener('touchstart', (e) => {
  // Cache the client X/Y coordinates
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;
}, false);

src.addEventListener('touchend', (e) => {
  let deltaX;
  let deltaY;

  // Compute the change in X and Y coordinates.
  // The first touch point in the changedTouches
  // list is the touch point that was just removed from the surface.
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;

  // Process the data…
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
