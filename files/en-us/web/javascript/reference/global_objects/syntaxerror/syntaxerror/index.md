---
title: SyntaxError() constructor
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
tags:
- Constructor
- JavaScript
- Reference
- SyntaxError
browser-compat: javascript.builtins.SyntaxError.SyntaxError
---
<div>{{JSRef}}</div>

<p>The <strong><code>SyntaxError</code></strong> constructor creates a new error object
  that represents an error when trying to interpret syntactically invalid code.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
new SyntaxError()
new SyntaxError(message)
new SyntaxError(message, fileName)
new SyntaxError(message, fileName, lineNumber)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>message</var></code> {{optional_inline}}</dt>
  <dd>Human-readable description of the error</dd>
  <dt><code><var>fileName</var></code> {{optional_inline}}</dt>
  <dd>The name of the file containing the code that caused the exception</dd>
  <dt><code><var>lineNumber</var></code> {{optional_inline}}</dt>
  <dd>The line number of the code that caused the exception</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Catching_a_SyntaxError">Catching a SyntaxError</h3>

<pre class="brush: js">try {
  eval('hoo bar');
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
</pre>

<h3 id="Creating_a_SyntaxError">Creating a SyntaxError</h3>

<pre class="brush: js">try {
  throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message);                // Hello
  console.error(e.name);                   // SyntaxError
  console.error(e.fileName);               // someFile.js
  console.error(e.lineNumber);             // 10
  console.error(e.columnNumber);           // 0
  console.error(e.stack);                  // @debugger eval code:3:9
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Error")}}</li>
</ul>
