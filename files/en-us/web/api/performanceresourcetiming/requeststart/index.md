---
title: PerformanceResourceTiming.requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.requestStart
---

{{APIRef("Resource Timing API")}}

The **`requestStart`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} of the time immediately before the
browser starts requesting the resource from the server, cache, or local resource. If the
transport connection fails and the browser retires the request, the value returned will
be the start of the retry request.

There is no _end_ property for `requestStart`.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the
browser starts requesting the resource from the server

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
                "secureConnectionStart"];

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
