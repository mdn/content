---
title: console.timeEnd()
slug: Web/API/console/timeEnd
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - console
  - web console
browser-compat: api.console.timeEnd
---
{{APIRef("Console API")}}

The **`console.timeEnd()`** stops a timer that was previously started by calling {{domxref("console.time()")}}.

See [Timers](/en-US/docs/Web/API/console#timers) in the documentation for
details and examples.

{{AvailableInWorkers}}

## Syntax

```js
timeEnd(label)
```

### Parameters

- `label`
  - : The name of the timer to stop. Once stopped, the elapsed time is automatically
    displayed in the [Web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) along
    with an indicator that the time has ended.

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
