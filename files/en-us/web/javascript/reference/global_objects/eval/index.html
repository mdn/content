---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
tags:
  - Evaluating JavaScript
  - JavaScript
  - Method
  - Reference
  - Warning
  - eval
browser-compat: javascript.builtins.eval
---
<div>{{jsSidebar("Objects")}}</div>

<div class="notecard warning">
  <p><strong>Warning:</strong> Executing JavaScript from a string is an enormous security
    risk. It is far too easy for a bad actor to run arbitrary code when you use
    <code>eval()</code>. See <a href="#never_use_eval!">Never use eval()!</a>, below.</p>
</div>

<p>The <code><strong>eval()</strong></code> function evaluates JavaScript code represented
  as a string.</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">eval(string)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>string</code></dt>
  <dd>A string representing a JavaScript expression, statement, or sequence of statements.
    The expression can include variables and properties of existing objects.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The completion value of evaluating the given code. If the completion value is empty,
  {{jsxref("undefined")}} is returned.</p>

<h2 id="Description">Description</h2>

<p><code>eval()</code> is a function property of the global object.</p>

<p>The argument of the <code>eval()</code> function is a string. If the string represents
  an expression, <code>eval()</code> evaluates the expression. If the argument represents
  one or more JavaScript statements, <code>eval()</code> evaluates the statements. Do not
  call <code>eval()</code> to evaluate an arithmetic expression; JavaScript evaluates
  arithmetic expressions automatically.</p>

<p>If you construct an arithmetic expression as a string, you can use <code>eval()</code>
  to evaluate it at a later time. For example, suppose you have a variable <code>x</code>.
  You can postpone evaluation of an expression involving <code>x</code> by assigning the
  string value of the expression, say "<code>3 * x + 2</code>", to a variable, and then
  calling <code>eval()</code> at a later point in your script.</p>

<p>If the argument of <code>eval()</code> is not a string, <code>eval()</code> returns the
  argument unchanged. In the following example, the <code>String</code> constructor is
  specified and <code>eval()</code> returns a <code>String</code> object rather than
  evaluating the string.</p>

<pre class="brush:js">eval(new String('2 + 2')); // returns a String object containing "2 + 2"
eval('2 + 2');             // returns 4
</pre>

<p>You can work around this limitation in a generic fashion by using
  <code>toString()</code>.</p>

<pre class="brush:js">var expression = new String('2 + 2');
eval(expression.toString());            // returns 4
</pre>

<p>If you use the <code>eval</code> function <em>indirectly,</em> by invoking it via a
  reference other than <code>eval</code>, <a
    href="http://www.ecma-international.org/ecma-262/5.1/#sec-10.4.2">as of ECMAScript
    5</a> it works in the global scope rather than the local scope. This means, for
  instance, that function declarations create global functions, and that the code being
  evaluated doesn't have access to local variables within the scope where it's being
  called.</p>

<pre class="brush:js">function test() {
  var x = 2, y = 4;
  // Direct call, uses local scope
  console.log(eval('x + y')); // Result is 6
  // Indirect call using the comma operator to return eval
  console.log((0, eval)('x + y')); // Uses global scope, throws because x is undefined
  // Indirect call using a variable to store and return eval
  var geval = eval;
  console.log(geval('x + y')); // Uses global scope, throws because x is undefined
}
</pre>

<h2 id="Never_use_eval!">Never use eval()!</h2>

<p><code>eval()</code> is a dangerous function, which executes the code it's passed with
  the privileges of the caller. If you run <code>eval()</code> with a string that could be
  affected by a malicious party, you may end up running malicious code on the user's
  machine with the permissions of your webpage / extension. More importantly, a
  third-party code can see the scope in which <code>eval()</code> was invoked, which can
  lead to possible attacks in ways to which the similar
  {{jsxref("Global_Objects/Function", "Function")}} is not susceptible.</p>

<p><code>eval()</code> is also slower than the alternatives, since it has to invoke the
  JavaScript interpreter, while many other constructs are optimized by modern JS engines.
</p>

<p>Additionally, modern javascript interpreters convert javascript to machine code. This
  means that any concept of variable naming gets obliterated. Thus, any use of
  <code>eval()</code> will force the browser to do long expensive variable name lookups to
  figure out where the variable exists in the machine code and set its value.
  Additionally, new things can be introduced to that variable through <code>eval()</code>
  such as changing the type of that variable, forcing the browser to re-evaluate all of
  the generated machine code to compensate.</p>

