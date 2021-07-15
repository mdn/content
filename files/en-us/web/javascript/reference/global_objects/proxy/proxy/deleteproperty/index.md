---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
tags:
- ECMAScript 2015
- JavaScript
- Method
- Proxy
browser-compat: javascript.builtins.Proxy.handler.deleteProperty
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.deleteProperty()</code></strong> method is a trap for the
  {{jsxref("Operators/delete", "delete")}} operator.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html", "taller")}}
</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const p = new Proxy(<var>target</var>, {
  deleteProperty: function(<var>target</var>, <var>property</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>deleteProperty()</code> method.
  <code>this</code> is bound to the handler.</p>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object.</dd>
  <dt><code><var>property</var></code></dt>
  <dd>The name or {{jsxref("Symbol")}} of the property to delete.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>deleteProperty()</code> method must return a {{jsxref("Boolean")}} indicating
  whether or not the property has been successfully deleted.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.deleteProperty()</strong></code> method is a trap for the
  {{jsxref("Operators/delete", "delete")}} operator.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
  <li>Property deletion: <code>delete <var>proxy</var>[<var>foo</var>]</code> and
    <code>delete <var>proxy</var>.<var>foo</var></code></li>
  <li>{{jsxref("Reflect.deleteProperty()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a
  {{jsxref("TypeError")}}:</p>

<ul>
  <li>A property cannot be deleted, if it exists as a non-configurable own property of the
    target object.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trapping_the_delete_operator">Trapping the delete operator</h3>

<p>The following code traps the {{jsxref("Operators/delete", "delete")}} operator.</p>

<pre class="brush: js">const p = new Proxy({}, {
  deleteProperty: function(target, prop) {
    if (prop in target){
      delete target[prop]
      console.log('property removed: ' + prop)
      return true
    }
    else {
      console.log('property not found: ' + prop)
      return false
    }
  }
})

let result

p.a = 10
console.log('a' in p)  // true

result = delete p.a    // "property removed: a"
console.log(result)    // true
console.log('a' in p)  // false

result = delete p.a    // "property not found: a"
console.log(result)    // false
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Proxy")}}</li>
  <li>{{jsxref("Proxy.handler", "handler")}}</li>
  <li>{{jsxref("Operators/delete", "delete")}} operator</li>
  <li>{{jsxref("Reflect.deleteProperty()")}}</li>
</ul>
