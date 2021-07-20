---
title: Functions
slug: Web/JavaScript/Reference/Functions
tags:
  - Function
  - Functions
  - Guide
  - JavaScript
  - Parameter
  - parameters
browser-compat: javascript.functions
---
<div>{{jsSidebar("Functions")}}</div>

<p>Generally speaking, a function is a "subprogram" that can be <em>called</em> by code
   external (or internal in the case of recursion) to the function. Like the program
   itself, a function is composed of a sequence of statements called the <em>function
      body</em>. Values can be <em>passed</em> to a function, and the function
   will <em>return</em> a value.</p>

<p>In JavaScript, functions are first-class objects, because they can have properties and
   methods just like any other object. What distinguishes them from other objects is that
   functions can be called. In brief, they are
   <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a></code>
   objects.</p>

<p>For more examples and explanations, see also the <a
      href="/en-US/docs/Web/JavaScript/Guide/Functions">JavaScript guide about
      functions</a>.</p>

<h2 id="Description">Description</h2>

<p>Every function in JavaScript is a <code>Function</code> object. See
   {{jsxref("Function")}} for information on properties and methods of
   <code>Function</code> objects.</p>

<p>To return a value other than the default, a function must have a
   <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/return">return</a></code>
   statement that specifies the value to return. A function without a return statement
   will return a default value. In the case of a <a
      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">constructor</a>
   called with the
   <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new">new</a></code>
   keyword, the default value is the value of its <code>this</code> parameter. For all
   other functions, the default return value is {{jsxref("undefined")}}.</p>

<p>The parameters of a function call are the function's <em>arguments</em>. Arguments are
   passed to functions <em>by value</em>. If the function changes the value of an
   argument, this change is not reflected globally or in the calling function. However,
   object references are values, too, and they are special: if the function changes the
   referred object's properties, that change is visible outside the function, as shown in
   the following example:</p>

<pre class="brush: js">/* Declare the function 'myFunc' */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* Logs 'Honda' */
console.log(mycar.brand);

/* Pass object reference to the function */
myFunc(mycar);

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(mycar.brand);
</pre>

<p>The <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this"><code>this</code>
      keyword</a> does not refer to the currently executing function, so you must refer to
   <code>Function</code> objects by name, even within the function body.</p>

<h2 id="Defining_functions">Defining functions</h2>

<p>There are several ways to define functions:</p>

<h3 id="The_function_declaration_function_statement">The function declaration
   (<code>function</code> statement)</h3>

<p>There is a special syntax for declaring functions (see <a
      href="/en-US/docs/Web/JavaScript/Reference/Statements/function">function
      statement</a> for details):</p>