<p>Fortunately, there's a very good alternative to <code>eval()</code>: using
  {{jsxref("Function", "window.Function()")}}. See this example of how to convert code
  using a dangerous <code>eval()</code> to using <code>Function()</code>, see below.</p>

<p>Bad code with <code>eval()</code>:</p>

<pre class="brush:js">function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
</pre>

<p>Better code without <code>eval()</code>:</p>

<pre class="brush:js">function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
</pre>

<p>Comparing the two code snippets above, the two code snippets might seem to work the
  same way, but think again: the <code>eval()</code> one is a great deal slower. Notice
  <code>c: new Date()</code> in the evaluated object. In the function without the
  <code>eval()</code>, the object is being evaluated in the global scope, so it is safe
  for the browser to assume that <code>Date</code> refers to <code>window.Date()</code>
  instead of a local variable called <code>Date</code>. But, in the code using
  <code>eval()</code>, the browser cannot assume this since what if your code looked like
  the following:</p>

<pre class="brush:js">function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
</pre>

<p>Thus, in the <code>eval()</code> version of the code, the browser is forced to make the
  expensive lookup call to check to see if there are any local variables called
  <code>Date()</code>. This is incredibly inefficient compared to <code>Function()</code>.
</p>

<p>In a related circumstance, what if you actually wanted your <code>Date()</code>
  function to be able to be called from the code inside <code>Function()</code>. Should
  you just take the easy way out and fall back to <code>eval()</code>? No! Never. Instead
  try the approach below.</p>

<pre class="brush:js">function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function runCodeWithDateFunction(obj){
    return Function('"use strict";return (' + obj + ')')()(
        Date
    );
}
console.log(runCodeWithDateFunction(
   "function(Date){ return Date(5) }"
))
</pre>

<p>The code above may seem inefficiently slow because of the triple nested function, but
  let's analyze the benefits of the above efficient method:</p>

<ul>
  <li>It allows the code in the string passed to <code>runCodeWithDateFunction()</code> to
    be minified.</li>
  <li>Function call overhead is minimal, making the far smaller code size well worth the
    benefit</li>
  <li><code>Function()</code> more easily allows your code to utilize the performance
    buttering <code>"use strict";</code></li>
  <li>The code does not use <code>eval()</code>, making it orders of magnitude faster than
    otherwise.</li>
</ul>

<p>Lastly, let's examine minification. With using <code>Function()</code> as shown above,
  you can minify the code string passed to <code>runCodeWithDateFunction()</code> far more
  efficiently because the function arguments names can be minified too as seen in the
  minified code below.</p>

<pre
  class="brush:js">console.log(Function('"use strict";return(function(a){return a(5)})')()(function(a){
return"Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ")[a%7||0]}));</pre>

<p>There are also additional safer (and faster!) alternatives to <code>eval()</code> or
  <code>Function()</code> for common use-cases.</p>

<h3 id="Accessing_member_properties">Accessing member properties</h3>

<p>You should not use <code>eval()</code> to convert property names into properties.
  Consider the following example where the property of the object to be accessed is not
  known until the code is executed. This can be done with <code>eval()</code>:</p>

<pre class="brush:js">var obj = { a: 20, b: 30 };
var propName = getPropName();  // returns "a" or "b"

eval( 'var result = obj.' + propName );
</pre>

<p>However, <code>eval()</code> is not necessary here. In fact, its use here is
  discouraged. Instead, use the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property
    accessors</a>, which are much faster and safer:</p>

<pre class="brush:js">var obj = { a: 20, b: 30 };
var propName = getPropName();  // returns "a" or "b"
var result = obj[ propName ];  //  obj[ "a" ] is the same as obj.a</pre>

<p>You can even use this method to access descendant properties. Using <code>eval()</code>
  this would look like:</p>

<pre class="brush:js">var obj = {a: {b: {c: 0}}};
var propPath = getPropPath();  // returns e.g. "a.b.c"

eval( 'var result = obj.' + propPath );
</pre>

<p>Avoiding <code>eval()</code> here could be done by splitting the property path and
  looping through the different properties:</p>

