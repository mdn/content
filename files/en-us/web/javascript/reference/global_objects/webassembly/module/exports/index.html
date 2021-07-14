---
title: WebAssembly.Module.exports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
tags:
- API
- JavaScript
- Method
- Module
- Object
- Reference
- WebAssembly
- exports
browser-compat: javascript.builtins.WebAssembly.Module.exports
---
<div>{{JSRef}}</div>

<p>The <strong><code>WebAssembly.Module.exports()</code></strong> function returns an
  array containing descriptions of all the declared exports of the given
  <code>Module</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">WebAssembly.Module.exports(module)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>module</em></dt>
  <dd>A {{jsxref("WebAssembly.Module")}} object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An array containing objects representing the exported functions of the given module.
</p>

<h3 id="Exceptions">Exceptions</h3>

<p>If module is not a {{jsxref("WebAssembly.Module")}} object instance, a
  {{jsxref("TypeError")}} is thrown.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_exports">Using exports</h3>

<p>The following example (see our <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html">index-compile.html</a>
  demo on GitHub, and <a
    href="https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html">view
    it live</a> also) compiles the loaded simple.wasm byte code using the
  {{jsxref("WebAssembly.compileStreaming()")}} method and then sends it to a <a
    href="/en-US/docs/Web/API/Web_Workers_API">worker</a> using <a
    href="/en-US/docs/Web/API/Worker/postMessage">postMessage()</a>.</p>

<pre class="brush: js">var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =&gt;
  worker.postMessage(mod)
);</pre>

<p>In the worker (see
  <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js">wasm_worker.js</a></code>)
  we define an import object for the module to use, then set up an event handler to
  receive the module from the main thread. when the module is received, we create an
  instance from it using the {{jsxref("WebAssembly.Instantiate()")}} method, invoke an
  exported function from inside it, then show how we can return information on the
  available exports on a module using <code>WebAssembly.Module.exports</code>.</p>

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

  var exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};</pre>

<p>The <code>exports[0]</code> output looks like this:</p>

<pre class="brush: js">{ name: "exported_func", kind: "function" }</pre>

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
