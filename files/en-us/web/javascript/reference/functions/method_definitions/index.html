---
title: Method definitions
slug: Web/JavaScript/Reference/Functions/Method_definitions
tags:
- ECMAScript 2015
- Functions
- JavaScript
- Language feature
- Object
- Syntax
browser-compat: javascript.functions.method_definitions
---
<div>{{JsSidebar("Functions")}}</div>

<p>Starting with ECMAScript 2015, a shorter syntax for method definitions on objects
  initializers is introduced. It is a shorthand for a function assigned to the method's
  name.</p>

<div>{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const obj = {
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
  <var>property</var>( <var>parameters…</var> ) {},
  *<var>generator</var>( <var>parameters…</var> ) {},
  async <var>property</var>( <var>parameters…</var> ) {},
  async* <var>generator</var>( <var>parameters…</var> ) {},

  //  with computed keys
  get [<var>property]</var>() {},
  set [<var>property]</var>(<var>value</var>) {},
  [<var>property</var>]( <var>parameters…</var> ) {},
  *[<var>generator</var>]( <var>parameters…</var> ) {},
  async [<var>property</var>]( <var>parameters…</var> ) {},
  async* [<var>generator]</var>( <var>parameters…</var> ) {},
};
</pre>

<h2 id="Description">Description</h2>

<p>The shorthand syntax is similar to the <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a> and <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a> syntax introduced
  in ES5.</p>

<p>Given the following code:</p>

<pre class="brush: js">const obj = {
  foo: function() {
    // ...
  },
  bar: function() {
    // ...
  }
}
</pre>

<p>You are now able to shorten this to:</p>

<pre class="brush: js">const obj = {
  foo() {
    // ...
  },
  bar() {
    // ...
  }
}

</pre>

<h3 id="Generator_methods">Generator methods</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">Generator
    methods</a> can be defined using the shorthand syntax as well.</p>

<p>When doing so:</p>

<ul>
  <li>The asterisk (<code>*</code>) in the shorthand syntax must be <em>before</em> the
    generator property name. (That is, <code>* g(){}</code> will work,
    but <code>g *(){}</code> will not.)</li>
  <li>
    <p>Non-generator method definitions cannot contain the <code>yield</code> keyword.
      This means that <a
        href="/en-US/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function">legacy
        generator functions</a> won't work either, and will throw a
      {{jsxref("SyntaxError")}}. Always use <code>yield</code> in conjunction with the
      asterisk (<code>*</code>).</p>
  </li>
</ul>

<pre class="brush: js highlight[12]">// Using a named property
const obj2 = {
  g: function* () {
    let index = 0
    while (true) {
      yield index++
    }
  }
};

// The same object using shorthand syntax
const obj2 = {
  * g() {
    let index = 0
    while (true) {
      yield index++
    }
  }
};

const it = obj2.g()
console.log(it.next().value)  // 0
console.log(it.next().value)  // 1</pre>

<h3 id="Async_methods">Async methods</h3>

<p>{{jsxref("Statements/async_function", "Async methods", "", 1)}} can also be defined
  using the shorthand syntax.</p>

<pre class="brush: js highlight[12]">// Using a named property
const obj3 = {
  f: async function () {
    await some_promise
  }
}

// The same object using shorthand syntax
const obj3 = {
  async f() {
    await some_promise
  }
}
</pre>

<h3 id="Async_generator_methods">Async generator methods</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">Generator
    methods</a> can also be {{jsxref("Statements/async_function", "async", "", 1)}}.</p>

<pre class="brush: js">const obj4 = {
  f: async function* () {
    yield 1
    yield 2
    yield 3
  }
};

// The same object using shorthand syntax
const obj4 = {
  async* f() {
   yield 1
   yield 2
   yield 3
  }
}</pre>

<h3 id="Method_definitions_are_not_constructable">Method definitions are not constructable
</h3>

<p>Methods cannot be constructors! They will throw a {{jsxref("TypeError")}} if you try to
  instantiate them.</p>

<pre class="brush: js example-bad">const objA = {
  method() {}
}
new objA.method  // TypeError: obj.method is not a constructor

const objB = {
  * g() {}
}
new objB.g       // TypeError: obj.g is not a constructor (changed in ES2016)
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Simple_test_case">Simple test case</h3>

<pre class="brush: js highlight[3]">const obj = {
  a: 'foo',
  b() { return this.a }
};
console.log(obj.b())  // "foo"
</pre>

<h3 id="Computed_property_names">Computed property names</h3>

<p>The shorthand syntax also supports computed property names.</p>

<pre class="brush: js highlight[4]">const bar = {
  foo0: function() { return 0 },
  foo1() { return 1 },
  ['foo' + 2]() { return 2 }
}

console.log(bar.foo0())  // 0
console.log(bar.foo1())  // 1
console.log(bar.foo2())  // 2

// A global function
function foo() {
  return 1
}

let name = 'foo'
console.log(window[name]())  // 1

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">get</a></code>
  </li>
  <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">set</a></code>
  </li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a>
  </li>
</ul>
