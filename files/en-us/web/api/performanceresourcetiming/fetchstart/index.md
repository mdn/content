---
title: "PerformanceResourceTiming: fetchStart property"
short-title: fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.fetchStart
---

{{APIRef("Performance API")}}

The **`fetchStart`** read-only property represents a {{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the browser starts to fetch the resource.

If there are HTTP redirects, the property returns the time immediately before the user agent starts to fetch the final resource in the redirection.

Unlike many other `PerformanceResourceTiming` properties, the `fetchStart` property is available for cross-origin requests without the need of the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header.

## Value

A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to fetch the
resource.

## Examples

### Measuring time to fetch (without redirects)

The `fetchStart` and {{domxref("PerformanceResourceTiming.responseEnd", "responseEnd")}} properties can be used to measure the overall time it took to fetch the final resource (without redirects). If you want to include redirects, the overall time to fetch is provided in the {{domxref("PerformanceEntry.duration", "duration")}} property.

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
