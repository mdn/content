---
title: Promise() constructor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
page-type: javascript-constructor
browser-compat: javascript.builtins.Promise.Promise
---

{{JSRef}}

The **`Promise()`** constructor creates {{jsxref("Promise")}} objects. It is primarily used to wrap callback-based APIs that do not already support promises.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntax

```js-nolint
new Promise(executor)
```

> **Note:** `Promise()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `executor`
  - : A {{jsxref("function")}} to be executed by the constructor. It receives two functions as parameters: `resolveFunc` and `rejectFunc`. Any errors thrown in the `executor` will cause the promise to be rejected, and the return value will be neglected. The semantics of `executor` are detailed below.

### Return value

When called via `new`, the `Promise` constructor returns a promise object. The promise object will become _resolved_ when either of the functions `resolveFunc` or `rejectFunc` are invoked. Note that if you call `resolveFunc` or `rejectFunc` and pass another `Promise` object as an argument, it can be said to be "resolved", but still not "settled". See the [Promise description](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) for more explanation.

## Description

Traditionally (before promises), asynchronous tasks were designed as callbacks.

```js
readFile("./data.txt", (error, result) => {
  // This callback will be called when the task is done, with the
  // final `error` or `result`. Any operation dependent on the
  // result must be defined within this callback.
});
// Code here is immediately executed after the `readFile` request
// is fired. It does not wait for the callback to be called, hence
// making `readFile` "asynchronous".
```

To take advantage of the readability improvement and language features offered by promises, the `Promise()` constructor allows one to transform the callback-based API to a promise-based one.

> **Note:** If your task is already promise-based, you likely do not need the `Promise()` constructor.

The `executor` is custom code that ties an outcome in a callback to a promise. You, the programmer, write the `executor`. Its signature is expected to be:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolveFunc` and `rejectFunc` are also functions, and you can give them whatever actual names you want. Their signatures are simple: they accept a single parameter of any type.

```js
resolveFunc(value); // call on resolved
rejectFunc(reason); // call on rejected
```

The `value` parameter passed to `resolveFunc` can be another promise object, in which case the newly constructed promise's state will be "locked in" to the promise passed (as part of the [resolution](#resolver_function) promise). The `rejectFunc` has semantics close to the [`throw`](/en-US/docs/Web/JavaScript/Reference/Statements/throw) statement, so `reason` is typically an [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) instance. If either `value` or `reason` is omitted, the promise is fulfilled/rejected with `undefined`.

The `executor`'s completion state has limited effect on the promise's state:

- The `executor` return value is ignored. `return` statements within the `executor` merely impact control flow and alter whether a part of the function is executed, but do not have any impact on the promise's fulfillment value. If `executor` exits and it's impossible for `resolveFunc` or `rejectFunc` to be called in the future (for example, there are no async tasks scheduled), then the promise remains pending forever.
- If an error is thrown in the `executor`, the promise is rejected, unless `resolveFunc` or `rejectFunc` has already been called.

> **Note:** The existence of pending promises does not prevent the program from exiting. If the event loop is empty, the program exits despite any pending promises (because those are necessarily forever-pending).

Here's a summary of the typical flow:

