---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
- JavaScript
- Method
- Prototype
- Reference
- Regular Expressions
- String
browser-compat: javascript.builtins.String.match
---
<div>{{JSRef}}</div>

<p>The <strong><code>match()</code></strong> method retrieves the result of matching a
  <em>string</em> against a <a
    href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">regular expression</a>.
</p>

<div>{{EmbedInteractiveExample("pages/js/string-match.html", "shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">match(regexp)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>regexp</var></code></dt>
  <dd>
    <p>A regular expression object.</p>
    <p>If <code><var>regexp</var></code> is a non-<code>RegExp</code> object, it is
    implicitly converted to a {{jsxref("RegExp")}} by using
    <code>new RegExp(<var>regexp</var>)</code>.</p>
    <p>If you don't give any parameter and use the <code>match()</code> method directly,
    you will get an {{jsxref("Array")}} with an empty string: <code>[""]</code>.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{jsxref("Array")}} whose contents depend on the presence or absence of the global
  (<code>g</code>) flag, or {{jsxref("null")}} if no matches are found.</p>

<ul>
  <li>If the <code>g</code> flag is used, all results matching the complete regular
    expression will be returned, but capturing groups will not.</li>
  <li>if the <code>g</code> flag is not used, only the first complete match and its
    related capturing groups are returned. In this case, the returned item will have
    additional properties as described below.</li>
</ul>

<h4 id="Additional_properties">Additional properties</h4>

<p>As explained above, some results contain additional properties as described below.</p>

<dl>
  <dt><code>groups</code></dt>
  <dd>An object of named capturing groups whose keys are the names and values are the
    capturing groups or {{jsxref("undefined")}} if no named capturing groups were defined.
    See <a
      href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Groups
      and Ranges</a> for more information.</dd>
  <dt><code>index</code></dt>
  <dd>The index of the search at which the result was found.</dd>
  <dt><code>input</code></dt>
  <dd>A copy of the search string.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>If the regular expression does not include the <code>g</code> flag,
  <code>str.match()</code> will return the same result as
  {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}.</p>

<h3 id="Other_methods">Other methods</h3>

<ul>
  <li>If you need to know if a string matches a regular expression {{jsxref("RegExp")}},
    use {{jsxref("RegExp.prototype.test()", "RegExp.test()")}}.</li>
  <li>If you only want the first match found, you might want to use
    {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} instead.</li>
  <li>If you want to obtain capture groups and the global flag is set, you need to use
    {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} or
    {{jsxref("String.prototype.matchAll()")}} instead.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_match">Using match()</h3>

<p>In the following example, <code>match()</code> is used to find '<code>Chapter</code>'
  followed by 1 or more numeric characters followed by a decimal point and numeric
  character 0 or more times.</p>

<p>The regular expression includes the <code>i</code> flag so that upper/lower case
  differences will be ignored.</p>

<pre class="brush: js">const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.</pre>

<h3 id="Using_global_and_ignore_case_flags_with_match">Using global and ignore case flags
  with match()</h3>

<p>The following example demonstrates the use of the global and ignore case flags with
  <code>match()</code>. All letters <code>A</code> through <code>E</code> and
  <code>a</code> through <code>e</code> are returned, each its own element in the array.
</p>

<pre class="brush: js">const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
</pre>

<div class="notecard note">
  <p><strong>Note:</strong> See also {{jsxref("String.prototype.matchAll()")}} and <a
      href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags">Advanced
      searching with flags</a>.</p>
</div>

<h3 id="Using_named_capturing_groups">Using named capturing groups</h3>

<p>In browsers which support named capturing groups, the following code captures
  "<code>fox</code>" or "<code>cat</code>" into a group named "<code>animal</code>":</p>

<pre class="brush: js">const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

const capturingRegex = /(?&lt;animal&gt;fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
</pre>

<h3 id="Using_match_with_no_parameter">Using match() with no parameter</h3>

<pre class="brush: js">const str = "Nothing will come of nothing.";

str.match();   // returns [""]</pre>

<h3 id="A_non-RegExp_object_as_the_parameter">A non-RegExp object as the parameter</h3>

<p>When the <code><var>regexp</var></code> parameter is a string or a number, it is
  implicitly converted to a {{jsxref("RegExp")}} by using
  <code>new RegExp(<var>regexp</var>)</code>.</p>

<p>If it is a positive number with a positive sign, <code>RegExp()</code> will ignore the
  positive sign.</p>

<pre class="brush: js">const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.prototype.matchAll()")}}</li>
  <li>{{jsxref("RegExp")}}</li>
  <li>{{jsxref("RegExp.prototype.exec()")}}</li>
  <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
