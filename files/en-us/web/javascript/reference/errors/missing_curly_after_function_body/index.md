---
title: 'SyntaxError: missing } after function body'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
tags:
- Error
- Errors
- JavaScript
- SyntaxError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "missing } after function body" occurs when there is a syntax
  mistake when creating a function somewhere. Check if any closing curly brackets or
  parenthesis are in the correct order.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after function body (Firefox)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There is a syntax mistake when creating a function somewhere. Also check if any closing
  curly brackets or parenthesis are in the correct order. Indenting or formatting the code
  a bit nicer might also help you to see through the jungle.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Forgotten_closing_curly_bracket">Forgotten closing curly bracket</h3>

<p>Oftentimes, there is a missing curly bracket in your function code:</p>

<pre class="brush: js example-bad">var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
</pre>

<p>Correct would be:</p>

<pre class="brush: js example-good">var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};</pre>

<p>It can be more obscure when using <a href="/en-US/docs/Glossary/IIFE">IIFE</a>, <a
    href="/en-US/docs/Web/JavaScript/Closures">Closures</a>, or other constructs that use
  a lot of different parenthesis and curly brackets, for example.</p>

<pre class="brush: js example-bad">(function() { if (true) { return false; } );
</pre>

<p>Oftentimes, indenting differently or double checking indentation helps to spot these
  errors.</p>

<pre class="brush: js example-good">(function() {
  if (true) {
    return false;
  }
});</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
</ul>
