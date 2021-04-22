---
title: Iterators and generators
slug: Web/JavaScript/Guide/Iterators_and_Generators
tags:
  - Guide
  - Intermediate
  - JavaScript
  - l10n:priority
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}</div>

<p>Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of {{jsxref("Statements/for...of","for...of")}} loops.</p>

<p>For details, see also:</p>

<ul>
 <li>{{jsxref("Iteration_protocols")}}</li>
 <li>{{jsxref("Statements/for...of","for...of")}}</li>
 <li>{{jsxref("Statements/function*","function*")}} and {{jsxref("Generator")}}</li>
 <li>{{jsxref("Operators/yield","yield")}} and {{jsxref("Operators/yield*","yield*")}}</li>
</ul>

<h2 id="Iterators">Iterators</h2>

<p>In JavaScript an <strong>iterator</strong> is an object which defines a sequence and potentially a return value upon its termination.</p>

<p>Specifically, an iterator is any object which implements the <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol">Iterator protocol</a> by having a <code>next()</code> method that returns an object with two properties:</p>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>The next value in the iteration sequence.</dd>
 <dt><code><var>done</var></code></dt>
 <dd>This is <code>true</code> if the last value in the sequence has already been consumed. If <code><var>value</var></code> is present alongside <code><var>done</var></code>, it is the iterator's return value.</dd>
</dl>

<p>Once created, an iterator object can be iterated explicitly by repeatedly calling <code>next()</code>. Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once. After a terminating value has been yielded additional calls to <code>next()</code> should continue to return <code>{done: true}</code>.</p>

<p>The most common iterator in JavaScript is the Array iterator, which returns each value in the associated array in sequence.</p>

<p>While it is easy to imagine that all iterators could be expressed as arrays, this is not true. Arrays must be allocated in their entirety, but iterators are consumed only as necessary. Because of this, iterators can express sequences of unlimited size, such as the range of integers between <code>0</code> and {{jsxref("Global_Objects/Infinity", "Infinity")}}.</p>

<p>Here is an example which can do just that. It allows creation of a simple range iterator which defines a sequence of integers from <code><var>start</var></code> (inclusive) to <code><var>end</var></code> (exclusive) spaced <code><var>step</var></code> apart. Its final return value is the size of the sequence it created, tracked by the variable <code><var>iterationCount</var></code>.</p>

<pre class="brush: js">function makeRangeIterator(<var>start</var> = 0, <var>end</var> = Infinity, <var>step</var> = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex &lt; end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
</pre>

<p>Using the iterator then looks like this:</p>

<pre class="brush: js">const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

</pre>

<div class="note">
<p><strong>Note:</strong> It is not possible to know reflectively whether a particular object is an iterator. If you need to do this, use <a href="#iterables">Iterables</a>.</p>
</div>

<h2 id="Generator_functions">Generator functions</h2>

<p>While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. <strong>Generator functions</strong> provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the {{jsxref("Statements/function*","function*")}} syntax.</p>

<p>When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a <strong>Generator</strong>. When a value is consumed by calling the generator's <code>next</code> method, the Generator function executes until it encounters the <code>yield</code> keyword.</p>

<p>The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.</p>

<p>We can now adapt the example from above. The behavior of this code is identical, but the implementation is much easier to write and read.</p>

<pre class="brush: js">function* makeRangeIterator(<var>start</var> = 0, <var>end</var> = 100, <var>step</var> = 1) {
    let iterationCount = 0;
    for (let i = start; i &lt; end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}</pre>

<h2 id="Iterables">Iterables</h2>

<p>An object is <strong>iterable</strong> if it defines its iteration behavior, such as what values are looped over in a {{jsxref("Statements/for...of", "for...of")}} construct. Some built-in types, such as {{jsxref("Array")}} or {{jsxref("Map")}}, have a default iteration behavior, while other types (such as {{jsxref("Object")}}) do not.</p>

<p>In order to be <strong>iterable</strong>, an object must implement the <strong>@@iterator</strong> method. This means that the object (or one of the objects up its <a href="/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">prototype chain</a>) must have a property with a {{jsxref("Symbol.iterator")}} key.</p>

<p>It may be possible to iterate over an iterable more than once, or only once. It is up to the programmer to know which is the case.</p>

<p>Iterables which can iterate only once (such as Generators) customarily return <code>this</code> from their <strong>@@iterator</strong> method, whereas iterables which can be iterated many times must return a new iterator on each invocation of <strong>@@iterator</strong>.</p>

<pre class="brush: js">function* makeIterator() {
    yield 1;
    yield 2;
}

const <var>it</var> = makeIterator();

for (const <var>itItem</var> of <var>it</var>) {
    console.log(<var>itItem</var>);
}

console.log(<var>it</var>[Symbol.iterator]() === <var>it</var>) // true;

// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the <var>it</var> (itself),
// and consequently, the <var>it</var> object can iterate only _once_.

// If we change <var>it</var>'s @@iterator method to a function/generator
// which returns a new iterator/generator object, (<var>it</var>)
// can iterate many times

<var>it</var>[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
</pre>

<h3 id="User-defined_iterables">User-defined iterables</h3>

<p>You can make your own iterables like this:</p>

<pre class="brush: js">const myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

for (let value of myIterable) {
    console.log(value);
}
// 1
// 2
// 3

or

[...myIterable]; // [1, 2, 3]
</pre>

<h3 id="Built-in_iterables">Built-in iterables</h3>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} and {{jsxref("Set")}} are all built-in iterables, because their prototype objects all have a {{jsxref("Symbol.iterator")}} method.</p>

<h3 id="Syntaxes_expecting_iterables">Syntaxes expecting iterables</h3>

<p>Some statements and expressions expect iterables. For example: the {{jsxref("Statements/for...of","for-of")}} loops, {{jsxref("Operators/yield*","yield*")}}.</p>

<pre class="brush: js">for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

[...'abc'];
// ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

gen().next();
// { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
a;
// "a"

</pre>

<h2 id="Advanced_generators">Advanced generators</h2>

<p>Generators compute their <code>yield</code>ed values <em>on demand</em>, which allows them to efficiently represent sequences that are expensive to compute (or even infinite sequences, as demonstrated above).</p>

<p>The {{jsxref("Global_Objects/Generator/next","next()")}} method also accepts a value, which can be used to modify the internal state of the generator. A value passed to <code>next()</code> will be received by <code>yield</code> .</p>

<div class="notecard note">
<p><strong>Note:</strong> A value passed to the <em>first</em> invocation of <code>next()</code> is always ignored.</p>
</div>

<p>Here is the fibonacci generator using <code>next(<var>x</var>)</code> to restart the sequence:</p>

<pre class="brush: js">function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
        current = 0;
        next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2</pre>

<p>You can force a generator to throw an exception by calling its {{jsxref("Global_Objects/Generator/throw","throw()")}} method and passing the exception value it should throw. This exception will be thrown from the current suspended context of the generator, as if the <code>yield</code> that is currently suspended were instead a <code>throw <var>value</var></code> statement.</p>

<p>If the exception is not caught from within the generator,  it will propagate up through the call to <code>throw()</code>, and subsequent calls to <code>next()</code> will result in the <code>done</code> property being <code>true</code>.</p>

<p>Generators have a {{jsxref("Global_Objects/Generator/return","return(value)")}} method that returns the given value and finishes the generator itself.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}</p>
