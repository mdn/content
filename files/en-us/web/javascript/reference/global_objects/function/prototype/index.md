---
title: Function.prototype.prototype
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
tags:
  - Function
  - JavaScript
  - Property
spec-urls: https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-function-instances-prototype
---
{{JSRef}}

A {{jsxref("Function")}} object's **`prototype`** property is used when the function is used as a constructor with the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. It will become the new object's prototype.

> **Note:** Not all {{jsxref("Function")}} objects have the `prototype` property — see [description](#description).

{{js_property_attributes(1, 0, 0)}}

## Description

When a function is called with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), the constructor's `prototype` property will become the resulting object's prototype.

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

You can read [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#constructors) for more information about the interactions between a constructor function's `prototype` property and the resulting object's prototype.

A function having a `prototype` property is not sufficient for it to be eligible as a constructor. [Generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*) have a `prototype` property, but cannot be called with `new`:

```js
async function* asyncGeneratorFunction() {}
function* generatorFunction() {}
```

Instead, generator functions' `prototype` property is used when they are called _without_ `new`. The `prototype` property will become the returned [`Generator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object's prototype.

The following functions do not have `prototype`, and are therefore ineligible as constructors, even if a `prototype` property is later manually assigned:

```js
const method = { foo() {} }.foo;
const arrowFunction = () => {};
const boundFunction = (function () {}).bind(null);
async function asyncFunction() {}
```

The following are valid constructors that have `prototype`:

```js
class Class {}
function fn() {}
```

A function's `prototype` property, by default, is a plain object with one property: [`constructor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), which is a reference to the function itself. It is writable, non-enumerable, and configurable.

## Examples

### Changing the prototype of all instances by mutating the prototype property

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### Adding a non-method property to a class's prototype property

[Class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) add properties to each instance. Class methods declare _function_ properties on the prototype. However, there's no way to add a non-function property to the prototype. In case you want to share static data between all instances (for example, [`Error.prototype.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name) is the same between all error instances), you can manually assign it on the `prototype` of a class.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.species = "dog";

console.log(new Dog("Jack").species); // "dog"
```

This can be made more ergonomic using [static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks), which are called when the class is initialized.

```js
class Dog {
  static {
    Dog.prototype.species = "dog";
  }
  constructor(name) {
    this.name = name;
  }
}

console.log(new Dog("Jack").species); // "dog"
```

## Specifications

{{Specifications}}

## See also

- {{jsxref("Function")}}
- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#constructors)
