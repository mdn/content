---
title: PerformanceResourceTiming.connectStart
slug: Web/API/PerformanceResourceTiming/connectStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.connectStart
---

{{APIRef("Performance API")}}

The **`connectStart`** read-only property returns the
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the user agent starts
establishing the connection to the server to retrieve the resource.

{{AvailableInWorkers}}

## Value

A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to establish
the connection to the server to retrieve the resource.

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
