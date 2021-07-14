---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
tags:
- ECMAScript 5
- JavaScript
- JavaScript 1.8.5
- Method
- Object
browser-compat: javascript.builtins.Object.preventExtensions
---
<div>{{JSRef}}</div>

<p>The <strong><code>Object.preventExtensions()</code></strong> method prevents new
  properties from ever being added to an object (i.e. prevents future extensions to the
  object).</p>

<div>{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Object.preventExtensions(<var>obj</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object which should be made non-extensible.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The object being made non-extensible.</p>

<h2 id="Description">Description</h2>

<p>An object is extensible if new properties can be added to it.
  <code>Object.preventExtensions()</code> marks an object as no longer extensible, so that
  it will never have properties beyond the ones it had at the time it was marked as
  non-extensible. Note that the properties of a non-extensible object, in general, may
  still be <em>deleted</em>. Attempting to add new properties to a non-extensible object
  will fail, either silently or by throwing a {{jsxref("TypeError")}} (most commonly, but
  not exclusively, when in {{jsxref("Functions_and_function_scope/Strict_mode", "strict
  mode", "", 1)}}).</p>

<p><code>Object.preventExtensions()</code> only prevents addition of own properties.
  Properties can still be added to the object prototype.</p>

<p>This method makes the <code>[[prototype]]</code> of the target immutable; any
  <code>[[prototype]]</code> re-assignment will throw a <code>TypeError</code>. This
  behavior is specific to the internal <code>[[prototype]]</code> property, other
  properties of the target object will remain mutable.</p>

<p>There is no way to make an object extensible again once it has been made
  non-extensible.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.preventExtensions">Using Object.preventExtensions</h3>

<pre class="brush: js">// Object.preventExtensions returns the object
// being made non-extensible.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Objects are extensible by default.
var empty = {};
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, 'new', {
  value: 8675309
}); // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
  'use strict';
  // throws a TypeError
  nonExtensible.newProperty = 'FAIL';
}
fail();
</pre>

<p>A non-extensible object's prototype is immutable:</p>

<pre class="brush: js">var fixed = Object.preventExtensions({});
// throws a 'TypeError'.
fixed.__proto__ = { oh: 'hai' };</pre>

<h3 id="Non-object_coercion">Non-object coercion</h3>

<p>In ES5, if the argument to this method is not an object (a primitive), then it will
  cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if
  it was a non-extensible ordinary object, return it.</p>

<pre class="brush: js">Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES2015 code)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.isExtensible()")}}</li>
  <li>{{jsxref("Object.seal()")}}</li>
  <li>{{jsxref("Object.isSealed()")}}</li>
  <li>{{jsxref("Object.freeze()")}}</li>
  <li>{{jsxref("Object.isFrozen()")}}</li>
  <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>
