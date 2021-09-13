---
title: setTimeout()
slug: Web/API/setTimeout
tags:
  - API
  - HTML DOM
  - Intervals
  - JavaScript timers
  - MakeBrowserAgnostic
  - Method
  - NeedsMarkupWork
  - Reference
  - Timers
  - setTimeout
  - Polyfill
browser-compat: api.setTimeout
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The global <strong><code>setTimeout()</code></strong> method sets a timer which executes a function or specified
  piece of code once the timer expires.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>timeoutID</var> = setTimeout(<var>function</var>[, <var>delay</var>, <var>arg1</var>, <var>arg2</var>, ...]);
var <var>timeoutID</var> = setTimeout(<var>function</var>[, <var>delay</var>]);
var <var>timeoutID</var> = setTimeout(<var>code</var>[, <var>delay</var>]);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>function</var></code></dt>
  <dd>A {{jsxref("function")}} to be executed after the timer expires.</dd>
  <dt><code><var>code</var></code></dt>
  <dd>An alternative syntax that allows you to include a string instead of a function,
    which is compiled and executed when the timer expires. This syntax is <strong>not
      recommended</strong> for the same reasons that make using
    {{jsxref("Global_Objects/eval", "eval()")}} a security risk.</dd>
  <dt><code><var>delay</var></code> {{optional_inline}}</dt>
  <dd>The time, in milliseconds that the timer should wait before
    the specified function or code is executed. If this parameter is omitted, a value of 0
    is used, meaning execute "immediately", or more accurately, the next event cycle. Note
    that in either case, the actual delay may be longer than intended; see
    {{anch("Reasons_for_delays", "Reasons for delays longer than specified")}} below.</dd>
  <dt><code><var>arg1</var>, ..., <var>argN</var></code> {{optional_inline}}</dt>
  <dd>Additional arguments which are passed through to the function specified by
    <code><var>function</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The returned <code><var>timeoutID</var></code> is a positive integer value which
  identifies the timer created by the call to <code>setTimeout()</code>. This value can be
  passed to {{domxref("clearTimeout","clearTimeout()")}} to
  cancel the timeout.</p>

<p>It is guaranteed that a <code><var>timeoutID</var></code> value will never be reused by a subsequent call to
  <code>setTimeout()</code> or <code>setInterval()</code> on the same object (a window or
  a worker). However, different objects use separate pools of IDs.</p>

<h2>Description</h2>

<p>Timeouts are cancelled using
  {{domxref("clearTimeout()")}}.</p>

<p>To call a function repeatedly (e.g., every <em>N</em> milliseconds), consider using
  {{domxref("setInterval()")}}.</p>

<h3 id="asynchronous">Working with asynchronous functions</h3>

<p><code>setTimeout()</code> is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.
  In other words, you cannot use <code>setTimeout()</code> to create a "pause" before the next function in the function stack fires.</p>

<p>See the following example:</p>
  <pre class="brush: js">
  setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 3000);
  setTimeout(() => {console.log("this is the third message")}, 1000);

  // Output:

  // this is the third message
  // this is the second message
  // this is the first message
</pre>

<p>Notice that the first function does not create a 5-second "pause" before calling the second function. Instead, the first function is called, but waits 5 seconds to
  execute. While the first function is waiting to execute, the second function is called, and a 3-second wait is applied to the second function before it executes. Since neither
  the first nor the second function's timers have completed, the third function is called and completes its execution first. Then the second follows. Then finally the first function
  is executed after its timer finally completes.

  <p>To create a progression in which one function only fires after the completion of another function, see the documentation on <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a>.

<h3 id="The_this_problem">The "this" problem</h3>

<p>When you pass a method to <code>setTimeout()</code>, it will be invoked with a <code>this</code> value that may differ from your
  expectation. The general issue is explained in detail in the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method">JavaScript
    reference</a>.</p>

<p>Code executed by <code>setTimeout()</code> is called from an execution context separate
  from the function from which <code>setTimeout</code> was called. The usual rules for
  setting the <code>this</code> keyword for the called function apply, and if you have not
  set <code>this</code> in the call or with <code>bind</code>, it will default to
  the <code>window</code> (or <code>global</code>) object. It will not be the same as the
  <code>this</code> value for the function that called <code>setTimeout</code>.</p>

<p>See the following example:</p>

<pre class="brush: js">const myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length &gt; 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"</pre>

