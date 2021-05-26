---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
tags:
- ECMAScript 5
- JavaScript
- Method
- Object
browser-compat: javascript.builtins.Object.getOwnPropertyDescriptor
---
<div>{{JSRef}}</div>

<p>The <strong><code>Object.getOwnPropertyDescriptor()</code></strong> method returns an
  object describing the configuration of a specific property on a given object (that is,
  one directly present on an object and not in the object's prototype chain). The object
  returned is mutable but mutating it has no effect on the original property's
  configuration.</p>

<div>{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptor.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">Object.getOwnPropertyDescriptor(<var>obj</var>, <var>prop</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object in which to look for the property.</dd>
  <dt><code><var>prop</var></code></dt>
  <dd>The name or {{jsxref("Symbol")}} of the property whose description is to be
    retrieved.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A property descriptor of the given property if it exists on the object,
  {{jsxref("undefined")}} otherwise.</p>

<h2 id="Description">Description</h2>

<p>This method permits examination of the precise description of a property. A
  <dfn>property</dfn> in JavaScript consists of either a string-valued name or a
  {{jsxref("Symbol")}} and a property descriptor. Further information about property
  descriptor types and their attributes can be found in
  {{jsxref("Object.defineProperty()")}}.</p>

<p>A <dfn>property descriptor</dfn> is a record with some of the following attributes:</p>

<dl>
  <dt><code>value</code></dt>
  <dd>The value associated with the property (data descriptors only).</dd>
  <dt><code>writable</code></dt>
  <dd><code>true</code> if and only if the value associated with the property may be
    changed (data descriptors only).</dd>
  <dt><code>get</code></dt>
  <dd>A function which serves as a getter for the property, or {{jsxref("undefined")}} if
    there is no getter (accessor descriptors only).</dd>
  <dt><code>set</code></dt>
  <dd>A function which serves as a setter for the property, or {{jsxref("undefined")}} if
    there is no setter (accessor descriptors only).</dd>
  <dt><code>configurable</code></dt>
  <dd><code>true</code> if and only if the type of this property descriptor may be changed
    and if the property may be deleted from the corresponding object.</dd>
  <dt><code>enumerable</code></dt>
  <dd><code>true</code> if and only if this property shows up during enumeration of the
    properties on the corresponding object.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.getOwnPropertyDescriptor">Using Object.getOwnPropertyDescriptor</h3>

<pre class="brush: js">var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, 'foo');
// d is {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, 'bar');
// d is {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for('baz')]: 73 }
d = Object.getOwnPropertyDescriptor(o, Symbol.for('baz'));
// d is {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {};
Object.defineProperty(o, 'qux', {
  value: 8675309,
  writable: false,
  enumerable: false
});
d = Object.getOwnPropertyDescriptor(o, 'qux');
// d is {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
</pre>

<h3 id="Non-object_coercion">Non-object coercion</h3>

<p>In ES5, if the first argument to this method is not an object (a primitive), then it
  will cause a {{jsxref("TypeError")}}. In ES2015, a non-object first argument will be
  coerced to an object at first.</p>

<pre class="brush: js">Object.getOwnPropertyDescriptor('foo', 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor('foo', 0);
// Object returned by ES2015 code: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>
