---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
- Array
- ECMAScript 5
- JavaScript
- Method
- Prototype
- Reference
- Polyfill
browser-compat: javascript.builtins.Array.some
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>some()</code></strong> method tests whether
    at least one element in the array passes the test implemented by the provided
  function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-some.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function callbackFn(element) { ... })
some(function callbackFn(element, index) { ... })
some(function callbackFn(element, index, array){ ... })
some(function callbackFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callback</var></code></dt>
  <dd>
    <p>A function to test for each element, taking three arguments:</p>

    <dl>
      <dt><code><var>element</var></code></dt>
      <dd>The current element being processed in the array.</dd>
      <dt><code><var>index</var></code>{{optional_inline}}</dt>
      <dd>The index of the current element being processed in the array.</dd>
      <dt><code><var>array</var></code>{{optional_inline}}</dt>
      <dd>The array <code>some()</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code><var>thisArg</var></code>{{optional_inline}}</dt>
  <dd>A value to use as <code>this</code> when executing <code><var>callbackFn</var></code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>true</code> if the callback function returns a {{Glossary("truthy")}} value for
  at least one element in the array. Otherwise, <code>false</code>.</p>

<h2 id="Description">Description</h2>

<p>The <code>some()</code> method executes the <code><var>callbackFn</var></code> function
  once for each element present in the array until it finds the one where
  <code><var>callbackFn</var></code> returns a <em>truthy</em> value (a value that becomes
  true when converted to a Boolean). If such an element is found, <code>some()</code>
  immediately returns <code>true</code>. Otherwise, <code>some()</code> returns
  <code>false</code>. <code><var>callbackFn</var></code> is invoked only for indexes of the
  array with assigned values. It is not invoked for indexes which have been deleted or
  which have never been assigned values.</p>

<p><code><var>callbackFn</var></code> is invoked with three arguments: the value of the
  element, the index of the element, and the Array object being traversed.</p>

<p>If a <code><var>thisArg</var></code> parameter is provided to <code>some()</code>, it
  will be used as the callback's <code>this</code> value. Otherwise, the value
  {{jsxref("undefined")}} will be used as its <code>this</code> value. The
  <code>this</code> value ultimately observable by <code><var>callbackFn</var></code> is
  determined according to <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for
    determining the <code>this</code> seen by a function</a>.</p>

<p><code>some()</code> does not mutate the array on which it is called.</p>

<p>The range of elements processed by <code>some()</code> is set before the first
  invocation of <code><var>callbackFn</var></code>. Elements appended to the array after the
  call to <code>some()</code> begins will not be visited by
  <code><var>callbackFn</var></code>. If an existing, unvisited element of the array is
  changed by <code><var>callbackFn</var></code>, its value passed to the visiting
  <code><var>callbackFn</var></code> will be the value at the time that <code>some()</code>
  visits that element's index. Elements that are deleted are not visited.</p>

<div class="notecard note">
  <p><strong>Note:</strong> Calling this method on an empty array returns
    <code>false</code> for any condition!</p>
</div>

<h2 id="Polyfill">Polyfill</h2>

<p><code>some()</code> was added to the ECMA-262 standard in the 5th edition,
  and it may not be present in all implementations of the standard. You can work around
  this by inserting the following code at the beginning of your scripts, allowing use of
  <code>some()</code> in implementations which do not natively support it.</p>

<p>This algorithm is exactly the one specified in ECMA-262, 5th edition,
  assuming {{jsxref("Object")}} and {{jsxref("TypeError")}} have their original values and
  that <code><var>fun</var>.call</code> evaluates to the original value of
  {{jsxref("Function.prototype.call()")}}.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: https://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun, thisArg) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length &gt;&gt;&gt; 0;

    for (var i = 0; i &lt; len; i++) {
      if (i in t &amp;&amp; fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Testing_value_of_array_elements">Testing value of array elements</h3>

<p>The following example tests whether any element in the array is bigger than 10.</p>

<pre class="brush: js">function isBiggerThan10(element, index, array) {
  return element &gt; 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true</pre>

<h3 id="Testing_array_elements_using_arrow_functions">Testing array elements using arrow
  functions</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow
    functions</a> provide a shorter syntax for the same test.</p>

<pre class="brush: js">[2, 5, 8, 1, 4].some(x =&gt; x &gt; 10);  // false
[12, 5, 8, 1, 4].some(x =&gt; x &gt; 10); // true</pre>

<h3 id="Checking_whether_a_value_exists_in_an_array">Checking whether a value exists in an
  array</h3>

<p>To mimic the function of the <code>includes()</code> method, this custom
  function returns <code>true</code> if the element exists in the array:</p>

<pre class="brush: js">const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<h3 id="Checking_whether_a_value_exists_using_an_arrow_function">Checking whether a value
  exists using an arrow function</h3>

<pre class="brush: js">const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal =&gt; val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<h3 id="Converting_any_value_to_Boolean">Converting any value to Boolean</h3>

<pre class="brush: js">const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.some</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.every()")}}</li>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
  <li>{{jsxref("Array.prototype.find()")}}</li>
  <li>{{jsxref("TypedArray.prototype.some()")}}</li>
</ul>
