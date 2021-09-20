---
title: PerformanceResourceTiming.domainLookupStart
slug: Web/API/PerformanceResourceTiming/domainLookupStart
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

## Syntax

```js
resource.domainLookupStart;
```

### Return value

A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the domain
name lookup for the resource.

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
  // Print timestamps of the PerformanceEntry *start and *end properties
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
