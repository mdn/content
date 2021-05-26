---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
tags:
- JavaScript
- Method
- Prototype
- Reference
- RegExp
- Regular Expressions
browser-compat: javascript.builtins.RegExp.exec
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <strong><code>exec()</code></strong> method executes a
    search for a match in a specified string. Returns a result array, or
    {{jsxref("null")}}.</span></p>

<p>JavaScript {{jsxref("RegExp")}} objects are <strong>stateful</strong> when they have
  the {{jsxref("RegExp.global", "global")}} or {{jsxref("RegExp.sticky", "sticky")}} flags
  set (e.g. <code>/foo/g</code> or <code>/foo/y</code>). They store a
  {{jsxref("RegExp.lastIndex", "lastIndex")}} from the previous match. Using this
  internally, <code>exec()</code> can be used to iterate over multiple matches in a string
  of text (with capture groups), as opposed to getting just the matching strings with
  {{jsxref("String.prototype.match()")}}.</p>

<p>A newer function has been proposed to simplify matching multiple parts of a string
  (with capture groups): {{jsxref("String.prototype.matchAll()")}}.</p>

<p>If you are executing a match to find <code>true</code> or <code>false</code>, use
  {{jsxref("RegExp.prototype.test()")}} method instead.</p>
<p>If you are executing a match to find its index position in the string, use
  {{jsxref("String.prototype.search()")}} method instead.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">exec(str)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>str</var></code></dt>
  <dd>The string against which to match the regular expression.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>If the match succeeds, the <code>exec()</code> method returns an array (with extra
  properties <code>index</code>, <code>input</code>, and if the <code>d</code> flag is
  set, <code>indices</code>; see below) and updates the
  {{jsxref("RegExp.lastIndex", "lastIndex")}} property of the regular expression object.
  The returned array has the matched text as the first item, and then one item for each
  parenthetical capture group of the matched text.</p>

<p>If the match fails, the <code>exec()</code> method returns {{jsxref("null")}}, and sets
  {{jsxref("RegExp.lastIndex", "lastIndex")}} to <code>0</code>.</p>

<h2 id="Description">Description</h2>

<p>Consider the following example:</p>

<pre class="brush: js">// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
let re = /quick\s(brown).+?(jumps)/igd;
let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
</pre>

<p>The following table shows the state of <code>result</code> after running this script:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Property/Index</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[0]</code></td>
      <td>The full string of characters matched</td>
      <td><code>"Quick Brown Fox Jumps"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[<var>n</var>]</code></td>
      <td>
        <p>The parenthesized substring matches, if any.</p>

        <p>The number of possible parenthesized substrings is unlimited.</p>
      </td>
      <td>
        <p><code>result[1] === "Brown"</code></p>

        <p><code>result[2] === "Jumps"</code></p>
      </td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>The 0-based index of the match in the string.</td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td><code>indices</code></td>
      <td>An array where each entry represents a substring match.
        Each substring match itself is an array where the first entry
        represents its start index and the second entry its end index.<br/>
        The <code>indices</code> array additionally has a <code>groups</code>
        property which holds an object of all named capturing groups. The keys
        are the names of the capturing groups and each value is an array with
        the first item being the start entry and the second entry being the
        end index of the capturing group. If the regular expression doesn't
        contain any capturing groups, <code>groups</code> is <code>undefined</code>.
      </td>
      <td>
        <p><code>indices[0] === Array [ 4, 25 ]</code></p>
        <p><code>indices[1] === Array [ 10, 15 ]</code></p>
        <p><code>indices[2] === Array [ 20, 25 ]</code></p>
        <p><code>indices.groups === undefined</code></p>
        <p><code>indices.length === 3</code></p>
      </td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>The original string that was matched against.</td>
      <td><code>The Quick Brown Fox Jumps Over The Lazy Dog</code></td>
    </tr>
  </tbody>
</table>

<p>The following table shows the state of <code>re</code> after running this script:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Property/Index</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>lastIndex</code></td>
      <td>
        <p>The index at which to start the next match.</p>

        <p>If <code>g</code> is absent, this will always be <code>0</code>.</p>
      </td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <td><code>dotAll</code></td>
      <td>
        Indicates if the <code>s</code> flag was used to let <code>.</code>
        match newlines.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>hasIndices</code></td>
      <td>
        Indicates if the <code>d</code> flag was used to generate an
        <code>indices</code> property in the returned value containing
        start and end indices of the substring matches.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>ignoreCase</code></td>
      <td>Indicates if the <code>i</code> flag was used to ignore case.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>global</code></td>
      <td>Indicates if the <code>g</code> flag was used for a global match.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>multiline</code></td>
      <td>Indicates if the <code>m</code> flag was used to search across multiple lines.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>The text of the pattern.</td>
      <td><code>quick\s(brown).+?(jumps)</code></td>
    </tr>
    <tr>
      <td><code>sticky</code></td>
      <td>
        Indicates if the <code>y</code> flag was used to match
        only from the index indicated by the <code>lastIndex</code>
        property.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>unicode</code></td>
      <td>
        Indicates if the <code>u</code> flag was used to
        treat the pattern as a sequence of Unicode code points.
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">Examples</h2>

<h3 id="Finding_successive_matches">Finding successive matches</h3>

<p>If your regular expression uses the "<code>g</code>" flag, you can use the
  <code>exec()</code> method multiple times to find successive matches in the same string.
  When you do so, the search starts at the substring of <code><var>str</var></code>
  specified by the regular expression's {{jsxref("RegExp.lastIndex", "lastIndex")}}
  property ({{jsxref("RegExp.prototype.test()", "test()")}} will also advance the
  {{jsxref("RegExp.lastIndex", "lastIndex")}} property). Note that the
  {{jsxref("RegExp.lastIndex", "lastIndex")}} property will not be reset when searching a
  different string, it will start its search at its existing {{jsxref("RegExp.lastIndex",
  "lastIndex")}} .</p>

<p>For example, assume you have this script:</p>

<pre class="brush: js">let myRe = /ab*/g;
let str = 'abbcdefabh';
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}
</pre>

<p>This script displays the following text:</p>

<pre class="brush: plain">Found abb. Next match starts at 3
Found ab. Next match starts at 9
</pre>

<div class="warning">
  <p><strong>Warning:</strong> <strong>Do <em>not</em> place the regular expression
      literal (or {{jsxref("RegExp")}} constructor) within the <code>while</code>
      condition! </strong></p>

  <p>It will create an infinite loop if there is a match, due to the
    {{jsxref("RegExp.lastIndex", "lastIndex")}} property being reset upon each iteration.
  </p>

  <p>Also, be sure that the global flag ("<code>g</code>") is set, or it will also cause
    an infinite loop.</p>
</div>

<h3 id="Using_exec_with_RegExp_literals">Using exec() with RegExp literals</h3>

<p>You can also use <code>exec()</code> without creating a {{jsxref("RegExp")}} object
  explicitly:</p>

<pre class="brush: js">let matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches[1]);
</pre>

<p>This will log a message containing <code>'hello world!'</code>.</p>

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
</ul>
