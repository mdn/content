---
title: console.timeLog()
slug: Web/API/console/timeLog
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.timeLog
---
{{APIRef("Console API")}}

The **`console.timeLog()`** method logs the current value of a timer that was previously started by calling
{{domxref("console.time()")}} to the console.

See [Timers](/en-US/docs/Web/API/console#timers) in the documentation for
details and examples.

{{AvailableInWorkers}}

## Syntax

```js
timeLog(label)
```

### Parameters

- `label`
  - : The name of the timer to log to the console.

### Return value

If no label parameter included:

```
default: 1042ms
```

If an existing `label` is included:

```
timer name: 1242ms
```

### Exceptions

If there is no running timer, `timeLog()` returns the warning:

```
Timer "default" doesn't exist.
```

If a label parameter is included, but there is no corresponding timer:

```
Timer "timer name" doesn't exist.
```

## Examples

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

The output from the example above shows the time taken by the user to dismiss the first
alert box, followed by the time it took for the user to dismiss the second alert:

![](timer_output.png)

Notice that the timer's name is displayed when the timer value is logged using
`timeLog()` and again when it's stopped. In addition, the call to timeEnd()
has the additional information, "timer ended" to make it obvious that the timer is no
longer tracking time.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
