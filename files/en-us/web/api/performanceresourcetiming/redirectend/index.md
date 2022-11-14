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

{{APIRef("Performance API")}}

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
