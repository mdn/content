---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.resolve
---

{{JSRef}}

The **`Promise.resolve()`** static method "resolves" a given value to a {{jsxref("Promise")}}. If the value is a promise, that promise is returned; if the value is a [thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), `Promise.resolve()` will call the `then()` method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.

This function flattens nested layers of promise-like objects (e.g. a promise that fulfills to a promise that fulfills to something) into a single layer — a promise that fulfills to a non-thenable value.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## Syntax

```js-nolint
Promise.resolve(value)
```

### Parameters

- `value`
  - : Argument to be resolved by this `Promise`. Can also be a `Promise` or a thenable to resolve.

### Return value

A {{jsxref("Promise")}} that is resolved with the given value, or the promise passed as value, if the value was a promise object. A resolved promise can be in any of the states — fulfilled, rejected, or pending. For example, resolving a rejected promise will still result in a rejected promise.

## Description

`Promise.resolve()` _resolves_ a promise, which is not the same as fulfilling or rejecting the promise. See [Promise description](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) for definitions of the terminology. In brief, `Promise.resolve()` returns a promise whose eventual state depends on another promise, thenable object, or other value.

`Promise.resolve()` is generic and supports subclassing, which means it can be called on subclasses of `Promise`, and the result will be a promise of the subclass type. To do so, the subclass's constructor must implement the same signature as the [`Promise()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) constructor — accepting a single `executor` function that can be called with the `resolve` and `reject` callbacks as parameters.

`Promise.resolve()` special-cases native `Promise` instances. If `value` belongs to `Promise` or a subclass, and `value.constructor === Promise`, then `value` is directly returned by `Promise.resolve()`, without creating a new `Promise` instance. Otherwise, `Promise.resolve()` is essentially a shorthand for `new Promise((resolve) => resolve(value))`.

The bulk of the resolving logic is actually implemented by the [resolver function](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#resolver_function) passed by the `Promise()` constructor. In summary:

- If a non-[thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) value is passed, the returned promise is already fulfilled with that value.
- If a thenable is passed, the returned promise will adopt the state of that thenable by calling the `then` method and passing a pair of resolving functions as arguments. (But because native promises directly pass through `Promise.resolve()` without creating a wrapper, the `then` method is not called on native promises.) If the resolver function receives another thenable object, it will be resolved again, so that the eventual fulfillment value of the promise will never be thenable.

## Examples

### Using the static Promise.resolve method

```js
Promise.resolve("Success").then(
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
const p = Promise.resolve([1, 2, 3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### Resolving another Promise

`Promise.resolve()` reuses existing `Promise` instances. If it's resolving a native promise, it returns the same promise instance without creating a wrapper.

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`value: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// Logs, in order:
// original === cast ? true
// value: 33
```

The inverted order of the logs is due to the fact that the `then` handlers are called asynchronously. See the {{jsxref("Promise/then", "then()")}} reference for more information.

### Resolving thenables and throwing Errors

```js
// Resolving a thenable object
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true, object casted to a Promise

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
    throw new TypeError("Throwing");
    onFulfilled("Resolving");
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
    onFulfilled("Resolving");
    throw new TypeError("Throwing");
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

Promise.resolve(thenable).then((v) => {
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

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Calling resolve() on a non-Promise constructor

`Promise.resolve()` is a generic method. It can be called on any constructor that implements the same signature as the `Promise()` constructor. For example, we can call it on a constructor that passes it `console.log` as `resolve`:

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the
    // native promise's, but Promise.resolve() calls them in the same way.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

Promise.resolve.call(NotPromise, "foo"); // Logs "Resolved foo"
```

The ability to flatten nested thenables is implemented by the resolver function of the `Promise()` constructor, so if you call it on another constructor, nested thenables may not be flattened, depending on how that constructor implements its resolver.

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

Promise.resolve.call(NotPromise, thenable); // Logs "Resolved { then: [Function: then] }"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
