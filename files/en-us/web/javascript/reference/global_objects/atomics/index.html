---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
tags:
  - JavaScript
  - Namespace
  - Shared Memory
  - Specifications
browser-compat: javascript.builtins.Atomics
---
<div>{{JSRef}}</div>

<p>The <strong><code>Atomics</code></strong> object provides atomic operations as static methods. They are used with {{jsxref("SharedArrayBuffer")}} and {{jsxref("ArrayBuffer")}} objects.</p>

<h2 id="Description">Description</h2>

<p>The Atomic operations are installed on an <code>Atomics</code> module. Unlike the other global objects, <code>Atomics</code> is not a constructor. You cannot use it with a <a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a> or invoke the <code>Atomics</code> object as a function. All properties and methods of <code>Atomics</code> are static (as is the case with the {{jsxref("Math")}} object, for example).</p>

<h3 id="Atomic_operations">Atomic operations</h3>

<p>When memory is shared, multiple threads can read and write the same data in memory. Atomic operations make sure that predictable values are written and read, that operations are finished before the next operation starts and that operations are not interrupted.</p>

<h3 id="Wait_and_notify">Wait and notify</h3>

<p>The <code>wait()</code> and <code>notify()</code> methods are modeled on Linux futexes ("fast user-space mutex") and provide ways for waiting until a certain condition becomes true and are typically used as blocking constructs.</p>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("Atomics.add()")}}</dt>
 <dd>Adds the provided value to the existing value at the specified index of the array. Returns the old value at that index.</dd>
 <dt>{{jsxref("Atomics.and()")}}</dt>
 <dd>Computes a bitwise AND on the value at the specified index of the array with the provided value. Returns the old value at that index.</dd>
 <dt>{{jsxref("Atomics.compareExchange()")}}</dt>
 <dd>Stores a value at the specified index of the array, if it equals a value. Returns the old value.</dd>
 <dt>{{jsxref("Atomics.exchange()")}}</dt>
 <dd>Stores a value at the specified index of the array. Returns the old value.</dd>
 <dt>{{jsxref("Atomics.isLockFree()", "Atomics.isLockFree(size)")}}</dt>
 <dd>An optimization primitive that can be used to determine whether to use locks or atomic operations. Returns <code>true</code> if an atomic operation on arrays of the given element size will be implemented using a hardware atomic operation (as opposed to a lock). Experts only.</dd>
 <dt>{{jsxref("Atomics.load()")}}</dt>
 <dd>Returns the value at the specified index of the array.</dd>
 <dt>{{jsxref("Atomics.notify()")}}</dt>
 <dd>Notifies agents that are waiting on the specified index of the array. Returns the number of agents that were notified.</dd>
 <dt>{{jsxref("Atomics.or()")}}</dt>
 <dd>Computes a bitwise OR on the value at the specified index of the array with the provided value. Returns the old value at that index.</dd>
 <dt>{{jsxref("Atomics.store()")}}</dt>
 <dd>Stores a value at the specified index of the array. Returns the value.</dd>
 <dt>{{jsxref("Atomics.sub()")}}</dt>
 <dd>Subtracts a value at the specified index of the array. Returns the old value at that index.</dd>
 <dt>{{jsxref("Atomics.wait()")}}</dt>
 <dd>Verifies that the specified index of the array still contains a value and sleeps awaiting or times out. Returns either "<code>ok</code>", "<code>not-equal</code>", or "<code>timed-out</code>". If waiting is not allowed in the calling agent then it throws an {{JSxref("Error")}} exception. (Most browsers will not allow <code>wait()</code> on the browser's main thread.)</dd>
 <dt>{{jsxref("Atomics.xor()")}}</dt>
 <dd>Computes a bitwise XOR on the value at the specified index of the array with the provided value. Returns the old value at that index.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Atomics">Using Atomics</h3>

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

ta[0]; // 0
ta[0] = 5; // 5

Atomics.add(ta, 0, 12); // 5
Atomics.load(ta, 0); // 17

Atomics.and(ta, 0, 1); // 17
Atomics.load(ta, 0); // 1

Atomics.compareExchange(ta, 0, 5, 12); // 1
Atomics.load(ta, 0); // 1

Atomics.exchange(ta, 0, 12); // 1
Atomics.load(ta, 0); // 12

Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true

Atomics.or(ta, 0, 1); // 12
Atomics.load(ta, 0);  // 13

Atomics.store(ta, 0, 12); // 12

Atomics.sub(ta, 0, 2); // 12
Atomics.load(ta, 0); // 10

Atomics.xor(ta, 0, 1); // 10
Atomics.load(ta, 0); // 11
</pre>

<h3 id="Waiting_and_notifiying">Waiting and notifiying</h3>

<p>Given a shared <code>Int32Array</code>:</p>

<pre class="brush: js">const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
</pre>

<p>A reading thread is sleeping and waiting on location 0 which is expected to be 0. As long as that is true, it will not go on. However, once the writing thread has stored a new value, it will be notified by the writing thread and return the new value (123).</p>

<pre class="brush: js">Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123</pre>

<p>A writing thread stores a new value and notifies the waiting thread once it has written:</p>

<pre class="brush: js">console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li><a href="https://github.com/lars-t-hansen/parlib-simple">parlib-simple </a>– a simple library providing synchronization and work distribution abstractions.</li>
 <li><a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md">Shared Memory – a brief tutorial</a></li>
 <li><a href="https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/">A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks</a></li>
</ul>
