---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
tags:
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.isNaN
---
<div>{{jsSidebar("Objects")}}</div>

<p>The <code><strong>isNaN()</strong></code> function determines whether a value is
  {{jsxref("NaN")}} or not. Because coercion inside the <code>isNaN</code>
  function can be <a href="#Confusing_special-case_behavior">surprising</a>, you may alternatively
  want to use {{jsxref("Number.isNaN()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">isNaN(value)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>value</code></dt>
  <dd>The value to be tested.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><strong><code>true</code></strong> if the given value is {{jsxref("NaN")}}; otherwise,
  <strong><code>false</code></strong>.</p>

<h2 id="Description">Description</h2>

<h3 id="The_necessity_of_an_isNaN_function">The necessity of an isNaN function</h3>

<p>Unlike all other possible values in JavaScript, it is not possible to use the equality
  operators (== and ===) to compare a value against {{jsxref("NaN")}} to determine whether
  the value <em>is</em> <code>NaN</code> or not, because both <code>NaN == NaN</code> and
  <code>NaN === NaN</code> evaluate to <code>false</code>. Hence, the necessity of an
  <code>isNaN</code> function.</p>

<h3 id="Origin_of_NaN_values">Origin of NaN values</h3>

<p><code>NaN</code> values are generated when arithmetic operations result in
  <em>undefined</em> or <em>unrepresentable</em> values. Such values do not necessarily
  represent overflow conditions. A <code>NaN</code> also results from attempted coercion
  to numeric values of non-numeric values for which no primitive numeric value is
  available.</p>

<p>For example, dividing zero by zero results in a <code>NaN</code> — but dividing other
  numbers by zero does not.</p>

<h3 id="Confusing_special-case_behavior">Confusing special-case behavior</h3>

<p>Since the very earliest versions of the <code>isNaN</code> function specification, its
  behavior for non-numeric arguments has been confusing. When the argument to the
  <code>isNaN</code> function is not of type <a
    href="https://es5.github.com/#x8.5">Number</a>, the value is first coerced to a
  Number. The resulting value is then tested to determine whether it is {{jsxref("NaN")}}.
  Thus for non-numbers that when coerced to numeric type result in a valid non-NaN numeric
  value (notably the empty string and boolean primitives, which when coerced give numeric
  values zero or one), the "false" returned value may be unexpected; the empty string, for
  example, is surely "not a number." The confusion stems from the fact that the term, "not
  a number", has a specific meaning for numbers represented as IEEE-754 floating-point
  values. The function should be interpreted as answering the question, "is this value,
  when coerced to a numeric value, an IEEE-754 'Not A Number' value?"</p>

<p>ECMAScript 2015 contains the {{jsxref("Number.isNaN()")}} function.
  <code>Number.isNaN(x)</code> is a reliable way to test whether <code>x</code> is
  <code>NaN</code> or not. Even with <code>Number.isNaN</code>, however, the meaning of
  <code>NaN</code> remains the precise numeric meaning and not, "not a number".
  Alternatively, in the absence of <code>Number.isNaN</code>, the expression
  <code>(x != x)</code> is a more reliable way to test whether variable <code>x</code> is
  <code>NaN</code> or not, as the result is not subject to the false positives that make
  <code>isNaN</code> unreliable.</p>

<p>A polyfill for <code>isNaN</code> would be (the polyfill leverages the unique
  never-equal-to-itself characteristic of <code>NaN</code>):</p>

<pre class="brush: js">const isNaN = function(value) {
    const n = Number(value);
    return n !== n;
};</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN('37');      // false: "37" is converted to the number 37 which is not NaN
isNaN('37.37');   // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5");    // true
isNaN('123ABC');  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN('');        // false: the empty string is converted to 0 which is not NaN
isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN('blabla');   // true: "blabla" is converted to a number.
                   // Parsing this as a number fails and returns NaN
</pre>

<h3 id="Useful_special-case_behavior">Useful special-case behavior</h3>

<p>There is a more usage oriented way to think of <code>isNaN()</code>: If
  <code>isNaN(x)</code> returns <code>false</code>, you can use <code>x</code> in an
  arithmetic expression not making the expression return <code>NaN</code>. If it returns
  <code>true</code>, <code>x</code> will make every arithmetic expression return
  <code>NaN</code>. This means that in JavaScript, <code>isNaN(x) == true</code> is
  equivalent to <code>x - 0</code> returning <code>NaN</code> (though in JavaScript
  <code>x - 0 == NaN</code> always returns false, so you can't test for it). Actually,
  <code>isNaN(x)</code>, <code>isNaN(x - 0)</code>, <code>isNaN(Number(x))</code>,
  <code>Number.isNaN(x - 0)</code>, and <code>Number.isNaN(Number(x))</code> always return
  the same and in JavaScript <code>isNaN(x)</code> is just the shortest possible form to
  express each of these terms.</p>

<p>You can use this, for example, to test whether an argument to a function is
  arithmetically processable (usable "like" a number), or if it's not and you have to
  provide a default value or something else. This way you can have a function that makes
  use of the full versatility JavaScript provides by implicitly converting values
  depending on context.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("NaN")}}</li>
  <li>{{jsxref("Number.isNaN()")}}</li>
</ul>
