---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
- ECMAScript 2015
- JavaScript
- Method
- Promise
- Reference
browser-compat: javascript.builtins.Promise.race
---
<div>{{JSRef}}</div>

<p>The <code><strong>Promise.race()</strong></code> method returns a promise that fulfills
  or rejects as soon as one of the promises in an iterable fulfills or rejects, with the
  value or reason from that promise.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-race.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Promise.race(<var>iterable</var>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>iterable</code></dt>
  <dd>An iterable object, such as an {{jsxref("Array")}}. See <a
      href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable</a>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <strong>pending</strong> {{jsxref("Promise")}} that <strong>asynchronously</strong>
  yields the value of the first promise in the given iterable to fulfill or reject.</p>

<h2 id="Description">Description</h2>

<p>The <code>race</code> function returns a <code>Promise</code> that is settled the same
  way (and takes the same value) as the first promise that settles amongst the promises of
  the iterable passed as an argument.</p>

<p>If the iterable passed is empty, the promise returned will be forever pending.</p>

<p>If the iterable contains one or more non-promise value and/or an already settled
  promise, then <code>Promise.race</code> will resolve to the first of these values found
  in the iterable.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Asynchronicity_of_Promise.race">Asynchronicity of Promise.race</h3>

<p>This following example demonstrates the asynchronicity of <code>Promise.race</code>:
</p>

<pre class="brush: js">// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: 33 }</pre>

<p>An empty iterable causes the returned promise to be forever pending:</p>

<pre class="brush: js">var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(foreverPendingPromise);
});

// logs, in order:
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "pending" }
</pre>

<p>If the iterable contains one or more non-promise value and/or an already settled
  promise, then <code>Promise.race</code> will resolve to the first of these values found
  in the array:</p>

<pre class="brush: js">var foreverPendingPromise = Promise.race([]);
var alreadyFulfilledProm = Promise.resolve(100);

var arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
    console.log(p2);
});

// logs, in order:
// Promise { &lt;state&gt;: "pending" }
// Promise { &lt;state&gt;: "pending" }
// the stack is now empty
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: 100 }
// Promise { &lt;state&gt;: "fulfilled", &lt;value&gt;: "non-Promise value" }
</pre>

<h3 id="Using_Promise.race_–_examples_with_setTimeout">Using Promise.race – examples with
  setTimeout</h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('one'), 500);
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('two'), 100);
});

Promise.race([p1, p2])
.then(function(value) {
  console.log(value); // "two"
  // Both fulfill, but p2 is faster
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('three'), 100);
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; reject(new Error('four')), 500);
});

Promise.race([p3, p4])
.then(function(value) {
  console.log(value); // "three"
  // p3 is faster, so it fulfills
}, function(error) {
  // Not called
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; resolve('five'), 500);
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(() =&gt; reject(new Error('six')), 100);
});

Promise.race([p5, p6])
.then(function(value) {
  // Not called
}, function(error) {
  console.log(error.message); // "six"
  // p6 is faster, so it rejects
});
</pre>

<h3 id="Comparison_with_Promise.any">Comparison with Promise.any</h3>

<p><code>Promise.race</code> takes the first settled {{jsxref("Promise")}}.</p>

<pre class="brush: js">const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log('succeeded with value:', value);
}).catch((reason) => {
  // Only promise1 is fulfilled, but promise2 is faster
  console.log('failed with reason:', reason);
});
// expected output: "failed with reason: two"
</pre>

<p>{{jsxref("Promise.any")}} takes the first fulfilled {{jsxref("Promise")}}.</p>

<pre class="brush: js">const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

Promise.any([promise1, promise2]).then((value) => {
  // Only promise1 is fulfilled, even though promise2 settled sooner
  console.log('succeeded with value:', value);
}).catch((reason) => {
  console.log('failed with reason:', reason);
});
// expected output: "succeeded with value: one"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Promise")}}</li>
  <li>{{jsxref("Promise.all()")}}</li>
</ul>
