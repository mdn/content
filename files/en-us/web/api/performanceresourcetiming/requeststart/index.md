---
title: "PerformanceResourceTiming: requestStart property"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.requestStart
---

{{APIRef("Performance API")}}

The **`requestStart`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} of the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.

There is no _end_ property for `requestStart`. To measure the request time, calculate {{domxref("PerformanceResourceTiming.responseStart", "responseStart")}} - `requestStart` (see the example below).

## Value

The `requestStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the browser starts requesting the resource from the server.
- `0` if the resource was instantaneously retrieved from a cache.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring request time

The `requestStart` and {{domxref("PerformanceResourceTiming.responseStart", "responseStart")}} properties can be used to measure how long the request takes.

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

If the value of the `requestStart` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
