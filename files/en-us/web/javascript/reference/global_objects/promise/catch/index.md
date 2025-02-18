---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
page-type: javascript-instance-method
browser-compat: javascript.builtins.Promise.catch
---

{{JSRef}}

The **`catch()`** method of {{jsxref("Promise")}} instances schedules a function to be called when the promise is rejected. It immediately returns another {{jsxref("Promise")}} object, allowing you to [chain](/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining) calls to other promise methods. It is a shortcut for {{jsxref("Promise/then", "then(undefined, onRejected)")}}.

{{InteractiveExample("JavaScript Demo: Promise.catch()")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

promise1.catch((error) => {
  console.error(error);
});
// Expected output: Error: Uh-oh!
```

## Syntax

```js-nolint
promiseInstance.catch(onRejected)
```

### Parameters

- `onRejected`
  - : A function to asynchronously execute when this promise becomes rejected. Its return value becomes the fulfillment value of the promise returned by `catch()`. The function is called with the following arguments:
    - `reason`
      - : The value that the promise was rejected with.

### Return value

Returns a new {{jsxref("Promise")}}. This new promise is always pending when returned, regardless of the current promise's status. If `onRejected` is called, the returned promise will resolve based on the return value of this call, or reject with the thrown error from this call. If the current promise fulfills, `onRejected` is not called and the returned promise fulfills to the same value.

## Description

The `catch` method is used for error handling in promise composition. Since it returns a {{jsxref("Promise")}}, it [can be chained](/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch) in the same way as its sister method, {{jsxref("Promise/then", "then()")}}.

If a promise becomes rejected, and there are no rejection handlers to call (a handler can be attached through any of {{jsxref("Promise/then", "then()")}}, `catch()`, or {{jsxref("Promise/finally", "finally()")}}), then the rejection event is surfaced by the host. In the browser, this results in an [`unhandledrejection`](/en-US/docs/Web/API/Window/unhandledrejection_event) event. If a handler is attached to a rejected promise whose rejection has already caused an unhandled rejection event, then another [`rejectionhandled`](/en-US/docs/Web/API/Window/rejectionhandled_event) event is fired.

`catch()` internally calls `then()` on the object upon which it was called, passing `undefined` and `onRejected` as arguments. The value of that call is directly returned. This is observable if you wrap the methods.

```js
// overriding original Promise.prototype.then/catch just to add some logs
((Promise) => {
  const originalThen = Promise.prototype.then;
  const originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("Called .then on %o with arguments: %o", this, args);
    return originalThen.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("Called .catch on %o with arguments: %o", this, args);
    return originalCatch.apply(this, args);
  };
})(Promise);

// calling catch on an already resolved promise
Promise.resolve().catch(function XXX() {});

// Logs:
// Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

This means that passing `undefined` still causes the returned promise to be rejected, and you have to pass a function to prevent the final promise from being rejected.

Because `catch()` just calls `then()`, it supports subclassing.

> [!NOTE]
> The examples below are throwing instances of [`Error`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). As with synchronous [`throw`](/en-US/docs/Web/JavaScript/Reference/Statements/throw) statements, this is considered a good practice; otherwise, the part doing the catching would have to perform checks to see if the argument was a string or an error, and you might lose valuable information such as stack traces.

## Examples

### Using and chaining the catch() method

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success");
});

p1.then((value) => {
  console.log(value); // "Success!"
  throw new Error("oh, no!");
})
  .catch((e) => {
    console.error(e.message); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );

// The following behaves the same as above
p1.then((value) => {
  console.log(value); // "Success!"
  return Promise.reject("oh, no!");
})
  .catch((e) => {
    console.error(e); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );
```

### Gotchas when throwing errors

Throwing an error will call the `catch()` method most of the time:

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

p1.catch((e) => {
  console.error(e); // "Uh-oh!"
});
```

Errors thrown inside asynchronous functions will act like uncaught errors:

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Uncaught Exception!");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // This is never called
});
```

Errors thrown after `resolve` is called will be silenced:

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // This is never called
});
```

### catch() is not called if the promise is fulfilled

```js
// Create a promise which would not call onReject
const p1 = Promise.resolve("calling next");

const p2 = p1.catch((reason) => {
  // This is never called
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // calling next
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.finally()")}}
