---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
tags:
  - Deprecated
  - Functions
  - JavaScript
  - Property
  - arguments
browser-compat: javascript.functions.arguments.callee
---
<div>{{jsSidebar("Functions")}}</div>

<p>The <strong><code>arguments.callee</code></strong> property contains the currently executing function.</p>

<h2 id="Description">Description</h2>

<p><code>callee</code> is a property of the <code>arguments</code> object. It can be used to refer to the currently executing function inside the function body of that function. This is useful when the name of the function is unknown, such as within a function expression with no name (also called "anonymous functions").</p>

<div class="warning"><p><strong>Warning:</strong> The 5th edition of ECMAScript (ES5) forbids use of <code>arguments.callee()</code> in <a href="/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode">strict mode</a>. Avoid using <code>arguments.callee()</code> by either giving function expressions a name or use a function declaration where a function must call itself.</p></div>

<h3 id="Why_was_arguments.callee_removed_from_ES5_strict_mode">Why was <code>arguments.callee</code> removed from ES5 strict mode?</h3>

<p>(adapted from <a href="http://stackoverflow.com/a/235760/578288">a Stack Overflow answer by olliej</a>)</p>

<p>Early versions of JavaScript did not allow named function expressions, and for this reason you could not make a recursive function expression.</p>

<p>For example, this syntax worked:</p>

<pre class="brush: js">function factorial (n) {
    return !(n &gt; 1) ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);</pre>

<p>but:</p>

<pre class="brush: js">[1, 2, 3, 4, 5].map(function(n) {
    return !(n &gt; 1) ? 1 : /* what goes here? */ (n - 1) * n;
});</pre>

<p>did not. To get around this <code>arguments.callee</code> was added so you could do</p>

<pre class="brush: js">[1, 2, 3, 4, 5].map(function(n) {
    return !(n &gt; 1) ? 1 : arguments.callee(n - 1) * n;
});</pre>

<p>However, this was actually a really bad solution as this (in conjunction with other <code>arguments</code>, <code>callee</code>, and <code>caller</code> issues) make inlining and tail recursion impossible in the general case (you can achieve it in select cases through tracing, etc., but even the best code is suboptimal due to checks that would not otherwise be necessary.) The other major issue is that the recursive call will get a different <code>this</code> value, e.g.:</p>

<pre class="brush: js">var global = this;

var sillyFunction = function(recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        alert('This is: ' + this);
    } else {
        alert('This is the global');
    }
}

sillyFunction();</pre>

<p>ECMAScript 3 resolved these issues by allowing named function expressions. For example:</p>

<pre class="brush: js">[1, 2, 3, 4, 5].map(function factorial(n) {
    return !(n &gt; 1) ? 1 : factorial(n - 1)*n;
});</pre>

<p>This has numerous benefits:</p>

<ul>
 <li>the function can be called like any other from inside your code</li>
 <li>it does not create a variable in the outer scope (<a href="https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope">except for IE 8 and below</a>)</li>
 <li>it has better performance than accessing the arguments object</li>
</ul>

<p>Another feature that was deprecated was <code>arguments.callee.caller</code>, or more specifically <code>Function.caller</code>. Why is this? Well, at any point in time you can find the deepest caller of any function on the stack, and as I said above looking at the call stack has one single major effect: it makes a large number of optimizations impossible, or much more difficult. For example, if you cannot guarantee that a function <code>f</code> will not call an unknown function, it is not possible to inline <code>f</code>. Basically it means that any call site that may have been trivially inlinable accumulates a large number of guards:</p>

<pre class="brush: js">function f(a, b, c, d, e) { return a ? b * c : d * e; }</pre>

<p>If the JavaScript interpreter cannot guarantee that all the provided arguments are numbers at the point that the call is made, it needs to either insert checks for all the arguments before the inlined code, or it cannot inline the function. Now in this particular case a smart interpreter should be able to rearrange the checks to be more optimal and not check any values that would not be used. However in many cases that's just not possible and therefore it becomes impossible to inline.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_arguments.callee_in_an_anonymous_recursive_function">Using <code>arguments.callee</code> in an anonymous recursive function</h3>

<p>A recursive function must be able to refer to itself. Typically, a function refers to itself by its name. However, an anonymous function (which can be created by a <a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function expression</a> or the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code> constructor</a>) does not have a name. Therefore if there is no accessible variable referring to it, the only way the function can refer to itself is by <code>arguments.callee</code>.</p>

<p>The following example defines a function, which, in turn, defines and returns a factorial function. This example isn't very practical, and there are nearly no cases where the same result cannot be achieved with <a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">named function expressions</a>.</p>

<pre class="brush: js">function create() {
   return function(n) {
      if (n &lt;= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)</pre>

<h3 id="A_use_of_arguments.callee_with_no_good_alternative">A use of <code>arguments.callee</code> with no good alternative</h3>

<p>However, in a case like the following, there are not alternatives to <code>arguments.callee</code>, so its deprecation could be a bug (see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=725398">bug 725398</a>):</p>

<pre class="brush: js">function createPerson(sIdentity) {
    var oPerson = new Function('alert(arguments.callee.identity);');
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson('John Smith');

john();</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
