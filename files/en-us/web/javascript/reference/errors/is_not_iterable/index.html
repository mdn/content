---
title: 'TypeError: ''x'' is not iterable'
slug: Web/JavaScript/Reference/Errors/is_not_iterable
tags:
  - Error
  - JavaScript
  - Reference
  - TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "is not iterable" occurs when the value which is given as the
    right hand-side of <a
        href="/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of
    </a>or as argument of a function such as {{jsxref("Promise.all")}} or
    {{jsxref("TypedArray.from")}}, is not an <a
        href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">iterable
        object</a>.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: 'x' is not iterable (Firefox, Chrome)
TypeError: 'x' is not a function or its return value is not iterable (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The value which is given as the right hand-side of <a
        href="/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of
    </a>or as argument of a function such as {{jsxref("Promise.all")}} or
    {{jsxref("TypedArray.from")}}, is not an <a
        href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols">iterable
        object</a>.  An iterable can be a built-in iterable type such as
    {{jsxref("Array")}}, {{jsxref("String")}} or {{jsxref("Map")}}, a generator result, or
    an object implementing the <a
        href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">iterable
        protocol</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Iterating_over_Object_properties">Iterating over Object properties</h3>

<p>In JavaScript, {{jsxref("Object")}}s are not iterable unless they implement the <a
        href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">iterable
        protocol</a>. Therefore, you cannot use <a
        href="/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of
    </a>to iterate over the properties of an object.</p>

<pre class="brush: js example-bad">var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj is not iterable
    // …
}
</pre>

<p>Instead you have to use {{jsxref("Object.keys")}} or {{jsxref("Object.entries")}}, to
    iterate over the properties or entries of an object.</p>

<pre class="brush: js example-good">var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
    console.log(country, capital);

</pre>

<p>Another option for this use case might be to use a {{jsxref("Map")}}:</p>

<pre class="brush: js example-good">var map = new Map;
map.set('France', 'Paris');
map.set('England', 'London');
// Iterate over the property names:
for (let country of map.keys()) {
    let capital = map[country];
    console.log(country, capital);
}

for (let capital of map.values())
    console.log(capital);

for (const [country, capital] of map.entries())
    console.log(country, capital);
</pre>

<h3 id="Iterating_over_a_generator">Iterating over a generator</h3>

<p><a
        href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators">Generators</a>
    are functions you call to produce an iterable object.</p>

<pre class="brush: js example-bad">function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
    console.log(x);
</pre>

<p>When they are not called, the {{jsxref("Function")}} object corresponding to the
    generator is callable, but not iterable. Calling a generator produces an iterable
    object which will iterate over the values yielded during the execution of the
    generator.</p>

<pre class="brush: js example-good">function* generate(a, b) {
    yield a;
    yield b;
}

for (let x of generate(1,2))
    console.log(x);
</pre>

<h3 id="Iterating_over_a_custom_iterable">Iterating over a custom iterable</h3>

<p>Custom iterables can be created by implementing the
    {{jsxref("Symbol.iterator")}} method. You must be certain that your iterator method
    returns an object which is an iterator, which is to say it must have a next method.
</p>

<pre class="brush: js example-bad">const myEmptyIterable = {
    [Symbol.iterator]() {
        return [] // [] is iterable, but it is not an iterator -- it has no next method.
    }
}

Array.from(myEmptyIterable);  // TypeError: myEmptyIterable is not iterable
</pre>

<p>Here is a correct implementation:</p>

<pre class="brush: js example-good">const myEmptyIterable = {
    [Symbol.iterator]() {
        return [][Symbol.iterator]()
    }
}

Array.from(myEmptyIterable);  // []
</pre>

<h2 id="See_also">See also</h2>

<ul>
    <li><a
            href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">iterable
            protocol</a></li>
    <li>{{jsxref("Object.keys")}}</li>
    <li>{{jsxref("Object.entries")}}</li>
    <li>{{jsxref("Map")}}</li>
    <li><a
            href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators">generators</a>
    </li>
    <li><a
            href="/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement">for…of</a>
    </li>
</ul>
