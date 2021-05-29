---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.filter
---
<div>{{JSRef}}</div>

<p>The <strong><code>filter()</code></strong> method <strong>creates a new array</strong> with all elements that pass the test implemented by the provided function.</p>

<div>{{EmbedInteractiveExample("pages/js/array-filter.html","shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function callbackFn(element) { ... })
filter(function callbackFn(element, index) { ... })
filter(function callbackFn(element, index, array){ ... })
filter(function callbackFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code><var>callbackFn</var></code></dt>
 <dd>
 <p>Function is a predicate, to test each element of the array. Return a value that coerces to <code>true</code> to keep the element, or to <code>false</code> otherwise.</p>

 <p>It accepts three arguments:</p>

 <dl>
  <dt><code><var>element</var></code></dt>
  <dd>The current element being processed in the array.</dd>
  <dt><code><var>index</var></code>{{optional_inline}}</dt>
  <dd>The index of the current element being processed in the array.</dd>
  <dt><code><var>array</var></code>{{optional_inline}}</dt>
  <dd>The array <code>filter</code> was called upon.</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code>{{optional_inline}}</dt>
 <dd>Value to use as <code>this</code> when executing <code><var>callbackFn</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.</p>

<h2 id="Description">Description</h2>

<p><code>filter()</code> calls a provided <code><var>callbackFn</var></code> function once for each element in an array, and constructs a new array of all the values for which <code><var>callbackFn</var></code> returns <a href="/en-US/docs/Glossary/Truthy">a value that coerces to <code>true</code></a>. <code><var>callbackFn</var></code> is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the <code><var>callbackFn</var></code> test are skipped, and are not included in the new array.</p>

<p><code><var>callbackFn</var></code> is invoked with three arguments:</p>

<ol>
 <li>the value of the element</li>
 <li>the index of the element</li>
 <li>the Array object being traversed</li>
</ol>

<p>If a <code><var>thisArg</var></code> parameter is provided to <code>filter</code>, it will be used as the callback's <code>this</code> value. Otherwise, the value <code>undefined</code> will be used as its <code>this</code> value. The <code>this</code> value ultimately observable by <code><var>callback</var></code> is determined according to <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">the usual rules for determining the <code>this</code> seen by a function</a>.</p>

<p><code>filter()</code> does not mutate the array on which it is called.</p>

<p>The range of elements processed by <code>filter()</code> is set before the first invocation of <code><var>callbackFn</var></code>. Elements which are appended to the array (from <code><var>callbackFn</var></code>) after the call to <code>filter()</code> begins will not be visited by <code><var>callbackFn</var></code>. If existing elements of the array are deleted in the same way they will not be visited.</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>filter()</code> was added to the ECMA-262 standard in the 5th edition. Therefore, it may not be present in all implementations of the standard.</p>

<p>You can work around this by inserting the following code at the beginning of your scripts, allowing use of <code>filter()</code> in ECMA-262 implementations which do not natively support it. This algorithm is exactly equivalent to the one specified in ECMA-262, 5th edition, assuming that <code>fn.call</code> evaluates to the original value of {{jsxref("Function.prototype.bind()")}}, and that {{jsxref("Array.prototype.push()")}} has its original value.</p>

<pre class="brush: js">if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') &amp;&amp; this) )
        throw new TypeError();

    var len = this.length &gt;&gt;&gt; 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;

    var kValue;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          kValue = t[i]; // in case t is changed in callback
          if (func(t[i], i, t)){
            res[c++] = kValue;
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          kValue = t[i];
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = kValue;
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Filtering_out_all_small_values">Filtering out all small values</h3>

<p>The following example uses <code>filter()</code> to create a filtered array that has all elements with values less than <code>10</code> removed.</p>

<pre class="brush: js">function isBigEnough(value) {
  return value &gt;= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]
</pre>

<h3 id="Find_all_prime_numbers_in_an_array">Find all prime numbers in an array</h3>

<p>The following example returns all prime numbers in the array:</p>

<pre class="brush: js">const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num &gt; i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num &gt; 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]</pre>

<h3 id="Filtering_invalid_entries_from_JSON">Filtering invalid entries from JSON</h3>

<p>The following example uses <code>filter()</code> to create a filtered json of all elements with non-zero, numeric <code>id</code>.</p>

<pre class="brush: js">let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
  if (Number.isFinite(item.id) &amp;&amp; item.id !== 0) {
    return true
  }
  invalidEntries++
  return false;
}

let arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5
</pre>

<h3 id="Searching_in_array">Searching in array</h3>

<p>Following example uses <code>filter()</code> to filter array content based on search criteria.</p>

<pre class="brush: js">let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']</pre>

<h4 id="ES2015_Implementation">ES2015 Implementation</h4>

<pre class="brush: js">const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) =&gt; {
  return arr.filter(el =&gt; el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']

</pre>

<h3 id="Affecting_Initial_Array_modifying_appending_and_deleting">Affecting Initial Array (modifying, appending and deleting)</h3>

<p>The following examples tests the behavior of the <code>filter</code> method when the array is modified.</p>

<pre class="brush: js">// Modifying each words
let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const modifiedWords = words.filter( (word, index, arr) =&gt; {
  arr[index+1] +=' extra'
  return word.length &lt; 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const appendedWords = words.filter( (word, index, arr) =&gt; {
  arr.push('new')
  return word.length &lt; 6
})

console.log(appendedWords)
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) =&gt; {
  arr.pop()
  return word.length &lt; 6
})

console.log(deleteWords)
// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// ["spray" ,"limit"]</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Array.prototype.filter</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
</ul>
