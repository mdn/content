---
title: "PointerEvent: getPredictedEvents() method"
short-title: getPredictedEvents()
slug: Web/API/PointerEvent/getPredictedEvents
page-type: web-api-instance-method
browser-compat: api.PointerEvent.getPredictedEvents
---

{{APIRef("Pointer Events")}}

The **`getPredictedEvents()`** method of the {{domxref("PointerEvent")}} interface returns a sequence of `PointerEvent` instances that are estimated future pointer positions.
How the predicted positions are calculated depends on the user agent, but they are based on past points, current velocity, and trajectory.

Applications can use the predicted events to "draw ahead" to a predicted position which may reduce perceived latency depending on the application's interpretation of the predicted events and the use case.

For an illustration of predicted events, see [Figure 8 in the specification](https://w3c.github.io/pointerevents/#figure_predicted).

## Syntax

```js-nolint
getPredictedEvents()
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

  const predictedEvents = e.getPredictedEvents();
  for (let predictedEvent of predictedEvents) {
    // give it an offset so we can see the difference and color it red
    drawCircle(predictedEvent.clientX + 20, predictedEvent.clientY + 20, "red");
  }
});
```

### Result

{{EmbedLiveSample("Example", "", "320")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
