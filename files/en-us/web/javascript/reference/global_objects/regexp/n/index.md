---
title: RegExp.$1-$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
tags:
  - JavaScript
  - Non-standard
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.n
---
<div>{{JSRef}}</div>

<p>The legacy RegExp <strong>$1, $2, $3, $4, $5, $6, $7, $8, $9</strong> properties are static and read-only properties of regular expressions that contain parenthesized substring matches.</p>

<h2 id="Description">Description</h2>

<p>The $1, ..., $9 properties are static, they are not a property of an individual regular expression object. Instead, you always use them as <code>RegExp.$1</code>, ..., <code>RegExp.$9</code>.</p>

<p>The values of these properties are read-only and modified whenever successful matches are made.</p>

<p>The number of possible parenthesized substrings is unlimited, but the <code>RegExp</code> object can only hold the first nine. You can access all parenthesized substrings through the returned array's indexes.</p>

<p>These properties can be used in the replacement text for the {{jsxref("String.replace")}} method. When used this way, do not prepend them with <code>RegExp</code>. The example below illustrates this. When parentheses are not included in the regular expression, the script interprets <code>$n</code>'s literally (where <code>n</code> is a positive integer).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_n_with_String.replace">Using $n with String.replace</h3>

<p>The following script uses the {{jsxref("String.prototype.replace()", "replace()")}} method of the {{jsxref("String")}} instance to match a name in the format <em>first last</em> and output it in the format <em>last, first</em>. In the replacement text, the script uses <code>$1</code> and <code>$2</code> to indicate the results of the corresponding matching parentheses in the regular expression pattern.</p>

<pre class="brush: js">var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
</pre>

<h3 id="Using_n_with_RegExp.test">Using $n with RegExp.test</h3>

<p>The following script uses the {{jsxref("RegExp.prototype.test()", "test()")}} method of the {{jsxref("RegExp")}} instance to grab a number in a generic string.</p>

<pre class="brush: js">var str = 'Test 24';
var number = /(\d+)/.test(str) ? RegExp.$1 : '0';
number; // "24"
</pre>

<p>Please note that any operation involving the usage of other regular expressions between a <code>re.test(str)</code> call and the <code>RegExp.$n</code> property, might have side effects, so that accessing these special properties should be done instantly, otherwise the result might be unexpected.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("RegExp.input", "RegExp.input ($_)")}}</li>
 <li>{{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}</li>
 <li>{{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}</li>
 <li>{{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}</li>
</ul>
