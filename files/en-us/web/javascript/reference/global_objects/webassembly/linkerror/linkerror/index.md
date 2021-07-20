---
title: WebAssembly.LinkError() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError
tags:
- Constructor
- JavaScript
- Reference
- WebAssembly
browser-compat: javascript.builtins.WebAssembly.LinkError.LinkError
---
<div>{{JSRef}}</div>

<p>The <code><strong>WebAssembly.LinkError()</strong></code> constructor creates a new
  WebAssembly <code>LinkError</code> object, which indicates an error during module
  instantiation (besides <a href="https://webassembly.org/docs/semantics/#traps">traps</a>
  from the start function).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
new WebAssembly.LinkError()
new WebAssembly.LinkError(message)
new WebAssembly.LinkError(message, fileName)
new WebAssembly.LinkError(message, fileName, lineNumber)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>message</code> {{optional_inline}}</dt>
  <dd>Human-readable description of the error.</dd>
  <dt><code>fileName</code> {{optional_inline}}</dt>
  <dd>The name of the file containing the code that caused the exception.</dd>
  <dt><code>lineNumber</code> {{optional_inline}}</dt>
  <dd>The line number of the code that caused the exception.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_LinkError_instance">Creating a new LinkError instance</h3>

<p>The following snippet creates a new <code>LinkError</code> instance, and logs its
  details to the console:</p>

<pre class="brush: js">try {
  throw new WebAssembly.LinkError('Hello', 'someFile', 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message);                 // "Hello"
  console.log(e.name);                    // "LinkError"
  console.log(e.fileName);                // "someFile"
  console.log(e.lineNumber);              // 10
  console.log(e.columnNumber);            // 0
  console.log(e.stack);                   // returns the location where the code was run
}</pre>

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
