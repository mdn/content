---
title: "PerformanceResourceTiming: connectEnd property"
short-title: connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.connectEnd
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`connectEnd`** read-only property returns the {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and [SOCKS](https://en.wikipedia.org/wiki/SOCKS) authentication.

## Value

The `connectEnd` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} representing the time after a connection is established.
- `0` if the resource was instantaneously retrieved from a cache.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring TCP handshake time

The `connectEnd` and {{domxref("PerformanceResourceTiming.connectStart", "connectStart")}} properties can be used to measure how long it takes for the TCP handshake to happen.

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

If the value of the `connectEnd` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
