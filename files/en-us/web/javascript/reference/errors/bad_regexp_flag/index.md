---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
tags:
  - Error
  - JavaScript
  - SyntaxError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "invalid regular expression flag" occurs when the flags,
  defined after the second slash in regular expression literal, are not one of
  <code>g</code>, <code>i</code>, <code>m</code>, <code>s</code>, <code>u</code>, or
  <code>y</code>.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">SyntaxError: Syntax error in regular expression (Edge)
SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There are invalid regular expression flags in the code. In a regular expression
  literal, which consists of a pattern enclosed between slashes, the flags are defined
  after the second slash. They can also be defined in the constructor function of the
  {{jsxref("RegExp")}} object (second parameter). Regular expression flags can be used
  separately or together in any order, but there are only six of them in ECMAScript.</p>

<p>To include a flag with the regular expression, use this syntax:</p>

<pre class="brush: js">var re = /pattern/flags;
</pre>

<p>or</p>

<pre class="brush: js">var re = new RegExp('pattern', 'flags');</pre>

<table class="standard-table">
  <caption>Regular expression flags</caption>
  <thead>
    <tr>
      <th scope="col">Flag</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>g</code></td>
      <td>Global search.</td>
    </tr>
    <tr>
      <td>i</td>
      <td>Case-insensitive search.</td>
    </tr>
    <tr>
      <td>m</td>
      <td>Multi-line search.</td>
    </tr>
    <tr>
      <td>s</td>
      <td>Allow <code>.</code> to match newlines (added in ECMAScript 2018)</td>
    </tr>
    <tr>
      <td>u</td>
      <td>Unicode; treat pattern as a sequence of Unicode code points</td>
    </tr>
    <tr>
      <td>y</td>
      <td>Perform a "sticky" search that matches starting at the current position in the
        target string. See {{jsxref("RegExp.sticky", "sticky")}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>There are only six valid regular expression flags.</p>

<pre class="brush: js example-bad">/foo/bar;

// SyntaxError: invalid regular expression flag "b"
</pre>

<p>Did you intend to create a regular expression? An expression containing two slashes is
  interpreted as a regular expression literal.</p>

<pre class="brush: js example-bad">let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
</pre>

<p>Or did you mean to create a string instead? Add single or double quotes to create a
  string literal.</p>

<pre class="brush: js example-good">let obj = {
  url: '/docs/Web'
};</pre>

<h3 id="Valid_regular_expression_flags">Valid regular expression flags</h3>

<p>See the table above for the six valid regular expression flags that are allowed in
  JavaScript.</p>

<pre class="brush: js example-good">/foo/g;
/foo/gims;
/foo/uy;
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular
      expressions</a></li>
  <li><a href="https://xregexp.com/flags/">XRegEx flags</a> – regular expression library
    that provides four new flags (<code>n</code>, <code>s</code>, <code>x</code>,
    <code>A</code>)</li>
</ul>
