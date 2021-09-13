---
title: setInterval()
slug: Web/API/setInterval
tags:
  - API
  - Gecko
  - HTML DOM
  - Intervals
  - JavaScript timers
  - MakeBrowserAgnostic
  - Method
  - NeedsMarkupWork
  - Timers
  - setInterval
  - Polyfill
browser-compat: api.setInterval
---
{{APIRef("HTML DOM")}}

The **`setInterval()`** method,
offered on the {{domxref("Window")}} and {{domxref("Worker")}} interfaces, repeatedly
calls a function or executes a code snippet, with a fixed time delay between each
call.

This method returns an interval ID which uniquely identifies the interval, so you
can remove it later by calling {{domxref("clearInterval",
  "clearInterval()")}}.

## Syntax

```js
var intervalID = setInterval(func, [delay, arg1, arg2, ...]);
var intervalID = setInterval(function[, delay]);
var intervalID = setInterval(code, [delay]);
```

### Parameters

- `func`
  - : A {{jsxref("function")}} to be executed every `delay` milliseconds. The first execution happens after `delay` milliseconds.
- `code`
  - : An optional syntax allows you to include a string instead of a function, which is
    compiled and executed every `delay` milliseconds. This syntax is _not
    recommended_ for the same reasons that make using {{jsxref("Global_Objects/eval", "eval()")}} a
    security risk.
- `delay`{{optional_inline}}
  - : The time, in milliseconds (thousandths of a second), the timer should delay in
    between executions of the specified function or code. See {{anch("Delay restrictions")}}
    below for details on the permitted range of `delay` values.
- `arg1, ..., argN` {{optional_inline}}
  - : Additional arguments which are passed through to the function specified by
    _func_ once the timer expires.

