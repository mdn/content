---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
tags:
  - Function
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.Function.apply
---
<div>{{JSRef}}</div>

<p>The <code><strong>apply()</strong></code> method calls a function with a given <code>this</code> value, and <code>arguments</code> provided as an array (or an <a href="/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects">array-like object</a>).</p>

<div>{{EmbedInteractiveExample("pages/js/function-apply.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
apply(thisArg)
apply(thisArg, argsArray)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code><var>thisArg</var></code></dt>
 <dd>
 <p>The value of <code>this</code> provided for the call to <code><var>func</var></code>.</p>

 <p>Note that <code>this</code> may not be the actual value seen by the method: if the method is a function in {{jsxref("Strict_mode", "non-strict mode", "", 1)}} code, {{jsxref("null")}} and {{jsxref("undefined")}} will be replaced with the global object, and primitive values will be boxed. This argument is required.</p>
 </dd>
 <dt><code><var>argsArray</var></code> {{optional_inline}}</dt>
 <dd>
 <p>An array-like object, specifying the arguments with which <code><var>func</var></code> should be called, or {{jsxref("null")}} or {{jsxref("undefined")}} if no arguments should be provided to the function.</p>

 <p>Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for <a href="#browser_compatibility">browser compatibility</a> information.</p>
 </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The result of calling the function with the specified <code><strong>this</strong></code> value and arguments.</p>

<h2 id="Description">Description</h2>

<div class="note">
<p><strong>Note:</strong> While the syntax of this function is almost identical to that of {{jsxref("Function.call", "call()")}}, the fundamental difference is that <code>call()</code> accepts an <strong>argument list</strong>, while <code>apply()</code> accepts a <strong>single array of arguments</strong>.</p>
</div>

<div class="note">
<p><strong>Note:</strong> When the first argument is undefined or null a similar outcome can be achieved using the array <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread syntax</a>.</p>
</div>

<p>You can assign a different <code>this</code> object when calling an existing function. <code>this</code> refers to the current object (the calling object). With <code>apply</code>, you can write a method once, and then inherit it in another object, without having to rewrite the method for the new object.</p>

<p><code>apply</code> is very similar to {{jsxref("Function.call", "call()")}}, except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With <code>apply</code>, you can also use an array literal, for example, <code><var>func</var>.apply(this, ['eat', 'bananas'])</code>, or an {{jsxref("Array")}} object, for example, <code><var>func</var>.apply(this, new Array('eat', 'bananas'))</code>.</p>

<p>You can also use {{jsxref("Functions/arguments", "arguments")}} for the <code><var>argsArray</var></code> parameter. {{jsxref("Functions/arguments", "arguments")}} is a local variable of a function. It can be used for all unspecified arguments of the called object. Thus, you do not have to know the arguments of the called object when you use the <code>apply</code> method. You can use <code>arguments</code> to pass all the arguments to the called object. The called object is then responsible for handling the arguments.</p>

<p>Since ECMAScript 5th Edition, you can also use any kind of object which is array-like. In practice, this means it's going to have a <code>length</code> property, and integer ("index") properties in the range <code>(0..length - 1)</code>. For example, you could use a {{domxref("NodeList")}}, or a custom object like <code>{ 'length': 2, '0': 'eat', '1': 'bananas' }</code>.</p>

<div class="note">
<p><strong>Note:</strong> Many older browsers—including Chrome &lt;17 and Internet Explorer &lt;9—don't accept array-like objects, and will throw an exception.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_apply_to_append_an_array_to_another">Using apply to append an array to another</h3>

<p>You can use <code>push</code> to append an element to an array. And, because <code>push</code> accepts a variable number of arguments, you can also push multiple elements at once.</p>

<p>But, if you pass an array to <code>push</code>, it will actually add that array as a single element, instead of adding the elements individually. So you end up with an array inside an array.</p>

<p>What if that is not what you want? <code>concat</code> does have the desired behavior in this case, but it does not append to the <em>existing</em> array—it instead creates and returns a new array.</p>

<p>But you wanted to append to the existing array... So what now? Write a loop? Surely not?</p>

<p><code>apply</code> to the rescue!</p>

<pre class="brush: js">const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
</pre>

<h3 id="Using_apply_and_built-in_functions">Using apply and built-in functions</h3>

<p>Clever usage of <code>apply</code> allows you to use built-in functions for some tasks that would probably have otherwise been written by looping over the array values.</p>

<p>As an example, here are <code>Math.max</code>/<code>Math.min</code>, used to find out the maximum/minimum value in an array.</p>

<pre class="brush: js">// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

let min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
max = -Infinity, min = +Infinity;

for (let i = 0; i &lt; numbers.length; i++) {
  if (numbers[i] &gt; max) {
    max = numbers[i];
  }
  if (numbers[i] &lt; min) {
    min = numbers[i];
  }
}
</pre>

<p>But beware: by using <code>apply</code> this way, you run the risk of exceeding the JavaScript engine's argument length limit. The consequences of applying a function with too many arguments (that is, more than tens of thousands of arguments) varies across engines. (The JavaScriptCore engine has hard-coded <a class="link-https" href="https://bugs.webkit.org/show_bug.cgi?id=80797">argument limit of 65536</a>.</p>

<p>This is because the limit (and indeed, even the nature of any excessively-large-stack behavior) is unspecified. Some engines will throw an exception. More perniciously, others will arbitrarily limit the number of arguments actually passed to the applied function. To illustrate this latter case: if such an engine had a limit of four arguments (actual limits are of course significantly higher), it would be as if the arguments <code>5, 6, 2, 3</code> had been passed to <code>apply</code> in the examples above, rather than the full array.</p>

<p>If your value array might grow into the tens of thousands, use a hybrid strategy: apply your function to chunks of the array at a time:</p>

<pre class="brush: js">function minOfArray(arr) {
  let min = Infinity;
  let QUANTUM = 32768;

  for (var i = 0, len = arr.length; i &lt; len; i += QUANTUM) {
    var submin = Math.min.apply(null,
                                arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

let min = minOfArray([5, 6, 2, 3, 7]);
</pre>

<h3 id="Using_apply_to_chain_constructors">Using apply to chain constructors</h3>

<p>You can use <code>apply</code> to chain {{jsxref("Operators/new", "constructors", "", 1)}} for an object (similar to Java).</p>

<p>In the following example we will create a global {{jsxref("Function")}} method called <code>construct</code>, which will enable you to use an array-like object with a constructor instead of an arguments list.</p>

<pre class="brush: js">Function.prototype.construct = function(aArgs) {
  let oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>

<p>Example usage:</p>

<pre class="brush: js">function MyConstructor() {
  for (let nProp = 0; nProp &lt; arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

let myArray = [4, 'Hello world!', false];
let myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'
</pre>

<div class="note">
<p><strong>Note:</strong> This non-native <code>Function.construct</code> method will not work with some native constructors; like {{jsxref("Date")}}, for example. In these cases you have to use the {{jsxref("Function.prototype.bind")}} method.</p>

<p>For example, imagine having an array like the following, to be used with {{jsxref("Global_Objects/Date", "Date")}} constructor: <code>[2012, 11, 4]</code>; in this case you have to write something like: <code>new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()</code>.</p>

<p>This is not the best way to do things, and probably not to be used in any production environment.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Functions/arguments", "arguments")}} object</li>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Functions", "Functions and function scope", "", 1)}}</li>
 <li>{{jsxref("Reflect.apply()")}}</li>
 <li>{{jsxref("Operators/Spread_syntax", "Spread syntax", "", 1)}}</li>
</ul>
