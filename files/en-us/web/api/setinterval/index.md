---
title: setInterval() global function
short-title: setInterval()
slug: Web/API/setInterval
page-type: web-api-global-function
browser-compat: api.setInterval
---

{{APIRef("HTML DOM")}}

The **`setInterval()`** method, offered on the {{domxref("Window")}} and {{domxref("Worker")}} interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling {{domxref("clearInterval", "clearInterval()")}}.

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
    See [Delay restrictions](#delay_restrictions) below for details on the permitted range of `delay` values.
- `arg1`, …,`argN` {{optional_inline}}
  - : Additional arguments which are passed through to the function specified by _func_ once the timer expires.

### Return value

The returned `intervalID` is a numeric, non-zero value which identifies the timer created by the call to `setInterval()`; this value can be passed to {{domxref("clearInterval()")}} to cancel the interval.

It may be helpful to be aware that `setInterval()` and {{domxref("setTimeout()")}} share the same pool of IDs, and that `clearInterval()` and {{domxref("clearTimeout", "clearTimeout()")}} can technically be used interchangeably.
For clarity, however, you should try to always match them to avoid confusion when maintaining your code.

> **Note:** The `delay` argument is converted to a signed 32-bit integer.
> This effectively limits `delay` to 2147483647 ms, since it's specified as a signed integer in the IDL.

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
let nIntervId;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

#### Result

{{EmbedLiveSample("Example_2:_Alternating_two_colors")}}

See also: [`clearInterval()`](/en-US/docs/Web/API/clearInterval).

## The "this" problem

When you pass a method to `setInterval()` or any other function, it is invoked with the wrong [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) value.
This problem is explained in detail in the [JavaScript reference](/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks).

### Explanation

Code executed by `setInterval()` runs in a separate execution context than
the function from which it was called. As a consequence, the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)
keyword for the called function is set to the `window` (or
`global`) object, it is not the same as the `this` value for the
function that called `setTimeout`. See the following example (which uses
`setTimeout()` instead of `setInterval()` – the problem, in fact,
is the same for both timers):

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1,5 seconds

// Passing the 'this' object with .call won't work
// because this will change the value of this inside setTimeout itself
// while we want to change the value of this inside myArray.myMethod.
// In fact, it will be an error because setTimeout code expects this to be the window object:
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

As you can see there are no ways to pass the `this` object to the callback
function in the legacy JavaScript.

### A possible solution

All modern JavaScript runtimes (in browsers and elsewhere) support [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), with lexical `this` — allowing us to write `setInterval(() => this.myMethod())` if we're inside the `myArray` method.

If you need to support IE, use the [`Function.prototype.bind()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method, which lets you specify the value that should be used as `this` for all calls to a given function. That lets you easily bypass problems where it's unclear what `this` will be, depending on the context from which your function was called.

## Usage notes

The `setInterval()` function is commonly used to set a delay for functions
that are executed again and again, such as animations. You can cancel the interval using
{{domxref("clearInterval()")}}.

If you wish to have your function called _once_ after the specified delay, use
{{domxref("setTimeout()")}}.

### Delay restrictions

It's possible for intervals to be nested; that is, the callback for
`setInterval()` can in turn call `setInterval()` to start another
interval running, even though the first one is still going. To mitigate the potential
impact this can have on performance, once intervals are nested beyond five levels deep,
the browser will automatically enforce a 4 ms minimum value for the interval. Attempts
to specify a value less than 4 ms in deeply-nested calls to `setInterval()`
will be pinned to 4 ms.

Browsers may enforce even more stringent minimum values for the interval under some
circumstances, although these should not be common. Note also that the actual amount of
time that elapses between calls to the callback may be longer than the given
`delay`; see
[Reasons for delays longer than specified](/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) for examples.

### Ensure that execution duration is shorter than interval frequency

If there is a possibility that your logic could take longer to execute than the
interval time, it is recommended that you recursively call a named function using
{{domxref("setTimeout()")}}. For example, if
using `setInterval()` to poll a remote server every 5 seconds, network
latency, an unresponsive server, and a host of other issues could prevent the request
from completing in its allotted time. As such, you may find yourself with queued up XHR
requests that won't necessarily return in order.

In these cases, a recursive `setTimeout()` pattern is preferred:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

In the above snippet, a named function `loop()` is declared and is
immediately executed. `loop()` is recursively called inside
`setTimeout()` after the logic has completed executing. While this pattern
does not guarantee execution on a fixed interval, it does guarantee that the previous
interval has completed before recursing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `setInterval` which allows passing arguments to the callback in `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("setTimeout")}}
- {{domxref("clearTimeout")}}
- {{domxref("clearInterval")}}
- {{domxref("window.requestAnimationFrame")}}
