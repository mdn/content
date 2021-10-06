---
title: Function
slug: Glossary/Function
tags:
  - CodingScripting
  - Glossary
  - IIFE
  - Immediately Invoked Function Expressions (IIFE)
  - Intro
  - JavaScript
---
<p>A <strong>function</strong> is a code snippet that can be called by other code or by itself, or a {{Glossary("variable")}} that refers to the function. When a function is called, {{Glossary("Argument", "arguments")}} are passed to the function as input, and the function can optionally return a value. A function in {{glossary("JavaScript")}} is also an {{glossary("object")}}.</p>

<p>A function name is an {{Glossary("identifier")}} included as part of a function declaration or function expression. The function name's {{Glossary("scope")}} depends on whether the function name is a declaration or expression.</p>

<h3 id="Different_types_of_functions">Different types of functions</h3>

<p>An <strong>anonymous function</strong> is a function without a function name. Only function expressions can be anonymous, function declarations must have a name:</p>

<pre class="brush: js">// When used as a function expression
(function () {});
// or using the ECMAScript 2015 arrow notation
() =&gt; {};
</pre>

<p>The following terms are not used in the ECMAScript language specification, they're jargon used to refer to different types of functions.</p>

<p>A <strong>named function</strong> is a function with a function name:</p>

<pre class="brush: js">// Function declaration
function foo() {};
// Named function expression
(function bar() {});
// or using the ECMAScript 2015 arrow notation
const foo = () =&gt; {};
</pre>

<p>An <strong>inner function</strong> is a function inside another function (<code>square</code> in this case). An <strong>outer function</strong> is a function containing a function (<code>addSquares</code> in this case):</p>

<pre class="brush: js">function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
//Using ECMAScript 2015 arrow notation
const addSquares = (a,b) =&gt; {
   const square = x =&gt; x*x;
   return square(a) + square(b);
};
</pre>

<p>A <strong>recursive function</strong> is a function that calls itself. See {{Glossary("Recursion", "recursion")}}.</p>

<pre class="brush: js">function loop(x) {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};
//Using ECMAScript 2015 arrow notation
const loop = x =&gt; {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};
</pre>

<p>An <strong>Immediately Invoked Function Expressions</strong> ({{glossary("IIFE")}}) is a function that is called directly after the function is loaded into the browser’s compiler. The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function’s definition.</p>

<pre class="brush: js">// Declared functions can't be called immediately this way
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

// Function expressions, named or anonymous, can be called immediately
(function foo() {
    console.log("Hello Foo");
}());

(function food() {
    console.log("Hello Food");
})();

(() =&gt; console.log('hello world'))();
</pre>

<p>If you'd like to know more about IIFEs, check out the following page on Wikipedia : <a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">Immediately Invoked Function Expression</a></p>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow Functions</a></li>
</ul>
