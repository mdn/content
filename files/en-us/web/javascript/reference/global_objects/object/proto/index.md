---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
page-type: javascript-instance-accessor-property
status:
  - deprecated
browser-compat: javascript.builtins.Object.proto
---

{{JSRef}}{{Deprecated_header}}

> **Warning:** Changing the `[[Prototype]]` of an object is, by the nature of how modern JavaScript engines optimize property accesses, currently a very slow operation in every browser and JavaScript engine. In addition, the effects of altering inheritance are subtle and far-flung, and are not limited to the time spent in the `obj.__proto__ = ...` statement, but may extend to **_any_** code that has access to any object whose `[[Prototype]]` has been altered. You can read more in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).

> **Note:** The use of `__proto__` is controversial and discouraged. Its existence and exact behavior have only been standardized as a legacy feature to ensure web compatibility, while it presents several security issues and footguns. For better support, prefer {{JSxRef("Object.getPrototypeOf()")}}/{{JSxRef("Reflect.getPrototypeOf()")}} and {{JSxRef("Object.setPrototypeOf()")}}/{{JSxRef("Reflect.setPrototypeOf()")}} instead.

The **`__proto__`** accessor property of {{jsxref("Object")}} instances exposes the [`[[Prototype]]`](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (either an object or {{jsxref("Operators/null", "null")}}) of this object.

The `__proto__` property can also be used in an object literal definition to set the object `[[Prototype]]` on creation, as an alternative to {{JSxRef("Object.create()")}}. See: [object initializer / literal syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). That syntax is standard and optimized for in implementations, and quite different from `Object.prototype.__proto__`.

## Syntax

```js-nolint
obj.__proto__
```

### Return value

If used as a getter, returns the object's `[[Prototype]]`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if attempting to set the prototype of a [non-extensible](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) object or an [immutable prototype exotic object](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), such as `Object.prototype` or [`window`](/en-US/docs/Web/API/Window).

## Description

The `__proto__` getter function exposes the value of the internal `[[Prototype]]` of an object. For objects created using an object literal, this value is `Object.prototype`. For objects created using array literals, this value is [`Array.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). For functions, this value is {{JSxRef("Function.prototype")}}. You can read more about the prototype chain in [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

The `__proto__` setter allows the `[[Prototype]]` of an object to be mutated. The value provided must be an object or {{JSxRef("Operators/null", "null")}}. Providing any other value will do nothing.

Unlike {{jsxref("Object.getPrototypeOf()")}} and {{jsxref("Object.setPrototypeOf()")}}, which are always available on `Object` as static properties and always reflect the `[[Prototype]]` internal property, the `__proto__` property doesn't always exist as a property on all objects, and as a result doesn't reflect `[[Prototype]]` reliably.

The `__proto__` property is a simple accessor property on `Object.prototype` consisting of a getter and setter function. A property access for `__proto__` that eventually consults `Object.prototype` will find this property, but an access that does not consult `Object.prototype` will not. If some other `__proto__` property is found before `Object.prototype` is consulted, that property will hide the one found on `Object.prototype`.

[`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) don't inherit any property from `Object.prototype`, including the `__proto__` accessor property, so if you try to read `__proto__` on such an object, the value is always `undefined` regardless of the object's actual `[[Prototype]]`, and any assignment to `__proto__` would create a new property called `__proto__` instead of setting the object's prototype. Furthermore, `__proto__` can be redefined as an own property on any object instance through {{jsxref("Object.defineProperty()")}} without triggering the setter. In this case, `__proto__` will no longer be an accessor for `[[Prototype]]`. Therefore, always prefer {{jsxref("Object.getPrototypeOf()")}} and {{jsxref("Object.setPrototypeOf()")}} for setting and getting the `[[Prototype]]` of an object.

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
console.log(shape.__proto__ === Circle); // false
```

```js
const ShapeA = function () {};
const ShapeB = {
  a() {
    console.log("aaa");
  },
};

ShapeA.prototype.__proto__ = ShapeB;
console.log(ShapeA.prototype.__proto__); // { a: [Function: a] }

const shapeA = new ShapeA();
shapeA.a(); // aaa
console.log(ShapeA.prototype === shapeA.__proto__); // true
```

```js
const ShapeC = function () {};
const ShapeD = {
  a() {
    console.log("a");
  },
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false
```

```js
function Test() {}
Test.prototype.myName = function () {
  console.log("myName");
};

const test = new Test();
console.log(test.__proto__ === Test.prototype); // true
test.myName(); // myName

const obj = {};
obj.__proto__ = Test.prototype;
obj.myName(); // myName
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Object.prototype.isPrototypeOf()")}}
- {{JSxRef("Object.getPrototypeOf()")}}
- {{JSxRef("Object.setPrototypeOf()")}}
