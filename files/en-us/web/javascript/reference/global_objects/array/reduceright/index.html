---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
tags:
- Array
- ECMAScript 5
- JavaScript
- Method
- Prototype
- Polyfill
browser-compat: javascript.builtins.Array.reduceRight
---
<div>{{JSRef}}</div>

<p>The <code><strong>reduceRight()</strong></code> method applies a function against an
  accumulator and each value of the array (from right-to-left) to reduce it to a single
  value.</p>

<div>{{EmbedInteractiveExample("pages/js/array-reduce-right.html","shorter")}}</div>

<p>See also {{jsxref("Array.prototype.reduce()")}} for left-to-right.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
reduceRight((accumulator, currentValue) => { ... } )
reduceRight((accumulator, currentValue, index) => { ... } )
reduceRight((accumulator, currentValue, index, array) => { ... } )
reduceRight((accumulator, currentValue, index, array) => { ... }, initialValue)

// Callback function
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)

// Callback reducer function
reduceRight(function callbackFn(accumulator, currentValue) { ... })
reduceRight(function callbackFn(accumulator, currentValue, index) { ... })
reduceRight(function callbackFn(accumulator, currentValue, index, array){ ... })
reduceRight(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callbackFn</var></code></dt>
  <dd>Function to execute on each value in the array, taking four arguments:
    <dl>
      <dt><code><var>accumulator</var></code></dt>
      <dd>The value previously returned in the last invocation of the callback, or
        <code><var>initialValue</var></code>, if supplied. (See below.)</dd>
      <dt><code><var>currentValue</var></code></dt>
      <dd>The current element being processed in the array.</dd>
      <dt><code><var>index</var></code>{{optional_inline}}</dt>
      <dd>The index of the current element being processed in the array.</dd>
      <dt><code><var>array</var></code>{{optional_inline}}</dt>
      <dd>The array <code>reduceRight()</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code><var>initialValue</var></code> {{optional_inline}}</dt>
  <dd>Value to use as accumulator to the first call of the
    <code><var>callbackFn</var></code>. If no initial value is supplied, the last element in
    the array will be used and skipped. Calling reduce or reduceRight on an empty array
    without an initial value creates a <code>TypeError</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The value that results from the reduction.</p>

<h2 id="Description">Description</h2>

<p><code>reduceRight</code> executes the callback function once for each element present
  in the array, excluding holes in the array, receiving four arguments: the initial value
  (or value from the previous callback call), the value of the current element, the
  current index, and the array over which iteration is occurring.</p>

<p>The call to the reduceRight <code><var>callbackFn</var></code> would look something like
  this:</p>

<pre class="brush: js">arr.reduceRight(function(accumulator, currentValue, index, array) {
  // ...
});
</pre>

<p>The first time the function is called, the <code><var>accumulator</var></code> and
  <code><var>currentValue</var></code> can be one of two values. If an
  <code><var>initialValue</var></code> was provided in the call to
  <code>reduceRight</code>, then <code><var>accumulator</var></code> will be equal to
  <code><var>initialValue</var></code> and <code><var>currentValue</var></code> will be
  equal to the last value in the array. If no <code><var>initialValue</var></code> was
  provided, then <code><var>accumulator</var></code> will be equal to the last value in
  the array and <code><var>currentValue</var></code> will be equal to the second-to-last
  value.</p>

<p>If the array is empty and no <code><var>initialValue</var></code> was provided,
  {{jsxref("TypeError")}} would be thrown. If the array has only one element (regardless
  of position) and no <code><var>initialValue</var></code> was provided, or if
  <code><var>initialValue</var></code> is provided but the array is empty, the solo value
  would be returned without calling <code><var>callbackFn</var></code>.</p>

<p>Some example run-throughs of the function would look like this:</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
</pre>

<p>The callback would be invoked four times, with the arguments and return values in each
  call being as follows:</p>

<table>
  <thead>
    <tr>
      <th scope="col"><code><var>callback</var></code></th>
      <th scope="col"><code><var>accumulator</var></code></th>
      <th scope="col"><code><var>currentValue</var></code></th>
      <th scope="col"><code><var>index</var></code></th>
      <th scope="col"><code><var>array</var></code></th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>4</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>7</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>7</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>9</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>9</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>10</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>10</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>10</code></td>
    </tr>
  </tbody>
</table>

<p>The value returned by <code>reduceRight</code> would be that of the last callback
  invocation (<code>10</code>).</p>

<p>And if you were to provide an <code><var>initialValue</var></code>, the result would
  look like this:</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}, 10);
