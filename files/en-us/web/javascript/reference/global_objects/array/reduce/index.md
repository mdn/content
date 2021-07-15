---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
tags:
- Array
- Array method
- ECMAScript 5
- JavaScript
- Method
- Prototype
- Reduce
- Reference
- Polyfill
browser-compat: javascript.builtins.Array.reduce
---
<div>{{JSRef}}</div>

<p>The <code><strong>reduce()</strong></code> method executes a <strong>reducer</strong>
  function (that you provide) on each element of the array, resulting in a single output
  value.</p>

<div>{{EmbedInteractiveExample("pages/js/array-reduce.html")}}</div>


<p>The <strong>reducer</strong> function takes four arguments:</p>

<ol>
  <li>Accumulator</li>
  <li>Current Value</li>
  <li>Current Index</li>
  <li>Source Array</li>
</ol>

<p>Your <strong>reducer</strong> function's returned value is assigned to the accumulator,
  whose value is remembered across each iteration throughout the array, and ultimately
  becomes the final, single resulting value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Arrow function
reduce((accumulator, currentValue) => { ... } )
reduce((accumulator, currentValue, index) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function callbackFn(accumulator, currentValue) { ... })
reduce(function callbackFn(accumulator, currentValue, index) { ... })
reduce(function callbackFn(accumulator, currentValue, index, array){ ... })
reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callbackFn</var></code></dt>
  <dd>
    <p>A function to execute on each element in the array (except for the first, if no
      <code><var>initialValue</var></code> is supplied).</p>

    <p>It takes four arguments:</p>

    <dl>
      <dt><code><var>accumulator</var></code></dt>
      <dd>The accumulator accumulates <var>callbackFn</var>'s return values. It is the
        accumulated value previously returned in the last invocation of the callback—or
        <code><var>initialValue</var></code>, if it was supplied (see below).</dd>
      <dt><code><var>currentValue</var></code></dt>
      <dd>The current element being processed in the array.</dd>
      <dt><code><var>index</var></code> {{optional_inline}}</dt>
      <dd>The index of the current element being processed in the array. Starts from index
        <code>0</code> if an <code>initialValue</code> is provided. Otherwise, it starts
        from index <code>1</code>.</dd>
      <dt><code><var>array</var></code> {{optional_inline}}</dt>
      <dd>The array <code>reduce()</code> was called upon.</dd>
    </dl>
  </dd>
  <dt><code><var>initialValue</var></code> {{optional_inline}}</dt>
  <dd>A value to use as the first argument to the first call of the
    <code><var>callbackFn</var></code>. If no <code><var>initialValue</var></code> is
    supplied, the first element in the array will be used as the initial
    <code><var>accumulator</var></code> value and skipped as
    <code><var>currentValue</var></code>. Calling <code>reduce()</code> on an empty array
    without an <code><var>initialValue</var></code> will throw a {{jsxref("TypeError")}}.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The single value that results from the reduction.</p>

<h2 id="Description">Description</h2>

<p>The <code>reduce()</code> method executes the <code><var>callbackFn</var></code> once for
  each assigned value present in the array, taking four arguments:</p>

<ol>
  <li><code><var>accumulator</var></code></li>
  <li><code><var>currentValue</var></code></li>
  <li><code><var>currentIndex</var></code></li>
  <li><code><var>array</var></code></li>
</ol>

<p>The first time the callback is called, <code><var>accumulator</var></code> and
  <code><var>currentValue</var></code> can be one of two values. If
  <code><var>initialValue</var></code> is provided in the call to <code>reduce()</code>,
  then <code><var>accumulator</var></code> will be equal to
  <code><var>initialValue</var></code>, and <code><var>currentValue</var></code> will be
  equal to the first value in the array. If no <code><var>initialValue</var></code> is
  provided, then <code><var>accumulator</var></code> will be equal to the first value in
  the array, and <code><var>currentValue</var></code> will be equal to the second.</p>

