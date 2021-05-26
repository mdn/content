---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
tags:
- ECMAScript 2015
- JavaScript
- Method
- Promise
- Reference
browser-compat: javascript.builtins.Promise.resolve
---
<div>{{JSRef}}</div>

<p>The <strong><code>Promise.resolve()</code></strong> method returns a
  {{jsxref("Promise")}} object that is resolved with a given value. If the value is a
  promise, that promise is returned; if the value is a thenable (i.e. has a
  {{jsxref("Promise.then", "\"then\" method")}}), the returned promise will "follow" that
  thenable, adopting its eventual state; otherwise the returned promise will be fulfilled
  with the value. This function flattens nested layers of promise-like objects (e.g. a
  promise that resolves to a promise that resolves to something) into a single layer.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Promise.resolve(<var>value</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>value</var></code></dt>
  <dd>Argument to be resolved by this <code>Promise</code>. Can also be a
    <code>Promise</code> or a thenable to resolve.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} that is resolved with the given value, or the promise passed as
  value, if the value was a promise object.</p>

<h2 id="Description">Description</h2>

<p>The static <code>Promise.resolve</code> function returns a <code>Promise</code> that is
  resolved.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_static_Promise.resolve_method">Using the static Promise.resolve method
</h3>

<pre class="brush: js">Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // not called
});
</pre>

<h3 id="Resolving_an_array">Resolving an array</h3>

<pre class="brush: js">var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
</pre>

<h3 id="Resolving_another_Promise">Resolving another Promise</h3>

<pre class="brush: js">var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

// logs, in order:
// original === cast ? true
// value: 33
</pre>

<p>The inverted order of the logs is due to the fact that the <code>then</code> handlers
  are called asynchronously. See how <code>then</code> works <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value">here</a>.
</p>

<h3 id="Resolving_thenables_and_throwing_Errors">Resolving thenables and throwing Errors
</h3>

<pre class="brush: js">// Resolving a thenable object
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) { onFulfill('fulfilled!'); }
});
console.log(p1 instanceof Promise) // true, object casted to a Promise

p1.then(function(v) {
    console.log(v); // "fulfilled!"
  }, function(e) {
    // not called
});

// Thenable throws before callback
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError('Throwing');
  resolve('Resolving');
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // not called
}, function(e) {
  console.error(e); // TypeError: Throwing
});

// Thenable throws after callback
// Promise resolves
var thenable = { then: function(resolve) {
  resolve('Resolving');
  throw new TypeError('Throwing');
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // "Resolving"
}, function(e) {
  // not called
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Promise")}}</li>
</ul>
