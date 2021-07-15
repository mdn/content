---
title: Regular expression syntax cheatsheet
slug: Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
tags:
  - Cheatsheet
  - Guide
  - JavaScript
  - RegExp
---
<div>{{jsSidebar("JavaScript Guide")}}</div>

<p><span class="seoSummary">This page provides an overall cheat sheet of all the capabilities of <code>RegExp</code> syntax by aggregating the content of the articles in the <code>RegExp</code> guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">the guide</a>.</span></p>

<h2 id="Character_classes"><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Character classes</a></h2>


<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Characters</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
 </tbody>
 <tbody>
  <tr>
   <td><code>.</code></td>
   <td>
    <p>Has one of the following meanings:</p>

    <ul>
     <li>Matches any single character <em>except</em> line terminators: <code>\n</code>, <code>\r</code>, <code>\u2028</code> or <code>\u2029</code>. For example, <code>/.y/</code> matches "my" and "ay", but not "yes", in "yes make my day".</li>
     <li>Inside a character class, the dot loses its special meaning and matches a literal dot.</li>
    </ul>

    <p>Note that the <code>m</code> multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class <code>[^]</code> can be used — it will match any character including newlines.</p>

    <p>ES2018 added the <code>s</code> "dotAll" flag, which allows the dot to also match line terminators.</p>
   </td>
  </tr>
  <tr>
   <td><code>\d</code></td>
   <td>
    <p>Matches any digit (Arabic numeral). Equivalent to <code>[0-9]</code>. For example, <code>/\d/</code> or <code>/[0-9]/</code> matches "2" in "B2 is the suite number".</p>
   </td>
  </tr>
  <tr>
   <td><code>\D</code></td>
   <td>
    <p>Matches any character that is not a digit (Arabic numeral). Equivalent to <code>[^0-9]</code>. For example, <code>/\D/</code> or <code>/[^0-9]/</code> matches "B" in "B2 is the suite number".</p>
   </td>
  </tr>
  <tr>
   <td><code>\w</code></td>
   <td>
    <p>Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to <code>[A-Za-z0-9_]</code>. For example, <code>/\w/</code> matches "a" in "apple", "5" in "$5.28", and "3" in "3D".</p>
   </td>
  </tr>
  <tr>
   <td><code>\W</code></td>
   <td>
    <p>Matches any character that is not a word character from the basic Latin alphabet. Equivalent to <code>[^A-Za-z0-9_]</code>. For example, <code>/\W/</code> or <code>/[^A-Za-z0-9_]/</code> matches "%" in "50%".</p>
   </td>
  </tr>
  <tr>
   <td><code>\s</code></td>
   <td>
    <p>Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to <code>[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. For example, <code>/\s\w*/</code> matches " bar" in "foo bar".</p>
   </td>
  </tr>
  <tr>
   <td><code>\S</code></td>
   <td>
    <p>Matches a single character other than white space. Equivalent to <code>[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. For example, <code>/\S\w*/</code> matches "foo" in "foo bar".</p>
   </td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>Matches a horizontal tab.</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>Matches a carriage return.</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>Matches a linefeed.</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>Matches a vertical tab.</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>Matches a form-feed.</td>
  </tr>
  <tr>
   <td><code>[\b]</code></td>
   <td>Matches a backspace. If you're looking for the word-boundary character (<code>\b</code>), see <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">Boundaries</a>.</td>
  </tr>
  <tr>
   <td><code>\0</code></td>
   <td>Matches a NUL character. Do not follow this with another digit.</td>
  </tr>
  <tr>
   <td><code>\c<em>X</em></code></td>
   <td>
    <p>Matches a control character using <a href="https://en.wikipedia.org/wiki/Caret_notation">caret notation</a>, where "X" is a letter from A–Z (corresponding to codepoints <code>U+0001</code><em>–</em><code>U+001F</code>). For example, <code>/\cM/</code> matches "\r" in "\r\n".</p>
   </td>
  </tr>
  <tr>
   <td><code>\x<em>hh</em></code></td>
   <td>Matches the character with the code <code><em>hh</em></code> (two hexadecimal digits).</td>
  </tr>
  <tr>
   <td><code>\u<em>hhhh</em></code></td>
   <td>Matches a UTF-16 code-unit with the value <code><em>hhhh</em></code> (four hexadecimal digits).</td>
  </tr>
  <tr>
   <td><code>\u<em>{hhhh}</em> or <em>\u{hhhhh}</em></code></td>
   <td>(Only when the <code>u</code> flag is set.) Matches the character with the Unicode value <code>U+<em>hhhh</em></code> or <code>U+<em>hhhhh</em></code> (hexadecimal digits).</td>
  </tr>
  <tr>
   <td><code>\</code></td>
   <td>
    <p>Indicates that the following character should be treated specially, or "escaped". It behaves one of two ways.</p>

    <ul>
     <li>For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, <code>/b/</code> matches the character "b". By placing a backslash in front of "b", that is by using <code>/\b/</code>, the character becomes special to mean match a word boundary.</li>
     <li>For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, "*" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, <code>/a*/</code> means match 0 or more "a"s. To match <code>*</code> literally, precede it with a backslash; for example, <code>/a\*/</code> matches "a*".</li>
    </ul>

    <p>Note that some characters like <code>:</code>, <code>-</code>, <code>@</code>, etc. neither have a special meaning when escaped nor when unescaped. Escape sequences like <code>\:</code>, <code>\-</code>, <code>\@</code> will be equivalent to their literal, unescaped character equivalents in regular expressions. However, in regular expressions with the <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2">unicode flag</a>, these will cause an <em>invalid identity escape</em> error. This is done to ensure backward compatibility with existing code that uses new escape sequences like <code>\p</code> or <code>\k</code>.</p>

    <div class="notecard note">
    <p><strong>Note:</strong> To match this character literally, escape it with itself. In other words to search for <code>\</code> use <code>/\\/</code>.</p>
    </div>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Assertions"><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">Assertions</a></h2>


<h3 id="Boundary-type_assertions">Boundary-type assertions</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Characters</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>^</code></td>
   <td>
    <p>Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, <code>/^A/</code> does not match the "A" in "an A", but does match the first "A" in "An A".</p>

    <div class="notecard note">
    <p><strong>Note:</strong> This character has a different meaning when it appears at the start of a <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">group</a>.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code>$</code></td>
   <td>
    <p>Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, <code>/t$/</code> does not match the "t" in "eater", but does match it in "eat".</p>
   </td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>
    <p>Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.</p>

    <p>Examples:</p>

    <ul>
     <li><code>/\bm/</code> matches the "m" in "moon".</li>
     <li><code>/oo\b/</code> does not match the "oo" in "moon", because "oo" is followed by "n" which is a word character.</li>
     <li><code>/oon\b/</code> matches the "oon" in "moon", because "oon" is the end of the string, thus not followed by a word character.</li>
     <li><code>/\w\b\w/</code> will never match anything, because a word character can never be followed by both a non-word and a word character.</li>
    </ul>

    <p>To match a backspace character (<code>[\b]</code>), see <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Character Classes</a>.</p>
   </td>
  </tr>
  <tr>
   <td><code>\B</code></td>
   <td>
    <p>Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, <code>/\Bon/</code> matches "on" in "at noon", and <code>/ye\B/</code> matches "ye" in "possibly yesterday".</p>
   </td>
  </tr>
 </tbody>
</table>

<h3 id="Other_assertions">Other assertions</h3>

<div class="notecard note">
<p><strong>Note:</strong> The <code>?</code> character may also be used as a quantifier.</p>
</div>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Characters</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>x(?=y)</code></td>
   <td>
    <p><strong>Lookahead assertion: </strong>Matches "x" only if "x" is followed by "y". For example, /<code>Jack(?=Sprat)/</code> matches "Jack" only if it is followed by "Sprat".<br>
     <code>/Jack(?=Sprat|Frost)/</code> matches "Jack" only if it is followed by "Sprat" or "Frost". However, neither "Sprat" nor "Frost" is part of the match results.</p>
   </td>
  </tr>
  <tr>
   <td><code>x(?!y)</code></td>
   <td>
    <p><strong>Negative lookahead assertion: </strong>Matches "x" only if "x" is not followed by "y". For example, <code>/\d+(?!\.)/</code> matches a number only if it is not followed by a decimal point. <code>/\d+(?!\.)/.exec('3.141')</code> matches "141" but not "3".</p>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;=y)x</code></td>
   <td>
    <p><strong>Lookbehind assertion: </strong>Matches "x" only if "x" is preceded by "y". For example, <code>/(?&lt;=Jack)Sprat/</code> matches "Sprat" only if it is preceded by "Jack". <code>/(?&lt;=Jack|Tom)Sprat/</code> matches "Sprat" only if it is preceded by "Jack" or "Tom". However, neither "Jack" nor "Tom" is part of the match results.</p>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;!y)x</code></td>
   <td>
    <p><strong>Negative lookbehind assertion: </strong>Matches "x" only if "x" is not preceded by "y". For example, <code>/(?&lt;!-)\d+/</code> matches a number only if it is not preceded by a minus sign. <code>/(?&lt;!-)\d+/.exec('3')</code> matches "3". <code>/(?&lt;!-)\d+/.exec('-3')</code>  match is not found because the number is preceded by the minus sign.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Groups_and_ranges"><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Groups and ranges</a></h2>


