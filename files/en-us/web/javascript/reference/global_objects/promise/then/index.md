---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
  - Prototype
browser-compat: javascript.builtins.Promise.then
---

{{JSRef}}

The **`then()`** method returns a {{jsxref("Promise")}}. It takes up to two arguments: callback functions for the fulfilled and rejected cases of the `Promise`.

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

## Syntax

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)

then(
  (value) => { /* fulfillment handler */ },
  (reason) => { /* rejection handler */ },
);
```

### Parameters

- `onFulfilled` {{optional_inline}}
  - : A {{jsxref("Function")}} asynchronously called if the `Promise` is fulfilled. This function has one argument, the _fulfillment value_. If it is not a function, it is internally replaced with an _identity_ function (`(x) => x`) which simply passes the fulfillment value forward.
- `onRejected` {{optional_inline}}
  - : A {{jsxref("Function")}} asynchronously called if the `Promise` is rejected. This function has one argument, the _rejection reason_. If it is not a function, it is internally replaced with a _thrower_ function (`(x) => { throw x; }`) which throws the rejection reason it received.

### Return value

Returns a new {{jsxref("Promise")}} immediately. This new promise is always pending when returned, regardless of the current promise's status.

One of the `onFulfilled` and `onRejected` handlers will be executed to handle the current promise's fulfillment or rejection. The call always happens asynchronously, even when the current promise is already settled. The behavior of the returned promise (call it `p`) depends on the handler's execution result, following a specific set of rules. If the handler function:

- returns a value: `p` gets fulfilled with the returned value as its value.
- doesn't return anything: `p` gets fulfilled with `undefined`.
- throws an error: `p` gets rejected with the thrown error as its value.
- returns an already fulfilled promise: `p` gets fulfilled with that promise's value as its value.
- returns an already rejected promise: `p` gets rejected with that promise's value as its value.
- returns another pending promise: the fulfillment/rejection of the promise returned by `then` will be subsequent to the resolution/rejection of the promise returned by the handler. Also, the resolved value of the promise returned by `then` will be the same as the resolved value of the promise returned by the handler.

## Description

As the `then` and {{jsxref("Promise.prototype.catch()")}} methods return promises, they [can be chained](/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining) — an operation called _composition_.

## Examples

### Using the then() method

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success!");
  // or
  // reject(new Error("Error!"));
});

p1.then(
  (value) => {
    console.log(value); // Success!
  },
  (reason) => {
    console.error(reason); // Error!
  },
);
```

### Having a non-function as either parameter

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // 1
```

### Chaining

The `then` method returns a new `Promise`, which allows for method chaining.

If the function passed as handler to `then` returns a `Promise`, an equivalent `Promise` will be exposed to the subsequent `then` in the method chain. The below snippet simulates asynchronous code with the `setTimeout` function.

```js
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then((string) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        string += "bar";
        resolve(string);
      }, 1);
    })
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

The value returned from `then()` is resolved in the same way as {{jsxref("Promise.resolve()")}}. This means [thenable objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) are supported, and if the return value is not a promise, it's implicitly wrapped in a `Promise` and then resolved.

```js
const p2 = new Promise((resolve, reject) => {
  resolve(1);
});

p2.then((value) => {
  console.log(value); // 1
  return value + 1;
}).then((value) => {
  console.log(value, " - A synchronous value works"); // 2 - A synchronous value works
});

p2.then((value) => {
  console.log(value); // 1
});
```

A `then` call returns a promise that eventually rejects if the function throws an error or returns a rejected Promise.

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error("Oh no!");
  })
  .then(
    () => {
      console.log("Not called.");
    },
    (error) => {
      console.error(`onRejected function called: ${error.message}`);
    },
  );
```

In practice, it is often desirable to [`catch()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) rejected promises rather than `then()`'s two-case syntax, as demonstrated below.

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error("Oh no!");
  })
  .catch((error) => {
    console.error(`onRejected function called: ${error.message}`);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
```

In all other cases, the returned promise eventually fulfills. In the following example, the first `then()` returns `42` wrapped in a fulfilled Promise, even though the previous Promise in the chain was rejected.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a fulfilled Promise
  .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42
```

If `onFulfilled` returns a promise, the return value of `then` will be fulfilled/rejected based on the eventual state of that promise.

```js
function resolveLater(resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Error"));
  }, 1000);
}

const p1 = Promise.resolve("foo");
const p2 = p1.then(() => {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(
  (v) => {
    console.log("resolved", v); // "resolved", 10
  },
  (e) => {
    // not called
    console.error("rejected", e);
  },
);

const p3 = p1.then(() => {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(
  (v) => {
    // not called
    console.log("resolved", v);
  },
  (e) => {
    console.error("rejected", e); // "rejected", 'Error'
  }
);
```

You can use chaining to implement one function with a Promise-based API on top of another such function.

```js
function fetchCurrentData() {
  // The fetch() API returns a Promise. This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") !== "application/json") {
      throw new TypeError();
    }
    const j = response.json();
    // maybe do something with j

    // fulfillment value given to user of
    // fetchCurrentData().then()
    return j;
  });
}
```

### Asynchronicity of then()

The following is an example to demonstrate the asynchronicity of the `then` method.

```js
// Using a resolved promise 'resolvedProm' for example,
// the function call 'resolvedProm.then(...)' returns a new promise immediately,
// but its handler '(value) => {...}' will get called asynchronously as demonstrated by the console.logs.
// the new promise is assigned to 'thenProm',
// and thenProm will be resolved with the value returned by handler
const resolvedProm = Promise.resolve(33);
console.log(resolvedProm);

const thenProm = resolvedProm.then((value) => {
  console.log(`this gets called after the end of the main stack. the value received is: ${value}, the value returned is: ${value + 1}`);
  return value + 1;
});
console.log(thenProm);

// Using setTimeout, we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log(thenProm);
});

// Logs, in order:
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "this gets called after the end of the main stack. the value received is: 33, the value returned is: 34"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 34}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
