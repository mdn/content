---
title: Lexical grammar
slug: Web/JavaScript/Reference/Lexical_grammar
tags:
  - Guide
  - JavaScript
  - Keyword
  - Lexical Grammar
  - Literal
browser-compat: javascript.grammar
---
<div>{{JsSidebar("More")}}</div>

<p>This page describes JavaScript's lexical grammar. The source text of ECMAScript scripts gets scanned from left to right and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments or <a href="/en-US/docs/Glossary/Whitespace">white space</a>. ECMAScript also defines certain keywords and literals and has rules for automatic insertion of semicolons to end statements.</p>

<h2 id="Control_characters">Control characters</h2>

<p>Control characters have no visual representation but are used to control the interpretation of the text.</p>

<table class="standard-table">
	<caption>Unicode format-control characters</caption>
	<thead>
		<tr>
			<th>Code point</th>
			<th>Name</th>
			<th>Abbreviation</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>U+200C</code></td>
			<td>Zero width non-joiner</td>
			<td>&lt;ZWNJ&gt;</td>
			<td>Placed between characters to prevent being connected into ligatures in certain languages (<a href="https://en.wikipedia.org/wiki/Zero-width_non-joiner">Wikipedia</a>).</td>
		</tr>
		<tr>
			<td><code>U+200D</code></td>
			<td>Zero width joiner</td>
			<td>&lt;ZWJ&gt;</td>
			<td>Placed between characters that would not normally be connected in order to cause the characters to be rendered using their connected form in certain languages (<a href="https://en.wikipedia.org/wiki/Zero-width_joiner">Wikipedia</a>).</td>
		</tr>
		<tr>
			<td><code>U+FEFF</code></td>
			<td>Byte order mark</td>
			<td>&lt;BOM&gt;</td>
			<td>Used at the start of the script to mark it as Unicode and the text's byte order (<a href="https://en.wikipedia.org/wiki/Byte_order_mark">Wikipedia</a>).</td>
		</tr>
	</tbody>
</table>

<h2 id="White_space">White space</h2>

<p><a href="/en-US/docs/Glossary/Whitespace">White space</a> characters improve the readability of source text and separate tokens from each other. These characters are usually unnecessary for the functionality of the code. <a href="https://en.wikipedia.org/wiki/Minification_%28programming%29">Minification tools</a> are often used to remove whitespace in order to reduce the amount of data that needs to be transferred.</p>

<table class="standard-table">
	<caption>White space characters</caption>
	<thead>
		<tr>
			<th>Code point</th>
			<th>Name</th>
			<th>Abbreviation</th>
			<th>Description</th>
			<th>Escape sequence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>U+0009</td>
			<td>Character tabulation</td>
			<td>&lt;HT&gt;</td>
			<td>Horizontal tabulation</td>
			<td>\t</td>
		</tr>
		<tr>
			<td>U+000B</td>
			<td>Line tabulation</td>
			<td>&lt;VT&gt;</td>
			<td>Vertical tabulation</td>
			<td>\v</td>
		</tr>
		<tr>
			<td>U+000C</td>
			<td>Form feed</td>
			<td>&lt;FF&gt;</td>
			<td>Page breaking control character (<a href="https://en.wikipedia.org/wiki/Page_break#Form_feed">Wikipedia</a>).</td>
			<td>\f</td>
		</tr>
		<tr>
			<td>U+0020</td>
			<td>Space</td>
			<td>&lt;SP&gt;</td>
			<td>Normal space</td>
			<td></td>
		</tr>
		<tr>
			<td>U+00A0</td>
			<td>No-break space</td>
			<td>&lt;NBSP&gt;</td>
			<td>Normal space, but no point at which a line may break</td>
			<td></td>
		</tr>
		<tr>
			<td>Others</td>
			<td>Other Unicode space characters</td>
			<td>&lt;USP&gt;</td>
			<td><a href="https://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode">Spaces in Unicode on Wikipedia</a></td>
			<td></td>
		</tr>
	</tbody>
</table>

<h2 id="Line_terminators">Line terminators</h2>

<p>In addition to <a href="/en-US/docs/Glossary/Whitespace">white space</a> characters, line terminator characters are used to improve the readability of the source text. However, in some cases, line terminators can influence the execution of JavaScript code as there are a few places where they are forbidden. Line terminators also affect the process of <a href="#automatic_semicolon_insertion">automatic semicolon insertion</a>. Line terminators are matched by the <strong>\s</strong> class in <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">regular expressions</a>.</p>

