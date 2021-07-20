---
title: WebAssembly.instantiate()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate
tags:
- API
- JavaScript
- Method
- Object
- Reference
- WebAssembly
- instantiate
browser-compat: javascript.builtins.WebAssembly.instantiate
---
<div>{{JSRef}}</div>

<p>The <strong><code>WebAssembly.instantiate()</code></strong> function allows you to
  compile and instantiate WebAssembly code. This function has two overloads:</p>

<ul>
  <li>The primary overload takes the WebAssembly binary code, in the form of a <a
      href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a> or
    {{jsxref("ArrayBuffer")}}, and performs both compilation and instantiation in one
    step. The returned <code>Promise</code> resolves to both a compiled
    {{jsxref("WebAssembly.Module")}} and its first {{jsxref("WebAssembly.Instance")}}.
  </li>
  <li>The secondary overload takes an already-compiled {{jsxref("WebAssembly.Module")}}
    and returns a <code>Promise</code> that resolves to an <code>Instance</code> of that
    <code>Module</code>. This overload is useful if the <code>Module</code> has already
    been compiled.</li>
</ul>

<div class="warning">
  <p><strong>Warning:</strong> This method is not the most efficient way of fetching and
    instantiating wasm modules. If at all possible, you should use the newer
    {{jsxref("WebAssembly.instantiateStreaming()")}} method instead, which fetches,
    compiles, and instantiates a module all in one step, directly from the raw bytecode,
    so doesn't require conversion to an {{jsxref("ArrayBuffer")}}.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<h3 id="Primary_overload_—_taking_wasm_binary_code">Primary overload — taking wasm binary
  code</h3>

<pre class="brush: js">WebAssembly.instantiate(bufferSource, importObject);
</pre>

<h4 id="Parameters">Parameters</h4>

<dl>
  <dt><em>bufferSource</em></dt>
  <dd>A <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed array</a> or
    {{jsxref("ArrayBuffer")}} containing the binary code of the .wasm module you want to
    compile.</dd>
  <dt><em>importObject</em> {{optional_inline}}</dt>
  <dd>An object containing the values to be imported into the newly-created
    <code>Instance</code>, such as functions or {{jsxref("WebAssembly.Memory")}} objects.
    There must be one matching property for each declared import of the compiled module or
    else a {{jsxref("WebAssembly.LinkError")}} is thrown.</dd>
</dl>

<h4 id="Return_value">Return value</h4>

<p>A <code>Promise</code> that resolves to a <code>ResultObject</code> which contains two
  fields:</p>

<ul>
  <li><code>module</code>: A {{jsxref("WebAssembly.Module")}} object representing the
    compiled WebAssembly module. This <code>Module</code> can be instantiated again,
    shared via {{domxref("Worker.postMessage", "postMessage()")}} or <a
      href="/en-US/docs/WebAssembly/Caching_modules">cached in IndexedDB</a>.</li>
  <li><code>instance</code>: A {{jsxref("WebAssembly.Instance")}} object that contains all
    the <a href="/en-US/docs/WebAssembly/Exported_functions">Exported WebAssembly
      functions</a>.</li>
</ul>

<h4 id="Exceptions">Exceptions</h4>

<ul>
  <li>If either of the parameters are not of the correct type or structure, a
    {{jsxref("TypeError")}} is thrown.</li>
  <li>If the operation fails, the promise rejects with a
    {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or
    {{jsxref("WebAssembly.RuntimeError")}}, depending on the cause of the failure.</li>
</ul>

<h3 id="Secondary_overload_—_taking_a_module_object_instance">Secondary overload — taking
  a module object instance</h3>

<pre class="brush: js">WebAssembly.instantiate(module, importObject);
</pre>

<h4 id="Parameters_2">Parameters</h4>

<dl>
  <dt><em>module</em></dt>
  <dd>The {{jsxref("WebAssembly.Module")}} object to be instantiated.</dd>
  <dt><em>importObject</em> {{optional_inline}}</dt>
  <dd>An object containing the values to be imported into the newly-created
    <code>Instance</code>, such as functions or {{jsxref("WebAssembly.Memory")}} objects.
    There must be one matching property for each declared import of <code>module</code> or
    else a {{jsxref("WebAssembly.LinkError")}} is thrown.</dd>
</dl>

<h4 id="Return_value_2">Return value</h4>

<p>A <code>Promise</code> that resolves to an {{jsxref("WebAssembly.Instance")}} object.
</p>

<h4 id="Exceptions_2">Exceptions</h4>

<ul>
  <li>If either of the parameters are not of the correct type or structure, a
    {{jsxref("TypeError")}} is thrown.</li>
  <li>If the operation fails, the promise rejects with a
    {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or
    {{jsxref("WebAssembly.RuntimeError")}}, depending on the cause of the failure.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p><strong>Note</strong>: You'll probably want to use
  {{jsxref("WebAssembly.instantiateStreaming()")}} in most cases, as it is more efficient
  than <code>instantiate()</code>.</p>

<h3 id="First_overload_example">First overload example</h3>

<p>After fetching some WebAssembly bytecode using fetch, we compile and instantiate the
  module using the {{jsxref("WebAssembly.instantiate()")}} function, importing a
  JavaScript function into the WebAssembly Module in the process. We then call an <a
    href="/en-US/docs/WebAssembly/Exported_functions">Exported WebAssembly function</a>
  that is exported by the <code>Instance</code>.</p>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes, importObject)
).then(result =&gt;
  result.instance.exports.exported_func()
);</pre>

<div class="note">
  <p><strong>Note:</strong> You can also find this example at <a
      href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html">index.html</a>
    on GitHub (<a href="https://mdn.github.io/webassembly-examples/js-api-examples/">view
      it live also</a>).</p>
</div>

<h3 id="Second_overload_example">Second overload example</h3>

<p>The following example (see our <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html">index-compile.html</a>
  demo on GitHub, and <a
    href="https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html">view
    it live</a> also) compiles the loaded simple.wasm byte code using the
  {{jsxref("WebAssembly.compileStreaming()")}} method and then sends it to a <a
    href="/en-US/docs/Web/API/Web_Workers_API">worker</a> using
  {{domxref("Worker.postMessage", "postMessage()")}}.</p>

<pre class="brush: js">var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =&gt;
  worker.postMessage(mod)
);</pre>

<p>In the worker (see
  <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js">wasm_worker.js</a></code>)
  we define an import object for the module to use, then set up an event handler to
  receive the module from the main thread. When the module is received, we create an
  instance from it using the {{jsxref("WebAssembly.instantiate()")}} method and invoke an
  exported function from inside it.</p>

<pre class="brush: js">var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module received from main thread');
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
    instance.exports.exported_func();
  });
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/WebAssembly">WebAssembly</a> overview page</li>
  <li><a href="/en-US/docs/WebAssembly/Concepts">WebAssembly concepts</a></li>
  <li><a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly
      JavaScript API</a></li>
</ul>
