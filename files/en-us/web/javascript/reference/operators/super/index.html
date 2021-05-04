---
title: super
slug: Web/JavaScript/Reference/Operators/super
tags:
- Classes
- ECMAScript 2015
- JavaScript
- Language feature
- Left-hand-side expressions
- Operator
browser-compat: javascript.operators.super
---
<div>{{jsSidebar("Operators")}}</div>

<p>The <strong>super</strong> keyword is used to access and call functions on an object's
  parent.</p>

<p>The <code>super.prop</code> and <code>super[expr]</code> expressions are valid in any
  <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method
    definition</a> in both <a
    href="/en-US/docs/Web/JavaScript/Reference/Classes">classes</a> and <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object
    literals</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
</pre>

<h2 id="Description">Description</h2>

<p>When used in a constructor, the <code>super</code> keyword appears alone and must be
  used before the <code>this</code> keyword is used. The <code>super</code> keyword can
  also be used to call functions on a parent object.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_super_in_classes">Using <code>super</code> in classes</h3>

<p>This code snippet is taken from the <a
    href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">classes
    sample</a> (<a
    href="https://googlechrome.github.io/samples/classes-es6/index.html">live demo</a>).
  Here <code>super()</code> is called to avoid duplicating the constructor parts' that are
  common between <code>Rectangle</code> and <code>Square</code>.</p>

<pre class="brush: js">class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}</pre>

<h3 id="Super-calling_static_methods">Super-calling static methods</h3>

<p>You are also able to call super on <a
    href="/en-US/docs/Web/JavaScript/Reference/Classes/static">static</a> methods.</p>

<pre class="brush: js">class Rectangle {
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Square extends Rectangle {
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
</pre>

<h3 id="Deleting_super_properties_will_throw_an_error">Deleting super properties will
  throw an error</h3>

<p>You cannot use the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete operator</a> and
  <code>super.prop</code> or <code>super[expr]</code> to delete a parent class' property,
  it will throw a {{jsxref("ReferenceError")}}.</p>

<pre class="brush: js">class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'. </pre>

<h3 id="super.prop_cannot_overwrite_non-writable_properties"><code>super.prop</code>
  cannot overwrite non-writable properties</h3>

<p>When defining non-writable properties with e.g. {{jsxref("Object.defineProperty")}},
  <code>super</code> cannot overwrite the value of the property.</p>

<pre class="brush: js">class X {
  constructor() {
    Object.defineProperty(this, 'prop', {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2;   // Cannot overwrite the value.
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
</pre>

<h3 id="Using_super.prop_in_object_literals">Using <code>super.prop</code> in object
  literals</h3>

<p>Super can also be used in the <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object
    initializer / literal</a> notation. In this example, two objects define a method. In
  the second object, <code>super</code> calls the first object's method. This works with
  the help of {{jsxref("Object.setPrototypeOf()")}} with which we are able to set the
  prototype of <code>obj2</code> to <code>obj1</code>, so that <code>super</code> is able
  to find <code>method1</code> on <code>obj1</code>.</p>

<pre class="brush: js">var obj1 = {
  method1() {
    console.log('method 1');
  }
}

var obj2 = {
  method2() {
    super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
</ul>
