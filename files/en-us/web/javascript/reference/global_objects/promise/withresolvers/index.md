---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
page-type: javascript-static-method
browser-compat: javascript.builtins.Promise.withResolvers
---

{{JSRef}}

The **`Promise.withResolvers()`** static method returns an object containing a new {{jsxref("Promise")}} object and two functions to resolve or reject it, corresponding to the two parameters passed to the executor of the {{jsxref("Promise/Promise", "Promise()")}} constructor.

## Syntax

```js-nolint
Promise.withResolvers()
```

### Parameters

None.

### Return value

A plain object containing the following properties:

- `promise`
  - : A {{jsxref("Promise")}} object.
- `resolve`
  - : A function that resolves the promise. For its semantics, see the {{jsxref("Promise/Promise", "Promise()")}} constructor reference.
- `reject`
  - : A function that rejects the promise. For its semantics, see the {{jsxref("Promise/Promise", "Promise()")}} constructor reference.

## Description

`Promise.withResolvers()` is exactly equivalent to the following code:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

Except that it is more concise and does not require the use of {{jsxref("Statements/let", "let")}}.

The key difference when using `Promise.withResolvers()` is that the resolution and rejection functions now live in the same scope as the promise itself, instead of being created and used once within the executor. This may enable some more advanced use cases, such as when reusing them for recurring events, particularly with streams and queues. This also generally results in less nesting than wrapping a lot of logic within the executor.

`Promise.withResolvers()` is generic and supports subclassing, which means it can be called on subclasses of `Promise`, and the result will contain a promise of the subclass type. To do so, the subclass's constructor must implement the same signature as the [`Promise()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) constructor — accepting a single `executor` function that can be called with the `resolve` and `reject` callbacks as parameters.

## Examples

### Transforming a stream to an async iterable

The use case of `Promise.withResolvers()` is when you have a promise that should be resolved or rejected by some event listener that cannot be wrapped inside the promise executor. The following example transforms a Node.js [readable stream](https://nodejs.org/api/stream.html#class-streamreadable) to an [async iterable](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*). Each `promise` here represents a single batch of data available, and each time the current batch is read, a new promise is created for the next batch. Note how the event listeners are only attached once, but actually call a different version of the `resolve` and `reject` functions each time.

```js
async function* readableToAsyncIterable(stream) {
  let { promise, resolve, reject } = Promise.withResolvers();
  stream.on("error", (error) => reject(error));
  stream.on("end", () => resolve());
  stream.on("readable", () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### Calling withResolvers() on a non-Promise constructor

`Promise.withResolvers()` is a generic method. It can be called on any constructor that implements the same signature as the `Promise()` constructor. For example, we can call it on a constructor that passes `console.log` as the `resolve` and `reject` functions to `executor`:

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the native
    // promise's, but Promise.withResolvers() just returns them, as is.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("hello");
// Logs: Resolved hello
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Promise.withResolvers` in `core-js`](https://github.com/zloirock/core-js#promisewithresolvers)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises) guide
- {{jsxref("Promise")}}
- [`Promise()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
