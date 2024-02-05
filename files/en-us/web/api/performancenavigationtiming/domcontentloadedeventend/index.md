---
title: "PerformanceNavigationTiming: domContentLoadedEventEnd property"
short-title: domContentLoadedEventEnd
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd
page-type: web-api-instance-property
browser-compat: api.PerformanceNavigationTiming.domContentLoadedEventEnd
---

{{APIRef("Performance API")}}

The **`domContentLoadedEventEnd`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler completes.

Typically frameworks and libraries wait for the `DOMContentLoaded` event before starting to run their code. We can use the `domContentLoadedEventEnd` and the [`domContentLoadedEventStart`](/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) properties to calculate how long this takes to run.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler completes.

## Examples

### Measuring `DOMContentLoaded` event handler time

The `domContentLoadedEventEnd` property can be used to measure how long it takes process the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler.

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
