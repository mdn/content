---
title: PerformanceResourceTiming.fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.fetchStart
---

{{APIRef("Resource Timing API")}}

The **`fetchStart`** read-only property represents a
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the browser starts to
fetch the resource.

If there are HTTP redirects the property returns the time immediately before the user
agent starts to fetch the final resource in the redirection.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to fetch the
resource.

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
