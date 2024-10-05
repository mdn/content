---
title: "WorkerGlobalScope: setTimeout() method"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
page-type: web-api-instance-method
browser-compat: api.setTimeout
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

The **`setTimeout()`** method of the {{domxref("WorkerGlobalScope")}} interface sets a timer which executes a function or specified piece of code once the timer expires.

## Syntax

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```

### Parameters

- `functionRef`
  - : A {{jsxref("function")}} to be executed after the timer expires.
- `code`
  - : An alternative syntax that allows you to include a string instead of a function,
    which is compiled and executed when the timer expires. This syntax is **not
    recommended** for the same reasons that make using
    {{jsxref("Global_Objects/eval", "eval()")}} a security risk.
- `delay` {{optional_inline}}

  - : The time, in milliseconds that the timer should wait before
    the specified function or code is executed. If this parameter is omitted, a value of 0
    is used, meaning execute "immediately", or more accurately, the next event cycle.

    Note that in either case, the actual delay may be longer than intended; see [Reasons for delays longer than specified](/en-US/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified).

    Also note that if the value isn't a number, implicit {{glossary("type coercion")}} is silently done on the value to convert it to a number — which can lead to unexpected and surprising results; see [Non-number delay values are silently coerced into numbers](/en-US/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers) for an example.

- `param1`, …, `paramN` {{optional_inline}}

  - : Additional arguments which are passed through to the function specified by `functionRef`.

### Return value

The returned `timeoutID` is a positive integer value which
identifies the timer created by the call to `setTimeout()`. This value can be
passed to {{domxref("WorkerGlobalScope.clearTimeout","clearTimeout()")}} to
cancel the timeout.

It is guaranteed that a `timeoutID` value will never be reused by a subsequent call to `setTimeout()` or `setInterval()` on the same worker while the timer is still active. However, different objects use separate pools of IDs.

## Description

See {{domxref("Window.setTimeout()")}} for detailed descriptions.

## Examples

See {{domxref("Window.setTimeout()")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `setTimeout` which allows passing arguments to the callback in `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("WorkerGlobalScope.queueMicrotask()")}}
