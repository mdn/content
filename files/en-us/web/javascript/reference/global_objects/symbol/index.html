---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol</code></strong> is a built-in object whose constructor returns a <code>symbol</code> <a href="/en-US/docs/Glossary/Primitive">primitive</a> — also called a <strong>Symbol value</strong> or just a <strong>Symbol</strong> — that’s guaranteed to be unique. Symbols are often used to add unique property keys to an object that  won’t collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak {{Glossary("encapsulation")}}, or a weak form of <a href="https://en.wikipedia.org/wiki/Information_hiding">information hiding</a>.</p>

<p> Every <code>Symbol()</code> call is guaranteed to return a unique Symbol. Every <code>Symbol.for("key")</code> call will always return the same Symbol for a given value of <code>"key"</code>. When <code>Symbol.for("key")</code> is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.</p>

<h2 id="Description">Description</h2>

<p>To create a new primitive Symbol, you write <code>Symbol()</code> with an optional string as its description:</p>

<pre class="brush: js">let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
</pre>

<p>The above code creates three new Symbols. Note that <code>Symbol("foo")</code> does not coerce the string <code>"foo"</code> into a Symbol. It creates a new Symbol each time:</p>

<pre class="brush: js">Symbol('foo') === Symbol('foo')  // false
</pre>

<p>The following syntax with the {{jsxref("Operators/new", "new")}} operator will throw a {{jsxref("TypeError")}}:</p>

<pre class="brush: js">let sym = new Symbol()  // TypeError
</pre>

<p>This prevents authors from creating an explicit <code>Symbol</code> wrapper object instead of a new Symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, <code>new Boolean</code>, <code>new String</code> and <code>new Number</code>).</p>

<p>If you really want to create a <code>Symbol</code> wrapper object, you can use the <code>Object()</code> function:</p>

<pre class="brush: js">let sym = Symbol('foo')
typeof sym      // "symbol"
let symObj = Object(sym)
typeof symObj   // "object"
</pre>

<h3 id="Shared_symbols_in_the_global_symbol_registry">Shared Symbols in the global Symbol registry</h3>

<p>The above syntax using the <code>Symbol()</code> function will not create a global Symbol that is available in your whole codebase. To create Symbols available across files and even across realms (each of which has its own global scope), use the methods {{jsxref("Symbol.for()")}} and {{jsxref("Symbol.keyFor()")}} to set and retrieve Symbols from the global Symbol registry.</p>

<h3 id="Finding_symbol_properties_on_objects">Finding Symbol properties on objects</h3>

<p>The method {{jsxref("Object.getOwnPropertySymbols()")}} returns an array of Symbols and lets you find Symbol properties on a given object. Note that every object is initialized with no own Symbol properties, so that this array will be empty unless you've set Symbol properties on the object.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol"><code>Symbol()</code></a></dt>
 <dd>Creates a new <code>Symbol</code> object. It is incomplete as a constructor because it does not support the syntax "<code>new Symbol()</code>".</dd>
</dl>

<h2 id="Static_properties">Static properties</h2>

