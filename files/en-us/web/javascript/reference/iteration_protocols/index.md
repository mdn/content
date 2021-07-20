---
title: Iteration protocols
slug: Web/JavaScript/Reference/Iteration_protocols
tags:
  - ECMAScript 2015
  - Guide
  - Intermediate
  - Iterable
  - Iterator
  - JavaScript
  - Protocols
---
<div>{{jsSidebar("More")}}</div>

<p>As a couple of additions to ECMAScript 2015, <strong>Iteration protocols</strong> aren't new built-ins or syntax, but <em>protocols</em>. These protocols can be implemented by any object by following some conventions.</p>

<p>There are two protocols: The <a href="#the_iterable_protocol">iterable protocol</a> and the <a href="#the_iterator_protocol">iterator protocol</a>.</p>

<h2 id="the_iterable_protocol">The iterable protocol</h2>

<p><strong>The iterable protocol</strong> allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a {{jsxref("Statements/for...of", "for...of")}} construct. Some built-in types are <a href="#built-in_iterables">built-in iterables</a> with a default iteration behavior, such as {{jsxref("Array")}} or {{jsxref("Map")}}, while other types (such as {{jsxref("Object")}}) are not.</p>

<p>In order to be <strong>iterable</strong>, an object must implement the <strong><code>@@iterator</code></strong> method, meaning that the object (or one of the objects up its <a href="/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">prototype chain</a>) must have a property with a <code>@@iterator</code> key which is available via constant {{jsxref("Symbol.iterator")}}:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[Symbol.iterator]</code></td>
   <td>A zero-argument function that returns an object, conforming to the <a href="#the_iterator_protocol">iterator protocol</a>.</td>
  </tr>
 </tbody>
</table>

<p>Whenever an object needs to be iterated (such as at the beginning of a {{jsxref("Statements/for...of", "for...of")}} loop), its <code>@@iterator</code> method is called with no arguments, and the returned <strong>iterator</strong> is used to obtain the values to be iterated.</p>

<p>Note that when this zero-argument function is called, it is invoked as a method on the iterable object. Therefore inside of the function, the <code>this</code> keyword can be used to access the properties of the iterable object, to decide what to provide during the iteration.</p>

<p>This function can be an ordinary function, or it can be a generator function, so that when invoked, an iterator object is returned. Inside of this generator function, each entry can be provided by using <code>yield</code>.</p>

<h2 id="the_iterator_protocol">The iterator protocol</h2>

<p><strong>The iterator protocol</strong> defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.</p>

<p>An object is an iterator when it implements a <code><strong>next()</strong></code> method with the following semantics:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>next()</code></td>
   <td>
    <p>A function, with either zero arguments or one argument, that returns an object with at least the following two properties. If the <code>next()</code> method is called with one argument, that argument will be available to the <code>next()</code> method being invoked.</p>

    <dl>
     <dt><code>done</code> (boolean)</dt>
     <dd>
     <p>Has the value <code>false</code> if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the <code>done</code> property altogether.)</p>

     <p>Has the value <code>true</code> if the iterator has completed its sequence. In this case, <code>value</code> optionally specifies the return value of the iterator.</p>
     </dd>
     <dt><code>value</code></dt>
     <dd>Any JavaScript value returned by the iterator. Can be omitted when <code>done</code> is <code>true</code>.</dd>
    </dl>

    <p>The <code>next()</code> method must always return an object with appropriate properties including <code>done</code> and <code>value</code>. If a non-object value gets returned (such as <code>false</code> or <code>undefined</code>), a {{jsxref("TypeError")}} (<code>"iterator.next() returned a non-object value"</code>) will be thrown.</p>
   </td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Note:</strong> It is not possible to know reflectively whether a particular object implements the iterator protocol. However, it is easy to create an object that satisfies <em>both</em> the iterator and iterable protocols (as shown in the example below).</p>

<p>Doing so allows an iterator to be consumed by the various syntaxes expecting iterables. Thus, it is seldom useful to implement the Iterator Protocol without also implementing Iterable.</p>

<pre class="brush: js">// Satisfies both the Iterator Protocol and Iterable
const myIterator = {
    next: function() {
        // ...
    },
    [Symbol.iterator]: function() { return this; }
};
</pre>

<p>However, when possible, it's better for <code>iterable[Symbol.iterator]</code> to return different iterators that always start from the beginning, like <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator">Set.prototype[@@iterator]()</a></code> does.</p>
</div>

<h2 id="Examples_using_the_iteration_protocols">Examples using the iteration protocols</h2>

<p>A {{jsxref("String")}} is an example of a built-in iterable object:</p>

<pre class="brush: js">
const someString = 'hi';
console.log(typeof someString[Symbol.iterator]); // "function"
</pre>

<p><code>String</code>'s {{jsxref("String/@@iterator", "default iterator", "", 1)}} returns the string's code points one by one:</p>

<pre class="brush: js">
const iterator = someString[Symbol.iterator]();
console.log(iterator + ''); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }</pre>

<p>Some built-in constructs—such as the {{jsxref("Operators/Spread_syntax", "spread syntax", "", 1)}}—use the same iteration protocol under the hood:</p>

<pre class="brush: js">console.log([...someString]); // ["h", "i"]</pre>

<p>You can redefine the iteration behavior by supplying our own <code>@@iterator</code>:</p>

