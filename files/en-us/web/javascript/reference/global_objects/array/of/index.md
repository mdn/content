---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
tags:
- Array
- ECMAScript 2015
- JavaScript
- Method
- Polyfill
browser-compat: javascript.builtins.Array.of
---
<div>{{JSRef}}</div>

<p>The <code><strong>Array.of()</strong></code> method creates a new <code>Array</code>
  instance from a variable number of arguments, regardless of number or type of the
  arguments.</p>

<p>The difference between <code><strong>Array.of()</strong></code> and the
  <code><strong>Array</strong></code> constructor is in the handling of integer arguments:
  <code><strong>Array.of(7)</strong></code> creates an array with a single element,
  <code>7</code>, whereas <code><strong>Array(7)</strong></code> creates an empty array
  with a <code>length</code> property of <code>7</code> (<strong>Note:</strong> this
  implies an array of <code>7</code> empty slots, not slots with actual
  {{jsxref("undefined")}} values).</p>

<pre class="brush: js">Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
</pre>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, ... , elementN)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>element<em>N</em></var></code></dt>
  <dd>Elements used to create the array.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{jsxref("Array")}} instance.</p>

<h2 id="Description">Description</h2>

<p>This function is part of the ECMAScript 2015 standard.</p>

<p>For more information, see:</p>

<ul>
  <li><a href="https://gist.github.com/rwaldron/1074126"><code>Array.of()</code> </a></li>
  <li><a href="https://gist.github.com/rwaldron/1074126"><code>Array.from()</code>
      proposal</a></li>
  <li><a href="https://gist.github.com/rwaldron/3186576"><code>Array.of()</code>
      polyfill</a></li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Array.of">Using Array.of</h3>

<pre class="brush: js">Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.of</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li><a href="https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js">A
    polyfill</a></li>
  <li>{{jsxref("Array")}}</li>
  <li>{{jsxref("Array.from()")}}</li>
  <li>{{jsxref("TypedArray.of()")}}</li>
</ul>
