---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
tags:
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.source
---
<div>{{JSRef}}</div>

<p>The <strong><code>source</code></strong> property returns a {{jsxref("String")}} containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}</div>


<div>{{js_property_attributes(0, 0, 1)}}</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_source">Using source</h3>

<pre class="brush: js">var regex = /fooBar/ig;

console.log(regex.source); // "fooBar", doesn't contain /.../ and "ig".
</pre>

<h3 id="Empty_regular_expressions_and_escaping">Empty regular expressions and escaping</h3>

<p>Starting with ECMAScript 5, the <code>source</code> property no longer returns an empty string for empty regular expressions. Instead, the string <code>(?:)</code> is returned. In addition, line terminators (such as "\n") are escaped now.</p>

<pre class="brush: js">new RegExp().source; // "(?:)"

new RegExp('\n').source === '\n';  // true, prior to ES5
new RegExp('\n').source === '\\n'; // true, starting with ES5
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("RegExp.prototype.flags")}}</li>
</ul>