<p>The above works because when <code>myMethod</code> is called, its <code>this</code> is
  set to <code>myArray</code> by the call, so within the function,
  <code>this[sProperty]</code> is equivalent to <code>myArray[sProperty]</code>. However,
  in the following:</p>

<pre
  class="brush: js">setTimeout(myArray.myMethod, 1.0*1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5*1000, '1'); // prints "undefined" after 1.5 seconds</pre>

<p>The <code>myArray.myMethod</code> function is passed to <code>setTimeout</code>, then
  when it's called, its <code>this</code> is not set so it defaults to the
  <code>window</code> object.</p>

<p>There's also no option to pass a <code>thisArg</code> to
  <code>setTimeout</code> as there is in Array methods such as {{jsxref("Array.forEach()", "forEach()")}} and {{jsxref("Array.reduce()", "reduce()")}}. As shown below,
  using <code>call</code> to set <code>this</code> doesn't work either.</p>

<pre class="brush: js">setTimeout.call(myArray, myArray.myMethod, 2.0*1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5*1000, 2); // same error
</pre>

<h4 id="solutions">Solutions</h4>

<h5>Use a wrapper function</h5>

<p>A common way to solve the problem is to use a wrapper function that sets
  <code>this</code> to the required value:</p>

<pre
  class="brush: js">setTimeout(function(){myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
setTimeout(function(){myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds</pre>

<p>The wrapper function can be an arrow function:</p>

<pre
  class="brush: js">setTimeout(() =&gt; {myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
setTimeout(() =&gt; {myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds</pre>

<h5>Use bind()</h5>

<p>Alternatively, you can use {{jsxref("Function.bind()", "bind()")}} to set the value of <code>this</code> for all calls to a given function:</p>

<pre class="brush: js">const myArray = ['zero', 'one', 'two'];
const myBoundMethod = (function (sProperty) {
    console.log(arguments.length &gt; 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1.0*1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5*1000, "1"); // prints "one" after 1.5 seconds
</pre>

<h3 id="Passing_string_literals">Passing string literals</h3>

<p>Passing a string instead of a function to <code>setTimeout()</code> has the same problems as using
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code>.
</p>

<pre class="brush: js example-bad">// Don't do this
setTimeout("console.log('Hello World!');", 500);
</pre>

<pre class="brush: js example-good">// Do this instead
setTimeout(function() {
  console.log('Hello World!');
}, 500);
</pre>

<p>A string passed to <code>{{domxref("setTimeout()")}}</code> is evaluated in the global context, so local symbols in the context where <code>{{domxref("setTimeout()")}}</code> was called will not be available when the string is evaluated as code.</p>

<h3 id="Reasons_for_delays">Reasons for delays longer than specified</h3>

<p>There are a number of reasons why a timeout may take longer to fire than anticipated.
  This section describes the most common reasons.</p>

<h4 id="Nested_timeouts">Nested timeouts</h4>

<p>As specified in the <a href="https://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers">HTML standard</a>,
browsers will enforce a minimum timeout of 4 milliseconds once a nested call to <code>setTimeout</code> has been scheduled 5 times.</p>

<p>This can be seen in the following example, in which we nest a call to <code>setTimeout</code> with a delay of <code>0</code> milliseconds,
and log the delay each time the handler is called. The first four times, the delay is approximately 0 milliseconds, and after that it is
approximately 4 milliseconds:</p>

<pre class="brush: html">&lt;button id="run"&gt;Run&lt;/button&gt;
&lt;pre&gt;previous    this    actual delay&lt;/pre&gt;
&lt;div id="log"&gt;&lt;/div&gt;
</pre>

<pre class="brush: js">
let last = 0;
let iterations = 10;

function timeout() {
  // log the time of this call
  logline(new Date().getMilliseconds());

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

function pad(number) {
  return number.toString().padStart(3, "0");
}

function logline(now) {
  // log the last timestamp, the new timestamp, and the difference
  const newLine = document.createElement("pre");
  newLine.textContent = `${pad(last)}         ${pad(now)}          ${now - last}`;
  document.getElementById("log").appendChild(newLine);
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
</pre>

<p>{{EmbedLiveSample("Nested_timeouts", 100, 420)}}</p>

<h4 id="Timeouts_in_inactive_tabs">Timeouts in inactive tabs</h4>

<p>To reduce the load (and associated battery usage) from background tabs, browsers will enforce
  a minimum timeout delay in inactive tabs. It may also be waived if a page is playing sound
  using a Web Audio API {{domxref("AudioContext")}}.</p>

<p>The specifics of this are browser-dependent:</p>

<ul>
  <li>Firefox Desktop and Chrome both have a minimum timeout of 1 second for inactive tabs.</li>
  <li>Firefox for Android has a minimum timeout of 15 minutes for inactive tabs and may unload them entirely.</li>
  <li>Firefox does not throttle inactive tabs if the tab contains an {{domxref("AudioContext")}}.</li>
</ul>

<h4 id="Throttling_of_tracking_scripts">Throttling of tracking scripts</h4>

<p>Firefox enforces additional throttling for scripts that it recognises as tracking scripts.
  When running in the foreground, the throttling minimum delay is still 4ms. In background tabs, however,
  the throttling minimum delay is 10,000 ms, or 10 seconds, which comes into effect 30 seconds after a
  document has first loaded.</p>

<p>See <a href="https://wiki.mozilla.org/Security/Tracking_protection">Tracking Protection</a> for
  more details.</p>

<h4 id="Late_timeouts">Late timeouts</h4>

<p>The timeout can also fire later than expected if the page (or the OS/browser) is busy with other tasks.
  One important case to note is that the function or code snippet cannot be executed until
  the thread that called <code>setTimeout()</code> has terminated. For example:</p>

<pre class="brush: js">function foo() {
  console.log('foo has been called');
}
setTimeout(foo, 0);
console.log('After setTimeout');</pre>

<p>Will write to the console:</p>

<pre>After setTimeout
foo has been called</pre>

<p>This is because even though <code>setTimeout</code> was called with a delay of zero,
  it's placed on a queue and scheduled to run at the next opportunity; not immediately.
  Currently-executing code must complete before functions on the queue are executed, thus
  the resulting execution order may not be as expected.</p>

<h4 id="Deferral_of_timeouts_during_pageload">Deferral of timeouts during pageload</h4>

<p>Firefox will defer firing <code>setTimeout()</code> timers
  while the current tab is loading. Firing is deferred until the main thread is deemed
  idle (similar to <a
    href="/en-US/docs/Web/API/Window/requestIdleCallback">window.requestIdleCallback()</a>),
  or until the load event is fired.</p>

<h3 id="WebExtension_background_pages_and_timers">WebExtension background pages and timers
</h3>

<p>In <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions">WebExtensions</a>, <code>setTimeout()</code>
  does not work reliably. Extension authors should use the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms"><code>alarms</code></a>
  API instead.</p>

<h3 id="Maximum_delay_value">Maximum delay value</h3>

<p>Browsers including Internet Explorer, Chrome, Safari, and Firefox store the delay as a
  32-bit signed integer internally. This causes an integer overflow when using delays
  larger than 2,147,483,647 ms (about 24.8 days), resulting in the timeout being executed
  immediately.</p>

<h2 id="Example">Examples</h2>

<h3 id="Setting_and_clearing_timeouts">Setting and clearing timeouts</h3>

<p>The following example sets up two simple buttons in a web page and hooks them to the
  <code>setTimeout()</code> and <code>clearTimeout()</code> routines. Pressing the first
  button will set a timeout which shows a message after two seconds and stores the
  timeout id for use by <code>clearTimeout()</code>. You may optionally cancel this
  timeout by pressing on the second button.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">
&lt;button onclick="delayedMessage();"&gt;Show an message after two seconds&lt;/button&gt;
&lt;button onclick="clearMessage();"&gt;Cancel message before it happens&lt;/button&gt;

&lt;div id="output"&gt;&lt;/div&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, 'That was really slow!');
}

function clearMessage() {
  clearTimeout(timeoutID);
}
</pre>

<pre class="brush: css hidden">
#output {
  padding: .5rem 0;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Setting_and_clearing_timeouts')}}</p>

<p>See also the <a
    href="/en-US/docs/Web/API/clearTimeout#example"><code>clearTimeout()</code>
    example</a>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>setTimeout</code> which allows passing arguments to the callback is available in <a href="https://github.com/zloirock/core-js#settimeout-and-setinterval"><code>core-js</code></a></li>
  <li>{{domxref("clearTimeout")}}</li>
  <li>{{domxref("setInterval()")}}</li>
  <li>{{domxref("window.requestAnimationFrame")}}</li>
  <li>{{domxref("queueMicrotask()")}}</li>
</ul>
