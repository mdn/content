---
title: Object.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
tags:
- JavaScript
- Method
- Non-standard
- Object
- Deprecated
- Prototype
browser-compat: javascript.builtins.Object.toSource
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>The <strong><code>toSource()</code></strong> method returns a string representing the
  source code of the object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">toSource()</pre>

<h3 id="Return_value">Return value</h3>

<p>A string representing the source code of the object.</p>

<h2 id="Description">Description</h2>

<p>The <code>toSource()</code> method returns the following values:</p>

<ul>
  <li>For the built-in {{jsxref("Object")}} object, <code>toSource()</code> returns the
    following string indicating that the source code is not available:

    <pre class="brush: js">function Object() {
    [native code]
}
</pre>
  </li>
  <li>For instances of {{jsxref("Object")}}, <code>toSource()</code> returns a string
    representing the source code.</li>
</ul>

<p>You can call <code>toSource()</code> while debugging to examine the contents of an
  object.</p>

<h3 id="Overriding_the_toSource_method">Overriding the toSource() method</h3>

<p>It is safe for objects to override the <code>toSource()</code> method. For example:</p>

<pre class="brush: js">function Person(name) {
  this.name = name;
}

Person.prototype.toSource = function Person_toSource() {
  return 'new Person(' + uneval(this.name) + ')';
};

console.log(new Person('Joe').toSource()); // ---&gt; new Person("Joe")
</pre>

<h3 id="Built-in_toSource_methods">Built-in toSource() methods</h3>

<p>Each core JavaScript type has its own <code>toSource()</code> method. These objects
  are:</p>

<ul>
  <li>{{jsxref("Array.prototype.toSource()")}} — {{jsxref("Array")}} object.</li>
  <li>{{jsxref("Boolean.prototype.toSource()")}} — {{jsxref("Boolean")}} object.</li>
  <li>{{jsxref("Date.prototype.toSource()")}} — {{jsxref("Date")}} object.</li>
  <li>{{jsxref("Function.prototype.toSource()")}} — {{jsxref("Function")}} object.</li>
  <li>{{jsxref("Number.prototype.toSource()")}} — {{jsxref("Number")}} object.</li>
  <li>{{jsxref("RegExp.prototype.toSource()")}} — {{jsxref("RegExp")}} object.</li>
  <li>{{jsxref("String.prototype.toSource()")}} — {{jsxref("String")}} object.</li>
  <li>{{jsxref("Symbol.prototype.toSource()")}} — {{jsxref("Symbol")}} object.</li>
  <li><code>Math.toSource()</code> — Returns the String "Math".</li>
</ul>

<h3 id="Limitations_on_cyclical_objects">Limitations on cyclical objects</h3>

<p>In the case of objects that contain references to themselves, e.g. a cyclically linked
  list or a tree that can be traversed both ways, <code>toSource()</code> will not
  recreate the self-reference, as of Firefox 24. For example:</p>

<pre class="brush: js">var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Cyclical: ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // returns "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Cyclical: ' + (obj1.b.a == obj1));
</pre>

<p>If a cyclical structure is employed and <code>toSource()</code> is needed, the object
  must provide an override to <code>toSource()</code>, either using a reference to a
  constructor or providing an anonymous function.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_toSource">Using toSource()</h3>

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

<p>Calling the <code>toSource()</code> method of <code>theDog</code> displays the
  JavaScript source that defines the object:</p>

<pre class="brush: js">theDog.toSource();
// returns ({name:"Gabby", breed:"Lab", color:"chocolate", sex:"female"})
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
