---
title: PerformanceResourceTiming.redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
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
redirects have an origin that is different from the current document, and the timing
allow check algorithm passes for each redirected resource, this property returns the
time immediately after receiving the last byte of the response of the last redirect;
otherwise, zero is returned.

{{AvailableInWorkers}}

## Syntax

```js
resource.redirectEnd;
```

### Return value

A {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after receiving the last
byte of the response of the last redirect.

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
