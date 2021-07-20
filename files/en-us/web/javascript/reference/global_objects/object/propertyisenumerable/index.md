---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
tags:
- JavaScript
- Method
- Object
- Prototype
browser-compat: javascript.builtins.Object.propertyIsEnumerable
---
<div>{{JSRef}}</div>

<p>The <code><strong>propertyIsEnumerable()</strong></code> method returns a Boolean
  indicating whether the specified property is enumerable and is the object's own
  property.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html",
  "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">propertyIsEnumerable(prop)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>prop</code></dt>
  <dd>The name of the property to test.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Boolean")}} indicating whether the specified property is enumerable and is
  the object's own property.</p>

<h2 id="Description">Description</h2>

<p>Every object has a <code>propertyIsEnumerable</code> method. This method can determine
  whether the specified property in an object can be enumerated by a
  {{jsxref("Statements/for...in", "for...in")}} loop, with the exception of properties
  inherited through the prototype chain. If the object does not have the specified
  property, this method returns <code>false</code>.</p>

<div class="notecard note">
  <p><strong>Note:</strong> Bear in mind that enumerable properties are looped over by
    {{jsxref("Statements/for...in", "for...in")}} loops, with the exception of
    {{jsxref("Global_Objects/Symbol", "Symbol")}}s.  </p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="A_basic_use_of_propertyIsEnumerable">A basic use of
  <code>propertyIsEnumerable</code></h3>

<p>The following example shows the use of <code>propertyIsEnumerable</code> on objects and
  arrays:</p>

<pre class="brush: js">var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop');   // returns true
a.propertyIsEnumerable(0);        // returns true
</pre>

<h3 id="User-defined_vs._built-in_objects">User-defined vs. built-in objects</h3>

<p>The following example demonstrates the enumerability of user-defined vs. built-in
  properties:</p>

<pre class="brush: js">var a = ['is enumerable'];

a.propertyIsEnumerable(0);          // returns true
a.propertyIsEnumerable('length');   // returns false

Math.propertyIsEnumerable('random');   // returns false
this.propertyIsEnumerable('Math');     // returns false
</pre>

<h3 id="Direct_vs._inherited_properties">Direct vs. inherited properties</h3>

<pre class="brush: js">var a = [];
a.propertyIsEnumerable('constructor');         // returns false

function firstConstructor() {
  this.property = 'is not enumerable';
}

firstConstructor.prototype.firstMethod = function() {};

function secondConstructor() {
  this.method = function() { return 'is enumerable'; };
}

secondConstructor.prototype = new firstConstructor;
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = 'is enumerable';

o.propertyIsEnumerable('arbitraryProperty');   // returns true
o.propertyIsEnumerable('method');              // returns true
o.propertyIsEnumerable('property');            // returns false

o.property = 'is enumerable';

o.propertyIsEnumerable('property');            // returns true

// These return false as they are on the prototype which
// propertyIsEnumerable does not consider (even though the last two
// are iteratable with for-in)
o.propertyIsEnumerable('prototype');   // returns false (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable('constructor'); // returns false
o.propertyIsEnumerable('firstMethod'); // returns false
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability
      and ownership of properties</a></li>
  <li>{{jsxref("Statements/for...in", "for...in")}}</li>
  <li>{{jsxref("Object.keys()")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
