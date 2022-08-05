---
title: performance.measure()
slug: Web/API/Performance/measure
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
  - Web Workers
browser-compat: api.Performance.measure
---
{{APIRef("User Timing API")}}

The **`measure()`** method creates a named {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's _performance entry buffer_ between marks, the navigation start time, or the current time.

When measuring between two marks, there is a _start mark_ and _end mark_, respectively.
The named timestamp is referred to as a _measure_.

The `measure` can be retrieved using any of the {{domxref("Performance")}} interfaces:
({{domxref("Performance.getEntries","getEntries()")}},
{{domxref("Performance.getEntriesByName","getEntriesByName()")}} or
{{domxref("Performance.getEntriesByType","getEntriesByType()")}}).

{{AvailableInWorkers}}

## Syntax

```js
measure(measureName)
measure(measureName, MeasureOptions)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
```

If only `measureName` is specified, the start timestamp is set to zero, and the end timestamp (which is used to calculate the duration) is the value that would be returned by {{domxref("Performance.now()")}}.

### Parameters

- `measureName`
  - : A string representing the name of the measure.

- `MeasureOptions` {{optional_inline}}
  - : An object that may contain all measure options (the `startMark` and `endMark` may be specified in this object or as their own arguments):

    - `detail`
      - : Arbitrary metadata to be included in the measure.
    - `start`
      - : Timestamp {{domxref("DOMHighResTimeStamp")}} to be used as the start time, or string to be used as start mark.
          If this represents the name of a start mark, then it is defined in the same way as `startMark` (in other words it must be the name of an existing mark or a {{domxref("PerformanceTiming")}} property).
    - `duration`
      - : Duration between the start and end mark times ({{domxref("DOMHighResTimeStamp")}}).
    - `end`
      - : Timestamp ({{domxref("DOMHighResTimeStamp")}}) to be used as the end time, or string to be used as end mark.
          If this represents the name of an end mark, then it is defined in the same way as `endMark` (in other words it must be the name of an existing mark or a {{domxref("PerformanceTiming")}} property).

- `startMark` {{optional_inline}}
  - : A string representing the name of the measure's starting mark.
    May also be the name of a {{domxref("PerformanceTiming")}} property.
    Specifying a name that does not represent an existing {{domxref('PerformanceMark')}} or {{domxref("PerformanceTiming")}} raises a `SyntaxError` {{domxref("DOMException")}}.

- `endMark` {{optional_inline}}
  - : A string representing the name of the measure's ending mark.
    This may also be the name of a {{domxref("PerformanceTiming")}} property.
    Specifying a name that does not represent an existing {{domxref('PerformanceMark')}} or {{domxref("PerformanceTiming")}} raises a `SyntaxError` {{domxref("DOMException")}}.

### Return value

The {{domxref("PerformanceMeasure")}} entry that was created.

The returned _measure_ will have the following property values:

- {{domxref("PerformanceEntry.entryType","entryType")}} - set to "`measure`".
- {{domxref("PerformanceEntry.name","name")}} - set to the "`name`" argument.
- {{domxref("PerformanceEntry.startTime","startTime")}} - set to:
  - a {{domxref("DOMHighResTimeStamp","timestamp")}}, if specified in `MeasureOptions.start`.
  - the {{domxref("DOMHighResTimeStamp","timestamp")}} of a start mark, if specified in `MeasureOptions.start` or `startMark`
  - a timestamp calculated from the `MeasureOptions.end` and `MeasureOptions.duration` (if `MeasureOptions.start` was not specified)
  - 0, if it isn't specified and can't be determined from other values.

- {{domxref("PerformanceEntry.duration","duration")}} - set to a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure calculated by subtracting the `startTime` from the end timestamp.

  The end timestamp is one of:
  - a {{domxref("DOMHighResTimeStamp","timestamp")}}, if specified in `MeasureOptions.end`.
  - the {{domxref("DOMHighResTimeStamp","timestamp")}} of an end mark, if one is specified in `MeasureOptions.end` or `endMark`
  - a timestamp calculated from the `MeasureOptions.start` and `MeasureOptions.duration` (if `MeasureOptions.end` was not specified)
  - the value returned by {{domxref("Performance.now()")}}, if no end mark is specified or can be determined from other values.
- {{domxref("PerformanceMeasure","detail")}} - set to the value passed in `MeasureOptions`.

### Exceptions

- {{jsxref("TypeError")}}
  - : This can be thrown in any case where the start, end or duration might be ambiguous:

    - Both `endMark` and `MeasureOptions` are specified.
    - `MeasureOptions` is specified without either `start` and `end` members.
    - `MeasureOptions` is specified with all of `start`, `end`, and `duration` members (which might then be inconsistent).

- `SyntaxError` {{domxref("DOMException")}}
  - : The named mark does not exist.

    - An end mark is specified using either `endMark` or `MeasureOptions.end`, but there is no {{domxref('PerformanceMark')}} in the performance buffer with the matching name.
    - An end mark is specified using either `endMark` or `MeasureOptions.end`, but it cannot be converted to match that of a read only attribute in the {{domxref("PerformanceTiming")}} interface.
    - A start mark is specified using either `startMark` or `MeasureOptions.start`, but there is no {{domxref('PerformanceMark')}} in the performance buffer with the matching name.
    - A start mark is specified using either `startMark` or `MeasureOptions.start`, but it cannot be converted to match that of a read only attribute in the {{domxref("PerformanceTiming")}} interface.

- `DataCloneError` {{domxref("DOMException")}}
  - : The `MeasureOptions.detail` value is non-`null` and cannot be serialized using the HTML "StructuredSerialize" algorithm.

- {{jsxref("RangeError")}}
  - : The `MeasureOptions.detail` value is non-`null` and memory cannot be allocated during serialization using the HTML "StructuredSerialize" algorithm.

## Examples

The following example shows how `measure()` is used to create a new _measure_ {{domxref("PerformanceEntry","performance entry")}} in the browser's performance entry buffer.

```js
const markerNameA = "example-marker-a"
const markerNameB = "example-marker-b"

// Run some nested timeouts, and create a PerformanceMark for each.
performance.mark(markerNameA);
setTimeout(() => {
  performance.mark(markerNameB);
  setTimeout(() => {
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
