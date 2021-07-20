---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - Class
  - JavaScript
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
browser-compat: javascript.builtins.SharedArrayBuffer
---
<div>{{JSRef}}</div>

<p>The <strong><code>SharedArrayBuffer</code></strong> object is used to represent a generic, fixed-length raw binary data buffer, similar to the {{jsxref("ArrayBuffer")}} object, but in a way that they can be used to create views on shared memory. Unlike an <code>ArrayBuffer</code>, a <code>SharedArrayBuffer</code> cannot become detached.</p>

<h2 id="Description">Description</h2>

<h3 id="Allocating_and_sharing_memory">Allocating and sharing memory</h3>

<p>To share memory using {{jsxref("SharedArrayBuffer")}} objects from one agent in the cluster to another (an agent is either the web page’s main program or one of its web workers), <code><a href="/en-US/docs/Web/API/Worker/postMessage">postMessage</a></code> and <a href="/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured cloning</a> is used.</p>

<p>The structured clone algorithm accepts <code>SharedArrayBuffers</code> and <code>TypedArrays</code> mapped onto <code>SharedArrayBuffers</code>. In both cases, the <code>SharedArrayBuffer</code> object is transmitted to the receiver resulting in a new, private SharedArrayBuffer object in the receiving agent (just as for {{jsxref("ArrayBuffer")}}). However, the shared data block referenced by the two <code>SharedArrayBuffer</code> objects is the same data block, and a side effect to the block in one agent will eventually become visible in the other agent.</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
</pre>

<h3 id="Updating_and_synchronizing_shared_memory_with_atomic_operations">Updating and synchronizing shared memory with atomic operations</h3>

<p>Shared memory can be created and updated simultaneously in workers or the main thread. Depending on the system (the CPU, the OS, the Browser) it can take a while until the change is propagated to all contexts. To synchronize, {{jsxref("Atomics", "atomic", "", 1)}} operations are needed.</p>

<h3 id="APIs_which_use_SharedArrayBuffer_objects">APIs which use SharedArrayBuffer objects</h3>

<ul>
 <li><a href="/en-US/docs/Web/API/WebGLRenderingContext/bufferData" title="The WebGLRenderingContext.bufferData() method of the WebGL API initializes and creates the buffer object's data store."><code>WebGLRenderingContext.bufferData()</code></a></li>
 <li><a href="/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData" title="The WebGLRenderingContext.bufferSubData() method of the WebGL API updates a subset of a buffer object's data store."><code>WebGLRenderingContext.bufferSubData()</code></a></li>
 <li><a href="/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData" title="The WebGL2RenderingContext.getBufferSubData() method of the WebGL 2 API reads data from a buffer binding point and writes them to an ArrayBuffer or SharedArrayBuffer."><code>WebGL2RenderingContext.getBufferSubData()</code></a></li>
</ul>

<h3 id="Security_requirements">Security requirements</h3>

<p>Shared memory and high-resolution timers were effectively <a href="https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/">disabled at the start of 2018</a> in light of <a href="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)">Spectre</a>. In 2020, a new, secure approach has been standardized to re-enable shared memory. With a few security measures, <code><a href="/en-US/docs/Web/API/Window/postMessage">postMessage()</a></code> will no longer throw for <code>SharedArrayBuffer</code> objects and shared memory across threads will be available:</p>

<p>As a baseline requirement, your document needs to be in a <a href="/en-US/docs/Web/Security/Secure_Contexts">secure context</a>.</p>

<p>For top-level documents, two headers will need to be set to cross-origin isolate your site:</p>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"><code>Cross-Origin-Opener-Policy</code></a> with <code>same-origin</code> as value (protects your origin from attackers)</li>
 <li><a href="/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"><code>Cross-Origin-Embedder-Policy</code></a> with <code>require-corp</code> as value (protects victims from your origin)</li>
</ul>

<pre class="brush: plain">Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
</pre>

<p>To check if cross origin isolation has been successful, you can test against the <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated">crossOriginIsolated</a></code> property available to window and worker contexts:</p>

<pre class="brush: js">if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}</pre>

<p>See also <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes">Planned changes to shared memory</a> which is starting to roll out to browsers (Firefox 79, for example.)</p>

<h3 id="Always_use_the_new_operator_to_create_a_SharedArrayBuffer">Always use the new operator to create a SharedArrayBuffer</h3>

<p><code>SharedArrayBuffer</code> constructors are required to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a <code>SharedArrayBuffer</code> constructor as a function without <code>new</code> will throw a {{jsxref("TypeError")}}.</p>

<pre class="brush: js example-bad">var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var sab = new SharedArrayBuffer(1024);</pre>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer"><code>SharedArrayBuffer()</code></a></dt>
 <dd>Creates a new <code>SharedArrayBuffer</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("SharedArrayBuffer.prototype.byteLength")}}</dt>
 <dd>The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. <strong>Read only.</strong></dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("SharedArrayBuffer.slice", "SharedArrayBuffer.prototype.slice(begin, end)")}}</dt>
 <dd>Returns a new <code>SharedArrayBuffer</code> whose contents are a copy of this <code>SharedArrayBuffer</code>'s bytes from <code>begin</code>, inclusive, up to <code>end</code>, exclusive. If either <code>begin</code> or <code>end</code> is negative, it refers to an index from the end of the array, as opposed to from the beginning.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_SharedArrayBuffer">Creating a new SharedArrayBuffer</h3>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);</pre>

<h3 id="Slicing_the_SharedArrayBuffer">Slicing the SharedArrayBuffer</h3>

<pre class="brush: js">sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }</pre>

<h3 id="Using_it_in_a_WebGL_buffer">Using it in a WebGL buffer</h3>

<pre class="brush: js">const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li><a href="https://github.com/lars-t-hansen/parlib-simple">parlib-simple </a>– a simple library providing synchronization and work distribution abstractions.</li>
 <li><a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md">Shared Memory – a brief tutorial</a></li>
 <li>
  <p><a href="https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/">A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks</a></p>
 </li>
</ul>
