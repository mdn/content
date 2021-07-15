---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
tags:
- Classes
- ECMAScript 2015
- JavaScript
- Language feature
browser-compat: javascript.classes.constructor
---
<div>{{jsSidebar("Classes")}}</div>

<p><span class="seoSummary">The <code>constructor</code> method is a special method of
    a {{jsxref("Statements/class", "class")}} for creating and initializing an object of
    that class.</span></p>

<div>{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
constructor() { ... }
constructor(argument0) { ... }
constructor(argument0, argument1) { ... }
constructor(argument0, argument1, ... , argumentN) { ... }
</pre>

<h2 id="Description">Description</h2>

<p>A constructor enables you to provide any custom initialization that must be done before
  any other methods can be called on an instantiated object.</p>

<pre class="brush: js">class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();</pre>

<p>If you don't provide your own constructor, then a default constructor will be supplied
  for you. If your class is a base class, the default constructor is empty:</p>

<pre class="brush: js">constructor() {}</pre>

<p>If your class is a derived class, the default constructor calls the parent constructor,
  passing along any arguments that were provided:</p>

<pre class="brush: js">constructor(...args) {
  super(...args);
}</pre>

<p>That enables code like this to work:</p>

<pre class="brush: js">class ValidationError extends Error {

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}</pre>

<p>The <code>ValidationError</code> class doesn't need an explicit constructor, because it
  doesn't need to do any custom initialization. The default constructor then takes care of
  initializing the parent <code>Error</code> from the argument it is given.</p>

<p>However, if you provide your own constructor, and your class derives from some parent
  class, then you must explicitly call the parent class constructor using
  <code>super</code>. For example:</p>

<pre class="brush: js">class ValidationError extends Error {

  constructor(message) {
    super(message);  // call parent class constructor
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}

</pre>

<p>There can be only one special method with the name "<code>constructor</code>" in a
  class. Having more than one occurrence of a <code>constructor</code> method in a class
  will throw a {{jsxref("SyntaxError")}} error.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_constructor_method">Using the <code>constructor</code> method</h3>

<p>This code snippet is taken from the <a
    href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">classes
    sample</a> (<a
    href="https://googlechrome.github.io/samples/classes-es6/index.html">live demo</a>).
</p>

<pre class="brush: js">class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value**0.5;
    this.width = value**0.5;
  }
}</pre>

<h3 id="Another_example">Another example</h3>

<p>Here the prototype of <code>Square</code> class is changed—but the constructor of its
  base class <code>Polygon</code> is still called when a new instance of a square is
  created.</p>

<pre class="brush: js">class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Operators/super", "super()")}}</li>
  <li>{{jsxref("Statements/class", "class declaration", "", "true")}}</li>
  <li>{{jsxref("Operators/class", "class expression", "", "true")}}</li>
  <li>{{jsxref("Classes")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">Object.prototype.constructor</a>
  </li>
</ul>