<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Characters</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><em>x</em>|<em>y</em></code></td>
   <td>
    <p>Matches either "x" or "y". For example, <code>/green|red/</code> matches "green" in "green apple" and "red" in "red apple".</p>
   </td>
  </tr>
  <tr>
   <td><code>[xyz]<br>
    [a-c]</code></td>
   <td>
    <p>A character class. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. </p>

    <p>For example, <code>[abcd]</code> is the same as <code>[a-d]</code>. They match the "b" in "brisket", and the "c" in "chop".</p>

    <p>For example, <code>[abcd-]</code> and <code>[-abcd]</code> match the "b" in "brisket", the "c" in "chop", and the "-" (hyphen) in "non-profit".</p>

    <p>For example, <code>[\w-]</code> is the same as <code>[A-Za-z0-9_-]</code>. They both match the "b" in "brisket", the "c" in "chop", and the "n" in "non-profit".</p>
   </td>
  </tr>
  <tr>
   <td>
    <p><code>[^xyz]<br>
     [^a-c]</code></p>
   </td>
   <td>
    <p>A negated or complemented character class. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character. For example, <code>[^abc]</code> is the same as <code>[^a-c]</code>. They initially match "o" in "bacon" and "h" in "chop".</p>

    <div class="notecard note">
    <p><strong>Note:</strong> The ^ character may also indicate the <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">beginning of input</a>.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code>(<em>x</em>)</code></td>
   <td>
    <p><strong>Capturing group: </strong>Matches <code><em>x</em></code> and remembers the match. For example, <code>/(foo)/</code> matches and remembers "foo" in "foo bar". </p>

    <p>A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements (<code>[1], ..., [n]</code>) or from the predefined <code>RegExp</code> object's properties (<code>$1, ..., $9</code>).</p>

    <p>Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).</p>

    <p><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match">String.match()</a></code> won't return groups if the <code>/.../g</code> flag is set. However, you can still use <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll">String.matchAll()</a></code> to get all matches.</p>
   </td>
  </tr>
  <tr>
   <td><code>\<em>n</em></code></td>
   <td>
    <p>Where "n" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, <code>/apple(,)\sorange\1/</code> matches "apple, orange," in "apple, orange, cherry, peach".</p>
   </td>
  </tr>
  <tr>
   <td>\k&lt;Name&gt;</td>
   <td>
    <p>A back reference to the last substring matching the <strong>Named capture group </strong>specified by <code>&lt;Name&gt;</code>.</p>

    <p>For example, <code>/(?&lt;title&gt;\w+), yes \k&lt;title&gt;/</code> matches "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".</p>

    <div class="notecard note">
    <p><strong>Note:</strong> <code>\k</code> is used literally here to indicate the beginning of a back reference to a Named capture group.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;Name&gt;x)</code></td>
   <td>
    <p><strong>Named capturing group: </strong>Matches "x" and stores it on the groups property of the returned matches under the name specified by <code>&lt;Name&gt;</code>. The angle brackets (<code>&lt;</code> and <code>&gt;</code>) are required for group name.</p>

    <p>For example, to extract the United States area code from a phone number, we could use <code>/\((?&lt;area&gt;\d\d\d)\)/</code>. The resulting number would appear under <code>matches.groups.area</code>.</p>
   </td>
  </tr>
  <tr>
   <td><code>(?:<em>x</em>)</code></td>
   <td><strong>Non-capturing group: </strong>Matches "x" but does not remember the match. The matched substring cannot be recalled from the resulting array's elements (<code>[1], ..., [n]</code>) or from the predefined <code>RegExp</code> object's properties (<code>$1, ..., $9</code>).</td>
  </tr>
 </tbody>
