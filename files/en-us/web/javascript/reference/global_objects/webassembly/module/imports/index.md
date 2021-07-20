---
title: WebAssembly.Module.imports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports
tags:
- API
- JavaScript
- Method
- Module
- Object
- Reference
- WebAssembly
- imports
browser-compat: javascript.builtins.WebAssembly.Module.imports
---
<div>{{JSRef}}</div>

<p>The <strong><code>WebAssembly.imports()</code></strong> function returns an array
  containing descriptions of all the declared imports of the given <code>Module</code>.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">WebAssembly.Module.imports(module)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>module</em></dt>
  <dd>A {{jsxref("WebAssembly.Module")}} object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An array containing objects representing the imported functions of the given module.
</p>

<h3 id="Exceptions">Exceptions</h3>

<p>If module is not a {{jsxref("WebAssembly.Module")}} object instance, a
  {{jsxref("TypeError")}} is thrown.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_imports">Using imports</h3>

<p>The following example (see imports.html <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/imports.html">source
    code</a>; <a
    href="https://mdn.github.io/webassembly-examples/js-api-examples/imports.html">see it
    live also</a>) compiles the loaded simple.wasm module.  This module is then queried
  for its imports.</p>

<pre class="brush: js">WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(function(mod) {
  var imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
</pre>

<p>The output looks like this:</p>

<pre
  class="brush: js">{ module: "imports", name: "imported_func", kind: "function" }</pre>

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
