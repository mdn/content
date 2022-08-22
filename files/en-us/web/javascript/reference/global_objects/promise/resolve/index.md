---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Reference
browser-compat: javascript.builtins.Promise.resolve
---
{{JSRef}}

The **`Promise.resolve()`** method "resolves" a given value to a {{jsxref("Promise")}}. If the value is a promise, that promise is returned; if the value is a [thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), `Promise.resolve()` will call the `then()` method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.

This function flattens nested layers of promise-like objects (e.g. a promise that fulfills to a promise that fulfills to something) into a single layer — a promise that fulfills to a non-thenable value.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## Syntax

```js
Promise.resolve(value)
```

### Parameters

- `value`
  - : Argument to be resolved by this `Promise`. Can also be a `Promise` or a thenable to resolve.

### Return value

A {{jsxref("Promise")}} that is resolved with the given value, or the promise passed as value, if the value was a promise object. It may be either fulfilled or rejected — for example, resolving a rejected promise will still result in a rejected promise.

## Description

The static `Promise.resolve` function returns a `Promise` that is
resolved.

## Examples

### Using the static Promise.resolve method

```js
Promise.resolve('Success').then(
  (value) => {
    console.log(value); // "Success"
  },
  (reason) => {
    // not called
  },
);
```

### Resolving an array

```js
const p = Promise.resolve([1,2,3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### Resolving another Promise

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`value: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// logs, in order:
// original === cast ? true
// value: 33
```

The inverted order of the logs is due to the fact that the `then` handlers
are called asynchronously. See how `then` works [here](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#return_value).

### Resolving thenables and throwing Errors

```js
// Resolving a thenable object
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill('fulfilled!');
  },
});
console.log(p1 instanceof Promise) // true, object casted to a Promise

p1.then(
  (v) => {
    console.log(v); // "fulfilled!"
  },
  (e) => {
    // not called
  },
);

// Thenable throws before callback
// Promise rejects
const thenable = {
  then(onFulfilled) {
    throw new TypeError('Throwing');
    onFulfilled('Resolving');
  },
};

const p2 = Promise.resolve(thenable);
p2.then(
  (v) => {
    // not called
  },
  (e) => {
    console.error(e); // TypeError: Throwing
  },
);

// Thenable throws after callback
// Promise resolves
const thenable = {
  then(onFulfilled) {
    onFulfilled('Resolving');
    throw new TypeError('Throwing');
  },
};

const p3 = Promise.resolve(thenable);
p3.then(
  (v) => {
    console.log(v); // "Resolving"
  },
  (e) => {
    // not called
  },
);
```

Nested thenables will be "deeply flattened" to a single promise.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable)
  .then((v) => {
    console.log(v); // 42
  });
```

> **Warning:** Do not call `Promise.resolve()` on a thenable that resolves to itself. That leads to infinite recursion, because it attempts to flatten an infinitely-nested promise.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable)  // Will lead to infinite recursion.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
