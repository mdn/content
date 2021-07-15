---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
tags:
  - Draft
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.hasIndices
---
<p>{{JSRef}}</p>

<p>The <strong><code>hasIndices</code></strong> property indicates whether or not the "<code>d</code>" flag is used with the regular expression. <code>hasIndices</code> is a read-only property of an individual regular expression instance.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-hasindices.html")}}</div>

<p>{{JS_Property_Attributes(0, 0, 1)}}</p>

<h2 id="Description">Description</h2>

<p>The value of <code>hasIndices</code> is a {{JSxRef("Boolean")}} and <code>true</code> if the "<code>d</code>" flag was used; otherwise, <code>false</code>. The "<code>d</code>" flag indicates that the result of a regular expression match should contain the start and end indices of the substrings of each capture group.</p>

<p>You cannot change this property directly.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_hasIndices">Using <code>hasIndices</code></h3>

<pre class="brush: js">const str1 = 'foo bar foo';

const regex1 = new RegExp('foo', 'gd');

console.log(regex1.hasIndices); // Output: true

console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 3]
console.log(regex1.exec(str1).indices[0]); // Output: Array [8, 11]

const str2 = 'foo bar foo';

const regex2 = new RegExp('foo');

console.log(regex2.hasIndices); // Output: false

console.log(regex2.exec(str2).indices); // Output: undefined
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{JSxRef("RegExp.lastIndex")}}</li>
 <li>{{JSxRef("RegExp.prototype.exec()")}}</li>
 <li>{{JSxRef("RegExp.prototype.dotAll")}}</li>
 <li>{{JSxRef("RegExp.prototype.global")}}</li>
 <li>{{JSxRef("RegExp.prototype.ignoreCase")}}</li>
 <li>{{JSxRef("RegExp.prototype.multiline")}}</li>
 <li>{{JSxRef("RegExp.prototype.source")}}</li>
 <li>{{JSxRef("RegExp.prototype.sticky")}}</li>
 <li>{{JSxRef("RegExp.prototype.unicode")}}</li>
</ul>
