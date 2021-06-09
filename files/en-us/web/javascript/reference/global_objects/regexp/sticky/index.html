---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.sticky
---
<div>{{JSRef}}</div>

<p>The <strong><code>sticky</code></strong> property reflects whether or not the search is sticky (searches in strings only from the index indicated by the {{jsxref("RegExp.lastIndex", "lastIndex")}} property of this regular expression). <code>sticky</code> is a read-only property of an individual regular expression object.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}</div>

<div>{{js_property_attributes(0, 0, 1)}}</div>

<h2 id="Description">Description</h2>

<p>The value of <code>sticky</code> is a {{jsxref("Boolean")}} and true if the "<code>y</code>" flag was used; otherwise, false. The "<code>y</code>" flag indicates that it matches only from the index indicated by the {{jsxref("RegExp.lastIndex", "lastIndex")}} property of this regular expression in the target string (and does not attempt to match from any later indexes). A regular expression defined as both <code>sticky</code> and <code>global</code> ignores the <code>global</code> flag.</p>

<p>You cannot change this property directly. It is read-only.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_a_regular_expression_with_the_sticky_flag">Using a regular expression with the sticky flag</h3>

<pre class="brush: js">var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
</pre>

<h3 id="Anchored_sticky_flag">Anchored sticky flag</h3>

<p>For several versions, Firefox's SpiderMonkey engine had <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=773687">a bug</a> with regard to the <code>^</code> assertion and the sticky flag which allowed expressions starting with the <code>^</code> assertion and using the sticky flag to match when they shouldn't. The bug was introduced some time after Firefox 3.6 (which had the sticky flag but not the bug) and fixed in 2015. Perhaps because of the bug, the ES2015 specification <a href="http://www.ecma-international.org/ecma-262/7.0/index.html#sec-assertion">specifically calls out</a> the fact that:</p>

<blockquote>
<p>When the <code>y</code> flag is used with a pattern, ^ always matches only at the beginning of the input, or (if <code>multiline</code> is <code>true</code>) at the beginning of a line.</p>
</blockquote>

<p>Examples of correct behavior:</p>

<pre class="brush: js">var regex = /^foo/y;
regex.lastIndex = 2;
regex.test('..foo');   // false - index 2 is not the beginning of the string

var regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test('..foo');  // false - index 2 is not the beginning of the string or line
regex2.lastIndex = 2;
regex2.test('.\nfoo'); // true - index 2 is the beginning of a line
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>sticky</code> <code>RegExp</code> flag is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
 <li>{{jsxref("RegExp.lastIndex")}}</li>
 <li>{{JSxRef("RegExp.prototype.dotAll")}}</li>
 <li>{{JSxRef("RegExp.prototype.global")}}</li>
 <li>{{JSxRef("RegExp.prototype.hasIndices")}}</li>
 <li>{{JSxRef("RegExp.prototype.ignoreCase")}}</li>
 <li>{{JSxRef("RegExp.prototype.multiline")}}</li>
 <li>{{JSxRef("RegExp.prototype.source")}}</li>
 <li>{{JSxRef("RegExp.prototype.unicode")}}</li>
</ul>
