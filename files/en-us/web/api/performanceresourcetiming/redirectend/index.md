---
title: PerformanceResourceTiming.redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.redirectEnd
---
{{APIRef("Resource Timing API")}}

The **`redirectEnd`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately after receiving the last byte
of the response of the last redirect.

When fetching a resource, if there are multiple HTTP redirects, and any of the
redirects have an origin that is different from the current document, and the timing
allow check algorithm passes for each redirected resource, this property returns the
time immediately after receiving the last byte of the response of the last redirect;
otherwise, zero is returned.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after receiving the last
byte of the response of the last redirect.

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
