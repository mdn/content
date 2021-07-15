---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "<em>x</em> is (not) <em>y</em>" occurs when there was an
  unexpected type. Oftentimes, unexpected {{jsxref("undefined")}} or {{jsxref("null")}}
  values.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: "x" is (not) "y" (Firefox)

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There was an unexpected type. This occurs oftentimes with {{jsxref("undefined")}} or
  {{jsxref("null")}} values.</p>

<p>Also, certain methods, such as {{jsxref("Object.create()")}} or
  {{jsxref("Symbol.keyFor()")}}, require a specific type, that must be provided.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// Certain methods might require a specific type
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = 'bar'
Object.create(foo); // TypeError: "foo" is not an object or null
</pre>

<h3 id="Fixing_the_issue">Fixing the issue</h3>

<p>To fix null pointer to <code>undefined</code> values, you can use the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> operator, for
  example.</p>

<pre class="brush: js">if (foo !== undefined) {
  // Now we know that foo is defined, we are good to go.
}

if (typeof foo !== 'undefined') {
  // The same good idea, but don't use this implementation - it can bring problems
  // because of the confusion between truly undefined and undeclared variables.
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("undefined")}}</li>
  <li>{{jsxref("null")}}</li>
</ul>
