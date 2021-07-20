---
title: 'SyntaxError: test for equality (==) mistyped as assignment (=)?'
slug: Web/JavaScript/Reference/Errors/Equal_as_assign
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "test for equality (==) mistyped as assignment (=)?" occurs when
  there was an assignment (<code>=</code>) when you would normally expect a test for
  equality (<code>==</code>).</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?
</pre>

<h2 id="Error_type">Error type</h2>

<p>(Firefox only) {{jsxref("SyntaxError")}} warning which is reported only if
  <code>javascript.options.strict</code> preference is set to <code>true</code>.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There was an assignment (<code>=</code>) when you would normally expect a test for
  equality (<code>==</code>). To help debugging, JavaScript (with strict warnings enabled)
  warns about this pattern.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Assignment_within_conditional_expressions">Assignment within conditional
  expressions</h3>

<p>It is advisable to not use simple assignments in a conditional expression (such as
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code>),
  because the assignment can be confused with equality when glancing over the code. For
  example, do not use the following code:</p>

<pre class="brush: js example-bad">if (x = y) {
  // do the right thing
}
</pre>

<p>If you need to use an assignment in a conditional expression, a common practice is to
  put additional parentheses around the assignment. For example:</p>

<pre class="brush: js">if ((x = y)) {
  // do the right thing
}</pre>

<p>Otherwise, you probably meant to use a comparison operator (e.g. <code>==</code> or
  <code>===</code>):</p>

<pre class="brush: js">if (x == y) {
  // do the right thing
}</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code>
  </li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators">Equality
      operators</a></li>
</ul>
