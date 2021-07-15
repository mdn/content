---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
tags:
- ECMAScript 5
- JavaScript
- JavaScript 1.8.5
- Method
- Object
- Reference
browser-compat: javascript.builtins.Object.seal
---
<p>{{JSRef}}</p>

<p>The <code><strong>Object.seal()</strong></code> method seals an object, preventing new
  properties from being added to it and marking all existing properties as
  non-configurable. Values of present properties can still be changed as long as they are
  writable.</p>

<div>{{EmbedInteractiveExample("pages/js/object-seal.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Object.seal(<var>obj</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object which should be sealed.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The object being sealed.</p>

<h2 id="Description">Description</h2>

<p>By default, objects are {{jsxref("Object.isExtensible()", "extensible", "", 1)}} (new
  properties can be added to them). Sealing an object prevents new properties from being
  added and marks all existing properties as non-configurable. This has the effect of
  making the set of properties on the object fixed. Making all properties non-configurable
  also prevents them from being converted from data properties to accessor properties and
  vice versa, but it does not prevent the values of data properties from being changed.
  Attempting to delete or add properties to a sealed object, or to convert a data property
  to accessor or vice versa, will fail, either silently or by throwing a
  {{jsxref("TypeError")}} (most commonly, although not exclusively, when in
  {{jsxref("Strict_mode", "strict mode", "", 1)}} code).</p>

<p>The prototype chain remains untouched. However, the {{jsxref("Object.proto",
  "__proto__")}} property is sealed as well.</p>

<h3 id="Comparison_to_Object.freeze">Comparison to Object.freeze()</h3>

<p>Existing properties in objects frozen with {{jsxref("Object.freeze()")}} are made
  immutable. Objects sealed with <code>Object.seal()</code> can have their existing
  properties changed.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.seal">Using Object.seal</h3>

<pre class="brush: js">var obj = {
  prop: function() {},
  foo: 'bar'
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// Changing property values on a sealed object
// still works.
obj.foo = 'quux';

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // throws a TypeError

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = 'the friendly duck';
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
  'use strict';
  delete obj.foo; // throws a TypeError
  obj.sparky = 'arf'; // throws a TypeError
}
fail();

// Attempted additions through
// Object.defineProperty will also throw.
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // throws a TypeError
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // changes existing property value
</pre>

<h3 id="Non-object_coercion">Non-object coercion</h3>

<p>In ES5, if the argument to this method is not an object (a primitive), then it will
  cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if
  it was a sealed ordinary object by returning it.</p>

<pre class="brush: js">Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.isSealed()")}}</li>
  <li>{{jsxref("Object.preventExtensions()")}}</li>
  <li>{{jsxref("Object.isExtensible()")}}</li>
  <li>{{jsxref("Object.freeze()")}}</li>
  <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
