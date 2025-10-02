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

## Syntax

```js-nolint
console.timeStamp(label)
```

### Parameters

- `label` {{Optional_Inline}}
  - : Label for the timestamp.

> [!NOTE]
> Chrome has extended this `console.timeStamp()` method to allow additional, optional parameters to be provided as part of its extensibility API that surfaces these in performances traces. See the [Chrome's extensibility API documentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp) for more information.

### Return value

None ({{jsxref("undefined")}}).

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
