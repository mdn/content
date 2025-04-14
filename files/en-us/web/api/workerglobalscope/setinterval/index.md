---
title: "WorkerGlobalScope: setInterval() method"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
page-type: web-api-instance-method
browser-compat: api.setInterval
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

The **`setInterval()`** method of the {{domxref("WorkerGlobalScope")}} interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

This method is also available in window contexts: for a detailed description of `setInterval()`, see the {{domxref("Window.setInterval()")}} page.

## Syntax

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …, */ argN)
```

### Parameters

- `func`
  - : A {{jsxref("function")}} to be executed every `delay` milliseconds. The first execution happens after `delay` milliseconds.
- `code`
  - : An optional syntax allows you to include a string instead of a function, which is compiled and executed every `delay` milliseconds.
    This syntax is _not recommended_ for the same reasons that make using {{jsxref("Global_Objects/eval", "eval()")}} a security risk.
- `delay` {{optional_inline}}
  - : The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. Defaults to 0 if not specified.
    See [Delay restrictions](/en-US/docs/Web/API/Window/setInterval#delay_restrictions) for details on the permitted range of `delay` values.
- `arg1`, …, `argN` {{optional_inline}}
  - : Additional arguments which are passed through to the function specified by _func_ once the timer expires.

### Return value

The `setInterval()` method returns a positive integer (typically within the range of 1 to 2,147,483,647) that uniquely identifies the interval timer created by the call. This identifier, often referred to as an "interval ID", can be passed to {{domxref("Window.clearInterval", "clearInterval()")}} to stop the repeated execution of the specified function.

Within the same global environment (e.g., a particular window or worker), the interval ID is ensured to remain unique and is not reused for any new interval timer as long as the original timer is still active. However, different global environments maintain their own independent pools of interval IDs.

Be aware that `setInterval()` and {{domxref("Window.setTimeout", "setTimeout()")}} share the same pool of IDs, and that `clearInterval()` and {{domxref("Window.clearTimeout", "clearTimeout()")}} can technically be used interchangeably.
For clarity, however, you should try to always match them to avoid confusion when maintaining your code.

> [!NOTE]
> The `delay` argument is converted to a signed 32-bit integer.
> This effectively limits `delay` to 2147483647 ms, roughly 24.8 days, since it's specified as a signed integer in the IDL.

## Examples

See {{domxref("Window.setInterval", "setInterval()")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `setInterval` which allows passing arguments to the callback in `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.setInterval()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
