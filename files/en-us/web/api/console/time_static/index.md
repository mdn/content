---
title: "console: time() static method"
short-title: time()
slug: Web/API/console/time_static
page-type: web-api-instance-method
browser-compat: api.console.time_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.time()`** static method starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call {{domxref("console/timeEnd_static", "console.timeEnd()")}} with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

See [Timers](/en-US/docs/Web/API/console#timers) in the {{domxref("console")}} documentation for details and examples.

## Syntax

```js-nolint
time()
time(label)
```

### Parameters

- `label` {{optional_inline}}
  - : A string representing the name to give the new timer. This will identify the timer; use the same name when calling {{domxref("console/timeEnd_static", "console.timeEnd()")}} to stop the timer and get the time output to the console. If omitted, the label `"default"` is used.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
- {{domxref("console/timeLog_static", "console.timeLog()")}}
- [Microsoft Edge's documentation for `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#time)
- [Node.JS documentation for `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome's documentation for `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
