---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
tags:
- ECMAScript 2015
- JavaScript
- Method
- Prototype
- Proxy
browser-compat: javascript.builtins.Proxy.handler.setPrototypeOf
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.setPrototypeOf()</code></strong> method is a trap for
  {{jsxref("Object.setPrototypeOf()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller",
  "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  setPrototypeOf: function(<var>target</var>, <var>prototype</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>setPrototypeOf()</code> method.
  <code>this</code> is bound to the handler.</p>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object.</dd>
  <dt><code><var>prototype</var></code></dt>
  <dd>The object's new prototype or <code>null</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>setPrototypeOf()</code> method returns <code>true</code> if the
  <code>[[Prototype]]</code> was successfully changed, otherwise <code>false</code>.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.setPrototypeOf()</strong></code> method is a trap for
  {{jsxref("Object.setPrototypeOf()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
  <li>{{jsxref("Object.setPrototypeOf()")}}</li>
  <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
  {{jsxref("TypeError")}}:</p>

<ul>
  <li>If <code><var>target</var></code> is not extensible, the <code>prototype</code>
    parameter must be the same value as
    <code>Object.getPrototypeOf(<var>target</var>)</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>If you want to disallow setting a new prototype for your object, your handler's
  <code>setPrototypeOf()</code> method can either return <code>false</code>, or it can
  throw an exception.</p>

<h3 id="Approach_1_Returning_false">Approach 1: Returning false</h3>

<p>This approach means that any mutating operation that throws an exception on failure to
  mutate, must create the exception itself.</p>

<p>For example, {{jsxref("Object.setPrototypeOf()")}} will create and throw a
  {{jsxref("TypeError")}} itself. If the mutation is performed by an operation that
  <em>doesn't</em> ordinarily throw in case of failure, such as
  {{jsxref("Reflect.setPrototypeOf()")}}, no exception will be thrown.</p>

<pre class="brush: js">const handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

const newProto = {}, target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
</pre>

<h3 id="Approach_2_Throwing_an_Exception">Approach 2: Throwing an Exception</h3>

<p>The latter approach will cause <em>any</em> operation that attempts to mutate, to
  throw. This approach is best if you want even non-throwing operations to throw on
  failure, or you want to throw a custom exception value.</p>

<pre class="brush: js">const handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error('custom error');
    }
};

const newProto = {}, target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto);  // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
  <li>{{jsxref("Proxy.handler", "handler")}}</li>
  <li>{{jsxref("Object.setPrototypeOf()")}}</li>
  <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
</ul>
