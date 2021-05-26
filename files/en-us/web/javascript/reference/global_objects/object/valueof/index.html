---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
tags:
- JavaScript
- Method
- Object
- Prototype
browser-compat: javascript.builtins.Object.valueOf
---
<div>{{JSRef}}</div>

<p>The <strong><code>valueOf()</code></strong> method returns the primitive value of the
  specified object.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">valueOf()</pre>

<h3 id="Return_value">Return value</h3>

<p>The primitive value of the specified object.</p>

<div class="notecard note">
  <p><strong>Note:</strong> A <a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus">(unary)
      plus sign</a> can sometimes be used as a shorthand for <code>valueOf</code>, e.g. in
    <code>+new Number()</code>. Also see <a href="#using_unary_plus">Using unary plus</a>.
  </p>
</div>

<h2 id="Description">Description</h2>

<p>JavaScript calls the <code>valueOf</code> method to convert an object to a primitive
  value. You rarely need to invoke the <code>valueOf</code> method yourself; JavaScript
  automatically invokes it when encountering an object where a primitive value is
  expected.</p>

<p>By default, the <code>valueOf</code> method is inherited by every object descended from
  {{jsxref("Object")}}. Every built-in core object overrides this method to return an
  appropriate value. If an object has no primitive value, <code>valueOf</code> returns the
  object itself.</p>

<p>You can use <code>valueOf</code> within your own code to convert a built-in object into
  a primitive value. When you create a custom object, you can override
  <code>Object.prototype.valueOf()</code> to call a custom method instead of the default
  {{jsxref("Object")}} method.</p>

<h3 id="Overriding_valueOf_for_custom_objects">Overriding valueOf for custom objects</h3>

<p>You can create a function to be called in place of the default <code>valueOf</code>
  method. Your function must take no arguments.</p>

<p>Suppose you have an object type <code>MyNumberType</code> and you want to create a
  <code>valueOf</code> method for it. The following code assigns a user-defined function
  to the object's <code>valueOf</code> method:</p>

<pre
  class="brush: js">MyNumberType.prototype.valueOf = function() { return customPrimitiveValue; };</pre>

<p>With the preceding code in place, any time an object of type <code>MyNumberType</code>
  is used in a context where it is to be represented as a primitive value, JavaScript
  automatically calls the function defined in the preceding code.</p>

<p>An object's <code>valueOf</code> method is usually invoked by JavaScript, but you can
  invoke it yourself as follows:</p>

<pre class="brush: js"><var>myNumberType</var>.valueOf()</pre>

<div class="note">
  <p><strong>Note:</strong> Objects in string contexts convert via the
    {{jsxref("Object.toString", "toString()")}} method, which is different from
    {{jsxref("String")}} objects converting to string primitives using
    <code>valueOf</code>. All objects have a string conversion, if only
    "<code>[object <em>type</em>]</code>". But many objects do not convert to number,
    boolean, or function.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_valueOf_on_custom_types">Using valueOf on custom types</h3>

<pre class="brush: js">function MyNumberType(n) {
    this.number = n;
}

MyNumberType.prototype.valueOf = function() {
    return this.number;
};

var myObj = new MyNumberType(4);
myObj + 3; // 7
</pre>

<h3 id="Using_unary_plus">Using unary plus</h3>

<pre class="brush: js">+"5" // 5 (string to number)
+"" // 0 (string to number)
+"1 + 2" // NaN (doesn't evaluate)
+new Date() // same as (new Date()).getTime()
+"foo" // NaN (string to number)
+{} // NaN
+[] // 0 (toString() returns an empty string list)
+[1] // 1
+[1,2] // NaN
+new Set([1]) // NaN
+BigInt(1) // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined // NaN
+null // 0
+true // 1
+false // 0
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.prototype.toString()")}}</li>
  <li>{{jsxref("parseInt", "parseInt()")}}</li>
  <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
