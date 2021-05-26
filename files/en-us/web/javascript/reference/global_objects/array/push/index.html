---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
- Array
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Array.push
---
<div>{{JSRef}}</div>

<p>The <code><strong>push()</strong></code> method adds one or more elements to the end of
  an array and returns the new length of the array.</p>

<div>{{EmbedInteractiveExample("pages/js/array-push.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
push(element0)
push(element0, element1)
push(element0, element1, ... , elementN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>element<em>N</em></code></dt>
  <dd>The element(s) to add to the end of the array.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The new {{jsxref("Array.length", "length")}} property of the object upon which the
  method was called.</p>

<h2 id="Description">Description</h2>

<p>The <code>push</code> method appends values to an array.</p>

<p><code>push</code> is intentionally generic. This method can be used with
  {{jsxref("Function.call", "call()")}} or {{jsxref("Function.apply", "apply()")}} on
  objects resembling arrays. The <code>push</code> method relies on a <code>length</code>
  property to determine where to start inserting the given values. If the
  <code>length</code> property cannot be converted into a number, the index used is 0.
  This includes the possibility of <code>length</code> being nonexistent, in which case
  <code>length</code> will also be created.</p>

<p>Although {{jsxref("Global_Objects/String", "strings", "", 1)}} are native, Array-like
  objects, they are not suitable in applications of this method, as strings are immutable.
   Similarly for the native, Array-like object {{jsxref("Functions/arguments",
  "arguments", "", 1)}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Adding_elements_to_an_array">Adding elements to an array</h3>

<p>The following code creates the <code>sports</code> array containing two elements, then
  appends two elements to it. The <code>total</code> variable contains the new length of
  the array.</p>

<pre class="brush: js">let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
</pre>

<h3 id="Merging_two_arrays">Merging two arrays</h3>

<p>This example uses {{jsxref("Function.apply", "apply()")}} to push all elements from a
  second array.</p>

<p>Do <em>not</em> use this method if the second array (<code>moreVegs</code> in the
  example) is very large because the maximum number of parameters that one function can
  take is limited in practice. See {{jsxref("Function.apply", "apply()")}} for more
  details.</p>

<pre class="brush: js">let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs)

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
</pre>

<h3 id="Using_an_object_in_an_array-like_fashion">Using an object in an array-like fashion
</h3>

<p>As mentioned above, <code>push</code> is intentionally generic, and we can use that to
  our advantage. <code>Array.prototype.push</code> can work on an object just fine, as
  this example shows.</p>

<p>Note that we don't create an array to store a collection of objects. Instead, we store
  the collection on the object itself and use <code>call</code> on
  <code>Array.prototype.push</code> to trick the method into thinking we are dealing with
  an array—and it just works, thanks to the way JavaScript allows us to establish the
  execution context in any way we want.</p>

<pre class="brush: js">let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)
// → 2
</pre>

<p>Note that although <code>obj</code> is not an array, the method <code>push</code>
  successfully incremented <code>obj</code>'s <code>length</code> property just like if we
  were dealing with an actual array.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.pop()")}}</li>
  <li>{{jsxref("Array.prototype.shift()")}}</li>
  <li>{{jsxref("Array.prototype.unshift()")}}</li>
  <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
