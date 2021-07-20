---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
tags:
  - Class
  - EvalError
  - JavaScript
  - Object
  - Reference
browser-compat: javascript.builtins.EvalError
---
<div>{{JSRef}}</div>

<p>The <strong><code>EvalError</code></strong> object indicates an error regarding the global {{jsxref("Global_Objects/eval", "eval()")}} function. This exception is not thrown by JavaScript anymore, however the <code>EvalError</code> object remains for compatibility.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("EvalError/EvalError", "EvalError()")}}</dt>
 <dd>Creates a new <code>EvalError</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message", "EvalError.prototype.message")}}</dt>
 <dd>Error message. Although ECMA-262 specifies that {{jsxref("EvalError")}} should provide its own <code>message</code> property, in <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>, it inherits {{jsxref("Error.prototype.message")}}.</dd>
 <dt>{{jsxref("Error.prototype.name", "EvalError.prototype.name")}}</dt>
 <dd>Error name. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.fileName", "EvalError.prototype.fileName")}}</dt>
 <dd>Path to file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.lineNumber", "EvalError.prototype.lineNumber")}}</dt>
 <dd>Line number in file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.columnNumber", "EvalError.prototype.columnNumber")}}</dt>
 <dd>Column number in line that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.stack", "EvalError.prototype.stack")}}</dt>
 <dd>Stack trace. Inherited from {{jsxref("Error")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p><code>EvalError</code> is not used in the current ECMAScript specification and will thus not be thrown by the runtime. However, the object itself remains for backwards compatibility with earlier versions of the specification.</p>

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
