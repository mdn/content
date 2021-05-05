---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
browser-compat: javascript.builtins.Symbol.unscopables
---
<div>{{JSRef}}</div>

<p>The <strong><code>Symbol.unscopables</code></strong> well-known symbol is used to specify an object value of whose own and inherited property names are excluded from the <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/with">with</a></code> environment bindings of the associated object.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}</div>


<h2 id="Description">Description</h2>

<p>The <code>@@unscopables</code> symbol (<code>Symbol.unscopables</code>) can be defined on any object to exclude property names from being exposed as lexical variables in <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/with">with</a></code> environment bindings. Note that if using <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a>, <code>with</code> statements are not available and will likely also not need this symbol.</p>

<p>Setting a property to <code>true</code> in an <code>unscopables</code> object will make it <em>unscopable</em> and therefore it won't appear in lexical scope variables. Setting a property to <code>false</code> will make it <code>scopable</code> and thus it will appear in lexical scope variables.</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Examples">Examples</h2>

<h3 id="Scoping_in_with_statements">Scoping in with statements</h3>

<p>The following code works fine in ES5 and below. However, in ECMAScript 2015 and later, the {{jsxref("Array.prototype.keys()")}} method was introduced. That means that inside <code>with</code> environment "keys" would now be the method and not the variable. That's when the <code>unscopable</code>s symbol was introduced. A built-in <code>unscopables</code> setting is implemented as {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} to prevent that some of the Array methods are being scoped into the <code>with</code> statement.</p>

<pre class="brush: js">var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
</pre>

<h3 id="Unscopables_in_objects">Unscopables in objects</h3>

<p>You can also set <code>unscopables</code> for your own objects.</p>

<pre class="brush: js">var obj = {
  foo: 1,
  bar: 2
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}</li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/with">with</a></code> statement (not available in <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a>)</li>
</ul>
