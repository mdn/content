---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.setPrototypeOf
---

{{JSRef}}

The **`Object.setPrototypeOf()`** static method sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

> **Warning:** Changing the `[[Prototype]]` of an object is, by the nature of how modern JavaScript engines optimize property accesses, currently a very slow operation in every browser and JavaScript engine. In addition, the effects of altering inheritance are subtle and far-flung, and are not limited to the time spent in the `Object.setPrototypeOf(...)` statement, but may extend to **_any_** code that has access to any object whose `[[Prototype]]` has been altered. You can read more in [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes).
>
> Because this feature is a part of the language, it is still the burden on engine developers to implement that feature performantly (ideally). Until engine developers address this issue, if you are concerned about performance, you should avoid setting the `[[Prototype]]` of an object. Instead, create a new object with the desired `[[Prototype]]` using {{jsxref("Object.create()")}}.

{{EmbedInteractiveExample("pages/js/object-setprototypeof.html")}}

## Syntax

```js-nolint
Object.setPrototypeOf(obj, prototype)
```

### Parameters

- `obj`
  - : The object which is to have its prototype set.
- `prototype`
  - : The object's new prototype (an object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)).

### Return value

The specified object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - The `obj` parameter is `undefined` or `null`.
    - The `obj` parameter is [non-extensible](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible), or it's an [immutable prototype exotic object](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), such as `Object.prototype` or [`window`](/en-US/docs/Web/API/Window). However, the error is not thrown if the new prototype is the same value as the original prototype of `obj`.
    - The `prototype` parameter is not an object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Description

`Object.setPrototypeOf()` is generally considered the proper way to set the prototype of an object. You should always use it in favor of the deprecated [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) accessor.

If the `obj` parameter is not an object (e.g. number, string, etc.), this method does nothing — without coercing it to an object or attempting to set its prototype — and directly returns `obj` as a primitive value. If `prototype` is the same value as the prototype of `obj`, then `obj` is directly returned, without causing a `TypeError` even when `obj` has immutable prototype.

For security concerns, there are certain built-in objects that are designed to have an _immutable prototype_. This prevents prototype pollution attacks, especially [proxy-related ones](https://github.com/tc39/ecma262/issues/272). The core language only specifies `Object.prototype` as an immutable prototype exotic object, whose prototype is always `null`. In browsers, [`window`](/en-US/docs/Web/API/Window) and [`location`](/en-US/docs/Web/API/Window/location) are two other very common examples.

```js
Object.isExtensible(Object.prototype); // true; you can add more properties
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
Object.setPrototypeOf(Object.prototype, null); // No error; the prototype of `Object.prototype` is already `null`
```

## Examples

### Pseudoclassical inheritance using Object.setPrototypeOf()

Inheritance in JS using classes.

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

However, if we want to implement subclasses without using `class`, we can do the following:

```js
function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain

Human.prototype.speak = function () {
  return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.fly());
console.log(superMan.speak());
```

The similarity between classical inheritance (with classes) and pseudoclassical inheritance (with constructors' `prototype` property) as done above is mentioned in [Inheritance chains](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains).

Since function constructors' [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property is writable, you can reassign it to a new object created with [`Object.create()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) to achieve the same inheritance chain as well. There are caveats to watch out when using `create()`, such as remembering to re-add the [`constructor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) property.

In the example below, which also uses classes, `SuperHero` is made to inherit from `Human` without using `extends` by using `setPrototypeOf()` instead.

> **Warning:** It is not advisable to use `setPrototypeOf()` instead of `extends` due to performance and readability reasons.

```js
class Human {}
class SuperHero {}

// Set the instance properties
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Hook up the static properties
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

Subclassing without `extends` is mentioned in [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.setPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [Inheritance chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains)
- [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/)
