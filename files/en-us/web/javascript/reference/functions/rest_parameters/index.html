---
title: Rest parameters
slug: Web/JavaScript/Reference/Functions/rest_parameters
tags:
- Functions
- JavaScript
- Language feature
- Rest
- Rest parameters
browser-compat: javascript.functions.rest_parameters
---
<div>{{jsSidebar("Functions")}}</div>

<p><span class="seoSummary">The <strong>rest parameter</strong> syntax allows a function
    to accept an indefinite number of arguments as an array, providing a way to represent
    {{interwiki("wikipedia", "Variadic_function", "variadic functions")}} in
    JavaScript.</span></p>

<div>{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">function f(<var>a</var>, <var>b</var>, ...<var>theArgs</var>) {
  // ...
}</pre>

<h2 id="Description">Description</h2>

<p>A function definition's last parameter can be prefixed with "<code>...</code>" (three
  U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters
  to be placed within a <a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">"standard"
    JavaScript array.</a>. Only the last parameter in a function definition can be a rest
  parameter.</p>

<pre class="brush: js">function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
</pre>

<h4 id="Quick_Reference">Quick reference</h4>

<p>A function definition can have only one <code>...</code><var>restParam</var>.</p>
<pre class="brush:js example-bad">foo(...one, ...wrong, ...wrong)</pre>
<p>The rest parameter must be the last parameter in the function
  definition.</p>
<pre class="brush:js example-bad">foo(...wrong, arg2, arg3)</pre>
<pre class="brush:js example-good">foo(arg1, arg2, ...correct)</pre>

<h3>The difference between rest parameters and the <code>arguments</code> object</h3>

<p>There are three main differences between rest parameters and the
  {{jsxref("Functions/arguments", "arguments")}} object:</p>

<ul>
  <li>The <code>arguments</code> object is <strong>not a real array</strong>, while rest
    parameters are {{jsxref("Global_Objects/Array", "Array")}} instances, meaning methods
    like {{jsxref("Array.sort", "sort")}}, {{jsxref("Array.map", "map")}},
    {{jsxref("Array.forEach", "forEach")}} or {{jsxref("Array/pop", "pop")}} can be
    applied on it directly;</li>
  <li>The <code>arguments</code> object has additional functionality specific to itself
    (like the <code>callee</code> property).</li>
  <li>The <code>...restParam</code> bundles all the extra parameters into a single array,
    therefore it does not contain any named argument defined <strong>before</strong> the
    <code>...restParam</code>. Whereas the <code>arguments</code> object contains all of
    the parameters -- including all of the stuff in the <code>...restParam</code> --
    <strong>un</strong>bundled.</li>
</ul>

<h3 id="From_arguments_to_an_array">From arguments to an array</h3>

<p>Rest parameters were introduced to reduce the boilerplate code that was commonly used
  for converting a set of arguments to an array.</p>

<pre class="brush: js">// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {

  let normalArray = Array.prototype.slice.call(arguments)
  // -- or --
  let normalArray = [].slice.call(arguments)
  // -- or --
  let normalArray = Array.from(arguments)

  let first = normalArray.shift()  // OK, gives the first argument
  let first = arguments.shift()    // ERROR (arguments is not a normal array)
}

// Now, you can easily gain access to a normal array using a rest parameter

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // OK, gives the first argument
}
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_rest_parameters">Using rest parameters</h3>

<p>In this example, the first argument is mapped to <code>a</code> and the second to
  <code>b</code>, so these named arguments are used as normal.</p>

<p>However, the third argument, <code>manyMoreArgs</code>, will be an array that contains
  the third, fourth, fifth, sixth ...
  nth — as many arguments that the user includes.</p>

<pre class="brush: js">function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] &lt;-- notice it's an array
</pre>

<p>Below, even though there is just one value, the last argument still gets put into an
  array.</p>

<pre class="brush: js">// using the same function definition from example above

myFun("one", "two", "three")

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] &lt;-- notice it's an array, even though there's just one value</pre>

<p>Below, the third argument isn't provided, but <code>manyMoreArgs</code> is still an
  array (albeit an empty one).</p>

<pre class="brush: js">// using the same function definition from example above

myFun("one", "two")

// a, "one"
// b, "two"
// manyMoreArgs, [] &lt;-- yip, still an array</pre>

<h3 id="Argument_length">Argument length</h3>

<p>Since <code>theArgs</code> is an array, a count of its elements is given by the
  <code>length</code> property:</p>

<pre class="brush: js">function fun1(...theArgs) {
  console.log(theArgs.length)
}

fun1()         // 0
fun1(5)        // 1
fun1(5, 6, 7)  // 3
</pre>

<h3>Using rest parameters in combination with ordinary parameters</h3>

<p>In the next example, a rest parameter is used to collect all parameters after the first
  parameter into an array. Each one of the parameter values collected into the array is
  then multiplied by the first parameter, and the array is returned:</p>

<pre class="brush: js">function multiply(multiplier, ...theArgs) {
  return theArgs.map(element =&gt; {
    return multiplier * element
  })
}

let arr = multiply(2, 15, 25, 42)
console.log(arr)  // [30, 50, 84]
</pre>

<h3>Rest parameters are real arrays; the arguments object is not.</h3>

<p><code>Array</code> methods can be used on rest parameters, but not on the
  <code>arguments</code> object:</p>

<pre class="brush: js">function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort()
  return sortedArgs
}

console.log(sortRestArgs(5, 3, 7, 1)) // 1, 3, 5, 7

function sortArguments() {
  let sortedArgs = arguments.sort()
  return sortedArgs  // this will never happen
}

console.log(sortArguments(5, 3, 7, 1))
// throws a TypeError (arguments.sort is not a function)
</pre>

<p>To use <code>Array</code> methods on the <code>arguments</code> object, it must be
  converted to a real array first.</p>

<pre class="brush: js">function sortArguments() {
  let args = Array.from(arguments)
  let sortedArgs = args.sort()
  return sortedArgs
}
console.log(sortArguments(5, 3, 7, 1))  // 1, 3, 5, 7
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread
      syntax</a> (also ‘<code>...</code>’)</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments">Arguments
      object</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions"
      title="Functions and function scope">Functions</a></li>
  <li><a       href="http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters">Original
      proposal at ecmascript.org</a></li>
  <li><a       href="http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/">JavaScript
      arguments object and beyond</a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Destructuring
      assignment</a></li>
</ul>
