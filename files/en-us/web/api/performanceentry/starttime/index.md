---
title: PerformanceEntry.startTime
slug: Web/API/PerformanceEntry/startTime
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.startTime
---

{{APIRef("Performance API")}}

The **`startTime`** property returns the first recorded
{{domxref("DOMHighResTimeStamp","timestamp")}} of the
{{domxref("PerformanceEntry","performance entry")}}.

{{AvailableInWorkers}}

The value returned by this property depends on the performance entry's
{{domxref("PerformanceEntry.entryType","type")}}:

- `"event"` - returns a {{domxref("DOMHighResTimeStamp")}} representing the associated event's [`timestamp`](/en-US/docs/Web/API/Event/timestamp) property. This is the time the event was created.
- `"first-input"` - returns a {{domxref("DOMHighResTimeStamp")}} representing the associated event's [`timestamp`](/en-US/docs/Web/API/Event/timestamp) property. This is the time the first input event was created.
- `"frame"` - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  when the frame was started.
- `"mark"` - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  when the mark was created by a call to
  {{domxref("Performance.mark","performance.mark()")}}.
- `"measure"` - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  when the measure was created by a call to
  {{domxref("Performance.measure","performance.measure()")}}.
- `"navigation"` - returns the
  {{domxref("DOMHighResTimeStamp","timestamp")}} with a value of "`0`".
- `"resource"` - returns the {{domxref("DOMHighResTimeStamp","timestamp")}}
  immediately before the browser {{domxref("PerformanceResourceTiming/fetchStart","starts
    fetching the resource")}}.

This property is {{ReadOnlyInline}}.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the first timestamp when the
{{domxref("PerformanceEntry","performance entry")}} was created.

Note: if the performance entry has an
{{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`" (i.e.
the entry is a {{domxref("PerformanceResourceTiming")}} object), this property returns
the {{domxref("PerformanceResourceTiming.fetchStart")}}
{{domxref("DOMHighResTimeStamp","timestamp")}}.

## Examples

The following example shows the use of the `startTime` property.

```js
function runPerformanceEntry() {
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
  performance.getEntries()
    .forEach((entry, i) => {
      console.log(`Entry[${i}]`);
      checkPerformanceEntry(entry);
    });
}

function checkPerformanceEntry(obj) {
  const properties = ["name", "entryType", "startTime", "duration"];
  const methods = ["toJSON"];

  // Check each property
  properties.forEach((property) => {
    const supported = property in obj;
    console.log(`…${property} = ${supported ? obj[property] : "Not supported"}`);
  });

  // Check each method
  methods.forEach((method) => {
    const supported = typeof obj[method] === "function";
    console.log(`…${method} = ${supported ? JSON.stringify(obj[method]()) : "Not supported"}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
