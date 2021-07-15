---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- Reflect
- Polyfill
browser-compat: javascript.builtins.Reflect.get
---
<div>{{JSRef}}</div>

<p>The static <strong><code>Reflect.get()</code></strong> method works like getting a
  property from an object (<code>target[propertyKey]</code>) as a function.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-get.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object on which to get the property.</dd>
  <dt><code><var>propertyKey</var></code></dt>
  <dd>The name of the property to get.</dd>
  <dt><code><var>receiver</var></code> {{optional_inline}}</dt>
  <dd>The value of <code>this</code> provided for the call to
    <code><var>target</var></code> if a getter is encountered. When used with
    {{jsxref("Proxy")}}, it can be an object that inherits from
    <code><var>target</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The value of the property.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>A {{jsxref("TypeError")}}, if <code><var>target</var></code> is not an
  {{jsxref("Object")}}.</p>

<h2 id="Description">Description</h2>

<p>The <code>Reflect.get</code> method allows you to get a property on an object. It is
  like the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property
    accessor</a> syntax as a function.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Reflect.get">Using <code>Reflect.get()</code></h3>

<pre class="brush: js">// Object
let obj = { x: 1, y: 2 }
Reflect.get(obj, 'x')  // 1

// Array
Reflect.get(['zero', 'one'], 1)  // "one"

// Proxy with a get handler
let x = {p: 1};

let obj = new Proxy(x, {
  get(t, k, r) {
    return k + 'bar'
  }
})
Reflect.get(obj, 'foo')  // "foobar"

//Proxy with get handler and receiver
let x = {p: 1, foo: 2};
let y = {foo: 3};

let obj = new Proxy(x, {
  get(t, prop, receiver) {
    return receiver[prop] + 'bar'
  }
})
Reflect.get(obj, 'foo', y) // "3bar"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Reflect.get</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-reflect"><code>core-js</code></a></li>
  <li>{{jsxref("Reflect")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property
      accessors</a></li>
</ul>