<p>Only the following Unicode code points are treated as line terminators in ECMAScript, other line breaking characters are treated as white space (for example, Next Line, NEL, U+0085 is considered as white space).</p>

<table class="standard-table">
	<caption>Line terminator characters</caption>
	<thead>
		<tr>
			<th>Code point</th>
			<th>Name</th>
			<th>Abbreviation</th>
			<th>Description</th>
			<th>Escape sequence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>U+000A</td>
			<td>Line Feed</td>
			<td>&lt;LF&gt;</td>
			<td>New line character in UNIX systems.</td>
			<td>\n</td>
		</tr>
		<tr>
			<td>U+000D</td>
			<td>Carriage Return</td>
			<td>&lt;CR&gt;</td>
			<td>New line character in Commodore and early Mac systems.</td>
			<td>\r</td>
		</tr>
		<tr>
			<td>U+2028</td>
			<td>Line Separator</td>
			<td>&lt;LS&gt;</td>
			<td><a href="https://en.wikipedia.org/wiki/Newline">Wikipedia</a></td>
			<td></td>
		</tr>
		<tr>
			<td>U+2029</td>
			<td>Paragraph Separator</td>
			<td>&lt;PS&gt;</td>
			<td><a href="https://en.wikipedia.org/wiki/Newline">Wikipedia</a></td>
			<td></td>
		</tr>
	</tbody>
</table>

<h2 id="Comments">Comments</h2>

<p>Comments are used to add hints, notes, suggestions, or warnings to JavaScript code. This can make it easier to read and understand. They can also be used to disable code to prevent it from being executed; this can be a valuable debugging tool.</p>

<p>JavaScript has two long-standing ways to add comments to code.</p>

<p>The first way is the <code>//</code> comment<strong>;</strong> this makes all text following it on the same line into a comment. For example:</p>

<pre class="brush: js">function comment() {
  // This is a one line JavaScript comment
  console.log('Hello world!');
}
comment();
</pre>

<p>The second way is the <code>/* */</code> style, which is much more flexible.</p>

<p>For example, you can use it on a single line:</p>

<pre class="brush: js">function comment() {
  /* This is a one line JavaScript comment */
  console.log('Hello world!');
}
comment();</pre>

<p>You can also make multiple-line comments, like this:</p>

<pre class="brush: js">function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log('Hello world!');
}
comment();</pre>

<p>You can also use it in the middle of a line, if you wish, although this can make your code harder to read so it should be used with caution:</p>

<pre class="brush: js">function comment(x) {
  console.log('Hello ' + x /* insert the value of x */ + ' !');
}
comment('world');</pre>

<p>In addition, you can use it to disable code to prevent it from running, by wrapping code in a comment, like this:</p>

<pre class="brush: js">function comment() {
  /* console.log('Hello world!'); */
}
comment();</pre>

<p>In this case, the <code>console.log()</code> call is never issued, since it's inside a comment. Any number of lines of code can be disabled this way.</p>

<h2 id="Hashbang_comments">Hashbang comments</h2>

<p>A specialized third comment syntax, the <strong>hashbang comment</strong>, is in the process of being standardized in ECMAScript (see the <a href="https://github.com/tc39/proposal-hashbang">Hashbang Grammar proposal</a>).</p>

<p>A hashbang comment behaves exactly like a single line-only (<code>//</code>) comment. Instead, it begins with <code>#!</code> and <strong>is only valid at the absolute start of a script or module</strong>. Note also that no whitespace of any kind is permitted before the <code>#!</code>. The comment consists of all the characters after <code>#!</code> up to the end of the first line; only one such comment is permitted.</p>

<p>The hashbang comment specifies the path to a specific JavaScript interpreter that you want to use to execute the script. An example is as follows:</p>

<pre class="brush: js">#!/usr/bin/env node

console.log("Hello world");
</pre>

<div class="notecard note">
<p><strong>Note:</strong> Hashbang comments in JavaScript mimic <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)">shebangs in Unix</a> used to run files with proper interpreter.</p>
</div>

