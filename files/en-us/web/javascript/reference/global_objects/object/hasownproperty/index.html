---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - hasOwnProperty
browser-compat: javascript.builtins.Object.hasOwnProperty
---
<div>{{JSRef}}</div>

<p>The <strong><code>hasOwnProperty()</code></strong> method returns a boolean indicating
  whether the object has the specified property as its own property (as opposed to
  inheriting it).</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">hasOwnProperty(prop)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><var>prop</var></dt>
  <dd>The {{jsxref("String")}} name or {{Glossary("Symbol")}} of the property to test.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Boolean")}} indicating whether or not the object has the specified property
  as own property.</p>

<h2 id="Description">Description</h2>

<p>All descendants of {{jsxref("Object")}} inherit the <code>hasOwnProperty</code> method.
  This method can be used to determine whether an object has the specified property as a
  direct property of that object; unlike the {{jsxref("Operators/in", "in")}} operator,
  this method does not check for a property in the object's prototype chain. If an
  {{jsxref("Object")}} is an {{jsxref("Array")}}, <code>hasOwnProperty</code> method can
  check whether an index exists.</p>

<h2 id="Note">Note</h2>

<p><code>hasOwnProperty</code> returns true even if the value of the property is
  <code>null</code> or <code>undefined</code>.</p>

<pre class="brush: js">o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne');   // returns true
o.propTwo = undefined;
o.hasOwnProperty('propTwo');   // returns true
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_hasOwnProperty_to_test_for_a_propertys_existence">Using hasOwnProperty to
  test for a property's existence</h3>

<p>The following example determines whether the <code>o</code> object contains a property
  named <code>prop</code>:</p>

<pre class="brush: js">o = new Object();
o.hasOwnProperty('prop');   // returns false
o.prop = 'exists';
o.hasOwnProperty('prop');   // returns true
</pre>

<h3 id="Direct_vs._inherited_properties">Direct vs. inherited properties</h3>

<p>The following example differentiates between direct properties and properties inherited
  through the prototype chain:</p>

<pre class="brush: js">o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // returns true
o.hasOwnProperty('toString');         // returns false
o.hasOwnProperty('hasOwnProperty');   // returns false
</pre>

<h3 id="Iterating_over_the_properties_of_an_object">Iterating over the properties of an
  object</h3>

<p>The following example shows how to iterate over the properties of an object without
  executing on inherited properties. Note that the {{jsxref("Statements/for...in",
  "for...in")}} loop is already only iterating enumerable items, so one should not assume
  based on the lack of non-enumerable properties shown in the loop that
  <code>hasOwnProperty</code> itself is confined strictly to enumerable items (as with
  {{jsxref("Object.getOwnPropertyNames()")}}).</p>

<pre class="brush: js">var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' +
      name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
</pre>

<h3 id="Using_hasOwnProperty_as_a_property_name">Using hasOwnProperty as a property name
</h3>

<p>JavaScript does not protect the property name <code>hasOwnProperty</code>; thus, if the
  possibility exists that an object might have a property with this name, it is necessary
  to use an <em>external</em> <code>hasOwnProperty</code> to get correct results:</p>

<pre class="brush: js">var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use the hasOwnProperty property
// from the Object prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
</pre>

<p>Note that in the last case there are no newly created objects.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and
      ownership of properties</a></li>
  <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
  <li>{{jsxref("Statements/for...in", "for...in")}}</li>
  <li>{{jsxref("Operators/in", "in")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">JavaScript
      Guide: Inheritance revisited</a></li>
</ul>
