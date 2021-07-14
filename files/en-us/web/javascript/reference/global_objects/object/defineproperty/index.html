---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
browser-compat: javascript.builtins.Object.defineProperty
---
<div>{{JSRef}}</div>

<p>The static method <code><strong>Object.defineProperty()</strong></code> defines a new
  property directly on an object, or modifies an existing property on an object, and
  returns the object.</p>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">Object.defineProperty(<var>obj</var>, <var>prop</var>, <var>descriptor</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object on which to define the property.</dd>
  <dt><code><var>prop</var></code></dt>
  <dd>The name or {{jsxref("Symbol")}} of the property to be defined or modified.</dd>
  <dt><code><var>descriptor</var></code></dt>
  <dd>The descriptor for the property being defined or modified.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The object that was passed to the function.</p>

<h2 id="Description">Description</h2>

<p>This method allows a precise addition to or modification of a property on an object.
  Normal property addition through assignment creates properties which show up during
  property enumeration ({{jsxref("Statements/for...in", "for...in")}} loop or
  {{jsxref("Object.keys")}} method), whose values may be changed, and which may be
  {{jsxref("Operators/delete", "deleted", "", 1)}}. This method allows these extra details
  to be changed from their defaults. By default, values added using
  <code>Object.defineProperty()</code> are immutable and not enumerable.</p>

<p>Property descriptors present in objects come in two main flavors: data descriptors and
  accessor descriptors. A <em><dfn>data descriptor</dfn></em> is a property that has a
  value, which may or may not be writable. An <em><dfn>accessor descriptor</dfn></em> is a
  property described by a getter-setter pair of functions. A descriptor must be one of
  these two flavors; it cannot be both.</p>

<p>Both data and accessor descriptors are objects. They share the following optional keys
  (please note: the <strong>defaults</strong> mentioned here are in the case of defining
  properties using <code>Object.defineProperty()</code>):</p>

<dl>
  <dt><code>configurable</code></dt>
  <dd><code>true</code> if the type of this property descriptor may be changed and if the
    property may be deleted from the corresponding object.<br>
    <strong>Defaults to <code>false</code>.</strong>
  </dd>
  <dt><code>enumerable</code></dt>
  <dd><code>true</code> if and only if this property shows up during enumeration of the
    properties on the corresponding object.<br>
    <strong>Defaults to <code>false</code>.</strong>
  </dd>
</dl>

<p>A <strong>data descriptor</strong> also has the following optional keys:</p>

<dl>
  <dt><code>value</code></dt>
  <dd>The value associated with the property. Can be any valid JavaScript value (number,
    object, function, etc).<br>
    <strong>Defaults to {{jsxref("undefined")}}.</strong>
  </dd>
  <dt><code>writable</code></dt>
  <dd><code>true</code> if the value associated with the property may be changed with an
    {{jsxref("Operators#assignment_operators", "assignment operator", "", 1)}}.<br>
    <strong>Defaults to <code>false</code>.</strong>
  </dd>
</dl>

<p>An <strong>accessor descriptor</strong> also has the following optional keys:</p>

<dl>
  <dt><code>get</code></dt>
  <dd>A function which serves as a getter for the property, or {{jsxref("undefined")}} if
    there is no getter. When the property is accessed, this function is called without
    arguments and with <code>this</code> set to the object through which the property is
    accessed (this may not be the object on which the property is defined due to
    inheritance). The return value will be used as the value of the property.<br>
    <strong>Defaults to {{jsxref("undefined")}}.</strong>
  </dd>
  <dt><code>set</code></dt>
  <dd>A function which serves as a setter for the property, or {{jsxref("undefined")}} if
    there is no setter. When the property is assigned, this function is called with one
    argument (the value being assigned to the property) and with <code>this</code> set to
    the object through which the property is assigned.<br>
    <strong>Defaults to {{jsxref("undefined")}}.</strong>
  </dd>
</dl>

<p>If a descriptor has neither of <code>value</code>, <code>writable</code>,
  <code>get</code> and <code>set</code> keys, it is treated as a data descriptor. If a
  descriptor has both [<code>value</code> or <code>writable</code>] and [<code>get</code>
  or <code>set</code>] keys, an exception is thrown.</p>

<p>Bear in mind that these attributes are not necessarily the descriptor's own properties.
  Inherited properties will be considered as well. In order to ensure these defaults are
  preserved, you might freeze the {{jsxref("Object")}} upfront, specify all
  options explicitly, or point to {{jsxref("null")}} with {{jsxref("Object.create",
  "Object.create(null)")}}.</p>

