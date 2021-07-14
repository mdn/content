---
title: WebAssembly.Table() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table
tags:
- Constructor
- JavaScript
- Reference
- WebAssembly
browser-compat: javascript.builtins.WebAssembly.Table.Table
---
<div>{{JSRef}}</div>

<p>The <code><strong>WebAssembly.Table()</strong></code> constructor creates a new
  <code>Table</code> object of the given size and element type.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">new WebAssembly.Table(tableDescriptor)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>tableDescriptor</em></dt>
  <dd>An object that can contain the following members:
    <dl>
      <dt><em>element</em></dt>
      <dd>A string representing the type of value to be stored in the table. At the moment
        this can only have a value of <code>"anyfunc"</code> (functions).</dd>
      <dt><em>initial</em></dt>
      <dd>The initial number of elements of the WebAssembly Table.</dd>
      <dt><em>maximum {{optional_inline}}</em></dt>
      <dd>The maximum number of elements the WebAssembly Table is allowed to grow to.</dd>
    </dl>
  </dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>If <code>tableDescriptor</code> is not of type object, a {{jsxref("TypeError")}} is
    thrown.</li>
  <li>If <code>maximum</code> is specified and is smaller than <code>initial</code>, a
    {{jsxref("RangeError")}} is thrown.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_WebAssembly_Table_instance">Creating a new WebAssembly Table
  instance</h3>

<p>The following example (see table2.html <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html">source
    code</a> and <a
    href="https://mdn.github.io/webassembly-examples/js-api-examples/table2.html">live
    version</a>) creates a new WebAssembly Table instance with an initial size of 2
  elements. We then print out the table length and contents of the two indexes (retrieved
  via {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} to show that the length
  is two and both elements are {{jsxref("null")}}.</p>

<pre class="brush: js">var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
console.log(tbl.length);  // "2"
console.log(tbl.get(0));  // "null"
console.log(tbl.get(1));  // "null"</pre>

<p>We then create an import object that contains the table:</p>

<pre class="brush: js">var importObj = {
  js: {
    tbl:tbl
  }
};</pre>

<p>Finally, we load and instantiate a wasm module (table2.wasm) using the
  {{jsxref("WebAssembly.instantiateStreaming()")}} method.  The table2.wasm module
  contains two functions (one that returns 42 and another that returns 83) and stores both
  into elements 0 and 1 of the imported table (see <a
    href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat">text
    representation</a>).  So after instantiation, the table still has length 2, but the
  elements now contain callable <a
    href="/en-US/docs/WebAssembly/Exported_functions">Exported WebAssembly Functions</a>
  which we can call from JS.</p>

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
