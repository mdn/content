---
title: "PerformanceResourceTiming: serverTiming property"
short-title: serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.serverTiming
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`serverTiming`** read-only property returns an array of {{domxref("PerformanceServerTiming")}} entries containing server timing metrics.

Server timing metrics require the server to send the {{HTTPHeader("Server-Timing")}} header. For example:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

The `serverTiming` entries can live on `navigation` and `resource` entries.

## Value

An array of {{domxref("PerformanceServerTiming")}} entries.

## Examples

### Logging server timing entries

You can use a {{domxref("PerformanceObserver")}} to watch for {{domxref("PerformanceServerTiming")}} entries. Each server entry's duration is logged to the console.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(`${serverEntry.name} duration: ${serverEntry.duration}`);
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, duration } of serverTiming) {
        console.log(`${url}: ${name} duration: ${duration}`);
      }
    }
  }
}
```

### Cross-origin server timing information

Access to server timing information is restricted to the same origin. To expose cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see server timing information, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Server-Timing")}}
