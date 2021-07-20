---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
tags:
- Error
- Errors
- JavaScript
- ReferenceError
- Strict Mode
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "reference to undefined property" occurs when a script attempted
  to access an object property which doesn't exist.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">ReferenceError: reference to undefined property "x" (Firefox)
</pre>

<h2 id="Error_type">Error type</h2>

<p>(Firefox only) {{jsxref("ReferenceError")}} warning which is reported only if
  <code>javascript.options.strict</code> preference is set to <code>true</code>.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The script attempted to access an object property which doesn't exist. There are two
  ways to access properties; see the {{jsxref("Operators/Property_Accessors", "property
  accessors", 0, 1)}} reference page to learn more about them.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<p>In this case, the property <code>bar</code> is an undefined property, so a
  <code>ReferenceError</code> will occur.</p>

<pre class="brush: js example-bad">var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
</pre>

<h3 id="Valid_cases">Valid cases</h3>

<p>To avoid the error, you need to either add a definition for <code>bar</code> to the
  object or check for the existence of the <code>bar</code> property before trying to
  access it; ways to do that include using the {{jsxref("Operators/in", "in")}} operator,
  or the {{jsxref("Object.prototype.hasOwnProperty()")}} method, like this:</p>

<pre class="brush: js example-good">var foo = {};

// Define the bar property

foo.bar = 'moon';
console.log(foo.bar); // "moon"

// Test to be sure bar exists before accessing it

if (foo.hasOwnProperty('bar')) {
  console.log(foo.bar);
}</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Operators/Property_Accessors", "property accessors", 0, 1)}}</li>
</ul>
