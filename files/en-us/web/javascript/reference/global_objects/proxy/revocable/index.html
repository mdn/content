---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.revocable
---
<div>{{JSRef}}</div>

<p>The <code><strong>Proxy.revocable()</strong></code> method is used to create a
  revocable {{jsxref("Proxy")}} object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Proxy.revocable(<var>target</var>, <var>handler</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>A target object to wrap with <code>Proxy</code>. It can be any sort of object,
    including a native array, a function, or even another proxy.</dd>
  <dt><code><var>handler</var></code></dt>
  <dd>An object whose properties are functions define the behavior of proxy
    <code><var>p</var></code> when an operation is performed on it.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A newly created revocable <code>Proxy</code> object is returned.</p>

<h2 id="Description">Description</h2>

<p>A revocable <code>Proxy</code> is an object with following two properties
  <code>{proxy: proxy, revoke: revoke}</code>.</p>

<dl>
  <dt><code>proxy</code></dt>
  <dd>A Proxy object created with <code>new Proxy(target, handler)</code> call.</dd>
  <dt><code>revoke</code></dt>
  <dd>A function with no argument to invalidate (switch off) the <code>proxy</code>.</dd>
</dl>

<p>If the <code>revoke()</code> function gets called, the proxy becomes unusable: Any trap
  to a handler will throw a {{jsxref("TypeError")}}. Once a proxy is revoked, it will
  remain revoked and can be garbage collected. Calling <code>revoke()</code> again has no
  effect.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Proxy.revocable">Using Proxy.revocable</h3>

<pre class="brush: js">var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return "[[" + name + "]]";
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError is thrown
proxy.foo = 1           // TypeError again
delete proxy.foo;       // still TypeError
typeof proxy            // "object", typeof doesn't trigger any trap
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
</ul>
