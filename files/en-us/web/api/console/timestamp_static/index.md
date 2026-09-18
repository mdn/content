---
title: "console: timeStamp() static method"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
page-type: web-api-static-method
status:
  - non-standard
browser-compat: api.console.timeStamp_static
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

The **`console.timeStamp()`** static method adds a marker to a performance recording in developer tools that support it, such as the [Chrome Performance panel](https://developer.chrome.com/docs/devtools/performance/reference) and [Firefox Profiler](https://profiler.firefox.com/). This lets you correlate a point in your code with recorded events such as layout and painting.

## Syntax

```js-nolint
console.timeStamp(label);
console.timeStamp(label, start, end, trackName, trackGroup, color, data);
```

### Parameters

- `color` {{Optional_Inline}} {{Experimental_Inline}}
  - : A string for the display color of the entry. Must be one of `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.

- `data` {{Optional_Inline}} {{Experimental_Inline}}
  - : An object with additional data to display. URLs may automatically be turned into links by some browsers.

> [!NOTE]
> Support for the `data` parameter varies across browsers and their DevTools implementations. For example, in some versions of Chrome, this data may not appear in the Performance panel.

- `end` {{Optional_Inline}} {{Experimental_Inline}}
  - : A string referencing a previously defined `timeStamp` label or a timestamp ({{domxref("DOMHighResTimeStamp")}}) to be used as the end time.

- `label` {{Optional_Inline}}
  - : Label for the timestamp.

- `start` {{Optional_Inline}} {{Experimental_Inline}}
  - : A string referencing a previously defined `timeStamp` label or a timestamp ({{domxref("DOMHighResTimeStamp")}}) to be used as the start time.

- `trackName` {{Optional_Inline}} {{Experimental_Inline}}
  - : The name of the custom track used to display the timestamp data

- `trackGroup` {{Optional_Inline}} {{Experimental_Inline}}
  - : The group of the custom track used to display the timestamp data

### Return value

None ({{jsxref("undefined")}}).

## Description

To see the marker, start a performance recording before the call occurs. Marker recording and display depend on the browser and its profiling tool; the presence of `console.timeStamp()` does not by itself guarantee a visible marker.

This method does not log elapsed time to the console or create a {{domxref("PerformanceEntry")}}. Use {{domxref("console/time_static", "console.time()")}} and {{domxref("console/timeEnd_static", "console.timeEnd()")}} for console timers, or {{domxref("Performance.mark", "performance.mark()")}} and {{domxref("Performance.measure", "performance.measure()")}} for standard entries that your application can observe and read.

You can optionally supply an argument to label the timestamp, and this label will then be shown alongside the marker.

Some browsers have further extended this `console.timeStamp()` method to allow additional, optional parameters to be provided as part of its extensibility API that surfaces these in performance traces. See the [Chrome's extensibility API documentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp) for more information.

## Examples

### Basic usage

```js
console.timeStamp("marker 1");
```

### Using the Extensibility API to provide richer details for display

```js
// 1. Create a duration event with rich data
const start = performance.now() - 150;
const end = performance.now() - 20;

const durationData = {
  processingTime: `${end - start}ms`,
  info: "Check this URL: https://example.com for more.",
  metrics: {
    items: 5,
    isCached: true,
  },
};

console.timeStamp(
  "My Timed Task", // label
  start, // startTime
  end, // endTime
  "Tasks", // trackName
  "My Extension", // trackGroup
  "tertiary", // color
  durationData, // data (object)
);

// 2. Create an instant event with a deep link for a DevTools extension
const linkData = {
  url: "ext://resource/123",
  description: "View Resource 123",
  otherDetail: "This data also appears in the JSON viewer",
};

console.timeStamp(
  "Event with Link", // label
  performance.now(), // startTime (instant)
  undefined, // endTime (instant)
  "Tasks", // trackName
  "My Extension", // trackGroup
  "primary-light", // color
  linkData, // data (object)
);
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeLog_static", "console.timeLog()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
- {{domxref("performance/mark", "performance.mark()")}}
- {{domxref("performance/measure", "performance.measure()")}}
- [Chrome DevTools extensibility API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)
