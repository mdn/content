---
title: The arguments object
slug: Web/JavaScript/Reference/Functions/arguments
tags:
  - Functions
  - JavaScript
  - Namespace
  - Reference
  - arguments
browser-compat: javascript.functions.arguments
---
<div>{{JSSidebar("Functions")}}</div>

<p><span class="summary"><strong><code>arguments</code></strong> is an <code>Array</code>-like object accessible inside <a href="/en-US/docs/Web/JavaScript/Guide/Functions">functions</a> that contains the values of the arguments passed to that function.</span></p>

<div>{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}</div>


<h2 id="Description">Description</h2>

<div class="notecard note">
<p><strong>Note:</strong> If you're writing ES6 compatible code, then <a href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">rest parameters</a> should be preferred.</p>
</div>

<div class="notecard note">
<p><strong>Note:</strong> “Array-like” means that <code>arguments</code> has a {{jsxref("Functions/arguments/length", "length")}} property and properties indexed from zero, but it doesn't have {{JSxRef("Array")}}'s built-in methods like {{jsxref("Array.forEach", "forEach()")}} or {{jsxref("Array.map", "map()")}}. See <a href="#description">§Description</a> for details.</p>
</div>

<p>The <code>arguments</code> object is a local variable available within all non-<a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow</a> functions. You can refer to a function's arguments inside that function by using its <code>arguments</code> object. It has entries for each argument the function was called with, with the first entry's index at <code>0</code>.</p>

<p>For example, if a function is passed 3 arguments, you can access them as follows:</p>

<pre class="brush: js">arguments[0] // first argument
arguments[1] // second argument
arguments[2] // third argument
</pre>

<p>Each argument can also be set or reassigned:</p>

<pre class="brush: js">arguments[1] = 'new value';
</pre>

<p>The <code>arguments</code> object is not an {{jsxref("Array")}}. It is similar, but lacks all <code>Array</code> properties except {{jsxref("Array.length", "length")}}. For example, it does not have the {{jsxref("Array.pop", "pop()")}} method.</p>

<p>However, it can be converted to a real <code>Array</code>:</p>

<pre class="brush: js">var args = Array.prototype.slice.call(arguments);
// Using an array literal is shorter than above but allocates an empty array
var args = [].slice.call(arguments);
</pre>

<p>As you can do with any Array-like object, you can use ES2015's {{jsxref("Array.from()")}} method or <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread syntax</a> to convert <code>arguments</code> to a real Array:</p>

<pre class="brush: js">let args = Array.from(arguments);
// or
let args = [...arguments];
</pre>

<p>The <code>arguments</code> object is useful for functions called with more arguments than they are formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments, such as {{jsxref("Math.min()")}}. This example function accepts any number of string arguments and returns the longest one:</p>

