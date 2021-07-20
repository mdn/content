---
title: WebAssembly.RuntimeError
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError
tags:
  - API
  - Class
  - JavaScript
  - Reference
  - RuntimeError
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.RuntimeError
---
<div>{{JSRef}}</div>

<p>The <code><strong>WebAssembly.RuntimeError</strong></code> object is the error type that is thrown whenever WebAssembly specifies a <a href="https://webassembly.org/docs/semantics/#traps">trap</a>.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RuntimeError"><code>WebAssembly.RuntimeError()</code></a></dt>
 <dd>Creates a new <code>WebAssembly.RuntimeError</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}</dt>
 <dd>Error message. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}</dt>
 <dd>Error name. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}}</dt>
 <dd>Path to file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}}</dt>
 <dd>Line number in file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}}</dt>
 <dd>Column number in line that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}}</dt>
 <dd>Stack trace. Inherited from {{jsxref("Error")}}.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Error.prototype.toSource", "WebAssembly.RuntimeError.prototype.toSource()")}}</dt>
 <dd>Returns code that could eval to the same error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}</dt>
 <dd>Returns a string representing the specified <code>Error</code> object.. Inherited from {{jsxref("Error")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_RuntimeError_instance">Creating a new RuntimeError instance</h3>

<p>The following snippet creates a new <code>RuntimeError</code> instance, and logs its details to the console:</p>

<pre class="brush: js">try {
  throw new WebAssembly.RuntimeError('Hello', 'someFile', 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message);                             // "Hello"
  console.log(e.name);                                // "RuntimeError"
  console.log(e.fileName);                            // "someFile"
  console.log(e.lineNumber);                          // 10
  console.log(e.columnNumber);                        // 0
  console.log(e.stack);                               // returns the location where the code was run
}</pre>

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
