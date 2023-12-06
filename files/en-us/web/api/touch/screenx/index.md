---
title: "Touch: screenX property"
short-title: screenX
slug: Web/API/Touch/screenX
page-type: web-api-instance-property
browser-compat: api.Touch.screenX
---

{{ APIRef("Touch Events") }}

## Summary

Returns the X coordinate of the touch point relative to the screen, not including any scroll offset.

## Value

A number.

## Examples

This example illustrates how to access the {{domxref("Touch")}} object's {{domxref("Touch.screenX")}} and {{domxref("Touch.screenY")}} properties. The {{domxref("Touch.screenX")}} property is the horizontal (x) coordinate of a touch point relative to the screen in CSS pixels. The {{domxref("Touch.screenY")}} property is the vertical coordinate of a touch point relative to the screen in CSS pixels.

In following simple code snippet, we assume the user initiates multiple touch contacts on an element with an id of `source` and then releases contacts with the surface. When the {{domxref("Element/touchstart_event", "touchstart")}} event handler is invoked, each touch point's {{domxref("Touch.screenX")}} and {{domxref("Touch.screenY")}} coordinates are accessed.

```js
// Register a touchstart listeners for the 'source' element
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // Iterate through the touch points and log each screenX/Y coordinate.
    // The unit of each coordinate is CSS pixels.
    for (let i = 0; i < e.touches.length; i++) {
      console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
      console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
    }
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
