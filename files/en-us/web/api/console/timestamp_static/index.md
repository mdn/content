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

The **`console.timeStamp()`** static method adds a single marker to the browser's Performance tool ([Firefox bug 1387528](https://bugzil.la/1387528), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). This lets you correlate a point in your code with the other events recorded in the timeline, such as layout and paint events.

You can optionally supply an argument to label the timestamp, and this label will then be shown alongside the marker.

Some browsers have further extended this `console.timeStamp()` method to allow additional, optional parameters to be provided as part of its extensibility API that surfaces these in performances traces. See the [Chrome's extensibility API documentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp) for more information.

## Syntax

```js-nolint
console.timeStamp(label)
```

### Parameters

- `color` {{Optional_Inline}} {{Experimental_Inline}}
  - : A string for the display colour of the entry. Must be one of `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.

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

## Examples

### Basic usage

```js
console.timeStamp("marker 1");
```

### Using the Extensibility API to provide richer details for display

```js
// Take a start timestamp
const start = performance.now();

// Measure duration from start to now
console.timeStamp(
  "measure 1",
  start,
  undefined,
  "My Track",
  "My Group",
  "primary-light",
);

// Take an end timestamp
const end = performance.now();

// Measure duration from start to end
console.timeStamp(
  "measure 2",
  start,
  end,
  "My Track",
  "My Group",
  "secondary-dark",
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
- [Adding markers with the console API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
- [Chrome DevTools extensibility API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)
