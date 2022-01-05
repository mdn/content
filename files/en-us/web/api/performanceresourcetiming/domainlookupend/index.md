---
title: PerformanceResourceTiming.domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
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

## Syntax

```js
resource.domainLookupEnd;
```

### Return value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the
browser finishes the domain name lookup for the resource.

## Example

In the following example, the value of the `*Start` and `*End`
properties of all "`resource`"
{{domxref("PerformanceEntry.entryType","type")}} events are logged.

```js
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i < p.length; i++) {
    print_start_and_end_properties(p[i]);
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

  for (var i=0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = NOT supported");
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
