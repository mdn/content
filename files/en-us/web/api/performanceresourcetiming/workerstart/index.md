---
title: PerformanceResourceTiming.workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
page-type: web-api-instance-property
tags:
  - API
  - PerformanceResourceTiming
  - Property
  - Reference
  - Web Performance
  - workerStart
browser-compat: api.PerformanceResourceTiming.workerStart
---

{{APIRef("Resource Timing API")}}

The **`workerStart`** read-only property of the
{{domxref("PerformanceResourceTiming")}} interface returns a
{{domxref("DOMHighResTimeStamp")}} immediately before dispatching the
{{domxref("FetchEvent")}} if a Service Worker thread is already running, or immediately
before starting the Service Worker thread if it is not already running. If the resource
is not intercepted by a Service Worker the property will always return 0.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Examples

In the following example, the value of the `*Start` and `*End`
properties of all "`resource`"
{{domxref("PerformanceEntry.entryType","type")}} events are logged.

```js
function printPerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  performance.getEntriesByType("resource")
    .forEach((entry) => {
      printStartAndEndProperties(entry);
    });
}

function printStartAndEndProperties(perfEntry) {
  // Print timestamps of the *start and *end properties
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart",
                "workerStart"];

  for (const property of properties) {
    // Log the property
    console.log(`… ${property} = ${perfEntry[property] ?? "NOT supported"}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
