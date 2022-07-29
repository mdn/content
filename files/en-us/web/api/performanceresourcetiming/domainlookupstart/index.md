---
title: PerformanceResourceTiming.domainLookupStart
slug: Web/API/PerformanceResourceTiming/domainLookupStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.domainLookupStart
---
{{APIRef("Resource Timing API")}}

The **`domainLookupStart`** read-only property returns the
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the browser starts the
domain name lookup for the resource.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the domain
name lookup for the resource.

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
  // Print timestamps of the PerformanceEntry *start and *end properties
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