<pre class="brush: js">function longestString() {
  var longest = '';
  for (var i=0; i &lt; arguments.length; i++) {
    if (arguments[i].length &gt; longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
</pre>

<p>You can use {{jsxref("Functions/arguments/length", "arguments.length")}} to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's {{jsxref("Function.length", "length")}} property.</p>

<h3 id="Using_typeof_with_arguments">Using typeof with arguments</h3>

<p>The {{jsxref("Operators/typeof", "typeof")}} operator returns <code>'object'</code> when used with <code>arguments</code></p>

<pre class="brush: js">console.log(typeof arguments); // 'object' </pre>

<p>The type of individual arguments can be determined by indexing <code>arguments</code>:</p>

<pre class="brush: js">console.log(typeof arguments[0]); // returns the type of the first argument</pre>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{jsxref("Functions/arguments/callee", "arguments.callee")}}</dt>
 <dd>Reference to the currently executing function that the arguments belong to. Forbidden in strict mode.</dd>
 <dt>{{jsxref("Functions/arguments/length", "arguments.length")}}</dt>
 <dd>The number of arguments that were passed to the function.</dd>
 <dt>{{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}}</dt>
 <dd>Returns a new {{jsxref("Array/@@iterator", "Array iterator", "", 0)}} object that contains the values for each index in <code>arguments</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Defining_a_function_that_concatenates_several_strings">Defining a function that concatenates several strings</h3>

<p>This example defines a function that concatenates several strings. The function's only formal argument is a string containing the characters that separate the items to concatenate.</p>

<pre class="brush: js">function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}</pre>

<p>You can pass as many arguments as you like to this function. It returns a string list using each argument in the list:</p>

<pre class="brush: js">// returns "red, orange, blue"
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah"
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley"
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');</pre>

<h3 id="Defining_a_function_that_creates_HTML_lists">Defining a function that creates HTML lists</h3>

<p>This example defines a function that creates a string containing HTML for a list. The only formal argument for the function is a string that is "<code>u</code>" if the list is to be <a href="/en-US/docs/Web/HTML/Element/ul">unordered (bulleted)</a>, or "<code>o</code>" if the list is to be <a href="/en-US/docs/Web/HTML/Element/ol">ordered (numbered)</a>. The function is defined as follows:</p>

<pre class="brush: js">function list(type) {
  var html = '&lt;' + type + 'l&gt;&lt;li&gt;';
  var args = Array.prototype.slice.call(arguments, 1);
  html += args.join('&lt;/li&gt;&lt;li&gt;');
  html += '&lt;/li&gt;&lt;/' + type + 'l&gt;'; // end list
  return html;
}</pre>

<p>You can pass any number of arguments to this function, and it adds each argument as a list item to a list of the type indicated. For example:</p>

<pre class="brush: js">let listHTML = list('u', 'One', 'Two', 'Three');

/* listHTML is:
"&lt;ul&gt;&lt;li&gt;One&lt;/li&gt;&lt;li&gt;Two&lt;/li&gt;&lt;li&gt;Three&lt;/li&gt;&lt;/ul&gt;"
*/</pre>

<h3 id="Rest_default_and_destructured_parameters">Rest, default, and destructured parameters</h3>

<p>The <code>arguments</code> object can be used in conjunction with <a href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">rest</a>, <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">default</a>, and <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructured</a> parameters.</p>

<pre class="brush: js">function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1, 2, 3]
</pre>

<p>While the presence of rest, default, or destructured parameters does not alter <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode#Making_eval_and_arguments_simpler">the behavior of the <code>arguments</code> object in strict mode code</a>, there are subtle differences for non-strict code.</p>

<p>In strict-mode code, the <code>arguments</code> object behaves the same whether or not a function is passed rest, default, or destructured parameters. That is, assigning new values to variables in the body of the function will not affect the <code>arguments</code> object. Nor will assigning new variables to the <code>arguments</code> object affect the value of variables.</p>

<div class="notecard note">
<p><strong>Note:</strong> You cannot write a <code>"use strict";</code> directive in the body of a function definition that accepts rest, default, or destructured parameters. Doing so will throw <a href="/en-US/docs/Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params">a syntax error</a>.</p>
</div>

<p>Non-strict functions that are passed only simple parameters (that is, not rest, default, or restructured parameters) will sync the value of variables new values in the body of the function with the <code>arguments</code> object, and vice versa:</p>

<pre class="brush: js">function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99
</pre>

<p>And also:</p>

<pre class="brush: js">function func(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func(10); // 99
</pre>

<p>Conversely, non-strict functions that <strong>are</strong> passed rest, default, or destructured parameters <strong>will not</strong> sync new values assigned to argument variables in the function body with the <code>arguments</code> object. Instead, the <code>arguments</code> object in non-strict functions with complex parameters <strong>will always</strong> reflect the values passed to the function when the function was called (this is the same behavior as exhibited by all strict-mode functions, regardless of the type of variables they are passed):</p>

<pre class="brush: js">function func(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
func(10); // 10</pre>

<p>And also:</p>

<pre class="brush: js">function func(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
func(10); // 10
</pre>

<p>And also:</p>

<pre class="brush: js">// An untracked default parameter
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{JSxRef("Function")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Rest parameters</a></li>
</ul>
