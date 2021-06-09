---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
tags:
- ECMAScript 2015
- ES6
- JavaScript
- Language feature
- Reference
- Statement
browser-compat: javascript.statements.for_of
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <strong><code>for...of</code> statement</strong> creates a loop iterating over <a
    href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable
    objects</a>, including: built-in {{jsxref("String")}}, {{jsxref("Array")}}, array-like
  objects (e.g., {{jsxref("Functions/arguments", "arguments")}}
  or {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}},
  {{jsxref("Set")}}, and user-defined iterables. It invokes a custom iteration hook with
  statements to be executed for the value of each distinct property of the object.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-forof.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">for (<var>variable</var> of <var>iterable</var>) {
  <var>statement</var>
}
</pre>

<dl>
  <dt><code><var>variable</var></code></dt>
  <dd>On each iteration a value of a different property is assigned to
    <code><var>variable</var></code>. <code><var>variable</var></code> may be declared
    with <code>const</code>, <code>let</code>, or <code>var</code>.</dd>
  <dt><code><var>iterable</var></code></dt>
  <dd>Object whose iterable properties are iterated.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Iterating_over_an_jsxrefArray">Iterating over an {{jsxref("Array")}}</h3>

<pre class="brush:js">const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
</pre>

<p>You can use {{jsxref("Statements/let", "let")}} instead of {{jsxref("Statements/const",
  "const")}} too, if you reassign the variable inside the block.</p>

<pre class="brush:js">const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
</pre>

<h3 id="Iterating_over_a_jsxrefString">Iterating over a {{jsxref("String")}}</h3>

<pre class="brush:js">const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
</pre>

<h3 id="Iterating_over_a_jsxrefTypedArray">Iterating over a {{jsxref("TypedArray")}}</h3>

<pre class="brush:js">const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
</pre>

<h3 id="Iterating_over_a_jsxrefMap">Iterating over a {{jsxref("Map")}}</h3>

<pre class="brush:js">const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
</pre>

<h3 id="Iterating_over_a_jsxrefSet">Iterating over a {{jsxref("Set")}}</h3>

<pre class="brush:js">const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
</pre>

<h3 id="Iterating_over_the_arguments_object">Iterating over the arguments object</h3>

<p>You can iterate over the {{jsxref("Functions/arguments", "arguments")}} object to
  examine all of the parameters passed into a JavaScript function:</p>

<pre class="brush: js">(function() {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3</pre>

<h3 id="Iterating_over_a_DOM_collection">Iterating over a DOM collection</h3>

<p>Iterating over DOM collections like <a href="/en-US/docs/Web/API/NodeList"
    title="NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."><code>NodeList</code></a>:
  the following example adds a <code>read</code> class to paragraphs that are direct
  descendants of an article:</p>

<pre class="brush:js">// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
const articleParagraphs = document.querySelectorAll('article &gt; p');

for (const paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}
</pre>

<h3 id="Closing_iterators">Closing iterators</h3>

<p>In <code>for...of</code> loops, abrupt iteration termination can be caused by
  <code>break</code>, <code>throw</code> or <code>return</code>. In these cases, the
  iterator is closed.</p>

<pre class="brush: js">function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

for (const o of foo()) {
  console.log(o);
  break; // closes iterator, execution continues outside of the loop
}
console.log('done');
</pre>

<h3 id="Iterating_over_generators">Iterating over generators</h3>

<p>You can also iterate over <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">generators</a>, i.e.
  functions generating an iterable object:</p>

<pre class="brush:js">function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (const n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n &gt;= 1000) {
    break;
  }
}
</pre>

<h4 id="Do_not_reuse_generators">Do not reuse generators</h4>

<p>Generators should not be re-used, even if the <code>for...of</code> loop is terminated
  early, for example via the {{jsxref("Statements/break", "break")}} keyword. Upon exiting
  a loop, the generator is closed and trying to iterate over it again does not yield any
  further results.</p>

<pre class="brush: js example-bad">const gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const o of gen) {
  console.log(o);
  break;  // Closes iterator
}

// The generator should not be re-used, the following does not make sense!
for (const o of gen) {
  console.log(o); // Never called.
}
</pre>

<h3 id="Iterating_over_other_iterable_objects">Iterating over other iterable objects</h3>

<p>You can also iterate over an object that explicitly implements the <a
    href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable">iterable</a>
  protocol:</p>

<pre class="brush:js">const iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i &lt; 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
</pre>

<h3 id="Difference_between_for...of_and_for...in">Difference between <code>for...of</code>
  and <code>for...in</code></h3>

<p>Both <code>for...in</code> and <code>for...of</code> statements iterate over something.
  The main difference between them is in what they iterate over.</p>

<p>The {{jsxref("Statements/for...in", "for...in")}} statement iterates over the <a
    href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">enumerable
    properties</a> of an object, in an arbitrary order.</p>

<p>The <code>for...of</code> statement iterates over values that the <a
    href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables">iterable
    object</a> defines to be iterated over.</p>

<p>The following example shows the difference between a <code>for...of</code> loop and a
  <code>for...in</code> loop when used with an {{jsxref("Array")}}.</p>

<pre class="brush:js">Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs "0", "1", "2", "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}
</pre>

<p>Let us look into the above code step by step.</p>

<pre class="brush: js">Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';</pre>

<p>Every object will inherit the <code>objCustom</code> property and every object that is
  an {{jsxref("Array")}} will inherit the <code>arrCustom</code> property since these
  properties have been added to {{jsxref("Object.prototype")}} and
  {{jsxref("Array.prototype")}}, respectively. The object <code>iterable</code> inherits
  the properties <code>objCustom</code> and <code>arrCustom</code> because of <a
    href="/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">inheritance and
    the prototype chain</a>.</p>

<pre class="brush: js">for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}</pre>

<p>This loop logs only <a
    href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">enumerable
    properties</a> of the <code>iterable</code> object, in arbitrary order. It doesn't log
  array <strong>elements</strong> <code>3</code>, <code>5</code>, <code>7</code> or
  <code>hello</code> because those are <strong>not</strong> enumerable properties, in fact
  they are not properties at all, they are <strong>values</strong>. It logs array
  <strong>indexes</strong> as well as <code>arrCustom</code> and <code>objCustom</code>,
  which are. If you're not sure why these properties are iterated over, there's a more
  thorough explanation of how {{jsxref("Statements/for...in", "array iteration and
  for...in", "#Array_iteration_and_for...in")}} work.</p>

<pre class="brush: js">for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}</pre>

<p>This loop is similar to the first one, but it uses
  {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} to check if the
  found enumerable property is the object's own, i.e. not inherited. If it is, the
  property is logged. Properties <code>0</code>, <code>1</code>, <code>2</code> and
  <code>foo</code> are logged because they are own properties (<strong>not
    inherited</strong>). Properties <code>arrCustom</code> and <code>objCustom</code> are
  not logged because they <strong>are inherited</strong>.</p>

<pre class="brush: js">for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}</pre>

<p>This loop iterates and logs <strong>values</strong> that <code>iterable</code>, as an
  <a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables">iterable
    object</a>, defines to be iterated over. The object's <strong>elements</strong>
  <code>3</code>, <code>5</code>, <code>7</code> are shown, but none of the object's
  <strong>properties</strong>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
  <li>{{jsxref("Map.prototype.forEach()")}}</li>
  <li>{{jsxref("Object.entries()")}} – Useful when using
    <strong><code>for...of</code></strong> over an object.</li>
</ul>
