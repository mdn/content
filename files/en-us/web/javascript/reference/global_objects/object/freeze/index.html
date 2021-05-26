---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
tags:
- Change
- Changeability
- ECMAScript 5
- JavaScript
- Method
- Mutability
- Mutable
- Object
- Reference
- freeze
- lock
browser-compat: javascript.builtins.Object.freeze
---
<div>{{JSRef}}</div>

<p>The <code><strong>Object.freeze()</strong></code> method <strong>freezes</strong> an
  object. A frozen object can no longer be changed; freezing an object prevents new
  properties from being added to it, existing properties from being removed, prevents
  changing the enumerability, configurability, or writability of existing properties, and
  prevents the values of existing properties from being changed. In addition, freezing an
  object also prevents its prototype from being changed. <code>freeze()</code> returns the
  same object that was passed in.</p>

<div>{{EmbedInteractiveExample("pages/js/object-freeze.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Object.freeze(<var>obj</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object to freeze.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The object that was passed to the function.</p>

<h2 id="Description">Description</h2>

<p>Nothing can be added to or removed from the properties set of a frozen object. Any
  attempt to do so will fail, either silently or by throwing a {{jsxref("TypeError")}}
  exception (most commonly, but not exclusively, when in {{jsxref("Strict_mode", "strict
  mode", "", 1)}}).</p>

<p>For data properties of a frozen object, values cannot be changed, the writable and
  configurable attributes are set to false. Accessor properties (getters and setters) work
  the same (and still give the illusion that you are changing the value). Note that values
  that are objects can still be modified, unless they are also frozen. As an object, an
  array can be frozen; after doing so, its elements cannot be altered and no elements can
  be added to or removed from the array.</p>

<p><code>freeze()</code> returns the same object that was passed into the function. It
  <em>does not</em> create a frozen copy.</p>

<p>In ES5, if the argument to this method is not an object (a primitive), then it will
  cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if
  it were a frozen ordinary object, and be returned.</p>

<pre class="brush: js">&gt; Object.freeze(1)
TypeError: 1 is not an object // ES5 code

&gt; Object.freeze(1)
1                             // ES2015 code
</pre>

<p>An {{domxref("ArrayBufferView")}} with elements will cause a {{jsxref("TypeError")}},
  as they are views over memory and will definitely cause other possible issues:</p>

<pre class="brush: js">&gt; Object.freeze(new Uint8Array(0)) // No elements
<em>Uint8Array</em> []

&gt; Object.freeze(new Uint8Array(1)) // Has elements
TypeError: Cannot freeze array buffer views with elements

&gt; Object.freeze(new DataView(new ArrayBuffer(32))) // No elements
<em>DataView</em> {}

&gt; Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // No elements
<em>Float64Array</em> []

&gt; Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // Has elements
TypeError: Cannot freeze array buffer views with elements
</pre>

<p>Note that; as the standard three properties (<code>buf.byteLength</code>,
  <code>buf.byteOffset</code> and <code>buf.buffer</code>) are read-only (as are those of
  an {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}), there is no reason for
  attempting to freeze these properties.</p>

<h3 id="Comparison_to_Object.seal">Comparison to Object.seal()</h3>

<p>Objects sealed with {{jsxref("Object.seal()")}} can have their existing properties
  changed. Existing properties in objects frozen with <code>Object.freeze()</code> are
  made immutable.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Freezing_objects">Freezing objects</h3>

<pre class="brush: js">const obj = {
  prop() {},
  foo: 'bar'
};

// Before freezing: new properties may be added,
// and existing properties may be changed or removed
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Freeze.
const o = Object.freeze(obj);

// The return value is just the same object we passed in.
o === obj; // true

// The object has become frozen.
Object.isFrozen(obj); // === true

// Now any changes will fail
obj.foo = 'quux'; // silently does nothing
// silently doesn't add the property
obj.quaxxor = 'the friendly duck';

// In strict mode such attempts will throw TypeErrors
function fail() {
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.foo; // throws a TypeError
  delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// Attempted changes through Object.defineProperty;
// both statements below throw a TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// It's also impossible to change the prototype
// both statements below will throw a TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
</pre>

<h3 id="Freezing_arrays">Freezing arrays</h3>

<pre class="brush: js">let a = [0];
Object.freeze(a); // The array cannot be modified now.

a[0] = 1; // fails silently

// In strict mode such attempt will throw a TypeError
function fail() {
  "use strict"
  a[0] = 1;
}

fail();

// Attempted to push
a.push(2); // throws a TypeError</pre>

<p>The object being frozen is <em>immutable</em>. However, it is not necessarily
  <em>constant</em>. The following example shows that a frozen object is not constant
  (freeze is shallow).</p>

<pre class="brush: js">const obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'</pre>

<p>To be a constant object, the entire reference graph (direct and indirect references to
  other objects) must reference only immutable frozen objects. The object being frozen is
  said to be immutable because the entire object <em>state</em> (values and references to
  other objects) within the whole object is fixed. Note that strings, numbers, and
  booleans are always immutable and that Functions and Arrays are objects.</p>

<h4 id="What_is_shallow_freeze">What is "shallow freeze"?</h4>

<p>The result of calling <code>Object.freeze(<var>object</var>)</code> only applies to the
  immediate properties of <code>object</code> itself and will prevent future property
  addition, removal or value re-assignment operations <em>only</em> on
  <code>object</code>. If the value of those properties are objects themselves, those
  objects are not frozen and may be the target of property addition, removal or value
  re-assignment operations.</p>

<pre class="brush: js">const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi"
  }
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city) // Output: "Noida"
</pre>

<p>To make an object immutable, recursively freeze each property which is of type object
  (deep freeze). Use the pattern on a case-by-case basis based on your design when you
  know the object contains no <a
    href="https://en.wikipedia.org/wiki/Cycle_(graph_theory)">cycles</a> in the reference
  graph, otherwise an endless loop will be triggered. An enhancement to
  <code>deepFreeze()</code> would be to have an internal function that receives a path
  (e.g. an Array) argument so you can suppress calling <code>deepFreeze()</code>
  recursively when an object is in the process of being made immutable. You still run a
  risk of freezing an object that shouldn't be frozen, such as [window].</p>

<pre class="brush: js">function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self

  for (const name of propNames) {
    const value = object[name];

    if (value &amp;&amp; typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
obj2.internal.a; // null
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.isFrozen()")}}</li>
  <li>{{jsxref("Object.preventExtensions()")}}</li>
  <li>{{jsxref("Object.isExtensible()")}}</li>
  <li>{{jsxref("Object.seal()")}}</li>
  <li>{{jsxref("Object.isSealed()")}}</li>
</ul>
