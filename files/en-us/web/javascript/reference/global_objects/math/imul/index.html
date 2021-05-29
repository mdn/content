---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
tags:
- JavaScript
- Math
- Method
- Reference
- imul
- Polyfill
browser-compat: javascript.builtins.Math.imul
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.imul()</code></strong> function returns the result of the C-like
  32-bit multiplication of the two parameters.</p>

<div>{{EmbedInteractiveExample("pages/js/math-imul.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.imul(a, b)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>a</var></code></dt>
  <dd>First number.</dd>
  <dt><code><var>b</var></code></dt>
  <dd>Second number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The result of the C-like 32-bit multiplication of the given arguments.</p>

<h2 id="Description">Description</h2>

<p><code>Math.imul()</code> allows for 32-bit integer multiplication with C-like
  semantics. This feature is useful for projects like <a
    href="https://en.wikipedia.org/wiki/Emscripten">Emscripten</a>.</p>

<p>Because <code>imul()</code> is a static method of <code>Math</code>, you always use it
  as <code>Math.imul()</code>, rather than as a method of a <code>Math</code> object you
  created (<code>Math</code> is not a constructor).</p>

<p>If you use normal JavaScript floating point numbers in imul, you will experience a
  degrade in performance. This is because of the costly conversion from a floating point
  to an integer for multiplication, and then converting the multiplied integer back into a
  floating point. The reason imul exists is because it is faster in only one (so far)
  circumstance: AsmJS. AsmJS allows for JIST-optimizers to more easily implement internal
  integers in JavaScript. Multiplying two numbers stored internally as integers (which is
  only possible with AsmJS) with imul is the only potential circumstance where Math.imul
  may prove performant in current browsers.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.imul">Using Math.imul()</h3>

<pre class="brush: js">Math.imul(2, 4);          // 8
Math.imul(-1, 8);         // -8
Math.imul(-2, -2);        // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>This can be emulated with the following function:</p>

<pre class="brush: js">if (!Math.imul) Math.imul = function(a, b) {
  var aHi = (a &gt;&gt;&gt; 16) &amp; 0xffff;
  var aLo = a &amp; 0xffff;
  var bHi = (b &gt;&gt;&gt; 16) &amp; 0xffff;
  var bLo = b &amp; 0xffff;
  // the shift by 0 fixes the sign on the high part
  // the final |0 converts the unsigned value into a signed value
  return ((aLo * bLo) + (((aHi * bLo + aLo * bHi) &lt;&lt; 16) &gt;&gt;&gt; 0) | 0);
};</pre>

<p>However, the following function is more performant because it is likely that browsers
  in which this polyfill would be used do not optimize with an internal integer type in
  JavaScript, instead using floating points for all numbers.</p>

<pre class="brush: js">if (!Math.imul) Math.imul = function(opA, opB) {
  opB |= 0; // ensure that opB is an integer. opA will automatically be coerced.
  // floating points give us 53 bits of precision to work with plus 1 sign bit
  // automatically handled for our convienence:
  // 1. 0x003fffff /*opA &amp; 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
  //    0x1fffff7fc00001 &lt; Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
  var result = (opA &amp; 0x003fffff) * opB;
  // 2. We can remove an integer coersion from the statement above because:
  //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
  //    0x1fffffff800001 &lt; Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
  if (opA &amp; 0xffc00000 /*!== 0*/) result += (opA &amp; 0xffc00000) * opB |0;
  return result |0;
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Math.imul</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
  <li><a href="https://en.wikipedia.org/wiki/Emscripten">Emscripten</a></li>
</ul>
