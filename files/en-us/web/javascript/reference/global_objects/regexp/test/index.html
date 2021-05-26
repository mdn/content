---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
browser-compat: javascript.builtins.RegExp.test
---
<div>{{JSRef}}</div>

<p>The <strong><code>test()</code></strong> method executes a search for a match between a
  regular expression and a specified string. Returns <code>true</code> or
  <code>false</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">test(str)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>str</var></code></dt>
  <dd>The string against which to match the regular expression.</dd>
</dl>

<h3 id="Returns">Returns</h3>

<p><code>true</code> if there is a match between the regular expression and the string
  <code><var>str</var></code>. Otherwise, <code>false</code>.</p>

<h2 id="Description">Description</h2>

<p>Use <code>test()</code> whenever you want to know whether a pattern is found in a
  string. <code>test()</code> returns a boolean, unlike the
  {{jsxref("String.prototype.search()")}} method (which returns the index of a match, or
  <code>-1</code> if not found).</p>

<p>To get more information (but with slower execution), use the
  {{jsxref("RegExp.prototype.exec()", "exec()")}} method. (This is similar to the
  {{jsxref("String.prototype.match()")}} method.)</p>

<p>As with <code>exec()</code> (or in combination with it), <code>test()</code> called
  multiple times on the same global regular expression instance will advance past the
  previous match.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_test">Using test()</h3>

<p>Simple example that tests if "<code>hello</code>" is contained at the very beginning of
  a string, returning a boolean result.</p>

<pre class="brush: js">const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true
</pre>

<p>The following example logs a message which depends on the success of the test:</p>

<pre class="brush: js">function testInput(re, str) {
  let midstring;
  if (re.test(str)) {
    midstring = 'contains';
  } else {
    midstring = 'does not contain';
  }
  console.log(`${str} ${midstring} ${re.source}`);
}
</pre>

<h3 id="Using_test_on_a_regex_with_the_global_flag">Using test() on a regex with the
  "global" flag</h3>

<p>When a regex has the <a
    href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2">global
    flag</a> set, <code>test()</code> will advance the {{jsxref("RegExp.lastIndex",
  "lastIndex")}} of the regex. ({{jsxref("RegExp.prototype.exec()")}} also advances the
  <code>lastIndex</code> property.)</p>

<p>Further calls to <code>test(<var>str</var>)</code> will resume searching
  <code><var>str</var></code> starting from <code>lastIndex</code>. The
  <code>lastIndex</code> property will continue to increase each time <code>test()</code>
  returns <code>true</code>.</p>

<div class="notecard note">
  <p><strong>Note:</strong> As long as <code>test()</code> returns <code>true</code>,
    <code>lastIndex</code> will <em>not</em> reset—even when testing a different string!
  </p>
</div>

<p>When <code>test()</code> returns <code>false</code>, the calling regex's
  <code>lastIndex</code> property will reset to <code>0</code>.</p>

<p>The following example demonstrates this behavior:</p>

<pre class="brush: js">const regex = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0
regex.test('foo')     // true

// regex.lastIndex is now at 3
regex.test('foo')     // false

// regex.lastIndex is at 0
regex.test('barfoo')  // true

// regex.lastIndex is at 6
regex.test('foobar')  //false

// regex.lastIndex is at 0
// (...and so on)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular
      Expressions</a> chapter in the <a href="/en-US/docs/Web/JavaScript/Guide">JavaScript
      Guide</a></li>
  <li>{{jsxref("RegExp")}}</li>
  <li>{{jsxref("RegExp.prototype")}}</li>
</ul>
