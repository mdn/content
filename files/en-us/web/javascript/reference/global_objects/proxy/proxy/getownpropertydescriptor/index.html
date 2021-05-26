---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.getOwnPropertyDescriptor
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.getOwnPropertyDescriptor()</code></strong> method is a trap for {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  getOwnPropertyDescriptor: function(<var>target</var>, <var>prop</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>getOwnPropertyDescriptor()</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>The target object.</dd>
 <dt><code><var>prop</var></code></dt>
 <dd>The name of the property whose description should be retrieved.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>getOwnPropertyDescriptor()</code> method must return an object or <code>undefined</code>.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.getOwnPropertyDescriptor()</strong></code> method is a trap for {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a {{jsxref("TypeError")}}:</p>

<ul>
 <li><code>getOwnPropertyDescriptor()</code> must return an object or <code>undefined</code>.</li>
 <li>A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object.</li>
 <li>A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible.</li>
 <li>A property cannot be reported as existent, if it does not exists as an own property of the target object and the target object is not extensible.</li>
 <li>A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.</li>
 <li>The result of <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code> can be applied to the target object using <code>Object.defineProperty()</code> and will not throw an exception.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trapping_of_getOwnPropertyDescriptor">Trapping of getOwnPropertyDescriptor</h3>

<p>The following code traps {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<pre class="brush: js">const p = new Proxy({ a: 20}, {
  getOwnPropertyDescriptor: function(target, prop) {
    console.log('called: ' + prop);
    return { configurable: true, enumerable: true, value: 10 };
  }
});

console.log(Object.getOwnPropertyDescriptor(p, 'a').value); // "called: a"
                                                            // 10
</pre>

<p>The following code violates an invariant.</p>

<pre class="brush: js example-bad">const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor: function(target, prop) {
    return undefined;
  }
});

Object.getOwnPropertyDescriptor(p, 'a'); // TypeError is thrown
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>
