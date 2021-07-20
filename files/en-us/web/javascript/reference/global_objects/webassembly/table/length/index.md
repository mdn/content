---
title: WebAssembly.Table.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/length
tags:
- API
- JavaScript
- Property
- Reference
- WebAssembly
- length
- table
browser-compat: javascript.builtins.WebAssembly.Table.length
---
<div>{{JSRef}}</div>

<p>The <code><strong>length</strong></code> prototype property of the
  {{jsxref("WebAssembly.Table")}} object returns the length of the table, i.e. the number
  of elements in the table.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_length">Using length</h3>

<p>The following example creates a new WebAssembly Table instance with an initial size of
  2 and a maximum size of 10.</p>

<pre
  class="brush: js">var table = new WebAssembly.Table({ element: "anyfunc", initial: 2, maximum: 10 });</pre>

<p>You can then grow the table by 1 with the following:</p>

<pre class="brush: js">console.log(table.length);   // "2"
console.log(table.grow(1));  // "2"
console.log(table.length);   // "3"
</pre>

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
