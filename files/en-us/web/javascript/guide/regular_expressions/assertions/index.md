---
title: Assertions
slug: Web/JavaScript/Guide/Regular_Expressions/Assertions
tags:
  - Assertions
  - Guide
  - JavaScript
  - Reference
  - Regular Expressions
  - regex
---
<p>{{jsSidebar("JavaScript Guide")}}</p>

<p>Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}</div>

<h2 id="Types">Types</h2>


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

<h2 id="Examples">Examples</h2>

<h3 id="General_boundary-type_overview_example">General boundary-type overview example</h3>

<pre class="brush: js">// Using Regex boundaries to fix buggy string.
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) Use ^ to fix the matching at the begining of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim,'h');
console.log(1, buggyMultiline); // fix 'tey', 'tangs' =&gt; 'hey', 'hangs'. Avoid 'traa'.

// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.');
console.log(2, buggyMultiline); // fix  'traa' =&gt; 'tree'.

// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim,'t');
console.log(3, buggyMultiline); // fix  'ihe' but does not touch 'light'.

// 4) Use \B to match characters inside borders of an entity.
fixedMultiline = buggyMultiline.replace(/\Bo/gim,'e');
console.log(4, fixedMultiline); // fix  'greon' but does not touch 'on'.
</pre>

<h3 id="Matching_the_beginning_of_input_using_a_control_character">Matching the beginning of input using a ^ control character</h3>

<p>Use <code>^</code> for matching at the beginning of input. In this example, we can get the fruits that start with 'A' by a <code>/^A/</code> regex. For selecting appropriate fruits we can use the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter </a>method with an <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow</a> function. </p>

<pre class="brush: js">let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

let fruitsStartsWithA = fruits.filter(fruit =&gt; /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]</pre>

<p>In the second example <code>^</code> is used both for matching at the beginning of input and for creating negated or complemented character class when used within <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">groups</a>.</p>

<pre class="brush: js">let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Selecting fruits that dose not start by 'A' by a /^[^A]/ regex.
// In this example, two meanings of '^' control symbol are represented:
// 1) Matching begining of the input
// 2) A negated or complemented character class: [^A]
// That is, it matches anything that is not enclosed in the brackets.

let fruitsStartsWithNotA = fruits.filter(fruit =&gt; /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]</pre>

<h3 id="Matching_a_word_boundary">Matching a word boundary</h3>

<pre class="brush: js">let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
let enEdSelection = fruitsWithDescription.filter(descr =&gt; /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]</pre>

<h3 id="Lookahead_assertion">Lookahead assertion</h3>

<pre class="brush: js">// JS Lookahead assertion x(?=y)

let regex = /First(?= test)/g;

console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null
</pre>

<h3 id="Basic_negative_lookahead_assertion">Basic negative lookahead assertion</h3>

<p>For example, <code>/\d+(?!\.)/</code> matches a number only if it is not followed by a decimal point. <code>/\d+(?!\.)/.exec('3.141')</code> matches "141" but not "3.</p>

<pre class="brush: js">console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]
</pre>

<h3 id="Different_meaning_of_!_combination_usage_in_Assertions_and_Ranges">Different meaning of '?!' combination usage in Assertions and  Ranges </h3>

<p>Different meaning of <code>?!</code> combination usage in <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">Assertions</a> <code>/x(?!y)/ </code>and <a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Ranges</a> <code>[^?!]</code>.</p>

<pre class="brush: js">let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Different meaning of '?!' combination usage in Assertions /x(?!y)/ and  Ranges /[^?!]/
let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
</pre>

<h3 id="Lookbehind_assertion">Lookbehind assertion</h3>

<pre class="brush: js">let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter( fruit =&gt; fruit.match(/(?&lt;=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular expressions guide</a>

  <ul>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Character classes</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers">Quantifiers</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">Unicode property escapes</a></li>
   <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Groups and ranges</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">The <code>RegExp()</code> constructor</a></li>
 <li><a href="https://tc39.es/ecma262/#sec-assertion">Assertions in the ECMAScript specification</a></li>
</ul>
