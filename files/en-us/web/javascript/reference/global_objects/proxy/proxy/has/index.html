---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.handler.has
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.has()</code></strong> method is a trap for the
  {{jsxref("Operators/in", "in")}} operator.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-has.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  has: function(<var>target</var>, <var>prop</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to <code>has()</code> method. <code>this</code> is
  bound to the handler.</p>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object.</dd>
  <dt><code><var>prop</var></code></dt>
  <dd>The name or {{jsxref("Symbol")}} of the property to check for existence.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>has()</code> method must return a boolean value.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.has()</strong></code> method is a trap for the
  {{jsxref("Operators/in", "in")}} operator.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
  <li>Property query: <code><var>foo</var> in <var>proxy</var></code></li>
  <li>Inherited property query: <code>foo in Object.create(<var>proxy</var>)</code></li>
  <li><code>with</code> check: <code>with(<var>proxy</var>) { (<var>foo</var>); }</code>
  </li>
  <li>{{jsxref("Reflect.has()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
  {{jsxref("TypeError")}}:</p>

<ul>
  <li>A property cannot be reported as non-existent, if it exists as a non-configurable
    own property of the target object.</li>
  <li>A property cannot be reported as non-existent, if it exists as an own property of
    the target object and the target object is not extensible.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trapping_the_in_operator">Trapping the in operator</h3>

<p>The following code traps the {{jsxref("Operators/in", "in")}} operator.</p>

<pre class="brush: js">const p = new Proxy({}, {
  has: function(target, prop) {
    console.log('called: ' + prop);
    return true;
  }
});

console.log('a' in p); // "called: a"
                       // true
</pre>

<p>The following code violates an invariant.</p>

<pre class="brush: js example-bad">const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});

'a' in p; // TypeError is thrown
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
  <li>{{jsxref("Proxy.handler", "handler")}}</li>
  <li>{{jsxref("Operators/in", "in")}} operator</li>
  <li>{{jsxref("Reflect.has()")}}</li>
</ul>
