---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
tags:
  - Class
  - JavaScript
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp
---
<div>{{JSRef}}</div>

<p>The <strong><code>RegExp</code></strong> object is used for matching text with a pattern.</p>

<p>For an introduction to regular expressions, read the <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions chapter</a> in the <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">JavaScript Guide</a>.</p>

<h2 id="Description">Description</h2>

<h3 id="Literal_notation_and_constructor">Literal notation and constructor</h3>

<p>There are two ways to create a <code>RegExp</code> object: a <em>literal notation</em> and a <em>constructor</em>.</p>

<ul>
 <li><strong>The literal notation's</strong> parameters are enclosed between slashes and do not use quotation marks.</li>
 <li><strong>The constructor function's</strong> parameters are not enclosed between slashes but do use quotation marks.</li>
</ul>

<p>The following three expressions create the same regular expression object:</p>

<pre class="brush: js">let re = /ab+c/i; // literal notation
let re = new RegExp('ab+c', 'i') // constructor with string pattern as first argument
let re = new RegExp(/ab+c/, 'i') // constructor with regular expression literal as first argument (Starting with ECMAScript 6)
</pre>

<p>The literal notation results in compilation of the regular expression when the expression is evaluated. Use literal notation when the regular expression will remain constant. For example, if you use literal notation to construct a regular expression used in a loop, the regular expression won't be recompiled on each iteration.</p>

<p>The constructor of the regular expression object—for example, <code>new RegExp('ab+c')</code>—results in runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and obtain it from another source, such as user input.</p>

<h3 id="Flags_in_constructor">Flags in constructor</h3>

<p>Starting with ECMAScript 6, <code>new RegExp(/ab+c/, 'i')</code> no longer throws a {{jsxref("TypeError")}} (<code>"can't supply flags when constructing one RegExp from another"</code>) when the first argument is a <code>RegExp</code> and the second <code><var>flags</var></code> argument is present. A new <code>RegExp</code> from the arguments is created instead.</p>

<p>When using the constructor function, the normal string escape rules (preceding special characters with <code>\</code> when included in a string) are necessary.</p>

<p>For example, the following are equivalent:</p>

<pre class="brush: js">let re = /\w+/
let re = new RegExp('\\w+')
</pre>

<h3 id="Perl-like_RegExp_properties">Perl-like RegExp properties</h3>

<p>Note that several of the {{JSxRef("RegExp")}} properties have both long and short (Perl-like) names. Both names always refer to the same value. (Perl is the programming language from which JavaScript modeled its regular expressions.). See also <a href="/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp_properties">deprecated <code>RegExp</code> properties.</a></p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("RegExp/RegExp", "RegExp()")}}</dt>
 <dd>Creates a new <code>RegExp</code> object.</dd>
</dl>

<h2 id="Static_properties">Static properties</h2>

