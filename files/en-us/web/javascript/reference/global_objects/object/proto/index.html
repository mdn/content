---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
tags:
  - Deprecated
  - ECMAScript 2015
  - JavaScript
  - Object
  - Property
  - Prototype
  - Reference
browser-compat: javascript.builtins.Object.proto
---
<div>{{JSRef}}{{Deprecated_header}}
<div class="notecard warning">
<p><strong>Warning:</strong> Changing the <code>[[Prototype]]</code> of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in <strong><em>every</em></strong> browser and JavaScript engine. The effects on the performance of altering inheritance are subtle and far-flung, and are not limited to the time spent in <code>obj.__proto__ = ...</code> statements, but may extend to <strong><em>any</em></strong> code that has access to <strong><em>any</em></strong> object whose <code>[[Prototype]]</code> has been altered. If you care about performance you should avoid setting the <code>[[Prototype]]</code> of an object. Instead, create a new object with the desired <code>[[Prototype]]</code> using {{JSxRef("Object.create()")}}.</p>
</div>

<div class="notecard warning">
<p><strong>Warning:</strong> While <code>Object.prototype.__proto__</code> is supported today in most browsers, its existence and exact behavior has only been standardized in the ECMAScript 2015 specification as a legacy feature to ensure compatibility for web browsers. For better support, use {{JSxRef("Object.getPrototypeOf()")}} instead.</p>
</div>
</div>

<p>The <code>__proto__</code> property of {{JSxRef("Object.prototype")}} is an accessor property (a getter function and a setter function) that exposes the internal <code>[[Prototype]]</code> (either an object or {{JSxRef("Global_Objects/null", "null")}}) of the object through which it is accessed.</p>

<p>The use of <code>__proto__</code> is controversial and discouraged. It was never originally included in the ECMAScript language spec, but modern browsers implemented it anyway. Only recently was the <code>__proto__</code> property standardized by the ECMAScript 2015 specification for compatibility with web browsers, so it will be supported into the future. It is deprecated in favor of {{JSxRef("Object.getPrototypeOf")}}/{{JSxRef("Reflect.getPrototypeOf")}} and {{JSxRef("Object.setPrototypeOf")}}/{{JSxRef("Reflect.setPrototypeOf")}} (though still, setting the <code>[[Prototype]]</code> of an object is a slow operation that should be avoided if performance is a concern).</p>

<p>The <code>__proto__</code> property can also be used in an object literal definition to set the object <code>[[Prototype]]</code> on creation, as an alternative to {{JSxRef("Object.create()")}}. See: <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer / literal syntax</a>.</p>

<h2 id="Description">Description</h2>

<p>The <code>__proto__</code> getter function exposes the value of the internal <code>[[Prototype]]</code> of an object. For objects created using an object literal, this value is {{JSxRef("Object.prototype")}}. For objects created using array literals, this value is {{JSxRef("Array.prototype")}}. For functions, this value is {{JSxRef("Function.prototype")}}. For objects created using <code>new fun</code>, where <code>fun</code> is one of the built-in constructor functions provided by JavaScript ({{JSxRef("Array")}}, {{JSxRef("Boolean")}}, {{JSxRef("Date")}}, {{JSxRef("Number")}}, {{JSxRef("Object")}}, {{JSxRef("String")}}, and so on — including new constructors added as JavaScript evolves), this value is always <code>fun.prototype</code>. For objects created using <code>new fun</code>, where <code>fun</code> is a function defined in a script, this value is the value of <code>fun.prototype</code>. (That is, if the constructor didn't return an other object explicitly, or the <code>fun.prototype</code> has been reassigned since the instance was created.)</p>

<p>The <code>__proto__</code> setter allows the <code>[[Prototype]]</code> of an object to be mutated. The object must be extensible according to {{JSxRef("Object.isExtensible()")}}: if it is not, a {{JSxRef("Global_Objects/TypeError", "TypeError")}} is thrown. The value provided must be an object or {{JSxRef("Global_Objects/null", "null")}}. Providing any other value will do nothing.</p>

<p>To understand how prototypes are used for inheritance, see guide article <a href="/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">Inheritance and the prototype chain</a>.</p>

<p>The <code>__proto__</code> property is a simple accessor property on {{JSxRef("Object.prototype")}} consisting of a getter and setter function. A property access for <code>__proto__</code> that eventually consults {{JSxRef("Object.prototype")}} will find this property, but an access that does not consult {{JSxRef("Object.prototype")}} will not. If some other <code>__proto__</code> property is found before {{JSxRef("Object.prototype")}} is consulted, that property will hide the one found on {{JSxRef("Object.prototype")}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using___proto__">Using __proto__</h3>

<pre class="brush: js">

function Circle() {}
const shape = {};
const circle = new Circle();

// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === Circle);  // false

const ShapeA = function () {};
const ShapeB = {
    a() {
        console.log('aaa');
    }
};
console.log(ShapeA.prototype.__proto__ = ShapeB);

const shapea = new ShapeA();
shapea.a(); // aaa
console.log(ShapeA.prototype === shapea.__proto__); // true

// or
const ShapeC = function () {};
const ShapeD = {
    a() {
        console.log('a');
    }
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false

// or
function Test() {}
Test.prototype.myname = function () {
    console.log('myname');
};

const a = new Test();
console.log(a.__proto__ === Test.prototype); // true
a.myname(); // myname

// or
const fn = function () {};
fn.prototype.myname = function () {
    console.log('myname');
};

var obj = {
    __proto__: fn.prototype
};

obj.myname(); // myname

 </pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{JSxRef("Object.prototype.isPrototypeOf()")}}</li>
 <li>{{JSxRef("Object.getPrototypeOf()")}}</li>
 <li>{{JSxRef("Object.setPrototypeOf()")}}</li>
</ul>
