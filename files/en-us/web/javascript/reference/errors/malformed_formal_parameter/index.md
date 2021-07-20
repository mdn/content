---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
tags:
- Error
- Errors
- JavaScript
- SyntaxError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "malformed formal parameter" occurs when the argument list of
  a
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code>
  constructor call is invalid somehow.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">SyntaxError: Expected {x} (Edge)
SyntaxError: malformed formal parameter (Firefox)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There is a
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code>
  constructor with at least two arguments passed in the code. The last argument is the
  source code for the new function you're creating. All the rest make up your new
  function's argument list.</p>

<p>The argument list is invalid somehow. Perhaps you accidentally picked a keyword like
  <code>if</code> or <code>var</code> as an argument name, or perhaps there's some stray
  punctuation in your argument list. Or maybe you accidentally passed an invalid value,
  like a number or object.</p>

<h3 id="OK_that_fixed_my_problem._But_why_didnt_you_say_that_in_the_first_place">OK, that
  fixed my problem. But why didn't you say that in the first place?</h3>

<p>Admittedly the wording in the error message is slightly strange. "Formal parameter" is
  a fancy way of saying "function argument". And we use the word "malformed" because all
  Firefox engineers are huge fans of 19th-century Gothic horror novels.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">var f = Function('x y', 'return x + y;');
// SyntaxError (missing a comma)

var f = Function('x,', 'return x;');
// SyntaxError (extraneous comma)

var f = Function(37, "alert('OK')");
// SyntaxError (numbers can't be argument names)
</pre>

<h3 id="Valid_cases">Valid cases</h3>

<pre class="brush: js example-good">var f = Function('x, y', 'return x + y;');  // correctly punctuated

var f = Function('x', 'return x;');

// if you can, avoid using Function - this is much faster
var f = function(x) { return x; };
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code>
  </li>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">About functions</a></li>
  <li><a href="https://www.gutenberg.org/ebooks/84"><em>Frankenstein</em> by Mary
      Wollstonecraft Shelley, full e-text</a> ("Cursed (although I curse myself) be the
    hands that formed you! You have made me wretched beyond expression. You have left me
    no power to consider whether I am just to you or not. Begone! Relieve me from the
    sight of your detested form.")</li>
</ul>
