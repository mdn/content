---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.lookupGetter
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>The <strong><code>__lookupGetter__</code></strong> method returns the function bound as
  a getter to the specified property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">__lookupGetter__(sprop)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>sprop</var></code></dt>
  <dd>A string containing the name of the property whose getter should be returned.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The function bound as a getter to the specified property.</p>

<h2 id="Description">Description</h2>

<p>If a getter has been defined for an object's property, it's not possible to reference
  the getter function through that property, because that property refers to the return
  value of that function. <code>__lookupGetter__</code> can be used to obtain a reference
  to the getter function.</p>

<p>It is now possible to do this in a standardized way using
  {{jsxref("Object.getOwnPropertyDescriptor()")}} and
  {{jsxref("Object.getPrototypeOf()")}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Standard-compliant_and_non-standard_ways_to_get_a_property_getter">
  Standard-compliant and non-standard ways to get a property getter</h3>

<pre class="brush: js">var obj = {
  get foo() {
    return Math.random() &gt; 0.5 ? 'foo' : 'bar';
  }
};

// Non-standard and deprecated way
obj.__lookupGetter__('foo');
// (function() { return Math.random() &gt; 0.5 ? 'foo' : 'bar'; })

// Standard-compliant way
Object.getOwnPropertyDescriptor(obj, "foo").get;
// (function() { return Math.random() &gt; 0.5 ? 'foo' : 'bar'; })
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Object.prototype.__lookupGetter__</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
  <li>{{jsxref("Object.prototype.__lookupSetter__()")}}</li>
  <li>{{jsxref("Functions/get", "get")}} operator</li>
  <li>{{jsxref("Object.getOwnPropertyDescriptor()")}} and
    {{jsxref("Object.getPrototypeOf()")}}</li>
  <li>{{jsxref("Object.prototype.__defineGetter__()")}}</li>
  <li>{{jsxref("Object.prototype.__defineSetter__()")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters">JS
      Guide: Defining Getters and Setters</a></li>
</ul>
