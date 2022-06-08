---
title: get Promise[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Promise/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Reference
browser-compat: javascript.builtins.Promise.@@species
---
{{JSRef}}

The **`Promise[@@species]`** accessor property returns the constructor used to construct return values from promise methods.

## Description

The `@@species` accessor property returns the default constructor for `Promise` objects. Subclass constructors may override it to change the constructor assignment.

When chaining promise methods like `then`, `finally`, etc., the instance's `constructor[@@species]` will be accessed. The returned constructor will be used to construct the return value of the promise method.

## Examples

### Species in ordinary objects

The `Symbol.species` property returns the default constructor function, which is the `Promise` constructor for `Promise` objects.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Species in derived objects

In an instance of a derived class from `Promise` (e.g. your custom `MyPromise`), the `MyPromise` species is the `MyPromise` constructor. However, you might want to override this, in order to return parent `Promise` objects in your derived class methods.

```js
class MyPromise extends Promise {
  // Override MyPromise species to the parent Promise constructor
  static get [Symbol.species]() { return Promise; }
}
```

By default, promise methods would return promises with the type of the subclass.

```js
class MyPromise extends Promise {
  someValue = 1;
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // 1
```

By overriding `@@species`, the promise methods will return the base `Promise` type.

```js
class MyPromise extends Promise {
  someValue = 1;
  static get [Symbol.species]() { return Promise; }
}

console.log(MyPromise.resolve(1).then(() => {}).someValue); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
