---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - String
browser-compat: javascript.builtins.String
---
<div>{{JSRef}}</div>

<p>The <strong><code>String</code></strong> object is used to represent and manipulate a
  sequence of characters.</p>

<h2 id="Description">Description</h2>

<p>Strings are useful for holding data that can be represented in text form. Some of the
  most-used operations on strings are to check their {{jsxref("String.length",
  "length")}}, to build and concatenate them using the <a
    href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators">+ and += string
    operators</a>, checking for the existence or location of substrings with the
  {{jsxref("String.prototype.indexOf()", "indexOf()")}} method, or extracting substrings
  with the {{jsxref("String.prototype.substring()", "substring()")}} method.</p>

<h3 id="Creating_strings">Creating strings</h3>

<p>Strings can be created as primitives, from string literals, or as objects, using the
  {{jsxref("String/String", "String()")}} constructor:</p>

<pre class="brush: js">const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;</pre>

<pre class="brush: js">const string4 = new String("A String object");
</pre>

<p>String primitives and string objects can be used interchangeably in most situations.
  See "<a href="#string_primitives_and_string_objects">String primitives and String
    objects</a>" below.</p>

<p>String literals can be specified using single or double quotes, which are treated
  identically, or using the backtick character <kbd>`</kbd>. This last form specifies a <a
    href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template literal</a>:
  with this form you can interpolate expressions.</p>

<h3 id="Character_access">Character access</h3>

<p>There are two ways to access an individual character in a string. The first is the
  {{jsxref("String.prototype.charAt()", "charAt()")}} method:</p>

<pre class="brush: js">return 'cat'.charAt(1) // returns "a"
</pre>

<p>The other way (introduced in ECMAScript 5) is to treat the string as an array-like
  object, where individual characters correspond to a numerical index:</p>

<pre class="brush: js">return 'cat'[1] // returns "a"
</pre>

<p>When using bracket notation for character access, attempting to delete or assign a
  value to these properties will not succeed. The properties involved are neither writable
  nor configurable. (See {{jsxref("Object.defineProperty()")}} for more information.)</p>

<h3 id="Comparing_strings">Comparing strings</h3>

<p>In C, the <code>strcmp()</code> function is used for comparing strings. In JavaScript,
  you just use the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators">less-than
    and greater-than operators</a>:</p>

<pre class="brush: js">let a = 'a'
let b = 'b'
if (a &lt; b) { // true
  console.log(a + ' is less than ' + b)
} else if (a &gt; b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}
</pre>

<p>A similar result can be achieved using the {{jsxref("String.prototype.localeCompare()",
  "localeCompare()")}} method inherited by <code>String</code> instances.</p>

<p>Note that <code>a == b</code> compares the strings in <code><var>a</var></code> and
  <code><var>b</var></code> for being equal in the usual case-sensitive way. If you wish
  to compare without regard to upper or lower case characters, use a function similar to
  this:</p>

<pre class="brush: js">function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual
</pre>

<p>Upper case is used instead of lower case in this function, due to problems with certain
  UTF-8 character conversions.</p>

<h3 id="String_primitives_and_String_objects">String primitives and String objects</h3>

<p>Note that JavaScript distinguishes between <code>String</code> objects and
  {{Glossary("Primitive", "primitive string")}} values. (The same is true of
  {{jsxref("Boolean")}} and {{jsxref("Global_Objects/Number", "Numbers")}}.)</p>

<p>String literals (denoted by double or single quotes) and strings returned from
  <code>String</code> calls in a non-constructor context (that is, called without using
  the {{jsxref("Operators/new", "new")}} keyword) are primitive strings. JavaScript
  automatically converts primitives to <code>String</code> objects, so that it's possible
  to use <code>String</code> object methods for primitive strings. In contexts where a
  method is to be invoked on a primitive string or a property lookup occurs, JavaScript
  will automatically wrap the string primitive and call the method or perform the property
  lookup.</p>

<pre class="brush: js">let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"
</pre>

<p>String primitives and <code>String</code> objects also give different results when
  using {{jsxref("Global_Objects/eval", "eval()")}}. Primitives passed to
  <code>eval</code> are treated as source code; <code>String</code> objects are treated as
  all other objects are, by returning the object. For example:</p>

<pre class="brush: js">let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))         // returns the number 4
console.log(eval(s2))         // returns the string "2 + 2"
</pre>

<p>For these reasons, the code may break when it encounters <code>String</code> objects
  when it expects a primitive string instead, although generally, authors need not worry
  about the distinction.</p>

<p>A <code>String</code> object can always be converted to its primitive counterpart with
  the {{jsxref("String.prototype.valueOf()", "valueOf()")}} method.</p>

<pre class="brush: js">console.log(eval(s2.valueOf()))  // returns the number 4
</pre>

<h3 id="escape_notation"><span id="escape_sequences">Escape sequences</span></h3>

<p>Special characters can be encoded using escape sequences:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Escape sequence</th>
      <th scope="col">Unicode code point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>\0</code></td>
      <td>null character (U+0000 NULL)</td>
    </tr>
    <tr>
      <td><code>\'</code></td>
      <td>single quote (U+0027 APOSTROPHE)</td>
    </tr>
    <tr>
      <td><code>\"</code></td>
      <td>double quote (U+0022 QUOTATION MARK)</td>
    </tr>
    <tr>
      <td><code>\\</code></td>
      <td>backslash (U+005C REVERSE SOLIDUS)</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>newline (U+000A LINE FEED; LF)</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>carriage return (U+000D CARRIAGE RETURN; CR)</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>vertical tab (U+000B LINE TABULATION)</td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>tab (U+0009 CHARACTER TABULATION)</td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>backspace (U+0008 BACKSPACE)</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>form feed (U+000C FORM FEED)</td>
    </tr>
    <tr>
      <td><code>\u<var>XXXX</var></code>
        <br>…where <code><var>XXXX</var></code> is exactly 4 hex digits in the range <code>0000</code>–<code>FFFF</code>; e.g., <code>\u000A</code> is the same as <code>\n</code> (LINE FEED); <code>\u0021</code> is "<code>!</code>"</td>
      <td>Unicode code point between <code>U+0000</code> and <code>U+FFFF</code> (the Unicode Basic Multilingual Plane)</td>
    </tr>
    <tr>
      <td><code>\u{<var>X</var>}</code>…<code>\u{<var>XXXXXX</var>}</code>
        <br>…where <code><var>X</var></code>…<code><var>XXXXXX</var></code> is 1–6 hex digits in the range <code>0</code>–<code>10FFFF</code>; e.g., <code>\u{A}</code> is the same as <code>\n</code> (LINE FEED); <code>\u{21}</code> is "<code>!</code>"</td>
      <td>Unicode code point between <code>U+0000</code> and <code>U+10FFFF</code> (the entirety of Unicode)</td>
    </tr>
    <tr>
      <td><code>\x<var>XX</var></code>
        <br>…where <code><var>XX</var></code> is exactly 2 hex digits in the range <code>00</code>–<code>FF</code>; e.g., <code>\x0A</code> is the same as <code>\n</code> (LINE FEED); <code>\x21</code> is "<code>!</code>"</td>
      <td>Unicode code point between <code>U+0000</code> and <code>U+00FF</code> (the Basic Latin and Latin-1 Supplement blocks; equivalent to ISO-8859-1)</td>
    </tr>
  </tbody>
</table>

<h3 id="Long_literal_strings">Long literal strings</h3>

<p>Sometimes, your code will include strings which are very long. Rather than having lines
  that go on endlessly, or wrap at the whim of your editor, you may wish to specifically
  break the string into multiple lines in the source code without affecting the actual
  string contents. There are two ways you can do this.</p>

<h4 id="Method_1">Method 1</h4>

<p>You can use the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Addition">+</a>
  operator to append multiple strings together, like this:</p>

<pre class="brush: js">let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."
</pre>

<h4 id="Method_2">Method 2</h4>

<p>You can use the backslash character (<code>\</code>) at the end of each line to
  indicate that the string will continue on the next line. Make sure there is no space or
  any other character after the backslash (except for a line break), or as an indent;
  otherwise it will not work.</p>

<p>That form looks like this:</p>

<pre class="brush: js">let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
</pre>

<p>Both of the above methods result in identical strings.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
  <dt>{{jsxref("String/String", "String()")}}</dt>
  <dd>Creates a new <code>String</code> object. It performs type conversion when called as
    a function, rather than as a constructor, which is usually more useful.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
  <dt>{{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[,
    <var>numN</var>]])")}}</dt>
  <dd>Returns a string created by using the specified sequence of Unicode values.</dd>
  <dt>{{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[,
    <var>numN</var>)")}}</dt>
  <dd>Returns a string created by using the specified sequence of code points.</dd>
  <dt>{{jsxref("String.raw()")}}</dt>
  <dd>Returns a string created from a raw template string.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
  <dt>{{jsxref("String.prototype.length")}}</dt>
  <dd>Reflects the <code>length</code> of the string. Read-only.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("String.prototype.at()", "String.prototype.at(<var>index</var>)")}}{{Experimental_Inline}}</dt>
 <dd>Returns the character (exactly one UTF-16 code unit) at the specified <code><var>index</var></code>. Accepts negative integers, which count back from the last string character.</dd>
  <dt>{{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}
  </dt>
  <dd>Returns the character (exactly one UTF-16 code unit) at the specified
    <code><var>index</var></code>.</dd>
  <dt>{{jsxref("String.prototype.charCodeAt()",
    "String.prototype.charCodeAt(<var>index</var>)")}}</dt>
  <dd>Returns a number that is the UTF-16 code unit value at the given
    <code><var>index</var></code>.</dd>
  <dt>{{jsxref("String.prototype.codePointAt()",
    "String.prototype.codePointAt(<var>pos</var>)")}}</dt>
  <dd>Returns a nonnegative integer Number that is the code point value of the UTF-16
    encoded code point starting at the specified <code><var>pos</var></code>.</dd>
  <dt>{{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str </var>[,
    ...<var>strN </var>])")}}</dt>
  <dd>Combines the text of two (or more) strings and returns a new string.</dd>
  <dt>{{jsxref("String.prototype.includes()",
    "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}</dt>
  <dd>Determines whether the calling string contains <code><var>searchString</var></code>.
  </dd>
  <dt>{{jsxref("String.prototype.endsWith()",
    "String.prototype.endsWith(<var>searchString</var> [, <var>length</var>])")}}</dt>
  <dd>Determines whether a string ends with the characters of the string
    <code><var>searchString</var></code>.</dd>
  <dt>{{jsxref("String.prototype.indexOf()",
    "String.prototype.indexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}</dt>
  <dd>Returns the index within the calling {{jsxref("String")}} object of the first
    occurrence of <code><var>searchValue</var></code>, or <code>-1</code> if not found.
  </dd>
  <dt>{{jsxref("String.prototype.lastIndexOf()",
    "String.prototype.lastIndexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  </dt>
  <dd>Returns the index within the calling {{jsxref("String")}} object of the last
    occurrence of <code><var>searchValue</var></code>, or <code>-1</code> if not found.
  </dd>
  <dt>{{jsxref("String.prototype.localeCompare()",
    "String.prototype.localeCompare(<var>compareString</var> [, <var>locales</var> [,
    <var>options</var>]])")}}</dt>
  <dd>Returns a number indicating whether the reference string
    <code><var>compareString</var></code> comes before, after, or is equivalent to the
    given string in sort order.</dd>
  <dt>{{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}
  </dt>
  <dd>Used to match regular expression <code><var>regexp</var></code> against a string.
  </dd>
  <dt>{{jsxref("String.prototype.matchAll()",
    "String.prototype.matchAll(<var>regexp</var>)")}}</dt>
  <dd>Returns an iterator of all <code><var>regexp</var></code>'s matches.</dd>
  <dt>{{jsxref("String.prototype.normalize()",
    "String.prototype.normalize([<var>form</var>])")}}</dt>
  <dd>Returns the Unicode Normalization Form of the calling string value.</dd>
  <dt>{{jsxref("String.prototype.padEnd()",
    "String.prototype.padEnd(<var>targetLength</var> [, <var>padString</var>])")}}</dt>
  <dd>Pads the current string from the end with a given string and returns a new string of
    the length <code><var>targetLength</var></code>.</dd>
  <dt>{{jsxref("String.prototype.padStart()",
    "String.prototype.padStart(<var>targetLength</var> [, <var>padString</var>])")}}</dt>
  <dd>Pads the current string from the start with a given string and returns a new string
    of the length <code><var>targetLength</var></code>.</dd>
  <dt>{{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}
  </dt>
  <dd>Returns a string consisting of the elements of the object repeated
    <code><var>count</var></code> times.</dd>
  <dt>{{jsxref("String.prototype.replace()" ,
    "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}</dt>
  <dd>Used to replace occurrences of <code><var>searchFor</var></code> using
    <code><var>replaceWith</var></code>. <code><var>searchFor</var></code> may be a string
    or Regular Expression, and <code><var>replaceWith</var></code> may be a string or
    function.</dd>
  <dt>{{jsxref("String.prototype.replaceAll()" ,
    "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}</dt>
  <dd>Used to replace all occurrences of <code><var>searchFor</var></code> using
    <code><var>replaceWith</var></code>. <code><var>searchFor</var></code> may be a string
    or Regular Expression, and <code><var>replaceWith</var></code> may be a string or
    function.</dd>
  <dt>{{jsxref("String.prototype.search()",
    "String.prototype.search(<var>regexp</var>)")}}</dt>
  <dd>Search for a match between a regular expression <code><var>regexp</var></code> and
    the calling string.</dd>
  <dt>{{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[,
    <var>endIndex</var>])")}}</dt>
  <dd>Extracts a section of a string and returns a new string.</dd>
  <dt>{{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var> [,
    <var>limit</var>] ])")}}</dt>
  <dd>Returns an array of strings populated by splitting the calling string at occurrences
    of the substring <code><var>sep</var></code>.</dd>
  <dt>{{jsxref("String.prototype.startsWith()",
    "String.prototype.startsWith(<var>searchString</var> [, <var>length</var>])")}}</dt>
  <dd>Determines whether the calling string begins with the characters of string
    <code><var>searchString</var></code>.</dd>
  <dt>{{jsxref("String.prototype.substring()",
    "String.prototype.substring(<var>indexStart</var> [, <var>indexEnd</var>])")}}</dt>
  <dd>Returns a new string containing characters of the calling string from (or between)
    the specified index (or indeces).</dd>
  <dt>{{jsxref("String.prototype.toLocaleLowerCase()",
    "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}
  </dt>
  <dd>
    <p>The characters within a string are converted to lowercase while respecting the
      current locale.</p>

    <p>For most languages, this will return the same as
      {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.</p>
  </dd>
  <dt>{{jsxref("String.prototype.toLocaleUpperCase()",
    "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}
  </dt>
  <dd>
    <p>The characters within a string are converted to uppercase while respecting the
      current locale.</p>

    <p>For most languages, this will return the same as
      {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.</p>
  </dd>
  <dt>{{jsxref("String.prototype.toLowerCase()")}}</dt>
  <dd>Returns the calling string value converted to lowercase.</dd>
  <dt>{{jsxref("String.prototype.toString()")}}</dt>
  <dd>Returns a string representing the specified object. Overrides the
    {{jsxref("Object.prototype.toString()")}} method.</dd>
  <dt>{{jsxref("String.prototype.toUpperCase()")}}</dt>
  <dd>Returns the calling string value converted to uppercase.</dd>
  <dt>{{jsxref("String.prototype.trim()")}}</dt>
  <dd>Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5
    standard.</dd>
  <dt>{{jsxref("String.prototype.trimStart()")}}</dt>
  <dd>Trims whitespace from the beginning of the string.</dd>
  <dt>{{jsxref("String.prototype.trimEnd()")}}</dt>
  <dd>Trims whitespace from the end of the string.</dd>
  <dt>{{jsxref("String.prototype.valueOf()")}}</dt>
  <dd>Returns the primitive value of the specified object. Overrides the
    {{jsxref("Object.prototype.valueOf()")}} method.</dd>
  <dt>{{jsxref("String.prototype.@@iterator()")}}</dt>
  <dd>Returns a new iterator object that iterates over the code points of a String value,
    returning each code point as a String value.</dd>
</dl>

<h2 id="HTML_wrapper_methods">HTML wrapper methods</h2>

<div class="notecard warning">
  <p><strong>Warning:</strong> Deprecated. Avoid these methods.</p>

  <p>They are of limited use, as they provide only a subset of the available HTML tags
    and attributes.</p>
</div>

<dl>
  <dt>{{jsxref("String.prototype.anchor()")}}</dt>
  <dd>{{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}} (hypertext target)</dd>
  <dt>{{jsxref("String.prototype.big()")}}</dt>
  <dd>{{HTMLElement("big")}}</dd>
  <dt>{{jsxref("String.prototype.blink()")}}</dt>
  <dd>{{HTMLElement("blink")}}</dd>
  <dt>{{jsxref("String.prototype.bold()")}}</dt>
  <dd>{{HTMLElement("b")}}</dd>
  <dt>{{jsxref("String.prototype.fixed()")}}</dt>
  <dd>{{HTMLElement("tt")}}</dd>
  <dt>{{jsxref("String.prototype.fontcolor()")}}</dt>
  <dd>{{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}</dd>
  <dt>{{jsxref("String.prototype.fontsize()")}}</dt>
  <dd>{{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}</dd>
  <dt>{{jsxref("String.prototype.italics()")}}</dt>
  <dd>{{HTMLElement("i")}}</dd>
  <dt>{{jsxref("String.prototype.link()")}}</dt>
  <dd>{{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}} (link to URL)</dd>
  <dt>{{jsxref("String.prototype.small()")}}</dt>
  <dd>{{HTMLElement("small")}}</dd>
  <dt>{{jsxref("String.prototype.strike()")}}</dt>
  <dd>{{HTMLElement("strike")}}</dd>
  <dt>{{jsxref("String.prototype.sub()")}}</dt>
  <dd>{{HTMLElement("sub")}}</dd>
  <dt>{{jsxref("String.prototype.sup()")}}</dt>
  <dd>{{HTMLElement("sup")}}</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="String_conversion">String conversion</h3>

<p>It's possible to use <code>String</code> as a more reliable
  {{jsxref("String.prototype.toString()", "toString()")}} alternative, as it works when
  used on {{jsxref("null")}}, {{jsxref("undefined")}}, and on {{jsxref("Symbol",
  "symbols")}}. For example:</p>

<pre class="brush: js">let outputStrings = []
for (let i = 0, n = inputValues.length; i &lt; n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Text_formatting">Text formatting in the
      JavaScript Guide</a></li>
  <li>{{jsxref("RegExp")}}</li>
  <li>{{domxref("DOMString")}}</li>
  <li><a href="/en-US/docs/Web/API/DOMString/Binary">Binary strings</a></li>
</ul>
