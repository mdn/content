---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
tags:
- JavaScript
- Language feature
- Object
- Operator
- Prototype
- Relational Operators
- instanceof
browser-compat: javascript.operators.instanceof
---
<div>{{jsSidebar("Operators")}}</div>

<p>The <strong><code>instanceof</code> operator</strong> tests to see if the
  <code>prototype</code> property of a constructor appears anywhere in the prototype chain
  of an object. The return value is a boolean value. </p>

<div>{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">object instanceof constructor</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>object</var></code></dt>
  <dd>The object to test.</dd>
  <dt><code><var>constructor</var></code></dt>
  <dd>Function to test against</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The <code>instanceof</code> operator tests the presence of
  <code>constructor.prototype</code> in <code><var>object</var></code>'s prototype chain.
</p>

<pre class="brush: js">// defining constructors
function C() {}
function D() {}

let o = new C()

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D

o instanceof Object           // true, because:
C.prototype instanceof Object // true

C.prototype = {}
let o2 = new C()

o2 instanceof C  // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C

D.prototype = new C()  // add C to [[Prototype]] linkage of D
let o3 = new D()
o3 instanceof D        // true
o3 instanceof C        // true since C.prototype is now in o3's prototype chain
</pre>

<p>Note that the value of an <code>instanceof</code> test can change based on changes to
  the <code>prototype</code> property of constructors. It can also be changed by changing
  an object's prototype using <code>Object.setPrototypeOf</code>. It is also possible
  using the non-standard <code>__proto__</code> property.</p>

<h3 id="instanceof_and_multiple_context_e.g._frames_or_windows"><code>instanceof</code>
  and multiple context (e.g. frames or windows)</h3>

<p>Different scopes have different execution environments. This means that they have
  different built-ins (different global object, different constructors, etc.). This may
  result in unexpected results. For instance,
  <code>[] instanceof window.frames[0].Array</code> will return <code>false</code>,
  because <code>Array.prototype !== </code><code>window.frames[0].Array.prototype</code> and arrays
  inherit from the former.</p>

<p>This may not make sense at first, but for scripts dealing with multiple frames or
  windows, and passing objects from one context to another via functions, this will be a
  valid and strong issue. For instance, you can securely check if a given object is, in
  fact, an Array using <code>Array.isArray(<var>myObj</var>)</code></p>

<p>For example, checking if a <a href="/en-US/docs/Web/API/Node">Node</a> is a <a
    href="/en-US/docs/Web/API/SVGElement">SVGElement</a> in a different context, you can
  use <code>myNode instanceof myNode.ownerDocument.defaultView.SVGElement</code>.</p>

<h2 id="Examples">Examples</h2>

<h3>Using instanceof with String</h3>

<p>The following example shows the behavior of <code>instanceof</code> with <code>String</code> objects.</p>

<pre class="brush: js">let literalString = 'This is a literal string';
let stringObject  = new String('String created with constructor');

literalString instanceof String;  // false, string literal is not a String
stringObject  instanceof String;  // true

literalString instanceof Object;  // false, string literal is not an Object
stringObject  instanceof Object;  // true

stringObject  instanceof Date;    // false
</pre>

<h3>Using instanceof with Date</h3>

<p>The following example shows the behavior of <code>instanceof</code> with <code>Date</code> objects.</p>

<pre class="brush: js">let myDate = new Date();

myDate instanceof Date;      // true
myDate instanceof Object;    // true
myDate instanceof String;    // false
</pre>

<h3>Objects created using Object.create()</h3>

<p>The following example shows the behavior of <code>instanceof</code> with objects created using <code>Object.create()</code></p>
<pre class="brush: js">function Shape() {
}

function Rectangle() {
  Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();

rect instanceof Object;    // true
rect instanceof Shape;     // true
rect instanceof Rectangle; // true
rect instanceof String;    // false

let literalObject     = {};
let nullObject  = Object.create(null);
nullObject.name = "My object";

literalObject    instanceof Object;   // true, every object literal has Object.prototype as prototype
({})             instanceof Object;   // true, same case as above
nullObject       instanceof Object;   // false, prototype is end of prototype chain (null)
</pre>

<h3 id="Demonstrating_that_mycar_is_of_type_Car_and_type_Object">Demonstrating that
  <code>mycar</code> is of type <code>Car</code> and type <code>Object</code></h3>

<p>The following code creates an object type <code>Car</code> and an instance of that
  object type, <code>mycar</code>. The <code>instanceof</code> operator demonstrates that
  the <code>mycar</code> object is of type <code>Car</code> and of type
  <code>Object</code>.</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let mycar = new Car('Honda', 'Accord', 1998)
let a = mycar instanceof Car     // returns true
let b = mycar instanceof Object  // returns true
</pre>

<h3 id="Not_an_instanceof">Not an instanceof</h3>

<p>To test if an object is not an <code>instanceof</code> a specific constructor, you can
  do</p>

<pre class="brush: js">if (!(mycar instanceof Car)) {
  // Do something, like:
  // mycar = new Car(mycar)
}
</pre>

<p>This is really different from:</p>

<pre class="brush: js">if (!mycar instanceof Car)</pre>

<p>This will always be <code>false</code>. (<code>!mycar</code> will be evaluated before
  <code>instanceof</code>, so you always try to know if a boolean is an instance of
  <code>Car</code>).</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a></code>
  </li>
  <li>{{jsxref("Symbol.hasInstance")}}</li>
  <li>{{jsxref("Object.prototype.isPrototypeOf")}}</li>
</ul>
