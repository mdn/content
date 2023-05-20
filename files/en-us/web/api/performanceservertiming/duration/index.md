---
title: "PerformanceServerTiming: duration property"
short-title: duration
slug: Web/API/PerformanceServerTiming/duration
page-type: web-api-instance-property
browser-compat: api.PerformanceServerTiming.duration
---

{{APIRef("Performance API")}}

The **`duration`** read-only property returns a double that contains the server-specified metric duration, or the value `0.0`.

## Value

A number.

## Examples

### Logging server timing entries

Server timing metrics require the server to send the {{HTTPHeader("Server-Timing")}} header. For example:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

The `serverTiming` entries can live on `navigation` and `resource` entries.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` and `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(
        `${serverEntry.name} (${serverEntry.description}) duration: ${serverEntry.duration}`
      );
      // Logs "cache (Cache Read) duration: 23.2"
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true })
);
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` and `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType
  )) {
    if (serverTiming) {
      for (const { name, description, duration } of serverTiming) {
        console.log(`${name} (${description}) duration: ${duration}`);
        // Logs "cache (Cache Read) duration: 23.2"
      }
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Server-Timing")}}