<pre class="brush: js">// using __proto__
var obj = {};
var descriptor = Object.create(null); // no inherited properties
descriptor.value = 'static';

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, 'key', descriptor);

// being explicit
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// recycling same object
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: value
    }
  );

  // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value;

  return d;
}
// ... and ...
Object.defineProperty(obj, 'key', withValue('static'));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_property">Creating a property</h3>

<p>When the property specified doesn't exist in the object,
  <code>Object.defineProperty()</code> creates a new property as described. Fields may be
  omitted from the descriptor, and default values for those fields are inputted.</p>

<pre class="brush: js">var o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, 'b', {
  // Using shorthand method names (ES2015 feature).
  // This is equivalent to:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get() { return 0xdeadbeef; }
});
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors
</pre>

<h3 id="Modifying_a_property">Modifying a property</h3>

<p>When the property already exists, <code>Object.defineProperty()</code> attempts to
  modify the property according to the values in the descriptor and the object's current
  configuration. If the old descriptor had its <code>configurable</code> attribute set to
  <code>false</code> the property is said to be “non-configurable”. It is not possible to
  change any attribute of a non-configurable accessor property. For data properties which are configurable, it is
  possible to modify the value if the property is writable, and it is possible to change the
  <code>writable</code> attribute from <code>true</code> to <code>false</code>. It is not
  possible to switch between data and accessor property types when the property is
  non-configurable.</p>

<p>A {{jsxref("TypeError")}} is thrown when attempts are made to change non-configurable
  property attributes (except <code>value</code> and <code>writable</code>, if permitted)
  unless the current and new values are the same.</p>

<h4 id="Writable_attribute">Writable attribute</h4>

<p>When the <code>writable</code> property attribute is set to <code>false</code>, the
  property is said to be “non-writable”. It cannot be reassigned.</p>

<pre class="brush: js">var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.

// strict mode
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
}());
</pre>

<p>As seen in the example, trying to write into the non-writable property doesn't change
  it but doesn't throw an error either.</p>

<h4 id="Enumerable_attribute">Enumerable attribute</h4>

<p>The <code>enumerable</code> property attribute defines whether the property is picked
  by {{jsxref("Object.assign()")}} or <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread
  </a>operator. For non-{{jsxref("Global_Objects/Symbol")}} properties it also defines whether it shows
  up in a {{jsxref("Statements/for...in", "for...in")}} loop and
  {{jsxref("Object.keys()")}} or not.</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true
         // when creating a property by setting it
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
o.propertyIsEnumerable(Symbol.for('e')); // true
o.propertyIsEnumerable(Symbol.for('f')); // false

var p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined
</pre>

<h4 id="Configurable_attribute">Configurable attribute</h4>

<p>The <code>configurable</code> attribute controls at the same time whether the property
  can be deleted from the object and whether its attributes (other than <code>value</code>
  and <code>writable</code>) can be changed.</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  enumerable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  set() {}
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', {
  get() { return 1; }
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', {
  value: 12
}); // throws a TypeError // ('value' can be changed when 'configurable' is false but not in this case due to 'get' accessor)

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
</pre>

<p>If the <code>configurable</code> attribute of <code>o.a</code> had been
  <code>true</code>, none of the errors would be thrown and the property would be deleted
  at the end.</p>

<h3 id="Adding_properties_and_default_values">Adding properties and default values</h3>

<p>It is important to consider the way default values of attributes are applied. There is
  often a difference between using dot notation to assign a value and using
  <code>Object.defineProperty()</code>, as shown in the example below.</p>

<pre class="brush: js">var o = {};

o.a = 1;
// is equivalent to:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});

// On the other hand,
Object.defineProperty(o, 'a', { value: 1 });
// is equivalent to:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});
</pre>

<h3 id="Custom_Setters_and_Getters">Custom Setters and Getters</h3>

<p>The example below shows how to implement a self-archiving object. When
  <code>temperature</code> property is set, the <code>archive</code> array gets a log
  entry.</p>

