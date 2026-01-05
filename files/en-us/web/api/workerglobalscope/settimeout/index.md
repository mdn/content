---
title: "WorkerGlobalScope: setTimeout() method"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
page-type: web-api-instance-method
browser-compat: api.setTimeout
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> When the `code` parameter is used, this method dynamically executes its value as JavaScript.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by always assigning {{domxref("TrustedScript")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](/en-US/docs/Web/API/Window/setTimeout#security_considerations) in `Window.setTimeout()` for more information.

The **`setTimeout()`** method of the {{domxref("WorkerGlobalScope")}} interface sets a timer which executes a function or specified piece of code once the timer expires.

## Syntax

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(func)
setTimeout(func, delay)
setTimeout(func, delay, param1)
setTimeout(func, delay, param1, param2)
setTimeout(func, delay, param1, param2, /* …, */ paramN)
```

### Parameters

- `func`
  - : A {{jsxref("function")}} to be executed after the timer expires.
- `code`
  - : A {{domxref("TrustedScript")}} or a string of arbitrary code that is compiled and executed every `delay` milliseconds.
    This can be used instead of passing a function, but is _strongly discouraged_ for the same reasons that make using {{jsxref("Global_Objects/eval", "eval()")}} a security risk.
- `delay` {{optional_inline}}
  - : The time that the timer should wait before the specified function or code is executed, in milliseconds.
    Defaults to 0 if not specified.

    Note:
    - The delay has a maximum value of 2147483647 ms — specifying larger values may result in overflow or a 0 value being used.
      See [maximum delay value](/en-US/docs/Web/API/Window/setTimeout#maximum_delay_value) for more information.
    - The actual delay may be longer than set.
      For example, setting `delay` to 0 will execute in the next event cycle rather than "immediately".
      See [Reasons for longer delays than specified](/en-US/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) for more information.
    - If the value isn't a number, implicit [type coercion](/en-US/docs/Glossary/Type_coercion) is silently done on the value to convert it to a number.
      This can lead to unexpected and surprising results — see [Non-number delay values are silently coerced into numbers](/en-US/docs/Web/API/Window/setTimeout#non-number_delay_values_are_silently_coerced_into_numbers) for an example.

- `param1`, …, `paramN` {{optional_inline}}
  - : Additional arguments which are passed through to the function specified by `func`.

### Return value

A positive integer (typically within the range of 1 to 2,147,483,647) that uniquely identifies the timer created by the call.
This identifier, often referred to as a "timeout ID", can be passed to {{domxref("Window.clearTimeout","clearTimeout()")}} to cancel the timer.

Within the same global environment (e.g., a specific window or worker) the timeout ID is guaranteed not to be reused for any new timer as long as the original timer remains active.
However, separate global environments maintain their own independent pools of timer IDs.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : The `code` can't be parsed as a script.
- {{jsxref("TypeError")}}
  - : Thrown if the `code` parameter is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    It is also thrown if the first parameter is not one of the supported types: a function, string or `TrustedScript`.

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
