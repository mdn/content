---
title: Unicode property escapes
slug: Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
tags:
  - Guide
  - JavaScript
  - Reference
  - Regular Expressions
  - regex
  - unicode property escapes
---
<p>{{jsSidebar("JavaScript Guide")}}</p>

<p><strong>Unicode property escapes</strong> <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a> allows for matching characters based on their Unicode properties. A character is described by several properties which are either binary ("boolean-like") or non-binary. For instance, unicode property escapes can be used to match emojis, punctuations, letters (even letters from specific languages or scripts), etc.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-unicode-property-escapes.html", "taller")}}</div>

<div class="notecard note">
<p><strong>Note:</strong> For Unicode property escapes to work, a regular expression must use <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags">the <code>u</code> flag</a> which indicates a string must be considered as a series of Unicode code points. See also <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode">RegExp.prototype.unicode</a></code>.</p>
</div>

<div class="notecard note">
<p><strong>Note:</strong> Some Unicode properties encompasses much more characters than some <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">character classes</a> (such as <code>\w</code> which matches only latin letters, <code>a</code> to <code>z</code>) but the latter is better supported among browsers (as of January 2020).</p>
</div>

<h2 id="Syntax">Syntax</h2>


<pre class="brush: js">// Non-binary values
\p{<em>UnicodePropertyValue</em>}
\p{<em>UnicodePropertyName</em>=<em>UnicodePropertyValue</em>}

// Binary and non-binary values
\p{<em>UnicodeBinaryPropertyName</em>}

// Negation: \P is negated \p
\P{<em>UnicodePropertyValue</em>}
\P{<em>UnicodeBinaryPropertyName</em>}
</pre>

<ul>
 <li><a href="https://unicode.org/reports/tr18/#General_Category_Property">General_Category</a> (<code>gc</code>)</li>
 <li><a href="https://unicode.org/reports/tr24/#Script">Script</a> (<code>sc</code>)</li>
 <li><a href="https://unicode.org/reports/tr24/#Script_Extensions">Script_Extensions</a> (<code>scx</code>)</li>
</ul>

<p>See also <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt">PropertyValueAliases.txt</a></p>

<dl>
 <dt>UnicodeBinaryPropertyName</dt>
 <dd>The name of a <a href="https://tc39.es/ecma262/#table-binary-unicode-properties">binary property</a>. E.g.: <code><a href="https://unicode.org/reports/tr18/#General_Category_Property">ASCII</a></code>, <code><a href="https://unicode.org/reports/tr44/#Alphabetic">Alpha</a></code>, <code>Math</code>, <code><a href="https://unicode.org/reports/tr44/#Diacritic">Diacritic</a></code>, <code><a href="https://unicode.org/reports/tr51/#Emoji_Properties">Emoji</a></code>, <code><a href="https://unicode.org/reports/tr44/#Hex_Digit">Hex_Digit</a></code>, <code>Math</code>, <code><a href="https://unicode.org/reports/tr44/#White_Space">White_space</a></code>, etc. See <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt">Unicode Data PropList.txt </a>for more info.</dd>
 <dt>UnicodePropertyName</dt>
 <dd>The name of a <a href="https://tc39.es/ecma262/#table-nonbinary-unicode-properties">non-binary</a> property:</dd>
 <dt>UnicodePropertyValue</dt>
 <dd>One of the tokens listed in the Values section, below. Many values have aliases or shorthand (e.g. the value <code>Decimal_Number</code> for the <code>General_Category</code> property may be written <code>Nd</code>, <code>digit</code>, or <code>Decimal_Number</code>). For most values, the <em><code>UnicodePropertyName</code></em> part and equals sign may be omitted. If a <em><code>UnicodePropertyName</code></em> is specified, the value must correspond to the property type given.</dd>
</dl>

<div class="notecard note">
<p><strong>Note:</strong> As there are many properties and values available, we will not describe them exhaustively here but rather provide various examples</p>
</div>

<h2 id="Rationale">Rationale</h2>

