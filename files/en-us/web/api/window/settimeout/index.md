---
title: "Window: setTimeout() method"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
page-type: web-api-instance-method
browser-compat: api.setTimeout
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> When the `code` parameter is used, this method dynamically executes its value as JavaScript.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by always assigning {{domxref("TrustedScript")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`setTimeout()`** method of the {{domxref("Window")}} interface sets a timer which executes a function or specified piece of code once the timer expires.

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
      See [maximum delay value](#maximum_delay_value) below for more information.
    - The actual delay may be longer than set.
      For example, setting `delay` to 0 will execute in the next event cycle rather than "immediately".
      See [Reasons for longer delays than specified](#reasons_for_longer_delays_than_specified) for more information.
    - If the value isn't a number, implicit [type coercion](/en-US/docs/Glossary/Type_coercion) is silently done on the value to convert it to a number.
      This can lead to unexpected and surprising results — see [Non-number delay values are silently coerced into numbers](#non-number_delay_values_are_silently_coerced_into_numbers) for an example.

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

The `setTimeout()` function is commonly used to call a function that is executed just once, after a delay.
The timeout can be cancelled before it completes using {{domxref("Window.clearTimeout()")}}.

If you wish to call a function repeatedly (e.g., every _N_ milliseconds), you can use {{domxref("Window.setInterval", "setInterval()")}}.

### Working with asynchronous functions

`setTimeout()` is an asynchronous function, meaning that it completes immediately, and does not block the execution of the following code.
In other words, you cannot use `setTimeout()` to create a "pause" before the next line is executed.

See the following example:

```js
setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message
```

Notice that the first function does not create a 5-second "pause" before calling the second function.
Instead, the first function is called, but waits 5 seconds to execute.
While the first function is waiting to execute, the second function is called, and a 3-second wait is applied to the second function before it executes.
Since neither the first nor the second function's timers have completed, the third function is called and completes its execution first.
Then the second follows.
Then finally the first function is executed after its timer finally completes.

To create a progression in which one function only fires after the completion of another function, see the documentation on [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Functions are called with the global `this`

Methods or functions passed to `setTimeout()` do not run in the same execution context as `setTimeout()`, and hence do not have the same [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) as the function that called `setTimeout()`.
Instead the called function has a `this` keyword set to the `window` (or `global`) object.
This problem is explained in detail in the [JavaScript reference](/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks).

The following example demonstrates how this can cause unexpected behavior:

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
That lets you bypass problems where it's unclear what `this` will be, depending on the context from which your function was called:

```js
const myArray = ["zero", "one", "two"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1.0 * 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // prints "one" after 1.5 seconds
```

### Non-number delay values are silently coerced into numbers

If `setTimeout()` is called with [_delay_](#delay) value that's not a number, implicit [type coercion](/en-US/docs/Glossary/Type_coercion) is silently done on the value to convert it to a number.
For example, the following code incorrectly uses the string `"1000"` for the _delay_ value, rather than the number `1000` – but it nevertheless works, because when the code runs, the string is coerced into the number `1000`, and so the code executes 1 second later.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In many cases, the implicit type coercion can lead to unexpected and surprising results.
For example, when the following code runs, the string `"1 second"` ultimately gets coerced into the number `0` — and so, the code executes with zero delay.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Therefore, don't use strings for the _delay_ value but instead always use numbers:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Maximum delay value

The `delay` argument is converted to a signed 32-bit integer, which limits the value to 2147483647 ms, or roughly 24.8 days.
Delays of more than this value will cause an integer overflow.
So for example, this code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…results in the timeout being executed immediately (since `2**32 - 5000` overflows to a negative number), while the following code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…results in the timeout being executed after approximately 5 seconds.

> [!NOTE]
> In Node.js, any timeout larger than 2,147,483,647 ms results in immediate execution.

### Reasons for longer delays than specified

There are a number of reasons why a timeout may take longer to fire than anticipated.
This section describes the most common reasons.

#### Nested timeouts

As specified in the [HTML standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers), browsers will enforce a minimum timeout of 4 milliseconds once a nested call to `setTimeout` has been scheduled 5 times.

This can be seen in the following example, in which we nest a call to `setTimeout` with a delay of `0` milliseconds, and log the delay each time the handler is called.
The first four times, the delay is approximately 0 milliseconds, and after that it is approximately 4 milliseconds:

```html
<button id="run">Run</button>
<table>
  <thead>
    <tr>
      <th>Previous</th>
      <th>This</th>
      <th>Actual delay</th>
    </tr>
  </thead>
  <tbody id="log"></tbody>
</table>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // log the time of this call
  log(new Date().getMilliseconds());
  // if we are not finished, schedule the next call
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // clear the log
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // initialize iteration count and the starting timestamp
  iterations = 10;
  last = new Date().getMilliseconds();
  // start timer
  setTimeout(timeout, 0);
}

function log(now) {
  // log the last timestamp, the new timestamp, and the difference
  const tableBody = document.getElementById("log");
  const logRow = tableBody.insertRow();
  logRow.insertCell().textContent = last;
  logRow.insertCell().textContent = now;
  logRow.insertCell().textContent = now - last;
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

```css hidden
* {
  font-family: monospace;
}
th,
td {
  padding: 0 10px;
  text-align: center;
  border: 1px solid;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
}
```

{{EmbedLiveSample("Nested_timeouts", 100, 250)}}

#### Timeouts in inactive tabs

To reduce the load (and associated battery usage) from background tabs, browsers will enforce a minimum timeout delay in inactive tabs.
It may also be waived if a page is playing sound using a Web Audio API {{domxref("AudioContext")}}.

The specifics of this are browser-dependent:

- Firefox Desktop has a minimum timeout of 1 second for inactive tabs.
- Firefox for Android has a minimum timeout of 15 minutes for inactive tabs and may unload them entirely.
- Firefox does not throttle inactive tabs if the tab contains an {{domxref("AudioContext")}}.
- Chrome uses different levels of throttling depending on the tab activity:
  - **Minimal throttling**: Applies to timers when the page is visible, has made sound recently, or is otherwise considered active by Chrome. Timers run close to the requested interval.

  - **Throttling**: Applies to timers when minimal throttle conditions are not met and any of these conditions are true:
    - Nesting count (i.e., number of chained timer calls) is lower than 5.
    - Page has been invisible for less than 5 minutes.
    - WebRTC is active.

  Timers in this state are checked once per second, which may be batched together with other timers that have similar timeouts.
  - **Intensive throttling**: Introduced in Chrome 88 (January 2021). Applies to timers when neither minimal throttling nor throttling conditions are met, and all of the following conditions are met:
    - Nesting count is 5 or higher.
    - Page has been invisible for more than 5 minutes.
    - Page has been silent for more than 30 seconds.
    - WebRTC is inactive.

  Timers in this state are checked once per minute, which may be batched together with other timers that have similar timeouts.

#### Throttling of tracking scripts

Firefox enforces additional throttling for scripts that it recognizes as tracking scripts.
When running in the foreground, the throttling minimum delay is still 4ms. In background tabs, however, the throttling minimum delay is 10,000 ms, or 10 seconds, which comes into effect 30 seconds after a document has first loaded.

See [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection) for more details.

#### Late timeouts

The timeout can also fire later than expected if the page (or the OS/browser) is busy with other tasks.
One important case to note is that the function or code snippet cannot be executed until the thread that called `setTimeout()` has terminated.
For example:

```js
function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 0);
console.log("After setTimeout");
```

Will write to the console:

```plain
After setTimeout
foo has been called
```

This is because even though `setTimeout` was called with a delay of zero, it's placed on a queue and scheduled to run at the next opportunity; not immediately.
Currently-executing code must complete before functions on the queue are executed, thus the resulting execution order may not be as expected.

#### Deferral of timeouts during pageload

Firefox will defer firing `setTimeout()` timers while the current tab is loading. Firing is deferred until the main thread is deemed idle (similar to {{domxref("Window.requestIdleCallback()")}}), or until the load event is fired.

### WebExtension background pages and timers

In [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions), `setTimeout()` does not work reliably. Extension authors should use the [`alarms`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API instead.

### Security considerations

The method can be used to execute arbitrary input passed in the `code` parameter.
If the input is a potentially unsafe string provided by a user, this is a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

For example, the following code shows how `setTimeout()` might execute `untrustedCode` provided by a user:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites with a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that specifies [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) will prevent such code running by default.
You can specify [`unsafe-eval`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in your CSP to allow `setTimeout()` to execute, but this is unsafe as it disables one of the main protections of CSP.

If you must allow the scripts to run via `setTimeout()` you can mitigate these issues by always assigning {{domxref("TrustedScript")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function.

To allow `setTimeout()` to run, you will additionally need to specify the [`trusted-types-eval` keyword](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in your CSP `script-src` directive.
This acts in the same way as `unsafe-eval`, but _only_ allows the method to evaluate if trusted types are enabled (if you were to use `unsafe-eval` it would allow execution even on browsers that do not support trusted types).

For example, the required CSP for your site might look like this:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

The behavior of the transformation function will depend on the specific use case that requires a user provided script.
If possible you should lock the allowed scripts to exactly the code that you trust to run.
If that is not possible, you might allow or block the use of certain functions within the provided string.

## Examples

Note that these examples omit the use of trusted types for brevity.
See [Using `TrustedScript`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` for code showing the expected approach.

### Setting and clearing timeouts

The following example sets up two simple buttons in a web page and hooks them to the `setTimeout()` and `clearTimeout()` routines.
Pressing the first button will set a timeout which shows a message after two seconds and stores the timeout id for use by `clearTimeout()`.
You may optionally cancel this timeout by pressing on the second button.

#### HTML

```html
<button id="show">Show a message after two seconds</button>
<button id="cancel">Cancel message before it happens</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "That was really slow!");
}

function clearMessage() {
  clearTimeout(timeoutID);
}

document.getElementById("show").addEventListener("click", delayedMessage);
document.getElementById("cancel").addEventListener("click", clearMessage);
```

```css hidden
#output {
  padding: 0.5rem 0;
}
```

#### Result

{{EmbedLiveSample('Setting_and_clearing_timeouts')}}

See also the {{domxref("Window.clearTimeout", "clearTimeout()")}} example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `setTimeout` which allows passing arguments to the callback in `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("Window.setInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("Window.queueMicrotask()")}}
