---
title: console.timeStamp()
slug: Web/API/console/timeStamp
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Non-standard
  - Web Development
  - web console
browser-compat: api.console.timeStamp
---
{{APIRef("Console API")}}{{Non-standard_header}}

The **`console.timeStamp`** method adds a single marker to the browser's Performance tool ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/)). This lets you
correlate a point in your code with the other events recorded in the timeline, such as
layout and paint events.

You can optionally supply an argument to label the timestamp, and this label will then
be shown alongside the marker.

{{AvailableInWorkers}}

## Syntax

```js
timeStamp(label)
```

### Parameters

- `label`
  - : Label for the timestamp. Optional.

### Return value

None ({{jsxref("undefined")}}).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console.time()")}}
- {{domxref("console.timeEnd()")}}
- [Adding markers with the console API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
