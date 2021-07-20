---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.defineGetter
---
<div>{{JSRef}}</div>

<div class="warning">
  <p><strong>Warning:</strong> This feature is deprecated in favor of defining getters using the <a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object
      initializer syntax</a> or the {{jsxref("Object.defineProperty()")}} API. While this
    feature is widely implemented, it is only described in the <a
      href="https://tc39.github.io/ecma262/#sec-additional-ecmascript-features-for-web-browsers">ECMAScript
      specification</a> because of legacy usage. This method should not be used since
    better alternatives exist.</p>
</div>

<p>The <code><strong>__defineGetter__</strong></code> method binds an object's property to
  a function to be called when that property is looked up.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">__defineGetter__(prop, func)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>prop</var></code></dt>
  <dd>A string containing the name of the property to bind to the given function.</dd>
  <dt><code><var>func</var></code></dt>
  <dd>A function to be bound to a lookup of the specified property.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref("undefined")}}.</p>

<h2 id="Description">Description</h2>

<p>The <code>__defineGetter__</code> allows a {{jsxref("Functions/get", "getter", "", 1)}}
  to be defined on a pre-existing object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Non-standard_and_deprecated_way">Non-standard and deprecated way</h3>

<pre class="brush: js">var o = {};
o.__defineGetter__('gimmeFive', function() { return 5; });
console.log(o.gimmeFive); // 5
</pre>

<h3 id="Standard-compliant_ways">Standard-compliant ways</h3>

<pre class="brush: js">// Using the get operator
var o = { get gimmeFive() { return 5; } };
console.log(o.gimmeFive); // 5

// Using Object.defineProperty
var o = {};
Object.defineProperty(o, 'gimmeFive', {
  get: function() {
    return 5;
  }
});
console.log(o.gimmeFive); // 5
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Object.prototype.__defineGetter__</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
  <li>{{jsxref("Object.prototype.__defineSetter__()")}}</li>
  <li>{{jsxref("Functions/get", "get")}} operator</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.prototype.__lookupGetter__()")}}</li>
  <li>{{jsxref("Object.prototype.__lookupSetter__()")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters">JS
      Guide: Defining Getters and Setters</a></li>
  <li><a
      href="https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/">[Blog
      Post] Deprecation of __defineGetter__ and __defineSetter__</a></li>
  <li>{{bug(647423)}}</li>
</ul>
