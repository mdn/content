---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
tags:
- Array
- JavaScript
- Method
- Prototype
- Reference
browser-compat: javascript.builtins.Array.join
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code><strong>join()</strong></code> method creates and
    returns a new string by concatenating all of the elements in an array (or an <a
      href="/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects">array-like
      object</a>), separated by commas or a specified separator string. If the array has
    only one item, then that item will be returned without using the separator.</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-join.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
join()
join(separator)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>separator</var></code> {{optional_inline}}</dt>
  <dd>Specifies a string to separate each pair of adjacent elements of the array. The
    separator is converted to a string if necessary. If omitted, the array elements are
    separated with a comma (","). If <code>separator</code> is an empty string, all
    elements are joined without any characters in between them.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string with all array elements joined. If <code><em>arr</em>.length</code> is
  <code>0</code>, the empty string is returned.</p>

<h2 id="Description">Description</h2>

<p>The string conversions of all array elements are joined into one string.</p>

<div class="warning">
  <p><strong>Warning:</strong> If an element is <code>undefined</code>, <code>null</code> or an empty array
    <code>[]</code>, it is converted to an empty string.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Joining_an_array_four_different_ways">Joining an array four different ways</h3>

<p>The following example creates an array, <code>a</code>, with three elements, then joins
  the array four times: using the default separator, then a comma and a space, then a plus
  and an empty string.</p>

<pre class="brush: js">var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'</pre>

<h3 id="Joining_an_array-like_object">Joining an array-like object</h3>

<p>The following example joins array-like object
  (<code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a></code>),
  by calling {{jsxref("Function.prototype.call")}} on <code>Array.prototype.join</code>.
</p>

<pre class="brush: js">function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
//expected output: "1,a,true"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.prototype.split()")}}</li>
  <li>{{jsxref("Array.prototype.toString()")}}</li>
  <li>{{jsxref("TypedArray.prototype.join()")}}</li>
</ul>
