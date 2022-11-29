---
title: PerformanceServerTiming.description
slug: Web/API/PerformanceServerTiming/description
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ServerTiming
browser-compat: api.PerformanceServerTiming.description
---

{{APIRef("Performance API")}}

The **`description`** read-only property returns a
string value of the server-specified metric description, or an empty
string.

## Value

A string.

## Examples

### Logging server timing entries

Given a {{HTTPHeader("Server-Timing")}} header with a description `"Cache Read"`:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

You can use a {{domxref("PerformanceObserver")}} to watch for {{domxref("PerformanceServerTiming")}} entries as they are recorded.

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

observer.observe({ entryTypes: ["resource", "navigation"] });
```

Alternatively, you can use {{domxref("Performance.getEntriesByType()")}} to get performance entries present in the browser's performance timeline at the time you call this method:

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
