---
title: Promise() constructor
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
tags:
  - Constructor
  - JavaScript
  - Promise
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Promise.Promise
---
{{JSRef}}

The **`Promise`** constructor is primarily used to wrap functions that do not already support promises.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntax

```js
new Promise(executor)
```

> **Note:** `Promise()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `executor`
  - : A {{jsxref("function")}} to be executed by the constructor. It receives two functions as parameters: `resolutionFunc` and `rejectionFunc`. Any errors thrown in the `executor` will cause the promise to be rejected, and the return value will be neglected. The semantics of `executor` are detailed below.

### Return value

When called via `new`, the `Promise` constructor returns a promise object. The promise object will become _resolved_ when either of the functions `resolutionFunc` or `rejectionFunc` are invoked. Note that if you call `resolutionFunc` or `rejectionFunc` and pass another `Promise` object as an argument, it can be said to be "resolved", but still not "settled". See the [Promise description](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) for more explanation.

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
function executor(resolutionFunc, rejectionFunc) {
  // Typically, some asynchronous operation that accepts a callback,
  // like the `readFile` function above
}
```

`resolutionFunc` and `rejectionFunc` are also functions, and you can give them whatever actual names you want. Their signatures are simple: they accept a single parameter of any type.

```js
resolutionFunc(value) // call on resolved
rejectionFunc(reason) // call on rejected
```

The `resolutionFunc` `value` parameter can be another promise object, in which case the promise gets dynamically inserted into the [promise chain](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). The `rejectionFunc` has semantics close to the [`throw`](/en-US/docs/Web/JavaScript/Reference/Statements/throw) statement, so `reason` is typically an [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) instance. If either `value` or `reason` is omitted, the promise is fulfilled/rejected with `undefined`.

About the `executor`, it's important to understand the following:

- The `executor` return value is ignored.
- If an error is thrown in the `executor`, the promise is rejected.

So the mechanism by which the code within the `executor` has effect is as follows:

- At the time when the constructor generates the new `Promise` object, it also generates a corresponding pair of functions for `resolutionFunc` and `rejectionFunc`; these are "tethered" to the `Promise` object.
- The code within the `executor` has the opportunity to perform some operation. The eventual completion of the asynchronous task is communicated with the promise instance via the side effect caused by `resolutionFunc` or `rejectionFunc`. The side effect is that the `Promise` object either becomes "fulfilled", or "rejected".
- The promise object is stateful: once its state has moved from "pending" to "fulfilled" or "rejected", it stays fulfilled or rejected. Only the first call to `resolutionFunc` or `rejectionFunc` affects the promise's state, and subsequent calls to either function can neither change the fulfillment value/rejection reason nor toggle the state from "fulfilled" to "rejected" or opposite.
- `return` statements within the `executor` merely impacts control flow and alters whether a part of the function is executed, but does not have any impact on the promise's fulfillment value.

And so, given all the above, here's a summary of the typical flow:

1. `executor` typically wraps some asynchronous operation which provides a callback-based API.
2. The callback (the one passed to the original callback-based API) is defined within the `executor` code, so it has access to the `resolutionFunc` and `rejectionFunc`.
3. The promise is informed of the asynchronous task's eventual result, received from the callback, through the invocation of `resolutionFunc` or `rejectionFunc`.
4. Once `resolutionFunc` or `rejectionFunc` is called, the promise's state moves from "pending" to either "fulfilled" or "rejected".
5. The `Promise` object (asynchronously) invokes any further handlers associated by `.then(handleFulfilled)` or `.catch(handleRejected)`.
6. The argument passed to `resolutionFunc` or `rejectionFunc`, i.e., the fulfillment value or rejection reason, is passed to the invocation of `handleFulfilled` and `handleRejected` as an input parameter (see [Chained Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)).

For example, the callback-based `readFile` API above can be transformed into a promise-based one.

```js
const readFilePromise = (path) => new Promise((resolve, reject) => {
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

## Examples

### Creating a new Promise

A `Promise` object is created using the `new` keyword and its
constructor. This constructor takes a function, called the "executor function", as its
parameter. This function should take two functions as parameters. The first of these
functions (`resolve`) is called when the asynchronous task completes
successfully and returns the results of the task as a value. The second
(`reject`) is called when the task fails, and returns the reason for failure,
which is typically an error object.

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});
```

### Making functions return a Promise

To provide a function with promise functionality, have it return a promise:

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText)
    xhr.send()
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using Promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
