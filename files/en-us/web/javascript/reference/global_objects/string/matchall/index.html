---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
tags:
- JavaScript
- Method
- Prototype
- Reference
- Regular Expressions
- String
- Polyfill
browser-compat: javascript.builtins.String.matchAll
---
<div>{{JSRef}}</div>

<p>The <strong><code>matchAll()</code></strong> method returns an iterator of all results
  matching a <var>string</var> against a <em><a
      href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">regular
      expression</a></em>, including <a
    href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">capturing
    groups</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/string-matchall.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">matchAll(regexp)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>regexp</var></code></dt>
  <dd>
    <p>A regular expression object.</p>

    <p>If a non-<code>RegExp</code> object <code><var>obj</var></code> is passed, it is
      implicitly converted to a {{jsxref("RegExp")}} by using
      <code>new RegExp(<var>obj</var>)</code>.</p>

    <p>The <code>RegExp</code> object must have the <code>/g</code> flag, otherwise a
      <code>TypeError</code> will be thrown.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An <a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">iterator</a>
  (which is not a restartable iterable) of matches.</p>

<p>Each match is an array (with extra properties <code>index</code> and
  <code>input</code>; see the return value for {{jsxref("RegExp.exec")}}). The match
  array has the matched text as the first item, and then one item for each
  parenthetical capture group of the matched text.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Regexp.exec_and_matchAll">Regexp.exec() and matchAll()</h3>

<p>Prior to the addition of <code>matchAll</code> to JavaScript, it was possible to use
  calls to <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec">regexp.exec</a>
  (and regexes with the <code>/g</code> flag) in a loop to obtain all the matches:</p>

<pre class="brush: js">const regexp = new RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
  // expected output: "Found football start=6 end=14."
  // expected output: "Found foosball start=16 end=24."
}</pre>

<p>With <code>matchAll</code> available, you can avoid the {{jsxref("Statements/while",
  "while")}} loop and <code>exec</code> with <code>g</code>.</p>

<p>Instead, by using <code>matchAll</code>, you get an iterator to use with the more
  convenient {{jsxref("Statements/for...of", "for...of")}},
  {{jsxref("Operators/Spread_syntax", "array spread")}}, or {{jsxref("Array.from()")}}
  constructs:</p>

<pre class="brush: js">const regexp = new RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m =&gt; m[0]);
// Array [ "football", "foosball" ]</pre>

<p><code>matchAll</code> will throw an exception if the <code>g</code> flag is missing.
</p>

<pre class="brush: js">const regexp = new RegExp('[a-c]','');
const str = 'abc';
str.matchAll(regexp);
// TypeError
</pre>

<p><code>matchAll</code> internally makes a clone of the
  <code><var>regexp</var></code>—so, unlike {{jsxref("Global_Objects/RegExp/exec",
  "regexp.exec()")}}, <code>lastIndex</code> does not change as the string is scanned.</p>

<pre class="brush: js">const regexp = new RegExp('[a-c]','g');
regexp.lastIndex = 1;
const str = 'abc';
Array.from(str.matchAll(regexp), m =&gt; `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]</pre>

<h3 id="Better_access_to_capturing_groups_than_String.prototype.match">Better access to
  capturing groups (than String.prototype.match())</h3>

<p>Another compelling reason for <code>matchAll</code> is the improved access to capture
  groups.</p>

<p>Capture groups are ignored when using {{jsxref("Global_Objects/String/match",
  "match()")}} with the global <code>/g</code> flag:</p>

<pre class="brush: js">let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']</pre>

<p>Using <code>matchAll</code>, you can access capture groups easily:</p>

<pre class="brush: js">let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.prototype.matchAll</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.match()")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Using regular
      expressions in JavaScript</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Capturing
      groups</a></li>
  <li>{{jsxref("RegExp")}}</li>
  <li>{{jsxref("RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
