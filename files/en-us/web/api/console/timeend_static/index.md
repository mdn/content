---
title: "console: timeEnd() static method"
short-title: timeEnd()
slug: Web/API/console/timeend_static
page-type: web-api-instance-method
browser-compat: api.console.timeEnd_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.timeEnd()`** static method stops a timer that was previously started by calling {{domxref("console/time_static", "console.time()")}}.

See [Timers](/en-US/docs/Web/API/console#timers) in the documentation for details and examples.

## Syntax

```js-nolint
timeEnd()
timeEnd(label)
```

### Parameters

- `label` {{optional_inline}}
  - : A string representing the name of the timer to stop. Once stopped, the elapsed time is automatically displayed in the console along with an indicator that the time has ended. If omitted, the label "default" is used.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

The output from the example above shows the time taken by the user to dismiss the first alert box, followed by the cumulative time it took for the user to dismiss both alerts:

![Timer output in Firefox console](timer_output.png)

Notice that the timer's name is displayed when the timer value is logged using `console.timeLog()` and again when it's stopped. In addition, the call to `console.timeEnd()` has the additional information, "timer ended" to make it obvious that the timer is no
longer tracking time.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeLog_static", "console.timeLog()")}}
- [Microsoft Edge's documentation for `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#timeend)
- [Node.JS documentation for `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Google Chrome's documentation for `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
