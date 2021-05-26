---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
tags:
- ECMAScript 2015
- JavaScript
- Method
- Promise
- Prototype
browser-compat: javascript.builtins.Promise.catch
---
<div>{{JSRef}}</div>

<p>The <code><strong>catch()</strong></code> method returns a {{jsxref("Promise")}} and
  deals with rejected cases only. It behaves the same as calling {{jsxref("Promise.then",
  "Promise.prototype.then(undefined, onRejected)")}} (in fact, calling
  <code>obj.catch(onRejected)</code> internally calls
  <code>obj.then(undefined, onRejected)</code>). This means that you have to provide an
  <code>onRejected</code> function even if you want to fall back to an
  <code>undefined</code> result value - for example <code>obj.catch(() =&gt; {})</code>.
</p>

<div>{{EmbedInteractiveExample("pages/js/promise-catch.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>p</var>.catch(<var>onRejected</var>);

p.catch(function(<var>reason</var>) {
   // rejection
});
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>onRejected</var></code></dt>
  <dd>A {{jsxref("Function")}} called when the <code>Promise</code> is rejected. This
    function has one argument:
    <dl>
      <dt><code><var>reason</var></code></dt>
      <dd>The rejection reason.</dd>
    </dl>
    The Promise returned by <code>catch()</code> is rejected if
    <code><var>onRejected</var></code> throws an error or returns a Promise which is
    itself rejected; otherwise, it is resolved.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Internally calls <code>Promise.prototype.then</code> on the object upon which it was
  called, passing the parameters <code>undefined</code> and the received
  <code><var>onRejected</var></code> handler. Returns the value of that call, which is a
  {{jsxref("Promise")}}.</p>

<div class="warning">
  <p><strong>Warning:</strong> The examples below are throwing instances of <a
      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a>. This is
    considered good practice in contrast to throwing Strings; otherwise, the part doing
    the catching would have to perform checks to see if the argument was a string or an
    error, and you might lose valuable information like stack traces.</p>
</div>

<p><strong>Demonstration of the internal call:</strong></p>

<pre class="brush: js">// overriding original Promise.prototype.then/catch just to add some logs
(function(Promise){
    var originalThen = Promise.prototype.then;
    var originalCatch = Promise.prototype.catch;

    Promise.prototype.then = function(){
        console.log('&gt; &gt; &gt; &gt; &gt; &gt; called .then on %o with arguments: %o', this, arguments);
        return originalThen.apply(this, arguments);
    };
    Promise.prototype.catch = function(){
        console.error('&gt; &gt; &gt; &gt; &gt; &gt; called .catch on %o with arguments: %o', this, arguments);
        return originalCatch.apply(this, arguments);
    };

})(this.Promise);

// calling catch on an already resolved promise
Promise.resolve().catch(function XXX(){});

// logs:
// &gt; &gt; &gt; &gt; &gt; &gt; called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// &gt; &gt; &gt; &gt; &gt; &gt; called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
</pre>

<h2 id="Description">Description</h2>

<p>The <code>catch</code> method is used for error handling in promise composition. Since
  it returns a {{jsxref("Promise")}}, it <a
    href="/en-US/docs/Web/JavaScript/Guide/Using_promises#Chaining_after_a_catch">can be
    chained</a> in the same way as its sister method, {{jsxref("Promise.then",
  "then()")}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_and_chaining_the_catch_method">Using and chaining the catch method</h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw new Error('oh, no!');
}).catch(function(e) {
  console.error(e.message); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});

// The following behaves the same as above
p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
}).catch(function(e) {
  console.error(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
</pre>

<h3 id="Gotchas_when_throwing_errors">Gotchas when throwing errors</h3>

<pre class="brush: js">// Throwing an error will call the catch method most of the time
var p1 = new Promise(function(resolve, reject) {
  throw new Error('Uh-oh!');
});

p1.catch(function(e) {
  console.error(e); // "Uh-oh!"
});

// Errors thrown inside asynchronous functions will act like uncaught errors
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw new Error('Uncaught Exception!');
  }, 1000);
});

p2.catch(function(e) {
  console.error(e); // This is never called
});

// Errors thrown after resolve is called will be silenced
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw new Error('Silenced Exception!');
});

p3.catch(function(e) {
   console.error(e); // This is never called
});</pre>

<h3 id="If_it_is_resolved">If it is resolved</h3>

<pre class="brush: js">//Create a promise which would not call onReject
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
    //This is never called
    console.error("catch p1!");
    console.error(reason);
});

p2.then(function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Promise")}}</li>
  <li>{{jsxref("Promise.prototype.then()")}}</li>
</ul>
