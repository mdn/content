---
title: WebAssembly.compileStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
tags:
- API
- JavaScript
- Method
- Object
- Reference
- WebAssembly
- compile
- compileStreaming
- streaming
browser-compat: javascript.builtins.WebAssembly.compileStreaming
---
<div>{{JSRef}}</div>

<p>The <strong><code>WebAssembly.compileStreaming()</code></strong> function compiles a
  {{jsxref("WebAssembly.Module")}} directly from a streamed underlying source.  This
  function is useful if it is necessary to a compile a module before it can be
  instantiated (otherwise, the {{jsxref("WebAssembly.instantiateStreaming()")}} function
  should be used).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">WebAssembly.compileStreaming(source)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>source</em></dt>
  <dd>A <a href="/en-US/docs/Web/API/Response"
      title="The Response interface of the Fetch API represents the response to a request."><code>Response</code></a>
    object or a promise that will fulfill with one, representing the underlying source of
    a .wasm module you want to stream and compile.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code>Promise</code> that resolves to a {{jsxref("WebAssembly.Module")}} object
  representing the compiled module.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>If <code>bufferSource</code> is not a <a
      href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a>, a
    {{jsxref("TypeError")}} is thrown.</li>
  <li>If compilation fails, the promise rejects with a
    {{jsxref("WebAssembly.CompileError")}}.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Compile_streaming">Compile streaming</h3>

<p>The following example (see our <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html">compile-streaming.html</a>
  demo on GitHub, and <a
    href="https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html">view
    it live</a> also) directly streams a .wasm module from an underlying source then
  compiles it to a {{jsxref("WebAssembly.Module")}} object. Because the
  <code>compileStreaming()</code>  function accepts a promise for a <a
    href="/en-US/docs/Web/API/Response"
    title="The Response interface of the Fetch API represents the response to a request."><code>Response</code></a>
  object, you can directly pass it a <a
    href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"
    title="The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available."><code>WindowOrWorkerGlobalScope.fetch()</code></a>
  call, and it will pass the response into the function when it fulfills.</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(module =&gt; WebAssembly.instantiate(module, importObject))
.then(instance =&gt; instance.exports.exported_func());</pre>

<p>The resulting module instance is then instantiated using
  {{jsxref("WebAssembly.instantiate()")}}, and the exported function invoked.</p>

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
