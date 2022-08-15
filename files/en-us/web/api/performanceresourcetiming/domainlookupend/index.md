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
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  const entries = performance.getEntriesByType("resource");
  for (const entry of entries) {
    print_start_and_end_properties(entry);
  }
}
function print_start_and_end_properties(perfEntry) {
  // Print timestamps of the *start and *end properties
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart"];

  for (const property of properties) {
    // check each property
    const supported = property in perfEntry;
    const value = perfEntry[property];
    if (supported) {
      console.log(`… ${property} = ${value}`);
    } else {
      console.log(`… ${property} = NOT supported`);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
