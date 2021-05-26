---
title: WebAssembly.Module() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module
tags:
- Constructor
- JavaScript
- Module
- Reference
- WebAssembly
browser-compat: javascript.builtins.WebAssembly.Module.Module
---
<div>{{JSRef}}</div>

<p>A <strong><code>WebAssembly.Module()</code></strong> constructor creates a new Module
  object containing stateless WebAssembly code that has already been compiled by the
  browser and can be efficiently <a href="/en-US/docs/Web/API/Worker/postMessage">shared
    with Workers</a>, and instantiated multiple times.</p>

<p>The <code>WebAssembly.Module()</code> constructor function can be called to
  synchronously compile given WebAssembly binary code. However, the primary way to get a
  <code>Module</code> is through an asynchronous compilation function like
  {{jsxref("WebAssembly.compile()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<div class="warning">
  <p><strong>Warning:</strong> Since compilation for large modules can be expensive,
    developers should only use the <code>Module()</code> constructor when synchronous
    compilation is absolutely required; the asynchronous
    {{jsxref("WebAssembly.compileStreaming()")}} method should be used at all other times.
  </p>
</div>

<pre class="brush: js">new WebAssembly.Module(bufferSource)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>bufferSource</em></dt>
  <dd>A <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a> or <a
      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a>
    containing the binary code of the .wasm module you want to compile.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Synchronously_compiling_a_WebAssembly_module">Synchronously compiling a
  WebAssembly module</h3>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

function createWasmModule(bytes) {
  return new WebAssembly.Module(bytes);
}

fetch('simple.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt; {
  let mod = createWasmModule(bytes);
  WebAssembly.instantiate(mod, importObject)
  .then(result =&gt;
     result.exports.exported_func()
  );
})</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/WebAssembly">WebAssembly</a> overview page</li>
  <li><a href="/en-US/docs/WebAssembly/Concepts">WebAssembly concepts</a></li>
  <li><a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly
      JavaScript API</a></li>
</ul>
