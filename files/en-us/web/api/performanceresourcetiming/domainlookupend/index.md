---
title: PerformanceResourceTiming.domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.domainLookupEnd
---

{{APIRef("Resource Timing API")}}

The **`domainLookupEnd`** read-only property returns the
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser finishes
the domain name lookup for the resource.

If the user agent has the domain information in cache,
{{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}} and
{{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}} represent the
times when the user agent starts and ends the domain data retrieval from the cache.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the
browser finishes the domain name lookup for the resource.

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
