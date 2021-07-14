---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "is not a constructor" occurs when there was an attempt to use
  an object or a variable as a constructor, but that object or variable is not a
  constructor.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Object doesn't support this action (Edge)
TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: Atomics is not a constructor
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There was an attempt to use an object or a variable as a constructor, but that object
  or variable is not a constructor. See <a
    href="/en-US/docs/Glossary/Constructor">constructor</a> or the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code>
    operator</a> for more information on what a constructor is.</p>

<p>There are many global objects, like {{jsxref("String")}} or {{jsxref("Array")}}, which
  are constructable using <code>new</code>. However, some global objects are not and their
  properties and methods are static. The following JavaScript standard built-in objects
  are not a constructor: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}},
  {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("Atomics")}}.</p>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">Generator
    functions</a> cannot be used as constructors either.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
</pre>

<h3 id="A_car_constructor">A car constructor</h3>

<p>Suppose you want to create an object type for cars. You want this type of object to be
  called <code>Car</code>, and you want it to have properties for make, model, and year.
  To do this, you would write the following function:</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>Now you can create an object called <code>mycar</code> as follows:</p>

<pre class="brush: js">var mycar = new Car('Eagle', 'Talon TSi', 1993);</pre>

<h3 id="In_Promises">In Promises</h3>

<p>When returning an immediately-resolved or immediately-rejected Promise, you do not need
  to create a <em>new Promise(...)</em> and act on it.</p>

<p>This is not legal (the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise">Promise
    constructor</a> is not being called correctly) and will throw a
  <code>TypeError: this is not a constructor</code> exception:</p>

<pre class="brush: js example-bad">return new Promise.resolve(true);
</pre>

<p>Instead, use the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve">Promise.resolve()</a> or
  <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject">Promise.reject()</a> <a
    href="https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods">static
    methods</a>:</p>

<pre class="brush: js">// This is legal, but unnecessarily long:
return new Promise((resolve, reject) =&gt; { resolve(true); })

// Instead, return the static method:
return Promise.resolve(true);
return Promise.reject(false);
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Glossary/Constructor">constructor</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code>
      operator</a></li>
</ul>
