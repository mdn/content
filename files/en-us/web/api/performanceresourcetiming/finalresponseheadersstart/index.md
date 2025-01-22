---
title: "PerformanceResourceTiming: finalResponseHeadersStart property"
short-title: finalResponseHeadersStart
slug: Web/API/PerformanceResourceTiming/finalResponseHeadersStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceResourceTiming.finalResponseHeadersStart
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`finalResponseHeadersStart`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser receives the first byte of the final document response (for example, 200 OK) from the server.

This differs from **`{{domxref("PerformanceResourceTiming.requestStart", "requestStart")}}`** (which may also be represented as **`{{domxref("PerformanceResourceTiming.firstInterimResponseStart", "firstInterimResponseStart")}}`**), as this starts from the first bytes of any response including interim responses (for example, 103 Early Hints) with the final response coming potentially much later.

When there are no interim responses, `requestStart` is the same as `finalResponseHeadersStart` and `firstInterimResponseStart` is 0.

There is no _end_ property for `finalResponseHeadersStart`.

## Value

The `finalResponseHeadersStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the first bytes of the final response from the server.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring request time

The `finalResponseHeadersStart` and {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} properties can be used to measure how long it takes for the browser to start receive the final response after the sending the request.

```js
const request = entry.finalResponseHeadersStart - entry.requestStart;
```

The following example uses a {{domxref("PerformanceObserver")}} to notify of new `resource` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used for accessing entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.finalResponseHeadersStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: final response time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

The following example uses {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call the method.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.finalResponseHeadersStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: final response time: ${request}ms`);
  }
});
```

The following example shows how to measure the time between the first and final response headers.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const diff = entry.finalResponseHeadersStart - entry.responseStart;
    if ((entry.finalResponseHeadersStart > 0) & (diff > 0)) {
      console.log(
        `${entry.name}: time between first and final response start: ${diff}ms`,
      );
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

### Cross-origin timing information

If the value of the `finalResponseHeadersStart` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
- {{domxref("PerformanceResourceTiming.firstInterimResponseStart", "firstInterimResponseStart")}}
