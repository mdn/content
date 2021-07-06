---
title: Object initializer
slug: Web/JavaScript/Reference/Operators/Object_initializer
tags:
  - ECMAScript 2015
  - JSON
  - JavaScript
  - Language feature
  - Literal
  - Methods
  - Object
  - Primary Expression
  - computed
  - mutation
  - properties
browser-compat: javascript.operators.object_initializer
---
<div>{{JsSidebar("Operators")}}</div>

<p>Objects can be initialized using <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object"><code>new Object()</code></a>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create">Object.create()</a></code>, or using the <em>literal</em> notation (<em>initializer</em> notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (<code>{}</code>).</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let o = {}
let o = {a: 'foo', b: 42, c: {}}

let a = 'foo', b = 42, c = {}
let o = {a: a, b: b, c: c}

let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};
</pre>

<h3 id="New_notations_in_ECMAScript_2015">New notations in ECMAScript 2015</h3>

<p>Please see the compatibility table for support for these notations. In non-supporting environments, these notations will lead to syntax errors.</p>

<pre class="brush: js">// Shorthand property names (ES2015)
let a = 'foo', b = 42, c = {};
let o = {a, b, c}

// Shorthand method names (ES2015)
let o = {
  <var>property</var>(<var>parameters</var>) {}
}

// Computed property names (ES2015)
let prop = 'foo';
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}</pre>

<h2 id="Description">Description</h2>

<p>An object initializer is an expression that describes the initialization of an {{jsxref("Object")}}. Objects consist of <em>properties</em>, which are used to describe an object. The values of object properties can either contain <a href="/en-US/docs/Glossary/primitive">primitive</a> data types or other objects.</p>

<h3 id="Object_literal_notation_vs_JSON">Object literal notation vs JSON</h3>

<p>The object literal notation is not the same as the <strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation (<a href="/en-US/docs/Glossary/JSON">JSON</a>). Although they look similar, there are differences between them:</p>

<ul>
 <li>JSON permits <em>only</em> property definition using <code>"property": value</code> syntax.  The property name must be double-quoted, and the definition cannot be a shorthand.</li>
 <li>In JSON the values can only be strings, numbers, arrays, <code>true</code>, <code>false</code>, <code>null</code>, or another (JSON) object.</li>
 <li>A function value (see "Methods" below) can not be assigned to a value in JSON.</li>
 <li>Objects like {{jsxref("Date")}} will be a string after {{jsxref("JSON.parse()")}}.</li>
 <li>{{jsxref("JSON.parse()")}} will reject computed property names and an error will be thrown.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_objects">Creating objects</h3>

<p>An empty object with no properties can be created like this:</p>

<pre class="brush: js">let object = {}</pre>

<p>However, the advantage of the <em>literal</em> or <em>initializer</em> notation is, that you are able to quickly create objects with properties inside the curly braces. You notate a list of <code>key: value</code> pairs delimited by commas.</p>

<p>The following code creates an object with three properties and the keys are <code>"foo"</code>, <code>"age"</code> and <code>"baz"</code>. The values of these keys are a string <code>"bar"</code>, the number <code>42</code>, and another object.</p>

<pre class="brush: js">let object = {
  foo: 'bar',
  age: 42,
  baz: {myProp: 12}
}</pre>

<h3 id="Accessing_properties">Accessing properties</h3>

<p>Once you have created an object, you might want to read or change them. Object properties can be accessed by using the dot notation or the bracket notation. (See <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessors</a> for detailed information.)</p>

<pre class="brush: js">object.foo // "bar"
object['age'] // 42

object.foo = 'baz'
</pre>

<h3 id="Property_definitions">Property definitions</h3>

<p>We have already learned how to notate properties using the initializer syntax. Oftentimes, there are variables in your code that you would like to put into an object. You will see code like this:</p>

<pre class="brush: js">let a = 'foo',
    b = 42,
    c = {};

let o = {
  a: a,
  b: b,
  c: c
}</pre>

<p>With ECMAScript 2015, there is a shorter notation available to achieve the same:</p>

<pre class="brush: js">let a = 'foo',
    b = 42,
    c = {};

// Shorthand property names (ES2015)
let o = {a, b, c}

// In other words,
console.log((o.a === {a}.a)) // true
</pre>

<h4 id="Duplicate_property_names">Duplicate property names</h4>

<p>When using the same name for your properties, the second property will overwrite the first.</p>

<pre class="brush: js">let a = {x: 1, x: 2}
console.log(a) // {x: 2}
</pre>

