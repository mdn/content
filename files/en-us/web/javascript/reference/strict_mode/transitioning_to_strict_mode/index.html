---
title: Transitioning to strict mode
slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
tags:
  - Advanced
  - Guide
  - JavaScript
---
<div>{{jsSidebar("More")}}</div>

<p>ECMAScript 5 introduced <a href="/en-US/docs/JavaScript/Strict_mode">strict mode</a> which is now implemented in all major browsers (including IE10). While making web browsers interpret code as strict is easy (just add <code>'use strict';</code> at the top of your source code), transitioning an existing code base to strict mode requires a bit more work.</p>

<p>This article aims at providing guidance for developers.</p>

<h2 id="Gradual_transition">Gradual transition</h2>

<p>Strict mode has been designed so that the transition to it can be made gradually. It is possible to change each file individually and even to transition code to strict mode down to the function granularity.</p>

<h2 id="Differences_from_non-strict_to_strict">Differences from non-strict to strict</h2>

<h3 id="Syntax_errors">Syntax errors</h3>

<p>When adding <code>'use strict';</code>, the following cases will throw a {{jsxref("SyntaxError")}} before the script is executing:</p>

<ul>
 <li>Octal syntax <code>var n = 023;</code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/with"><code>with</code></a> statement</li>
 <li>Using <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> on a variable name <code>delete myVariable</code>;</li>
 <li>Using <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval"><code>eval</code></a> or <a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments"><code>arguments</code></a> as variable or function argument name</li>
 <li>Using one of the newly <a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords">reserved keywords</a> (in prevision for ECMAScript 2015): <code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, and <code>yield</code></li>
 <li>Obvious errors
  <ul>
   <li>Declaring twice the same name for a property name in an object literal <code>{a: 1, b: 3, a: 7}</code> This is no longer the case in ECMAScript 2015 (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1041128">bug 1041128</a>).</li>
   <li>Declaring two function parameters with the same name <code>function f(a, b, b) {}</code></li>
  </ul>
 </li>
</ul>

<p>These errors are good, because they reveal plain errors or bad practices. They occur before the code is running.</p>

<h3 id="New_runtime_errors">New runtime errors</h3>

<p>JavaScript used to silently fail in contexts where what was done was an error. Strict mode throws in such cases. If your code base contains such cases, testing will be necessary to be sure nothing is broken. Once again, it can happen at the function granularity level.</p>

<h4 id="Setting_a_value_to_an_undeclared_variable">Setting a value to an undeclared variable</h4>

<pre class="brush: js">function f(x) {
  'use strict';
  var a = 12;
  b = a + x * 35; // error!
}
f(42);
</pre>

<p>This used to change a value on the global object which is rarely the expected effect. If you really want to set a value to the global object, pass it as an argument and explicitly assign it as a property:</p>

<pre class="brush: js">var global = this; // in the top-level context, "this" always
                   // refers to the global object
function f(x) {
  'use strict';
  var a = 12;
  global.b = a + x * 35;
}
f(42);
</pre>

<h4 id="Trying_to_delete_a_non-configurable_property">Trying to delete a non-configurable property</h4>

<pre class="brush: js">'use strict';
delete Object.prototype; // error!
</pre>

<p>In non-strict, this would silently fail, in contradiction with the user expectation.</p>

<h4 id="Poisoned_arguments_and_function_properties">Poisoned arguments and function properties</h4>

<p>Accessing <code>arguments.callee</code>, <code>arguments.caller</code>, <code>anyFunction.caller</code>, or <code>anyFunction.arguments</code> throws an error in strict mode. The only legitimate use case would be to reuse a function as in:</p>

<pre class="brush: js">// example taken from vanillajs: http://vanilla-js.com/
var s = document.getElementById('thing').style;
s.opacity = 1;
(function() {
  if ((s.opacity-=.1) &lt; 0)
    s.display = 'none';
  else
    setTimeout(arguments.callee, 40);
})();</pre>

<p>which can be rewritten as:</p>

<pre class="brush: js">'use strict';
var s = document.getElementById('thing').style;
s.opacity = 1;
(function fadeOut() { // name the function
  if((s.opacity-=.1) &lt; 0)
    s.display = 'none';
  else
    setTimeout(fadeOut, 40); // use the name of the function
})();</pre>

<h3 id="Semantic_differences">Semantic differences</h3>

<p>These differences are very subtle differences. It's possible that a test suite doesn't catch this kind of subtle difference. Careful review of your code base will probably be necessary to be sure these differences don't affect the semantics of your code. Fortunately, this careful review can be done gradually down the function granularity.</p>

<h4 id="this_in_function_calls"><code>this</code> in function calls</h4>

<p>In function calls like <code>f()</code>, the <code>this</code> value was the global object. In strict mode, it is now <code>undefined</code>. When a function was called with <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call</a></code> or <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply">apply</a></code>, if the value was a primitive value, this one was boxed into an object (or the global object for <code>undefined</code> and <code>null</code>). In strict mode, the value is passed directly without conversion or replacement.</p>

<h4 id="arguments_doesnt_alias_named_function_arguments"><code>arguments</code> doesn't alias named function arguments</h4>

<p>In non-strict mode, modifying a value in the <code>arguments</code> object modifies the corresponding named argument. This made optimizations complicated for JavaScript engine and made code harder to read/understand. In strict mode, the <code>arguments</code> object is created and initialized with the same values than the named arguments, but changes to either the <code>arguments</code> object or the named arguments aren't reflected in one another.</p>

<h4 id="Change_to_eval">Change to <code>eval</code></h4>

<p>In strict mode code, <code>eval</code> doesn't create a new variable in the scope from which it was called. Also, of course, in strict mode, the string is evaluated with strict mode rules. Thorough testing will need to be performed to make sure nothing breaks. Not using eval if you don't really need it may be another pragmatic solution.</p>

<h2 id="Strictness-neutral_code">Strictness-neutral code</h2>

<p>A potential "downside" of moving strict code to strict mode is that the semantics may be different in legacy browsers which do not implement strict mode. In some rare occasions (like bad concatenation or minification), your code also may not run in the mode you wrote and tested it in. Here are the rules to make your code strictness-neutral:</p>

<ol>
 <li>Write your code as strict and make sure no strict-only errors (from the above "New runtime errors" section) are thrown.</li>
 <li>Stay away from semantic differences
  <ol>
   <li><code>eval</code>: use it only if you know what you're doing</li>
   <li><code>arguments</code>: always access function arguments via their name or perform a copy of the arguments object using:<br>
    <code>var args = Array.prototype.slice.call(arguments)</code><br>
    as the first line of your function</li>
   <li><code>this</code>: only use <code>this</code> when it refers to an object you created.</li>
  </ol>
 </li>
</ol>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
</ul>
