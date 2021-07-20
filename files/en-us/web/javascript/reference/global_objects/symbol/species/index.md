---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
browser-compat: javascript.builtins.Symbol.species
---
<div>{{JSRef}}</div>

<p>The well-known symbol <code><strong>Symbol.species</strong></code> specifies a function-valued property that the constructor function uses to create derived objects.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-species.html")}}</div>


<h2 id="Description">Description</h2>

<p>The <code>species</code> accessor property allows subclasses to override the default constructor for objects.</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_species">Using species</h3>

<p>You might want to return {{jsxref("Array")}} objects in your derived array class <code>MyArray</code>. For example, when using methods such as {{jsxref("Array.map", "map()")}} that return the default constructor, you want these methods to return a parent <code>Array</code> object, instead of the <code>MyArray</code> object. The <code>species</code> symbol lets you do this:</p>

<pre class="brush: js">class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
let a = new MyArray(1,2,3);
let mapped = a.map(x =&gt; x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Map.@@species", "Map[@@species]")}}</li>
 <li>{{jsxref("Set.@@species", "Set[@@species]")}}</li>
</ul>
