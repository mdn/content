---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
tags:
- JavaScript
- Method
- Object
- Prototype
- Polyfill
browser-compat: javascript.builtins.Object.toString
---
<div>{{JSRef}}</div>

<p>The <code><strong>toString()</strong></code> method returns a string representing the
  object.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">toString()</pre>

<h3 id="Return_value">Return value</h3>

<p>A string representing the object.</p>

<h2 id="Description">Description</h2>

<p>Every object has a <code>toString()</code> method that is automatically called when the
  object is to be represented as a text value or when an object is referred to in a manner
  in which a string is expected. By default, the <code>toString()</code> method is
  inherited by every object descended from <code>Object</code>. If this method is not
  overridden in a custom object, <code>toString()</code> returns
  "<code>[object <var>type</var>]</code>", where <code><var>type</var></code> is the
  object type. The following code illustrates this:</p>

<pre class="brush: js">const o = new Object();
o.toString(); // returns [object Object]
</pre>

<div class="note">
  <p><strong>Note:</strong> Starting in JavaScript 1.8.5, <code>toString()</code> called
    on {{jsxref("null")}} returns <code>[object <em>Null</em>]</code>, and
    {{jsxref("undefined")}} returns <code>[object <em>Undefined</em>]</code>, as defined
    in the 5th Edition of ECMAScript and subsequent Errata.</p>

  <p>See <a href="#using_tostring_to_detect_object_class">Using <code>toString()</code> to
      detect object class</a>.</p>
</div>

<h2 id="Parameters">Parameters</h2>

<p>For Numbers and BigInts <code>toString()</code> takes an optional parameter
  <code>radix</code> the value of radix must be minimum 2 and maximum 36.</p>

<p>By using <code>radix</code> you can also convert base 10 numbers (like
  1,2,3,4,5,.........) to another base numbers, in example below we are converting base 10
  number to a base 2 (binary) number.</p>

<pre class="brush: js">let baseTenInt = 10;
console.log(baseTenInt.toString(2));
// Expected output is "1010"
</pre>

<p>and same for big integers</p>

<pre class="brush: js">let bigNum = BigInt(20);
console.log(bigNum.toString(2));
// Expected output is "10100"</pre>

<p>Some common radix are</p>

<ul>
  <li>2 for <a href="https://en.wikipedia.org/wiki/Binary_number" rel="noopener">binary
      numbers</a>,</li>
  <li>8 for <a href="https://en.wikipedia.org/wiki/Octal" rel="noopener">octal
      numbers</a>,</li>
  <li>10 for <a href="https://en.wikipedia.org/wiki/Decimal" rel="noopener">decimal
      numbers</a>,</li>
  <li>16 for <a href="https://en.wikipedia.org/wiki/Hexadecimal"
      rel="noopener">hexadecimal numbers</a>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Overriding_the_default_toString_method">Overriding the default toString method
</h3>

<p>You can create a function to be called in place of the default <code>toString()</code>
  method. The <code>toString()</code> method takes no arguments and should return a
  string. The <code>toString()</code> method you create can be any value you want, but it
  will be most useful if it carries information about the object.</p>

<p>The following code defines the <code>Dog</code> object type and creates
  <code>theDog</code>, an object of type <code>Dog</code>:</p>

<pre class="brush: js">function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
</pre>

<p>If you call the <code>toString()</code> method on this custom object, it returns the
  default value inherited from {{jsxref("Object")}}:</p>

<pre class="brush: js">theDog.toString(); // returns [object Object]
</pre>

<p>The following code creates and assigns <code>dogToString()</code> to override the
  default <code>toString()</code> method. This function generates a string containing the
  <code>name</code>, <code>breed</code>, <code>color</code>, and <code>sex</code> of the
  object, in the form "<code>property = value;</code>".</p>

<pre class="brush: js">Dog.prototype.toString = function dogToString() {
  const ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
  return ret;
}
</pre>

<p>Or, using ES6 {{jsxref("Template_literals", "template strings", "", 1)}}:</p>

<pre class="brush: js">Dog.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
}
</pre>

<p>With the preceding code in place, any time <code>theDog</code> is used in a string
  context, JavaScript automatically calls the <code>dogToString()</code> function, which
  returns the following string:</p>

<pre class="brush: js">"Dog Gabby is a female chocolate Lab"
</pre>

<h3 id="Using_toString_to_detect_object_class">Using toString() to detect object class
</h3>

<p><code>toString()</code> can be used with every object and (by default) allows you to
  get its class.</p>

<p>To use the <code>Object.prototype.toString()</code> with every object, you need to call
  {{jsxref("Function.prototype.call()")}} or {{jsxref("Function.prototype.apply()")}} on
  it, passing the object you want to inspect as the first parameter (called
  <code>thisArg</code>).</p>

<pre class="brush: js">const toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]
</pre>

<p>Using <code>toString()</code> in this way is unreliable; objects can change the
  behavior of <code>Object.prototype.toString()</code> by defining a
  {{jsxref("Symbol.toStringTag")}} property, leading to unexpected results. For example:
</p>

<pre class="brush: js">const myDate = new Date();
Object.prototype.toString.call(myDate);     // [object Date]

myDate[Symbol.toStringTag] = 'myDate';
Object.prototype.toString.call(myDate);     // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';
Object.prototype.toString.call(new Date()); // [object prototype polluted]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Object.prototype.toString</code> with <code>Symbol.toStringTag</code> support is available in <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
  <li>{{jsxref("Object.prototype.toSource()")}}</li>
  <li>{{jsxref("Object.prototype.valueOf()")}}</li>
  <li>{{jsxref("Number.prototype.toString()")}}</li>
  <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
