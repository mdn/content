---
title: performance.measure()
slug: Web/API/Performance/measure
tags:
  - API
  - Method
  - Reference
  - Web Performance
  - Web Workers
browser-compat: api.Performance.measure
---
{{APIRef("User Timing API")}}

The **`measure()`** method creates a named
{{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's _performance entry
buffer_ between marks, the navigation start time, or the current time. When
measuring between two marks, there is a _start mark_ and _end mark_,
respectively. The named timestamp is referred to as a _measure_.

The `measure` can also be retrieved by one of the {{domxref("Performance")}}
interfaces: ({{domxref("Performance.getEntries","getEntries()")}},
{{domxref("Performance.getEntriesByName","getEntriesByName()")}} or
{{domxref("Performance.getEntriesByType","getEntriesByType()")}}).

The `measure`'s {{domxref("PerformanceEntry","performance entry")}} will
have the following property values:

- {{domxref("PerformanceEntry.entryType","entryType")}} - set to
  "`measure`".
- {{domxref("PerformanceEntry.name","name")}} - set to the "`name`" given
  when the measure was created.
- {{domxref("PerformanceEntry.startTime","startTime")}} - set to the start mark
  {{domxref("DOMHighResTimeStamp","timestamp")}}.
- {{domxref("PerformanceEntry.duration","duration")}} - set to a
  {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the
  end mark timestamp minus the start mark timestamp).

{{AvailableInWorkers}}

## Syntax

```js
performance.measure(name);
performance.measure(name, startMark);
performance.measure(name, startMark, endMark);
performance.measure(name, undefined, endMark);
```

### Arguments

- name
  - : A {{domxref("DOMString")}} representing the name of the measure.
- startMark {{optional_inline}}
  - : A {{domxref("DOMString")}} representing the name of the measure's starting mark. May
    also be the name of a {{domxref("PerformanceTiming")}} property. If it is omitted,
    then the start time will be the navigation start time.
- endMark {{optional_inline}}
  - : A {{domxref("DOMString")}} representing the name of the measure's ending mark. May
    also be the name of a {{domxref("PerformanceTiming")}} property. If it is omitted,
    then the current time is used.

### Return value

- entry
  - : The {{domxref("PerformanceMeasure")}} entry that was created.

## Example

The following example shows how `measure()` is used to create a new
_measure_ {{domxref("PerformanceEntry","performance entry")}} in the browser's
performance entry buffer.

```js
const markerNameA = "example-marker-a"
const markerNameB = "example-marker-b"

// Run some nested timeouts, and create a PerformanceMark for each.
performance.mark(markerNameA);
setTimeout(function() {
  performance.mark(markerNameB);
  setTimeout(function() {

    // Create a variety of measurements.
    performance.measure("measure a to b", markerNameA, markerNameB);
    performance.measure("measure a to now", markerNameA);
    performance.measure("measure from navigation start to b", undefined, markerNameB);
    performance.measure("measure from navigation start to now");

    // Pull out all of the measurements.
    console.log(performance.getEntriesByType("measure"));

    // Finally, clean up the entries.
    performance.clearMarks();
    performance.clearMeasures();
  }, 1000);
}, 1000);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