<pre class="brush: js">// need to construct a String object explicitly to avoid auto-boxing
const someString = new String('hi');

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next: function () {
      return this._first ? {
        value: 'bye',
        done: (this._first = false)
      } : {
        done: true
      }
    },
    _first: true
  };
};
</pre>

<p>Notice how redefining <code>@@iterator</code> affects the behavior of built-in constructs that use the iteration protocol:</p>

<pre class="brush: js">console.log([...someString]); // ["bye"]
console.log(someString + ''); // "hi"
</pre>

<h2 id="Iterable_examples">Iterable examples</h2>

<h3 id="Built-in_iterables">Built-in iterables</h3>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, and {{jsxref("Set")}} are all built-in iterables, because each of their prototype objects implements an <code>@@iterator</code> method.</p>

<h3 id="User-defined_iterables">User-defined iterables</h3>

<p>You can make your own iterables like this:</p>

<pre class="brush: js">
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]
</pre>

<h3 id="Built-in_APIs_accepting_iterables">Built-in APIs accepting iterables</h3>

<p>There are many APIs that accept iterables. Some examples include:</p>

<ul>
 <li>{{jsxref("Map", "new Map([<var>iterable</var>])")}}</li>
 <li>{{jsxref("WeakMap", "new WeakMap([<var>iterable</var>])")}}</li>
 <li>{{jsxref("Set", "new Set([<var>iterable</var>])")}}</li>
 <li>{{jsxref("WeakSet", "new WeakSet([<var>iterable</var>])")}}</li>
</ul>

<pre class="brush: js">
new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2); // "b"

const myObj = {};

new WeakMap([
    [{}, 'a'],
    [myObj, 'b'],
    [{}, 'c']
]).get(myObj);             // "b"

new Set([1, 2, 3]).has(3); // true
new Set('123').has('2');   // true

new WeakSet(function* () {
    yield {}
    yield myObj
    yield {}
}()).has(myObj);           // true
</pre>

<h4 id="See_also_1">See also</h4>

<ul>
 <li>{{jsxref("Promise.all()", "Promise.all(<var>iterable</var>)")}}</li>
 <li>{{jsxref("Promise.race()", "Promise.race(<var>iterable</var>)")}}</li>
 <li>{{jsxref("Array.from()", "Array.from(<var>iterable</var>)")}}</li>
</ul>

<h3 id="Syntaxes_expecting_iterables">Syntaxes expecting iterables</h3>

<p>Some statements and expressions expect iterables, for example the {{jsxref("Statements/for...of", "for...of")}} loops, the {{jsxref("Operators/Spread_syntax", "spread operator", "", 1)}}), {{jsxref("Operators/yield*", "yield*")}}, and {{jsxref("Operators/Destructuring_assignment", "destructuring assignment")}}:</p>

<pre class="brush: js">
for (const value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

console.log([...'abc']);   // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
console.log(a);            // "a"

</pre>

<h3 id="Non-well-formed_iterables">Non-well-formed iterables</h3>

<p>If an iterable's <code>@@iterator</code> method doesn't return an iterator object, then it's considered a <em>non-well-formed</em> iterable.</p>

<p>Using one is likely to result in runtime errors or buggy behavior:</p>

<pre class="brush: js example-bad">
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1;
[...nonWellFormedIterable]; // TypeError: [] is not a function
</pre>

<h2 id="Iterator_examples">Iterator examples</h2>

<h3 id="Simple_iterator">Simple iterator</h3>

<pre class="brush: js">function makeIterator(array) {
  let nextIndex = 0
  return {
    next: function() {
      return nextIndex &lt; array.length ? {
        value: array[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}

const it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
</pre>

<h3 id="Infinite_iterator">Infinite iterator</h3>

<pre class="brush: js">function idMaker() {
  let index = 0;
  return {
    next: function() {
      return {
        value: index++,
        done: false
      };
    }
  };
}

const it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
</pre>

<h3 id="With_a_generator">With a generator</h3>

<pre class="brush: js">function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex &lt; array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker()

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
</pre>

<h3 id="With_ES2015_class">With ES2015 class</h3>

<pre class="brush: js">class SimpleClass {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    // Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
    let index = 0;

    return {
      next: () =&gt; {
        if (index &lt; this.data.length) {
          return {value: this.data[index++], done: false}
        } else {
          return {done: true}
        }
      }
    }
  }
}

const simple = new SimpleClass([1,2,3,4,5]);

for (const val of simple) {
  console.log(val); // '1' '2' '3' '4' '5'
}
</pre>

<h2 id="Is_a_generator_object_an_iterator_or_an_iterable">Is a generator object an iterator or an iterable?</h2>

<p>A {{jsxref("Generator", "generator object", "", 1)}} is <em>both</em> iterator and iterable:</p>

<pre class="brush: js">
const aGeneratorObject = function* () {
  yield 1;
  yield 2;
  yield 3;
}();

console.log(typeof aGeneratorObject.next);
// "function", because it has a next method, so it's an iterator

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function", because it has an @@iterator method, so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable

console.log([...aGeneratorObject]);
// [1, 2, 3]

console.log(Symbol.iterator in aGeneratorObject)
// true, because @@iterator method is a property of aGeneratorObject

</pre>


<h2 id="See_also_2">See also</h2>

<ul>
 <li>{{jsxref("Statements/function*", "the <code>function*</code> documentation", "", 1)}}</li>
 <li><a href="https://tc39.es/ecma262/#sec-iteration">Iteration in the ECMAScript specification</a></li>
</ul>
