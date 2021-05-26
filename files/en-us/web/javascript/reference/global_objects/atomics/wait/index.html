---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
tags:
- Atomics
- JavaScript
- Method
- Shared Memory
browser-compat: javascript.builtins.Atomics.wait
---
<div>{{JSRef}}</div>

<p>The static <code><strong>Atomics</strong></code><strong><code>.wait()</code></strong>
  method verifies that a given position in an {{jsxref("Int32Array")}} still contains a
  given value and if so sleeps, awaiting a wakeup or a timeout. It returns a string which
  is either "<code>ok</code>", "<code>not-equal</code>", or "<code>timed-out</code>".</p>

<div class="note">
  <p><strong>Note:</strong> This operation only works with a shared
    {{jsxref("Int32Array")}} and may not be allowed on the main thread.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>typedArray</var></code></dt>
  <dd>A shared {{jsxref("Int32Array")}}.</dd>
  <dt><code><var>index</var></code></dt>
  <dd>The position in the <code><var>typedArray</var></code> to wait on.</dd>
  <dt><code><var>value</var></code></dt>
  <dd>The expected value to test.</dd>
  <dt><code><var>timeout</var></code> {{optional_inline}}</dt>
  <dd>Time to wait in milliseconds. {{jsxref("Infinity")}}, if no time is provided.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string which is either "<code>ok</code>", "<code>not-equal</code>", or
  "<code>timed-out</code>".</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>Throws a {{jsxref("TypeError")}}, if <code><var>typedArray</var></code> is not a
    shared {{jsxref("Int32Array")}}.</li>
  <li>Throws a {{jsxref("RangeError")}}, if <code><var>index</var></code> is out of bounds
    in the <code><var>typedArray</var></code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_wait">Using wait()</h3>

<p>Given a shared <code>Int32Array</code>:</p>

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
</pre>

<p>A reading thread is sleeping and waiting on location 0 which is expected to be 0. As
  long as that is true, it will not go on. However, once the writing thread has stored a
  new value, it will be notified by the writing thread and return the new value (123).</p>

<pre class="brush: js">Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123</pre>

<p>A writing thread stores a new value and notifies the waiting thread once it has
  written:</p>

<pre class="brush: js">console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Atomics")}}</li>
  <li>{{jsxref("Atomics.notify()")}}</li>
</ul>
