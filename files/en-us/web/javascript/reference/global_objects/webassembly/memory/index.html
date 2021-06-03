---
title: WebAssembly.Memory
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory
tags:
  - Class
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Memory
---
<div>{{JSRef}}</div>

<p>The <code><strong>WebAssembly.Memory</strong></code> object is a resizable {{jsxref("ArrayBuffer")}} or <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer">SharedArrayBuffer</a></code> that holds the raw bytes of memory accessed by a WebAssembly <code>Instance</code>.</p>

<p>A memory created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory"><code>WebAssembly.Memory()</code></a></dt>
 <dd>Creates a new <code>Memory</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer"><code>Memory.prototype.buffer</code></a></dt>
 <dd>An accessor property that returns the buffer contained in the memory.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow"><code>Memory.prototype.grow()</code></a></dt>
 <dd>Increases the size of the memory instance by a specified number of WebAssembly pages (each one is 64KB in size).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_Memory_object">Creating a new Memory object</h3>

<p>There are two ways to get a <code>WebAssembly.Memory</code> object. The first way is to construct it from JavaScript. The following snippet creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). Its <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer">buffer</a></code> property will return an <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a></code>.</p>

<pre class="brush: js">var memory = new WebAssembly.Memory({initial:10, maximum:100});</pre>

<p>The following example (see <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html">memory.html</a> on GitHub, and <a href="https://mdn.github.io/webassembly-examples/js-api-examples/memory.html">view it live also</a>) fetches and instantiates the loaded memory.wasm byte code using the {{jsxref("WebAssembly.instantiateStreaming()")}} method, while importing the memory created in the line above. It then stores some values in that memory, then exports a function and uses it to sum some values.</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
.then(obj =&gt; {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i &lt; 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});</pre>

<p>The second way to get a WebAssembly.Memory object is to have it exported by a WebAssembly module. This memory can be accessed in the <code>exports</code> property of the Web Assembly instance (after the memory is exported within the Web Assembly module). The following snippet imports a memory exported from WebAssembly with the name <code>memory</code>, and then prints out the first element of the memory, interpreted as an Uint32Array.</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('memory.wasm'))
.then(obj =&gt; {
   var i32 = new Uint32Array(obj.instance.exports.memory.buffer);
   console.log(i32[0]);
 });</pre>

<h3 id="Creating_a_shared_memory">Creating a shared memory</h3>

<p>By default, WebAssembly memories are unshared. You can create a <a href="/en-US/docs/WebAssembly/Understanding_the_text_format#Shared_memories">shared memory</a> by passing <code>shared: true</code> in the constructor's initialization object:</p>

<pre class="brush: js">let memory = new WebAssembly.Memory({initial:10, maximum:100, shared: true});</pre>

<p>This memory's <code>buffer</code> property will return a <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer">SharedArrayBuffer</a></code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/WebAssembly">WebAssembly</a> overview page</li>
 <li><a href="/en-US/docs/WebAssembly/Concepts">WebAssembly concepts</a></li>
 <li><a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly JavaScript API</a></li>
</ul>
