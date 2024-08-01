---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Promise.try
---

{{JSRef}}{{SeeCompatTable}}

The **`Promise.try()`** static method takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a {{jsxref("Promise")}}.

## Syntax

```js-nolint
Promise.try(func)
```

### Parameters

- `func`
  - : A function that is called synchronously with no arguments. It can do anything—either return a value, throw an error, or return a promise.

### Return value

A {{jsxref("Promise")}} that is:

- Already fulfilled, if `func` synchronously returns a value.
- Already rejected, if `func` synchronously throws an error.
- Asynchronously fulfilled or rejected, if `func` returns a promise.

## Description

You may have an API that takes a callback. The callback may be synchronous or asynchronous. You want to handle everything uniformly by wrapping the result in a promise. The most straightforward way might be {{jsxref("Promise/resolve", "Promise.resolve(func())")}}. The problem is that if `func()` synchronously throws an error, this error would not be caught and turned into a rejected promise. The correct way to do so is the following, which `Promise.try(func)` is exactly equivalent to:

```js
new Promise((resolve) => resolve(func()));
```

Except that `Promise.try()` is perhaps more concise and readable. To be more exact, the following is a more faithful representation of the implementation of `Promise.try()` (although it should still not be used as a polyfill):

```js
new Promise((resolve, reject) => {
  try {
    resolve(func());
  } catch (error) {
    reject(error);
  }
});
```

For the built-in `Promise()` constructor, errors thrown from the executor are automatically caught and turned into rejections, so these two examples are equivalent.

Note that `Promise.try()` is _not_ equivalent to this, despite being highly similar:

```js
Promise.resolve().then(func);
```

The difference is that the callback passed to {{jsxref("Promise/then", "then()")}} is always called asynchronously, while the executor of the `Promise()` constructor is called synchronously. `Promise.try` also calls the function synchronously, and resolves the promise immediately if possible.

`Promise.try()`, combined with {{jsxref("Promise/catch", "catch()")}} and {{jsxref("Promise/finally", "finally()")}}, can be used to handle both synchronous and asynchronous errors in a single chain, and make promise error handling appear almost like synchronous error handling.

## Examples

### Using Promise.try()

The following example takes a callback, "lifts" it into a promise, handles the result, and does some error handling:

```js
function doSomething(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Done"));
}

doSomething(() => "Sync result");

doSomething(() => {
  throw new Error("Sync error");
});

doSomething(async () => "Async result");

doSomething(async () => {
  throw new Error("Async error");
});
```

In async/await, the same code would look like this:

```js
async function doSomething(action) {
  try {
    const result = await action();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}
```

### Calling try() on a non-Promise constructor

`Promise.try()` is a generic method. It can be called on any constructor that implements the same signature as the `Promise()` constructor. For example, we can call it on a constructor that passes `console.log` as the `resolve` and `reject` functions to `executor`:

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the native
    // promise's, but Promise.try() just calls resolve
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const p = Promise.try.call(NotPromise, () => "hello");
// Logs: Resolved hello

const p2 = Promise.try.call(NotPromise, () => {
  throw new Error("oops");
});
// Logs: Rejected Error: oops
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise.try` in `core-js`](https://github.com/zloirock/core-js#promisetry)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises) guide
- {{jsxref("Promise")}}
- [`Promise()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