</pre>

<table>
  <thead>
    <tr>
      <th scope="col"><code><var>callback</var></code></th>
      <th scope="col"><code><var>accumulator</var></code></th>
      <th scope="col"><code><var>currentValue</var></code></th>
      <th scope="col"><code><var>index</var></code></th>
      <th scope="col"><code><var>array</var></code></th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>10</code></td>
      <td><code>4</code></td>
      <td><code>4</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>14</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>14</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>17</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>19</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>19</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>20</code></td>
    </tr>
    <tr>
      <th scope="row">fifth call</th>
      <td><code>20</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>20</code></td>
    </tr>
  </tbody>
</table>

<p>The value returned by <code>reduceRight</code> this time would be, of course,
  <code>20</code>.</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>reduceRight</code> was added to the ECMA-262 standard in the 5th edition; as such
  it may not be present in all implementations of the standard. You can work around this
  by inserting the following code at the beginning of your scripts, allowing use of
  <code>reduceRight</code> in implementations which do not natively support it.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: https://es5.github.io/#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length &gt;&gt;&gt; 0, k = len - 1, value;
    if (arguments.length &gt;= 2) {
      value = arguments[1];
    } else {
      while (k &gt;= 0 &amp;&amp; !(k in t)) {
        k--;
      }
      if (k &lt; 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k &gt;= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Sum_up_all_values_within_an_array">Sum up all values within an array</h3>

<pre class="brush: js">var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// sum is 6
</pre>

<h3 id="Flatten_an_array_of_arrays">Flatten an array of arrays</h3>

<pre class="brush: js">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

</pre>

<h3
  id="Run_a_list_of_asynchronous_functions_with_callbacks_in_series_each_passing_their_results_to_the_next">
  Run a list of asynchronous functions with callbacks in series each passing their results
  to the next</h3>

<pre class="brush: js">const waterfall = (...functions) =&gt; (callback, ...args) =&gt;
  functions.reduceRight(
    (composition, fn) =&gt; (...results) =&gt; fn(composition, ...results),
    callback
  )(...args);

const randInt = max =&gt; Math.floor(Math.random() * max)

const add5 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) =&gt; {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) =&gt; {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5) // -&gt; 14

// same as:

const computation2 = (input, callback) =&gt; {
  const f6 = x=&gt; div4(callback, x);
  const f5 = (x, y) =&gt; add(f6, x, y);
  const f4 = x =&gt; split(f5, x);
  const f3 = x =&gt; sub2(f4, x);
  const f2 = x =&gt; mult3(f3, x);
  add5(f2, input);
}</pre>

<h3 id="Difference_between_reduce_and_reduceRight">Difference between <code>reduce</code>
  and <code>reduceRight</code></h3>

<pre class="brush: js">var a = ['1', '2', '3', '4', '5'];
var left  = a.reduce(function(prev, cur)      { return prev + cur; });
var right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"</pre>

<h3>Defining composable functions</h3>

<p>Function composition is a mechanism for combining functions, in which the
output of each function is passed into the next one, and the output of the last
function is the final result.  In this example we use <code>reduceRight()</code>
to implement function composition.</p>

<p>See also <a href="https://en.wikipedia.org/wiki/Function_composition_(computer_science)">Function composition</a> on Wikipedia.

<pre class="brush: js">const compose = (...args) =&gt; (value) =&gt; args.reduceRight((acc, fn) =&gt; fn(acc), value)

// Increment passed number
const inc = (n) =&gt; n + 1

// Doubles the passed value
const double = (n) =&gt; n * 2

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.reduceRight</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