</table>

<h2 id="Quantifiers"><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers">Quantifiers</a></h2>


<div class="notecard note">
<p><strong>Note:</strong> In the following, <em>item</em> refers not only to singular characters, but also includes <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">character classes</a>, <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">Unicode property escapes</a>, <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">groups and ranges</a>.</p>
</div>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Characters</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><em>x</em>*</code></td>
   <td>
    <p>Matches the preceding item "x" 0 or more times. For example, <code>/bo*/</code> matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted".</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>+</code></td>
   <td>
    <p>Matches the preceding item "x" 1 or more times. Equivalent to <code>{1,}</code>. For example, <code>/a+/</code> matches the "a" in "candy" and all the "a"'s in "caaaaaaandy".</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>?</code></td>
   <td>
    <p>Matches the preceding item "x" 0 or 1 times. For example, <code>/e?le?/</code> matches the "el" in "angel" and the "le" in "angle."</p>

    <p>If used immediately after any of the quantifiers <code>*</code>, <code>+</code>, <code>?</code>, or <code>{}</code>, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>{<em>n</em>}</code></td>
   <td>
    <p>Where "n" is a positive integer, matches exactly "n" occurrences of the preceding item "x". For example, <code>/a{2}/</code> doesn't match the "a" in "candy", but it matches all of the "a"'s in "caandy", and the first two "a"'s in "caaandy".</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>{<em>n</em>,}</code></td>
   <td>
    <p>Where "n" is a positive integer, matches at least "n" occurrences of the preceding item "x". For example, <code>/a{2,}/</code> doesn't match the "a" in "candy", but matches all of the a's in "caandy" and in "caaaaaaandy".</p>
   </td>
  </tr>
  <tr>
   <td><code><em>x</em>{<em>n</em>,<em>m</em>}</code></td>
   <td>
    <p>Where "n" is 0 or a positive integer, "m" is a positive integer, and <code><em>m</em> &gt; <em>n</em></code>, matches at least "n" and at most "m" occurrences of the preceding item "x". For example, <code>/a{1,3}/</code> matches nothing in "cndy", the "a" in "candy", the two "a"'s in "caandy", and the first three "a"'s in "caaaaaaandy". Notice that when matching "caaaaaaandy", the match is "aaa", even though the original string had more "a"s in it.</p>
   </td>
  </tr>
  <tr>
   <td>
    <p><code><em>x</em>*?</code><br>
     <code><em>x</em>+?</code><br>
     <code><em>x</em>??</code><br>
     <code><em>x</em>{n}?</code><br>
     <code><em>x</em>{n,}?</code><br>
     <code><em>x</em>{n,m}?</code></p>
   </td>
   <td>
    <p>By default quantifiers like <code>*</code> and <code>+</code> are "greedy", meaning that they try to match as much of the string as possible. The <code>?</code> character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match. For example, given a string like "some &lt;foo&gt; &lt;bar&gt; new &lt;/bar&gt; &lt;/foo&gt; thing":</p>

    <ul>
     <li><code>/&lt;.*&gt;/</code> will match "&lt;foo&gt; &lt;bar&gt; new &lt;/bar&gt; &lt;/foo&gt;"</li>
     <li><code>/&lt;.*?&gt;/</code> will match "&lt;foo&gt;"</li>
    </ul>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Unicode_property_escapes"><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">Unicode property escapes</a></h2>


