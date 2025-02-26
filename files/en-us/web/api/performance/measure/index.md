---
title: "Performance: measure() method"
short-title: measure()
slug: Web/API/Performance/measure
page-type: web-api-instance-method
browser-compat: api.Performance.measure
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`measure()`** method creates a named {{domxref("PerformanceMeasure")}} object representing a time measurement between two marks in the browser's performance timeline.

When measuring between two marks, there is a _start mark_ and _end mark_, respectively.
The named timestamp is referred to as a _measure_.

## Syntax

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

If only `measureName` is specified, the start timestamp is set to zero, and the end timestamp (which is used to calculate the duration) is the value that would be returned by {{domxref("Performance.now()")}}.

You can use strings to identify {{domxref("PerformanceMark")}} objects as start and end marks.

To only provide an `endMark`, you need to provide an empty `measureOptions` object:
`performance.measure("myMeasure", {}, "myEndMarker")`.

### Parameters

- `measureName`

  - : A string representing the name of the measure.

- `measureOptions` {{optional_inline}}

  - : An object that may contain measure options.

    - `detail` {{optional_inline}}
      - : Arbitrary metadata to be included in the measure. Defaults to `null`. Must be [structured-cloneable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
    - `start` {{optional_inline}}

      - : Timestamp ({{domxref("DOMHighResTimeStamp")}}) to be used as the start time, or string that names a {{domxref("PerformanceMark")}} to use for the start time.

        If this is a string naming a {{domxref("PerformanceMark")}}, then it is defined in the same way as `startMark`.

    - `duration` {{optional_inline}}
      - : Duration (in milliseconds) between the start and end mark times. If omitted, this defaults to {{domxref("performance.now()")}}; the time that has elapsed since the context was created. If provided, you must also specify either `start` or `end` but not both.
    - `end` {{optional_inline}}

      - : Timestamp ({{domxref("DOMHighResTimeStamp")}}) to be used as the end time, or string that names a {{domxref("PerformanceMark")}} to use for the end time.

        If this is a string naming a {{domxref("PerformanceMark")}}, then it is defined in the same way as `endMark`.

- `startMark` {{optional_inline}}
  - : A string naming a {{domxref("PerformanceMark")}} in the performance timeline. The {{domxref("PerformanceEntry.startTime")}} property of this mark will be used for calculating the measure.
- `endMark` {{optional_inline}}
  - : A string naming a {{domxref("PerformanceMark")}} in the performance timeline. The {{domxref("PerformanceEntry.startTime")}} property of this mark will be used for calculating the measure.
    If you want to pass this argument, you must also pass either `startMark` or an empty `measureOptions` object.

### Return value

The {{domxref("PerformanceMeasure")}} entry that was created.

The returned _measure_ will have the following property values:

- {{domxref("PerformanceEntry.entryType","entryType")}} - set to `"measure"`.
- {{domxref("PerformanceEntry.name","name")}} - set to the `name` argument.
- {{domxref("PerformanceEntry.startTime","startTime")}} - set to:

  - a {{domxref("DOMHighResTimeStamp","timestamp")}}, if specified in `measureOptions.start`.
  - the {{domxref("DOMHighResTimeStamp","timestamp")}} of a start mark, if specified in `measureOptions.start` or `startMark`
  - a timestamp calculated from the `measureOptions.end` and `measureOptions.duration` (if `measureOptions.start` was not specified)
  - 0, if it isn't specified and can't be determined from other values.

- {{domxref("PerformanceEntry.duration","duration")}} - set to a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure calculated by subtracting the `startTime` from the end timestamp.

  The end timestamp is one of:

  - a {{domxref("DOMHighResTimeStamp","timestamp")}}, if specified in `measureOptions.end`.
  - the {{domxref("DOMHighResTimeStamp","timestamp")}} of an end mark, if one is specified in `measureOptions.end` or `endMark`
  - a timestamp calculated from the `measureOptions.start` and `measureOptions.duration` (if `measureOptions.end` was not specified)
  - the value returned by {{domxref("Performance.now()")}}, if no end mark is specified or can be determined from other values.

- {{domxref("PerformanceMeasure","detail")}} - set to the value passed in `measureOptions`.

### Exceptions

- {{jsxref("TypeError")}}

  - : This can be thrown in any case where the start, end or duration might be ambiguous:

    - Both `endMark` and `measureOptions` are specified.
    - `measureOptions` is specified with `duration` but without specifying either `start` or `end`.
    - `measureOptions` is specified with all of `start`, `end`, and `duration`.

- `SyntaxError` {{domxref("DOMException")}}

  - : The named mark does not exist.

    - An end mark is specified using either `endMark` or `measureOptions.end`, but there is no {{domxref('PerformanceMark')}} in the performance buffer with the matching name.
    - An end mark is specified using either `endMark` or `measureOptions.end`, but it cannot be converted to match that of a read only attribute in the {{domxref("PerformanceTiming")}} interface.
    - A start mark is specified using either `startMark` or `measureOptions.start`, but there is no {{domxref('PerformanceMark')}} in the performance buffer with the matching name.
    - A start mark is specified using either `startMark` or `measureOptions.start`, but it cannot be converted to match that of a read only attribute in the {{domxref("PerformanceTiming")}} interface.

- `DataCloneError` {{domxref("DOMException")}}

  - : The `measureOptions.detail` value is non-`null` and cannot be serialized using the HTML "StructuredSerialize" algorithm.

- {{jsxref("RangeError")}}
  - : The `measureOptions.detail` value is non-`null` and memory cannot be allocated during serialization using the HTML "StructuredSerialize" algorithm.

## Examples

### Measuring duration between named markers

Given two of your own markers `"login-started"` and `"login-finished"`, you can create a measurement called `"login-duration"` as shown in the following example. The returned {{domxref("PerformanceMeasure")}} object will then provide a `duration` property to tell you the elapsed time between the two markers.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### Measuring duration with custom start and end times

To do more advanced measurements, you can pass a `measureOptions` parameter. For example, you can use the [`event.timeStamp`](/en-US/docs/Web/API/Event/timeStamp) property from a [`click` event](/en-US/docs/Web/API/Element/click_event) as the start time.

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### Providing additional measurement details

You can use the `details` property to provide additional information of any type. Maybe you want to record which HTML element was clicked, for example.

```js
performance.measure("login-click", {
  detail: { htmlElement: myElement.id },
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
