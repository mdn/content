---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.construct
---

{{JSRef}}

The **`Reflect.construct()`** static method is like the {{jsxref("Operators/new", "new")}} operator, but as a function. It is equivalent to calling `new target(...args)`. It additionally allows to specify a different [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) value.

{{InteractiveExample("JavaScript Demo: Reflect.construct()", "taller")}}

```js interactive-example
function func1(a, b, c) {
  this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new func1(...args);
const object2 = Reflect.construct(func1, args);

console.log(object2.sum);
// Expected output: 6

console.log(object1.sum);
// Expected output: 6
```

## Syntax

```js-nolint
Reflect.construct(target, argumentsList)
Reflect.construct(target, argumentsList, newTarget)
```

### Parameters

- `target`
  - : The target function to call.
- `argumentsList`
  - : An [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) specifying the arguments with which `target` should be called.
- `newTarget` {{optional_inline}}
  - : The value of the [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) expression inside `target`. Defaults to `target`. Generally ([see example](#changing_new.target)), `target` specifies the _logic_ to initialize the object, while `newTarget.prototype` specifies the _prototype_ of the constructed object.

### Return value

A new instance of `target` (or `newTarget`, if present), initialized by `target` as a constructor with the given `argumentsList`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` or `newTarget` is not a constructor, or if `argumentsList` is not an object.

## Description

`Reflect.construct()` provides the reflective semantic of a constructor call. That is, `Reflect.construct(target, argumentsList, newTarget)` is semantically equivalent to:

```js
new target(...argumentsList);
```

Note that when using the `new` operator, `target` and `newTarget` are always the same constructor — but `Reflect.construct()` allows you to pass a different [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) value. Conceptually, `newTarget` is the function on which `new` was called, and `newTarget.prototype` will become the constructed object's prototype, while `target` is the constructor that is actually executed to initialize the object. For example, `new.target` may also be different from the currently executed constructor in class inheritance.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {}

new B(); // "B"
```

`Reflect.construct()` allows you to invoke a constructor with a variable number of arguments. (This is also possible with the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in a normal constructor call.)

```js
const obj = new Foo(...args);
const obj = Reflect.construct(Foo, args);
```

`Reflect.construct()` invokes the `[[Construct]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.construct()

```js
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

### Changing new.target

If `newTarget` is passed, it changes the value of `new.target` inside the constructor. The constructed object will be an instance of `newTarget`, not `target`.

```js
function OneClass() {
  console.log("OneClass executed");
  console.log(`new.target is ${new.target.name}`);
}

function OtherClass() {
  console.log("OtherClass executed");
  console.log(`new.target is ${new.target.name}`);
}

const obj1 = Reflect.construct(OneClass, []);
// Logs:
// OneClass executed
// new.target is OneClass
console.log(obj1 instanceof OneClass); // true

const obj2 = Reflect.construct(OneClass, [], OtherClass);
// Logs:
// OneClass executed
// new.target is OtherClass
console.log(obj2 instanceof OtherClass); // true
console.log(obj2 instanceof OneClass); // false
```

Of course, there's no strong guarantee about the prototype chain of the constructed object, as it depends on the constructor's implementation. For example, if the `target` constructor returns an object, then that object will be the constructed object, regardless of the `newTarget` value. If `target` is a proxy with a `construct` trap, then the trap fully controls the construction process.

```js
function OneClass() {
  return { name: "one" };
}

function OtherClass() {
  return { name: "other" };
}

const obj1 = Reflect.construct(OneClass, [], OtherClass);
console.log(obj1.name); // 'one'
console.log(obj1 instanceof OneClass); // false
console.log(obj1 instanceof OtherClass); // false
```

A valid `new.target` should be a constructor function with a [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property, but the latter is not enforced. If the `prototype` property's value is not an object, the initialized object will inherit from `Object.prototype`.

```js
function OneClass() {
  console.log("OneClass executed");
  console.log(`new.target is ${new.target.name}`);
}

function OtherClass() {
  console.log("OtherClass executed");
  console.log(`new.target is ${new.target.name}`);
}

OtherClass.prototype = null;

const obj = Reflect.construct(OneClass, [], OtherClass);
// Logs:
// OneClass executed
// new.target is OtherClass
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

### Reflect.construct() vs. Object.create()

Prior to the introduction of `Reflect`, objects could be constructed using an arbitrary combination of constructors and prototypes using {{jsxref("Object.create()")}}.

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

const args = [];
const obj1 = Reflect.construct(OneClass, args, OtherClass);
const obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

However, while the end result is the same, there is one important difference in the process. When using `Object.create()` and {{jsxref("Function.prototype.apply()")}}, the `new.target` operator will point to `undefined` within the function used as the constructor, since the `new` keyword is not being used to create the object. (In fact, it uses the [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply) semantic, not `construct`, although normal functions happen to operate nearly the same.)

When invoking `Reflect.construct()`, on the other hand, the `new.target` operator will point to the `newTarget` parameter if supplied, or `target` if not.

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

const obj1 = Reflect.construct(OneClass, args);
// Logs:
// OneClass
// function OneClass { ... }

const obj2 = Reflect.construct(OneClass, args, OtherClass);
// Logs:
// OneClass
// function OtherClass { ... }

const obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.construct` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Operators/new", "new")}}
- [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
- [`handler.construct()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
