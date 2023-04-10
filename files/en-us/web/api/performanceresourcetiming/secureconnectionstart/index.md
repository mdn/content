---
title: "PerformanceResourceTiming: secureConnectionStart property"
short-title: secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.secureConnectionStart
---

{{APIRef("Performance API")}}

The **`secureConnectionStart`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.

## Value

The `secureConnectionStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} indicating the time immediately before the browser starts the handshake process to secure the current connection if the resource is fetched over a secure connection.
- `0` if no secure connection is used.
- `0` if the resource was instantaneously retrieved from a cache.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring TLS negotiation time

The `secureConnectionStart` and {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} properties can be used to measure how long it takes for the TLS negotiation to happen.

```js
const tls = entry.requestStart - entry.secureConnectionStart;
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tls = entry.requestStart - entry.secureConnectionStart;
    if (tls > 0) {
      console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tls = entry.requestStart - entry.secureConnectionStart;
  if (tls > 0) {
    console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
  }
});
```

### Cross-origin timing information

If the value of the `secureConnectionStart` property is `0`, the resource is either not using a secure connection or it is a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
