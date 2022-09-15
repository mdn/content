---
title: PerformanceResourceTiming.secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.secureConnectionStart
---

{{APIRef("Resource Timing API")}}

The **`secureConnectionStart`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the browser starts the
handshake process to secure the current connection. If a secure connection is not used,
the property returns zero.

{{AvailableInWorkers}}

## Value

If the resource is fetched over a secure connection, a
{{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the handshake
process to secure the current connection. If a secure connection is not used, this
property returns zero.

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
