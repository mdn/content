---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
tags:
  - ECMAScript 2015
  - Function
  - JavaScript
  - Property
  - Polyfill
browser-compat: javascript.builtins.Function.name
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">A {{jsxref("Function")}} object's read-only <strong><code>name</code></strong> property indicates the function's name as specified when it was created, or it may be either <code>anonymous</code> or <code>''</code> (an empty string) for functions created anonymously.</span></p>

<div>{{EmbedInteractiveExample("pages/js/function-name.html")}}</div>

<div>{{js_property_attributes(0,0,1)}}</div>

<div class="note">
<p><strong>Note:</strong> In non-standard, pre-ES2015 implementations the <code>configurable</code> attribute was <code>false</code> as well.</p>
</div>

<h2 id="JavaScript_compressors_and_minifiers">JavaScript compressors and minifiers</h2>

<div class="warning">
<p><strong>Warning:</strong> Be careful when using <code>Function.name</code> and source code transformations, such as those carried out by JavaScript compressors (minifiers) or obfuscators. These tools are often used as part of a JavaScript build pipeline to reduce the size of a program prior to deploying it to production. Such transformations often change a function's name at build-time.</p>
</div>

<p>Source code such as:</p>

<pre class="brush: js">function Foo() {};
let foo = new Foo();

if (foo.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
</pre>

<p>may be compressed to:</p>

<pre class="brush: js">function a() {};
let b = new a();
if (b.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
</pre>

<p>In the uncompressed version, the program runs into the truthy-branch and logs "<code>'foo' is an instance of 'Foo'</code>". Whereas, in the compressed version it behaves differently, and runs into the else-branch. If you rely on <code>Function.name</code>, like in the example above, make sure your build pipeline doesn't change function names, or don't assume a function to have a particular name.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Function_statement_name">Function statement name</h3>

<p>The <code>name</code> property returns the name of a function statement.</p>

<pre class="brush: js">function doSomething() {}
doSomething.name; // "doSomething"
</pre>

<h3 id="Function_constructor_name">Function constructor name</h3>

<p>Functions created with the syntax <code>new Function(...)</code> or just <code>Function(...)</code> create {{jsxref("Function")}} objects and their name is "anonymous".</p>

<pre class="brush: js">(new Function).name; // "anonymous"</pre>

<h3 id="Anonymous_function_expression">Anonymous function expression</h3>

<p>Anonymous function expressions that were created using the keyword <code>function</code> or arrow functions would have <code>""</code> (an empty string) as their name.</p>

<pre class="brush: js">(function() {}).name; // ""
(() =&gt; {}).name; // ""
</pre>

<h3 id="Inferred_function_names">Inferred function names</h3>

<p>Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).</p>

<pre class="brush: js">let f = function() {};
let object = {
  someMethod: function() {}
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
</pre>

<p>You can define a function with a name in a {{jsxref("Operators/Function", "function expression", "", 1)}}:</p>

<pre class="brush: js">let object = {
  someMethod: function object_someMethod() {}
};
console.log(object.someMethod.name); // logs "object_someMethod"

try { object_someMethod } catch(e) { console.log(e); }
// ReferenceError: object_someMethod is not defined
</pre>

<p>The name property is read-only and cannot be changed by the assigment operator:</p>


<pre class="brush: js"> let object = {
  // anonymous
  someMethod: function() {}
};

object.someMethod.name = 'otherMethod';
console.log(object.someMethod.name); // someMethod
</pre>

<p>To change it, use {{jsxref("Object.defineProperty()")}}.</p>

<h3 id="Shorthand_method_names">Shorthand method names</h3>

<pre class="brush: js">var o = {
  foo(){}
};
o.foo.name; // "foo";</pre>

<h3 id="Bound_function_names">Bound function names</h3>

<p>{{jsxref("Function.bind()")}} produces a function whose name is "bound " plus the function name.</p>

<pre class="brush: js">function foo() {};
foo.bind({}).name; // "bound foo"
</pre>

<h3 id="Function_names_for_getters_and_setters">Function names for getters and setters</h3>

<p>When using <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">get</a></code> and <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">set</a></code> accessor properties, "get" or "set" will appear in the function name.</p>

<pre class="brush: js">let o = {
  get foo(){},
  set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";</pre>

<h3 id="Function_names_in_classes">Function names in classes</h3>

<p>You can use <code>obj.constructor.name</code> to check the "class" of an object (but be sure to read the warnings below):</p>

<pre class="brush: js">function Foo() {}  // ES2015 Syntax: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs "Foo"
</pre>

<div class="warning">
<p><strong>Warning:</strong> The script interpreter will set the built-in <code>Function.name</code> property only if a function does not have an own property called <em>name</em> (see section <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname">9.2.11 of the ECMAScript2015 Language Specification</a>). However, ES2015 specifies the <em>static</em> keyword such that static methods will be set as OwnProperty of the class constructor function (ECMAScript2015, <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation">14.5.14.21.b</a> + <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation">12.2.6.9</a>).</p>
</div>

<p>Therefore we can't obtain the class name for virtually any class with a static method property <code>name()</code>:</p>

<pre class="brush: js">class Foo {
  constructor() {}
  static name() {}
}
</pre>

<p>With a <code>static name()</code> method <code>Foo.name</code> no longer holds the actual class name but a reference to the <code>name()</code> function object. Above class definition in ES2015 syntax will behave in Chrome or Firefox similar to the following snippet in ES5 syntax:</p>

<pre class="brush: js">function Foo() {}
Object.defineProperty(Foo, 'name', { writable: true });
Foo.name = function() {};
</pre>

<p>Trying to obtain the class of <code>fooInstance</code> via <code>fooInstance.constructor.name</code> won't give us the class name at all but a reference to the static class method. Example:</p>

<pre class="brush: js">let fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs function name()
</pre>

<p>You may also see from the ES5 syntax example that in Chrome or Firefox our static definition of <code>Foo.name</code> becomes <em>writable</em>. The built-in definition in the absence of a custom static definition is <em>read-only</em>:</p>

<pre class="brush: js">Foo.name = 'Hello';
console.log(Foo.name); // logs "Hello" if class Foo has a static name() property but "Foo" if not.
</pre>

<p>Therefore you may not rely on the built-in <code>Function.name</code> property to always hold a class's name.</p>

<h3 id="Symbols_as_function_names">Symbols as function names</h3>

<p>If a {{jsxref("Symbol")}} is used a function name and the symbol has a description, the method's name is the description in square brackets.</p>

<pre class="brush: js">let sym1 = Symbol("foo");
let sym2 = Symbol();
let o = {
  [sym1]: function(){},
  [sym2]: function(){}
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill for functions <code>.name</code> property is available in <a href="https://github.com/zloirock/core-js#ecmascript-function"><code>core-js</code></a></li>
 <li>{{jsxref("Function")}}</li>
</ul>
