---
title: "Window: setInterval() method"
short-title: setInterval()
slug: Web/API/Window/setInterval
page-type: web-api-instance-method
browser-compat: api.setInterval
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> This method dynamically executes input passed to the `code` parameter as JavaScript.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by always assigning {{domxref("TrustedScript")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`setInterval()`** method of the {{domxref("Window")}} interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

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
    This can be used instead of passing a function, but is _highly discommended_ for the same reasons that make using {{jsxref("Global_Objects/eval", "eval()")}} a security risk.
- `delay` {{optional_inline}}
  - : The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
    Defaults to 0 if not specified.
    See [Delay restrictions](#delay_restrictions) below for details on the permitted range of `delay` values.
- `arg1`, …, `argN` {{optional_inline}}
  - : Additional arguments which are passed through to the function specified by _func_ once the timer expires.

### Return value

A positive integer (typically within the range of 1 to 2,147,483,647) that uniquely identifies the interval timer created by the call.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : The `code` can't be parsed as a script.
- {{jsxref("TypeError")}}
  - : Thrown if the `code` parameter is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    It is also thrown if the first parameter is not one of the supported types: a function, string or `TrustedScript`.

## Description

The `setInterval()` function is commonly used to set a delay for functions that are executed again and again, such as animations.
You can cancel the interval using {{domxref("Window.clearInterval", "clearInterval()")}}.

If you wish to have your function called _once_ after the specified delay, use {{domxref("Window.setTimeout", "setTimeout()")}}.

### Delay restrictions

It's possible for intervals to be nested; that is, the callback for `setInterval()` can in turn call `setInterval()` to start another interval running, even though the first one is still going.
To mitigate the potential impact this can have on performance, once intervals are nested beyond five levels deep, the browser will automatically enforce a 4 ms minimum value for the interval.
Attempts to specify a value less than 4 ms in deeply-nested calls to `setInterval()` will be pinned to 4 ms.

Browsers may enforce even more stringent minimum values for the interval under some circumstances, although these should not be common.
Note also that the actual amount of time that elapses between calls to the callback may be longer than the given `delay`; see [Reasons for delays longer than specified](/en-US/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) for examples.

> [!NOTE]
> The `delay` argument is converted to a signed 32-bit integer.
> This effectively limits `delay` to 2147483647 ms, roughly 24.8 days, since it's specified as a signed integer in the IDL.

### Interval IDs are shared with `setTimeout()`

The method returns an identifier that uniquely identifies the interval timer created by the call.
This identifier, which is often referred to as an "interval ID", can be passed to {{domxref("Window.clearInterval", "clearInterval()")}} to stop the repeated execution of the specified function.

Within the same global environment (e.g., a particular window or worker), the interval ID is ensured to remain unique and is not reused for any new interval timer as long as the original timer is still active.
However, different global environments maintain their own independent pools of interval IDs.

Be aware that `setInterval()` and {{domxref("Window.setTimeout", "setTimeout()")}} share the same pool of IDs, and that `clearInterval()` and {{domxref("Window.clearTimeout", "clearTimeout()")}} can technically be used interchangeably.
For clarity, however, you should try to always match them to avoid confusion when maintaining your code.

### Ensure that execution duration is shorter than interval frequency

If there is a possibility that your logic could take longer to execute than the interval time, it is recommended that you recursively call a named function using {{domxref("Window.setTimeout", "setTimeout()")}}.
For example, if using `setInterval()` to poll a remote server every 5 seconds, network latency, an unresponsive server, and a host of other issues could prevent the request from completing in its allotted time.
As such, you may find yourself with queued up XHR requests that won't necessarily return in order.

In these cases, a recursive `setTimeout()` pattern is preferred:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

In the above snippet, a named function `loop()` is declared and is immediately executed.
`loop()` is recursively called inside `setTimeout()` after the logic has completed executing.
While this pattern does not guarantee execution on a fixed interval, it does guarantee that the previous interval has completed before recursing.

### Functions are called with the global `this`

Methods or functions passed to `setInterval()` do not run in the same execution context as `setInterval()`, and hence do not have the same [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) as the function that called `setInterval()`.
Instead the called function has a `this` keyword set to the `window` (or `global`) object.
This problem is explained in detail in the [JavaScript reference](/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks).

The following example demonstrates how this can cause unexpected behavior (using `setTimeout()` instead of `setInterval()`, but the problem applies to both timers):

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // Alerts "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // Alerts "undefined" after 1.5 seconds
```

You can use [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) to adopt the `this` of the function in which `setTimeout()` is called (arrow functions have a lexical `this`).

You can test this with the following code.

```js
setTimeout(() => myArray.myMethod(), 1000); // Alert "zero,one,two" after 1 second
setTimeout(() => myArray.myMethod(1), 1500); // Alert "one" after 1.5 seconds
setTimeout(() => myArray.myMethod(2), 3000); // Alert "one" after 3 seconds
```

You might also use the [`Function.prototype.bind()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method, which lets you specify the value that should be used as `this` for all calls to a given function.
That lets you bypass problems where it's unclear what `this` will be, depending on the context from which your function was called.

### Security considerations

When used with the function parameter, the method is no more or less dangerous than any other method that can trigger code execution.
While specific mechanisms are not required to address this case, you should always consider deploying a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) to harden your site.

The method can also execute arbitrary input passed in the `code` parameter.
If the input is a potentially unsafe string provided by a user, this is a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
For example, the following example assumes the `scriptElement` is an executable `<script>` element, and that `untrustedCode` was provided by a user:

```js
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

Websites with a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) will prevent such code running by default; if you need to use the method with `code` then you will first need to allow the [`unsafe-eval`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in your CSP [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

If you must allow the scripts to run you can mitigate these issues by always assigning {{domxref("TrustedScript")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) or reject the text before it is injected.

The behavior of the transformation function will depend on the specific use case that requires a user provided script.
If possible you should lock the allowed scripts to exactly the code that you trust to run.
If that is not possible, you might allow or block the use of certain functions within the provided string.

## Examples

### Example 1: Basic syntax

The following example demonstrates `setInterval()`'s basic syntax.

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
```

### Example 2: Alternating two colors

The following example calls the `flashtext()` function once a second until
the Stop button is pressed.

#### HTML

```html
<div id="my_box">
  <h3>Hello World</h3>
</div>
<button id="start">Start</button>
<button id="stop">Stop</button>
```

#### CSS

```css
.go {
  color: green;
}
.stop {
  color: red;
}
```

#### JavaScript

```js
// variable to store our intervalID
let intervalId;

function changeColor() {
  // check if an interval has already been set up
  intervalId ??= setInterval(flashText, 1000);
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(intervalId);
  // release our intervalId from the variable
  intervalId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

#### Result

{{EmbedLiveSample("Example_2:_Alternating_two_colors")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `setInterval` which allows passing arguments to the callback in `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("Window.setTimeout()")}}
- {{domxref("Window.requestAnimationFrame()")}}
