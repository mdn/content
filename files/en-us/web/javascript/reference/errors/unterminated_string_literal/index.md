---
title: 'SyntaxError: unterminated string literal'
slug: Web/JavaScript/Reference/Errors/Unterminated_string_literal
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript error "unterminated string literal" occurs when there is an unterminated
  <a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals">string literal</a> somewhere. String literals must be enclosed by single
  (<code>'</code>) or double (<code>"</code>) quotes.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">SyntaxError: Unterminated string constant (Edge)
SyntaxError: unterminated string literal (Firefox)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There is an unterminated
  <a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals">string literal</a> somewhere. String literals must be
  enclosed by single (<code>'</code>) or double (<code>"</code>) quotes. JavaScript makes
  no distinction between single-quoted strings and double-quoted strings. <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation">Escape
    sequences</a> work in strings created with either single or double quotes. To fix this
  error, check if:</p>

<ul>
  <li>you have opening and closing quotes (single or double) for your string literal,</li>
  <li>you have escaped your string literal correctly,</li>
  <li>your string literal isn't split across multiple lines.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Multiple_lines">Multiple lines</h3>

<p>You can't split a string across multiple lines like this in JavaScript:</p>

<pre class="brush: js example-bad">var longString = 'This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.';
// SyntaxError: unterminated string literal</pre>

<p>Instead, use the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Addition">+
    operator</a>, a backslash, or <a
    href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template literals</a>.
  The <code>+</code> operator variant looks like this:</p>

<pre class="brush: js example-good">var longString = 'This is a very long string which needs ' +
                 'to wrap across multiple lines because ' +
                 'otherwise my code is unreadable.';
</pre>

<p>Or you can use the backslash character ("\") at the end of each line to indicate that
  the string will continue on the next line. Make sure there is no space or any other
  character after the backslash (except for a line break), or as an indent; otherwise it
  will not work. That form looks like this:</p>

<pre class="brush: js example-good">var longString = 'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';
</pre>

<p>Another possibility is to use <a
    href="/en-US/docs/Web/JavaScript/Reference/Template_literals">template literals</a>,
  which are supported in ECMAScript 2015 environments:</p>

<pre class="brush: js example-good">var longString = `This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.`;</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals">string literal</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Template_literals">Template
      literals</a></li>
</ul>
