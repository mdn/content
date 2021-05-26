---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.handler.getPrototypeOf
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.getPrototypeOf()</code></strong> method is a trap for the
    <code>[[GetPrototypeOf]]</code> internal method.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}
</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>obj</var>, {
  getPrototypeOf(<var>target</var>) {
  ...
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameter is passed to the <code>getPrototypeOf()</code> method.
    <code>this</code> is bound to the handler.</p>

<dl>
    <dt><code><var>target</var></code></dt>
    <dd>The target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>getPrototypeOf()</code> method must return an object or <code>null</code>.
</p>

<h2 id="Description">Description</h2>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
    <li>{{jsxref("Object.getPrototypeOf()")}}</li>
    <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
    <li>{{jsxref("Object/proto", "__proto__")}}</li>
    <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
    <li>{{jsxref("Operators/instanceof", "instanceof")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
    {{jsxref("TypeError")}}:</p>

<ul>
    <li><code>getPrototypeOf()</code> method must return an object or <code>null</code>.
    </li>
    <li>If <code>target</code> is not extensible,
        <code>Object.getPrototypeOf(<var>proxy</var>)</code> method must return the same
        value as <code>Object.getPrototypeOf(<var>target</var>)</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_usage">Basic usage</h3>

<pre class="brush: js">const obj = {};
const proto = {};
const handler = {
    getPrototypeOf(target) {
        console.log(target === obj);   // true
        console.log(this === handler); // true
        return proto;
    }
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto);    // true
</pre>

<h3 id="Five_ways_to_trigger_the_getPrototypeOf_trap">Five ways to trigger the
    getPrototypeOf trap</h3>

<pre class="brush: js">const obj = {};
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
</pre>

<h3 id="Two_kinds_of_exceptions">Two kinds of exceptions</h3>

<pre class="brush: js example-bad">const obj = {};
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return 'foo';
    }
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj = Object.preventExtensions({});
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>{{jsxref("Proxy")}}</li>
    <li>{{jsxref("Proxy.handler", "handler")}}</li>
    <li>{{jsxref("Object.getPrototypeOf()")}}</li>
    <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
</ul>
