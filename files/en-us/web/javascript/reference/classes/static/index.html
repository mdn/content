---
title: static
slug: Web/JavaScript/Reference/Classes/static
tags:
- Classes
- ECMAScript 2015
- JavaScript
- Language feature
- Static
browser-compat: javascript.classes.static"
---
<div>{{jsSidebar("Classes")}}</div>

<p>The <code><strong>static</strong></code> keyword defines a
    static method or property for a class. Neither static methods nor static properties
    can be called on instances of the class. Instead, they're called on the class
    itself.</p>

<p>Static methods are often utility functions, such as functions to create
or clone objects, whereas static properties are useful for caches, fixed-configuration,
or any other data you don't need to be replicated across instances.</p>

<p>Note that the examples throughout this article use <a href="/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields">public class fields</a> (including static public class fields), which are not yet part of the ECMAScript specification, but are instead specified in a <a href="https://tc39.es/proposal-class-fields/">Public and private instance fields</a> proposal at <a href="https://tc39.es/">TC39</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/classes-static.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">static <var>methodName</var>() { ... }
static <var>propertyName </var>[= <var>value</var>];
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_static_members_in_classes">Using static members in classes</h3>

<p>The following example demonstrates several things:</p>

<ol>
  <li>How a static member (method or property) is defined on a class.</li>
  <li>That a class with a static member can be sub-classed.</li>
  <li>How a static member can and cannot be called.</li>
</ol>

<pre class="brush: js">class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description);            // 'I triple any number you provide'
console.log(Triple.calculate());            // 3
console.log(Triple.calculate(6));           // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3));    // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description);     // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName);      // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate());                // 'tp.calculate is not a function'
</pre>

<h3 id="Calling_static_members_from_another_static_method">Calling static members from
  another static method</h3>

<p>In order to call a static method or property within another static method of the same
  class, you can use the
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">this</a></code>
  keyword.</p>

<pre class="brush: js">class StaticMethodCall {
  static staticProperty = 'static property';
  static staticMethod() {
    return 'Static method and ' + this.staticProperty + ' has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'</pre>

<h3 id="Calling_static_members_from_a_class_constructor_and_other_methods">Calling static
  members from a class constructor and other methods</h3>

<p>Static members are not directly accessible using the {{JSxRef("Operators/this", "this")}} keyword from
  non-static methods. You need to call them using the class name:
  <code>CLASSNAME.STATIC_METHOD_NAME()</code> /
  <code>CLASSNAME.STATIC_PROPERTY_NAME</code> or by calling the method as a property of
  the <code>constructor</code>: <code>this.constructor.STATIC_METHOD_NAME() </code> /
  <code>this.constructor.STATIC_PROPERTY_NAME</code></p>

<pre class="brush: js">class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = 'static property';
  static staticMethod() {
    return 'static method has been called.';
  }
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/class"><code>class</code>
      expression</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/class"><code>class</code>
      declaration</a></li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
</ul>
