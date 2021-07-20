---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
tags:
  - Class
  - JavaScript
  - Object
  - RangeError
browser-compat: javascript.builtins.RangeError
---
<div>{{JSRef}}</div>

<p>The <code><strong>RangeError</strong></code> object indicates an error when a value is not in the set or range of allowed values.</p>

<h2 id="Description">Description</h2>

<p>A <code>RangeError</code> is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value.</p>

<p>This can be encountered when:</p>

<ul>
 <li>passing a value that is not one of the allowed string values to {{jsxref("String.prototype.normalize()")}}, or</li>
 <li>when attempting to create an array of an illegal length with the {{jsxref("Array")}} constructor, or</li>
 <li>when passing bad values to the numeric methods {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}} or {{jsxref("Number.prototype.toPrecision()")}}.</li>
</ul>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("RangeError/RangeError", "RangeError()")}}</dt>
 <dd>Creates a new <code>RangeError</code> object.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message", "RangeError.prototype.message")}}</dt>
 <dd>Error message. Although ECMA-262 specifies that {{jsxref("RangeError")}} should provide its own <code>message</code> property, in <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>, it inherits {{jsxref("Error.prototype.message")}}.</dd>
 <dt>{{jsxref("Error.prototype.name", "RangeError.prototype.name")}}</dt>
 <dd>Error name. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.fileName", "RangeError.prototype.fileName")}}</dt>
 <dd>Path to file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.lineNumber", "RangeError.prototype.lineNumber")}}</dt>
 <dd>Line number in file that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.columnNumber", "RangeError.prototype.columnNumber")}}</dt>
 <dd>Column number in line that raised this error. Inherited from {{jsxref("Error")}}.</dd>
 <dt>{{jsxref("Error.prototype.stack", "RangeError.prototype.stack")}}</dt>
 <dd>Stack trace. Inherited from {{jsxref("Error")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_RangeError_for_numeric_values">Using RangeError (for numeric values)</h3>

<pre class="brush: js">function check(n)
{
    if( !(n &gt;= -500 &amp;&amp; n &lt;= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try
{
    check(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
        // Handle the error
    }
}</pre>

<h3 id="Using_RangeError_for_non-numeric_values">Using RangeError (for non-numeric values)</h3>

<pre class="brush: js">function check(value)
{
    if(["apple", "banana", "carrot"].includes(value) === false)
    {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}

try
{
    check("cabbage")
}
catch(error)
{
    if(error instanceof RangeError)
    {
        // Handle the error
    }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Error")}}</li>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Number.toExponential()")}}</li>
 <li>{{jsxref("Number.toFixed()")}}</li>
 <li>{{jsxref("Number.toPrecision()")}}</li>
 <li>{{jsxref("String.prototype.normalize()")}}</li>
</ul>
