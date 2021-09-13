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
<div>{{APIRef("HTML DOM")}}</div>

<p>The <strong><code>setInterval()</code></strong> method,
    offered on the {{domxref("Window")}} and {{domxref("Worker")}} interfaces, repeatedly
    calls a function or executes a code snippet, with a fixed time delay between each
    call.</p>

<p>This method returns an interval ID which uniquely identifies the interval, so you
  can remove it later by calling {{domxref("clearInterval",
  "clearInterval()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>var intervalID</em> = setInterval(<em>func</em>, [<em>delay</em>, <em>arg1</em>, <em>arg2</em>, ...]);
var <em>intervalID</em> = setInterval(function[, delay]);
<em>var intervalID</em> = setInterval(<em>code</em>, [<em>delay]</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>func</code></dt>
  <dd>A {{jsxref("function")}} to be executed every <code>delay</code> milliseconds. The first execution happens after <code>delay</code> milliseconds.</dd>
  <dt><code>code</code></dt>
  <dd>An optional syntax allows you to include a string instead of a function, which is
    compiled and executed every <code>delay</code> milliseconds. This syntax is <em>not
      recommended</em> for the same reasons that make using {{jsxref("Global_Objects/eval", "eval()")}} a
    security risk.</dd>
  <dt><code>delay</code>{{optional_inline}}</dt>
  <dd>The time, in milliseconds (thousandths of a second), the timer should delay in
    between executions of the specified function or code. See {{anch("Delay restrictions")}}
    below for details on the permitted range of <code>delay</code> values.</dd>
  <dt><code>arg1, ..., argN</code> {{optional_inline}}</dt>
  <dd>Additional arguments which are passed through to the function specified by
    <em>func</em> once the timer expires.</dd>
</dl>

<div class="note">
  <p><strong>Note:</strong> Passing additional arguments to <code>setInterval()</code> in
    the first syntax does not work in Internet Explorer 9 and earlier. If you want to
    enable this functionality on that browser, you must use a polyfill (see the <a
      href="#callback_arguments">Callback arguments</a> section).</p>
</div>

<h3 id="Return_value">Return value</h3>

<p>The returned <code>intervalID</code> is a numeric, non-zero value which identifies the
  timer created by the call to <code>setInterval()</code>; this value can be passed to
  {{domxref("clearInterval()")}} to cancel the interval.</p>

<p>It may be helpful to be aware that <code>setInterval()</code> and
  {{domxref("setTimeout()")}} share the same pool
  of IDs, and that <code>clearInterval()</code> and
  {{domxref("clearTimeout", "clearTimeout()")}} can technically
  be used interchangeably. For clarity, however, you should try to always match them to
  avoid confusion when maintaining your code.</p>

<div class="note"><p><strong>Note:</strong> The <code>delay</code> argument is converted to a
  signed 32-bit integer. This effectively limits <code>delay</code> to 2147483647 ms,
  since it's specified as a signed integer in the IDL.</p></div>

<h2 id="Examples">Examples</h2>

<h3 id="Example_1_Basic_syntax">Example 1: Basic syntax</h3>

<p>The following example demonstrates <code>setInterval()</code>'s basic syntax.</p>

<pre class="brush:js">var intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{
 // Your code here
 // Parameters are purely optional.
 console.log(a);
 console.log(b);
}
</pre>

<h3 id="Example_2_Alternating_two_colors">Example 2: Alternating two colors</h3>

<p>The following example calls the <code>flashtext()</code> function once a second until
  the Stop button is pressed.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;title&gt;setInterval/clearInterval example&lt;/title&gt;

  &lt;script&gt;
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
  &lt;/script&gt;
&lt;/head&gt;

&lt;body onload="changeColor();"&gt;
  &lt;div id="my_box"&gt;
    &lt;p&gt;Hello World&lt;/p&gt;
  &lt;/div&gt;

  &lt;button onclick="stopTextColor();"&gt;Stop&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="Example_3_Typewriter_simulation">Example 3: Typewriter simulation</h3>

<p>The following example simulates typewriter by first clearing and then slowly
  typing content into the <a href="/en-US/docs/Web/API/NodeList"><code>NodeList</code></a>
  that matches a specified group of selectors.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;JavaScript Typewriter - MDN Example&lt;/title&gt;
&lt;script&gt;
  function Typewriter (sSelector, nRate) {

  function clean () {
    clearInterval(nIntervId);
    bTyping = false;
    bStart = true;
    oCurrent = null;
    aSheets.length = nIdx = 0;
  }

  function scroll (oSheet, nPos, bEraseAndStop) {
    if (!oSheet.hasOwnProperty('parts') || aMap.length &lt; nPos) { return true; }

    var oRel, bExit = false;

    if (aMap.length === nPos) { aMap.push(0); }

    while (aMap[nPos] &lt; oSheet.parts.length) {
      oRel = oSheet.parts[aMap[nPos]];

      scroll(oRel, nPos + 1, bEraseAndStop) ? aMap[nPos]++ : bExit = true;

      if (bEraseAndStop &amp;&amp; (oRel.ref.nodeType - 1 | 1) === 3 &amp;&amp; oRel.ref.nodeValue) {
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
    if (sPart.length === 0 &amp;&amp; scroll(aSheets[nIdx], 0, true) &amp;&amp; nIdx++ === aSheets.length - 1) { clean(); return; }

    oCurrent.nodeValue += sPart.charAt(0);
    sPart = sPart.slice(1);
  }

  function Sheet (oNode) {
    this.ref = oNode;
    if (!oNode.hasChildNodes()) { return; }
    this.parts = Array.prototype.slice.call(oNode.childNodes);

    for (var nChild = 0; nChild &lt; this.parts.length; nChild++) {
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
      for (var nItem = 0; nItem &lt; aItems.length; nItem++) {
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
    for (nIdx; nIdx &lt; aSheets.length; scroll(aSheets[nIdx++], 0, false));
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
&lt;/script&gt;
&lt;style type="text/css"&gt;
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
&lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;p id="copyleft" style="font-style: italic; font-size: 12px; text-align: center;"&gt;CopyLeft 2012 by &lt;a href="https://developer.mozilla.org/" target="_blank"&gt;Mozilla Developer Network&lt;/a&gt;&lt;/p&gt;
&lt;p id="controls" style="text-align: center;"&gt;[&amp;nbsp;&lt;span class="intLink" onclick="oTWExample1.play();"&gt;Play&lt;/span&gt; | &lt;span class="intLink" onclick="oTWExample1.pause();"&gt;Pause&lt;/span&gt; | &lt;span class="intLink" onclick="oTWExample1.terminate();"&gt;Terminate&lt;/span&gt;&amp;nbsp;]&lt;/p&gt;
&lt;div id="info"&gt;
Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros convallis ut mollis magna pellentesque. Pellentesque placerat enim at lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt tincidunt.
&lt;/div&gt;
&lt;h1&gt;JavaScript Typewriter&lt;/h1&gt;

&lt;div id="article"&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus, in placerat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a mi magna, quis mattis dolor. Etiam sit amet ligula quis urna auctor imperdiet nec faucibus ante. Mauris vel consectetur dolor. Nunc eget elit eget velit pulvinar fringilla consectetur aliquam purus. Curabitur convallis, justo posuere porta egestas, velit erat ornare tortor, non viverra justo diam eget arcu. Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc, suscipit a hendrerit vitae, volutpat non ipsum.&lt;/p&gt;
&lt;form&gt;
&lt;p&gt;Phasellus ac nisl lorem: &lt;input type="text" /&gt;&lt;br /&gt;
&lt;textarea style="width: 400px; height: 200px;"&gt;Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc fringilla eget. Praesent scelerisque urna vitae nibh tristique varius consequat neque luctus. Integer ornare, erat a porta tempus, velit justo fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.&lt;/textarea&gt;&lt;/p&gt;
&lt;input type="submit" value="Send" /&gt;
&lt;/form&gt;
&lt;p&gt;Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero, eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt rhoncus non non diam. Morbi auctor ornare orci, non euismod felis gravida nec. Curabitur elementum nisi a eros rutrum nec blandit diam placerat. Aenean tincidunt risus ut nisi consectetur cursus. Ut vitae quam elit. Donec dignissim est in quam tempor consequat. Aliquam aliquam diam non felis convallis suscipit. Nulla facilisi. Donec lacus risus, dignissim et fringilla et, egestas vel eros. Duis malesuada accumsan dui, at fringilla mauris bibStartum quis. Cras adipiscing ultricies fermentum. Praesent bibStartum condimentum feugiat.&lt;/p&gt;
&lt;p&gt;Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc, vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis. Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc. Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl eu sem vehicula egestas.&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p><a href="/files/3997/typewriter.html">View this demo in action</a>. See also: <a
    href="/en-US/docs/Web/API/clearInterval"><code>clearInterval()</code></a>.</p>

<h2 id="Callback_arguments">Callback arguments</h2>

<p>As previously discussed, Internet Explorer versions 9 and below do not support the
  passing of arguments to the callback function in either <code>setTimeout()</code> or
  <code>setInterval()</code>. The following <strong>IE-specific</strong> code demonstrates
  a method for overcoming this limitation.  To use, add the following code to the top of
  your script.</p>

<pre class="brush:js">/*\
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

if (document.all &amp;&amp; !window.setTimeout.isPolyfill) {
  var __nativeST__ = window.setTimeout;
  window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setTimeout.isPolyfill = true;
}

if (document.all &amp;&amp; !window.setInterval.isPolyfill) {
  var __nativeSI__ = window.setInterval;
  window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setInterval.isPolyfill = true;
}
</pre>

<p>Another possibility is to use an anonymous function to call your callback, although
  this solution is a bit more expensive. Example:</p>

<pre
  class="brush:js">var intervalID = setInterval(function() { myFunc('one', 'two', 'three'); }, 1000);</pre>

<p>Another possibility is to use <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">function's
    bind</a>. Example:</p>

<pre
  class="brush:js">var intervalID = setInterval(function(arg1) {}.bind(undefined, 10), 1000);</pre>

<p>{{h3_gecko_minversion("Inactive tabs", "5.0")}}</p>

<p>Starting in Gecko 5.0 {{geckoRelease("5.0")}}, intervals are clamped to fire no more
  often than once per second in inactive tabs.</p>


<h2 id="The_this_problem">The "this" problem</h2>

<p>When you pass a method to <code>setInterval()</code> or any other function, it is
  invoked with the wrong <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a>
  value. This problem is explained in detail in the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method">JavaScript
    reference</a>.</p>

<h3 id="Explanation">Explanation</h3>

<p>Code executed by <code>setInterval()</code> runs in a separate execution context than
  the function from which it was called. As a consequence, the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this"><code>this</code></a>
  keyword for the called function is set to the <code>window</code> (or
  <code>global</code>) object, it is not the same as the <code>this</code> value for the
  function that called <code>setTimeout</code>. See the following example (which uses
  <code>setTimeout()</code> instead of <code>setInterval()</code> – the problem, in fact,
  is the same for both timers):</p>

<pre class="brush:js">myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
    alert(arguments.length &gt; 0 ? this[sProperty] : this);
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
</pre>

<p>As you can see there are no ways to pass the <code>this</code> object to the callback
  function in the legacy JavaScript.</p>

<h3 id="A_possible_solution">A possible solution</h3>

<p>A possible way to solve the "<code>this</code>" problem is to replace the two native
  <code>setTimeout()</code> or <code>setInterval()</code> global functions with two
  <em>non-native</em> ones that enable their invocation through the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><code>Function.prototype.call</code></a>
  method. The following example shows a possible replacement:</p>

<pre class="brush:js">// Enable the passage of the 'this' object through the JavaScript timers

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
};</pre>

<div class="note"><p><strong>Note:</strong> These two replacements also enable the HTML5 standard passage of
  arbitrary arguments to the callback functions of timers in IE. So they can be used as
  <em>non-standard-compliant</em> polyfills also. See the <a
    href="#callback_arguments">callback arguments paragraph</a> for a
  <em>standard-compliant</em> polyfill.</p></div>

<p>New feature test:</p>

<pre class="brush:js">myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
    alert(arguments.length &gt; 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, 'Hello world!'); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2,5 seconds
</pre>

<div class="note"><p><strong>Note:</strong> JavaScript 1.8.5 introduces the
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">Function.prototype.bind()</a></code>
  method, which lets you specify the value that should be used as <code>this</code> for
  all calls to a given function. This lets you easily bypass problems where it's unclear
  what this will be, depending on the context from which your function was called. Also,
  ES2015 supports <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow
    functions</a>, with lexical this allowing us to write setInterval( () =&gt;
  this.myMethod) if we're inside myArray method.</p></div>

<h2 id="Usage_notes">Usage notes</h2>

<p>The <code>setInterval()</code> function is commonly used to set a delay for functions
  that are executed again and again, such as animations. You can cancel the interval using
  {{domxref("clearInterval()")}}.</p>

<p>If you wish to have your function called <em>once</em> after the specified delay, use
  {{domxref("setTimeout()")}}.</p>

<h3 id="Delay_restrictions">Delay restrictions</h3>

<p>It's possible for intervals to be nested; that is, the callback for
  <code>setInterval()</code> can in turn call <code>setInterval()</code> to start another
  interval running, even though the first one is still going. To mitigate the potential
  impact this can have on performance, once intervals are nested beyond five levels deep,
  the browser will automatically enforce a 4 ms minimum value for the interval. Attempts
  to specify a value less than 4 ms in deeply-nested calls to <code>setInterval()</code>
  will be pinned to 4 ms.</p>

<p>Browsers may enforce even more stringent minimum values for the interval under some
  circumstances, although these should not be common. Note also that the actual amount of
  time that elapses between calls to the callback may be longer than the given
  <code>delay</code>; see
  {{SectionOnPage("/en-US/docs/Web/API/setTimeout", "Reasons for
  delays longer than specified")}} for examples.</p>

<h3 id="Ensure_that_execution_duration_is_shorter_than_interval_frequency">Ensure that
  execution duration is shorter than interval frequency</h3>

<p>If there is a possibility that your logic could take longer to execute than the
  interval time, it is recommended that you recursively call a named function using
  {{domxref("setTimeout()")}}. For example, if
  using <code>setInterval()</code> to poll a remote server every 5 seconds, network
  latency, an unresponsive server, and a host of other issues could prevent the request
  from completing in its allotted time. As such, you may find yourself with queued up XHR
  requests that won't necessarily return in order.</p>

<p>In these cases, a recursive <code>setTimeout()</code> pattern is preferred:</p>

<pre class="brush:js">(function loop(){
   setTimeout(function() {
      // Your logic here

      loop();
  }, delay);
})();
</pre>

<p>In the above snippet, a named function <code>loop()</code> is declared and is
  immediately executed. <code>loop()</code> is recursively called inside
  <code>setTimeout()</code> after the logic has completed executing. While this pattern
  does not guarantee execution on a fixed interval, it does guarantee that the previous
  interval has completed before recursing.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>setInterval</code> which allows passing arguments to the callback is available in <a href="https://github.com/zloirock/core-js#settimeout-and-setinterval"><code>core-js</code></a></li>
  <li>{{domxref("setTimeout")}}</li>
  <li>{{domxref("clearTimeout")}}</li>
  <li>{{domxref("clearInterval")}}</li>
  <li>{{domxref("window.requestAnimationFrame")}}</li>
</ul>
