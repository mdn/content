---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
tags:
- ECMAScript 2015
- JavaScript
- Math
- Method
- Reference
- Polyfill
browser-compat: javascript.builtins.Math.clz32
---
<div>{{JSRef}}</div>

<p>The <strong><code>Math.clz32()</code></strong> function returns the number of leading
  zero bits in the 32-bit binary representation of a number.</p>

<div>{{EmbedInteractiveExample("pages/js/math-clz32.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Math.clz32(<var>x</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>x</var></code></dt>
  <dd>A number.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The number of leading zero bits in the 32-bit binary representation of the given
  number.</p>

<h2 id="Description">Description</h2>

<p>"<code>clz32</code>" is short for <strong>CountLeadingZeroes32</strong>.</p>

<p>If <code><var>x</var></code> is not a number, then it will be converted to a number
  first, then converted to a 32-bit unsigned integer.</p>

<p>If the converted 32-bit unsigned integer is <code>0</code>, then return
  <code>32</code>, because all bits are <code>0</code>.</p>

<p>This function is particularly useful for systems that compile to JS, like <a
    href="/en-US/docs/Emscripten">Emscripten</a>.</p>

<h3 id="Count_Leading_Ones_and_beyond">Count Leading Ones and beyond</h3>

<p>At present, there is no <code>Math.clon</code> for "Count Leading Ones" (named "clon",
  not "clo", because "clo" and "clz" are too similar especially for non-English-speaking
  people). However, a <code>clon</code> function can easily be created by inversing the
  bits of a number and passing the result to <code>Math.clz32</code>. Doing this will work
  because the inverse of 1 is 0 and vice-versa. Thus, inversing the bits will inverse the
  measured quantity of 0's (from <code>Math.clz32</code>), thereby making
  <code>Math.clz32</code> count the number of ones instead of counting the number of
  zeros.</p>

<p>Consider the following 32-bit word:</p>

<pre class="brush: js">var a = 32776;   // 00000000000000001000000000001000 (16 leading zeros)
Math.clz32(a);   // 16

var b = ~32776;  // 11111111111111110111111111110111 (32776 inversed, 0 leading zeros)
Math.clz32(b);   // 0 (this is equal to how many leading one's there are in a)</pre>

<p>Using this logic, a <code>clon</code> function can be created as follows:</p>

<pre class="brush: js">var clz = Math.clz32;
function clon(integer){
    return clz(~integer);
}
</pre>

<p>Further, this technique could be extended to create jumpless "Count Trailing Zeros" and
  "Count Trailing Ones" functions as seen below. The <code>ctrz</code> function below
  fills in all the high bits with the lowest filled bit, then negates the bits to erase
  all higher set bits so that clz can then be used.</p>

<pre class="brush: js">var clz = Math.clz32;
function ctrz(integer){ // count trailing zeros
    // 1. fill in all the higher bits after the first one
    integer |= integer &lt;&lt; 16;
    integer |= integer &lt;&lt; 8;
    integer |= integer &lt;&lt; 4;
    integer |= integer &lt;&lt; 2;
    integer |= integer &lt;&lt; 1;
    // 2. Now, inversing the bits reveals the lowest bits
    return 32 - clz(~integer) |0; // `|0` ensures integer coercion
}
function ctron(integer){ // count trailing ones
    // No shift-filling-in-with-ones operator is available in
    // JavaScript, so the below code is the fastest
    return ctrz(~integer);
    /* Alternate implementation for demonstrational purposes:
       // 1. erase all the higher bits after the first zero
       integer &amp;= (integer &lt;&lt; 16) | 0xffff;
       integer &amp;= (integer &lt;&lt; 8 ) | 0x00ff;
       integer &amp;= (integer &lt;&lt; 4 ) | 0x000f;
       integer &amp;= (integer &lt;&lt; 2 ) | 0x0003;
       integer &amp;= (integer &lt;&lt; 1 ) | 0x0001;
       // 2. Now, inversing the bits reveals the lowest zeros
       return 32 - clon(~integer) |0;
    */
}
</pre>

<p>Make these helper functions into ASM.JS module; then, you have a true performance
  masterpiece. Situations like these are exactly what ASM.JS was designed for.</p>

<pre class="brush: js">var countTrailsMethods = (function(stdlib, foreign, heap) {
    "use asm";
    var clz = stdlib.Math.clz32;
    function ctrz(integer) { // count trailing zeros
        integer = integer | 0; // coerce to an integer
        // 1. fill in all the higher bits after the first one
        // ASMjs for some reason does not allow ^=,&amp;=, or |=
        integer = integer | (integer &lt;&lt; 16);
        integer = integer | (integer &lt;&lt; 8);
        integer = integer | (integer &lt;&lt; 4);
        integer = integer | (integer &lt;&lt; 2);
        integer = integer | (integer &lt;&lt; 1);
        // 2. Now, inversing the bits reveals the lowest bits
        return 32 - clz(~integer) |0;
    }
    function ctron(integer) { // count trailing ones
        integer = integer | 0; // coerce to an integer
        return ctrz(~integer) |0;
    }
    // unfourtunately, ASM.JS demands slow crummy objects:
    return {a: ctrz, b: ctron};
})(window, null, null);
var ctrz = countTrailsMethods.a;
var ctron = countTrailsMethods.b;</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Math.clz32">Using Math.clz32()</h3>

<pre class="brush: js">Math.clz32(1);           // 31
Math.clz32(1000);        // 22
Math.clz32();            // 32

var stuff = [NaN, Infinity, -Infinity, 0, -0, false, null, undefined, 'foo', {}, []];
stuff.every(n =&gt; Math.clz32(n) == 32);  // true

Math.clz32(true);        // 31
Math.clz32(3.5);         // 30</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>The following polyfill is the most efficient.</p>

<pre class="brush: js">if (!Math.clz32) Math.clz32 = (function(log, LN2){
  return function(x) {
    // Let n be ToUint32(x).
    // Let p be the number of leading zero bits in
    // the 32-bit binary representation of n.
    // Return p.
    var asUint = x &gt;&gt;&gt; 0;
    if (asUint === 0) {
      return 32;
    }
    return 31 - (log(asUint) / LN2 | 0) |0; // the "| 0" acts like math.floor
  };
})(Math.log, Math.LN2);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Math.clz32</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-math"><code>core-js</code></a></li>
  <li>{{jsxref("Math")}}</li>
  <li>{{jsxref("Math.imul")}}</li>
</ul>
