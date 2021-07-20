---
title: 'Warning: expression closures are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
tags:
- Error
- JavaScript
- Warning
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "expression closures are deprecated" occurs when the
  non-standard <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures">expression
    closure</a> syntax (shorthand function syntax) is used.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Warning: expression closures are deprecated
</pre>

<h2 id="Error_type">Error type</h2>

<p>Warning. JavaScript execution won't be halted.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The non-standard <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures">expression
    closure</a> syntax (shorthand function syntax) is deprecated and shouldn't be used
  anymore. This syntax will be removed entirely in <a
    href="https://bugzilla.mozilla.org/show_bug.cgi?id=1083458">bug 1083458</a> and
  scripts using it will throw a {{jsxref("SyntaxError")}} then.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Deprecated_syntax">Deprecated syntax</h3>

<p>Expression closures omit curly braces or return statements from function declarations
  or from method definitions in objects.</p>

<pre class="brush: js example-bad">var x = function() 1;

var obj = {
  count: function() 1
};
</pre>

<h3 id="Standard_syntax">Standard syntax</h3>

<p>To convert the non-standard expression closures syntax to standard ECMAScript syntax,
  you can add curly braces and return statements.</p>

<pre class="brush: js example-good">var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
</pre>

<h3 id="Standard_syntax_using_arrow_functions">Standard syntax using arrow functions</h3>

<p>Alternatively, you can use <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow
    functions</a>:</p>

<pre class="brush: js example-good">var x = () =&gt; 1;</pre>

<h3 id="Standard_syntax_using_shorthand_method_syntax">Standard syntax using shorthand
  method syntax</h3>

<p>Expression closures can also be found with getter and setter, like this:</p>

<pre class="brush: js example-bad">var obj = {
  get x() 1,
  set x(v) this.v = v
};
</pre>

<p>With ES2015 <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method
    definitions</a>, this can be converted to:</p>

<pre class="brush: js example-good">var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures">Expression
      closures</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow
      functions</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">Method
      definitions</a></li>
</ul>
