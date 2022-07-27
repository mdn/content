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
{{APIRef("Resource Timing API")}}

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
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  const p = performance.getEntriesByType("resource");
  for (let i=0; i < p.length; i++) {
    print_start_and_end_properties(p[i]);
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

  for (let i=0; i < properties.length; i++) {
    // check each property
    const value = perfEntry[properties[i]];
    if (properties[i] in perfEntry) {
      console.log(`… ${properties[i]} = ${value}`);
    } else {
      console.log(`… ${properties[i]} = NOT supported`);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
