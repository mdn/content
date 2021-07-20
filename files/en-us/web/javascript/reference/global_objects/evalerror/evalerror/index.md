---
title: EvalError() constructor
slug: Web/JavaScript/Reference/Global_Objects/EvalError/EvalError
tags:
- Constructor
- JavaScript
- Reference
browser-compat: javascript.builtins.EvalError.EvalError
---
<div>{{JSRef}}</div>

<p>The <strong><code>EvalError</code></strong> constructor creates a new error regarding
  the global {{jsxref("Global_Objects/eval", "eval()")}} function. This exception is not
  thrown by JavaScript anymore, however the <code>EvalError</code> object remains for
  compatibility.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
new EvalError()
new EvalError(message)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>message</var></code> {{optional_inline}}</dt>
  <dd>Human-readable description of the error.</dd>
  <dt><code><var>fileName</var></code> {{optional_inline}}</dt>
  <dd>The name of the file containing the code that caused the exception</dd>
  <dt><code><var>lineNumber</var></code> {{optional_inline}}</dt>
  <dd>The line number of the code that caused the exception</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p><code>EvalError</code> is not used in the current ECMAScript specification and will
  thus not be thrown by the runtime. However, the object itself remains for backwards
  compatibility with earlier versions of the specification.</p>

<h3 id="Creating_an_EvalError">Creating an EvalError</h3>

<pre class="brush: js">try {
  throw new EvalError('Hello', 'someFile.js', 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "EvalError"
  console.log(e.fileName);             // "someFile.js"
  console.log(e.lineNumber);           // 10
  console.log(e.columnNumber);         // 0
  console.log(e.stack);                // "@Scratchpad/2:2:9\n"
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Error")}}</li>
  <li>{{jsxref("Global_Objects/eval", "eval()")}}</li>
</ul>
