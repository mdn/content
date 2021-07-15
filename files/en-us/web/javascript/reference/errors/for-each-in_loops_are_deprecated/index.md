---
title: 'Warning: JavaScript 1.6''s for-each-in loops are deprecated'
slug: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
tags:
- Error
- JavaScript
- Warning
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "JavaScript 1.6's for-each-in loops are deprecated; consider
  using ES6 for-of instead" occurs when a {{jsxref("Statements/for_each...in", "for each
  (variable in obj)")}} statement is used.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead
</pre>

<h2 id="Error_type">Error type</h2>

<p>Warning</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>JavaScript 1.6's {{jsxref("Statements/for_each...in", "for each (variable in obj)")}}
  statement is deprecated, and will be removed in the near future.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Object_iteration">Object iteration</h3>

<p>{{jsxref("Statements/for_each...in", "for each...in")}} has been used to iterate over
  the specified object values.</p>

<h4 id="Deprecated_syntax">Deprecated syntax</h4>

<pre class="brush: js example-bad">var object = { a: 10, b: 20 };

for each (var x in object) {
  console.log(x);        // 10
                         // 20
}
</pre>

<h4 id="Alternative_standard_syntax">Alternative standard syntax</h4>

<p>You can now use the standard {{jsxref("Statements/for...in", "for...in")}} loop to
  iterate over specified object keys, and get each value inside the loop:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
</pre>

<p>Or, using {{jsxref("Statements/for...of", "for...of")}} (ES2015) and
  {{jsxref("Object.values")}} (ES2017), you can get an array of the specified object
  values and iterate over the array like this:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
</pre>

<h3 id="Array_iteration">Array iteration</h3>

<p>{{jsxref("Statements/for_each...in", "for each...in")}} has been used to iterate over
  specified array elements.</p>

<h4 id="Deprecated_syntax_2">Deprecated syntax</h4>

<pre class="brush: js example-bad">var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

<h4 id="Alternative_standard_syntax_2">Alternative standard syntax</h4>

<p>This is now possible with {{jsxref("Statements/for...of", "for...of")}} (ES2015) loops
  as well.</p>

<pre class="brush: js example-good">var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

<h3 id="Iterating_over_a_null-able_array">Iterating over a null-able array</h3>

<p>{{jsxref("Statements/for_each...in", "for each...in")}} does nothing if the specified
  value is <code>null</code> or <code>undefined</code>, but
  {{jsxref("Statements/for...of", "for...of")}} will throw an exception in these cases.
</p>

<h4 id="Deprecated_syntax_3">Deprecated syntax</h4>

<pre class="brush: js example-bad">function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
</pre>

<h4 id="Alternative_standard_syntax_3">Alternative standard syntax</h4>

<p>To rewrite {{jsxref("Statements/for_each...in", "for each...in")}} statements so that
  values can be <code>null</code> or <code>undefined</code> with
  {{jsxref("Statements/for...of", "for...of")}} as well, you need to guard around
  {{jsxref("Statements/for...of", "for...of")}}.</p>

<pre class="brush: js example-good">function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
</pre>

<h3 id="Iterating_over_an_objects_key-value_pair">Iterating over an object's key-value
  pair</h3>

<h4 id="Deprecated_syntax_4">Deprecated syntax</h4>

<p>There's a deprecated idiom to iterate over the specified object's key-value pairs using
  {{jsxref("Statements/for_each...in", "for each...in")}} and the deprecated
  {{jsxref("Iterator")}} object.</p>

<pre class="brush: js example-bad">var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<h4 id="Alternative_standard_syntax_4">Alternative standard syntax</h4>

<p>You can now use the standard {{jsxref("Statements/for...in", "for...in")}} loop to
  iterate over specified object keys, and get each value inside the loop:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<p>Or, using {{jsxref("Statements/for...of", "for...of")}} (ES2015) and
  {{jsxref("Object.entries")}} (ES2017), you can get an array of the specified object
  values and iterate over the array like this:</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/for...of", "for...of")}}</li>
  <li>{{jsxref("Object.values")}}</li>
  <li>{{jsxref("Object.entries")}}</li>
</ul>
