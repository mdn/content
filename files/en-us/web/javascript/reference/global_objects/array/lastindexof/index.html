---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
tags:
- Array
- ECMAScript 5
- JavaScript
- Method
- Prototype
- Polyfill
browser-compat: javascript.builtins.Array.lastIndexOf
---
<div>{{JSRef}}</div>

<p>The <strong><code>lastIndexOf()</code></strong> method returns the last index at which
  a given element can be found in the array, or -1 if it is not present. The array is
  searched backwards, starting at <code>fromIndex</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>searchElement</var></code></dt>
  <dd>Element to locate in the array.</dd>
  <dt><code><var>fromIndex</var></code> {{optional_inline}}</dt>
  <dd>The index at which to start searching backwards. Defaults to the array's length
    minus one (<code>arr.length - 1</code>), i.e. the whole array will be searched. If the
    index is greater than or equal to the length of the array, the whole array will be
    searched. If negative, it is taken as the offset from the end of the array. Note that
    even when the index is negative, the array is still searched from back to front. If
    the calculated index is less than 0, -1 is returned, i.e. the array will not be
    searched.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The last index of the element in the array; <strong>-1</strong> if not found.</p>

<h2 id="Description">Description</h2>

<p><code>lastIndexOf</code> compares <code>searchElement</code> to elements of the Array
  using <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators">strict
    equality</a> (the same method used by the ===, or triple-equals, operator).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_lastIndexOf">Using <code>lastIndexOf</code></h3>

<p>The following example uses <code>lastIndexOf</code> to locate values in an array.</p>

<pre class="brush: js">var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
</pre>

<h3 id="Finding_all_the_occurrences_of_an_element">Finding all the occurrences of an
  element</h3>

<p>The following example uses <code>lastIndexOf</code> to find all the indices of an
  element in a given array, using {{jsxref("Array.prototype.push", "push")}} to add them
  to another array as they are found.</p>

<pre class="brush: js">var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx &gt; 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]
</pre>

<p>Note that we have to handle the case <code>idx == 0</code> separately here because the
  element will always be found regardless of the <code>fromIndex</code> parameter if it is
  the first element of the array. This is different from the
  {{jsxref("Array.prototype.indexOf", "indexOf")}} method.</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>lastIndexOf</code> was added to the ECMA-262 standard in the 5th edition; as such
  it may not be present in other implementations of the standard. You can work around this
  by inserting the following code at the beginning of your scripts, allowing use of
  <code>lastIndexOf</code> in implementations which do not natively support it. This
  algorithm is exactly the one specified in ECMA-262, 5th edition, assuming
  {{jsxref("Object")}}, {{jsxref("TypeError")}}, {{jsxref("Number")}},
  {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, and {{jsxref("Math.min")}} have their
  original values.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: https://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n, k,
      t = Object(this),
      len = t.length &gt;&gt;&gt; 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length &gt; 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 &amp;&amp; n != (1 / 0) &amp;&amp; n != -(1 / 0)) {
        n = (n &gt; 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n &gt;= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k &gt;= 0; k--) {
      if (k in t &amp;&amp; t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
</pre>

<p>Again, note that this implementation aims for absolute compatibility with
  <code>lastIndexOf</code> in Firefox and the SpiderMonkey JavaScript engine, including in
  several cases which are arguably edge cases. If you intend to use this in real-world
  applications, you may be able to calculate <code>from</code> with less complicated code
  if you ignore those cases.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype.lastIndexOf</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.indexOf()")}}</li>
  <li>{{jsxref("TypedArray.prototype.lastIndexOf()")}}</li>
</ul>
