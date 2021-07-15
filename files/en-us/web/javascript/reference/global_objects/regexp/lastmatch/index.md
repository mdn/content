---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
tags:
  - JavaScript
  - Non-standard
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.lastMatch
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>The non-standard <strong>lastMatch</strong> property is a static and read-only property of regular expressions that contains the last matched characters. <code>RegExp.$&amp;</code> is an alias for this property.</p>

<h2 id="Description">Description</h2>

<p>The <code>lastMatch</code> property is static, it is not a property of an individual regular expression object. Instead, you always use it as <code>RegExp.lastMatch</code> or <code>RegExp['$&amp;'].</code></p>

<p>The value of the <code>lastMatch</code> property is read-only and modified whenever a successful match is made.</p>

<p>You can not use the shorthand alias with the dot property accessor (<code>RegExp.$&amp;</code>), because the parser expects an expression with "&amp;" in that case and a {{jsxref("SyntaxError")}} is thrown. Use the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">bracket notation for property access</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_lastMatch_and">Using lastMatch and $&amp;</h3>

<pre class="brush: js">var re = /hi/g;
re.test('hi there!');
RegExp.lastMatch; // "hi"
RegExp['$&amp;'];     // "hi"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("RegExp.input", "RegExp.input ($_)")}}</li>
 <li>{{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}</li>
 <li>{{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}</li>
 <li>{{jsxref("RegExp.n", "RegExp.$1-$9")}}</li>
</ul>
