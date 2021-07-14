---
title: WebAssembly.Table.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set
tags:
- API
- JavaScript
- Method
- Reference
- WebAssembly
- set
- table
browser-compat: javascript.builtins.WebAssembly.Table.set
---
<div>{{JSRef}}</div>

<p>The <code><strong>set()</strong></code> prototype method of
  the {{jsxref("WebAssembly.Table")}} object mutates a reference stored at a given index
  to a different value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">set(index, value)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>index</em></dt>
  <dd>The index of the function reference you want to mutate.</dd>
  <dt><em>value</em></dt>
  <dd>The value you want to mutate the reference to. This must be an <a
      href="/en-US/docs/WebAssembly/Exported_functions">exported WebAssembly function</a>,
    a JavaScript wrapper for an underlying wasm function.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Void.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>If <em>index</em> is greater than or equal
    to {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}, a
    {{jsxref("RangeError")}} is thrown.</li>
  <li>If <em>value</em> is not an exported WebAssembly function or
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code>,
    a {{jsxref("TypeError")}} is thrown.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Table.set">Using Table.set</h3>

<p>The following example (see table2.html <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html">source
    code</a> and <a
    href="https://mdn.github.io/webassembly-examples/js-api-examples/table2.html">live
    version</a>) creates a new WebAssembly Table instance with an initial size of 2
  references. We then print out the table length and contents of the two indexes
  (retrieved via {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}) to show that
  the length is two, and the indexes currently contain no function references (they
  currently return {{jsxref("null")}}).</p>

<pre class="brush: js">var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));</pre>

<p>We then create an import object that contains a reference to the table:</p>

<pre class="brush: js">var importObj = {
  js: {
    tbl:tbl
  }
};</pre>

<p>Finally, we load and instantiate a wasm module (table2.wasm) using the
  {{jsxref("WebAssembly.instantiateStreaming()")}}, log the table length, and invoke the
  two referenced functions that are now stored in the table (the table2.wasm module (see
  <a
    href="https://github.com/mdn/webassembly-examples/blob/master/text-format-examples/table2.was">text
    representation</a>) adds two function references to the table, both of which print out
  a simple value):</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);
  console.log(tbl.get(0)());
  console.log(tbl.get(1)());
});</pre>

<p>Note how you've got to include a second function invocation operator at the end of the
  accessor to actually invoke the referenced function and log the value stored inside it
  (e.g. <code>get(0)()</code> rather than <code>get(0)</code>) .</p>

<p>This example shows that we're creating and accessing the table from JavaScript, but the
  same table is visible and callable inside the wasm instance too.</p>

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
