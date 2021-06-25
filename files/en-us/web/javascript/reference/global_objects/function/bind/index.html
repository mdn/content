---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Function
  - JavaScript
  - Method
  - Polyfill
browser-compat: javascript.builtins.Function.bind
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code><strong>bind()</strong></code> method creates a new
    function that, when called, has its <code>this</code> keyword set to the provided
    value, with a given sequence of arguments preceding any provided when the new function
    is called.</span></p>

<div>{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ... , argN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>thisArg</var></code></dt>
  <dd>The value to be passed as the <code>this</code> parameter to the target function
    <code><var>func</var></code> when the bound function is called. The value is ignored
    if the bound function is constructed using the {{jsxref("Operators/new", "new")}}
    operator. When using <code>bind</code> to create a function (supplied as a callback)
    inside a <code>setTimeout</code>, any primitive value passed as
    <code><var>thisArg</var></code> is converted to object. If no arguments are provided
    to <code>bind </code>, or if the <code><var>thisArg</var></code> is
    <code><var>null</var></code> or <code><var>undefined</var></code>, the
    <code>this</code> of the executing scope is treated as the
    <code><var>thisArg</var></code> for the new function.</dd>
  <dt><code><var>arg1</var>, <var>arg2</var>, ...<var>argN</var></code>
    {{optional_inline}}</dt>
  <dd>Arguments to prepend to arguments provided to the bound function when invoking
    <code><var>func</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A copy of the given function with the specified <code>this</code> value, and initial
  arguments (if provided).</p>

<h2 id="Description">Description</h2>

<p>The <code>bind()</code> function creates a new <strong>bound function</strong>, which
  is an <em>exotic function object</em> (a term from ECMAScript 2015) that wraps the
  original function object. Calling the bound function generally results in the execution
  of its wrapped function.</p>

<p>A bound function has the following internal properties:</p>

<dl>
  <dt><strong><code>[[BoundTargetFunction]]</code></strong></dt>
  <dd>The wrapped function object</dd>
  <dt><code><strong>[[BoundThis]]</strong></code></dt>
  <dd>The value that is always passed as <code>this</code> value when calling the wrapped
    function.</dd>
  <dt><code><strong>[[BoundArguments]]</strong></code></dt>
  <dd>A list of values whose elements are used as the first arguments to any call to the
    wrapped function.</dd>
  <dt><code><strong>[[Call]]</strong></code></dt>
  <dd>Executes code associated with this object. Invoked via a function call expression.
    The arguments to the internal method are a <code>this</code> value and a list
    containing the arguments passed to the function by a call expression.</dd>
</dl>

<p>When a bound function is called, it calls internal method <code>[[Call]]</code> on
  <code>[[BoundTargetFunction]]</code>, with following arguments
  <code>Call(<var>boundThis</var>, ...<var>args</var>)</code>. Where
  <code><var>boundThis</var></code> is <code>[[BoundThis]]</code>,
  <code><var>args</var></code> is <code>[[BoundArguments]]</code>, followed by the
  arguments passed by the function call.</p>

<p>A bound function may also be constructed using the {{jsxref("Operators/new", "new")}}
  operator. Doing so acts as though the target function had instead been constructed. The
  provided <code>this</code> value is ignored, while prepended arguments are provided to
  the emulated function.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_bound_function">Creating a bound function</h3>

<p>The simplest use of <code>bind()</code> is to make a function that, no matter how it is
  called, is called with a particular <code>this</code> value.</p>

<p>A common mistake for new JavaScript programmers is to extract a method from an object,
  then to later call that function and expect it to use the original object as its
  <code>this</code> (e.g., by using the method in callback-based code).</p>

<p>Without special care, however, the original object is usually lost. Creating a bound
  function from the function, using the original object, neatly solves this problem:</p>

<pre class="brush: js">this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81
</pre>

<h3 id="Partially_applied_functions">Partially applied functions</h3>

<p>The next simplest use of <code>bind()</code> is to make a function with pre-specified
  initial arguments.</p>

<p>These arguments (if any) follow the provided <code>this</code> value and are then
  inserted at the start of the arguments passed to the target function, followed by
  whatever arguments are passed to the bound function at the time it is called.</p>

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtysevenList = list.bind(null, 37);

// Create a function with a preset first argument.
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)
</pre>

