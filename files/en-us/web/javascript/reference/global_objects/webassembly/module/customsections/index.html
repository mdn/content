---
title: WebAssembly.Module.customSections()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections
tags:
- API
- JavaScript
- Method
- Module
- Object
- Reference
- WebAssembly
- customSections
browser-compat: javascript.builtins.WebAssembly.Module.customSections
---
<div>{{JSRef}}</div>

<p>The <strong><code>WebAssembly.customSections()</code></strong> function returns a copy
  of the contents of all custom sections in the given module with the given string name.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">WebAssembly.Module.customSections(module, sectionName)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>module</em></dt>
  <dd>The {{jsxref("WebAssembly.Module")}} object whose custom sections are being
    considered.</dd>
  <dt><em>sectionName</em></dt>
  <dd>The string name of the desired custom section.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A (possibly empty) array containing <a href="/en-US/docs/Web/API/ArrayBuffer"
    title="The documentation about this has not yet been written; please consider contributing!"><code>ArrayBuffer</code></a>
  copies of the contents of all custom sections matching <code>sectionName</code>.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>If <code>module</code> is not a {{jsxref("WebAssembly.Module")}} object instance, a
  {{jsxref("TypeError")}} is thrown.</p>

<h2 id="Description">Description</h2>

<p>A wasm module is comprised of a sequence of <strong>sections</strong>. Most of these
  sections are fully specified and validated by the wasm spec, but modules can also
  contain <strong>custom sections</strong> that are ignored and skipped over during
  validation. (Read <a
    href="https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#high-level-structure">High
    level structure</a> for information on section structures, and how normal sections
  ("known sections") and custom sections are distinguished.)</p>

<p>This provides developers with a way to include custom data inside wasm modules for
  other purposes, for example the <a
    href="https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section">name
    custom section</a>, which allows developers to provide names for all the functions and
  locals in the module (like "symbols" in a native build).</p>

<p>Note that the WebAssembly text format currently doesn't have a syntax specified for
  adding new custom sections; you can however add a name section to your wasm during
  conversion from text format over to .wasm. The wast2wasm command available as part of
  the <a href="https://github.com/webassembly/wabt">wabt tool</a> has a
  <code>--debug-names</code> option — specify this during conversion to get a .wasm with a
  names custom section, for example:</p>

<pre
  class="brush: bash">wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_customSections">Using customSections</h3>

<p>The following example (see the custom-section.html <a
    href="https://github.com/mdn/webassembly-examples/blob/master/other-examples/custom-section.html">source</a>
  and <a
    href="https://mdn.github.io/webassembly-examples/other-examples/custom-section.html">live
    example</a>) compiles the loaded simple-name-section.wasm byte code.</p>

<p>We then do a check using <code>WebAssembly.Module.customSections</code>, looking to see
  whether the module instance contains a "name" custom section by checking that its
  <code>length</code> is more than 0. Since there is a "name" section in the example, an
  <code>ArrayBuffer</code> object is returned.</p>

<pre class="brush: js">WebAssembly.compileStreaming(fetch('simple-name-section.wasm'))
.then(function(mod) {
  var nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length != 0) {
    console.log("Module contains a name section");
    console.log(nameSections[0]);
  };
});</pre>

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
