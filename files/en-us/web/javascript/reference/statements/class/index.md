---
title: class
slug: Web/JavaScript/Reference/Statements/class
tags:
- Classes
- Declaration
- ECMAScript 2015
- JavaScript
- Language feature
- Reference
- Statement
browser-compat: javascript.statements.class
---
<div>{{jsSidebar("Statements")}}</div>

<p><span class="seoSummary">The <strong>class declaration</strong> creates a new class
    with a given name using prototype-based inheritance.</span></p>

<div>{{EmbedInteractiveExample("pages/js/statement-class.html")}}</div>


<div class="noinclude">
  <p>You can also define a class using a {{jsxref("Operators/class", "class expression",
    "", 1)}}. But unlike a class expression, a class declaration doesn't allow an existing
    class to be declared again and will throw a {{jsxref("SyntaxError")}} if attempted.
  </p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">class <var>name</var> [extends <var>otherName</var>] {
  // class body
}</pre>

<h2 id="Description">Description</h2>

<p>The class body of a class declaration is executed in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>. The
  <code>constructor</code> method is optional.</p>

<p>Class declarations are not {{Glossary("Hoisting", "hoisted")}} (unlike <a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/function">function
    declarations</a>).</p>

<h2 id="Examples">Examples</h2>

<h3 id="A_simple_class_declaration">A simple class declaration</h3>

<p>In the following example, we first define a class named <code>Polygon</code>, then
  extend it to create a class named <code>Square</code>.</p>

<p>Note that <code>super()</code>, used in the <code>constructor</code>, can only be used
  in constructors, and <em>must</em> be called <em>before</em> the <code>this</code>
  keyword can be used.</p>

<pre class="brush: js">class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}</pre>

<h3 id="Attempting_to_declare_a_class_twice">Attempting to declare a class twice</h3>

<p>Re-declaring a class using the class declaration throws a {{jsxref("SyntaxError")}}.
</p>

<pre class="brush: js example-bad">class Foo {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared
</pre>

<p>The same error is thrown when a class has been defined before using the class
  expression.</p>

<pre class="brush: js example-bad">let Foo = class {};
class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Statements/function"><code>function</code>
      declaration</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/class"><code>class</code>
      expression</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
</ul>
