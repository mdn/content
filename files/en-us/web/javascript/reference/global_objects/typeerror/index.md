---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - TypeError
browser-compat: javascript.builtins.TypeError
---
<div>{{JSRef}}</div>

<p>The <code><strong>TypeError</strong></code> object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.</p>

<p>A <code>TypeError</code> may be thrown when:</p>

<ul>
 <li>an operand or argument passed to a function is incompatible with the type expected by that operator or function; or</li>
 <li>when attempting to modify a value that cannot be changed; or</li>
 <li>when attempting to use a value in an inappropriate way.</li>
</ul>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}</dt>
 <dd>Creates a new <code>TypeError</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message", "TypeError.prototype.message")}}</dt>
 <dd>Error message. Although ECMA-262 specifies that {{jsxref("TypeError")}} should provide its own <code>message</code> property, in <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>, it inherits {{jsxref("Error.prototype.message")}}.</dd>
 <dt>{{jsxref("Error.prototype.name", "TypeError.prototype.name")}}</dt>
 <dd>Error name. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.fileName", "TypeError.prototype.fileName")}}</dt>
 <dd>Path to file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.lineNumber", "TypeError.prototype.lineNumber")}}</dt>
 <dd>Line number in file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.columnNumber", "TypeError.prototype.columnNumber")}}</dt>
 <dd>Column number in line that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.stack", "TypeError.prototype.stack")}}</dt>
 <dd>Stack trace. Inherited from {{jsxref("Error")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Catching_a_TypeError">Catching a TypeError</h3>

<pre class="brush: js">try {
  null.f()
} catch (e) {
  console.log(e instanceof TypeError)  // true
  console.log(e.message)               // "null has no properties"
  console.log(e.name)                  // "TypeError"
  console.log(e.fileName)              // "Scratchpad/1"
  console.log(e.lineNumber)            // 2
  console.log(e.columnNumber)          // 2
  console.log(e.stack)                 // "@Scratchpad/2:2:3\n"
}
</pre>

<h3 id="Creating_a_TypeError">Creating a TypeError</h3>

<pre class="brush: js">try {
  throw new TypeError('Hello', "someFile.js", 10)
} catch (e) {
  console.log(e instanceof TypeError)  // true
  console.log(e.message)               // "Hello"
  console.log(e.name)                  // "TypeError"
  console.log(e.fileName)              // "someFile.js"
  console.log(e.lineNumber)            // 10
  console.log(e.columnNumber)          // 0
  console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
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
