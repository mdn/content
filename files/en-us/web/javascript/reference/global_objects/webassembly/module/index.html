---
title: WebAssembly.Module
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
tags:
  - Class
  - JavaScript
  - Module
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Module
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">A <strong><code>WebAssembly.Module</code></strong> object contains stateless WebAssembly code that has already been compiled by the browser — this can be efficiently <a href="/en-US/docs/Web/API/Worker/postMessage">shared with Workers</a>, and instantiated multiple times. </span></p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Global_Objects/WebAssembly/Module/Module", "WebAssembly.Module()")}}</dt>
 <dd>Creates a new <code>Module</code> object.</dd>
</dl>

<h2 id="Static_properties">Static properties</h2>

<dl>
 <dt>{{jsxref("Global_Objects/WebAssembly/Module/customSections", "WebAssembly.Module.customSections()")}}</dt>
 <dd>Given a <code>Module</code> and string, returns a copy of the contents of all custom sections in the module with the given string name.</dd>
 <dt>{{jsxref("Global_Objects/WebAssembly/Module/exports", "WebAssembly.Module.exports()")}}</dt>
 <dd>Given a <code>Module</code>, returns an array containing descriptions of all the declared exports.</dd>
 <dt>{{jsxref("Global_Objects/WebAssembly/Module/imports", "WebAssembly.Module.imports()")}}</dt>
 <dd>Given a <code>Module</code>, returns an array containing descriptions of all the declared imports.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Sending_a_compiled_module_to_a_worker">Sending a compiled module to a worker</h3>

<p>The following example (see our <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html">index-compile.html</a> demo on GitHub, and <a href="https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html">view it live</a> also) compiles the loaded <code>simple.wasm</code> byte code using the {{jsxref("WebAssembly.compileStreaming()")}} method and then sends the resulting <code>Module</code> instance to a <a href="/en-US/docs/Web/API/Web_Workers_API">worker</a> using {{domxref("Worker/postMessage", "postMessage()")}}.</p>

<pre class="brush: js">var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =&gt;
  worker.postMessage(mod)
);</pre>

<p>In the worker (see <code><a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js">wasm_worker.js</a></code>) we define an import object for the module to use, then set up an event handler to receive the module from the main thread. When the module is received, we create an instance from it using the {{jsxref("WebAssembly.instantiate()")}} method and invoke an exported function from inside it.</p>

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

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/WebAssembly">WebAssembly</a> overview page</li>
 <li><a href="/en-US/docs/WebAssembly/Concepts">WebAssembly concepts</a></li>
 <li><a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly JavaScript API</a></li>
</ul>
