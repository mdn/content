---
title: "WorkerGlobalScope: setInterval() method"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
page-type: web-api-instance-method
browser-compat: api.setInterval
---

{{APIRef("HTML DOM")}} {{AvailableInWorkers("window_and_worker")}}

> [!WARNING]
> When the `code` parameter is used, this method dynamically executes its value as JavaScript.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by always assigning {{domxref("TrustedScript")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](/en-US/docs/Web/API/Window/setInterval#security_considerations) in `Window.setInterval()` for more information.

The **`setInterval()`** method of the {{domxref("WorkerGlobalScope")}} interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

It is commonly used to set a delay for functions that are executed again and again, such as animations.
You can cancel the interval using {{domxref("WorkerGlobalScope.clearInterval", "clearInterval()")}}.
See {{domxref("Window.setInterval()")}} for more information.

Note that if you wish to have your function called _once_ after the specified delay, use {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}}.

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
  - : A {{jsxref("function")}} to be executed every `delay` milliseconds.
    The first execution happens after `delay` milliseconds.
- `code`
  - : A {{domxref("TrustedScript")}} or a string of arbitrary code that is compiled and executed every `delay` milliseconds.
    This can be used instead of passing a function, but is _strongly discouraged_ for the same reasons that make using {{jsxref("Global_Objects/eval", "eval()")}} a security risk.
- `delay` {{optional_inline}}
  - : The delay time between executions of the specified function or code, in milliseconds.
    Defaults to 0 if not specified.
    See [Delay restrictions](/en-US/docs/Web/API/Window/setInterval#delay_restrictions) in `Window.setInterval` for details on the permitted range of `delay` values.
- `arg1`, …, `argN` {{optional_inline}}
  - : Additional arguments which are passed through to the function specified by _func_ once the timer expires.

### Return value

A positive integer (typically within the range of 1 to 2,147,483,647) that uniquely identifies the interval timer created by the call.

This identifier, often referred to as an "interval ID", can be passed to {{domxref("WorkerGlobalScope.clearInterval", "clearInterval()")}} to stop the repeated execution of the specified function.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : The `code` can't be parsed as a script.
- {{jsxref("TypeError")}}
  - : Thrown if the `code` parameter is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    It is also thrown if the first parameter is not one of the supported types: a function, string or `TrustedScript`.

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
