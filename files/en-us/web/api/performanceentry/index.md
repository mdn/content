---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
tags:
  - API
  - Interface
  - Performance Timeline API
  - PerformanceEntry
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry
---
{{APIRef("Performance Timeline API")}}

The **`PerformanceEntry`** object encapsulates a single performance metric that is part of the _performance timeline_. A _performance entry_ can be directly created by making a performance _{{domxref("PerformanceMark","mark")}}_ or _{{domxref("PerformanceMeasure","measure")}}_ (for example by calling the {{domxref("Performance.mark","mark()")}} method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).

`PerformanceEntry` instances will always be one of the following subtypes:

- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformancePaintTiming")}}

{{AvailableInWorkers}}

## Properties

- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : A value that further specifies the value returned by the {{domxref("PerformanceEntry.entryType")}} property. The value of both depends on the subtype. See property page for valid values.
- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : A {{domxref("DOMString")}} representing the type of performance metric such as, for example, "`mark`". See property page for valid values.
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the starting time for the performance metric.
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value of the duration of the performance event.

## Methods

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceEntry` object.

## Example

The following example checks all `PerformanceEntry` properties to see if the browser supports them and if so, write their values to the console.

```js
function print_PerformanceEntries() {
  // Use getEntries() to get a list of all performance entries
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_PerformanceEntry(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
  var properties = ["name",
                    "entryType",
                    "startTime",
                    "duration"];

  for (var i=0; i < properties.length; i++) {
    // Check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " is NOT supported");
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
