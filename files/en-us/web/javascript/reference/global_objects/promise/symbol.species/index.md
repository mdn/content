---
title: Promise[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
page-type: javascript-static-accessor-property
browser-compat: javascript.builtins.Promise.@@species
---

{{JSRef}}

The **`Promise[Symbol.species]`** static accessor property returns the constructor used to construct return values from promise methods.

> **Warning:** The existence of `[Symbol.species]` allows execution of arbitrary code and may create security vulnerabilities. It also makes certain optimizations much harder. Engine implementers are [investigating whether to remove this feature](https://github.com/tc39/proposal-rm-builtin-subclassing). Avoid relying on it if possible.

## Syntax

```js-nolint
Promise[Symbol.species]
```

### Return value

The value of the constructor (`this`) on which `get [Symbol.species]` was called. The return value is used to construct return values from promise chaining methods that create new promises.

## Description

The `[Symbol.species]` accessor property returns the default constructor for `Promise` objects. Subclass constructors may override it to change the constructor assignment. The default implementation is basically:

```js
// Hypothetical underlying implementation for illustration
class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

Because of this polymorphic implementation, `[Symbol.species]` of derived subclasses would also return the constructor itself by default.

```js
class SubPromise extends Promise {}
SubPromise[Symbol.species] === SubPromise; // true
```

Promise chaining methods — [`then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch), and [`finally()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) — return new promise objects. They get the constructor to construct the new promise through `this.constructor[Symbol.species]`. If `this.constructor` is `undefined`, or if `this.constructor[Symbol.species]` is `undefined` or `null`, the default {{jsxref("Promise/Promise", "Promise()")}} constructor is used. Otherwise, the constructor returned by `this.constructor[Symbol.species]` is used to construct the new promise object.

## Examples

### Species in ordinary objects

The `Symbol.species` property returns the default constructor function, which is the `Promise` constructor for `Promise`.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Species in derived objects

In an instance of a custom `Promise` subclass, such as `MyPromise`, the `MyPromise` species is the `MyPromise` constructor. However, you might want to override this, in order to return parent `Promise` objects in your derived class methods.

```js
class MyPromise extends Promise {
  // Override MyPromise species to the parent Promise constructor
  static get [Symbol.species]() {
    return Promise;
  }
}
```

By default, promise methods would return promises with the type of the subclass.

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

By overriding `[Symbol.species]`, the promise methods will return the base `Promise` type.

```js
class MyPromise extends Promise {
  someValue = 1;
  static get [Symbol.species]() {
    return Promise;
  }
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Symbol.species")}}
