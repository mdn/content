---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
tags:
- Array
- ECMAScript 5
- JavaScript
- Method
- Prototype
- Reference
- Polyfill
browser-compat: javascript.builtins.Array.map
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code><strong>map()</strong></code> method <strong>creates
      a new array</strong> populated with the results of calling a provided function on
    every element in the calling array.</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-map.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function callbackFn(element) { ... })
map(function callbackFn(element, index) { ... })
map(function callbackFn(element, index, array){ ... })
map(function callbackFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callbackFn</var></code></dt>
  <dd>
    <p>Function that is called for every element of <code><var>arr</var></code>. Each time
      <code><var>callbackFn</var></code> executes, the returned value is added to
      <code><var>newArray</var></code>.</p>

    <p>The <code><var>callbackFn</var></code> function accepts the following arguments:</p>

    <dl>
      <dt><code><var>element</var></code></dt>
      <dd>The current element being processed in the array.</dd>
      <dt><code><var>index</var></code>{{optional_inline}}</dt>
      <dd>The index of the current element being processed in the array.</dd>
      <dt><code><var>array</var></code>{{optional_inline}}</dt>
      <dd>The array <code>map</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code>thisArg</code>{{optional_inline}}</dt>
  <dd>Value to use as <code>this</code> when executing <code><var>callbackFn</var></code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new array with each element being the result of the callback function.</p>

<h2 id="Description">Description</h2>

<p><code>map</code> calls a provided <code><var>callbackFn</var></code> function
  <strong>once for each element</strong> in an array, in order, and constructs a new array
  from the results. <code><var>callbackFn</var></code> is invoked only for indexes of the
  array which have assigned values (including {{jsxref("undefined")}}).</p>

<p>It is <em>not</em> called for missing elements of the array; that is:</p>

<ul>
  <li>indexes that have never been set;</li>
  <li>indexes which have been deleted.</li>
</ul>

<h3 id="When_not_to_use_map">When not to use map()</h3>

<p>Since <code>map</code> builds a new array, using it when you aren't using the returned
  array is an anti-pattern; use {{jsxref("Array/forEach", "forEach")}} or
  {{jsxref("Statements/for...of", "for...of")}} instead.</p>

<p>You shouldn't be using <code>map</code> if:</p>

<ul>
  <li>you're not using the array it returns; and/or</li>
  <li>you're not returning a value from the callback.</li>
</ul>

<h3 id="Parameters_in_Detail">Parameters in Detail</h3>

<p><code><var>callbackFn</var></code> is invoked with three arguments: the value of the
  element, the index of the element, and the array object being mapped.</p>

<p>If a <code>thisArg</code> parameter is provided, it will be used as callback's
  <code>this</code> value. Otherwise, the value {{jsxref("undefined")}} will be used as
  its <code>this</code> value. The <code>this</code> value ultimately observable by
  <code><var>callbackFn</var></code> is determined according to <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for
    determining the <code>this</code> seen by a function</a>.</p>

<p><code>map</code> does not mutate the array on which it is called (although
  <code><var>callbackFn</var></code>, if invoked, may do so).</p>

<p>The range of elements processed by <code>map</code> is set before the first invocation
  of <code><var>callbackFn</var></code>. Elements which are appended to the array after the
  call to <code>map</code> begins will not be visited by <code><var>callbackFn</var></code>.
  If existing elements of the array are changed after the call to <code>map</code>, their
  value will be the value at the time <code><var>callbackFn</var></code> visits them.
  Elements that are deleted after the call to <code>map</code> begins and before being
  visited are not visited.</p>

<p>Due to the algorithm defined in the specification, if the array which <code>map</code>
  was called upon is sparse, resulting array will also be sparse keeping same indices
  blank.</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>map</code> was added to the ECMA-262 standard in the 5th edition. Therefore, it
  may not be present in all implementations of the standard.</p>

<p>You can work around this by inserting the following code at the beginning of your
  scripts, allowing use of <code>map</code> in implementations which do not natively
  support it. This algorithm is exactly the one specified in ECMA-262, 5th edition,
  assuming {{jsxref("Object")}}, {{jsxref("TypeError")}}, and {{jsxref("Array")}} have
  their original values and that <code>callback.call</code> evaluates to the original
  value of <code>{{jsxref("Function.prototype.call")}}</code>.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: https://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: https://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length &gt; 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k &lt; len
    while (k &lt; len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Mapping_an_array_of_numbers_to_an_array_of_square_roots">Mapping an array of
  numbers to an array of square roots</h3>

<p>The following code takes an array of numbers and creates a new array containing the
  square roots of the numbers in the first array.</p>

<pre class="brush: js">let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
</pre>

<h3 id="Using_map_to_reformat_objects_in_an_array">Using map to reformat objects in an
  array</h3>

<p>The following code takes an array of objects and creates a new array containing the
  newly reformatted objects.</p>

<pre class="brush: js">let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj =&gt; {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
</pre>

<h3 id="Mapping_an_array_of_numbers_using_a_function_containing_an_argument">Mapping an
  array of numbers using a function containing an argument</h3>

<p>The following code shows how <code>map</code> works when a function requiring one
  argument is used with it. The argument will automatically be assigned from each element
  of the array as <code>map</code> loops through the original array.</p>

<pre class="brush: js">let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
</pre>

<h3 id="Using_map_generically">Using map generically</h3>

<p>This example shows how to use map on a {{jsxref("String")}} to get an array of bytes in
  the ASCII encoding representing the character values:</p>

<pre class="brush: js">let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
</pre>

<h3 id="Using_map_generically_querySelectorAll">Using map generically querySelectorAll
</h3>

<p>This example shows how to iterate through a collection of objects collected by
  <code>querySelectorAll</code>. This is because <code>querySelectorAll</code> returns a
  <code>NodeList</code> (which is a collection of objects).</p>

<p>In this case, we return all the selected <code>option</code>s' values on the screen:
</p>

<pre class="brush: js">let elems = document.querySelectorAll('select option:checked')
let values = Array.prototype.map.call(elems, function(obj) {
  return obj.value
})
</pre>

<p>An easier way would be the {{jsxref("Array.from()")}} method.</p>

<h3 id="Tricky_use_case">Tricky use case</h3>

<p>(<a href="http://www.wirfs-brock.com/allen/posts/166">inspired by this blog post</a>)
</p>

<p>It is common to use the callback with one argument (the element being traversed).
  Certain functions are also commonly used with one argument, even though they take
  additional optional arguments. These habits may lead to confusing behaviors.</p>

<p>Consider:</p>

<pre class="brush: js">["1", "2", "3"].map(parseInt)</pre>

<p>While one might expect <code>[1, 2, 3]</code>, the actual result is
  <code>[1, NaN, NaN]</code>.</p>

<p>{{jsxref("parseInt")}} is often used with one argument, but takes two. The first is an
  expression and the second is the radix to the callback function,
  <code>Array.prototype.map</code> passes 3 arguments:</p>

<ul>
  <li>the element</li>
  <li>the index</li>
  <li>the array</li>
</ul>

<p>The third argument is ignored by {{jsxref("parseInt")}}—but <em>not</em> the second
  one! This is the source of possible confusion.</p>

<p>Here is a concise example of the iteration steps:</p>

<pre class="brush: js">// parseInt(string, radix) -&gt; map(parseInt(value, index))
/*  first iteration  (index is 0): */ parseInt("1", 0)  // 1
/*  second iteration (index is 1): */ parseInt("2", 1)  // NaN
/*  third iteration  (index is 2): */ parseInt("3", 2)  // NaN
</pre>

<p>Then let's talk about solutions.</p>

<pre class="brush: js">function returnInt(element) {
  return parseInt(element, 10)
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map( str =&gt; parseInt(str) )

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number)  // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number)  // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map( str =&gt; parseInt(str) ) // [1, 2, 3]
</pre>

<p>One alternative output of the map method being called with {{jsxref("parseInt")}} as a
  parameter runs as follows:</p>

<pre class="brush: js">let xs = ['10', '10', '10']

xs = xs.map(parseInt)

console.log(xs)
// Actual result of 10,NaN,2 may be unexpected based on the above description.</pre>

<h3 id="Mapped_array_contains_undefined">Mapped array contains undefined</h3>

<p>When {{jsxref("undefined")}} or nothing is returned:</p>

<pre class="brush: js">let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index &lt; 3) {
     return num
  }
})
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.map</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
  <li>{{jsxref("Map")}} object</li>
  <li>{{jsxref("Array.from()")}}</li>
</ul>