<pre class="brush: js">function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get() {
      console.log('get!');
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
</pre>

<p>In this example, a getter always returns the same value.</p>

<pre class="brush: js">var pattern = {
    get() {
        return 'I always return this string, ' +
               'whatever you have assigned';
    },
    set() {
        this.myname = 'this is my name string';
    }
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
</pre>

<h3 id="Inheritance_of_properties">Inheritance of properties</h3>

<p>If an accessor property is inherited, its <code>get</code> and <code>set</code> methods
  will be called when the property is accessed and modified on descendant objects. If
  these methods use a variable to store the value, this value will be shared by all
  objects.</p>

<pre class="brush: js">function myclass() {
}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
</pre>

<p>This can be fixed by storing the value in another property. In <code>get</code> and
  <code>set</code> methods, <code>this</code> points to the object which is used to access
  or modify the property.</p>

<pre class="brush: js">function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined
</pre>

<p>Unlike accessor properties, value properties are always set on the object itself, not
  on a prototype. However, if a non-writable value property is inherited, it still
  prevents from modifying the property on the object.</p>

<pre class="brush: js">function myclass() {
}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="Redefining_the_length_property_of_an_Array_object">Redefining the
  <code>length</code> property of an <code>Array</code> object</h3>

<p>It is possible to redefine the {{jsxref("Array.length", "length")}} property of arrays,
  subject to the usual redefinition restrictions. (The {{jsxref("Array.length",
  "length")}} property is initially non-configurable, non-enumerable, and writable. Thus
  on an unaltered array, it's possible to change the {{jsxref("Array.length", "length")}}
  property's value or to make it non-writable. It is not allowed to change its
  enumerability or configurability, or if it is non-writable to change its value or
  writability.) However, not all browsers permit this redefinition.</p>

<p>Firefox 4 through 22 will throw a {{jsxref("TypeError")}} on any attempt whatsoever
  (whether permitted or not) to redefine the {{jsxref("Array.length", "length")}} property
  of an array.</p>

<p>Versions of Chrome which implement <code>Object.defineProperty()</code> in some
  circumstances ignore a length value different from the array's current
  {{jsxref("Array.length", "length")}} property. In some circumstances changing
  writability seems to silently not work (and not throw an exception). Also, relatedly,
  some array-mutating methods like {{jsxref("Array.prototype.push")}} don't respect a
  non-writable length.</p>

<p>Versions of Safari which implement <code>Object.defineProperty()</code> ignore a
  <code>length</code> value different from the array's current {{jsxref("Array.length",
  "length")}} property, and attempts to change writability execute without error but do
  not actually change the property's writability.</p>

<p>Only Internet Explorer 9 and later, and Firefox 23 and later, appear to fully and
  correctly implement redefinition of the {{jsxref("Array.length", "length")}} property of
  arrays. For now, don't rely on redefining the {{jsxref("Array.length", "length")}}
  property of an array to either work, or to work in a particular manner. And even when
  you <em>can</em> rely on it, <a
    href="https://whereswalden.com/2013/08/05/new-in-firefox-23-the-length-property-of-an-array-can-be-made-non-writable-but-you-shouldnt-do-it/">there's
    really no good reason to do so</a>.</p>

<h3 id="Internet_Explorer_8_specific_notes">Internet Explorer 8 specific notes</h3>

<p>Internet Explorer 8 implemented a <code>Object.defineProperty()</code> method that
  could <a     href="https://msdn.microsoft.com/en-us/library/dd229916%28VS.85%29.aspx">only be used
    on DOM objects</a>. A few things need to be noted:</p>

<ul>
  <li>Trying to use <code>Object.defineProperty()</code> on native objects throws an
    error.</li>
  <li>Property attributes must be set to some values. The <code>configurable</code>,
    <code>enumerable</code> and <code>writable</code> attributes should all be set to
    <code>true</code> for data descriptor and <code>true</code> for
    <code>configurable</code>, <code>false</code> for <code>enumerable</code> for accessor
    descriptor.(?) Any attempt to provide other value(?) will result in an error being
    thrown.</li>
  <li>Reconfiguring a property requires first deleting the property. If the property isn't
    deleted, it stays as it was before the reconfiguration attempt.</li>
</ul>

<h3 id="Chrome_37_and_below_specific_notes">Chrome 37 (and below) specific notes</h3>

<p>Chrome 37 (and below) has a <a
    href="https://bugs.chromium.org/p/v8/issues/detail?id=3448">bug</a> where an
  attempt to define a "prototype" property, on a function, with
  <code>writable: false</code> doesn't work as expected.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and
      ownership of properties</a></li>
  <li>{{jsxref("Object.defineProperties()")}}</li>
  <li>{{jsxref("Object.propertyIsEnumerable()")}}</li>
  <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
  <li>{{jsxref("Functions/get", "get")}}</li>
  <li>{{jsxref("Functions/set", "set")}}</li>
  <li>{{jsxref("Object.create()")}}</li>
  <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>
