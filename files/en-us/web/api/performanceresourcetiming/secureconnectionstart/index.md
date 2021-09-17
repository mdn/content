---
title: PerformanceResourceTiming.secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
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

## Syntax

```js
resource.secureConnectionStart;
```

### Return value

If the resource is fetched over a secure connection, a
{{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the handshake
process to secure the current connection. If a secure connection is not used, this
property returns zero.

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
