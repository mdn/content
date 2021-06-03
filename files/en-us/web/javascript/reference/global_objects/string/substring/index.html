---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
- JavaScript
- Method
- Prototype
- Reference
- String
browser-compat: javascript.builtins.String.substring
---
<div>{{JSRef}}</div>

<p>The <strong><code>substring()</code></strong> method returns the part of the
  <code>string</code> between the start and end indexes, or to the end of the string.</p>

<div>{{EmbedInteractiveExample("pages/js/string-substring.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
substring(indexStart)
substring(indexStart, indexEnd)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>indexStart</var></code></dt>
  <dd>The index of the first character to include in the returned substring.</dd>
  <dt><code><var>indexEnd</var></code> {{optional_inline}}</dt>
  <dd>The index of the first character to exclude from the returned substring.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new string containing the specified part of the given string.</p>

<h2 id="Description">Description</h2>

<p><code>substring()</code> extracts characters from <code><var>indexStart</var></code> up
  to <em>but not including</em> <code><var>indexEnd</var></code>. In particular:</p>

<ul>
  <li>If <code><var>indexEnd</var></code> is omitted, <code>substring()</code> extracts
    characters to the end of the string.</li>
  <li>If <code><var>indexStart</var></code> is equal to <code><var>indexEnd</var></code>,
    <code>substring()</code> returns an empty string.</li>
  <li>If <code><var>indexStart</var></code> is greater than
    <code><var>indexEnd</var></code>, then the effect of <code>substring()</code> is as if
    the two arguments were swapped; See example below.</li>
</ul>

<p>Any argument value that is less than <code>0</code> or greater than
  <code>stringName.length</code> is treated as if it were <code>0</code> and
  <code>stringName.length</code>, respectively.</p>

<p>Any argument value that is {{jsxref("NaN")}} is treated as if it were <code>0</code>.
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_substring">Using substring()</h3>

<p>The following example uses <code>substring()</code> to display characters from the
  string <code>'Mozilla'</code>:</p>

<pre class="brush: js">let anyString = 'Mozilla'

// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Displays 'Mozill'
console.log(anyString.substring(0, 6))

// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Displays 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))
</pre>

<h3 id="Using_substring_with_length_property">Using substring() with length property</h3>

<p>The following example uses the <code>substring()</code> method and
  {{jsxref("String.length", "length")}} property to extract the last characters of a
  particular string. This method may be easier to remember, given that you don't need to
  know the starting and ending indices as you would in the above examples.</p>

<pre class="brush: js">// Displays 'illa' the last 4 characters
let anyString = 'Mozilla'
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)

// Displays 'zilla' the last 5 characters
let anyString = 'Mozilla'
let anyString5 = anyString.substring(anyString.length - 5)
console.log(anyString5)
</pre>

<h3 id="The_difference_between_substring_and_substr">The difference between substring()
  and substr()</h3>

<p>There's a subtle difference between the <code>substring()</code> and
  {{jsxref("String.substr", "substr()")}} methods, so you should be careful not to get
  them confused.</p>

<p>The arguments of <code>substring()</code> represent the starting and ending indexes,
  while the arguments of <code>substr()</code> represent the starting index and the number
  of characters to include in the returned string.</p>

<p>Furthermore, <code>substr()</code> is considered a <strong>legacy feature in
    ECMAScript</strong> and could be removed from future versions, so it is best to avoid
  using it if possible.</p>

<pre class="brush: js">let text = 'Mozilla'
console.log(text.substring(2,5))  // =&gt; "zil"
console.log(text.substr(2,3))     // =&gt; "zil"</pre>

<h3 id="Differences_between_substring_and_slice">Differences between substring() and
  slice()</h3>

<p>The <code>substring()</code> and {{jsxref("String.slice", "slice()")}} methods are
  almost identical, but there are a couple of subtle differences between the two,
  especially in the way negative arguments are dealt with.</p>

<p>The <code>substring()</code> method swaps its two arguments if
  <code><var>indexStart</var></code> is greater than <code><var>indexEnd</var></code>,
  meaning that a string is still returned. The {{jsxref("String.slice", "slice()")}}
  method returns an empty string if this is the case.</p>

<pre class="brush: js">let text = 'Mozilla'
console.log(text.substring(5, 2))  // =&gt; "zil"
console.log(text.slice(5, 2))      // =&gt; ""
</pre>

<p>If either or both of the arguments are negative or <code>NaN</code>, the
  <code>substring()</code> method treats them as if they were <code>0</code>.</p>

<pre class="brush: js">console.log(text.substring(-5, 2))  // =&gt; "Mo"
console.log(text.substring(-5, -2)) // =&gt; ""
</pre>

<p><code>slice()</code> also treats <code>NaN</code> arguments as <code>0</code>, but when
  it is given negative values it counts backwards from the end of the string to find the
  indexes.</p>

<pre class="brush: js">console.log(text.slice(-5, 2))   // =&gt; ""
console.log(text.slice(-5, -2))  // =&gt; "zil"
</pre>

<p>See the {{jsxref("String.slice", "slice()")}} page for more examples with negative
  numbers.</p>

<h3 id="Replacing_a_substring_within_a_string">Replacing a substring within a string</h3>

<p>The following example replaces a substring within a string. It will replace both
  individual characters and substrings. The function call at the end of the example
  changes the string <code>Brave New World</code> to <code>Brave New Web</code>.</p>

<pre class="brush: js">// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i &lt; fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
    }
  }
  return fullS
}

replaceString('World', 'Web', 'Brave New World')
</pre>

<p>Note that this can result in an infinite loop if <code>oldS</code> is itself a
  substring of <code>newS</code> — for example, if you attempted to replace
  '<code>World</code>' with '<code>OtherWorld</code>' here.</p>

<p>A better method for replacing strings is as follows:</p>

<pre class="brush: js">function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS)
}
</pre>

<p>The code above serves as an example for substring operations. If you need to replace
  substrings, most of the time you will want to use
  {{jsxref("String.prototype.replace()")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("String.prototype.substr()")}}</li>
  <li>{{jsxref("String.prototype.slice()")}}</li>
</ul>