1. At the time when the constructor generates the new `Promise` object, it also generates a corresponding pair of functions for `resolveFunc` and `rejectFunc`; these are "tethered" to the `Promise` object.
2. `executor` typically wraps some asynchronous operation which provides a callback-based API. The callback (the one passed to the original callback-based API) is defined within the `executor` code, so it has access to the `resolveFunc` and `rejectFunc`.
3. The `executor` is called synchronously (as soon as the `Promise` is constructed) with the `resolveFunc` and `rejectFunc` functions as arguments.
4. The code within the `executor` has the opportunity to perform some operation. The eventual completion of the asynchronous task is communicated with the promise instance via the side effect caused by `resolveFunc` or `rejectFunc`. The side effect is that the `Promise` object becomes "resolved".
   - If `resolveFunc` is called first, the value passed will be [resolved](#resolver_function). The promise may stay pending (in case another [thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) is passed), become fulfilled (in most cases where a non-thenable value is passed), or become rejected (in case of an invalid resolution value).
   - If `rejectFunc` is called first, the promise instantly becomes rejected.
   - Once one of the resolving functions (`resolveFunc` or `rejectFunc`) is called, the promise stays resolved. Only the first call to `resolveFunc` or `rejectFunc` affects the promise's eventual state, and subsequent calls to either function can neither change the fulfillment value/rejection reason nor toggle its eventual state from "fulfilled" to "rejected" or opposite.
   - If `executor` exits by throwing an error, then the promise is rejected. However, the error is ignored if one of the resolving functions has already been called (so that the promise is already resolved).
   - Resolving the promise does not necessarily cause the promise to become fulfilled or rejected (i.e. settled). The promise may still be pending because it's resolved with another thenable, but its eventual state will match that of the resolved thenable.
5. Once the promise settles, it (asynchronously) invokes any further handlers associated through {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, or {{jsxref("Promise/finally", "finally()")}}. The eventual fulfillment value or rejection reason is passed to the invocation of fulfillment and rejection handlers as an input parameter (see [Chained Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

For example, the callback-based `readFile` API above can be transformed into a promise-based one.

```js
const readFilePromise = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

readFilePromise("./data.txt")
  .then((result) => console.log(result))
  .catch((error) => console.error("Failed to read data"));
```

### Resolver function

The resolver function `resolveFunc` has the following behaviors:

- If it's called with the same value as the newly created promise (the promise it's "tethered to"), the promise is rejected with a {{jsxref("TypeError")}}.
- If it's called with a non-[thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) value (a primitive, or an object whose `then` property is not callable, including when the property is not present), the promise is immediately fulfilled with that value.
- If it's called with a thenable value (including another `Promise` instance), then the thenable's `then` method is saved and called in the future (it's always called asynchronously). The `then` method will be called with two callbacks, which are two new functions with the exact same behaviors as the `resolveFunc` and `rejectFunc` passed to the `executor` function. If calling the `then` method throws, then the current promise is rejected with the thrown error.

In the last case, it means code like:

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Is roughly equivalent to:

```js
new Promise((resolve, reject) => {
  try {
    thenable.then(
      (value) => resolve(value),
      (reason) => reject(reason),
    );
  } catch (e) {
    reject(e);
  }
});
```

Except that in the `resolve(thenable)` case:

1. `resolve` is called synchronously, so that calling `resolve` or `reject` again has no effect, even when the handlers attached through `anotherPromise.then()` are not called yet.
2. The `then` method is called asynchronously, so that the promise will never be instantly resolved if a thenable is passed.

Because `resolve` is called again with whatever `thenable.then()` passes to it as `value`, the resolver function is able to flatten nested thenables, where a thenable calls its `onFulfilled` handler with another thenable. The effect is that the fulfillment handler of a real promise will never receive a thenable as its fulfillment value.

## Examples

### Turning a callback-based API into a promise-based one

To provide a function with promise functionality, have it return a promise by calling the `resolve` and `reject` functions at the correct times.

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

### Effect of calling resolveFunc

Calling `resolveFunc` causes the promise to become resolved, so that calling `resolveFunc` or `rejectFunc` again has no effect. However, the promise may be in any of the states: pending, fulfilled, or rejected.

This `pendingResolved` promise is resolved the time it's created, because it has already been "locked in" to match the eventual state of the inner promise, and calling `resolveOuter` or `rejectOuter` or throwing an error later in the executor has no effect on its eventual state. However, the inner promise is still pending until 100ms later, so the outer promise is also pending:

```js
const pendingResolved = new Promise((resolveOuter, rejectOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(() => {
        resolveInner("inner");
      }, 100);
    }),
  );
});
```

This `fulfilledResolved` promise becomes fulfilled the moment it's resolved, because it's resolved with a non-thenable value. However, when it's created, it's unresolved, because neither `resolve` nor `reject` has been called yet. An unresolved promise is necessarily pending:

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

Calling `rejectFunc` obviously causes the promise to reject. However, there are also two ways to cause the promise to instantly become rejected even when the `resolveFunc` callback is called.

```js
// 1. Resolving with the promise itself
const rejectedResolved1 = new Promise((resolve) => {
  // Note: resolve has to be called asynchronously,
  // so that the rejectedResolved1 variable is initialized
  setTimeout(() => resolve(rejectedResolved1)); // TypeError: Chaining cycle detected for promise #<Promise>
});

// 2. Resolving with an object which throws when accessing the `then` property
const rejectedResolved2 = new Promise((resolve) => {
  resolve({
    get then() {
      throw new Error("Can't get then property");
    },
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
