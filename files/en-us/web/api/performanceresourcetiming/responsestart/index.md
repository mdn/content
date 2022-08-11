---
title: PerformanceResourceTiming.responseStart
slug: Web/API/PerformanceResourceTiming/responseStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.responseStart
---
{{APIRef("Resource Timing API")}}

The **`responseStart`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser receives
the first byte of the response from the server, cache, or local resource.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the first
byte of the response from the server.

## Examples

In the following example, the value of the `*Start` and `*End`
properties of all "`resource`"
{{domxref("PerformanceEntry.entryType","type")}} events are logged.

```js
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  const p = performance.getEntriesByType("resource");
  p.forEach((entry) => {
    print_start_and_end_properties(entry);
  });
}
function print_start_and_end_properties(perfEntry) {
  // Print timestamps of the PerformanceEntry *start and *end properties
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart"];
  for (const property of properties) {
    // Check each property
    const value = perfEntry[property];
    console.log(`… ${property} = ${property in PerfEntry ? value : "NOT supported"}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
