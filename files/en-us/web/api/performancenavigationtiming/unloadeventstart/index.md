---
title: "PerformanceNavigationTiming: unloadEventStart property"
short-title: unloadEventStart
slug: Web/API/PerformanceNavigationTiming/unloadEventStart
page-type: web-api-instance-property
browser-compat: api.PerformanceNavigationTiming.unloadEventStart
---

{{APIRef("Performance API")}}

The **`unloadEventStart`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`unload`](/en-US/docs/Web/API/Window/unload_event) event handler starts.

## Value

The `unloadEventStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`unload`](/en-US/docs/Web/API/Window/unload_event) event handler starts.
- `0` if there is no previous document.
- `0` if the previous page was on another origin.

## Examples

### Measuring `unload` event handler time

The `unloadEventStart` property can be used to measure how long it takes process the[`unload`](/en-US/docs/Web/API/Window/unload_event) event handler.

This is useful to measure the time of long running [`unload`](/en-US/docs/Web/API/Window/load_event) event handlers.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const unloadEventTime = entry.unloadEventEnd - entry.unloadEventStart;
    if (unloadEventTime > 0) {
      console.log(
        `${entry.name}: unload event handler time: ${unloadEventTime}ms`,
      );
    }
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` performance entries present in the browser's performance timeline at the time you call this method:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const loadEventTime = entry.unloadEventEnd - entry.unloadEventStart;
  if (unloadEventTime > 0) {
    console.log(`${entry.name}:
      load event handler time: ${unloadEventTime}ms`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`unload`](/en-US/docs/Web/API/Window/unload_event) event