<div class="notecard warning">
<p><strong>Warning:</strong> If you want scripts to be runnable directly in a shell environment, encode them in UTF-8 without a <a href="https://en.wikipedia.org/wiki/Byte_order_mark">BOM</a>. Although a BOM  will not cause any problems for code running in a browser, it is not advised to use a BOM with a hashbang in a script — because the BOM will prevent the script from working when you try to run it in a Unix/Linux shell environment. So if you want scripts to be runnable directly in a shell environment, encode them in UTF-8 without a BOM.</p>
</div>

<p>You must only use the <code>#!</code> comment style to specify a JavaScript interpreter. In all other cases just use a <code>//</code> comment (or mulitiline comment).</p>

<h2 id="Keywords">Keywords</h2>

<h3 id="Reserved_keywords_as_of_ECMAScript_2015">Reserved keywords as of ECMAScript 2015</h3>

<ul class="threecolumns">
	<li>{{jsxref("Statements/break", "break")}}</li>
	<li>{{jsxref("Statements/switch", "case")}}</li>
	<li>{{jsxref("Statements/try...catch", "catch")}}</li>
	<li>{{jsxref("Statements/class", "class")}}</li>
	<li>{{jsxref("Statements/const", "const")}}</li>
	<li>{{jsxref("Statements/continue", "continue")}}</li>
	<li>{{jsxref("Statements/debugger", "debugger")}}</li>
	<li>{{jsxref("Statements/switch", "default")}}</li>
	<li>{{jsxref("Operators/delete", "delete")}}</li>
	<li>{{jsxref("Statements/do...while", "do")}}</li>
	<li>{{jsxref("Statements/if...else", "else")}}</li>
	<li>{{jsxref("Statements/export", "export")}}</li>
	<li>{{jsxref("Statements/class", "extends")}}</li>
	<li>{{jsxref("Statements/try...catch", "finally")}}</li>
	<li>{{jsxref("Statements/for", "for")}}</li>
	<li>{{jsxref("Statements/function", "function")}}</li>
	<li>{{jsxref("Statements/if...else", "if")}}</li>
	<li>{{jsxref("Statements/import", "import")}}</li>
	<li>{{jsxref("Operators/in", "in")}}</li>
	<li>{{jsxref("Operators/instanceof", "instanceof")}}</li>
	<li>{{jsxref("Operators/new", "new")}}</li>
	<li>{{jsxref("Statements/return", "return")}}</li>
	<li>{{jsxref("Operators/super", "super")}}</li>
	<li>{{jsxref("Statements/switch", "switch")}}</li>
	<li>{{jsxref("Operators/this", "this")}}</li>
	<li>{{jsxref("Statements/throw", "throw")}}</li>
	<li>{{jsxref("Statements/try...catch", "try")}}</li>
	<li>{{jsxref("Operators/typeof", "typeof")}}</li>
	<li>{{jsxref("Statements/var", "var")}}</li>
	<li>{{jsxref("Operators/void", "void")}}</li>
	<li>{{jsxref("Statements/while", "while")}}</li>
	<li>{{jsxref("Statements/with", "with")}}</li>
	<li>{{jsxref("Operators/yield", "yield")}}</li>
</ul>

<h3 id="Future_reserved_keywords">Future reserved keywords</h3>

<p>The following are reserved as future keywords by the ECMAScript specification. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers.</p>

<p>These are always reserved:</p>

<ul>
	<li><code>enum</code></li>
</ul>

<p>The following are only reserved when they are found in strict mode code:</p>

<ul class="threecolumns">
	<li><code>implements</code></li>
	<li><code>interface</code></li>
	<li>{{jsxref("Statements/let", "let")}}</li>
	<li><code>package</code></li>
	<li><code>private</code></li>
	<li><code>protected</code></li>
	<li><code>public</code></li>
	<li><code>static</code></li>
	<li>{{jsxref("Operators/yield", "yield")}}</li>
</ul>

<p>The following are only reserved when they are found in module code:</p>

<ul>
	<li><code>await</code></li>
</ul>

<h4 id="Future_reserved_keywords_in_older_standards">Future reserved keywords in older standards</h4>

<p>The following are reserved as future keywords by older ECMAScript specifications (ECMAScript 1 till 3).</p>

