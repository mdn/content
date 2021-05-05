---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
browser-compat: javascript.builtins.Proxy.handler.construct
---
<div>{{JSRef}}</div>

<p>The <strong><code>handler.construct()</code></strong> method is a trap for the {{jsxref("Operators/new", "new")}} operator. In order for the new operation to be valid on the resulting Proxy object, the target used to initialize the proxy must itself have a <code>[[Construct]]</code> internal method (i.e. <code>new target</code> must be valid).</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>target</var>, {
  construct: function(<var>target</var>, <var>argumentsList</var>, <var>newTarget</var>) {
  }
});
</pre>

<h3 id="Parameters">Parameters</h3>

<p>The following parameters are passed to the <code>construct()</code> method. <code>this</code> is bound to the handler.</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>The target object.</dd>
 <dt><code><var>argumentsList</var></code></dt>
 <dd>The list of arguments for the constructor.</dd>
 <dt><code><var>newTarget</var></code></dt>
 <dd>The constructor that was originally called, <code><var>p</var></code> above.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The <code>construct</code> method must return an object.</p>

<h2 id="Description">Description</h2>

<p>The <code><strong>handler.construct()</strong></code> method is a trap for the {{jsxref("Operators/new", "new")}} operator.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>This trap can intercept these operations:</p>

<ul>
 <li><code>new myFunction(...args)</code></li>
 <li>{{jsxref("Reflect.construct()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>If the following invariants are violated, the proxy will throw a {{jsxref("TypeError")}}:</p>

<ul>
 <li>The result must be an <code>Object</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Trapping_the_new_operator">Trapping the new operator</h3>

<p>The following code traps the {{jsxref("Operators/new", "new")}} operator.</p>

<pre class="brush: js">const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "called: 1"
                             // 10
</pre>

<p>The following code violates the invariant.</p>

<pre class="brush: js example-bad">const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

new p(); // TypeError is thrown
</pre>

<p>The following code improperly initializes the proxy. The <code><var>target</var></code> in Proxy initialization must itself be a valid constructor for the {{jsxref("Operators/new", "new")}} operator.</p>

<pre class="brush: js example-bad">const p = new Proxy({}, {
  construct: function(target, argumentsList, newTarget) {
    return {};
  }
});

new p(); // TypeError is thrown, "p" is not a constructor
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy/Proxy", "handler")}}</li>
 <li>{{jsxref("Operators/new", "new")}} operator.</li>
 <li>{{jsxref("Reflect.construct()")}}</li>
</ul>
