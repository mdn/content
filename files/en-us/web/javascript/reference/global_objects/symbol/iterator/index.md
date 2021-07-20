---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.iterator
---
<div>{{JSRef}}</div>

<p>The well-known <code><strong>Symbol.iterator</strong></code> symbol specifies the default iterator for an object. Used by <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a>.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}</div>

<h2 id="Description">Description</h2>

<p>Whenever an object needs to be iterated (such as at the beginning of a <code>for..of</code> loop), its <code>@@iterator</code> method is called with no arguments, and the returned <strong>iterator</strong> is used to obtain the values to be iterated.</p>

<p>Some built-in types have a default iteration behavior, while other types (such as {{jsxref("Object")}}) do not. The built-in types with a <code>@@iterator</code> method are:</p>

<ul>
 <li>{{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}</li>
</ul>

<p>See also <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration protocols</a> for more information.</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Examples">Examples</h2>

<h3 id="User-defined_iterables">User-defined iterables</h3>

<p>We can make our own iterables like this:</p>

<pre class="brush: js">var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
</pre>

<p>Or iterables can be defined directly inside a class or object using a <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names">computed property</a>:</p>

<pre class="brush: js">class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

console.log(...new Foo); // 1, 2, 3
console.log(...someObj); // 'a', 'b'
</pre>

<h3 id="Non-well-formed_iterables">Non-well-formed iterables</h3>

<p>If an iterable's <code>@@iterator</code> method does not return an iterator object, then it is a non-well-formed iterable. Using it as such is likely to result in runtime exceptions or buggy behavior:</p>

<pre class="brush: js example-bad">var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1
[...nonWellFormedIterable] // TypeError: [] is not a function
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Symbol.iterator</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-symbol"><code>core-js</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration protocols</a></li>
 <li>{{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}</li>
 <li>{{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}</li>
</ul>
