---
title: 'Array.prototype[@@iterator]()'
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
tags:
- Array
- Beginner
- ECMAScript 2015
- Iterator
- JavaScript
- Method
- Prototype
- Reference
- Polyfill
browser-compat: javascript.builtins.Array.@@iterator
---
<div>{{JSRef}}</div>

<p>The <code><strong>@@iterator</strong></code> method is part of <a
    href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">The
    iterable protocol</a>, that defines how to synchronously iterate over a sequence of
  values.</p>

<p>The initial value of the <code><strong>@@iterator</strong></code> property is the same
  function object as the initial value of the {{jsxref("Array.prototype.values()",
  "values()")}} property.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">[Symbol.iterator]()</pre>

<h3 id="Return_value">Return value</h3>

<p>The initial value given by the {{jsxref("Array.prototype.values()", "values()")}}
  <strong>iterator</strong>. By default, using <code>arr[Symbol.iterator]</code> will
  return the {{jsxref("Array.prototype.values()", "values()")}} function.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Iteration_using_for...of_loop">Iteration using for...of loop</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ul id="letterResult"&gt;
&lt;/ul&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const arr = ['a', 'b', 'c'];
const eArr = arr[Symbol.iterator]();
const letterResult = document.getElementById('letterResult');
// your browser must support for..of loop
// and let-scoped variables in for loops
// const and var could also be used
for (let letter of eArr) {
  const li = document.createElement('LI');
  li.textContent = letter;
  letterResult.appendChild(li);
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Iteration_using_for...of_loop', '', '', '',
  'Web/JavaScript/Reference/Global_Objects/Array/@@iterator')}}</p>

<h3 id="Alternative_iteration">Alternative iteration</h3>

<pre class="brush: js">var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e
</pre>

<h3 id="Use_Case_for_brace_notation">Use Case for brace notation</h3>

<p>The use case for this syntax over using the dot notation
  (<code>Array.prototype.values()</code>) is in a case where you don't know what object is
  going to be ahead of time. If you have a function that takes an iterator and then
  iterate over the value, but don't know if that Object is going to have a
  [Iterable].prototype.values method. This could be a built-in object like <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator">String</a>
  object or a custom object.</p>

<pre class="brush: js">function logIterable(it) {
 if (!(Symbol.iterator in Object.getPrototypeOf(it)
 /* or "Symbol.iterator in Object.__proto__"
    or "it[Symbol.iterator]" */)) {
   console.log(it, ' is not an iterable object...');
   return;
 }

 var iterator = it[Symbol.iterator]();
  // your browser must support for..of loop
  // and let-scoped variables in for loops
  // const and var could also be used
  for (let letter of iterator) {
      console.log(letter);
  }
}

// Array
logIterable(['a', 'b', 'c']);
// a
// b
// c

// string
logIterable('abc');
// a
// b
// c

logIterable(123);
// 123 " is not an iterable object..."</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Array.prototype[@@iterator]</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a></li>
  <li>{{jsxref("Array.prototype.keys()")}}</li>
  <li>{{jsxref("Array.prototype.entries()")}}</li>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
  <li>{{jsxref("Array.prototype.every()")}}</li>
  <li>{{jsxref("Array.prototype.some()")}}</li>
  <li>{{jsxref("Array.prototype.values()")}}</li>
</ul>
