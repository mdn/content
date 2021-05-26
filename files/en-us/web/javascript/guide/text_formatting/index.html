---
title: Text formatting
slug: Web/JavaScript/Guide/Text_formatting
tags:
  - Guide
  - JavaScript
  - l10n:priority
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</div>

<p class="summary">This chapter introduces how to work with strings and text in JavaScript.</p>

<h2 id="Strings">Strings</h2>

<p>JavaScript's <a href="/en-US/docs/Glossary/String">String</a> type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values  (UTF-16 code units). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. You can create strings using string literals or string objects.</p>


<h3 id="String_literals">String literals</h3>

<p>You can create simple strings using either single or double quotes:</p>

<pre class="brush: js">'foo'
"bar"</pre>

<p>More advanced strings can be created using escape sequences:</p>

<h4 id="Hexadecimal_escape_sequences">Hexadecimal escape sequences</h4>

<p>The number after \x is interpreted as a <a href="https://en.wikipedia.org/wiki/Hexadecimal">hexadecimal</a> number.</p>

<pre class="brush: js">'\xA9' // "©"
</pre>

<h4 id="Unicode_escape_sequences">Unicode escape sequences</h4>

<p>The Unicode escape sequences require at least four hexadecimal digits following <code>\u</code>.</p>

<pre class="brush: js">'\u00A9' // "©"</pre>

<h4 id="Unicode_code_point_escapes">Unicode code point escapes</h4>

<p>New in ECMAScript 2015. With Unicode code point escapes, any character can be escaped using hexadecimal numbers so that it is possible to use Unicode code points up to <code>0x10FFFF</code>. With simple Unicode escapes it is often necessary to write the surrogate halves separately to achieve the same result.</p>

<p>See also {{jsxref("String.fromCodePoint()")}} or {{jsxref("String.prototype.codePointAt()")}}.</p>

<pre class="brush: js">'\u{2F804}'

// the same with simple Unicode escapes
'\uD87E\uDC04'</pre>

<h3 id="String_objects">String objects</h3>

<p>The {{jsxref("String")}} object is a wrapper around the string primitive data type.</p>

<pre class="brush: js">const foo = new String('foo'); // Creates a String object
console.log(foo); // Displays: [String: 'foo']
typeof foo; // Returns 'object'
</pre>

<p>You can call any of the methods of the <code>String</code> object on a string literal value—JavaScript automatically converts the string literal to a temporary <code>String</code> object, calls the method, then discards the temporary <code>String</code> object. You can also use the <code>String.length</code> property with a string literal.</p>

<p>You should use string literals unless you specifically need to use a <code>String</code> object, because <code>String</code> objects can have counterintuitive behavior. For example:</p>

<pre class="brush: js">const firstString = '2 + 2'; // Creates a string literal value
const secondString = new String('2 + 2'); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns the string "2 + 2"</pre>

<p>A <code>String</code> object has one property, <code>length</code>, that indicates the number of UTF-16 code units in the string. For example, the following code assigns <code>helloLength</code> the value 13, because "Hello, World!" has 13 characters, each represented by one UTF-16 code unit. You can access each code unit using an array bracket style. You can't change individual characters because strings are immutable array-like objects:</p>

<pre class="brush: js">const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // This has no effect, because strings are immutable
hello[0]; // This returns "H"
</pre>

<p>Characters whose Unicode scalar values are greater than U+FFFF (such as some rare Chinese/Japanese/Korean/Vietnamese characters and some emoji) are stored in UTF-16 with two surrogate code units each. For example, a string containing the single character U+1F600 "Emoji grinning face" will have length 2. Accessing the individual code units in such a string using brackets may have undesirable consequences such as the formation of strings with unmatched surrogate code units, in violation of the Unicode standard. (Examples should be added to this page after MDN bug 857438 is fixed.) See also {{jsxref("String.fromCodePoint()")}} or {{jsxref("String.prototype.codePointAt()")}}.</p>

<p>A <code>String</code> object has a variety of methods: for example those that return a variation on the string itself, such as <code>substring</code> and <code>toUpperCase</code>.</p>

<p>The following table summarizes the methods of {{jsxref("String")}} objects.</p>

