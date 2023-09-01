---
title: "PerformanceResourceTiming: workerStart property"
short-title: workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.workerStart
---

{{APIRef("Performance API")}}

The **`workerStart`** read-only property of the {{domxref("PerformanceResourceTiming")}} interface returns a
{{domxref("DOMHighResTimeStamp")}} immediately before dispatching the {{domxref("FetchEvent")}} if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running. If the resource is not intercepted by a Service Worker the property will always return 0.

## Value

The `workerStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}}.
- `0` if no service worker is used.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring ServiceWorker processing time

The `workerStart` and {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}} properties can be used to measure the processing time of a {{domxref("ServiceWorker")}}.

```js
const workerProcessingTime = entry.fetchStart - entry.workerStart;
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const workerProcessingTime = entry.fetchStart - entry.workerStart;
    if (workerProcessingTime > 0) {
      console.log(
        `${entry.name}: Worker processing time: ${workerProcessingTime}ms`,
      );
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const workerProcessingTime = entry.fetchStart - entry.workerStart;
  if (workerProcessingTime > 0) {
    console.log(
      `${entry.name}: Worker processing time: ${workerProcessingTime}ms`,
    );
  }
});
```

### Cross-origin timing information

If the value of the `workerStart` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see timing resources, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Timing-Allow-Origin")}}
