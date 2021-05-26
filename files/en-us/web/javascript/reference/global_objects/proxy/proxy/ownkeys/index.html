---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.handler.ownKeys
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.ownKeys()</code></strong> method is a trap for
  {{jsxref("Reflect.ownKeys()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  ownKeys: function(<var>target</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameter is passed to the <code>ownKeys()</code> method.
  <code>this</code> is bound to the handler.</p>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>ownKeys()</code> method must return an enumerable object.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.ownKeys()</strong></code> method is a trap for
  {{jsxref("Reflect.ownKeys()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
  <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
  <li>{{jsxref("Object.getOwnPropertySymbols()")}}</li>
  <li>{{jsxref("Object.keys()")}}</li>
  <li>{{jsxref("Reflect.ownKeys()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
  {{jsxref("TypeError")}}:</p>

<ul>
  <li>The result of <code>ownKeys()</code> must be an array.</li>
  <li>The type of each array element is either a {{jsxref("String")}} or a
    {{jsxref("Symbol")}}.</li>
  <li>The result List must contain the keys of all non-configurable own properties of the
    target object.</li>
  <li>If the target object is not extensible, then the result List must contain all the
    keys of the own properties of the target object and no other values.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trapping_of_getOwnPropertyNames">Trapping of getOwnPropertyNames</h3>

<p>The following code traps {{jsxref("Object.getOwnPropertyNames()")}}.</p>

<pre class="brush: js">const p = new Proxy({}, {
  ownKeys: function(target) {
    console.log('called');
    return ['a', 'b', 'c'];
  }
});

console.log(Object.getOwnPropertyNames(p)); // "called"
                                            // [ 'a', 'b', 'c' ]</pre>

<p>The following code violates an invariant.</p>

<pre class="brush: js example-bad">const obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: true,
  value: 10 }
);

const p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  }
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
  <li>{{jsxref("Proxy.handler", "handler")}}</li>
  <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
  <li>{{jsxref("Reflect.ownKeys()")}}</li>
</ul>
