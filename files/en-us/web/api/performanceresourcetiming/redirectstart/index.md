---
title: PerformanceResourceTiming.redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
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

## Syntax

```js
resource.redirectStart;
```

### Return value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the start time of the
fetch which initiates the redirect.

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