<p>Before ES2018 there was no performance-efficient way to match characters from different sets based on <code>scripts</code> (like Macedonian, Greek, Georgian etc.) or <code>propertyName</code> (like Emoji etc) in JavaScript. Check out <a href="https://github.com/tc39/proposal-regexp-unicode-property-escapes">tc39 Proposal on Unicode Property Escapes</a> for more info.</p>

<h2 id="Examples">Examples</h2>

<h3 id="General_categories">General categories</h3>

<p>General categories are used to classify Unicode characters and subcategories are available to define a more precise categorization. It is possible to use both short or long forms in Unicode property escapes.</p>

<p>They can be used to match letters, numbers, symbols, punctuations, spaces, etc. For a more exhaustive list of general categories, please refer to <a href="https://unicode.org/reports/tr18/#General_Category_Property">the Unicode specification</a>.</p>

<pre class="brush: js">// finding all the letters of a text
let story = "It’s the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
story.match(/\p{General_Category=Letter}/gu);

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (conjunction of all the subcategories using short aliases)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
</pre>

<h3 id="Scripts_and_script_extensions">Scripts and script extensions</h3>

<p>Some languages use different scripts for their writing system. For instance, English and Spanish are written using the Latin script while Arabic and Russian are written with other scripts (respectively Arabic and Cyrillic). The <code>Script</code> and <code>Script_Extensions</code> Unicode properties allow regular expression to match characters according to the script they are mainly used with (<code>Script</code>) or according to the set of scripts they belong to (<code>Script_Extensions</code>).</p>

<p>For example, <code>A</code> belongs to the <code>Latin</code> script and <code>ε</code> to the <code>Greek</code> script.</p>

<pre class="brush: js">let mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Greek}/u); // ε

// Using the short name Sc for the Script property
mixedCharacters.match(/\p{Sc=Cyrillic}/u); // Л
</pre>

<p>For more details, please refer to <a href="https://unicode.org/reports/tr24/#Script">the Unicode specification</a> and the <a href="https://tc39.es/ecma262/#table-unicode-script-values">Scripts table in the ECMAScript specification</a>.</p>

<p>If a character is used in a limited set of scripts, the <code>Script</code> property will only match for the "predominant" used script. If we want to match characters based on a "non-predominant" script, we could use the <code>Script_Extensions</code> property (<code>Scx</code> for short).</p>

<pre class="brush: js">// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script        super()

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
</pre>

<h3 id="Unicode_property_escapes_vs._character_classes">Unicode property escapes vs. character classes</h3>

<p>With JavaScript regular expressions, it is also possible to use <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">character classes</a> and especially <code>\w</code> or <code>\d</code> to match letters or digits. However, such forms only match characters from the <em>Latin</em> script (in other words, <code>a</code> to <code>z</code> and <code>A</code> to <code>Z</code> for <code>\w</code> and <code>0</code> to <code>9</code> for <code>\d</code>). As shown in <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes#looking_for_a_word_from_unicode_characters">this example</a>, it might be a bit clumsy to work with non Latin texts.</p>

<p>Unicode property escapes categories encompass much more characters and <code>\p{Letter}</code> or <code>\p{Number}</code> will work for any script.</p>

<pre class="brush: js">// Trying to use ranges to avoid \w limitations:

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Using Unicode property escapes instead
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular expressions guide</a>

  <ul>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Character classes</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">Assertions</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers">Quantifiers</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Groups and ranges</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">The <code>RegExp()</code> constructor</a></li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode">RegExp.prototype.unicode</a></code></li>
 <li><a href="https://en.wikipedia.org/wiki/Unicode_character_property">Unicode character property — Wikipedia</a></li>
 <li><a href="https://2ality.com/2017/07/regexp-unicode-property-escapes.html">A blog post from Axel Rauschmayer about Unicode property escapes</a></li>
 <li><a href="https://unicode.org/reports/tr18/#Categories">The Unicode document for Unicode properties</a></li>
 <li><a href="https://tc39.es/ecma262/#sec-runtime-semantics-unicodematchproperty-p">UnicodeMatchProperty in the ECMAScript specification</a></li>
</ul>
