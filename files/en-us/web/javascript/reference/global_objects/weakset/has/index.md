---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- WeakSet
browser-compat: javascript.builtins.WeakSet.has
---
<div>{{JSRef}}</div>

<p>The <strong><code>has()</code></strong> method returns a boolean indicating whether an
  object exists in a <code>WeakSet</code> or not.</p>

<div>{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">has(value)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>value</var></code></dt>
  <dd>Required. The object to test for presence in the <code>WeakSet</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt>Boolean</dt>
  <dd>Returns <code>true</code> if an element with the specified value exists in the
    <code>WeakSet</code> object; otherwise <code>false</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_has_method">Using the has method</h3>

<pre class="brush: js">var ws = new WeakSet();
var obj = {};
ws.add(window);

mySet.has(window);  // returns true
mySet.has(obj);     // returns false
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("WeakSet")}}</li>
  <li>{{jsxref("WeakSet.prototype.add()")}}</li>
  <li>{{jsxref("WeakSet.prototype.delete()")}}</li>
</ul>
