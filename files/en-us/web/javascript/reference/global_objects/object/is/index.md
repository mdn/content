---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
tags:
  - Comparison
  - Condition
  - Conditional
  - ECMAScript 2015
  - Equality
  - JavaScript
  - Method
  - Object
  - Polyfill
browser-compat: javascript.builtins.Object.is
---
<div>{{JSRef}}</div>

<p>The <strong><code>Object.is()</code></strong> method determines whether two values are
  <a href="/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness">the same
    value</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">Object.is(value1, value2);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>value1</var></code></dt>
  <dd>The first value to compare.</dd>
  <dt><code><var>value2</var></code></dt>
  <dd>The second value to compare.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Boolean")}} indicating whether or not the two arguments are the same value.
</p>

<h2 id="Description">Description</h2>

<p><code>Object.is()</code> determines whether two values are <a
    href="/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness">the same
    value</a>. Two values are the same if one of the following holds:</p>

<ul>
  <li>both {{jsxref("undefined")}}</li>
  <li>both {{jsxref("null")}}</li>
  <li>both <code>true</code> or both <code>false</code></li>
  <li>both strings of the same length with the same characters in the same order</li>
  <li>both the same object (meaning both values reference the same object in memory)</li>
  <li>both numbers and
    <ul>
      <li>both <code>+0</code></li>
      <li>both <code>-0</code></li>
      <li>both {{jsxref("NaN")}}</li>
      <li>or both non-zero and both not {{jsxref("NaN")}} and both have the same value
      </li>
    </ul>
  </li>
</ul>

<p>This is <em>not</em> the same as being equal according to the
  {{jsxref("Operators", "==", "#Equality")}} operator. The
  <code>==</code> operator applies various coercions to both sides (if they are not the
  same Type) before testing for equality (resulting in such behavior as
  <code>"" == false</code> being <code>true</code>), but <code>Object.is</code> doesn't
  coerce either value.</p>

<p>This is also <em>not</em> the same as being equal according to the
  {{jsxref("Operators", "===", "#Identity")}} operator. The
  only difference between <code>Object.is()</code> and <code>===</code> is in
  their treatment of signed zeroes and NaNs. For example, the <code>===</code>
  operator (and the <code>==</code> operator) treats the number values <code>-0</code>
  and <code>+0</code> as equal. Also, the <code>===</code> operator treats
  {{jsxref("Number.NaN")}} and {{jsxref("NaN")}} as not equal.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.is">Using Object.is</h3>

<pre class="brush: js">// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        // This checks for cases 1 and 2 above.
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        // This checks for case 3.
        return x !== x &amp;&amp; y !== y;
      }
    }
  });
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Object.is</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness">Equality
      comparisons and sameness</a> — a comparison of all three built-in sameness
    facilities</li>
</ul>