<table class="standard-table">
 <caption>
 <h4 id="Methods_of_String">Methods of <code>String</code></h4>
 </caption>
 <thead>
  <tr>
   <th scope="col">Method</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("String.charAt", "charAt")}}, {{jsxref("String.charCodeAt", "charCodeAt")}}, {{jsxref("String.codePointAt", "codePointAt")}}</td>
   <td>Return the character or character code at the specified position in string.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}</td>
   <td>Return the position of specified substring in the string or last position of specified substring, respectively.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}}</td>
   <td>Returns whether or not the string starts, ends or contains a specified string.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.concat", "concat")}}</td>
   <td>Combines the text of two strings and returns a new string.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}}</td>
   <td>Constructs a string from the specified sequence of Unicode values. This is a method of the String class, not a String instance.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.split", "split")}}</td>
   <td>Splits a <code>String</code> object into an array of strings by separating the string into substrings.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.slice", "slice")}}</td>
   <td>Extracts a section of a string and returns a new string.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}</td>
   <td>Return the specified subset of the string, either by specifying the start and end indexes or the start index and a length.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.match", "match")}}, {{jsxref("String.matchAll", "matchAll")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.replaceAll", "replaceAll")}}, {{jsxref("String.search", "search")}}</td>
   <td>Work with regular expressions.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.toLowerCase", "toLowerCase")}}, {{jsxref("String.toUpperCase", "toUpperCase")}}</td>
   <td>
    <p>Return the string in all lowercase or all uppercase, respectively.</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("String.normalize", "normalize")}}</td>
   <td>Returns the Unicode Normalization Form of the calling string value.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.repeat", "repeat")}}</td>
   <td>Returns a string consisting of the elements of the object repeated the given times.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.trim", "trim")}}</td>
   <td>Trims whitespace from the beginning and end of the string.</td>
  </tr>
 </tbody>
</table>

<h3 id="Multi-line_template_literals">Multi-line template literals</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Template_literals">Template literals</a> are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.</p>

<p>Template literals are enclosed by the back-tick (` `) (<a class="external external-icon" href="https://en.wikipedia.org/wiki/Grave_accent">grave accent</a>) character instead of double or single quotes. Template literals can contain place holders. These are indicated by the Dollar sign and curly braces (<code>${expression}</code>).</p>

<h4 id="Multi-lines">Multi-lines</h4>

<p>Any new line characters inserted in the source are part of the template literal. Using normal strings, you would have to use the following syntax in order to get multi-line strings:</p>

<pre class="brush: js">console.log('string text line 1\n\
string text line 2');
// "string text line 1
// string text line 2"</pre>

<p>To get the same effect with multi-line strings, you can now write:</p>

<pre class="brush: js">console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"</pre>

<h4 id="Embedded_expressions">Embedded expressions</h4>

<p>In order to embed expressions within normal strings, you would use the following syntax:</p>

<pre class="brush: js">const five = 5;
const ten = 10;
console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');
// "Fifteen is 15 and not 20."</pre>

<p>Now, with template literals, you are able to make use of the syntactic sugar making substitutions like this more readable:</p>

<pre class="brush: js">const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."</pre>

<p>For more information, read about <a href="/en-US/docs/Web/JavaScript/Reference/Template_literals">Template literals</a> in the <a href="/en-US/docs/Web/JavaScript/Reference">JavaScript reference</a>.</p>

<h2 id="Internationalization">Internationalization</h2>

<p>The {{jsxref("Intl")}} object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for {{jsxref("Intl/Collator")}}, {{jsxref("Intl/NumberFormat")}}, and {{jsxref("Intl/DateTimeFormat")}} objects are properties of the <code>Intl</code> object.</p>

<h3 id="Date_and_time_formatting">Date and time formatting</h3>

<p>The {{jsxref("Intl/DateTimeFormat")}} object is useful for formatting date and time. The following formats a date for English as used in the United States. (The result is different in another time zone.)</p>

<pre class="brush: js">const msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
</pre>

<h3 id="Number_formatting">Number formatting</h3>

<p>The {{jsxref("Intl/NumberFormat")}} object is useful for formatting numbers, for example currencies.</p>

<pre class="brush: js">const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
</pre>

<h3 id="Collation">Collation</h3>

<p>The {{jsxref("Intl/Collator")}} object is useful for comparing and sorting strings.</p>

<p>For example, there are actually two different sort orders in German, <em>phonebook</em> and <em>dictionary</em>. Phonebook sort emphasizes sound, and it’s as if “ä”, “ö”, and so on were expanded to “ae”, “oe”, and so on prior to sorting.</p>

<pre class="brush: js">const names = ['Hochberg', 'Hönigswald', 'Holzman'];

const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// logs "Hochberg, Hönigswald, Holzman"
</pre>

<p>Some German words conjugate with extra umlauts, so in dictionaries it’s sensible to order ignoring umlauts (except when ordering words differing <em>only</em> by umlauts: <em>schon</em> before <em>schön</em>).</p>

<pre class="brush: js">const germanDictionary = new Intl.Collator('de-DE-u-co-dict');

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"
</pre>

<p>For more information about the {{jsxref("Intl")}} API, see also <a href="https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/">Introducing the JavaScript Internationalization API</a>.</p>

<div>{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</div>
