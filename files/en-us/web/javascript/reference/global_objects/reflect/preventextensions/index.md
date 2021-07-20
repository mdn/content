---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- Reflect
- Polyfill
browser-compat: javascript.builtins.Reflect.preventExtensions
---
<div>{{JSRef}}</div>

<p>The static
    <strong><code>Reflect.preventExtensions()</code></strong> method prevents new
    properties from ever being added to an object (i.e., prevents future extensions to the
    object). It is similar to {{jsxref("Object.preventExtensions()")}}, but with
  some <a href="#difference_from_object.preventExtensions">differences</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-preventextensions.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Reflect.preventExtensions(<var>target</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object on which to prevent extensions.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Boolean")}} indicating whether or not the target was successfully set to
  prevent extensions.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>A {{jsxref("TypeError")}}, if <code><var>target</var></code> is not an
  {{jsxref("Object")}}.</p>

<h2 id="Description">Description</h2>

<p>The <code>Reflect.preventExtensions()</code> method allows you to prevent new
  properties from ever being added to an object (i.e., prevents future extensions to the
  object). It is similar to {{jsxref("Object.preventExtensions()")}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Reflect.preventExtensions">Using Reflect.preventExtensions()</h3>

<p>See also {{jsxref("Object.preventExtensions()")}}.</p>

<pre class="brush: js">// Objects are extensible by default.
let empty = {}
Reflect.isExtensible(empty)  // === true

// ...but that can be changed.
Reflect.preventExtensions(empty)
Reflect.isExtensible(empty)  // === false
</pre>

<h3 id="Difference_from_Object.preventExtensions">Difference from
  Object.preventExtensions()</h3>

<p>If the <code><var>target</var></code> argument to this method is not an object (a
  primitive), then it will cause a {{jsxref("TypeError")}}. With
  {{jsxref("Object.preventExtensions()")}}, a non-object <code><var>target</var></code>
  will be coerced to an object.</p>

<pre class="brush: js">Reflect.preventExtensions(1)
// TypeError: 1 is not an object

Object.preventExtensions(1)
// 1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Reflect.preventExtensions</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-reflect"><code>core-js</code></a></li>
  <li>{{jsxref("Reflect")}}</li>
  <li>{{jsxref("Object.isExtensible()")}}</li>
</ul>
