---
title: PerformanceResourceTiming.connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.connectEnd
---
{{APIRef("Resource Timing API")}}

The **`connectEnd`** read-only property returns the
{{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser finishes
establishing the connection to the server to retrieve the resource. The timestamp value
includes the time interval to establish the transport connection, as well as other time
intervals such as SSL handshake and SOCKS authentication.

{{AvailableInWorkers}}

## Syntax

```js
resource.connectEnd;
```

### Return value

A {{domxref("DOMHighResTimeStamp")}} representing the time after a connection is
established.

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
