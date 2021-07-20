---
title: 'Warning: unreachable code after return statement'
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
tags:
- Error
- JavaScript
- Warning
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "unreachable code after return statement" occurs when using an
  expression after a {{jsxref("Statements/return", "return")}} statement, or when using a
  semicolon-less return statement but including an expression directly after.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Warning: unreachable code after return statement (Firefox)
</pre>

<h2 id="Error_type">Error type</h2>

<p>Warning</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>Unreachable code after a return statement might occur in these situations:</p>

<ul>
  <li>When using an expression after a {{jsxref("Statements/return", "return")}}
    statement, or</li>
  <li>when using a semicolon-less return statement but including an expression directly
    after.</li>
</ul>

<p>When an expression exists after a valid <code>return</code> statement, a warning is
  given to indicate that the code after the <code>return</code> statement is unreachable,
  meaning it can never be run.</p>

<p>Why should I have semicolons after <code>return</code> statements? In the case of
  semicolon-less <code>return</code> statements, it can be unclear whether the developer
  intended to return the statement on the following line, or to stop execution and return.
  The warning indicates that there is ambiguity in the way the <code>return</code>
  statement is written.</p>

<p>Warnings will not be shown for semicolon-less returns if these statements follow it:
</p>

<ul>
  <li>{{jsxref("Statements/throw", "throw")}}</li>
  <li>{{jsxref("Statements/break", "break")}}</li>
  <li>{{jsxref("Statements/var", "var")}}</li>
  <li>{{jsxref("Statements/function", "function")}}</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">function f() {
  var x = 3;
  x += 4;
  return x;   // return exits the function immediately
  x -= 3;     // so this line will never run; it is unreachable
}

function f() {
  return     // this is treated like `return;`
    3 + 4;   // so the function returns, and this line is never reached
}
</pre>

<h3 id="Valid_cases">Valid cases</h3>

<pre class="brush: js example-good">function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x;  // OK: return after all other statements
}

function f() {
  return 3 + 4  // OK: semicolon-less return with expression on the same line
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/return", "Automatic Semicolon Insertion",
    "#Automatic_Semicolon_Insertion", 1)}}</li>
</ul>