<ul class="threecolumns">
	<li><code>abstract</code></li>
	<li><code>boolean</code></li>
	<li><code>byte</code></li>
	<li><code>char</code></li>
	<li><code>double</code></li>
	<li><code>final</code></li>
	<li><code>float</code></li>
	<li><code>goto</code></li>
	<li><code>int</code></li>
	<li><code>long</code></li>
	<li><code>native</code></li>
	<li><code>short</code></li>
	<li><code>synchronized</code></li>
	<li><code>throws</code></li>
	<li><code>transient</code></li>
	<li><code>volatile</code></li>
</ul>

<p>Additionally, the literals <code>null</code>, <code>true</code>, and <code>false</code> cannot be used as identifiers in ECMAScript.</p>

<h3 id="Reserved_word_usage">Reserved word usage</h3>

<p>Reserved words actually only apply to <em>Identifier</em>s (vs.<em> IdentifierName</em>s) . As described in <a href="https://es5.github.com/#A.1">es5.github.com/#A.1</a>, these are all <em>IdentifierName</em>s which do not exclude <em>ReservedWords</em>.</p>

<pre class="brush: js">a.import
a['import']
a = { import: 'test' }.
</pre>

<p>On the other hand the following is illegal because it's an <em>Identifier</em>, which is an <em>IdentifierName</em> without the reserved words. Identifiers are used for <em>FunctionDeclaration</em>, <em>FunctionExpression</em>,<em> VariableDeclaration</em> and so on. <em>IdentifierNames</em> are used for <em>MemberExpression</em>,<em> CallExpression</em> and so on.</p>

<pre class="brush: js">function import() {} // Illegal.</pre>

<h3 id="Identifiers_with_special_meanings">Identifiers with special meanings</h3>

<p>A few identifiers have a special meaning in some contexts without being keywords of any kind. They include:</p>

<ul class="threecolumns">
	<li>{{jsxref("Functions/arguments", "arguments")}}</li>
	<li>{{jsxref("Functions/get", "get")}}</li>
	<li>{{jsxref("Functions/set", "set")}}</li>
</ul>

<h2 id="Literals">Literals</h2>

<h3 id="Null_literal">Null literal</h3>

<p>See also {{jsxref("null")}} for more information.</p>

<pre class="brush: js">null</pre>

<h3 id="Boolean_literal">Boolean literal</h3>

<p>See also {{jsxref("Boolean")}} for more information.</p>

<pre class="brush: js">true
false</pre>

<h3 id="Numeric_literals">Numeric literals</h3>

<p>The {{jsxref("Number")}} and {{jsxref("BigInt")}} types use numeric literals.</p>

<h4 id="Decimal">Decimal</h4>

<pre class="brush: js">1234567890
42

// Caution when using with a leading zero:
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
</pre>

<p>Note that decimal literals can start with a zero (<code>0</code>) followed by another decimal digit, but If all digits after the leading <code>0</code> are smaller than 8, the number is interpreted as an octal number. This won't throw in JavaScript, see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=957513">bug 957513</a>. See also the page about {{jsxref("parseInt", "parseInt()")}}</p>

<h5 id="Exponential">Exponential</h5>

<p>The decimal exponential literal is specified by the following format: <code>beN</code>; where <code>b</code> is a base number (integer or floating), followed by <code>e</code> char (which serves as separator or <em>exponent indicator</em>) and <code>N</code>, which is <em>exponent</em> or <em>power</em> number – a signed integer (as per 2019 ECMA-262 specs): </p>

<pre class="brush: js">0e-5   // =&gt; 0
0e+5   // =&gt; 0
5e1    // =&gt; 50
175e-2 // =&gt; 1.75
1e3    // =&gt; 1000
1e-3   // =&gt; 0.001
</pre>

<h4 id="Binary">Binary</h4>

<p>Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (<code>0b</code> or <code>0B</code>). Because this syntax is new in ECMAScript 2015, see the browser compatibility table, below. If the digits after the <code>0b</code> are not 0 or 1, the following {{jsxref("SyntaxError")}} is thrown: "Missing binary digits after 0b".</p>

<pre class="brush: js">var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607</pre>

<h4 id="Octal">Octal</h4>

<p>Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (<code>0o</code> or <code>0O)</code>. Because this syntax is new in ECMAScript 2015, see the browser compatibility table, below. If the digits after the <code>0o</code> are outside the range (01234567), the following {{jsxref("SyntaxError")}} is thrown: "Missing octal digits after 0o".</p>

