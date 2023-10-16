---
title: "PerformanceResourceTiming: connectStart property"
short-title: connectStart
slug: Web/API/PerformanceResourceTiming/connectStart
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.connectStart
---

{{APIRef("Performance API")}}

The **`connectStart`** read-only property returns the {{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the user agent starts establishing the connection to the server to retrieve the resource.

## Value

The `connectStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to establish the connection to the server to retrieve the resource.
- `0` if the resource was instantaneously retrieved from a cache.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring TCP handshake time

The `connectStart` and {{domxref("PerformanceResourceTiming.connectEnd", "connectEnd")}} properties can be used to measure how long it takes for the TCP handshake to happen.

```js
const tcp = entry.connectEnd - entry.connectStart;
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tcp = entry.connectEnd - entry.connectStart;
    if (tcp > 0) {
      console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tcp = entry.connectEnd - entry.connectStart;
  if (tcp > 0) {
    console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
  }
});
```

### Cross-origin timing information

If the value of the `connectStart` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
