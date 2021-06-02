---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
- Array
- ECMAScript 5
- JavaScript
- Method
- Prototype
- Polyfill
browser-compat: javascript.builtins.Array.every
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>every()</code></strong> method tests whether
    all elements in the array pass the test implemented by the provided function. It
    returns a Boolean value.</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-every.html","shorter")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function callbackFn(element) { ... })
every(function callbackFn(element, index) { ... })
every(function callbackFn(element, index, array){ ... })
every(function callbackFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callbackFn</var></code></dt>
  <dd>A function to test for each element, taking three arguments:
    <dl>
      <dt><code><var>element</var></code></dt>
      <dd>The current element being processed in the array.</dd>
      <dt><code><var>index</var></code> {{Optional_inline}}</dt>
      <dd>The index of the current element being processed in the array.</dd>
      <dt><code><var>array</var></code> {{Optional_inline}}</dt>
      <dd>The array <code>every</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code><var>thisArg</var></code> {{Optional_inline}}</dt>
  <dd>A value to use as <code>this</code> when executing <code><var>callbackFn</var></code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><strong><code>true</code></strong> if the <code><var>callbackFn</var></code> function
  returns a {{Glossary("truthy")}} value for every array element. Otherwise,
  <strong><code>false</code></strong>.</p>

<h2 id="Description">Description</h2>

<p>The <code>every</code> method executes the provided <code><var>callbackFn</var></code>
  function once for each element present in the array until it finds the one where
  <code><var>callbackFn</var></code> returns a {{Glossary("falsy")}} value. If such an
  element is found, the <code>every</code> method immediately returns <code>false</code>.
  Otherwise, if <code><var>callbackFn</var></code> returns a {{Glossary("truthy")}} value
  for all elements, <code>every</code> returns <code>true</code>.</p>

<div class="notecard note">
  <p><strong>Note:</strong> Calling this method on an empty array will return
    <code>true</code> for any condition!</p>
</div>

<p><code><var>callbackFn</var></code> is invoked only for array indexes which have assigned
  values. It is not invoked for indexes which have been deleted, or which have never been
  assigned values.</p>

<p><code><var>callbackFn</var></code> is invoked with three arguments: the value of the
  element, the index of the element, and the Array object being traversed.</p>

<p>If a <code><var>thisArg</var></code> parameter is provided to <code>every</code>, it
  will be used as callback's <code>this</code> value. Otherwise, the value
  <code>undefined</code> will be used as its <code>this</code> value. The
  <code>this</code> value ultimately observable by <code><var>callback</var></code> is
  determined according to <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for
    determining the <code>this</code> seen by a function</a>.</p>

<p><code>every</code> does not mutate the array on which it is called.</p>

<p>The range of elements processed by <code>every</code> is set before the first
  invocation of <code><var>callbackFn</var></code>. Therefore,
  <code><var>callbackFn</var></code> will not run on elements that are appended to the array
  after the call to <code>every</code> begins. If existing elements of the array are
  changed, their value as passed to <code><var>callbackFn</var></code> will be the value at
  the time <code>every</code> visits them. Elements that are deleted are not visited.</p>

<p><code>every</code> acts like the "for all" quantifier in mathematics. In particular,
  for an empty array, it returns <code>true</code>. (It is <a
    href="https://en.wikipedia.org/wiki/Vacuous_truth">vacuously true</a> that all
  elements of the <a href="https://en.wikipedia.org/wiki/Empty_set#Properties">empty
    set</a> satisfy any given condition.)</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>every</code> was added to the ECMA-262 standard in the 5th edition,
  and it may not be present in other implementations of the standard. You can work around
  this by inserting the following code at the beginning of your scripts, allowing use of
  <code>every</code> in implementations which do not natively support it.</p>

<p>This algorithm is exactly the one specified in ECMA-262, 5th edition,
  assuming <code>Object</code> and <code>TypeError</code> have their original values, and
  that <code><var>callbackfn</var>.call</code> evaluates to the original value of
  {{jsxref("Function.prototype.call")}}.</p>

<pre class="brush: js">if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function' &amp;&amp; Object.prototype.toString.call(callbackfn) !== '[object Function]') {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length &gt; 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k &lt; len
    while (k &lt; len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
        var testResult;
        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        // of callbackfn with T as the this value if T is not undefined
        // else is the result of calling callbackfn
        // and argument list containing kValue, k, and O.
        if(T) testResult = callbackfn.call(T, kValue, k, O);
        else testResult = callbackfn(kValue,k,O)

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Testing_size_of_all_array_elements">Testing size of all array elements</h3>

<p>The following example tests whether all elements in the array are bigger than 10.</p>

<pre class="brush: js">function isBigEnough(element, index, array) {
  return element &gt;= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
</pre>

<h3 id="Using_arrow_functions">Using arrow functions</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow
    functions</a> provide a shorter syntax for the same test.</p>

<pre class="brush: js">[12, 5, 8, 130, 44].every(x =&gt; x &gt;= 10);   // false
[12, 54, 18, 130, 44].every(x =&gt; x &gt;= 10); // true</pre>

<h3 id="Affecting_Initial_Array_modifying_appending_and_deleting">Affecting Initial Array
  (modifying, appending, and deleting)</h3>

<p>The following examples tests the behavior of the <code>every</code> method when the
  array is modified.</p>

<pre class="brush: js">// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) =&gt; {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -&gt; ${elem}`)
  return elem &lt; 2
})

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -&gt; 1
// 2nd iteration: [1,1,2,4][1] -&gt; 1
// 3rd iteration: [1,1,2,3][2] -&gt; 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every( (elem, index, arr) =&gt; {
  arr.push('new')
  console.log(`[${arr}][${index}] -&gt; ${elem}`)
  return elem &lt; 4
})

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -&gt; 1
// 2nd iteration: [1, 2, 3, new, new][1] -&gt; 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -&gt; 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) =&gt; {
  arr.pop()
  console.log(`[${arr}][${index}] -&gt; ${elem}`)
  return elem &lt; 4
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -&gt; 1
// 2nd iteration: [1,2][1] -&gt; 2</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.every</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
  <li>{{jsxref("Array.prototype.some()")}}</li>
  <li>{{jsxref("Array.prototype.find()")}}</li>
  <li>{{jsxref("TypedArray.prototype.every()")}}</li>
</ul>