<dl>
 <dt>{{jsxref("RegExp.@@species", "get RegExp[@@species]")}}</dt>
 <dd>The constructor function that is used to create derived objects.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{JSxRef("RegExp.prototype.flags")}}</dt>
 <dd>A string that contains the flags of the <code>RegExp</code> object.</dd>
 <dt>{{JSxRef("RegExp.prototype.dotAll")}}</dt>
 <dd>Whether <code>.</code> matches newlines or not.</dd>
 <dt>{{JSxRef("RegExp.prototype.global")}}</dt>
 <dd>Whether to test the regular expression against all possible matches in a string, or only against the first.</dd>
 <dt>{{JSxRef("RegExp.prototype.hasIndices")}}</dt>
 <dd>Whether the regular expression result exposes the start and end indices of captured substrings.</dd>
 <dt>{{JSxRef("RegExp.prototype.ignoreCase")}}</dt>
 <dd>Whether to ignore case while attempting a match in a string.</dd>
 <dt>{{JSxRef("RegExp.prototype.multiline")}}</dt>
 <dd>Whether or not to search in strings across multiple lines.</dd>
 <dt>{{JSxRef("RegExp.prototype.source")}}</dt>
 <dd>The text of the pattern.</dd>
 <dt>{{JSxRef("RegExp.prototype.sticky")}}</dt>
 <dd>Whether or not the search is sticky.</dd>
 <dt>{{JSxRef("RegExp.prototype.unicode")}}</dt>
 <dd>Whether or not Unicode features are enabled.</dd>
 <dt>{{jsxref("RegExp.lastIndex", "RegExp: lastIndex")}}</dt>
 <dd>The index at which to start the next match.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{JSxRef("RegExp.prototype.compile()")}} {{deprecated_inline}}</dt>
 <dd>(Re-)compiles a regular expression during execution of a script.</dd>
 <dt>{{JSxRef("RegExp.prototype.exec()")}}</dt>
 <dd>Executes a search for a match in its string parameter.</dd>
 <dt>{{JSxRef("RegExp.prototype.test()")}}</dt>
 <dd>Tests for a match in its string parameter.</dd>
 <dt>{{JSxRef("RegExp.prototype.toString()")}}</dt>
 <dd>Returns a string representing the specified object. Overrides the {{JSxRef("Object.prototype.toString()")}} method.</dd>
 <dt>{{JSxRef("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</dt>
 <dd>Performs match to given string and returns match result.</dd>
 <dt>{{JSxRef("RegExp.prototype.@@matchAll()", "RegExp.prototype[@@matchAll]()")}}</dt>
 <dd>Returns all matches of the regular expression against a string.</dd>
 <dt>{{JSxRef("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</dt>
 <dd>Replaces matches in given string with new substring.</dd>
 <dt>{{JSxRef("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</dt>
 <dd>Searches the match in given string and returns the index the pattern found in the string.</dd>
 <dt>{{JSxRef("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</dt>
 <dd>Splits given string into an array by separating the string into substrings.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_a_regular_expression_to_change_data_format">Using a regular expression to change data format</h3>

<p>The following script uses the {{jsxref("String.prototype.replace()", "replace()")}} method of the {{jsxref("Global_Objects/String", "String")}} instance to match a name in the format <em>first last</em> and output it in the format <em>last, first</em>.</p>

<p>In the replacement text, the script uses <code>$1</code> and <code>$2</code> to indicate the results of the corresponding matching parentheses in the regular expression pattern.</p>

<pre class="brush: js">let re = /(\w+)\s(\w+)/
let str = 'John Smith'
let newstr = str.replace(re, '$2, $1')
console.log(newstr)
</pre>

<p>This displays <code>"Smith, John"</code>.</p>

<h3 id="Using_regular_expression_to_split_lines_with_different_line_endingsends_of_lineline_breaks">Using regular expression to split lines with different line endings/ends of line/line breaks</h3>

<p>The default line ending varies depending on the platform (Unix, Windows, etc.). The line splitting provided in this example works on all platforms.</p>

<pre class="brush: js">let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
let lines = text.split(/\r\n|\r|\n/)
console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
</pre>

<p>Note that the order of the patterns in the regular expression matters.</p>

<h3 id="Using_regular_expression_on_multiple_lines">Using regular expression on multiple lines</h3>

<pre class="brush: js">let s = 'Please yes\nmake my day!'

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
</pre>

<h3 id="Using_a_regular_expression_with_the_sticky_flag">Using a regular expression with the sticky flag</h3>

<p>The {{JSxRef("Global_Objects/RegExp/sticky", "sticky")}} flag indicates that the regular expression performs sticky matching in the target string by attempting to match starting at {{jsxref("RegExp.prototype.lastIndex")}}.</p>

<pre class="brush: js">let str = '#foo#'
let regex = /foo/y

regex.lastIndex = 1
regex.test(str)      // true
regex.lastIndex = 5
regex.test(str)      // false (lastIndex is taken into account with sticky flag)
regex.lastIndex      // 0 (reset after match failure)</pre>

<h3 id="The_difference_between_the_sticky_flag_and_the_global_flag">The difference between the sticky flag and the global flag</h3>

<p>With the sticky flag <code>y</code>, the next match has to happen at the <code>lastIndex</code> position, while with the global flag <code>g</code>, the match can happen at the <code>lastIndex</code> position or later:</p>

<pre class="brush: js">re = /\d/y;
while (r = re.exec("123 456")) console.log(r, "AND re.lastIndex", re.lastIndex);

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... and no more match.</pre>

<p>With the global flag <code>g</code>, all 6 digits would be matched, not just 3.</p>

<h3 id="Regular_expression_and_Unicode_characters">Regular expression and Unicode characters</h3>

<p><code>\w</code> and <code>\W</code> only matches ASCII based characters; for example, <code>a</code> to <code>z</code>, <code>A</code> to <code>Z</code>, <code>0</code> to <code>9</code>, and <code>_</code>.</p>

<p>To match characters from other languages such as Cyrillic or Hebrew, use <code>\u<var>hhhh</var></code>, where <code><var>hhhh</var></code> is the character's Unicode value in hexadecimal.</p>

<p>This example demonstrates how one can separate out Unicode characters from a word.</p>

<pre class="brush: js">let text = 'Образец text на русском языке'
let regex = /[\u0400-\u04FF]+/g

let match = regex.exec(text)
console.log(match[0])        // logs 'Образец'
console.log(regex.lastIndex) // logs '7'

let match2 = regex.exec(text)
console.log(match2[0])       // logs 'на' [did not log 'text']
console.log(regex.lastIndex) // logs '15'

// and so on
</pre>

<p>The <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">Unicode property escapes</a> feature introduces a solution, by allowing for a statement as simple as <code>\p{scx=Cyrl}</code>.</p>

<h3 id="Extracting_sub-domain_name_from_URL">Extracting sub-domain name from URL</h3>

<pre class="brush: js">let url = 'http://xxx.domain.com'
console.log(/[^.]+/.exec(url)[0].substr(7)) // logs 'xxx'
</pre>

<div class="notecard note">
<p><strong>Note:</strong> Instead of using regular expressions for parsing URLs, it is usually better to use the browsers built-in URL parser by using the <a href="/en-US/docs/Web/API/URL_API">URL API</a>.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="Firefox-specific_notes">Firefox-specific notes</h3>

<p>Starting with Firefox 34, in the case of a capturing group with quantifiers preventing its exercise, the matched text for a capturing group is now <code>undefined</code> instead of an empty string:</p>

<pre class="brush: js">// Firefox 33 or older
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
});
// 'group:'

// Firefox 34 or newer
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
});
// 'group:undefined'
</pre>

<p>Note that due to web compatibility, <code>RegExp.<var>$N</var></code> will still return an empty string instead of <code>undefined</code> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1053944">bug 1053944</a>).</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of many modern <code>RegExp</code> features is available in <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a> chapter in the <a href="/en-US/docs/Web/JavaScript/Guide">JavaScript Guide</a></li>
 <li>{{jsxref("String.prototype.match()")}}</li>
 <li>{{jsxref("String.prototype.replace()")}}</li>
 <li>{{jsxref("String.prototype.split()")}}</li>
</ul>