<div class="note">
  <p><strong>Note:</strong> If <code><var>initialValue</var></code> is not provided,
    <code>reduce()</code> will execute the callback function starting at index
    <code>1</code>, skipping the first index. If <code><var>initialValue</var></code> is
    provided, it will start at index <code>0</code>.</p>
</div>

<p>If the array is empty and no <code><var>initialValue</var></code> is provided,
  {{jsxref("TypeError")}} will be thrown.</p>

<p>If the array only has one element (regardless of position) and no
  <code><var>initialValue</var></code> is provided, or if
  <code><var>initialValue</var></code> is provided but the array is empty, the solo value
  will be returned <em>without</em> calling <em><code>callbackFn</code>.</em></p>

<p>If <code><var>initialValue</var></code> is provided and the array is not empty then the
  reduce method will always invoke the callback function starting at index 0. If
  <code><var>initialValue</var></code> is not provided then the reduce method will act
  differently for arrays with length larger than 1, equal to 1 and 0, as shown in the
  following example:</p>

<pre class="brush: js">
const getMax = (a, b) =&gt; Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError
</pre>

<h3 id="How_reduce_works">How reduce() works</h3>

<p>Suppose the following use of <code>reduce()</code> occurred:</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue
})
</pre>

<p>The callback would be invoked four times, with the arguments and return values in each
  call being as follows:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code><var>callback</var></code> iteration</th>
      <th scope="col"><code><var>accumulator</var></code></th>
      <th scope="col"><code><var>currentValue</var></code></th>
      <th scope="col"><code><var>currentIndex</var></code></th>
      <th scope="col"><code><var>array</var></code></th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>0</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>1</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>3</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>6</code></td>
      <td><code>4</code></td>
      <td><code>4</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>10</code></td>
    </tr>
  </tbody>
</table>

<p>The value returned by <code>reduce()</code> would be that of the last callback
  invocation (<code>10</code>).</p>

<p>You can also provide an {{jsxref("Functions/Arrow_functions", "Arrow Function","",1)}}
  instead of a full function. The code below will produce the same output as the code in
  the block above:</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) =&gt; accumulator + currentValue )
</pre>

<p>If you were to provide an <code><var>initialValue</var></code> as the second argument
  to <code>reduce()</code>, the result would look like this:</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) =&gt; {
    return accumulator + currentValue
}, 10)
</pre>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code><var>callback</var></code> iteration</th>
      <th scope="col"><code><var>accumulator</var></code></th>
      <th scope="col"><code><var>currentValue</var></code></th>
      <th scope="col"><code><var>currentIndex</var></code></th>
      <th scope="col"><code><var>array</var></code></th>
      <th scope="col">return value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">first call</th>
      <td><code>10</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>10</code></td>
    </tr>
    <tr>
      <th scope="row">second call</th>
      <td><code>10</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>11</code></td>
    </tr>
    <tr>
      <th scope="row">third call</th>
      <td><code>11</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>13</code></td>
    </tr>
    <tr>
      <th scope="row">fourth call</th>
      <td><code>13</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>16</code></td>
    </tr>
    <tr>
      <th scope="row">fifth call</th>
      <td><code>16</code></td>
      <td><code>4</code></td>
      <td><code>4</code></td>
      <td><code>[0, 1, 2, 3, 4]</code></td>
      <td><code>20</code></td>
    </tr>
  </tbody>
</table>

<p>The value returned by <code>reduce()</code> in this case would be <code>20</code>.</p>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: https://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError( 'Array.prototype.reduce ' +
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // Steps 3, 4, 5, 6, 7
      var k = 0;
      var value;

      if (arguments.length &gt;= 2) {
        value = arguments[1];
      } else {
        while (k &lt; len &amp;&amp; !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k &gt;= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
        value = o[k++];
      }

      // 8. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    }
  });
}
</pre>

