---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- WeakMap
browser-compat: javascript.builtins.WeakMap.get
---
<div>{{JSRef}}</div>

<p>The <strong><code>get()</code></strong> method returns a specified element from a
  <code>WeakMap</code> object.</p>

<div>{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">get(key)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>key</var></code></dt>
  <dd>Required. The key of the element to return from the <code>WeakMap</code> object.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The element associated with the specified key in the <code>WeakMap</code> object. If
  the key can't be found, {{jsxref("undefined")}} is returned.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_get_method">Using the get() method</h3>

<pre class="brush: js">var wm = new WeakMap();
wm.set(window, 'foo');

wm.get(window); // Returns "foo".
wm.get('baz');  // Returns undefined.
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("WeakMap")}}</li>
  <li>{{jsxref("WeakMap.set()")}}</li>
  <li>{{jsxref("WeakMap.has()")}}</li>
</ul>
