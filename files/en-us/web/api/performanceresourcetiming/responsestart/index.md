---
title: "PerformanceResourceTiming: responseStart property"
short-title: responseStart
slug: Web/API/PerformanceResourceTiming/responseStart
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.responseStart
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`responseStart`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser receives the first byte of the response from the server, cache, or local resource.

## Value

The `responseStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the first byte of the response from the server.
- `0` if the resource was instantaneously retrieved from a cache.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring request time

The `responseStart` and {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} properties can be used to measure how long the request takes.

```js
const request = entry.responseStart - entry.requestStart;
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Request time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Cross-origin timing information

If the value of the `responseStart` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
