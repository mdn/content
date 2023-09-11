---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
page-type: javascript-instance-method
browser-compat: javascript.builtins.Promise.then
---

{{JSRef}}

The **`then()`** method of {{jsxref("Promise")}} instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the `Promise`. It immediately returns an equivalent {{jsxref("Promise")}} object, allowing you to [chain](/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining) calls to other promise methods.

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

## Syntax

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)
```

### Parameters

- `onFulfilled`

  - : A function to asynchronously execute when this promise becomes fulfilled. Its return value becomes the fulfillment value of the promise returned by `then()`. The function is called with the following arguments:

    - `value`
      - : The value that the promise was fulfilled with.

    If it is not a function, it is internally replaced with an _identity_ function (`(x) => x`) which simply passes the fulfillment value forward.

- `onRejected` {{optional_inline}}

  - : A function to asynchronously execute when this promise becomes rejected. Its return value becomes the fulfillment value of the promise returned by `then()`. The function is called with the following arguments:

    - `reason`
      - : The value that the promise was rejected with.

    If it is not a function, it is internally replaced with a _thrower_ function (`(x) => { throw x; }`) which throws the rejection reason it received.

### Return value

Returns a new {{jsxref("Promise")}} immediately. This new promise is always pending when returned, regardless of the current promise's status.

One of the `onFulfilled` and `onRejected` handlers will be executed to handle the current promise's fulfillment or rejection. The call always happens asynchronously, even when the current promise is already settled. The behavior of the returned promise (call it `p`) depends on the handler's execution result, following a specific set of rules. If the handler function:

- returns a value: `p` gets fulfilled with the returned value as its value.
- doesn't return anything: `p` gets fulfilled with `undefined` as its value.
- throws an error: `p` gets rejected with the thrown error as its value.
- returns an already fulfilled promise: `p` gets fulfilled with that promise's value as its value.
- returns an already rejected promise: `p` gets rejected with that promise's value as its value.
- returns another pending promise: `p` is pending and becomes fulfilled/rejected with that promise's value as its value immediately after that promise becomes fulfilled/rejected.

## Description

The `then()` method schedules callback functions for the eventual completion of a Promise — either fulfillment or rejection. It is the primitive method of promises: the [thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) protocol expects all promise-like objects to expose a `then()` method, and the {{jsxref("Promise/catch", "catch()")}} and {{jsxref("Promise/finally", "finally()")}} methods both work by invoking the object's `then()` method.

For more information about the `onRejected` handler, see the {{jsxref("Promise/catch", "catch()")}} reference.

`then()` returns a new promise object. If you call the `then()` method twice on the same promise object (instead of chaining), then this promise object will have two pairs of settlement handlers. All handlers attached to the same promise object are always called in the order they were added. Moreover, the two promises returned by each call of `then()` start separate chains and do not wait for each other's settlement.

[Thenable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) objects that arise along the `then()` chain are always [resolved](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#resolver_function) — the `onFulfilled` handler never receives a thenable object, and any thenable returned by either handler are always resolved before being passed to the next handler. This is because when constructing the new promise, the `resolve` and `reject` functions passed by the `executor` are saved, and when the current promise settles, the respective function will be called with the fulfillment value or rejection reason. The resolving logic comes from the resolver function passed by the {{jsxref("Promise/Promise", "Promise()")}} constructor.

`then()` supports subclassing, which means it can be called on instances of subclasses of `Promise`, and the result will be a promise of the subclass type. You can customize the type of the return value through the [`@@species`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/@@species) property.

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
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      }),
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
  console.log(value, "- A synchronous value works"); // 2 - A synchronous value works
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
  },
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
  console.log(
    `this gets called after the end of the main stack. the value received is: ${value}, the value returned is: ${
      value + 1
    }`,
  );
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
