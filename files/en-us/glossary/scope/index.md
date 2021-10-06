---
title: Scope
slug: Glossary/Scope
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
<p>The current context of execution. The context in which {{glossary("value","values")}} and <strong>expressions</strong> are "visible" or can be referenced. If a <strong>{{glossary("variable")}}</strong> or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.</p>

<p>A <strong>{{glossary("function")}}</strong> serves as a <strong>closure</strong> in {{glossary("JavaScript")}}, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:</p>

<pre class="brush: js">function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error</pre>

<p>However, the following code is valid due to the variable being declared outside the function, making it global:</p>

<pre class="brush: js">var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);</pre>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{Interwiki("wikipedia", "Scope (computer science)")}} on Wikipedia</li>
</ul>
