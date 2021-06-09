---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
tags:
  - ECMAScript 2015
  - Function
  - Iterator
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.generator_function
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <code><strong>function*</strong></code> declaration (<code>function</code> keyword
  followed by an asterisk) defines a <em>generator function</em>, which returns a
  {{jsxref("Global_Objects/Generator","Generator")}} object.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}</div>

<p>You can also define generator functions using the {{jsxref("GeneratorFunction")}}
  constructor, or the function expression syntax.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">function* <var>name</var>([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>The function name.</dd>
  <dt><code><var>param</var></code> {{optional_inline}}</dt>
  <dd>The name of a formal parameter for the function.</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>The statements comprising the body of the function.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Generators are functions that can be exited and later re-entered. Their context
  (variable bindings) will be saved across re-entrances.</p>

<p>Generators in JavaScript -- especially when combined with Promises -- are a very
  powerful tool for asynchronous programming as they mitigate -- if not entirely eliminate
  -- the problems with callbacks, such as <a href="http://callbackhell.com/">Callback
    Hell</a> and <a
    href="https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/">Inversion
    of Control</a>. However, an even simpler solution to these problems can be achieved
  with {{jsxref("Statements/async_function", "async functions", "", 1)}}.</p>

<p>Calling a generator function does not execute its body immediately; an <a
    href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator">iterator</a>
  object for the function is returned instead. When the iterator's <code>next()</code>
  method is called, the generator function's body is executed until the first
  {{jsxref("Operators/yield", "yield")}} expression, which specifies the value to be
  returned from the iterator or, with {{jsxref("Operators/yield*", "yield*")}}, delegates
  to another generator function. The <code>next()</code> method returns an object with a
  <code>value</code> property containing the yielded value and a <code>done</code>
  property which indicates whether the generator has yielded its last value, as a boolean.
  Calling the <code>next()</code> method with an argument will resume the generator
  function execution, replacing the <code>yield</code> expression where an execution was
  paused with the argument from <code>next()</code>.</p>

<p>A <code>return</code> statement in a generator, when executed, will make the generator
  finish (i.e. the <code>done</code> property of the object returned by it will be set to
  <code>true</code>). If a value is returned, it will be set as the <code>value</code>
  property of the object returned by the generator.<br>
  Much like a <code>return</code> statement, an error thrown inside the generator will
  make the generator finished -- unless caught within the generator's body.<br>
  When a generator is finished, subsequent <code>next()</code> calls will not execute any
  of that generator's code, they will just return an object of this form:
  <code>{value: undefined, done: true}</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Simple_example">Simple example</h3>

<pre class="brush: js">function* idMaker() {
  var index = 0;
  while (true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...</pre>

<h3 id="Example_with_yield*">Example with yield*</h3>

<pre class="brush: js">function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
</pre>

<h3 id="Passing_arguments_into_Generators">Passing arguments into Generators</h3>

<pre class="brush: js">function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
</pre>

<h3 id="Return_statement_in_a_generator">Return statement in a generator</h3>

<pre class="brush: js">function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
</pre>

<h3 id="Generator_as_an_object_property">Generator as an object property</h3>

<pre class="brush: js">const someObj = {
  *generator () {
    yield 'a';
    yield 'b';
  }
}

const gen = someObj.generator()

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
</pre>

<h3 id="Generator_as_an_object_method">Generator as an object method</h3>

<pre class="brush: js">class Foo {
  *generator () {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo ();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
</pre>

<h3 id="Generator_as_a_computed_property">Generator as a computed property</h3>

<pre class="brush: js">class Foo {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator] () {
    yield 'a';
    yield 'b';
  }
}

console.log(Array.from(new Foo)); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
</pre>

<h3 id="Generators_are_not_constructable">Generators are not constructable</h3>

<pre class="brush: js">function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor
</pre>

<h3 id="Generator_defined_in_an_expression">Generator defined in an expression</h3>

<pre class="brush: js">const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}</pre>

<h3 id="Generator_example">Generator example</h3>

<pre class="brush: js">function* powers(n){
     //endless loop to generate
     for(let current =n;; current *= n){
         yield current;
     }
}

for(let power of powers(2)){
     //controlling generator
     if(power &gt; 32) break;
     console.log(power)
           //2
          //4
         //8
        //16
       //32
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Operators/function*", "function*")}} expression</li>
  <li>{{jsxref("GeneratorFunction")}} object</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">Iteration
      protocols</a></li>
  <li>{{jsxref("Operators/yield", "yield")}}</li>
  <li>{{jsxref("Operators/yield*", "yield*")}}</li>
  <li>{{jsxref("Function")}} object</li>
  <li>{{jsxref("Statements/function", "function")}} declaration</li>
  <li>{{jsxref("Operators/function", "function")}} expression</li>
  <li>{{jsxref("Functions", "Functions and function scope", "", 1)}}
  </li>
  <li>Other web resources:
    <ul>
      <li><a href="https://facebook.github.io/regenerator/">Regenerator</a> an ES2015
        generator compiler to ES5</li>
      <li><a href="http://www.youtube.com/watch?v=qbKWsbJ76-s">Forbes Lindesay: Promises
          and Generators: control flow utopia -- JSConf EU 2013</a></li>
      <li><a href="https://github.com/mozilla/task.js">Task.js</a></li>
      <li><a
          href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#iterating-generators-asynchronously">Iterating
          generators asynchronously</a></li>
    </ul>
  </li>
</ul>
