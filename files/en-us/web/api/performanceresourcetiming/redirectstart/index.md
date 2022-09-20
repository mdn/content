---
title: PerformanceResourceTiming.redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.redirectStart
---

{{APIRef("Resource Timing API")}}

The **`redirectStart`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} representing the start time of the fetch
which that initiates the redirect.

If there are HTTP redirects when fetching the resource and if any of the redirects are
not from the same origin as the current document, but the timing allow check algorithm
passes for each redirected resource, this property returns the starting time of the
fetch that initiates the redirect; otherwise, zero is returned.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the start time of the
fetch which initiates the redirect.

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
