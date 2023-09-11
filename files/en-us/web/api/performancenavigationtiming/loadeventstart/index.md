---
title: "PerformanceNavigationTiming: loadEventStart property"
short-title: loadEventStart
slug: Web/API/PerformanceNavigationTiming/loadEventStart
page-type: web-api-instance-property
browser-compat: api.PerformanceNavigationTiming.loadEventStart
---

{{APIRef("Performance API")}}

The **`loadEventStart`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`load`](/en-US/docs/Web/API/Window/load_event) event handler starts.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`load`](/en-US/docs/Web/API/Window/load_event) event handler starts.

## Examples

### Measuring `load` event handler time

The `loadEventStart` property can be used to measure how long it takes process the[`load`](/en-US/docs/Web/API/Window/load_event) event handler.

This is useful to measure the time of long running [`load`](/en-US/docs/Web/API/Window/load_event) event handlers.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const loadEventTime = entry.loadEventEnd - entry.loadEventStart;
    if (loadEventTime > 0) {
      console.log(`${entry.name}: load event handler time: ${loadEventTime}ms`);
    }
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` performance entries present in the browser's performance timeline at the time you call this method:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const loadEventTime = entry.loadEventEnd - entry.loadEventStart;
  if (loadEventTime > 0) {
    console.log(`${entry.name}:
      load event handler time: ${loadEventTime}ms`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`load`](/en-US/docs/Web/API/Window/load_event) event
