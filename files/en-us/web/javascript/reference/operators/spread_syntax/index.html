---
title: Spread syntax (...)
slug: Web/JavaScript/Reference/Operators/Spread_syntax
tags:
- ECMAScript 2015
- Iterator
- JavaScript
- Language feature
- Reference
browser-compat: javascript.operators.spread
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>Spread syntax</strong> (<code>...</code>) allows an iterable such as an array
   expression or string to be expanded in places where zero or more arguments (for
   function calls) or elements (for array literals) are expected, or an object expression
   to be expanded in places where zero or more key-value pairs (for object literals) are
   expected.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}</div>


<h2 id="Description">Description</h2>

<p>Spread syntax can be used when all elements from an object or array need to be included
   in a list of some kind. </p>

<p>In the above example, the defined function takes <code>x</code>, <code>y</code>, and
   <code>z</code> as arguments and returns the sum of these values. An array value is also
   defined.</p>

<p>When we invoke the function, we pass it all the values in the array using the spread
   syntax and the array name — <code>...numbers</code>.</p>

<p>If the array contained more than three numbers, e.g. <code>[1, 2, 3, 4]</code>, then it
   would still work fine, except that all four would be passed, but only the first three
   would be used unless you added more arguments to the function, e.g.:</p>

<pre class="brush: js">function sum(x, y, z, n) {
  return x + y + z + n;
}</pre>

<p>The above example is somewhat rigid; the real value in spread syntax is that it works
   with the same value, no matter how many elements are contained in the object, array,
   etc.</p>

<p>It is commonly used when you want to add a new item to a local data store, or display
   all stored items plus a new addition. A very simple version of this kind of action
   could look like so:</p>

<pre class="brush: js">let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];</pre>

<p>In the above example you can rerun the last line as many times as you like, to keep
   adding an additional 12 to the end of the array.</p>

<h2 id="Syntax">Syntax</h2>

<p>For function calls:</p>

<pre class="brush: js"><var>myFunction</var>(...<var>iterableObj</var>); // pass all elements of <em>iterableObj</em> as arguments to function <em>myFunction</em>
</pre>

<p>For array literals or strings:</p>

<pre
   class="brush: js">[...<var>iterableObj</var>, '4', 'five', 6]; // combine two arrays by inserting all elements from <em>iterableObj</em></pre>

<p>For object literals (new in ECMAScript 2018):</p>

<pre
   class="brush: js">let <var>objClone</var> = { ...<var>obj</var> }; // pass all <em>key:value</em> pairs from an object </pre>

<h2 id="Rest_syntax_parameters">Rest syntax (parameters)</h2>

<p>Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of
   spread syntax. Spread syntax "expands" an array into its elements, while rest syntax
   collects multiple elements and "condenses" them into a single element. See
   {{jsxref("Functions/rest_parameters", "rest parameters", "", 1)}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Spread_in_function_calls">Spread in function calls</h3>

<h4 id="Replace_apply">Replace apply()</h4>

<p>It is common to use {{jsxref("Function.prototype.apply()")}} in cases where you want to
   use the elements of an array as arguments to a function.</p>

<pre class="brush: js">function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);</pre>

<p>With spread syntax the above can be written as:</p>

<pre class="brush: js">function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);</pre>

<p>Any argument in the argument list can use spread syntax, and the spread syntax can be
   used multiple times.</p>

<pre class="brush: js">function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);</pre>

<h4 id="Apply_for_new_operator">Apply for new operator</h4>

<p>When calling a constructor with {{jsxref("Operators/new", "new")}} it's not possible to
   <strong>directly</strong> use an array and <code>apply()</code> (<code>apply()</code>
   does a <code>[[Call]]</code> and not a <code>[[Construct]]</code>). However, an array
   can be easily used with <code>new</code> thanks to spread syntax:</p>

<pre class="brush: js">let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
</pre>

<p>To use <code>new</code> with an array of parameters without spread syntax, you would
   have to do it <strong>indirectly</strong> through partial application:</p>

<pre class="brush: js">function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply(this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}

function myConstructor () {
   console.log("arguments.length: " + arguments.length);
   console.log(arguments);
   this.prop1="val1";
   this.prop2="val2";
};

let myArguments = ["hi", "how", "are", "you", "mr", null];
let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
//  (internal log of myConstructor):           arguments.length: 6
//  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
//  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}</pre>