<div class="notecard note">
  <p><strong>Note:</strong> If you need to support truly obsolete JavaScript engines
    that do not support {{jsxref("Object.defineProperty()")}}, it is best not to polyfill
    <code>Array.prototype</code> methods at all, as you cannot make them
    <strong>non-enumerable</strong>.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Sum_all_the_values_of_an_array">Sum all the values of an array</h3>

<pre class="brush: js">let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)
// sum is 6

</pre>

<p>Alternatively written with an arrow function:</p>

<pre class="brush: js">let total = [ 0, 1, 2, 3 ].reduce(
  ( accumulator, currentValue ) =&gt; accumulator + currentValue,
  0
)</pre>

<h3 id="Sum_of_values_in_an_object_array">Sum of values in an object array</h3>

<p>To sum up the values contained in an array of objects, you <strong>must</strong> supply
  an <code><var>initialValue</var></code>, so that each item passes through your function.
</p>

<pre class="brush: js">let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)

console.log(sum) // logs 6
</pre>

<p>Alternatively written with an arrow function:</p>

<pre class="brush: js">let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (accumulator, currentValue) =&gt; accumulator + currentValue.x
    , initialValue
)

console.log(sum) // logs 6</pre>

<h3 id="Flatten_an_array_of_arrays">Flatten an array of arrays</h3>

<pre class="brush: js">let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
</pre>

<p>Alternatively written with an arrow function:</p>

<pre class="brush: js">let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) =&gt; accumulator.concat(currentValue),
  []
)
</pre>

<h3 id="Counting_instances_of_values_in_an_object">Counting instances of values in an
  object</h3>

<pre class="brush: js">let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
</pre>

<h3 id="Grouping_objects_by_a_property">Grouping objects by a property</h3>

<pre class="brush: js">let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
</pre>

<h3
  id="Bonding_arrays_contained_in_an_array_of_objects_using_the_spread_operator_and_initialValue">
  Bonding arrays contained in an array of objects using the spread operator and
  initialValue</h3>

<pre class="brush: js">// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books]
}, ['Alphabet'])

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]</pre>

<h3 id="Remove_duplicate_items_in_an_array">Remove duplicate items in an array</h3>

<div class="notecard note">
  <p><strong>Note:</strong> If you are using an environment compatible with
    {{jsxref("Set")}} and {{jsxref("Array.from()")}}, you could use
    <code>let arrayWithNoDuplicates = Array.from(new Set(myArray))</code> to get an array where
    duplicate items have been removed.</p>
</div>

<pre class="brush: js">let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myArrayWithNoDuplicates)</pre>

<h3 id="Replace_.filter.map_with_.reduce">Replace .filter().map() with .reduce()</h3>

<p>Using {{jsxref("Array.filter()")}} then {{jsxref("Array.map()")}} traverses the array
  twice, but you can achieve the same effect while traversing only once with
  {{jsxref("Array.reduce()")}}, thereby being more efficient. (If you like for loops, you
  can filter and map while traversing once with {{jsxref("Array.forEach()")}}).</p>

<pre class="brush: js">const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) =&gt; {
  if (currentValue &gt; 0) {
    const doubled = currentValue * 2;
    accumulator.push(doubled);
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]</pre>

<h3 id="Running_Promises_in_Sequence">Running Promises in Sequence</h3>

<pre class="brush: js">/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) =&gt; promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) =&gt; {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200
</pre>

<h3 id="Function_composition_enabling_piping">Function composition enabling piping</h3>

<pre class="brush: js">// Building-blocks to use for composition
const double = x =&gt; x + x
const triple = x =&gt; 3 * x
const quadruple = x =&gt; 4 * x

// Function composition enabling pipe functionality
const pipe = (...functions) =&gt; input =&gt; functions.reduce(
    (acc, fn) =&gt; fn(acc),
    input
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240

</pre>

<h3 id="Write_map_using_reduce">Write map using reduce</h3>

<pre class="brush: js">if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(initialValue, currentValue, index, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) =&gt; currentValue + index + array.length
) // [5, 7, , 10]

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.reduce</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
</ul>
