---
title: "PerformanceResourceTiming: responseEnd property"
short-title: responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.responseEnd
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`responseEnd`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.

Unlike many other `PerformanceResourceTiming` properties, the `responseEnd` property is available for cross-origin requests without the need of the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header.

## Value

A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the last
byte of the resource or immediately before the transport connection is closed, whichever
comes first.

## Examples

### Measuring time to fetch (without redirects)

The `responseEnd` and {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}} properties can be used to measure the overall time it took to fetch the final resource (without redirects). If you want to include redirects, the overall time to fetch is provided in the {{domxref("PerformanceEntry.duration", "duration")}} property.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const timeToFetch = entry.responseEnd - entry.fetchStart;
    if (timeToFetch > 0) {
      console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const timeToFetch = entry.responseEnd - entry.fetchStart;
  if (timeToFetch > 0) {
    console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
