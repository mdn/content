---
title: PerformanceEntry.duration
slug: Web/API/PerformanceEntry/duration
page-type: web-api-instance-property
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

## Value

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

## Examples

The following example shows the use of the `duration` property.

```js
function run_PerformanceEntry() {
  console.log("PerformanceEntry support…");

  if (performance.mark === undefined) {
    console.log("The property performance.mark is not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  const perf = performance.getEntries();
  perf.forEach((entry, i) => {
    log(`Entry[${i}]`);
    check_PerformanceEntry(entry);
  });
}

function check_PerformanceEntry(obj) {
  const properties = ["name", "entryType", "startTime", "duration"];
  const methods = ["toJSON"];

  // Check each property
  properties.forEach((prop) => {
    const supported = prop in obj;
    console.log(`…${prop} = ${supported ? obj[prop] : "Not supported"}`);
  });

  // Check each method
  methods.forEach((meth) => {
    const supported = typeof obj[meth] === "function";
    console.log(`…${meth} = ${supported ? obj[meth] : "Not supported"}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
