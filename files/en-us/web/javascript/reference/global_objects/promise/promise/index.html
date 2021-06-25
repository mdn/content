---
title: Promise() constructor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
tags:
  - Constructor
  - JavaScript
  - Promise
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Promise.Promise
---
<div>{{JSRef}}</div>

<p>The <strong><code>Promise</code></strong> constructor is primarily used to wrap
  functions that do not already support promises.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">new Promise(<var>executor</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>executor</var></code></dt>
  <dd><p>A {{jsxref("function")}} to be executed by the constructor, during the process of
    constructing the new <code>Promise</code> object. The <code><var>executor</var></code>
    is custom code that ties an outcome to a promise. You, the programmer, write the
    <code><var>executor</var></code>. Its signature is expected to be:</p>

    <pre class="brush: js">
function(<var>resolutionFunc</var>, <var>rejectionFunc</var>){
  // typically, some asynchronous operation.
}</pre>

    <p><code><var>resolutionFunc</var></code> and <code><var>rejectionFunc</var></code> are also functions, and you can give them whatever actual names you want. Their signatures are simple: they accept a single parameter of any type.</p>

    <pre class="brush: js">
resolutionFunc(value) // call on resolved
rejectionFunc(reason) // call on <em>rejected</em></pre>

    <p>The <code><var>resolutionFunc</var></code> <code>value</code> parameter can be another promise object, in which case the promise gets dynamically inserted into the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises">promise chain</a>.</p>

    About the <code><var>executor</var></code>, it’s important to understand the following:

    <ul>
      <li>The <code><var>executor</var></code> return value is ignored.</li>
      <li>If an error is thrown in the <code><var>executor</var></code>, the promise is rejected.</li>
    </ul>

    So the mechanism by which the code within the <code><var>executor</var></code> has affect is as follows:

    <ul>
      <li>At the time when the constructor generates the new <code>Promise</code> object, it also generates a corresponding pair of functions for <code><var>resolutionFunc</var></code> and <code><var>rejectionFunc</var></code>; these are "tethered" to the <code>Promise</code> object.</li>
      <li>The code within the <code><var>executor</var></code> has the opportunity to perform some operation and then reflect the operation's outcome (if the value is not another Promise object) as either "resolved" or "rejected", by terminating with an invocation of either the <code><var>resolutionFunc</var></code> or the <code><var>rejectionFunc</var></code>, respectively.</li>
      <li>In other words, the code within the <code><var>executor</var></code> communicates via the side effect caused by <code><var>resolutionFunc</var></code> or <code><var>rejectionFunc</var></code>. The side effect is that the <code>Promise</code> object either becomes "resolved", or "rejected".</li>
    </ul>

    And so, given all the above, here’s a summary of the typical flow:

    <ol>
      <li>The operation within <code><var>executor</var></code> is asynchronous and provides a callback.</li>
      <li>The callback is defined within the <code><var>executor</var></code> code.</li>
      <li>The callback terminates by invoking <code><var>resolutionFunc</var></code>.</li>
      <li>The invocation of <code><var>resolutionFunc</var></code> includes a <code>value</code> parameter.</li>
      <li>The <code>value</code> is passed back to the tethered <code>Promise</code> object.</li>
      <li>The <code>Promise</code> object (asynchronously) invokes any associated <code>.then(<var>handleResolved</var>)</code>.</li>
      <li>The <code>value</code> received by <code>.then(<var>handleResolved</var>)</code> is passed to the invocation of <code><var>handleResolved</var></code> as an input parameter (see <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises">Chained Promises</a>).</li>
    </ol>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>When called via <code>new</code>, the <code>Promise</code> constructor returns a
  promise object. The promise object will become "resolved" when either of the functions
  <code><var>resolutionFunc</var></code> or <code><var>rejectionFunc</var></code> are
  invoked. Note that if you call <code><var>resolutionFunc</var></code> or
  <code><var>rejectionFunc</var></code> and pass another Promise object as an argument,
  you can say that it is "resolved", but still cannot be said to be "settled".</p>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_Promise">Creating a new Promise</h3>

<p>A <code>Promise</code> object is created using the <code>new</code> keyword and its
  constructor. This constructor takes a function, called the "executor function", as its
  parameter. This function should take two functions as parameters. The first of these
  functions (<code>resolve</code>) is called when the asynchronous task completes
  successfully and returns the results of the task as a value. The second
  (<code>reject</code>) is called when the task fails, and returns the reason for failure,
  which is typically an error object.</p>

<pre class="brush: js">const myFirstPromise = new Promise((resolve, reject) =&gt; {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});
</pre>

<h3 id="Making_functions_return_a_Promise">Making functions return a Promise</h3>

<p>To provide a function with promise functionality, have it return a promise:</p>

<pre class="brush: js">function myAsyncFunction(url) {
  return new Promise((resolve, reject) =&gt; {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () =&gt; resolve(xhr.responseText)
    xhr.onerror = () =&gt; reject(xhr.statusText)
    xhr.send()
  });
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Promise</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-promise"><code>core-js</code></a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Using_promises">Using Promises</a></li>
</ul>
