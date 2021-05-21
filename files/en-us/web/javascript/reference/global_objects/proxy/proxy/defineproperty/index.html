---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.handler.defineProperty
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.defineProperty()</code></strong> method is a trap for
  {{jsxref("Object.defineProperty()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}
</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  defineProperty: function(<var>target</var>, <var>property</var>, <var>descriptor</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>defineProperty()</code> method.
  <code>this</code> is bound to the handler.</p>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object.</dd>
  <dt><code><var>property</var></code></dt>
  <dd>The name or {{jsxref("Symbol")}} of the property whose description is to be
    retrieved.</dd>
  <dt><code><var>descriptor</var></code></dt>
  <dd>The descriptor for the property being defined or modified.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>defineProperty()</code> method must return a {{jsxref("Boolean")}} indicating
  whether or not the property has been successfully defined.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.defineProperty()</strong></code> method is a trap for
  {{jsxref("Object.defineProperty()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
  {{jsxref("TypeError")}}:</p>

<ul>
  <li>A property cannot be added, if the target object is not extensible.</li>
  <li>A property cannot be added as or modified to be non-configurable, if it does not
    exists as a non-configurable own property of the target object.</li>
  <li>A property may not be non-configurable, if a corresponding configurable property of
    the target object exists.</li>
  <li>If a property has a corresponding target object property then
    <code>Object.defineProperty(<var>target</var>, <var>prop</var>, <var>descriptor</var>)</code>
    will not throw an exception.</li>
  <li>In strict mode, a <code>false</code> return value from the
    <code>defineProperty()</code> handler will throw a {{jsxref("TypeError")}} exception.
  </li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trapping_of_defineProperty">Trapping of defineProperty</h3>

<p>The following code traps {{jsxref("Object.defineProperty()")}}.</p>

<pre class="brush: js">const p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log('called: ' + prop);
    return true;
  }
});

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"
</pre>

<p>When calling {{jsxref("Object.defineProperty()")}} or
  {{jsxref("Reflect.defineProperty()")}}, the <code>descriptor</code> passed to
  <code>defineProperty()</code> trap has one restriction—only following properties are
  usable (non-standard properties will be ignored):</p>

<ul>
  <li><code>enumerable</code></li>
  <li><code>configurable</code></li>
  <li><code>writable</code></li>
  <li><code>value</code></li>
  <li><code>get</code></li>
  <li><code>set</code></li>
</ul>

<pre class="brush: js">const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
});  // { value: 'proxy' }
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
  <li>{{jsxref("Proxy.handler", "handler")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>
