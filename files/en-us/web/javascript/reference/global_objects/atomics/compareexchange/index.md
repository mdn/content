---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
tags:
- Atomics
- JavaScript
- Method
- Shared Memory
browser-compat: javascript.builtins.Atomics.compareExchange
---
<div>{{JSRef}}</div>

<p>The static
  <code><strong>Atomics</strong></code><strong><code>.compareExchange()</code></strong>
  method exchanges a given replacement value at a given position in the array, if a given
  expected value equals the old value.  It returns the old value at that position whether
  it was equal to the expected value or not. This atomic operation guarantees that no
  other write happens until the modified value is written back.</p>

<div>{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Atomics.compareExchange(<var>typedArray</var>, <var>index</var>, <var>expectedValue</var>, <var>replacementValue</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>typedArray</var></code></dt>
  <dd>An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.</dd>
  <dt><code><var>index</var></code></dt>
  <dd>The position in the <code><var>typedArray</var></code> to exchange a
    <code><var>value</var></code>.</dd>
  <dt><code><var>expectedValue</var></code></dt>
  <dd>The value to check for equality.</dd>
  <dt><code><var>replacementValue</var></code></dt>
  <dd>The number to exchange.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The old value at the given position
  (<code><var>typedArray</var>[<var>index</var>]</code>).</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>Throws a {{jsxref("TypeError")}}, if <code><var>typedArray</var></code> is not one
    of the allowed integer types.</li>
  <li>Throws a {{jsxref("RangeError")}}, if <code><var>index</var></code> is out of bounds
    in the <code><var>typedArray</var></code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_compareExchange">Using compareExchange()</h3>

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Atomics")}}</li>
  <li>{{jsxref("Atomics.exchange()")}}</li>
</ul>
