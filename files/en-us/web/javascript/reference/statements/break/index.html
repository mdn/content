---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
- JavaScript
- Language feature
- Reference
- Statement
browser-compat: javascript.statements.break
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <strong><code>break</code> statement</strong> terminates the current loop,
  {{jsxref("Statements/switch", "switch")}}, or {{jsxref("Statements/label", "label", "",
  1)}} statement and transfers program control to the statement following the terminated
  statement.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-break.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">break [<var>label</var>];</pre>

<dl>
  <dt><code><var>label</var></code> {{optional_inline}}</dt>
  <dd>Identifier associated with the label of the statement. If the statement is not a
    loop or {{jsxref("Statements/switch", "switch")}}, this is required.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The <code>break</code> statement includes an optional label that allows the program to
  break out of a labeled statement. The <code>break</code> statement needs to be nested
  within the referenced label. The labeled statement can be any
  {{jsxref("Statements/block", "block", "", 1)}} statement; it does not have to be
  preceded by a loop statement.</p>

<p>A <code>break</code> statement, with or without a following label, cannot be used
  within the body of a function that is itself nested within the current loop, switch, or
  label statement that the <code>break</code> statement is intended to break out of.</p>

<h2 id="Examples">Examples</h2>

<h3 id="break_in_while_loop">break in while loop</h3>

<p>The following function has a <code>break</code> statement that terminates the
  {{jsxref("Statements/while", "while")}} loop when <code>i</code> is 3, and then returns
  the value 3 * <code>x</code>.</p>

<pre class="brush: js highlight:[6];">function testBreak(x) {
  var i = 0;

  while (i &lt; 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}</pre>

<h3 id="break_in_switch_statements">break in switch statements</h3>

<p>The following code has a <code>break</code> statement that terminates the
  {{jsxref("Statements/switch", "switch")}} statement when a case is matched and the
  corresponding code has ran</p>

<pre class="brush: js highlight:[6];">const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
</pre>

<h3 id="break_in_labeled_blocks">break in labeled blocks</h3>

<p>The following code uses <code>break</code> statements with labeled blocks. A
  <code>break</code> statement must be nested within any label it references. Notice that
  <code>inner_block</code> is nested within <code>outer_block</code>.</p>

<pre class="brush: js highlight:[1,2,4];">outer_block: {
  inner_block: {
    console.log('1');
    break outer_block; // breaks out of both inner_block and outer_block
    console.log(':-('); // skipped
  }
  console.log('2'); // skipped
}
</pre>

<h3 id="break_in_labeled_blocks_that_throw">break in labeled blocks that throw</h3>

<p>The following code also uses <code>break</code> statements with labeled blocks, but
  generates a <code>SyntaxError</code> because its <code>break</code> statement is within
  <code>block_1</code> but references <code>block_2</code>. A <code>break</code> statement
  must always be nested within any label it references.</p>

<pre class="brush: js highlight:[1,3,6];">block_1: {
  console.log('1');
  break block_2; // SyntaxError: label not found
}

block_2: {
  console.log('2');
}
</pre>

<h3 id="break_within_functions">break within functions</h3>

<p><code>SyntaxError</code>s are also generated in the following code examples which use
  <code>break</code> statements within functions that are nested within a loop, or labeled
  block that the <code>break</code> statements are intended to break out of.</p>

<pre class="brush: js highlight:[1,3,6];">function testBreak(x) {
  var i = 0;

  while (i &lt; 6) {
    if (i == 3) {
      (function() {
        break;
      })();
    }
    i += 1;
  }

return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
</pre>

<pre class="brush: js highlight:[1,3,6];">block_1: {
  console.log('1');
  ( function() {
    break block_1; // SyntaxError: Undefined label 'block_1'
  })();
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/continue", "continue")}}</li>
  <li>{{jsxref("Statements/label", "label", "", 1)}}</li>
  <li>{{jsxref("Statements/switch", "switch")}}</li>
</ul>