<h3 id="Spread_in_array_literals">Spread in array literals</h3>

<h4 id="A_more_powerful_array_literal">A more powerful array literal</h4>

<p>Without spread syntax, to create a new array using an existing array as one part of it,
   the array literal syntax is no longer sufficient and imperative code must be used
   instead using a combination of {{jsxref("Array.prototype.push", "push()")}},
   {{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat",
   "concat()")}}, etc. With spread syntax this becomes much more succinct:</p>

<pre class="brush: js">let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
</pre>

<p>Just like spread for argument lists, <code>...</code> can be used anywhere in the array
   literal, and may be used more than once.</p>

<h4 id="Copy_an_array">Copy an array</h4>

<pre class="brush: js">let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
</pre>

<div class="notecard note">
   <p><strong>Note:</strong> Spread syntax effectively goes one level deep while copying
      an array. Therefore, it may be unsuitable for copying multidimensional arrays, as
      the following example shows. (The same is true with {{jsxref("Object.assign()")}}
      and spread syntax.)</p>

   <pre class="brush: js example-bad">let a = [[1], [2], [3]];
let b = [...a];

b.shift().shift();
//  1

//  Oh no!  Now array 'a' is affected as well:
a
//  [[], [2], [3]]
</pre>
</div>

<h4 id="A_better_way_to_concatenate_arrays">A better way to concatenate arrays</h4>

<p>{{jsxref("Array.prototype.concat()")}} is often used to concatenate an array to the end
   of an existing array. Without spread syntax, this is done as:</p>

<pre class="brush: js">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);</pre>

<p>With spread syntax this becomes:</p>

<pre class="brush: js">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment)
</pre>

<p>{{jsxref("Array.prototype.unshift()")}} is often used to insert an array of values at
   the start of an existing array. Without spread syntax, this is done as:</p>

<pre class="brush: js">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2)

//  arr1 is now [3, 4, 5, 0, 1, 2]</pre>

<p>With spread syntax, this becomes:</p>

<pre class="brush: js">let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]
</pre>

<div class="notecard note">
   <p><strong>Note:</strong> Unlike <code>unshift()</code>, this creates a new
      <code>arr1</code>, and does not modify the original <code>arr1</code> array
      in-place.</p>
</div>

<h3 id="Spread_in_object_literals">Spread in object literals</h3>

<p>The <a href="https://github.com/tc39/proposal-object-rest-spread">Rest/Spread
      Properties for ECMAScript</a> proposal (ES2018) added spread properties to
   {{jsxref("Operators/Object_initializer", "object literals", 1)}}. It copies own
   enumerable properties from a provided object onto a new object.</p>

<p>Shallow-cloning (excluding prototype) or merging of objects is now possible using a
   shorter syntax than {{jsxref("Object.assign()")}}.</p>

<pre class="brush: js">let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }</pre>

<p>Note that {{jsxref("Object.assign()")}} triggers {{jsxref("Functions/set",
   "setters")}}, whereas spread syntax doesn't.</p>

<p>Note that you cannot replace or mimic the {{jsxref("Object.assign()")}} function:</p>

<pre class="brush: js">let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) =&gt; ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }</pre>

<p>In the above example, the spread syntax does not work as one might expect: it spreads
   an <em>array</em> of arguments into the object literal, due to the rest parameter.</p>

<h3 id="Only_for_iterables">Only for iterables</h3>

<p>Objects themselves are not iterable, but they become iterable when used in an Array, or
   with iterating functions such as <code>map()</code>, <code>reduce()</code>, and
   <code>assign()</code>. When merging 2 objects together with the spread operator, it is
   assumed another iterating function is used when the merging occurs.</p>

<p>Spread syntax (other than in the case of spread properties) can be applied only to <a
      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator">iterable</a>
   objects:</p>

<pre class="brush: js">let obj = {'key1': 'value1'};
let array = [...obj]; // TypeError: obj is not iterable
</pre>

<h3 id="Spread_with_many_values">Spread with many values</h3>

<p>When using spread syntax for function calls, be aware of the possibility of exceeding
   the JavaScript engine's argument length limit. See {{jsxref("Function.prototype.apply",
   "apply()")}} for more details.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
   <li>{{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}} (also
      ‘<code>...</code>’)</li>
   <li>{{jsxref("Function.prototype.apply()")}} (also ‘<code>...</code>’)</li>
</ul>
