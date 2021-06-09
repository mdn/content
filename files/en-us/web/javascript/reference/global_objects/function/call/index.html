---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
tags:
  - Function
  - JavaScript
  - Method
browser-compat: javascript.builtins.Function.call
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code><strong>call()</strong></code> method calls a
    function with a given <code>this</code> value and arguments provided
    individually.</span></p>

<div>{{EmbedInteractiveExample("pages/js/function-call.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, ... , argN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
  <dd>
    <p>The value to use as <code>this</code> when calling <code><var>func</var></code>.
    </p>

    <div class="notecard note">
      <p><strong>Note:</strong> In certain cases, <code><var>thisArg</var></code> may
        not be the actual value seen by the method.</p>

      <p>If the method is a function in {{jsxref("Strict_mode", "non-strict mode", "",
        1)}}, {{jsxref("Global_Objects/null", "null")}} and
        {{jsxref("Global_Objects/undefined", "undefined")}} will be replaced with the
        global object, and primitive values will be converted to objects.</p>
    </div>
  </dd>
  <dt>
    <code><var>arg1</var>, <var>arg2</var>, ...<var>argN</var></code> {{optional_inline}}
  </dt>
  <dd>Arguments for the function.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The result of calling the function with the specified
  <code><strong>this</strong></code> value and arguments.</p>

<h2 id="Description">Description</h2>

<p>The <code>call()</code> allows for a function/method belonging to one object to be
  assigned and called for a different object.</p>

<p><code>call()</code> provides a new value of <code>this</code> to the function/method.
  With <code>call()</code>, you can write a method once and then inherit it in another
  object, without having to rewrite the method for the new object.</p>

<div class="notecard note">
  <p><strong>Note:</strong> While the syntax of this function is almost identical to that
    of {{jsxref("Function.prototype.apply", "apply()")}}, the fundamental difference is
    that <code>call()</code> accepts an <strong>argument list</strong>, while
    <code>apply()</code> accepts a <strong>single array of arguments</strong>.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_call_to_chain_constructors_for_an_object">Using <code>call</code> to chain
  constructors for an object</h3>

<p>You can use <code>call</code> to chain constructors for an object (similar to Java).
</p>

<p>In the following example, the constructor for the <code>Product</code> object is
  defined with two parameters: <code>name</code> and <code>price</code>.</p>

<p>Two other functions, <code>Food</code> and <code>Toy</code>, invoke
  <code>Product</code>, passing <code>this</code>, <code>name</code>, and
  <code>price</code>. <code>Product</code> initializes the properties <code>name</code>
  and <code>price</code>, both specialized functions define the <code>category</code>.</p>

<pre class="brush: js">function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);
</pre>

<h3 id="Using_call_to_invoke_an_anonymous_function">Using <code>call</code> to invoke an
  anonymous function</h3>

<p>In this example, we create an anonymous function and use <code>call</code> to invoke it
  on every object in an array.</p>

<p>The main purpose of the anonymous function here is to add a <code>print</code> function
  to every object, which is able to print the correct index of the object in the array.
</p>

<div class="notecard note">
  <p><strong>Note:</strong> Passing the object as <code>this</code> value is not strictly necessary, but is done
    for explanatory purpose.</p>
</div>

<pre class="brush: js">const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i &lt; animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
</pre>

<h3 id="Using_call_to_invoke_a_function_and_specifying_the_context_for_this">Using
  <code>call</code> to invoke a function and specifying the context for
  '<code>this</code>'</h3>

<p>In the example below, when we call <code>greet</code>, the value of <code>this</code>
  will be bound to object <code>obj</code>.</p>

<pre class="brush: js">function greet() {
  const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

const obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
</pre>

<h3 id="Using_call_to_invoke_a_function_and_without_specifying_the_first_argument">Using
  <code>call</code> to invoke a function and without specifying the first argument</h3>

<p>In the example below, we invoke the <code>display</code> function without passing the
  first argument. If the first argument is not passed, the value of <code>this</code> is
  bound to the global object.</p>

<pre class="brush: js">var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen</pre>

<div class="note">
  <p><strong>Note:</strong> In strict mode, the value of <code>this</code> will be
    <code>undefined</code>. See below.</p>
</div>

<pre class="brush: js">'use strict';

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Function.prototype.bind()")}}</li>
  <li>{{jsxref("Function.prototype.apply()")}}</li>
  <li>
    <p><a
        href="/en-US/docs/Learn/JavaScript/Objects">Introduction
        to Object-Oriented JavaScript</a></p>
  </li>
</ul>
