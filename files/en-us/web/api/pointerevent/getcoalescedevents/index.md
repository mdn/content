---
title: "PointerEvent: getCoalescedEvents() method"
short-title: getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
page-type: web-api-instance-method
browser-compat: api.PointerEvent.getCoalescedEvents
---

{{APIRef("Pointer Events")}}

The **`getCoalescedEvents()`** method of the {{domxref("PointerEvent")}} interface returns a sequence of `PointerEvent` instances that were coalesced (merged) into a single {{domxref('Element/pointermove_event', 'pointermove')}} or {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}} event.
Instead of a stream of many {{domxref('Element/pointermove_event', 'pointermove')}} events, user agents coalesce multiple updates into a single event.
This helps with performance as the user agent has less event handling to perform, but there is a reduction in the granularity and accuracy when tracking, especially with fast and large movements.

The **`getCoalescedEvents()`** method lets applications access all un-coalesced position changes for precise handling of pointer movement data where necessary.
Un-coalesced position changes are desirable in drawing applications, for instance, where having access to all events helps to build smoother curves that better match the movement of a pointer.

For an illustration of coalesced events, see [Figure 7 in the specification](https://w3c.github.io/pointerevents/#figure_coalesced).

## Syntax

```js-nolint
getCoalescedEvents()
```

### Parameters

None.

### Return value

A sequence of {{domxref('PointerEvent')}} instances.

## Example

### HTML

```html
<canvas id="target" width="600" height="300"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("target");
const ctx = canvas.getContext("2d");

const pointerEvents = [];

function drawCircle(x, y, color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the last 20 events
  if (pointerEvents.length > 20) {
    pointerEvents.shift();
  }
  pointerEvents.push({ x, y, color });

  for (const pointerEvent of pointerEvents) {
    ctx.beginPath();
    ctx.arc(pointerEvent.x, pointerEvent.y, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = pointerEvent.color;
    ctx.stroke();
  }
}

canvas.addEventListener("pointermove", (e) => {
  // draw a circle for the current event
  drawCircle(e.clientX, e.clientY, "black");

  const coalescedEvents = e.getCoalescedEvents();
  for (let coalescedEvent of coalescedEvents) {
    // give it an offset so we can see the difference and color it red
    drawCircle(coalescedEvent.clientX + 20, coalescedEvent.clientY + 20, "red");
  }
});
```

### Result

{{EmbedLiveSample("Example", "", "320")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
