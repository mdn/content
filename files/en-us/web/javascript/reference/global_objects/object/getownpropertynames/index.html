---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.getOwnPropertyNames
---
<div>{{JSRef}}</div>

<p>The <strong><code>Object.getOwnPropertyNames()</code></strong> method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.</p>

<div>{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Object.getOwnPropertyNames(<var>obj</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code><var>obj</var></code></dt>
 <dd>The object whose enumerable and non-enumerable properties are to be returned.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An array of strings that corresponds to the properties found directly in the given object.</p>

<h2 id="Description">Description</h2>

<p><code>Object.getOwnPropertyNames()</code> returns an array whose elements are strings corresponding to the enumerable and non-enumerable properties found directly in a given object <code><var>obj</var></code>. The ordering of the enumerable properties in the array is consistent with the ordering exposed by a {{jsxref("Statements/for...in", "for...in")}} loop (or by {{jsxref("Object.keys()")}}) over the properties of the object. According to ES6, the integer keys of the object (both enumerable and non-enumerable) are added in ascending order to the array first, followed by the string keys in the order of insertion.</p>

<p>In ES5, if the argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be coerced to an object.</p>

<pre class="brush: js">Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES2015 code)
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.getOwnPropertyNames">Using Object.getOwnPropertyNames()</h3>

<pre class="brush: js">var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.
// logs ["0", "1", "2", "length"]

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() is an array method.
// logs ["0", "1", "2"]

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
    console.log(val + ' -&gt; ' + obj[val]);
  }
);
// logs
// 0 -&gt; a
// 1 -&gt; b
// 2 -&gt; c

// non-enumerable property
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// logs ["foo", "getFoo"]
</pre>

<p>If you want only the enumerable properties, see {{jsxref("Object.keys()")}} or use a {{jsxref("Statements/for...in", "for...in")}} loop (note that this will also return enumerable properties found along the prototype chain for the object unless the latter is filtered with {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}).</p>

<p>Items on the prototype chain are not listed:</p>

<pre class="brush: js">function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
  this.prop = 5;
  this.method = function() {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass() // ["prop", "method"]
  )
);
</pre>

<h3 id="Get_non-enumerable_properties_only">Get non-enumerable properties only</h3>

<p>This uses the {{jsxref("Array.prototype.filter()")}} function to remove the enumerable keys (obtained with {{jsxref("Object.keys()")}}) from a list of all keys (obtained with <code>Object.getOwnPropertyNames()</code>) thus giving only the non-enumerable keys as output.</p>

<pre class="brush: js">var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // Not found in enum_only keys,
    // meaning that the key is non-enumerable,
    // so return true so we keep this in the filter
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Object.getOwnPropertyNames</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a></li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Array.forEach()")}}</li>
</ul>