<p>In ECMAScript 5 strict mode code, duplicate property names were considered a {{jsxref("SyntaxError")}}.  With the introduction of computed property names making duplication possible at runtime, ECMAScript 2015 has removed this restriction.</p>

<pre class="brush: js">function haveES2015DuplicatePropertySemantics() {
  'use strict';
  try {
    ({prop: 1, prop: 2});

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch(e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}</pre>

<h3 id="Method_definitions">Method definitions</h3>

<p>A property of an object can also refer to a <a href="/en-US/docs/Web/JavaScript/Reference/Functions">function</a> or a <a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a> or <a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a> method.</p>

<pre class="brush: js">let o = {
  <var>property: function </var>(<var>parameters</var>) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {}
}</pre>

<p>In ECMAScript 2015, a shorthand notation is available, so that the keyword "<code>function</code>" is no longer necessary.</p>

<pre class="brush: js">// Shorthand method names (ES2015)
let o = {
  <var>property</var>(<var>parameters</var>) {},
}</pre>

<p>In ECMAScript 2015, there is a way to concisely define properties whose values are generator functions:</p>

<pre class="brush: js">let o = {
  *<var>generator</var>() {
    ...........
  }
};</pre>

<p>Which is equivalent to this ES5-like notation (but note that ECMAScript 5 has no generators):</p>

<pre class="brush: js">let o = {
  generator<var>: function* </var>() {
    ...........
  }
};</pre>

<p>For more information and examples about methods, see <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method definitions</a>.</p>

<h3 id="Computed_property_names">Computed property names</h3>

<p>Starting with ECMAScript 2015, the object initializer syntax also supports computed property names. That allows you to put an expression in brackets <code>[]</code>, that will be computed and used as the property name. This is reminiscent of the bracket notation of the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessor</a> syntax, which you may have used to read and set properties already.</p>

<p>Now you can use a similar syntax in object literals, too:</p>

<pre class="brush: js">// Computed property names (ES2015)
let i = 0
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a.foo1) // 1
console.log(a.foo2) // 2
console.log(a.foo3) // 3

const items = ["A","B","C"];
const obj = {
[items]: "Hello"
}
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]) // "Hello"

let param = 'size'
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

console.log(config) // {size: 12, mobileSize: 4}</pre>

<h3 id="Spread_properties">Spread properties</h3>

<p>The <a href="https://github.com/tc39/proposal-object-rest-spread">Rest/Spread Properties for ECMAScript</a> proposal (stage 4) adds <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread</a> properties to object literals. It copies own enumerable properties from a provided object onto a new object.</p>

<p>Shallow-cloning (excluding <code>prototype</code>) or merging objects is now possible using a shorter syntax than {{jsxref("Object.assign()")}}.</p>

<pre class="brush: js">let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }</pre>

<div class="notecard warning">
<p><strong>Warning:</strong> Note that {{jsxref("Object.assign()")}} triggers <a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setters</a>, whereas the spread operator doesn't!</p>
</div>

<h3 id="Prototype_mutation">Prototype mutation</h3>

<p>A property definition of the form <code>__proto__: value</code> or <code>"__proto__": value</code> does not create a property with the name <code>__proto__</code>.  Instead, if the provided value is an object or <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>, it changes the <code>[[Prototype]]</code> of the created object to that value.  (If the value is not an object or <code>null</code>, the object is not changed.)</p>

<pre class="brush: js">let obj1 = {}
assert(Object.getPrototypeOf(obj1) === Object.prototype)

let obj2 = {__proto__: null}
assert(Object.getPrototypeOf(obj2) === null)

let protoObj = {}
let obj3 = {'__proto__': protoObj}
assert(Object.getPrototypeOf(obj3) === protoObj)

let obj4 = {__proto__: 'not an object or null'}
assert(Object.getPrototypeOf(obj4) === Object.prototype)
assert(!obj4.hasOwnProperty('__proto__'))
</pre>

<p>Only a single prototype mutation is permitted in an object literal. Multiple prototype mutations are a syntax error.</p>

<p>Property definitions that do not use "colon" notation are not prototype mutations. They are property definitions that behave identically to similar definitions using any other name.</p>

<pre class="brush: js">let __proto__ = 'variable'

let obj1 = {__proto__}
assert(Object.getPrototypeOf(obj1) === Object.prototype)
assert(obj1.hasOwnProperty('__proto__'))
assert(obj1.__proto__ === 'variable')

let obj2 = {__proto__() { return 'hello'; }}
assert(obj2.__proto__() === 'hello')

let obj3 = {['__prot' + 'o__']: 17}
assert(obj3.__proto__ === 17)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property accessors</a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">get</a></code> / <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">set</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">Method definitions</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a></li>
</ul>
