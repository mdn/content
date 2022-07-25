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
{{JSRef}}{{Deprecated_header}}

> **Warning:** Changing the `[[Prototype]]` of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in **_every_** browser and JavaScript engine. The effects on the performance of altering inheritance are subtle and far-flung, and are not limited to the time spent in `obj.__proto__ = …` statements, but may extend to **_any_** code that has access to **_any_** object whose `[[Prototype]]` has been altered. If you care about performance you should avoid setting the `[[Prototype]]` of an object. Instead, create a new object with the desired `[[Prototype]]` using {{JSxRef("Object.create()")}}.

> **Warning:** While `Object.prototype.__proto__` is supported today in most browsers, its existence and exact behavior has only been standardized in the ECMAScript 2015 specification as a legacy feature to ensure compatibility for web browsers. For better support, use {{JSxRef("Object.getPrototypeOf()")}} instead.

The `__proto__` property of {{JSxRef("Object.prototype")}} is an accessor property (a getter function and a setter function) that exposes the internal `[[Prototype]]` (either an object or {{JSxRef("Operators/null", "null")}}) of the object through which it is accessed.

The use of `__proto__` is controversial and discouraged. It was never originally included in the ECMAScript language spec, but modern browsers implemented it anyway. Only recently was the `__proto__` property standardized by the ECMAScript 2015 specification for compatibility with web browsers, so it will be supported into the future. It is deprecated in favor of {{JSxRef("Object.getPrototypeOf")}}/{{JSxRef("Reflect.getPrototypeOf")}} and {{JSxRef("Object.setPrototypeOf")}}/{{JSxRef("Reflect.setPrototypeOf")}} (though still, setting the `[[Prototype]]` of an object is a slow operation that should be avoided if performance is a concern).

The `__proto__` property can also be used in an object literal definition to set the object `[[Prototype]]` on creation, as an alternative to {{JSxRef("Object.create()")}}. See: [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). That syntax is standard and optimized for in implementations, and quite different from `Object.prototype.__proto__`.

## Description

The `__proto__` getter function exposes the value of the internal `[[Prototype]]` of an object. For objects created using an object literal, this value is {{JSxRef("Object.prototype")}}. For objects created using array literals, this value is {{JSxRef("Array.prototype")}}. For functions, this value is {{JSxRef("Function.prototype")}}. For objects created using `new fun`, where `fun` is one of the built-in constructor functions provided by JavaScript ({{JSxRef("Array")}}, {{JSxRef("Boolean")}}, {{JSxRef("Date")}}, {{JSxRef("Number")}}, {{JSxRef("Object")}}, {{JSxRef("String")}}, and so on — including new constructors added as JavaScript evolves), this value is always `fun.prototype`. For objects created using `new fun`, where `fun` is a function defined in a script, this value is the value of `fun.prototype`. (That is, if the constructor didn't return an other object explicitly, or the `fun.prototype` has been reassigned since the instance was created.)

The `__proto__` setter allows the `[[Prototype]]` of an object to be mutated. The object must be extensible according to {{JSxRef("Object.isExtensible()")}}: if it is not, a {{JSxRef("Global_Objects/TypeError", "TypeError")}} is thrown. The value provided must be an object or {{JSxRef("Operators/null", "null")}}. Providing any other value will do nothing.

To understand how prototypes are used for inheritance, see guide article [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

The `__proto__` property is a simple accessor property on {{JSxRef("Object.prototype")}} consisting of a getter and setter function. A property access for `__proto__` that eventually consults {{JSxRef("Object.prototype")}} will find this property, but an access that does not consult {{JSxRef("Object.prototype")}} will not. If some other `__proto__` property is found before {{JSxRef("Object.prototype")}} is consulted, that property will hide the one found on {{JSxRef("Object.prototype")}}.

## Examples

### Using \_\_proto\_\_

```js

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

const obj = {};
obj.__proto__ = fn.prototype;
obj.myname(); // myname
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Object.prototype.isPrototypeOf()")}}
- {{JSxRef("Object.getPrototypeOf()")}}
- {{JSxRef("Object.setPrototypeOf()")}}
