---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
tags:
- Array
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Array.unshift
---
<div>{{JSRef}}</div>

<p>The <code><strong>unshift()</strong></code> method adds one or more elements to the
  beginning of an array and returns the new length of the array.</p>

<div>{{EmbedInteractiveExample("pages/js/array-unshift.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, ... , elementN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>element<em>N</em></code></dt>
  <dd>The elements to add to the front of the <code><var>arr</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The new {{jsxref("Array.length", "length")}} property of the object upon which the
  method was called.</p>

<h2 id="Description">Description</h2>

<p>The <code>unshift</code> method inserts the given values to the beginning of an
  array-like object.</p>

<p><code>unshift</code> is intentionally generic. This method can be
  {{jsxref("Function.call", "called", "", 1)}} or {{jsxref("Function.apply", "applied",
  "", 1)}} to objects resembling arrays. Objects which do not contain a
  <code>length</code> property—reflecting the last in a series of consecutive, zero-based
  numerical properties—may not behave in any meaningful manner.</p>

<p>Please note that, if multiple elements are passed as parameters, they're inserted in
  chunk at the beginning of the object, in the exact same order they were passed as
  parameters. Hence, calling <code>unshift</code> with <code><var>n</var></code>
  arguments <strong>once</strong>, or calling it <code><var>n</var></code> times with
  <strong>1</strong> argument (with a loop, for example), don't yield the same results.
</p>

<p>See example:</p>

<pre class="brush: js">let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [<strong>1, 2, 3</strong>, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [<strong>3, 2, 1</strong>, 4, 5, 6]
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_unshift">Using unshift</h3>

<pre class="brush: js">let arr = [1, 2]

arr.unshift(0)               // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1)          // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3])        // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5])  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.push()")}}</li>
  <li>{{jsxref("Array.prototype.pop()")}}</li>
  <li>{{jsxref("Array.prototype.shift()")}}</li>
  <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
