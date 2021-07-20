---
title: Quantifiers
slug: Web/JavaScript/Guide/Regular_Expressions/Quantifiers
tags:
  - Guide
  - JavaScript
  - Reference
  - Regular Expressions
  - quantifiers
  - regex
---
<p>{{jsSidebar("JavaScript Guide")}}</p>

<p>Quantifiers indicate numbers of characters or expressions to match.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}</div>

<h2 id="Types">Types</h2>


<div class="notecard note">
<p><strong>Note:</strong> In the following, <em>item</em> refers not only to singular characters, but also includes <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">character classes</a>, <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">Unicode property escapes</a>, <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">groups and ranges</a>.</p>
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

<h2 id="Examples">Examples</h2>

<h3 id="Repeated_pattern">Repeated pattern</h3>

<pre class="brush: js">var wordEndingWithAs = /\w+a+\b/;
var delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
</pre>

<h3 id="Counting_characters">Counting characters</h3>

<pre class="brush: js">var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{1,6}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord));    // [ "Why", "do", "I", "have", "to", "learn", "table" ]
console.table(sentence.match(loooongWord));      // ["multiplication"]
</pre>

<h3 id="Optional_character">Optional character</h3>

<pre class="brush: js">var britishText = "He asked his neighbour a favour.";
var americanText = "He asked his neighbor a favor.";

var regexpEnding = /\w+ou?r/g;
// \w+ One or several letters
// o   followed by an "o",
// u?  optionally followed by a "u"
// r   followed by an "r"

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
</pre>

<h3 id="Greedy_versus_non-greedy">Greedy versus non-greedy</h3>

<pre class="brush: js">var text = "I must be getting somewhere near the centre of the earth.";
var greedyRegexp = /[\w ]+/;
// [\w ]      a letter of the latin alphabet or a whitespace
//      +     one or several times

console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the centre of the earth"
// almost all of the text matches (leaves out the dot character)

var nonGreedyRegexp = /[\w ]+?/; // Notice the question mark
console.log(text.match(nonGreedyRegexp));
// "I"
// The match is the smallest one possible
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular expressions guide</a>

  <ul>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Character classes</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">Assertions</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">Unicode property escapes</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Groups and ranges</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">The <code>RegExp()</code> constructor</a></li>
 <li><a href="https://tc39.es/ecma262/#sec-quantifier">Quantifiers in the ECMAScript specification</a></li>
</ul>
