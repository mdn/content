---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
tags:
  - Expressions
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular
  - String
browser-compat: javascript.builtins.String.replace
---
<div>{{JSRef}}</div>

<p>The <strong><code>replace()</code></strong> method returns a
    new string with some or all matches of a <code>pattern</code> replaced by a
    <code>replacement</code>. The <code>pattern</code> can be a string or a
  {{jsxref("RegExp")}}, and the <code>replacement</code> can be a string or a function to
  be called for each match. If <code>pattern</code> is a string, only the first occurrence
  will be replaced.</p>

<p>The original string is left unchanged.</p>

<div>{{EmbedInteractiveExample("pages/js/string-replace.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>regexp</var></code> (pattern)</dt>
  <dd>A {{jsxref("RegExp")}} object or literal. The match or matches are replaced with
    <code><var>newSubstr</var></code> or the value returned by the specified
    <code><var>replacerFunction</var></code>.</dd>
  <dt><code><var>substr</var></code></dt>
  <dd>A {{jsxref("String")}} that is to be replaced by <code><var>newSubstr</var></code>.
    It is treated as a literal string and is <em>not</em> interpreted as a regular
    expression. Only the first occurrence will be replaced.</dd>
  <dt><code><var>newSubstr</var></code> (replacement)</dt>
  <dd>The {{jsxref("String")}} that replaces the substring specified by the specified
    <code><var>regexp</var></code> or <code><var>substr</var></code> parameter. A number
    of special replacement patterns are supported; see the "<a
      href="#specifying_a_string_as_a_parameter">Specifying a string as a parameter</a>"
    section below.
    <p>If <code><var>newSubstr</var></code> is an empty string, then the substring given by <code><var>substr</var></code>, or the matches for <code><var>regexp</var></code>, are removed (rather then being replaced).</p>
    </dd>
  <dt><code><var>replacerFunction</var></code> (replacement)</dt>
  <dd>A function to be invoked to create the new substring to be used to replace the
    matches to the given <code><var>regexp</var></code> or <code><var>substr</var></code>.
    The arguments supplied to this function are described in the "<a
      href="#specifying_a_function_as_a_parameter">Specifying a function as a
      parameter</a>" section below.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new string, with some or all matches of a pattern replaced by a replacement.</p>

<h2 id="Description">Description</h2>

<p>This method does not change the calling {{jsxref("String")}} object. It returns a new
  string.</p>

<p>To perform a global search and replace, include the <code>g</code> switch in the
  regular expression.</p>

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
        <code>1</code>-indexed. If a group <code>n</code> is not present (e.g., if group
        is 3), it will be replaced as a literal (e.g., <code>$3</code>).</td>
    </tr>
    <tr>
      <td><code>$&lt;Name&gt;</code></td>
      <td>Where <code>Name</code> is a capturing group name. If the group is not in the
        match, or not in the regular expression, or if a string was passed as the first argument
        to <code>replace</code> instead of a regular expression, this resolves to a literal
        (e.g., <code>$&lt;Name&gt;</code>).
        Only available in browser versions supporting named capturing groups.</td>
    </tr>
  </tbody>
</table>

<h3 id="Specifying_a_function_as_a_parameter">Specifying a function as a parameter</h3>

<p>You can specify a function as the second parameter. In this case, the function will be
  invoked after the match has been performed. The function's result (return value) will be
  used as the replacement string. (<strong>Note:</strong> The above-mentioned special
  replacement patterns do <em>not</em> apply in this case.)</p>

<p>Note that the function will be invoked multiple times for each full match to be
  replaced if the regular expression in the first parameter is global.</p>

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
      <td>The <var>n</var>th string found by a parenthesized capture group (including
        named capturing groups), provided the first argument to <code>replace()</code> was
        a {{jsxref("RegExp")}} object. (Corresponds to <code>$1</code>, <code>$2</code>,
        etc. above.) For example, if <code>/(\a+)(\b+)/</code>, was given, <code>p1</code>
        is the match for <code>\a+</code>, and <code>p2</code> for <code>\b+</code>.</td>
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
    <tr>
      <td><code>groups</code></td>
      <td>In browser versions supporting named capturing groups, will be an object whose
        keys are the used group names, and whose values are the matched portions
        (<code>undefined</code> if not matched).</td>
    </tr>
  </tbody>
</table>

<p>(The exact number of arguments depends on whether the first argument is a
  {{jsxref("RegExp")}} object—and, if so, how many parenthesized submatches it specifies.)
</p>

<p>The following example will set <code>newString</code>
  to <code>'abc - 12345 - #$*%'</code>:</p>

<pre class="brush: js">function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Defining_the_regular_expression_in_replace">Defining the regular expression in
  replace()</h3>

<p>In the following example, the regular expression is defined in <code>replace()</code>
  and includes the ignore case flag.</p>

<pre class="brush: js">let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
</pre>

<p>This logs <code>'Twas the night before Christmas...'</code>.</p>

<div class="notecard note">
  <p><strong>Note:</strong> See <a
      href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">this guide</a> for more
    explanations about regular expressions.</p>
</div>

<h3 id="Using_global_and_ignore_with_replace">Using global and ignore with replace()</h3>

<p>Global replace can only be done with a regular expression. In the following example,
  the regular expression includes the <a
    href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2">global
    and ignore case flags</a> which permits <code>replace()</code> to replace each
  occurrence of <code>'apples'</code> in the string with <code>'oranges'</code>.</p>

<pre class="brush: js">let re = /apples/gi;
let str = 'Apples are round, and apples are juicy.';
let newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
</pre>

<p>This logs <code>'oranges are round, and oranges are juicy'</code>.</p>

<h3 id="Switching_words_in_a_string">Switching words in a string</h3>

<p>The following script switches the words in the string. For the replacement text, the
  script uses <a
    href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">capturing
    groups</a> and the <code>$1</code> and <code>$2</code> replacement patterns.</p>

<pre class="brush: js">let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
</pre>

<p>This logs <code>'Smith, John'</code>.</p>

<h3 id="Using_an_inline_function_that_modifies_the_matched_characters">Using an inline
  function that modifies the matched characters</h3>

<p>In this example, all occurrences of capital letters in the string are converted to
  lower case, and a hyphen is inserted just before the match location. The important thing
  here is that additional operations are needed on the matched item before it is given
  back as a replacement.</p>

<p>The replacement function accepts the matched snippet as its parameter, and uses it to
  transform the case and concatenate the hyphen before returning.</p>

<pre class="brush: js">function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset &gt; 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
</pre>

<p>Given <code>styleHyphenFormat('borderTop')</code>, this returns
  <code>'border-top'</code>.</p>

<p>Because we want to further transform the <em>result</em> of the match before the final
  substitution is made, we must use a function. This forces the evaluation of the match
  prior to the {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} method. If we
  had tried to do this using the match without a function, the
  {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} would have no effect.</p>

<pre class="brush: js example-bad">let newString = propertyName.replace(/[A-Z]/g, '-' + '$&amp;'.toLowerCase());  // won't work
</pre>

<p>This is because <code>'$&amp;'.toLowerCase()</code> would first be evaluated as a
  string literal (resulting in the same <code>'$&amp;'</code>) before using the characters
  as a pattern.</p>

<h3 id="Replacing_a_Fahrenheit_degree_with_its_Celsius_equivalent">Replacing a Fahrenheit
  degree with its Celsius equivalent</h3>

<p>The following example replaces a Fahrenheit degree with its equivalent Celsius degree.
  The Fahrenheit degree should be a number ending with <code>"F"</code>. The function
  returns the Celsius number ending with <code>"C"</code>. For example, if the input
  number is <code>"212F"</code>, the function returns <code>"100C"</code>. If the number
  is <code>"0F"</code>, the function returns <code>"-17.77777777777778C"</code>.</p>

<p>The regular expression <code>test</code> checks for any number that ends with
  <code>F</code>. The number of Fahrenheit degree is accessible to the function through
  its second parameter, <code>p1</code>. The function sets the Celsius number based on the
  Fahrenheit degree passed in a string to the <code>f2c()</code> function.
  <code>f2c()</code> then returns the Celsius number. This function approximates Perl's
  <code>s///e</code> flag.</p>

<pre class="brush: js">function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.prototype.replaceAll", "String.prototype.replaceAll()")}}</li>
  <li>{{jsxref("String.prototype.match", "String.prototype.match()")}}</li>
  <li>{{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}</li>
</ul>
