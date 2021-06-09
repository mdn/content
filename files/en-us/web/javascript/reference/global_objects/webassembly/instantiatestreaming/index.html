---
title: WebAssembly.instantiateStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
tags:
- API
- JavaScript
- Method
- Object
- Reference
- WebAssembly
- instantiate
- instantiateStreaming
- streaming
browser-compat: javascript.builtins.WebAssembly.instantiateStreaming
---
<div>{{JSRef}}</div>

<p>The <strong><code>WebAssembly.instantiateStreaming()</code></strong> function compiles
  and instantiates a WebAssembly module directly from a streamed underlying source. This
  is the most efficient, optimized way to load wasm code.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">WebAssembly.instantiateStreaming(source, importObject)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>source</em></dt>
  <dd>A <a href="/en-US/docs/Web/API/Response"
      title="The Response interface of the Fetch API represents the response to a request."><code>Response</code></a>
    object or a promise that will fulfill with one, representing the underlying source of
    a .wasm module you want to stream, compile, and instantiate.</dd>
  <dt><em>importObject</em> {{optional_inline}}</dt>
  <dd>An object containing the values to be imported into the newly-created
    <code>Instance</code>, such as functions or {{jsxref("WebAssembly.Memory")}} objects.
    There must be one matching property for each declared import of the compiled module or
    else a
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError">WebAssembly.LinkError</a></code>
    is thrown.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code>Promise</code> that resolves to a <code>ResultObject</code> which contains two
  fields:</p>

<ul>
  <li><code>module</code>: A {{jsxref("WebAssembly.Module")}} object representing the
    compiled WebAssembly module. This <code>Module</code> can be instantiated again or
    shared via <a href="/en-US/docs/Web/API/Worker/postMessage">postMessage()</a>.</li>
  <li><code>instance</code>: A {{jsxref("WebAssembly.Instance")}} object that contains all
    the <a href="/en-US/docs/WebAssembly/Exported_functions">Exported WebAssembly
      functions</a>.</li>
</ul>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>If either of the parameters are not of the correct type or structure, a
    {{jsxref("TypeError")}} is thrown.</li>
  <li>If the operation fails, the promise rejects with a
    {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or
    {{jsxref("WebAssembly.RuntimeError")}}, depending on the cause of the failure.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Instantiating_streaming">Instantiating streaming</h3>

<p>The following example (see our <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html">instantiate-streaming.html</a>
  demo on GitHub, and <a
    href="https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html">view
    it live</a> also) directly streams a .wasm module from an underlying source then
  compiles and instantiates it, the promise fulfilling with a <code>ResultObject</code>.
  Because the <code>instantiateStreaming()</code>  function accepts a promise for a <a
    href="/en-US/docs/Web/API/Response"
    title="The Response interface of the Fetch API represents the response to a request."><code>Response</code></a>
  object, you can directly pass it a <a
    href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"
    title="The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available."><code>WindowOrWorkerGlobalScope.fetch()</code></a>
  call, and it will pass the response into the function when it fulfills.</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj =&gt; obj.instance.exports.exported_func());</pre>

<p>The <code>ResultObject</code>'s instance member is then accessed, and the contained
  exported function invoked.</p>

<div class="notecard note">
  <p><strong>Note:</strong> For this to work, <code>.wasm</code> files should be returned
    with an <code>application/wasm</code> MIME type by the server.</p>
</div>

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
