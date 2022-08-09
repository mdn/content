---
title: TouchEvent.touches
slug: Web/API/TouchEvent/touches
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - DOM Reference
  - Mobile
  - Property
  - Read-only
  - Reference
  - TouchEvent
  - touch
browser-compat: api.TouchEvent.touches
---
{{ APIRef("Touch Events") }}

**`touches`** is a read-only {{ domxref("TouchList") }} listing
all the {{ domxref("Touch") }} objects for touch points that are currently in contact
with the touch surface, regardless of whether or not they've changed or what their
target element was at {{domxref("Element/touchstart_event", "touchstart")}} time.

You can think of it as how many separate fingers are able to be identified as touching
the screen.

## Value

A {{ domxref("TouchList") }} listing all the {{ domxref("Touch") }} objects for touch points that are still in contact with the touch surface, regardless of whether or not they've changed or what their target element was at `touchstart`
    time.

## Examples

This example illustrates the {{domxref("TouchEvent")}} object's
{{domxref("TouchEvent.touches")}} property. The {{domxref("TouchEvent.touches")}}
property is a {{domxref("TouchList")}} object and containing a list of
{{domxref("Touch")}} objects for every point of contact currently touching the surface.

In following code snippet, the {{domxref("Element/touchstart_event", "touchstart")}} event handler checks the length
of the {{domxref("TouchEvent.touches")}} list to determine the number of touch points
that were activated and then invokes different handlers depending on the number of touch
points.

```js
someElement.addEventListener('touchstart', (e) => {
   // Invoke the appropriate handler depending on the
   // number of touch points.
   switch (e.touches.length) {
     case 1: handle_one_touch(e); break;
     case 2: handle_two_touches(e); break;
     case 3: handle_three_touches(e); break;
     default: console.log("Not supported"); break;
   }
 }, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
