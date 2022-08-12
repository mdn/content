---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Prototype
browser-compat: javascript.builtins.Promise.catch
---
{{JSRef}}

The **`catch()`** method returns a {{jsxref("Promise")}} and
deals with rejected cases only. It behaves the same as calling {{jsxref("Promise.then",
  "Promise.prototype.then(undefined, onRejected)")}} (in fact, calling
`obj.catch(onRejected)` internally calls
`obj.then(undefined, onRejected)`). This means that you have to provide an
`onRejected` function even if you want to fall back to an
`undefined` result value - for example `obj.catch(() => {})`.

{{EmbedInteractiveExample("pages/js/promise-catch.html")}}

## Syntax

```js
p.catch(onRejected)

p.catch(function(reason) {
  // rejection
})
```

### Parameters

- `onRejected`

  - : A {{jsxref("Function")}} called when the `Promise` is rejected. This
    function has one argument:

    - `reason`
      - : The rejection reason.

    The Promise returned by `catch()` is rejected if
    `onRejected` throws an error or returns a Promise which is
    itself rejected; otherwise, it is fulfilled.

### Return value

Internally calls `Promise.prototype.then` on the object upon which it was
called, passing the parameters `undefined` and the received
`onRejected` handler. Returns the value of that call, which is a
{{jsxref("Promise")}}.

## Description

The `catch` method is used for error handling in promise composition. Since
it returns a {{jsxref("Promise")}}, it [can be chained](/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch)
in the same way as its sister method, {{jsxref("Promise.then", "then()")}}.

`catch()` internally calls `then()`. This is observable if you wrap the methods.

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

// logs:
// Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

> **Note:** The examples below are throwing instances of [Error](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). This is
> considered good practice in contrast to throwing Strings; otherwise, the part doing
> the catching would have to perform checks to see if the argument was a string or an
> error, and you might lose valuable information like stack traces.

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
    () => console.log("after a catch the chain is restored"),
    () => console.log("Not fired due to the catch")
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
    () => console.log("after a catch the chain is restored"),
    () => console.log("Not fired due to the catch")
  );
```

### Gotchas when throwing errors

Throwing an error will call the catch method most of the time:

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

Errors thrown after resolve is called will be silenced:

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
  }
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
