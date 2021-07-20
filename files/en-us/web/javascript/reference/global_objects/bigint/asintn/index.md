---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
tags:
- BigInt
- JavaScript
- Method
- Reference
- asIntN
browser-compat: javascript.builtins.BigInt.asIntN
---
<div>{{JSRef}}</div>

<p>The <strong><code>BigInt.asIntN</code></strong> static method clamps a BigInt value to a signed integer value, and returns that value.</p>

<div>{{EmbedInteractiveExample("pages/js/bigint-asintn.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">BigInt.asIntN(<var>bits</var>, <var>bigint</var>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>bits</var></code></dt>
  <dd>The amount of bits available for the integer size.</dd>
  <dt><code><var>bigint</var></code></dt>
  <dd>The BigInt value to clamp to fit into the supplied bits.</dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>The value of <code><var>bigint</var></code> modulo
  2^<code><var>bits</var></code>, as a signed integer.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Staying_in_64-bit_ranges">Staying in 64-bit ranges</h3>

<p>The <code>BigInt.asIntN()</code> method can be useful to stay in the range of 64-bit
  arithmetic.</p>

<pre class="brush: js">const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775808n
// negative because of overflow
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{JSxRef("BigInt")}}</li>
  <li>{{JSxRef("BigInt.asUintN()")}}</li>
</ul>
