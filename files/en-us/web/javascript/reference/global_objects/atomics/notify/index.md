---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
tags:
- Atomics
- JavaScript
- Method
- Shared Memory
browser-compat: javascript.builtins.Atomics.notify
---
<div>{{JSRef}}</div>

<p>The static <code><strong>Atomics</strong></code><strong><code>.notify()</code></strong>
  method notifies up some agents that are sleeping in the wait queue.</p>

<div class="note">
  <p><strong>Note:</strong> This operation works with a shared {{jsxref("Int32Array")}}
    only.<br>
    It will return <code>0</code> on non-shared <code>ArrayBuffer</code> objects.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Atomics.notify(typedArray, index, count)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>typedArray</code></dt>
  <dd>A shared {{jsxref("Int32Array")}}.</dd>
  <dt><code>index</code></dt>
  <dd>The position in the <code>typedArray</code> to wake up on.</dd>
  <dt><code>count</code> {{optional_inline}}</dt>
  <dd>The number of sleeping agents to notify. Defaults to {{jsxref("Infinity",
    "+Infinity")}}.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<ul>
  <li>Returns the number of woken up agents.</li>
  <li>Returns <code>0</code>, if a non-shared {{jsxref("ArrayBuffer")}} object is used.
  </li>
</ul>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>Throws a {{jsxref("TypeError")}}, if <code>typedArray</code> is not a
    {{jsxref("Int32Array")}}.</li>
  <li>Throws a {{jsxref("RangeError")}}, if <code>index</code> is out of bounds in the
    <code>typedArray</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_notify">Using <code>notify</code></h3>

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
  <li>{{jsxref("Atomics.wait()")}}</li>
</ul>
