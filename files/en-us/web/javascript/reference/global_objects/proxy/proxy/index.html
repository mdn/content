---
title: Proxy() constructor
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
tags:
- Constructor
- JavaScript
- Proxy
- Reference
browser-compat: javascript.builtins.Proxy.Proxy
---
<div>{{JSRef}}</div>

<p>The <code><strong>Proxy()</strong></code> constructor is used to create
  {{jsxref("Proxy")}} objects.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">new Proxy(<var>target</var>, <var>handler</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>A target object to wrap with <code>Proxy</code>. It can be any sort of object,
    including a native array, a function, or even another proxy.</dd>
  <dt><code><var>handler</var></code></dt>
  <dd>An object whose properties are functions that define the behavior of the proxy when
    an operation is performed on it.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Use the <code>Proxy()</code> constructor to create a new <code>Proxy</code> object.
  This constructor takes two mandatory arguments:</p>

<ul>
  <li><code>target</code> is the object for which you want to create the proxy</li>
  <li><code>handler</code> is the object that defines the custom behavior of the proxy.
  </li>
</ul>

<p>An empty handler will create a proxy that behaves, in almost all respects, exactly like
  the target. By defining any of a set group of functions on the <code>handler</code>
  object, you can customise specific aspects of the proxy's behavior. For example, by
  defining <code>get()</code> you can provide a customised version of the target's <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property
    accessor</a>.</p>

<h3 id="Handler_functions">Handler functions</h3>

<p>This section lists all the handler functions you can define. Handler functions are
  sometimes called <em>traps</em>, because they trap calls to the underlying target
  object.</p>

<dl>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}</dt>
  <dd>A trap for a function call.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}</dt>
  <dd>A trap for the {{JSxRef("Operators/new", "new")}} operator.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  </dt>
  <dd>A trap for {{JSxRef("Object.defineProperty")}}.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  </dt>
  <dd>A trap for the {{JSxRef("Operators/delete", "delete")}} operator.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/get", "handler.get()")}}</dt>
  <dd>A trap for getting property values.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor",
    "handler.getOwnPropertyDescriptor()")}}</dt>
  <dd>A trap for {{JSxRef("Object.getOwnPropertyDescriptor")}}.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  </dt>
  <dd>A trap for {{JSxRef("Object.getPrototypeOf")}}.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/has", "handler.has()")}}</dt>
  <dd>A trap for the {{JSxRef("Operators/in", "in")}} operator.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}</dt>
  <dd>A trap for {{JSxRef("Object.isExtensible")}}.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}</dt>
  <dd>A trap for {{JSxRef("Object.getOwnPropertyNames")}} and
    {{JSxRef("Object.getOwnPropertySymbols")}}.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions",
    "handler.preventExtensions()")}}</dt>
  <dd>A trap for {{JSxRef("Object.preventExtensions")}}.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/set", "handler.set()")}}</dt>
  <dd>A trap for setting property values.</dd>
  <dt>{{JSxRef("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  </dt>
  <dd>A trap for {{JSxRef("Object.setPrototypeOf")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Selectively_proxy_property_accessors">Selectively proxy property accessors</h3>

<p>In this example the target has two properties, <code>notProxied</code> and
  <code>proxied</code>. We define a handler that returns a different value for
  <code>proxied</code>, and lets any other accesses through to the target.</p>

<pre class="brush: js">const target = {
  notProxied: "original value",
  proxied: "original value"
};

const handler = {
  get: function(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied);    // "replaced value"</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Meta_programming"><code>Proxy</code> and
      <code>Reflect</code> in the JavaScript Guide</a></li>
  <li>{{jsxref("Global_Objects/Reflect", "Reflect")}}</li>
</ul>
