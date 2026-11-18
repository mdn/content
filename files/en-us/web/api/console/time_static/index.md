---
title: "console: time() static method"
short-title: time()
slug: Web/API/console/time_static
page-type: web-api-static-method
browser-compat: api.console.time_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.time()`** static method starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call {{domxref("console/timeEnd_static", "console.timeEnd()")}} with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

See [Timers](/en-US/docs/Web/API/console#timers) in the {{domxref("console")}} documentation for details and examples.

## Syntax

```js-nolint
console.time()
console.time(label)
```

### Parameters

- `label` {{optional_inline}}
  - : A string representing the name to give the new timer. This will identify the timer; use the same name when calling {{domxref("console/timeEnd_static", "console.timeEnd()")}} to stop the timer and get the time output to the console. If omitted, the label `"default"` is used.

### Return value

None ({{jsxref("undefined")}}).

## Description

Developer tools may also include the interval between `console.time()` and `console.timeEnd()` in a performance recording. This profiling behavior is separate from the console output and is not specified by the Console API. For standard timing entries accessible to JavaScript, use {{domxref("Performance.mark", "performance.mark()")}} and {{domxref("Performance.measure", "performance.measure()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- See {{domxref("console/timeLog_static", "console.timeLog()")}} and {{domxref("console/timeEnd_static", "console.timeEnd()")}} for examples
- {{domxref("console/timeStamp_static", "console.timeStamp()")}}
- {{domxref("Performance.mark", "performance.mark()")}}
- {{domxref("Performance.measure", "performance.measure()")}}
- [Microsoft Edge's documentation for `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#time)
- [Node.js documentation for `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome's documentation for `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
