---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.handler.get
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.get()</code></strong> method is a trap for getting a property
  value.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  get: function(<var>target</var>, <var>property</var>, <var>receiver</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>get()</code> method. <code>this</code>
  is bound to the handler.</p>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object.</dd>
  <dt><code><var>property</var></code></dt>
  <dd>The name or {{jsxref("Symbol")}}  of the property to get. </dd>
  <dt><code><var>receiver</var></code></dt>
  <dd>Either the proxy or an object that inherits from the proxy.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>get()</code> method can return any value.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.get()</strong></code> method is a trap for getting a property
  value.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
  <li>Property access: <code><var>proxy</var>[<var>foo</var>]</code>and
    <code><var>proxy</var>.<var>bar</var></code></li>
  <li>Inherited property access:
    <code>Object.create(<var>proxy</var>)[<var>foo</var>]</code></li>
  <li>{{jsxref("Reflect.get()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
  {{jsxref("TypeError")}}:</p>

<ul>
  <li>The value reported for a property must be the same as the value of the corresponding
    target object property if the target object property is a non-writable,
    non-configurable own data property.</li>
  <li>The value reported for a property must be undefined if the corresponding target
    object property is a non-configurable own accessor property that has
    <code>undefined</code> as its <code>[[Get]]</code> attribute.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trap_for_getting_a_property_value">Trap for getting a property value</h3>

<p>The following code traps getting a property value.</p>

<pre class="brush: js">const p = new Proxy({}, {
  get: function(target, property, receiver) {
    console.log('called: ' + property);
    return 10;
  }
});

console.log(p.a); // "called: a"
                  // 10
</pre>

<p>The following code violates an invariant.</p>

<pre class="brush: js">const obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false
});

const p = new Proxy(obj, {
  get: function(target, property) {
    return 20;
  }
});

p.a; // TypeError is thrown
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
  <li>{{jsxref("Proxy.handler", "handler")}}</li>
  <li>{{jsxref("Reflect.get()")}}</li>
</ul>
