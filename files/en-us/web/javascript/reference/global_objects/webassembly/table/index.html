---
title: WebAssembly.Table
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table
tags:
  - Class
  - JavaScript
  - Reference
  - WebAssembly
  - table
browser-compat: javascript.builtins.WebAssembly.Table
---
<div>{{JSRef}}</div>

<p>The <code><strong>WebAssembly.Table()</strong></code> object is a JavaScript wrapper object — an array-like structure representing a WebAssembly Table, which stores function references. A table created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly.</p>

<div class="note">
<p><strong>Note:</strong> Tables can currently only store function references, but this will likely be expanded in the future.</p>
</div>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table"><code>WebAssembly.Table()</code></a></dt>
 <dd>Creates a new <code>Table</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("WebAssembly/Table/length","Table.prototype.length")}}</dt>
 <dd>Returns the length of the table, i.e. the number of elements.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}</dt>
 <dd>Accessor function — gets the element stored at a given index.</dd>
 <dt>{{jsxref("WebAssembly/Table/grow","Table.prototype.grow()")}}</dt>
 <dd>Increases the size of the Table instance by a specified number of elements.</dd>
 <dt>{{jsxref("WebAssembly/Table/set","Table.prototype.set()")}}</dt>
 <dd>Sets an element stored at a given index to a given value.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_WebAssembly_Table_instance">Creating a new WebAssembly Table instance</h3>

<p>The following example (see table2.html <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html">source code</a> and <a href="https://mdn.github.io/webassembly-examples/js-api-examples/table2.html">live version</a>) creates a new WebAssembly Table instance with an initial size of 2 elements. We then print out the table length and contents of the two indexes (retrieved via {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} to show that the length is two and both elements are {{jsxref("null")}}.</p>

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

<p>Finally, we load and instantiate a wasm module (table2.wasm) using the {{jsxref("WebAssembly.instantiateStreaming()")}} method.  The table2.wasm module contains two functions (one that returns 42 and another that returns 83) and stores both into elements 0 and 1 of the imported table (see <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat">text representation</a>).  So after instantiation, the table still has length 2, but the elements now contain callable <a href="/en-US/docs/WebAssembly/Exported_functions">Exported WebAssembly Functions</a> which we can call from JS.</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);
  console.log(tbl.get(0)());
  console.log(tbl.get(1)());
});</pre>

<p>Note how you've got to include a second function invocation operator at the end of the accessor to actually invoke the referenced function and log the value stored inside it (e.g. <code>get(0)()</code> rather than <code>get(0)</code>) .</p>

<p>This example shows that we're creating and accessing the table from JavaScript, but the same table is visible and callable inside the wasm instance too.</p>

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
