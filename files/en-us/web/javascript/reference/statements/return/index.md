---
title: return
slug: Web/JavaScript/Reference/Statements/return
tags:
- JavaScript
- Language feature
- Statement
browser-compat: javascript.statements.return
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <strong><code>return</code></strong> statement ends function execution and
  specifies a value to be returned to the function caller.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-return.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">return [<var>expression</var>]; </pre>

<dl>
  <dt><code><var>expression</var></code></dt>
  <dd>The expression whose value is to be returned. If omitted, <code>undefined</code> is
    returned instead.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>When a <code>return</code> statement is used in a function body, the execution of the
  function is stopped. If specified, a given value is returned to the function caller. For
  example, the following function returns the square of its argument, <code>x</code>,
  where <code>x</code> is a number.</p>

<pre class="brush: js">function square(x) {
   return x * x;
}
var demo = square(3);
// demo will equal 9
</pre>

<p>If the value is omitted, <code>undefined</code> is returned instead.</p>

<p>The following return statements all break the function execution:</p>

<pre class="brush: js">return;
return true;
return false;
return x;
return x + y / 3;
</pre>

<h3 id="Automatic_Semicolon_Insertion">Automatic Semicolon Insertion</h3>

<p>The <code>return</code> statement is affected by <a
    href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion">automatic
    semicolon insertion (ASI)</a>. No line terminator is allowed between the
  <code>return</code> keyword and the expression.</p>

<pre class="brush: js">return
a + b;
</pre>

<p>is transformed by ASI into:</p>

<pre class="brush: js">return;
a + b;
</pre>

<p>The console will warn "unreachable code after return statement".</p>

<div class="note">
  <p><strong>Note:</strong> Starting with Firefox 40, a warning is shown in the console if
  unreachable code is found after a <code>return</code> statement.</p>
</div>

<p>To avoid this problem (to prevent ASI), you could use parentheses:</p>

<pre class="brush: js">return (
  a + b
);
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Interrupt_a_function">Interrupt a function</h3>

<p>A function immediately stops at the point where <code>return</code> is called.</p>

<pre class="brush: js">function counter() {
  for (var count = 1; ; count++) {  // infinite loop
    console.log(count + 'A'); // until 5
      if (count === 5) {
        return;
      }
      console.log(count + 'B');  // until 4
    }
  console.log(count + 'C');  // never appears
}

counter();

// Output:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
</pre>

<h3 id="Returning_a_function">Returning a function</h3>

<p>See also the article about <a href="/en-US/docs/Web/JavaScript/Closures">Closures</a>.
</p>

<pre class="brush: js">function magic() {
  return function calc(x) { return x * 42; };
}

var answer = magic();
answer(1337); // 56154
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope">Functions</a>
  </li>
  <li><a href="/en-US/docs/Web/JavaScript/Closures">Closures</a></li>
</ul>
