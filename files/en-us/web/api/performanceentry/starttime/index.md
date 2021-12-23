---
title: PerformanceEntry.startTime
slug: Web/API/PerformanceEntry/startTime
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.startTime
---
{{APIRef("Performance Timeline API")}}

The **`startTime`** property returns the first recorded
{{domxref("DOMHighResTimeStamp","timestamp")}} of the
{{domxref("PerformanceEntry","performance entry")}}.

{{AvailableInWorkers}}

The value returned by this property depends on the performance entry's
{{domxref("PerformanceEntry.entryType","type")}}:

- "`frame`" - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  when the frame was started.
- "`mark`" - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  when the mark was created by a call to
  {{domxref("Performance.mark","performance.mark()")}}.
- "`measure`" - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  when the measure was created by a call to
  {{domxref("Performance.measure","performance.measure()")}}.
- "`navigation`" - returns the
  {{domxref("DOMHighResTimeStamp","timestamp")}} with a value of "`0`".
- "`resource`" - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  immediately before the browser {{domxref("PerformanceResourceTiming/fetchStart","starts
    fetching the resource")}}.

This property is {{readonlyInline}}.

## Syntax

```js
entry.startTime;
```

### Return value

A {{domxref("DOMHighResTimeStamp")}} representing the first timestamp when the
{{domxref("PerformanceEntry","performance entry")}} was created.

Note: if the performance entry has an
{{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`" (i.e.
the entry is a {{domxref("PerformanceResourceTiming")}} object), this property returns
the {{domxref("PerformanceResourceTiming.fetchStart")}}
{{domxref("DOMHighResTimeStamp","timestamp")}}.

## Example

The following example shows the use of the `startTime` property.

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