<pre class="brush:js">function getDescendantProp(obj, desc) {
  var arr = desc.split('.');
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

var obj = {a: {b: {c: 0}}};
var propPath = getPropPath();  // returns e.g. "a.b.c"
var result = getDescendantProp(obj, propPath);</pre>

<p>Setting a property that way works similarly:</p>

<pre class="brush:js">function setDescendantProp(obj, desc, value) {
  var arr = desc.split('.');
  while (arr.length &gt; 1) {
    obj = obj[arr.shift()];
  }
  return obj[arr[0]] = value;
}

var obj = {a: {b: {c: 0}}};
var propPath = getPropPath();  // returns e.g. "a.b.c"
var result = setDescendantProp(obj, propPath, 1);  // obj.a.b.c will now be 1</pre>

<h3 id="Use_functions_instead_of_evaluating_snippets_of_code">Use functions instead of
  evaluating snippets of code</h3>

<p>JavaScript has <a     href="https://en.wikipedia.org/wiki/First-class_function">first-class functions</a>,
  which means you can pass functions as arguments to other APIs, store them in variables
  and objects' properties, and so on. Many DOM APIs are designed with this in mind, so you
  can (and should) write:</p>

<pre class="brush: js">// instead of setTimeout(" ... ", 1000) use:
setTimeout(function() { ... }, 1000);

// instead of elt.setAttribute("onclick", "...") use:
elt.addEventListener('click', function() { ... } , false); </pre>

<p><a href="/en-US/docs/Web/JavaScript/Closures">Closures</a> are also helpful as a way to
  create parameterized functions without concatenating strings.</p>

<h3 id="Parsing_JSON_converting_strings_to_JavaScript_objects">Parsing JSON (converting
  strings to JavaScript objects)</h3>

<p>If the string you're calling <code>eval()</code> on contains data (for example, an
  array: <code>"[1, 2, 3]"</code>), as opposed to code, you should consider switching to
  {{Glossary("JSON")}}, which allows the string to use a subset of JavaScript syntax to
  represent data.</p>

<p>Note that since JSON syntax is limited compared to JavaScript syntax, many valid
  JavaScript literals will not parse as JSON. For example, trailing commas are not allowed
  in JSON, and property names (keys) in object literals must be enclosed in quotes. Be
  sure to use a JSON serializer to generate strings that will be later parsed as JSON.</p>

<h3 id="Pass_data_instead_of_code">Pass data instead of code</h3>

<p>For example, an extension designed to scrape contents of web-pages could have the
  scraping rules defined in <a href="/en-US/docs/Web/XPath">XPath</a> instead of JavaScript
  code.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_eval">Using <code>eval</code></h3>

<p>In the following code, both of the statements containing <code>eval()</code> return 42.
  The first evaluates the string "<code>x + y + 1</code>"; the second evaluates the string
  "<code>42</code>".</p>

<pre class="brush:js">var x = 2;
var y = 39;
var z = '42';
eval('x + y + 1'); // returns 42
eval(z);           // returns 42
</pre>

<h3 id="Using_eval_to_evaluate_a_string_of_JavaScript_statements">Using <code>eval</code>
  to evaluate a string of JavaScript statements</h3>

<p>The following example uses <code>eval()</code> to evaluate the string <code>str</code>.
  This string consists of JavaScript statements that assigns <code>z</code> a value of 42
  if <code>x</code> is five, and assigns 0 to <code>z</code> otherwise. When the second
  statement is executed, <code>eval()</code> will cause these statements to be performed,
  and it will also evaluate the set of statements and return the value that is assigned to
  <code>z</code>.</p>

<pre class="brush:js">var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0;";

console.log('z is ', eval(str));</pre>

<p>If you define multiple values then the last value is returned.</p>

<pre class="brush:js">var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42; x = 420; } else z = 0;";

console.log('x is ', eval(str)); // z is 42  x is 420
</pre>

<h3 id="Last_expression_is_evaluated">Last expression is evaluated</h3>

<p><code>eval()</code> returns the value of the last expression evaluated.</p>

<pre class="brush:js">var str = 'if ( a ) { 1 + 1; } else { 1 + 2; }';
var a = true;
var b = eval(str);  // returns 2

console.log('b is : ' + b);

a = false;
b = eval(str);  // returns 3

console.log('b is : ' + b);</pre>

<h3 id="eval_as_a_string_defining_function_requires_and_as_prefix_and_suffix">
  <code>eval</code> as a string defining function requires "(" and ")" as prefix and
  suffix</h3>

<pre class="brush:js">var fctStr1 = 'function a() {}'
var fctStr2 = '(function a() {})'
var fct1 = eval(fctStr1)  // return undefined
var fct2 = eval(fctStr2)  // return a function
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Global_Objects/uneval", "uneval()")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property
      accessors</a></li>
  <li><a
      href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts">WebExtensions:
      Using eval in content scripts</a></li>
</ul>