> **Note:** Passing additional arguments to `setInterval()` in
> the first syntax does not work in Internet Explorer 9 and earlier. If you want to
> enable this functionality on that browser, you must use a polyfill (see the [Callback arguments](#callback_arguments) section).

### Return value

The returned `intervalID` is a numeric, non-zero value which identifies the
timer created by the call to `setInterval()`; this value can be passed to
{{domxref("clearInterval()")}} to cancel the interval.

It may be helpful to be aware that `setInterval()` and
{{domxref("setTimeout()")}} share the same pool
of IDs, and that `clearInterval()` and
{{domxref("clearTimeout", "clearTimeout()")}} can technically
be used interchangeably. For clarity, however, you should try to always match them to
avoid confusion when maintaining your code.

> **Note:** The `delay` argument is converted to a
> signed 32-bit integer. This effectively limits `delay` to 2147483647 ms,
> since it's specified as a signed integer in the IDL.

## Examples

### Example 1: Basic syntax

The following example demonstrates `setInterval()`'s basic syntax.

```js
var intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{
 // Your code here
 // Parameters are purely optional.
 console.log(a);
 console.log(b);
}
```

### Example 2: Alternating two colors

The following example calls the `flashtext()` function once a second until
the Stop button is pressed.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>setInterval/clearInterval example</title>

  <script>
    var nIntervId;

    function changeColor() {
      nIntervId = setInterval(flashText, 1000);
    }

    function flashText() {
      var oElem = document.getElementById('my_box');
      if(oElem.style.color === 'red') {
        oElem.style.color = 'blue'
      } else {
        oElem.style.color = 'red'
      }
    }

    function stopTextColor() {
      clearInterval(nIntervId);
    }
  </script>
</head>

<body onload="changeColor();">
  <div id="my_box">
    <p>Hello World</p>
  </div>

  <button onclick="stopTextColor();">Stop</button>
</body>
</html>
```

### Example 3: Typewriter simulation

The following example simulates typewriter by first clearing and then slowly
typing content into the [`NodeList`](/en-US/docs/Web/API/NodeList)
that matches a specified group of selectors.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>JavaScript Typewriter - MDN Example</title>
<script>
  function Typewriter (sSelector, nRate) {

  function clean () {
    clearInterval(nIntervId);
    bTyping = false;
    bStart = true;
    oCurrent = null;
    aSheets.length = nIdx = 0;
  }

  function scroll (oSheet, nPos, bEraseAndStop) {
    if (!oSheet.hasOwnProperty('parts') || aMap.length < nPos) { return true; }

    var oRel, bExit = false;

    if (aMap.length === nPos) { aMap.push(0); }

    while (aMap[nPos] < oSheet.parts.length) {
      oRel = oSheet.parts[aMap[nPos]];

      scroll(oRel, nPos + 1, bEraseAndStop) ? aMap[nPos]++ : bExit = true;

      if (bEraseAndStop && (oRel.ref.nodeType - 1 | 1) === 3 && oRel.ref.nodeValue) {
        bExit = true;
        oCurrent = oRel.ref;
        sPart = oCurrent.nodeValue;
        oCurrent.nodeValue = '';
      }

      oSheet.ref.appendChild(oRel.ref);
      if (bExit) { return false; }
    }

    aMap.length--;
    return true;
  }

  function typewrite () {
    if (sPart.length === 0 && scroll(aSheets[nIdx], 0, true) && nIdx++ === aSheets.length - 1) { clean(); return; }

    oCurrent.nodeValue += sPart.charAt(0);
    sPart = sPart.slice(1);
  }

  function Sheet (oNode) {
    this.ref = oNode;
    if (!oNode.hasChildNodes()) { return; }
    this.parts = Array.prototype.slice.call(oNode.childNodes);

    for (var nChild = 0; nChild < this.parts.length; nChild++) {
      oNode.removeChild(this.parts[nChild]);
      this.parts[nChild] = new Sheet(this.parts[nChild]);
    }
  }

  var
    nIntervId, oCurrent = null, bTyping = false, bStart = true,
    nIdx = 0, sPart = "", aSheets = [], aMap = [];

  this.rate = nRate || 100;

  this.play = function () {
    if (bTyping) { return; }
    if (bStart) {
      var aItems = document.querySelectorAll(sSelector);

      if (aItems.length === 0) { return; }
      for (var nItem = 0; nItem < aItems.length; nItem++) {
        aSheets.push(new Sheet(aItems[nItem]));
        /* Uncomment the following line if you have previously hidden your elements via CSS: */
        // aItems[nItem].style.visibility = "visible";
      }

      bStart = false;
    }

    nIntervId = setInterval(typewrite, this.rate);
    bTyping = true;
  };

  this.pause = function () {
    clearInterval(nIntervId);
    bTyping = false;
  };

  this.terminate = function () {
    oCurrent.nodeValue += sPart;
    sPart = "";
    for (nIdx; nIdx < aSheets.length; scroll(aSheets[nIdx++], 0, false));
    clean();
  };
}

/* usage: */
var oTWExample1 = new Typewriter(/* elements: */ '#article, h1, #info, #copyleft', /* frame rate (optional): */ 15);

/* default frame rate is 100: */
var oTWExample2 = new Typewriter('#controls');

/* you can also change the frame rate value modifying the "rate" property; for example: */
// oTWExample2.rate = 150;

onload = function () {
  oTWExample1.play();
  oTWExample2.play();
};
</script>
<style type="text/css">
span.intLink, a, a:visited {
  cursor: pointer;
  color: #000000;
  text-decoration: underline;
}

#info {
  width: 180px;
  height: 150px;
  float: right;
  background-color: #eeeeff;
  padding: 4px;
  overflow: auto;
  font-size: 12px;
  margin: 4px;
  border-radius: 5px;
  /* visibility: hidden; */
}
</style>
</head>

<body>

<p id="copyleft" style="font-style: italic; font-size: 12px; text-align: center;">CopyLeft 2012 by <a href="https://developer.mozilla.org/" target="_blank">Mozilla Developer Network</a></p>
<p id="controls" style="text-align: center;">[&nbsp;<span class="intLink" onclick="oTWExample1.play();">Play</span> | <span class="intLink" onclick="oTWExample1.pause();">Pause</span> | <span class="intLink" onclick="oTWExample1.terminate();">Terminate</span>&nbsp;]</p>
<div id="info">
Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros convallis ut mollis magna pellentesque. Pellentesque placerat enim at lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt tincidunt.
</div>
<h1>JavaScript Typewriter</h1>

<div id="article">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus, in placerat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a mi magna, quis mattis dolor. Etiam sit amet ligula quis urna auctor imperdiet nec faucibus ante. Mauris vel consectetur dolor. Nunc eget elit eget velit pulvinar fringilla consectetur aliquam purus. Curabitur convallis, justo posuere porta egestas, velit erat ornare tortor, non viverra justo diam eget arcu. Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc, suscipit a hendrerit vitae, volutpat non ipsum.</p>
<form>
<p>Phasellus ac nisl lorem: <input type="text" /><br />
<textarea style="width: 400px; height: 200px;">Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc fringilla eget. Praesent scelerisque urna vitae nibh tristique varius consequat neque luctus. Integer ornare, erat a porta tempus, velit justo fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.</textarea></p>
<input type="submit" value="Send" />
</form>
<p>Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero, eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt rhoncus non non diam. Morbi auctor ornare orci, non euismod felis gravida nec. Curabitur elementum nisi a eros rutrum nec blandit diam placerat. Aenean tincidunt risus ut nisi consectetur cursus. Ut vitae quam elit. Donec dignissim est in quam tempor consequat. Aliquam aliquam diam non felis convallis suscipit. Nulla facilisi. Donec lacus risus, dignissim et fringilla et, egestas vel eros. Duis malesuada accumsan dui, at fringilla mauris bibStartum quis. Cras adipiscing ultricies fermentum. Praesent bibStartum condimentum feugiat.</p>
<p>Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc, vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis. Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc. Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl eu sem vehicula egestas.</p>
</div>
</body>
</html>
```

[View this demo in action](/files/3997/typewriter.html). See also: [`clearInterval()`](/en-US/docs/Web/API/clearInterval).

## Callback arguments

As previously discussed, Internet Explorer versions 9 and below do not support the
passing of arguments to the callback function in either `setTimeout()` or
`setInterval()`. The following **IE-specific** code demonstrates
a method for overcoming this limitation.  To use, add the following code to the top of
your script.

```js
/*\
|*|
|*|  IE-specific polyfill that enables the passage of arbitrary arguments to the
|*|  callback functions of javascript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/window.setInterval
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, arg1, arg2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, arg1, arg2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

if (document.all && !window.setTimeout.isPolyfill) {
  var __nativeST__ = window.setTimeout;
  window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setTimeout.isPolyfill = true;
}

if (document.all && !window.setInterval.isPolyfill) {
  var __nativeSI__ = window.setInterval;
  window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setInterval.isPolyfill = true;
}
```

Another possibility is to use an anonymous function to call your callback, although
this solution is a bit more expensive. Example:

```js
var intervalID = setInterval(function() { myFunc('one', 'two', 'three'); }, 1000);
```

Another possibility is to use [function's
bind](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind). Example:

```js
var intervalID = setInterval(function(arg1) {}.bind(undefined, 10), 1000);
```

{{h3_gecko_minversion("Inactive tabs", "5.0")}}

Starting in Gecko 5.0 {{geckoRelease("5.0")}}, intervals are clamped to fire no more
often than once per second in inactive tabs.

## The "this" problem

When you pass a method to `setInterval()` or any other function, it is
invoked with the wrong [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)
value. This problem is explained in detail in the [JavaScript
reference](/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method).

### Explanation

Code executed by `setInterval()` runs in a separate execution context than
the function from which it was called. As a consequence, the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)
keyword for the called function is set to the `window` (or
`global`) object, it is not the same as the `this` value for the
function that called `setTimeout`. See the following example (which uses
`setTimeout()` instead of `setInterval()` – the problem, in fact,
is the same for both timers):

```js
myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1,5 seconds
// passing the 'this' object with .call won't work
// because this will change the value of this inside setTimeout itself
// while we want to change the value of this inside myArray.myMethod
// in fact, it will be an error because setTimeout code expects this to be the window object:
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

As you can see there are no ways to pass the `this` object to the callback
function in the legacy JavaScript.

### A possible solution

A possible way to solve the "`this`" problem is to replace the two native
`setTimeout()` or `setInterval()` global functions with two
_non-native_ ones that enable their invocation through the [`Function.prototype.call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
method. The following example shows a possible replacement:

```js
// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};
```

> **Note:** These two replacements also enable the HTML5 standard passage of
> arbitrary arguments to the callback functions of timers in IE. So they can be used as
> _non-standard-compliant_ polyfills also. See the [callback arguments paragraph](#callback_arguments) for a
> _standard-compliant_ polyfill.

New feature test:

```js
myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, 'Hello world!'); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2,5 seconds
```

> **Note:** JavaScript 1.8.5 introduces the
> [`Function.prototype.bind()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
> method, which lets you specify the value that should be used as `this` for
> all calls to a given function. This lets you easily bypass problems where it's unclear
> what this will be, depending on the context from which your function was called. Also,
> ES2015 supports [arrow
> functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), with lexical this allowing us to write setInterval( () =>
> this.myMethod) if we're inside myArray method.

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
{{SectionOnPage("/en-US/docs/Web/API/setTimeout", "Reasons for
  delays longer than specified")}} for examples.

### Ensure that execution duration is shorter than interval frequency

If there is a possibility that your logic could take longer to execute than the
interval time, it is recommended that you recursively call a named function using
{{domxref("setTimeout()")}}. For example, if
using `setInterval()` to poll a remote server every 5 seconds, network
latency, an unresponsive server, and a host of other issues could prevent the request
from completing in its allotted time. As such, you may find yourself with queued up XHR
requests that won't necessarily return in order.

In these cases, a recursive `setTimeout()` pattern is preferred:

```js
(function loop(){
   setTimeout(function() {
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

- A polyfill of `setInterval` which allows passing arguments to the callback is available in [`core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("setTimeout")}}
- {{domxref("clearTimeout")}}
- {{domxref("clearInterval")}}
- {{domxref("window.requestAnimationFrame")}}
