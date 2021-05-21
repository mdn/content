---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Class
  - Function
  - JavaScript
browser-compat: javascript.builtins.Function
---
<div>{{JSRef}}</div>

<p>Every JavaScript function is actually a <code>Function</code> object. This can be seen with the code <code>(function(){}).constructor === Function</code>, which returns true.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("Function/Function", "Function()")}}</dt>
 <dd>Creates a new <code>Function</code> object. Calling the constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to {{jsxref("Global_Objects/eval")}}. However, unlike eval, the <code>Function</code> constructor creates functions that execute in the global scope only.</dd>
</dl>

<h2 id="Instance_properties">Instance properties</h2>

<dl>
 <dt>{{jsxref("Function.prototype.arguments")}}</dt>
 <dd>An array corresponding to the arguments passed to a function.<br>
 This is deprecated as a property of {{jsxref("Function")}}. Use the {{jsxref("Functions/arguments", "arguments")}} object (available within the function) instead.</dd>
 <dt>{{jsxref("Function.prototype.caller")}}</dt>
 <dd>Specifies the function that invoked the currently executing function.<br>
 This property is deprecated, and is only functional for some non-strict functions.</dd>
 <dt>{{jsxref("Function.prototype.displayName")}}</dt>
 <dd>The display name of the function.</dd>
 <dt>{{jsxref("Function.prototype.length")}}</dt>
 <dd>Specifies the number of arguments expected by the function.</dd>
 <dt>{{jsxref("Function.prototype.name")}}</dt>
 <dd>The name of the function.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}</dt>
 <dd>Calls a function and sets its <code>this</code> to the provided <code><var>thisArg</var></code>. Arguments can be passed as an {{jsxref("Array")}} object.</dd>
 <dt>{{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}</dt>
 <dd>Creates a new function which, when called, has its <code>this</code> set to the provided <code><var>thisArg</var></code>. Optionally, a given sequence of arguments will be prepended to arguments provided the newly-bound function is called.</dd>
 <dt>{{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}</dt>
 <dd>Calls a function and sets its <code>this</code> to the provided value. Arguments can be passed as they are.</dd>
 <dt>{{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}</dt>
 <dd>Returns a string representing the source code of the function.<br>
 Overrides the {{jsxref("Object.prototype.toString")}} method.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Difference_between_Function_constructor_and_function_declaration">Difference between Function constructor and function declaration</h3>

<p>Functions created with the <code>Function</code> constructor do not create closures to their creation contexts; they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the <code>Function</code> constructor was created. This is different from using {{jsxref("Global_Objects/eval")}} with code for a function expression.</p>

<pre class="brush: js">var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
</pre>

<p>While this code works in web browsers, <code>f1()</code> will produce a <code>ReferenceError</code> in Node.js, as <code>x</code> will not be found. This is because the top-level scope in Node is not the global scope, and <code>x</code> will be local to the module.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Functions", "Functions and function scope", "", 1)}}</li>
 <li>{{jsxref("Statements/function", "function")}} statement</li>
 <li>{{jsxref("Operators/function", "function")}} expression</li>
 <li>{{jsxref("Statements/function*", "function*")}} statement</li>
 <li>{{jsxref("Operators/function*", "function*")}} expression</li>
 <li>{{jsxref("AsyncFunction")}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
</ul>
