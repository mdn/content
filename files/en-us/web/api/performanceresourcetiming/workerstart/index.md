---
title: PerformanceResourceTiming.workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
tags:
  - API
  - PerformanceResourceTiming
  - Property
  - Reference
  - Web Performance
  - workerStart
browser-compat: api.PerformanceResourceTiming.workerStart
---
{{APIRef("Resource Timing API")}}

The **`workerStart`** read-only property of the
{{domxref("PerformanceResourceTiming")}} interface returns a
{{domxref("DOMHighResTimeStamp")}} immediately before dispatching the
{{domxref("FetchEvent")}} if a Service Worker thread is already running, or immediately
before starting the Service Worker thread if it is not already running. If the resource
is not intercepted by a Service Worker the property will always return 0.

{{AvailableInWorkers}}

## Syntax

```js
resource.workerStart;
```

### Value

A {{domxref("DOMHighResTimeStamp")}}.

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
                "secureConnectionStart",
		"workerStart"];

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
