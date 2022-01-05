---
title: PerformanceEntry.duration
slug: Web/API/PerformanceEntry/duration
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.duration
---
{{APIRef("Performance Timeline API")}}

The **`duration`** property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} that is the duration of the
{{domxref("PerformanceEntry","performance entry")}}.

{{AvailableInWorkers}}

The value returned by this property depends on the performance entry's
{{domxref("PerformanceEntry.entryType","type")}}:

- "`frame`" - returns a {{domxref("DOMHighResTimeStamp","timestamp")}}
  indicating the difference between the `startTime`s of two successive
  frames.
- "`mark`" - returns "`0`" (a mark has no duration).
- "`measure`" - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  that is the duration of the measure.
- "`navigation`" - returns the
  {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the
  {{domxref("PerformanceNavigationTiming.loadEventEnd")}} and
  {{domxref("PerformanceEntry.startTime")}} properties, respectively.
- "`resource`" - returns the difference between the resource's
  {{domxref("PerformanceResourceTiming/responseEnd","responseEnd")}}
  {{domxref("DOMHighResTimeStamp","timestamp")}} and its
  {{domxref("PerformanceEntry.startTime","startTime")}}
  {{domxref("DOMHighResTimeStamp","timestamp")}}.

This property is {{readonlyInline}}.

## Syntax

```js
entry.duration;
```

### Return value

A {{domxref("DOMHighResTimeStamp")}} representing the duration of the
{{domxref("PerformanceEntry","performance entry")}}. If the duration concept doesn't
apply for a particular performance metric, the browser may choose to return a duration
of 0.

Note: if the performance entry has an
{{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`" (i.e.
the entry is a {{domxref("PerformanceResourceTiming")}} object), this property returns
the difference between the {{domxref("PerformanceResourceTiming.responseEnd")}} and
{{domxref("PerformanceEntry.startTime")}}
{{domxref("DOMHighResTimeStamp","timestamps")}}.

## Example

The following example shows the use of the `duration` property.

```js
function run_PerformanceEntry() {
  log("PerformanceEntry support ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  var properties = ["name", "entryType", "startTime", "duration"];
  var methods = ["toJSON"];

  for (var i=0; i < properties.length; i++) {
    // check each property
    var supported = properties[i] in obj;
    if (supported)
      log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      log("..." + properties[i] + " = Not supported");
  }
  for (var i=0; i < methods.length; i++) {
    // check each method
    var supported = typeof obj[methods[i]] == "function";
    if (supported) {
      var js = obj[methods[i]]();
      log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      log("..." + methods[i] + " = Not supported");
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
