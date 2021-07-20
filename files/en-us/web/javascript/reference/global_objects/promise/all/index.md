---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
tags:
- ECMAScript 2015
- JavaScript
- Method
- Promise
browser-compat: javascript.builtins.Promise.all
---
<div>{{JSRef}}</div>

<p>The <strong><code>Promise.all()</code></strong> method takes an iterable of promises as
  an input, and returns a single {{jsxref("Promise")}} that resolves to an array of the
  results of the input promises. This returned promise will resolve when all of the
  input's promises have resolved, or if the input iterable contains no promises. It
  rejects immediately upon any of the input promises rejecting or non-promises throwing an
  error, and will reject with this first rejection message / error.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-all.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Promise.all(<var>iterable</var>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>iterable</code></dt>
  <dd>An <a
      href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable</a>
    object such as an {{jsxref("Array")}}.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<ul>
  <li>An <strong>already resolved</strong> {{jsxref("Promise")}} if the
    <var>iterable</var> passed is empty.</li>
  <li>An <strong>asynchronously resolved</strong> {{jsxref("Promise")}} if the
    <var>iterable</var> passed contains no promises. Note, Google Chrome 58 returns
    an <strong>already resolved</strong> promise in this case.</li>
  <li>A <strong>pending</strong> {{jsxref("Promise")}} in all other cases. This returned
    promise is then resolved/rejected <strong>asynchronously</strong> (as soon as the
    stack is empty) when all the promises in the given <var>iterable</var> have resolved,
    or if any of the promises reject. See the example about "Asynchronicity or
    synchronicity of Promise.all" below. Returned values will be in order of the Promises
    passed, regardless of completion order.</li>
</ul>

<h2 id="Description">Description</h2>

<p>This method can be useful for aggregating the results of multiple promises. It is
  typically used when there are multiple related asynchronous tasks that the overall code
  relies on to work successfully — all of whom we want to fulfill before the code
  execution continues.</p>

<p><code>Promise.all()</code> will reject immediately upon <strong>any</strong> of the
  input promises rejecting. In comparison, the promise returned by
  {{jsxref("Promise.allSettled()")}} will wait for all input promises to complete,
  regardless of whether or not one rejects. Consequently, it will always return the final
  result of every promise and function from the input iterable.</p>

<h3 id="Fulfillment">Fulfillment</h3>

<p>The returned promise is fulfilled with an array containing <strong>all</strong> the
  resolved values (including non-promise values) in the <var>iterable</var> passed as the
  argument.</p>

<ul>
  <li>If an empty <var>iterable</var> is passed, then the promise returned by this method
    is fulfilled synchronously. The resolved value is an empty array.</li>
  <li>If a nonempty <em>iterable</em> is passed, and <strong>all</strong> of the promises
    fulfill, or are not promises, then the promise returned by this method is fulfilled
    asynchronously.</li>
</ul>

<h3 id="Rejection">Rejection</h3>

<p>If any of the passed-in promises reject, <code>Promise.all</code> asynchronously
  rejects with the value of the promise that rejected, whether or not the other promises
  have resolved.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Promise.all">Using <code>Promise.all</code></h3>

<p><code>Promise.all</code> waits for all fulfillments (or the first rejection).</p>

<pre class="brush: js">var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then(values =&gt; {
  console.log(values); // [3, 1337, "foo"]
});</pre>

<p>If the <var>iterable</var> contains non-promise values, they will be ignored, but still
  counted in the returned promise array value (if the promise is fulfilled):</p>

<pre class="brush: js">// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1,2,3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// using setTimeout we can execute code after the stack is empty
setTimeout(function() {
    console.log(p);
    console.log(p2);
    console.log(p3);
});

// logs
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[3] }
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[4] }
// Promise { &lt;state&gt;: "rejected", &lt;reason&gt;: 555 }</pre>

<h3 id="Asynchronicity_or_synchronicity_of_Promise.all">Asynchronicity or synchronicity of
  <code>Promise.all</code></h3>

<p>This following example demonstrates the asynchronicity (or synchronicity, if the
  <var>iterable</var> passed is empty) of <code>Promise.all</code>:</p>

<pre class="brush: js">// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[2] }
</pre>

<p>The same thing happens if <code>Promise.all</code> rejects:</p>

<pre class="brush: js">var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p);
});

// logs
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "rejected", &lt;reason&gt;: 44 }
</pre>

<p>But, <code>Promise.all</code> resolves synchronously <strong>if and only if</strong>
  the <var>iterable</var> passed is empty:</p>

<pre class="brush: js">var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p2);
});

// logs
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[0] }
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: Array[2] }
</pre>

<h3 id="Promise.all_fail-fast_behavior"><code>Promise.all</code> fail-fast behavior</h3>

<p><code>Promise.all</code> is rejected if any of the elements are rejected. For example,
  if you pass in four promises that resolve after a timeout and one promise that rejects
  immediately, then <code>Promise.all</code> will reject immediately.</p>

<pre class="brush: js">var p1 = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve('one'), 1000);
});
var p2 = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve('two'), 2000);
});
var p3 = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve('three'), 3000);
});
var p4 = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve('four'), 4000);
});
var p5 = new Promise((resolve, reject) =&gt; {
  reject(new Error('reject'));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
.then(values =&gt; {
  console.log(values);
})
.catch(error =&gt; {
  console.error(error.message)
});

//From console:
//"reject"

</pre>

<p>It is possible to change this behavior by handling possible rejections:</p>

<pre class="brush: js">var p1 = new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; resolve('p1_delayed_resolution'), 1000);
});

var p2 = new Promise((resolve, reject) =&gt; {
  reject(new Error('p2_immediate_rejection'));
});

Promise.all([
  p1.catch(error =&gt; { return error }),
  p2.catch(error =&gt; { return error }),
]).then(values =&gt; {
  console.log(values[0]) // "p1_delayed_resolution"
  console.error(values[1]) // "Error: p2_immediate_rejection"
})
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Promise")}}</li>
  <li>{{jsxref("Promise.race()")}}</li>
</ul>
