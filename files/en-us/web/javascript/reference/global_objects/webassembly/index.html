---
title: WebAssembly
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly
tags:
  - API
  - JavaScript
  - Namespace
  - Object
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly
---
<div>{{JSRef}}</div>

<p>The <strong><code>WebAssembly</code></strong> JavaScript object acts as the namespace for all <a href="/en-US/docs/WebAssembly">WebAssembly</a>-related functionality.</p>

<p>Unlike most other global objects, <code>WebAssembly</code> is not a constructor (it is not a function object). You can compare it to {{jsxref("Math")}}, which is also a namespace object for mathematical constants and functions, or to {{jsxref("Intl")}} which is the namespace object for internationalization constructors and other language-sensitive functions.</p>

<h2 id="Description">Description</h2>

<p>The primary uses for the <code>WebAssembly</code> object are:</p>

<ul>
 <li>Loading WebAssembly code, using the {{jsxref("WebAssembly.instantiate()")}} function.</li>
 <li>Creating new memory and table instances via the {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}} constructors.</li>
 <li>Providing facilities to handle errors that occur in WebAssembly via the {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}} constructors.</li>
</ul>

<h2 id="Constructor_properties">Constructor properties</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError"><code>WebAssembly.CompileError()</code></a></dt>
 <dd>Indicates an error during WebAssembly decoding or validation.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global"><code>WebAssembly.Global()</code></a></dt>
 <dd>Represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more {{jsxref("WebAssembly.Module")}} instances. This allows dynamic linking of multiple modules.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance"><code>WebAssembly.Instance()</code></a></dt>
 <dd>Is a stateful, executable instance of a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module">WebAssembly.Module</a></dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError"><code>WebAssembly.LinkError()</code></a></dt>
 <dd>Indicates an error during module instantiation (besides <a class="external external-icon" href="https://webassembly.org/docs/semantics/#traps" rel="noopener">traps</a> from the start function).</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory"><code>WebAssembly.Memory()</code></a></dt>
 <dd>An object whose {{jsxref("WebAssembly/Memory/buffer","buffer")}} property is a resizable <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a> that holds the raw bytes of memory accessed by a WebAssembly <code>Instance</code>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module"><code>WebAssembly.Module()</code></a></dt>
 <dd>Contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently <a href="/en-US/docs/Web/API/Worker/postMessage">shared with Workers</a>, and instantiated multiple times.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RunTimeError"><code>WebAssembly.RuntimeError()</code></a></dt>
 <dd>Error type that is thrown whenever WebAssembly specifies a <a class="external external-icon" href="https://webassembly.org/docs/semantics/#traps" rel="noopener">trap</a>.</dd>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table"><code>WebAssembly.Table()</code></a></dt>
 <dd>An array-like structure representing a WebAssembly Table, which stores function references.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("WebAssembly.instantiate()")}}</dt>
 <dd>The primary API for compiling and instantiating WebAssembly code, returning both a <code>Module</code> and its first <code>Instance</code>.</dd>
 <dt>{{jsxref("WebAssembly.instantiateStreaming()")}}</dt>
 <dd>Compiles and instantiates a WebAssembly module directly from a streamed underlying source, returning both a <code>Module</code> and its first <code>Instance</code>.</dd>
 <dt>{{jsxref("WebAssembly.compile()")}}</dt>
 <dd>Compiles a {{jsxref("WebAssembly.Module")}} from WebAssembly binary code, leaving instantiation as a separate step.</dd>
 <dt>{{jsxref("WebAssembly.compileStreaming()")}}</dt>
 <dd>compiles a {{jsxref("WebAssembly.Module")}} directly from a streamed underlying source, leaving instantiation as a separate step.</dd>
 <dt>{{jsxref("WebAssembly.validate()")}}</dt>
 <dd>Validates a given typed array of WebAssembly binary code, returning whether the bytes are valid WebAssembly code (<code>true</code>) or not (<code>false</code>).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Stream_a_.wasm_module_then_compile_and_instantiate_it">Stream a .wasm module then compile and instantiate it</h3>

<p>The following example (see our <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html">instantiate-streaming.html</a> demo on GitHub, and <a href="https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html">view it live</a> also) directly streams a .wasm module from an underlying source then compiles and instantiates it, the promise fulfilling with a <code>ResultObject</code>. Because the <code>instantiateStreaming()</code>  function accepts a promise for a <a href="/en-US/docs/Web/API/Response" title="The Response interface of the Fetch API represents the response to a request."><code>Response</code></a> object, you can directly pass it a <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch" title="The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available."><code>WindowOrWorkerGlobalScope.fetch()</code></a> call, and it will pass the response into the function when it fulfills.</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj =&gt; obj.instance.exports.exported_func());</pre>

<p>The <code>ResultObject</code>'s instance member is then accessed, and the contained exported function invoked.</p>

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