<dl>
 <dt>{{jsxref("Symbol.asyncIterator")}}</dt>
 <dd>A method that returns the default AsyncIterator for an object. Used by <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of"><code>for await...of</code></a>.</dd>
 <dt>{{jsxref("Symbol.hasInstance")}}</dt>
 <dd>A method determining if a constructor object recognizes an object as its instance. Used by {{jsxref("Operators/instanceof", "instanceof")}}.</dd>
 <dt>{{jsxref("Symbol.isConcatSpreadable")}}</dt>
 <dd>A Boolean value indicating if an object should be flattened to its array elements. Used by {{jsxref("Array.prototype.concat()")}}.</dd>
 <dt>{{jsxref("Symbol.iterator")}}</dt>
 <dd>A method returning the default iterator for an object. Used by <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of"><code>for...of</code></a>.</dd>
 <dt>{{jsxref("Symbol.match")}}</dt>
 <dd>A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by {{jsxref("String.prototype.match()")}}.</dd>
 <dt>{{jsxref("Symbol.matchAll")}}</dt>
 <dd>A method that returns an iterator, that yields matches of the regular expression against a string. Used by {{jsxref("String.prototype.matchAll()")}}.</dd>
 <dt>{{jsxref("Symbol.replace")}}</dt>
 <dd>A method that replaces matched substrings of a string. Used by {{jsxref("String.prototype.replace()")}}.</dd>
 <dt>{{jsxref("Symbol.search")}}</dt>
 <dd>A method that returns the index within a string that matches the regular expression. Used by {{jsxref("String.prototype.search()")}}.</dd>
 <dt>{{jsxref("Symbol.split")}}</dt>
 <dd>A method that splits a string at the indices that match a regular expression. Used by {{jsxref("String.prototype.split()")}}.</dd>
 <dt>{{jsxref("Symbol.species")}}</dt>
 <dd>A constructor function that is used to create derived objects.</dd>
 <dt>{{jsxref("Symbol.toPrimitive")}}</dt>
 <dd>A method converting an object to a primitive value.</dd>
 <dt>{{jsxref("Symbol.toStringTag")}}</dt>
 <dd>A string value used for the default description of an object. Used by {{jsxref("Object.prototype.toString()")}}.</dd>
 <dt>{{jsxref("Symbol.unscopables")}}</dt>
 <dd>An object value of whose own and inherited property names are excluded from the <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/with">with</a></code> environment bindings of the associated object.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("Symbol.for()", "Symbol.for(key)")}}</dt>
 <dd>Searches for existing Symbols with the given <code><var>key</var></code> and returns it if found. Otherwise a new Symbol gets created in the global Symbol registry with <code><var>key</var></code>.</dd>
 <dt>{{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}</dt>
 <dd>Retrieves a shared Symbol key from the global Symbol registry for the given Symbol.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Symbol.prototype.description")}}</dt>
 <dd>A read-only string containing the description of the Symbol.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Symbol.prototype.toSource()")}}</dt>
 <dd>Returns a string containing the source of the Symbol. Overrides the {{jsxref("Object.prototype.toSource()")}} method.</dd>
 <dt>{{jsxref("Symbol.prototype.toString()")}}</dt>
 <dd>Returns a string containing the description of the Symbol. Overrides the {{jsxref("Object.prototype.toString()")}} method.</dd>
 <dt>{{jsxref("Symbol.prototype.valueOf()")}}</dt>
 <dd>Returns the Symbol. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.</dd>
 <dt>{{jsxref("Symbol.prototype.@@toPrimitive()", "Symbol.prototype[@@toPrimitive]")}}</dt>
 <dd>Returns the Symbol.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_typeof_operator_with_symbols">Using the typeof operator with Symbols</h3>

<p>The {{jsxref("Operators/typeof", "typeof")}} operator can help you to identify Symbols.</p>

<pre class="brush: js">typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'
</pre>

<h3 id="Symbol_type_conversions">Symbol type conversions</h3>

<p>Some things to note when working with type conversion of Symbols.</p>

<ul>
 <li>When trying to convert a Symbol to a number, a {{jsxref("TypeError")}} will be thrown<br>
  (e.g. <code>+<var>sym</var></code> or <code><var>sym</var> | 0</code>).</li>
 <li>When using loose equality, <code>Object(<var>sym</var>) == <var>sym</var></code> returns <code>true</code>.</li>
 <li><code>Symbol("foo") + "bar" </code>throws a {{jsxref("TypeError")}} (can't convert Symbol to string). This prevents you from silently creating a new string property name from a Symbol, for example.</li>
 <li>The <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion">"safer" <code>String(<var>sym</var>)</code> conversion</a> works like a call to {{jsxref("Symbol.prototype.toString()")}} with Symbols, but note that <code>new String(<var>sym</var>)</code> will throw.</li>
</ul>

<h3 id="Symbols_and_for...in_iteration">Symbols and for...in iteration</h3>

<p>Symbols are not enumerable in <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"><code>for...in</code></a> iterations. In addition, {{jsxref("Object.getOwnPropertyNames()")}} will not return Symbol object properties, however, you can use {{jsxref("Object.getOwnPropertySymbols()")}} to get these.</p>

<pre class="brush: js">let obj = {}

obj[Symbol('a')] = 'a'
obj[Symbol.for('b')] = 'b'
obj['c'] = 'c'
obj.d = 'd'

for (let i in obj) {
   console.log(i)  // logs "c" and "d"
}</pre>

<h3 id="Symbols_and_JSON.stringify">Symbols and JSON.stringify()</h3>

<p>Symbol-keyed properties will be completely ignored when using <code>JSON.stringify()</code>:</p>

<pre class="brush: js">JSON.stringify({[Symbol('foo')]: 'foo'})
// '{}'
</pre>

<p>For more details, see {{jsxref("JSON.stringify()")}}.</p>

<h3 id="Symbol_wrapper_objects_as_property_keys">Symbol wrapper objects as property keys</h3>

<p>When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped Symbol:</p>

<pre class="brush: js">let sym = Symbol('foo')
let obj = {[sym]: 1}
obj[sym]             // 1
obj[Object(sym)]     // still 1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Symbol</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-symbol"><code>core-js</code></a></li>
 <li><a href="/en-US/docs/Glossary/Symbol">Glossary: Symbol data type</a></li>
 <li>{{jsxref("Operators/typeof", "typeof")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Data_structures">Data types and data structures</a></li>
 <li><a href="https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/">"ES6 In Depth: Symbols" on hacks.mozilla.org</a></li>
</ul>