<pre class="brush: js">// Non-binary values
\p{<em>UnicodePropertyValue</em>}
\p{<em>UnicodePropertyName</em>=<em>UnicodePropertyValue</em>}

// Binary and non-binary values
\p{<em>UnicodeBinaryPropertyName</em>}

// Negation: \P is negated \p
\P{<em>UnicodePropertyValue</em>}
\P{<em>UnicodeBinaryPropertyName</em>}
</pre>

<dl>
 <dt>UnicodeBinaryPropertyName</dt>
 <dd>The name of a <a href="https://tc39.es/ecma262/#table-binary-unicode-properties">binary property</a>. E.g.: <code><a href="https://unicode.org/reports/tr18/#General_Category_Property">ASCII</a></code>, <code><a href="https://unicode.org/reports/tr44/#Alphabetic">Alpha</a></code>, <code>Math</code>, <code><a href="https://unicode.org/reports/tr44/#Diacritic">Diacritic</a></code>, <code><a href="https://unicode.org/reports/tr51/#Emoji_Properties">Emoji</a></code>, <code><a href="https://unicode.org/reports/tr44/#Hex_Digit">Hex_Digit</a></code>, <code>Math</code>, <code><a href="https://unicode.org/reports/tr44/#White_Space">White_space</a></code>, etc. See <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt">Unicode Data PropList.txt </a>for more info.</dd>
 <dt>UnicodePropertyName</dt>
  <dd>The name of a <a href="https://tc39.es/ecma262/#table-nonbinary-unicode-properties">non-binary</a> property:
<ul>
 <li><a href="https://unicode.org/reports/tr18/#General_Category_Property">General_Category</a> (<code>gc</code>)</li>
 <li><a href="https://unicode.org/reports/tr24/#Script">Script</a> (<code>sc</code>)</li>
 <li><a href="https://unicode.org/reports/tr24/#Script_Extensions">Script_Extensions</a> (<code>scx</code>)</li>
</ul>
<p>See also <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt">PropertyValueAliases.txt</a></p>
</dd>
 <dt>UnicodePropertyValue</dt>
 <dd>One of the tokens listed in the Values section, below. Many values have aliases or shorthand (e.g. the value <code>Decimal_Number</code> for the <code>General_Category</code> property may be written <code>Nd</code>, <code>digit</code>, or <code>Decimal_Number</code>). For most values, the <em><code>UnicodePropertyName</code></em> part and equals sign may be omitted. If a <em><code>UnicodePropertyName</code></em> is specified, the value must correspond to the property type given.</dd>
</dl>

<div class="notecard note">
<p><strong>Note:</strong> As there are many properties and values available, we will not describe them exhaustively here but rather provide various examples</p>
</div>
