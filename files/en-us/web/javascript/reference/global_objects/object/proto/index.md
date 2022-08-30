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

> **Warning:** Changing the `[[Prototype]]` of an object is, by the nature of how modern JavaScript engines optimize property accesses, currently a very slow operation in every browser and JavaScript engine. In addition, the effects of altering inheritance are subtle and far-flung, and are not limited to the time spent in the `obj.__proto__ = ...` statement, but may extend to **_any_** code that has access to any object whose `[[Prototype]]` has been altered. You can read more in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> **Warning:** While `Object.prototype.__proto__` is supported today in most browsers, its existence and exact behavior has only been standardized as a legacy feature to ensure compatibility for web browsers. For better support, use {{JSxRef("Object.getPrototypeOf()")}} and {{JSxRef("Object.setPrototypeOf()")}} instead.

The `__proto__` property of `Object.prototype` is an accessor property (a getter function and a setter function) that exposes the internal `[[Prototype]]` (either an object or {{JSxRef("Operators/null", "null")}}) of the object through which it is accessed.

The use of `__proto__` is controversial and discouraged. It was never originally included in the ECMAScript language spec, but modern browsers implemented it anyway. Its semantics are standardized for compatibility with web browsers, so it will be supported into the future — nevertheless, it is deprecated in favor of {{JSxRef("Object.getPrototypeOf")}}/{{JSxRef("Reflect.getPrototypeOf")}} and {{JSxRef("Object.setPrototypeOf")}}/{{JSxRef("Reflect.setPrototypeOf")}} (though still, setting the `[[Prototype]]` of an object is a slow operation that should be avoided if performance is a concern).

The `__proto__` property can also be used in an object literal definition to set the object `[[Prototype]]` on creation, as an alternative to {{JSxRef("Object.create()")}}. See: [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). That syntax is standard and optimized for in implementations, and quite different from `Object.prototype.__proto__`.

## Syntax

```js
obj.__proto__
```

### Return value

If used as a getter, returns the object's `[[Prototype]]`. If used as a setter, returns `undefined`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if attempting to set the prototype of a [non-extensible](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) object or an [immutable prototype exotic object](https://tc39.es/ecma262/#sec-immutable-prototype-exotic-objects), such as `Object.prototype` or [`window`](/en-US/docs/Web/API/Window).

## Description

The `__proto__` getter function exposes the value of the internal `[[Prototype]]` of an object. For objects created using an object literal, this value is `Object.prototype`. For objects created using array literals, this value is [`Array.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). For functions, this value is {{JSxRef("Function.prototype")}}. You can read more about the prototype chain in [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

The `__proto__` setter allows the `[[Prototype]]` of an object to be mutated. The value provided must be an object or {{JSxRef("Operators/null", "null")}}. Providing any other value will do nothing.

The `__proto__` property is a simple accessor property on `Object.prototype` consisting of a getter and setter function. A property access for `__proto__` that eventually consults `Object.prototype` will find this property, but an access that does not consult `Object.prototype` will not. If some other `__proto__` property is found before `Object.prototype` is consulted, that property will hide the one found on `Object.prototype`. If the object has `null` as its prototype, the `__proto__` accessor won't exist at all.

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
  },
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
  },
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
