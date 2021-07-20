---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.handler.set
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.set()</code></strong> method is a trap for setting a property
  value.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  set: function(<var>target</var>, <var>property</var>, <var>value</var>, <var>receiver</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>set()</code> method. <code>this</code>
  is bound to the handler.</p>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object.</dd>
  <dt><code><var>property</var></code></dt>
  <dd>The name or {{jsxref("Symbol")}} of the property to set.</dd>
  <dt><code><var>value</var></code></dt>
  <dd>The new value of the property to set.</dd>
  <dt><code><var>receiver</var></code></dt>
  <dd>
    <p>The object to which the assignment was originally directed. This is usually the
      proxy itself. But a <code>set()</code> handler can also be called indirectly, via
      the prototype chain or various other ways.</p>
    <p>For example, suppose a script does
        <code><var>obj</var>.name = "jen"</code>, and <code><var>obj</var></code> is not a
        proxy, and has no own property <code>.name</code>, but it has a proxy on its
        prototype chain. That proxy's <code>set()</code> handler will be called, and
        <code>obj</code> will be passed as the receiver.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>set()</code> method should return a boolean value.</p>

<ul>
  <li>Return <code>true</code> to indicate that assignment succeeded.</li>
  <li>If the <code>set()</code> method returns <code>false</code>, and the assignment
    happened in strict-mode code, a {{jsxref("TypeError")}} will be thrown.</li>
</ul>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.set()</strong></code> method is a trap for setting property
  value.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
  <li>Property assignment: <code><var>proxy</var>[<var>foo</var>] = <var>bar</var></code>
    and <code><var>proxy</var>.<var>foo</var> = <var>bar</var></code></li>
  <li>Inherited property assignment:
    <code>Object.create(<var>proxy</var>)[<var>foo</var>] = <var>bar</var></code></li>
  <li>{{jsxref("Reflect.set()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
  {{jsxref("TypeError")}}:</p>

<ul>
  <li>Cannot change the value of a property to be different from the value of the
    corresponding target object property if the corresponding target object property is a
    non-writable, non-configurable data property.</li>
  <li>Cannot set the value of a property if the corresponding target object property is a
    non-configurable accessor property that has <code>undefined</code> as its
    <code>[[Set]]</code> attribute.</li>
  <li>In strict mode, a <code>false</code> return value from the <code>set()</code>
    handler will throw a {{jsxref("TypeError")}} exception.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trap_setting_of_a_property_value">Trap setting of a property value</h3>

<p>The following code traps setting a property value.</p>

<pre class="brush: js">const p = new Proxy({}, {
  set: function(target, prop, value, receiver) {
    target[prop] = value;
    console.log('property set: ' + prop + ' = ' + value);
    return true;
  }
})

console.log('a' in p);  // false

p.a = 10;               // "property set: a = 10"
console.log('a' in p);  // true
console.log(p.a);       // 10
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
  <li>{{jsxref("Proxy.handler", "handler")}}</li>
  <li>{{jsxref("Reflect.set()")}}</li>
</ul>