<h3 id="With_setTimeout">With <code>setTimeout()</code></h3>

<p>By default within {{domxref("WindowOrWorkerGlobalScope.setTimeout()",
  "window.setTimeout()")}}, the <code>this</code> keyword will be set to the
  {{domxref("window")}} (or <code>global</code>) object. When working with class methods
  that require <code>this</code> to refer to class instances, you may explicitly bind
  <code>this</code> to the callback function, in order to maintain the instance.</p>

<pre class="brush: js">function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();
//  after 1 second, calls 'flower.declare()'
</pre>

<h3 id="Bound_functions_used_as_constructors">Bound functions used as constructors</h3>

<div class="warning">
  <p><strong>Warning:</strong> This section demonstrates JavaScript capabilities and
    documents some edge cases of the <code>bind()</code> method.</p>

  <p>The methods shown below are not the best way to do things, and probably should not be
    used in any production environment.</p>
</div>

<p>Bound functions are automatically suitable for use with the {{jsxref("Operators/new",
  "new")}} operator to construct new instances created by the target function. When a
  bound function is used to construct a value, the provided <code>this</code> is ignored.
</p>

<p>However, provided arguments are still prepended to the constructor call:</p>

<pre class="brush: js">function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

//  not supported in the polyfill below,

//  works fine with native bind:

const YAxisPoint = Point.bind(null, 0/*x*/);

const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0/*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString();                    // '0,5'

axisPoint instanceof Point;              // true
axisPoint instanceof YAxisPoint;         // true
new YAxisPoint(17, 42) instanceof Point; // true
</pre>

<p>Note that you need not do anything special to create a bound function for use with
  {{jsxref("Operators/new", "new")}}.</p>

<p>The corollary is that you need not do anything special to create a bound function to be
  called plainly, even if you would rather require the bound function to only be called
  using {{jsxref("Operators/new", "new")}}.</p>

<pre class="brush: js">//  Example can be run directly in your JavaScript console
//  ...continued from above

//  Can still be called as a normal function
//  (although usually this is undesired)
YAxisPoint(13);

`${emptyObj.x},${emptyObj.y}`;
// &gt;  '0,13'
</pre>

<p>If you wish to support the use of a bound function only using {{jsxref("Operators/new",
  "new")}}, or only by calling it, the target function must enforce that restriction.</p>

<h3 id="Creating_shortcuts">Creating shortcuts</h3>

<p><code>bind()</code> is also helpful in cases where you want to create a shortcut to a
  function which requires a specific <code>this</code> value.</p>

<p>Take {{jsxref("Array.prototype.slice()")}}, for example, which you want to use for
  converting an array-like object to a real array. You could create a shortcut like this:
</p>

<pre class="brush: js">const slice = Array.prototype.slice;

// ...

slice.apply(arguments);
</pre>

<p>With <code>bind()</code>, this can be simplified.</p>

<p>In the following piece of code, <code>slice()</code> is a bound function to the
  {{jsxref("Function.prototype.apply()", "apply()")}} function of
  {{jsxref("Function")}}, with the <code>this</code> value set to the
  {{jsxref("Array.prototype.slice()", "slice()")}} function of
  {{jsxref("Array.prototype")}}. This means that additional <code>apply()</code> calls can
  be eliminated:</p>

<pre class="brush: js">//  same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Function.prototype.bind</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-function"><code>core-js</code></a></li>
  <li>{{jsxref("Function.prototype.apply()")}}</li>
  <li>{{jsxref("Function.prototype.call()")}}</li>
  <li>{{jsxref("Functions", "Functions", "", 1)}}</li>
</ul>
