---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.slice
---
<div>{{JSRef}}</div>

<p>The <strong><code>slice()</code></strong> method returns a shallow copy of a portion of
  an array into a new array object selected from <code>start</code> to <code>end</code>
  (<code>end</code> not included) where <code>start</code> and <code>end</code> represent
  the index of items in that array. The original array will not be modified.</p>

<div>{{EmbedInteractiveExample("pages/js/array-slice.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">slice()
slice(start)
slice(start, end)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>start</var></code> {{optional_inline}}</dt>
  <dd>
    <p>Zero-based index at which to start extraction.</p>
    <p>A negative index can be used, indicating an offset from the end of the sequence.
    <code>slice(-2)</code> extracts the last two elements in the sequence.</p>
    <p>If <code><var>start</var></code> is undefined, <code>slice</code> starts from the
    index <code>0</code>.</p>
    <p>If <code><var>start</var></code> is greater than the index range of the sequence, an
    empty array is returned.</p>
  </dd>
  <dt><code><var>end</var></code> {{optional_inline}}</dt>
  <dd>
    <p>Zero-based index <em>before</em> which to end extraction. <code>slice</code>
    extracts up to but not including <code><var>end</var></code>. For example,
    <code>slice(1,4)</code> extracts the second element through the fourth element
    (elements indexed 1, 2, and 3).</p>
    <p>A negative index can be used, indicating an offset from the end of the sequence.
    <code>slice(2,-1)</code> extracts the third element through the second-to-last element
    in the sequence.</p>
    <p>If <code><var>end</var></code> is omitted, <code>slice</code> extracts through the
    end of the sequence (<code><var>arr</var>.length</code>).</p>
    <p>If <code><var>end</var></code> is greater than the length of the sequence,
    <code>slice</code> extracts through to the end of the sequence
    (<code><var>arr</var>.length</code>).</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new array containing the extracted elements.</p>

<h2 id="Description">Description</h2>

<p><code>slice</code> does not alter the original array. It returns a shallow copy of
  elements from the original array. Elements of the original array are copied into the
  returned array as follows:</p>

<ul>
  <li>For object <code>slice</code> copies object references into the new array. Both the
    original and new array refer to the same object. If an object changes, the changes are
    visible to both the new and original arrays.</li>
  <li>For strings, numbers and booleans (not {{jsxref("String")}}, {{jsxref("Number")}}
    and {{jsxref("Boolean")}} objects), <code>slice</code> copies the values into the new
    array. Changes to the string, number, or boolean in one array do not affect the other
    array.</li>
</ul>

<p>If a new element is added to either array, the other array is not affected.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Return_a_portion_of_an_existing_array">Return a portion of an existing array</h3>

<pre class="brush: js">let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
</pre>

<h3 id="Using_slice">Using slice</h3>

<p>In the following example, <code>slice</code> creates a new array, <code>newCar</code>,
  from <code>myCar</code>. Both include a reference to the object <code>myHonda</code>.
  When the color of <code>myHonda</code> is changed to purple, both arrays reflect the
  change.</p>

<pre class="brush: js">// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)
</pre>

<p>This script writes:</p>

<pre class="brush: js">myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
</pre>

<h3 id="Array-like_objects">Array-like objects</h3>

<p><code>slice</code> method can also be called to convert Array-like objects/collections
  to a new Array. You just {{jsxref("Function.prototype.bind", "bind")}} the method to the
  object. The {{jsxref("Functions/arguments", "arguments")}} inside a function is an
  example of an 'array-like object'.</p>

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]
</pre>

<p>Binding can be done with the {{jsxref("Function.prototype.call", "call()")}} method of
  {{jsxref("Function")}} and it can also be reduced using
  <code>[].slice.call(arguments)</code> instead of
  <code>Array.prototype.slice.call</code>.</p>

<p>Anyway, it can be simplified using {{jsxref("Function.prototype.bind", "bind")}}.</p>

<pre class="brush: js">let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(unboundSlice)

function list() {
  return slice(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.splice()")}}</li>
  <li>{{jsxref("Function.prototype.call()")}}</li>
  <li>{{jsxref("Function.prototype.bind()")}}</li>
</ul>
