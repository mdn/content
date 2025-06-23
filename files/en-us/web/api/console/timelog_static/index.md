---
title: "console: timeLog() static method"
short-title: timeLog()
slug: Web/API/console/timeLog_static
page-type: web-api-static-method
browser-compat: api.console.timeLog_static
---

{{APIRef("Console API")}}{{AvailableInWorkers}}

The **`console.timeLog()`** static method logs the current value of a timer that was previously started by calling {{domxref("console/time_static", "console.time()")}}.

## Syntax

```js-nolint
console.timeLog()
console.timeLog(label)
console.timeLog(label, val1)
console.timeLog(label, val1, /* …, */ valN)
```

### Parameters

- `label` {{optional_inline}}
  - : The name of the timer to log to the console. If this is omitted the label "default" is used.
- `valN` {{optional_inline}}
  - : Additional values to be logged to the console after the timer output.

### Return value

None ({{jsxref("undefined")}}).

## Description

The `console.timeLog()` method logs the current value of a timer.

The method can be passed the name of a timer. This will attempt to log the value of a timer created with that name in a previous call to {{domxref("console/time_static", "console.time()")}}:

```js
console.time("reticulating splines");
reticulateSplines();
console.timeLog("reticulating splines");
// reticulating splines: 650ms
```

If the timer name is omitted, then the timer is named `"default"`:

```js
console.time();
reticulateSplines();
console.timeLog();
// default: 780ms
```

```js
console.time("default");
reticulateSplines();
console.timeLog();
// default: 780ms
```

If there is no corresponding timer, `console.timeLog()` logs a warning like:

```plain
Timer "timer name" doesn't exist.
```

You can log additional values to the console after the timer output:

```js
console.time();
reticulateSplines();
console.timeLog("default", "Hello", "world");
// default: 780ms Hello world
```

See [Timers](/en-US/docs/Web/API/console#timers) in the documentation for more details and examples.

## Examples

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

The output from the example above shows the time taken by the user to dismiss the first alert box, followed by the cumulative time it took for the user to dismiss both alerts:

```plain
answer time: 2542ms debugger eval code:3:9
answer time: 4161ms - timer ended
```

Notice that the timer's name is displayed when the timer value is logged using `console.timeLog()` and again when it's stopped. In addition, the call to `console.timeEnd()` has the additional information, "timer ended" to make it obvious that the timer is no longer tracking time.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/time_static", "console.time()")}}
- See {{domxref("console/timeEnd_static", "console.timeEnd()")}} for additional examples
- [Node.js documentation for `console.timeLog()`](https://nodejs.org/docs/latest/api/console.html#consoletimeloglabel-data)
