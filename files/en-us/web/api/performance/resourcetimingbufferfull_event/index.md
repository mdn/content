---
title: "Performance: resourcetimingbufferfull event"
short-title: resourcetimingbufferfull
slug: Web/API/Performance/resourcetimingbufferfull_event
page-type: web-api-event
browser-compat: api.Performance.resourcetimingbufferfull_event
---

{{APIRef("Performance API")}}

The `resourcetimingbufferfull` event is fired when the browser's [resource timing buffer](/en-US/docs/Web/API/Performance/setResourceTimingBufferSize) is full.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("resourcetimingbufferfull", (event) => {});

onresourcetimingbufferfull = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Increasing size when buffer is full

The following example listens for the `resourcetimingbufferfull` event and increases the buffer size using the {{domxref("Performance.setResourceTimingBufferSize", "setResourceTimingBufferSize()")}} method.

```js
function increaseFilledBufferSize(event) {
  console.log(
    "WARNING: Resource Timing Buffer is FULL! Increasing buffer size to 500.",
  );
  performance.setResourceTimingBufferSize(500);
}

performance.addEventListener(
  "resourcetimingbufferfull",
  increaseFilledBufferSize,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}
