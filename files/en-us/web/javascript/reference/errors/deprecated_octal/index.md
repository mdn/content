---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
tags:
  - Error
  - JavaScript
  - Strict Mode
  - SyntaxError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict
    mode</a>-only exception "0-prefixed octal literals and octal escape sequences are
  deprecated; for octal literals use the "0o" prefix instead" occurs when deprecated octal
  literals and octal escape sequences are used.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
SyntaxError:
"0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the "0o" prefix instead
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}} in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> only.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>Octal literals and octal escape sequences are deprecated and will throw a
  {{jsxref("SyntaxError")}} in strict mode. With ECMAScript 2015 and later, the
  standardized syntax uses a leading zero followed by a lowercase or uppercase Latin
  letter "O" (<code>0o</code> or <code>0O)</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="0-prefixed_octal_literals">"0"-prefixed octal literals</h3>

<pre class="brush: js example-bad">"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated</pre>

<h3 id="Octal_escape_sequences">Octal escape sequences</h3>

<pre class="brush: js example-bad">"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
</pre>

<h3 id="Valid_octal_numbers">Valid octal numbers</h3>

<p>Use a leading zero followed by the letter "o" or "O":</p>

<pre class="brush: js example-good">0o3;
</pre>

<p>For octal escape sequences, you can use hexadecimal escape sequences instead:</p>

<pre class="brush: js example-good">'\xA9';</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#octal">Lexical
      grammar</a></li>
  <li>
    <p><a href="/en-US/docs/Web/JavaScript/Reference/Errors/Bad_octal">Warning: 08/09 is
        not a legal ECMA-262 octal constant</a></p>
  </li>
</ul>
