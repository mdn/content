---
title: PerformanceNavigationTiming.loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.loadEventEnd
---

{{APIRef("Performance API")}}

The **`loadEventEnd`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the current document's [`load`](/en-US/docs/Web/API/Window/load_event) event handler completes.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the current document's [`load`](/en-US/docs/Web/API/Window/load_event) event handler completes.

## Examples

### Measuring `load` event handler time

The following example measures how long it takes to process the `load` event handler.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  const loadEventTime = entry.loadEventEnd - entry.loadEventStart;
  if (loadEventTime > 0) {
    console.log(`${entry.name}:
      load event handler time: ${loadEventTime}ms`);
  }
});
```

This is especially useful to measure the time of long running [`load`](/en-US/docs/Web/API/Window/load_event) event handlers.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`load`](/en-US/docs/Web/API/Window/load_event) event
