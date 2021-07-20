---
title: Reflect.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- Reflect
- Polyfill
browser-compat: javascript.builtins.Reflect.getPrototypeOf
---
<div>{{JSRef}}</div>

<p>The static <strong><code>Reflect.getPrototypeOf()</code></strong> method is almost the
  same method as {{jsxref("Object.getPrototypeOf()")}}. It returns the prototype (i.e. the
  value of the internal <code>[[Prototype]]</code> property) of the specified object.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-getprototypeof.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Reflect.getPrototypeOf(<var>target</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object of which to get the prototype.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The prototype of the given object. If there are no inherited properties,
  {{jsxref("null")}} is returned.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>A {{jsxref("TypeError")}}, if <code><var>target</var></code> is not an
  {{jsxref("Object")}}.</p>

<h2 id="Description">Description</h2>

<p>The <code>Reflect.getPrototypeOf</code> method returns the prototype (i.e. the value of
  the internal <code>[[Prototype]]</code> property) of the specified object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Reflect.getPrototypeOf">Using Reflect.getPrototypeOf()</h3>

<pre class="brush: js">Reflect.getPrototypeOf({})                  // Object.prototype
Reflect.getPrototypeOf(Object.prototype)    // null
Reflect.getPrototypeOf(Object.create(null)) // null
</pre>

<h3 id="Compared_to_Object.getPrototypeOf">Compared to Object.getPrototypeOf()</h3>

<pre class="brush: js">// Same result for Objects
Object.getPrototypeOf({})   // Object.prototype
Reflect.getPrototypeOf({})  // Object.prototype

// Both throw in ES5 for non-Objects
Object.getPrototypeOf('foo')   // Throws TypeError
Reflect.getPrototypeOf('foo')  // Throws TypeError

// In ES2015 only Reflect throws, Object coerces non-Objects
Object.getPrototypeOf('foo')   // String.prototype
Reflect.getPrototypeOf('foo')  // Throws TypeError

// To mimic the Object ES2015 behavior you need to coerce
Reflect.getPrototypeOf(Object('foo'))  // String.prototype
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Reflect.getPrototypeOf</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-reflect"><code>core-js</code></a></li>
  <li>{{jsxref("Reflect")}}</li>
  <li>{{jsxref("Object.getPrototypeOf()")}}</li>
</ul>
