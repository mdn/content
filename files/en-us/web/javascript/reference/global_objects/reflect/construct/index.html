---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- Reflect
- Polyfill
browser-compat: javascript.builtins.Reflect.construct
---
<div>{{JSRef}}</div>

<p>The static <code><strong>Reflect.construct()</strong></code> method acts like the
    {{jsxref("Operators/new", "new")}} operator, but as a function. It is equivalent to
    calling <code>new target(...args)</code>. It gives also the added option to specify a
    different prototype.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-construct.html", "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
Reflect.construct(target, argumentsList)
Reflect.construct(target, argumentsList, newTarget)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
    <dt><code><var>target</var></code></dt>
    <dd>The target function to call.</dd>
    <dt><code><var>argumentsList</var></code></dt>
    <dd>An array-like object specifying the arguments with which
        <code><var>target</var></code> should be called.</dd>
    <dt><code><var>newTarget</var></code> {{optional_inline}}</dt>
    <dd>The constructor whose prototype should be used. See also the <a
            href="/en-US/docs/Web/JavaScript/Reference/Operators/new.target"><code>new.target</code></a>
        operator. If <code><var>newTarget</var></code> is not present, its value defaults
        to <code><var>target</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new instance of <code><var>target</var></code> (or <code><var>newTarget</var></code>,
    if present), initialized by <code><var>target</var></code> as a constructor with the
    given <code><var>argumentsList</var></code>.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>A {{jsxref("TypeError")}}, if <code><var>target</var></code> or
    <code><var>newTarget</var></code> are not constructors.</p>

<h2 id="Description">Description</h2>

<p><code>Reflect.construct()</code> allows you to invoke a constructor with a variable
    number of arguments. (This would also be possible by using the <a
        href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread
        syntax</a> combined with the <a
        href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code>
        operator</a>.)</p>

<pre class="brush: js">let obj = new Foo(...<var>args</var>)
let obj = Reflect.construct(Foo, <var>args</var>)
</pre>

<h3 id="Reflect.construct_vs_Object.create"><code>Reflect.construct()</code> vs
    <code>Object.create()</code></h3>

<p>Prior to the introduction of <code>Reflect</code>, objects could be constructed using
    an arbitrary combination of constructor and prototype by using
    {{jsxref("Object.create()")}}.</p>

<pre>function OneClass() {
    this.name = 'one'
}

function OtherClass() {
    this.name = 'other'
}

// Calling this:
let obj1 = Reflect.construct(OneClass, <var>args</var>, OtherClass)

// ...has the same result as this:
let obj2 = Object.create(OtherClass.prototype)
OneClass.apply(obj2, <var>args</var>)

console.log(obj1.name)  // 'one'
console.log(obj2.name)  // 'one'

console.log(obj1 instanceof OneClass)  // false
console.log(obj2 instanceof OneClass)  // false

console.log(obj1 instanceof OtherClass)  // true
console.log(obj2 instanceof OtherClass)  // true

//Another example to demonstrate below:

function func1(a, b, c, d) {
  console.log(arguments[3]);
}

function func2(d, e, f, g) {
  console.log(arguments[3]);
}

let obj1 = Reflect.construct(func1, ['I', 'Love', 'my', 'India'])
obj1</pre>

<p>However, while the end result is the same, there is one important difference in the
    process. When using <code>Object.create()</code> and
    {{jsxref("Function.prototype.apply()")}}, the <code>new.target</code> operator will
    point to <code>undefined</code> within the function used as the constructor, since the
    <code>new</code> keyword is not being used to create the object.</p>

<p>When invoking <code>Reflect.construct()</code>, on the other hand, the
    <code>new.target</code> operator will point to the <code><var>newTarget</var></code>
    parameter if supplied, or <code><var>target</var></code> if not.</p>

<pre class="brush: js">function OneClass() {
    console.log('OneClass')
    console.log(new.target)
}
function OtherClass() {
    console.log('OtherClass')
    console.log(new.target)
}

let obj1 = Reflect.construct(OneClass, <var>args</var>)
// Output:
//     OneClass
//     function OneClass { ... }

let obj2 = Reflect.construct(OneClass, <var>args</var>, OtherClass)
// Output:
//     OneClass
//     function OtherClass { ... }

let obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, <var>args</var>)
// Output:
//     OneClass
//     undefined
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Reflect.construct">Using <code>Reflect.construct()</code></h3>

<pre class="brush: js">let d = Reflect.construct(Date, [1776, 6, 4])
d instanceof Date  // true
d.getFullYear()    // 1776
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>A polyfill of <code>Reflect.construct</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-reflect"><code>core-js</code></a></li>
    <li>{{jsxref("Reflect")}}</li>
    <li>{{jsxref("Operators/new", "new")}}</li>
    <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new.target">new.target</a></code>
    </li>
</ul>