<pre class="brush: js">var n = 0O755; // 493
var m = 0o644; // 420

// Also possible with just a leading zero (see note about decimals above)
0755
0644
</pre>

<h4 id="Hexadecimal">Hexadecimal</h4>

<p>Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (<code>0x</code> or <code>0X)</code>. If the digits after 0x are outside the range (0123456789ABCDEF), the following {{jsxref("SyntaxError")}} is thrown: "Identifier starts immediately after numeric literal".</p>

<pre class="brush: js">0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
</pre>

<h4 id="BigInt_literal">BigInt literal</h4>

<p>The {{jsxref("BigInt")}} type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. BigInt literals are created by appending <code>n</code> to the end of an integer.</p>

<pre class="brush: js">123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895‬
0b11101001010101010101n // 955733
</pre>

<p>Note that legacy octal numbers with just a leading zero won't work for <code>BigInt</code>:</p>

<pre class="brush: js example-bad">// 0755n
// SyntaxError: invalid BigInt syntax</pre>

<p>For octal <code>BigInt</code> numbers, always use zero followed by the letter "o" (uppercase or lowercase):</p>

<pre class="brush: js example-good">0o755n</pre>

<p>For more information about <code>BigInt</code>, see also <a href="/en-US/docs/Web/JavaScript/Data_structures#BigInt_type">JavaScript data structures</a>.</p>

<h4 id="Numeric_separators">Numeric separators</h4>

<p>To improve readability for numeric literals, underscores (<code>_</code>, <code>U+005F</code>) can be used as separators:</p>

<pre class="brush: js">// separators in decimal numbers
1_000_000_000_000
1_050.95

// separators in binary numbers
0b1010_0001_1000_0101

// separators in octal numbers
0o2_2_5_6

// separators in hex numbers
0xA0_B0_C0

// separators in BigInts
1_000_000_000_000_000_000_000n
</pre>

<p>Note these limitations:</p>

<pre class="brush: js example-bad">// More than one underscore in a row is not allowed
100__000; // SyntaxError

// Not allowed at the end of numeric literals
100_; // SyntaxError

// Can not be used after leading 0
0_1; // SyntaxError
</pre>

<h3 id="Object_literals">Object literals</h3>

<p>See also {{jsxref("Object")}} and <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a> for more information.</p>

<pre class="brush: js">var o = { a: 'foo', b: 'bar', c: 42 };

// shorthand notation. New in ES2015
var a = 'foo', b = 'bar', c = 42;
var o = {a, b, c};

// instead of
var o = { a: a, b: b, c: c };
</pre>

<h3 id="Array_literals">Array literals</h3>

<p>See also {{jsxref("Array")}} for more information.</p>

<pre class="brush: js">[1954, 1974, 1990, 2014]</pre>

<h3 id="String_literals">String literals</h3>

<p>A string literal is zero or more Unicode code points enclosed in single or double quotes. Unicode code points may also be represented by an escape sequence. All code points may appear literally in a string literal except for these closing quote code points:</p>

<ul>
	<li>U+005C \ (backslash),</li>
	<li>U+000D &lt;CR&gt;,</li>
	<li>and U+000A &lt;LF&gt;.</li>
</ul>

<p>Prior to the <a href="https://github.com/tc39/proposal-json-superset">proposal to make all JSON text valid ECMA-262</a>, U+2028 &lt;LS&gt; and U+2029 &lt;PS&gt;, were also disallowed from appearing unescaped in string literals.</p>

<p>Any code points may appear in the form of an escape sequence. String literals evaluate to ECMAScript String values. When generating these String values Unicode code points are UTF-16 encoded.</p>

<pre class="brush: js">'foo'
"bar"</pre>

<h4 id="Hexadecimal_escape_sequences">Hexadecimal escape sequences</h4>

<p>Hexadecimal escape sequences consist of <code>\x</code> followed by exactly two hexadecimal digits representing a code unit or code point in the range 0x0000 to 0x00FF.</p>

<pre class="brush: js">'\xA9' // "©"
</pre>

<h4 id="Unicode_escape_sequences">Unicode escape sequences</h4>

