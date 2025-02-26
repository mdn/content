---
title: "PerformanceResourceTiming: firstInterimResponseStart property"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceResourceTiming.firstInterimResponseStart
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`firstInterimResponseStart`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser receives the first byte of the interim 1xx response (for example, 100 Continue or 103 Early Hints) from the server.

There is no _end_ property for `firstInterimResponseStart`.

## Value

The `firstInterimResponseStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the first interim bytes of the response from the server.
- `0` if the resource sent no interim response.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

> [!NOTE]
> As Early Hints are typically only supported on the main navigation request, which is by definition same-origin, a `0` typically indicates Early Hints were **not** used.

When the `firstInterimResponseStart` is non-zero, that indicates it should be the same value as {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} for [supporting browsers](#browser_compatibility).

## Examples

### Measuring request time

The `firstInterimResponseStart` and `requestStart` properties can be used to measure how long it takes to the browser to receive an interim response after the sending the request.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

The following example uses a {{domxref("PerformanceObserver")}} to notify of new `resource` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used for accessing entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.firstInterimResponseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Interim response time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

The following example uses {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call the method.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.firstInterimResponseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Interim response time: ${request}ms`);
  }
});
```

### Cross-origin timing information

If the value of the `firstInterimResponseStart` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
- {{domxref("PerformanceResourceTiming.finalResponseHeadersStart", "finalResponseHeadersStart")}}
