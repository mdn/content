---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.entries
---
<div>{{JSRef}}</div>

<p>The <code><strong>Object.entries()</strong></code> method returns an array of a given
  object's own enumerable string-keyed property
  <code>[<var>key</var>, <var>value</var>]</code> pairs, in the same order as that
  provided by a {{jsxref("Statements/for...in", "for...in")}} loop. (The only important
  difference is that a <code>for...in</code> loop enumerates properties in the prototype
  chain as well). </p>

<p>The order of the array returned by <code><strong>Object.entries()</strong></code> does
  not depend on how an object is defined. If there is a need for certain ordering, then
  the array should be sorted first, like
  <code>Object.entries(obj).sort((a, b) =&gt; b[0].localeCompare(a[0]));</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/object-entries.html", "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Object.entries(<var>obj</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object whose own enumerable string-keyed property
    <code>[<var>key</var>, <var>value</var>]</code> pairs are to be returned.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An array of the given object's own enumerable string-keyed property
  <code>[<var>key</var>, <var>value</var>]</code> pairs.</p>

<h2 id="Description">Description</h2>

<p><code>Object.entries()</code> returns an array whose elements are arrays corresponding
  to the enumerable string-keyed property <code>[<var>key</var>, <var>value</var>]</code>
  pairs found directly upon <code>object</code>. The ordering of the properties is the
  same as that given by looping over the property values of the object manually.</p>

<h2 id="Polyfill">Polyfill</h2>

<p>To add compatible <code>Object.entries()</code> support in older environments that do
  not natively support it, you can use any of the following:</p>

<ul>
  <li>a demonstration implementation of <code>Object.entries</code> in the <a
      href="https://github.com/tc39/proposal-object-values-entries">tc39/proposal-object-values-entries</a> (if
    you don't need any support for IE);</li>
  <li>a polyfill in the <a
      href="https://github.com/es-shims/Object.entries">es-shims/Object.entries</a>
    repositories;</li>
  <li>or, you can use the simple, ready-to-deploy polyfill listed below:</li>
</ul>

<pre class="brush: js">if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
</pre>

<p>For the above polyfill code snippet, if you need support for IE&lt;9, then you will
  also need an <code>Object.keys()</code> polyfill (such as the one found on the
  {{jsxref("Object.keys")}} page).</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) =&gt; {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
</pre>

<h3 id="Converting_an_Object_to_a_Map">Converting an <code>Object</code> to a
  <code>Map</code></h3>

<p>The {{jsxref("Map", "new Map()")}} constructor accepts an iterable of
  <code>entries</code>. With <code>Object.entries</code>, you can easily convert from
  {{jsxref("Object")}} to {{jsxref("Map")}}:</p>

<pre class="brush: js">const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" =&gt; "bar", "baz" =&gt; 42}
</pre>

<h3 id="Iterating_through_an_Object">Iterating through an <code>Object</code></h3>

<p>Using <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring">Array
    Destructuring</a>, you can iterate through objects easily.</p>

<pre class="brush: js">const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) =&gt; console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Object.entries</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability
      and ownership of properties</a></li>
  <li>{{jsxref("Object.keys()")}}</li>
  <li>{{jsxref("Object.values()")}}</li>
  <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
  <li>{{jsxref("Object.create()")}}</li>
  <li>{{jsxref("Object.fromEntries()")}}</li>
  <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
  <li>{{jsxref("Map.prototype.entries()")}}</li>
  <li>{{jsxref("Map.prototype.keys()")}}</li>
  <li>{{jsxref("Map.prototype.values()")}}</li>
</ul>