<p>A Unicode escape sequence consists of exactly four hexadecimal digits following <code>\u</code>. It represents a code unit in the UTF-16 encoding. For code points U+0000 to U+FFFF, the code unit is equal to the code point. Code points U+10000 to U+10FFFF require two escape sequences representing the two code units (a surrogate pair) used to encode the character; the surrogate pair is distinct from the code point.</p>

<p>See also {{jsxref("String.fromCharCode()")}} and {{jsxref("String.prototype.charCodeAt()")}}.</p>

<pre class="brush: js">'\u00A9' // "©" (U+A9)</pre>

<h4 id="Unicode_code_point_escapes">Unicode code point escapes</h4>

<p>A Unicode code point escape consists of <code>\u{</code>, followed by a code point in hexadecimal base, followed by <code>}</code>. The value of the hexadecimal digits must be in the range 0 and 0x10FFFF inclusive. Code points in the range U+10000 to U+10FFFF do not need to be represented as a surrogate pair. Code point escapes were added to JavaScript in ECMAScript 2015 (ES6).</p>

<p>See also {{jsxref("String.fromCodePoint()")}} and {{jsxref("String.prototype.codePointAt()")}}.</p>

<pre class="brush: js">'\u{2F804}' // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
'\uD87E\uDC04'</pre>

<h3 id="Regular_expression_literals">Regular expression literals</h3>

<p>See also {{jsxref("RegExp")}} for more information.</p>

<pre class="brush: js">/ab+c/g

// An "empty" regular expression literal
// The empty non-capturing group is necessary
// to avoid ambiguity with single-line comments.
/(?:)/</pre>

<h3 id="Template_literals">Template literals</h3>

<p>See also <a href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template strings</a> for more information.</p>

<pre class="brush: js">`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`</pre>

<h2 id="Automatic_semicolon_insertion">Automatic semicolon insertion</h2>

<p>Some <a href="/en-US/docs/Web/JavaScript/Reference/Statements">JavaScript statements</a> must be terminated with semicolons and are therefore affected by automatic semicolon insertion (ASI):</p>

<ul>
	<li>Empty statement</li>
	<li><code>let</code>, <code>const</code>, variable statement</li>
	<li><code>import</code>, <code>export</code>, module declaration</li>
	<li>Expression statement</li>
	<li><code>debugger</code></li>
	<li><code>continue</code>, <code>break</code>, <code>throw</code></li>
	<li><code>return</code></li>
</ul>

<p>The ECMAScript specification mentions <a href="https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion">three rules of semicolon insertion</a>.</p>

<p>1. A semicolon is inserted before, when a <a href="#line_terminators">Line terminator</a> or "}" is encountered that is not allowed by the grammar.</p>

<pre class="brush: js">{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;</pre>

<p>2. A semicolon is inserted at the end, when the end of the input stream of tokens is detected and the parser is unable to parse the single input stream as a complete program.</p>

<p>Here <code>++</code> is not treated as a <a href="/en-US/docs/Web/JavaScript/Reference/Operators#Increment">postfix operator</a> applying to variable <code>b</code>, because a line terminator occurs between <code>b</code> and <code>++</code>.</p>

<pre class="brush: js">a = b
++c

// is transformend by ASI into

a = b;
++c;
</pre>

<p>3. A semicolon is inserted at the end, when a statement with restricted productions in the grammar is followed by a line terminator. These statements with "no LineTerminator here" rules are:</p>

<ul>
	<li>PostfixExpressions (<code>++</code> and <code>--</code>)</li>
	<li><code>continue</code></li>
	<li><code>break</code></li>
	<li><code>return</code></li>
	<li><code>yield</code>, <code>yield*</code></li>
	<li><code>module</code></li>
</ul>

<pre class="brush: js">return
a + b

// is transformed by ASI into

return;
a + b;
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="https://tc39.es/ecma262/#sec-ecmascript-language-lexical-grammar">Lexical grammar in the ECMAScript specification</a></li>
  <li><a href="http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/">Jeff Walden: Binary and octal numbers</a></li>
	<li><a href="http://mathiasbynens.be/notes/javascript-escapes">Mathias Bynens: JavaScript character escape sequences</a></li>
	<li>{{jsxref("Boolean")}}</li>
	<li>{{jsxref("Number")}}</li>
	<li>{{jsxref("RegExp")}}</li>
	<li>{{jsxref("String")}}</li>
</ul>
