---
title: "PerformanceNavigationTiming: domContentLoadedEventStart property"
short-title: domContentLoadedEventStart
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventStart
page-type: web-api-instance-property
browser-compat: api.PerformanceNavigationTiming.domContentLoadedEventStart
---

{{APIRef("Performance API")}}

The **`domContentLoadedEventStart`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler starts.

Typically frameworks and libraries wait for the `DOMContentLoaded` event before starting to run their code. We can use the `domContentLoadedEventStart` and the [`domContentLoadedEventEnd`](/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) properties to calculate how long this takes to run.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler starts.

## Examples

### Measuring `DOMContentLoaded` event handler time

The `domContentLoadedEventStart` property can be used to measure how long it takes process the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const domContentLoadedTime =
      entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    console.log(
      `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` performance entries present in the browser's performance timeline at the time you call this method:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const domContentLoadedTime =
    entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
  console.log(
    `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [DOMContentLoaded](/en-US/docs/Web/API/Document/DOMContentLoaded_event)