<pre class="brush: js">function <var>name</var>([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>The function name.</dd>
  <dt><code><var>param</var></code></dt>
  <dd>The name of an argument to be passed to the function.</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>The statements comprising the body of the function.</dd>
</dl>

<h3 id="The_function_expression_function_expression">The function expression
   (<code>function</code> expression)</h3>

<p>A function expression is similar to and has the same syntax as a function declaration
   (see <a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
      expression</a> for details). A function expression may be a part of a larger
   expression. One can define "named" function expressions (where the name of the
   expression might be used in the call stack for example) or "anonymous" function
   expressions. Function expressions are not <em>hoisted</em> onto the beginning of the
   scope, therefore they cannot be used before they appear in the code.</p>

<pre class="brush: js">function [<var>name</var>]([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>The function name. Can be omitted, in which case the function becomes known as an
    anonymous function.</dd>
  <dt><code><var>param</var></code></dt>
  <dd>The name of an argument to be passed to the function.</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>The statements comprising the body of the function.</dd>
</dl>

<p>Here is an example of an <strong>anonymous</strong> function expression (the
   <code>name</code> is not used):</p>

<pre class="brush: js">var myFunction = function() {
    statements
}</pre>

<p>It is also possible to provide a name inside the definition in order to create a
   <strong>named</strong> function expression:</p>

<pre class="brush: js">var myFunction = function namedFunction(){
    statements
}
</pre>

<p>One of the benefits of creating a named function expression is that in case we
   encountered an error, the stack trace will contain the name of the function, making it
   easier to find the origin of the error.</p>

<p>As we can see, both examples do not start with the <code>function</code> keyword.
   Statements involving functions which do not start with <code>function</code> are
   function expressions.</p>

<p>When functions are used only once, a common pattern is an <a
      href="/en-US/docs/Glossary/IIFE">IIFE (Immediately Invoked Function Expression)</a>.
</p>

<pre class="brush: js">(function() {
    statements
})();</pre>

<p>IIFE are function expressions that are invoked as soon as the function is declared.</p>

<h3 id="The_generator_function_declaration_function*_statement">The generator function
   declaration (<code>function*</code> statement)</h3>

<p>There is a special syntax for generator function declarations (see
   {{jsxref('Statements/function*', 'function* statement')}} for details):</p>

<pre class="brush: js">function* <var>name</var>([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>The function name.</dd>
  <dt><code><var>param</var></code></dt>
  <dd>The name of an argument to be passed to the function.</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>The statements comprising the body of the function.</dd>
</dl>

<h3 id="The_generator_function_expression_function*_expression">The generator function
   expression (<code>function*</code> expression)</h3>

<p>A generator function expression is similar to and has the same syntax as a generator
   function declaration (see {{jsxref('Operators/function*', 'function* expression')}} for
   details):</p>

<pre class="brush: js">function* [<var>name</var>]([<var>param</var>[, <var>param</var>[, ... <var>param</var>]]]) {
   <var>statements</var>
}
</pre>

<dl>
  <dt><code><var>name</var></code></dt>
  <dd>The function name. Can be omitted, in which case the function becomes known as an
    anonymous function.</dd>
  <dt><code><var>param</var></code></dt>
  <dd>The name of an argument to be passed to the function.</dd>
  <dt><code><var>statements</var></code></dt>
  <dd>The statements comprising the body of the function.</dd>
</dl>

<h3 id="The_arrow_function_expression_>">The arrow function expression (=&gt;)</h3>

<p>An arrow function expression has a shorter syntax and lexically binds its
   <code>this</code> value (see <a
      href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow
      functions</a> for details):</p>

<pre class="brush: js">([param[, param]]) =&gt; {
   statements
}

param =&gt; expression
</pre>

<dl>
  <dt><code><var>param</var></code></dt>
  <dd>The name of an argument. Zero arguments need to be indicated with <code>()</code>. 
    For only one argument, the parentheses are not required.
    (like <code>foo =&gt; 1</code>)</dd>
  <dt><code><var>statements</var></code> or <code><var>expression</var></code></dt>
  <dd>Multiple statements need to be enclosed in brackets. A single expression requires
    no brackets. The expression is also the implicit return value of the function.</dd>
</dl>

<h3 id="The_Function_constructor">The <code>Function</code> constructor</h3>

<div class="note">
   <p><strong>Note:</strong> Using the <code>Function</code> constructor to create
      functions is not recommended since it needs the function body as a string which may
      prevent some JS engine optimizations and can also cause other problems.</p>
</div>

<p>As all other objects, {{jsxref("Function")}} objects can be created using the
   <code>new</code> operator:</p>

<pre class="brush: js">new Function (<var>arg1</var>, <var>arg2</var>, ... <var>argN</var>, <var>functionBody</var>)
</pre>

<dl>
  <dt><code><var>arg1</var>, <var>arg2</var>, ... <var>argN</var></code></dt>
  <dd>Zero or more names to be used by the function as formal parameters. Each must be a
    proper JavaScript identifier.</dd>
  <dt><code><var>functionBody</var></code></dt>
   <dd>A string containing the JavaScript statements comprising the function body.</dd>
</dl>

<p>Invoking the <code>Function</code> constructor as a function (without using the
   <code>new</code> operator) has the same effect as invoking it as a constructor.</p>

<h3 id="The_GeneratorFunction_constructor">The <code>GeneratorFunction</code> constructor
</h3>

<div class="note">
   <p><strong>Note:</strong> <code>GeneratorFunction</code> is not a global object, but
      could be obtained from generator function instance (see
      {{jsxref("GeneratorFunction")}} for more detail).</p>
</div>

<div class="note">
   <p><strong>Note:</strong> Using the <code>GeneratorFunction</code> constructor to
      create functions is not recommended since it needs the function body as a string
      which may prevent some JS engine optimizations and can also cause other problems.
   </p>
</div>

<p>As all other objects, {{jsxref("GeneratorFunction")}} objects can be created using the
   <code>new</code> operator:</p>

<pre class="brush: js">new GeneratorFunction (<var>arg1</var>, <var>arg2</var>, ... <var>argN</var>, <var>functionBody</var>)
</pre>

<dl>
  <dt><code><var>arg1</var>, <var>arg2</var>, ... <var>argN</var></code></dt>
  <dd>Zero or more names to be used by the function as formal argument names. Each must
    be a string that conforms to the rules for a valid JavaScript identifier or a list
    of such strings separated with a comma; for example "<code>x</code>",
    "<code>theValue</code>", or "<code>a,b</code>".</dd>
  <dt><code><var>functionBody</var></code></dt>
  <dd>A string containing the JavaScript statements comprising the function definition.
  </dd>
</dl>

<p>Invoking the <code>GeneratorFunction</code> constructor as a function (without using
   the <code>new</code> operator) has the same effect as invoking it as a constructor.</p>

<h2 id="Function_parameters">Function parameters</h2>

<h3 id="Default_parameters">Default parameters</h3>

<p>Default function parameters allow formal parameters to be initialized with default
   values if no value or <code>undefined</code> is passed. For more details, see<a
      href="/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters"> default
      parameters</a>.</p>

<h3 id="Rest_parameters">Rest parameters</h3>

<p>The rest parameter syntax allows representing an indefinite number of arguments as an
   array. For more details, see <a
      href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">rest
      parameters</a>.</p>

<h2 id="The_arguments_object">The <code>arguments</code> object</h2>

<p>You can refer to a function's arguments within the function by using the
   <code>arguments</code> object. See <a
      href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a>.</p>

<ul>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a></code>:
    An array-like object containing the arguments passed to the currently executing
    function.</li>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee</a></code>
    : The currently executing function.</li>
  <li>
    <code><a href="/en-US/docs/JavaScript/Reference/Functions_and_function_scope/arguments/caller">arguments.caller</a></code>
    : The function that invoked the currently executing function.</li>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length">arguments.length</a></code>:
    The number of arguments passed to the function.</li>
</ul>

<h2 id="Defining_method_functions">Defining method functions</h2>

<h3 id="Getter_and_setter_functions">Getter and setter functions</h3>

<p>You can define getters (accessor methods) and setters (mutator methods) on any standard
   built-in object or user-defined object that supports the addition of new properties.
   The syntax for defining getters and setters uses the object literal syntax.</p>

<dl>
  <dt><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">get</a></dt>
  <dd>Binds an object property to a function that will be called when that property is
        looked up.</dd>
  <dt><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">set</a></dt>
  <dd>Binds an object property to a function to be called when there is an attempt to set
    that property.</dd>
</dl>

<h3 id="Method_definition_syntax">Method definition syntax</h3>

<p>Starting with ECMAScript 2015, you are able to define own methods in a shorter syntax,
   similar to the getters and setters. See <a
      href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method
      definitions</a> for more information.</p>

<pre class="brush: js">var obj = {
  foo() {},
  bar() {}
};</pre>

<h2 id="Constructor_vs._declaration_vs._expression">Constructor vs. declaration vs.
   expression</h2>

<p>Compare the following:</p>

<p>A function defined with the <code>Function</code> <em>constructor</em> assigned to the
   variable <code>multiply</code>:</p>

<pre class="brush: js">var multiply = new Function('x', 'y', 'return x * y');</pre>

<p>A <em>function declaration</em> of a function named <code>multiply</code>:</p>

<pre class="brush: js">function multiply(x, y) {
   return x * y;
} // there is no semicolon here
</pre>

<p>A <em>function expression</em> of an anonymous function assigned to the variable
   <code>multiply</code>:</p>

<pre class="brush: js">var multiply = function(x, y) {
   return x * y;
};
</pre>

<p>A <em>function expression</em> of a function named <code>func_name</code> assigned to
   the variable <code>multiply</code>:</p>

<pre class="brush: js">var multiply = function func_name(x, y) {
   return x * y;
};
</pre>

<h3 id="Differences">Differences</h3>

<p>All do approximately the same thing, with a few subtle differences:</p>

<p>There is a distinction between the function name and the variable the function is
   assigned to. The function name cannot be changed, while the variable the function is
   assigned to can be reassigned. The function name can be used only within the function's
   body. Attempting to use it outside the function's body results in an error (or
   <code>undefined</code> if the function name was previously declared via a
   <code>var</code> statement). For example:</p>

<pre class="brush: js">var y = function x() {};
alert(x); // throws an error
</pre>

<p>The function name also appears when the function is serialized via <a
      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"><code>Function</code>'s
      toString method</a>.</p>

<p>On the other hand, the variable the function is assigned to is limited only by its
   scope, which is guaranteed to include the scope in which the function is declared.</p>

<p>As the 4th example shows, the function name can be different from the variable the
   function is assigned to. They have no relation to each other. A function declaration
   also creates a variable with the same name as the function name. Thus, unlike those
   defined by function expressions, functions defined by function declarations can be
   accessed by their name in the scope they were defined in:</p>

<p>A function defined by '<code>new Function'</code> does not have a function name.
   However, in the <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>
   JavaScript engine, the serialized form of the function shows as if it has the name
   "anonymous". For example, <code>alert(new Function())</code> outputs:</p>

<pre class="brush: js">function anonymous() {
}
</pre>

<p>Since the function actually does not have a name, <code>anonymous</code> is not a
   variable that can be accessed within the function. For example, the following would
   result in an error:</p>

<pre class="brush: js">var foo = new Function("alert(anonymous);");
foo();
</pre>

<p>Unlike functions defined by function expressions or by the <code>Function</code>
   constructor, a function defined by a function declaration can be used before the
   function declaration itself. For example:</p>

<pre class="brush: js">foo(); // alerts FOO!
function foo() {
   alert('FOO!');
}
</pre>

<p>A function defined by a function expression or by a function declaration inherits the
   current scope. That is, the function forms a closure. On the other hand, a function
   defined by a <code>Function</code> constructor does not inherit any scope other than
   the global scope (which all functions inherit).</p>

<pre class="brush: js">/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */
</pre>

<p>Functions defined by function expressions and function declarations are parsed only
   once, while those defined by the <code>Function</code> constructor are not. That is,
   the function body string passed to the <code>Function</code> constructor must be parsed
   each and every time the constructor is called. Although a function expression creates a
   closure every time, the function body is not reparsed, so function expressions are
   still faster than "<code>new Function(...)</code>". Therefore the <code>Function</code>
   constructor should generally be avoided whenever possible.</p>

<p>It should be noted, however, that function expressions and function declarations nested
   within the function generated by parsing a <code>Function constructor</code> 's string
   aren't parsed repeatedly. For example:</p>

<pre class="brush: js">var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
foo(); // The segment "function() {\n\talert(bar);\n}" of the function body string is not re-parsed.</pre>

<p>A function declaration is very easily (and often unintentionally) turned into a
   function expression. A function declaration ceases to be one when it either:</p>

<ul>
   <li>becomes part of an expression</li>
   <li>is no longer a "source element" of a function or the script itself. A "source
      element" is a non-nested statement in the script or a function body:</li>
</ul>

<pre class="brush: js">var x = 0;               // source element
if (x === 0) {           // source element
   x = 10;               // not a source element
   function boo() {}     // not a source element
}
function foo() {         // source element
   var y = 20;           // source element
   function bar() {}     // source element
   while (y === 10) {    // source element
      function blah() {} // not a source element
      y++;               // not a source element
   }
}
</pre>

<h3 id="Examples">Examples</h3>

<pre class="brush: js">// function declaration
function foo() {}

// function expression
(function bar() {})

// function expression
x = function hello() {}

if (x) {
   // function expression
   function world() {}
}

// function declaration
function a() {
   // function declaration
   function b() {}
   if (0) {
      // function expression
      function c() {}
   }
}
</pre>

<h2 id="Block-level_functions">Block-level functions</h2>

<p>In <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>, starting
   with ES2015, functions inside blocks are now scoped to that block. Prior to ES2015,
   block-level functions were forbidden in strict mode.</p>

<pre class="brush: js">'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 in non-strict mode
</pre>

<h3 id="Block-level_functions_in_non-strict_code">Block-level functions in non-strict code
</h3>

<p>In a word: Don't.</p>

<p>In non-strict code, function declarations inside blocks behave strangely. For example:
</p>

<pre class="brush: js">if (shouldDefineZero) {
   function zero() {     // DANGER: compatibility risk
      console.log("This is zero.");
   }
}
</pre>

<p>ES2015 says that if <code>shouldDefineZero</code> is false, then <code>zero</code>
   should never be defined, since the block never executes. However, it's a new part of
   the standard. Historically, this was left unspecified, and some browsers would define
   <code>zero</code> whether the block executed or not.</p>

<p>In <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>, all
   browsers that support ES2015 handle this the same way: <code>zero</code> is defined
   only if <code>shouldDefineZero</code> is true, and only in the scope of the
   <code>if</code>-block.</p>

<p>A safer way to define functions conditionally is to assign a function expression to a
   variable:</p>

<pre class="brush: js">var zero;
if (shouldDefineZero) {
   zero = function() {
      console.log("This is zero.");
   };
}
</pre>

<h2 id="Examples_2">Examples</h2>

<h3 id="Returning_a_formatted_number">Returning a formatted number</h3>

<p>The following function returns a string containing the formatted representation of a
   number padded with leading zeros.</p>

<pre class="brush: js">// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
   var numStr = num.toString();             // Initialize return value as string
   var numZeros = totalLen - numStr.length; // Calculate no. of zeros
   for (var i = 1; i &lt;= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}
</pre>

<p>The following statements call the padZeros function.</p>

<pre class="brush: js">var result;
result = padZeros(42,4); // returns "0042"
result = padZeros(42,2); // returns "42"
result = padZeros(5,4);  // returns "0005"
</pre>

<h3 id="Determining_whether_a_function_exists">Determining whether a function exists</h3>

<p>You can determine whether a function exists by using the <code>typeof</code> operator.
   In the following example, a test is performed to determine if the <code>window</code>
   object has a property called <code>noFunc</code> that is a function. If so, it is used;
   otherwise, some other action is taken.</p>

<pre class="brush: js"> if ('function' === typeof window.noFunc) {
   // use noFunc()
 } else {
   // do something else
 }
</pre>

<p>Note that in the <code>if</code> test, a reference to <code>noFunc</code> is used—there
   are no brackets "()" after the function name so the actual function is not called.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/function", "function statement")}}</li>
  <li>{{jsxref("Operators/function", "function expression")}}</li>
  <li>{{jsxref("Statements/function*", "function* statement")}}</li>
  <li>{{jsxref("Operators/function*", "function* expression")}}</li>
  <li>{{jsxref("Function")}}</li>
  <li>{{jsxref("GeneratorFunction")}}</li>
  <li>{{jsxref("Functions/Arrow_functions", "Arrow functions")}}</li>
  <li>{{jsxref("Functions/Default_parameters", "Default parameters")}}</li>
  <li>{{jsxref("Functions/rest_parameters", "Rest parameters")}}</li>
  <li>{{jsxref("Functions/arguments", "Arguments object")}}</li>
  <li>{{jsxref("Functions/get", "getter")}}</li>
  <li>{{jsxref("Functions/set", "setter")}}</li>
  <li>{{jsxref("Functions/Method_definitions", "Method definitions")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions">Functions
        and function scope</a></li>
</ul>
