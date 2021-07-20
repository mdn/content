---
title: BigInt() constructor
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
tags:
- BigInt
- Constructor
- JavaScript
- Reference
browser-compat: javascript.builtins.BigInt.BigInt
---
<div>{{JSRef}}</div>

<p>The <strong><code>BigInt()</code></strong> constructor returns a value of type
  <strong>bigint</strong>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">BigInt(<var>value</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>value</var></code></dt>
  <dd>The numeric value of the object being created. May be a string or an integer.</dd>
</dl>

<div class="notecard note">
  <p><strong>Note:</strong> <code>BigInt()</code> is not used with the
    {{JSxRef("Operators/new", "new")}} operator.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_BigInt">Creating a new BigInt</h3>

<pre class="brush: js">BigInt(123);
// 123n
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("BigInt")}} class</li>
</ul>
