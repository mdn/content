---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.preventExtensions
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.preventExtensions()</code></strong> method is a trap for {{jsxref("Object.preventExtensions()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  preventExtensions: function(<var>target</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameter is passed to the <code>preventExtensions()</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>The target object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>preventExtensions()</code> method must return a boolean value.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.preventExtensions()</strong></code> method is a trap for {{jsxref("Object.preventExtensions()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a {{jsxref("TypeError")}}:</p>

<ul>
 <li><code>Object.preventExtensions(<var>proxy</var>)</code> only returns <code>true</code> if <code>Object.isExtensible(<var>proxy</var>)</code> is <code>false</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trapping_of_preventExtensions">Trapping of preventExtensions</h3>

<p>The following code traps {{jsxref("Object.preventExtensions()")}}.</p>

<pre class="brush: js">const p = new Proxy({}, {
  preventExtensions: function(target) {
    console.log('called');
    Object.preventExtensions(target);
    return true;
  }
});

console.log(Object.preventExtensions(p)); // "called"
                                          // false
</pre>

<p>The following code violates the invariant.</p>

<pre class="brush: js example-bad">const p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p); // TypeError is thrown
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>
