---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
tags:
- JavaScript
- Method
- Prototype
- Reference
- String
- regex
- Polyfill
browser-compat: javascript.builtins.String.replaceAll
---
<div>{{JSRef}}</div>

<p>The <strong><code>replaceAll()</code></strong> method returns
    a new string with all matches of a <code>pattern</code> replaced by a
    <code>replacement</code>. The <code>pattern</code> can be a string or a
  {{jsxref("RegExp")}}, and the <code>replacement</code> can be a string or a function to
  be called for each match.</p>

<p>The original string is left unchanged.</p>

<div>{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
replaceAll(regexp, newSubstr)
replaceAll(regexp, replacerFunction)

replaceAll(substr, newSubstr)
replaceAll(substr, replacerFunction)
</pre>

<div class="notecard note">
  <p><strong>Note:</strong> When using a `<var>regexp</var>` you have to set the global ("g") flag; otherwise, it
    will throw a <code>TypeError</code>: "replaceAll must be called with a global RegExp".
  </p>
</div>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>regexp</var></code> (pattern)</dt>
  <dd>A {{jsxref("RegExp")}} object or literal with the global flag. The matches are
    replaced with <code><var>newSubstr</var></code> or the value returned by the specified
    <code><var>replacerFunction</var></code>. A RegExp without the global ("g") flag will throw a
    <code>TypeError</code>: "replaceAll must be called with a global RegExp".</dd>
  <dt><code><var>substr</var></code></dt>
  <dd>A {{jsxref("String")}} that is to be replaced by <code><var>newSubstr</var></code>.
    It is treated as a literal string and is <em>not</em> interpreted as a regular
    expression.</dd>
  <dt><code><var>newSubstr</var></code> (replacement)</dt>
  <dd>The {{jsxref("String")}} that replaces the substring specified by the specified
    <code><var>regexp</var></code> or <code><var>substr</var></code> parameter. A number
    of special replacement patterns are supported; see the "<a
      href="#Specifying_a_string_as_a_parameter">Specifying a string as a parameter</a>"
    section below.</dd>
  <dt><code><var>replacerFunction</var></code> (replacement)</dt>
  <dd>A function to be invoked to create the new substring to be used to replace the
    matches to the given <code><var>regexp</var></code> or <code><var>substr</var></code>.
    The arguments supplied to this function are described in the "<a
      href="#Specifying_a_function_as_a_parameter">Specifying a function as a
      parameter</a>" section below.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new string, with all matches of a pattern replaced by a replacement.</p>

<h2 id="Description">Description</h2>

<p>This method does not change the calling {{jsxref("String")}} object. It returns a new
  string.</p>

<h3 id="Specifying_a_string_as_a_parameter">Specifying a string as a parameter</h3>

<p>The replacement string can include the following special replacement patterns:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">Pattern</th>
      <th class="header" scope="col">Inserts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$$</code></td>
      <td>Inserts a <code>"$"</code>.</td>
    </tr>
    <tr>
      <td><code>$&amp;</code></td>
      <td>Inserts the matched substring.</td>
    </tr>
    <tr>
      <td><code>$`</code></td>
      <td>Inserts the portion of the string that precedes the matched substring.</td>
    </tr>
    <tr>
      <td><code>$'</code></td>
      <td>Inserts the portion of the string that follows the matched substring.</td>
    </tr>
    <tr>
      <td><code>$<var>n</var></code></td>
      <td>Where <code><var>n</var></code> is a positive integer less than 100, inserts the
        <code><var>n</var></code>th parenthesized submatch string, provided the first
        argument was a {{jsxref("RegExp")}} object. Note that this is
        <code>1</code>-indexed.</td>
    </tr>
  </tbody>
</table>

<h3 id="Specifying_a_function_as_a_parameter">Specifying a function as a parameter</h3>

<p>You can specify a function as the second parameter. In this case, the function will be
  invoked after the match has been performed. The function's result (return value) will be
  used as the replacement string. (<strong>Note:</strong> The above-mentioned special
  replacement patterns do <em>not</em> apply in this case.)</p>

<p>Note that if the first argument of an <code>replaceAll()</code> invocation is a {{jsxref("RegExp")}} object or regular expression literal, the function will be invoked multiple times.</p>

<p>The arguments to the function are as follows:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">Possible name</th>
      <th class="header" scope="col">Supplied value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>match</code></td>
      <td>The matched substring. (Corresponds to <code>$&amp;</code> above.)</td>
    </tr>
    <tr>
      <td><code>p1, p2, ...</code></td>
      <td>The <var>n</var>th string found by a parenthesized capture group, provided the
        first argument to <code>replaceAll()</code> was a {{jsxref("RegExp")}} object.
        (Corresponds to <code>$1</code>, <code>$2</code>, etc. above.) For example,
        if <code>/(\a+)(\b+)/</code>, was given, <code>p1</code> is the match for
        <code>\a+</code>, and <code>p2</code> for <code>\b+</code>.</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>The offset of the matched substring within the whole string being examined. (For
        example, if the whole string was <code>'abcd'</code>, and the matched substring
        was <code>'bc'</code>, then this argument will be <code>1</code>.)</td>
    </tr>
    <tr>
      <td><code>string</code></td>
      <td>The whole string being examined.</td>
    </tr>
  </tbody>
</table>

<p>(The exact number of arguments depends on whether the first argument is a
  {{jsxref("RegExp")}} object—and, if so, how many parenthesized submatches it specifies.)
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_replaceAll">Using replaceAll</h3>

<pre class="brush: js">'aabbcc'.replaceAll('b', '.');
// 'aa..cc'</pre>

<h3 id="Non-global_regex_throws">Non-global regex throws</h3>

<p>When using a regular expression search value, it must be global. This won't work:</p>

<pre class="brush: js; example-bad">'aabbcc'.replaceAll(/b/, '.');
TypeError: replaceAll must be called with a global RegExp
</pre>

<p>This will work:</p>

<pre class="brush: js example-good">'aabbcc'.replaceAll(/b/g, '.');
"aa..cc"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>String.prototype.replaceAll</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
  <li>{{jsxref("String.prototype.replace", "String.prototype.replace()")}}</li>
  <li>{{jsxref("String.prototype.match", "String.prototype.match()")}}</li>
  <li>{{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}</li>
</ul>
