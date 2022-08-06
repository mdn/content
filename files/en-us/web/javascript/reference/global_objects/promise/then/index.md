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

The **`then()`** method returns a {{jsxref("Promise")}}. It
takes up to two arguments: callback functions for the success and failure cases of the
`Promise`.

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

> **Note:** If one or both arguments are omitted or are provided non-functions, then
> `then` will be missing the handler(s), but will not generate any errors. If
> the `Promise` that `then` is called on adopts a state
> (`fulfillment` or `rejection`) for which `then` has
> no handler, the returned promise adopts the final state of the original
> `Promise` on which `then` was called.

## Syntax

```js
then(onFulfilled)
then(onFulfilled, onRejected)

then(
  (value) => { /* fulfillment handler */ },
  (reason) => { /* rejection handler */ },
);
```

### Parameters

- `onFulfilled` {{optional_inline}}
  - : A {{jsxref("Function")}} called if the `Promise` is fulfilled. This function has one argument, the `fulfillment value`. If it is not a function, it is internally replaced with an _identity_ function (`(x) => x`) which simply passes the fulfillment value forward.
- `onRejected` {{optional_inline}}
  - : A {{jsxref("Function")}} called if the `Promise` is rejected. This function has one argument, the `rejection reason`. If it is not a function, it is internally replaced with a _thrower_ function (`(x) => { throw x; }`) which throws the rejection reason it received.

### Return value

Once a {{jsxref("Promise")}} is fulfilled or rejected, the respective handler function
(`onFulfilled` or `onRejected`) will be called
**asynchronously** (scheduled in the current thread loop). The behavior of
the handler function follows a specific set of rules. If a handler function:

- returns a value, the promise returned by `then` gets resolved with the
  returned value as its value.
- doesn't return anything, the promise returned by `then` gets resolved
  with an `undefined` value.
- throws an error, the promise returned by `then` gets rejected with the
  thrown error as its value.
- returns an already fulfilled promise, the promise returned by `then` gets
  fulfilled with that promise's value as its value.
- returns an already rejected promise, the promise returned by `then` gets
  rejected with that promise's value as its value.
- returns another **pending** promise object, the resolution/rejection of
  the promise returned by `then` will be subsequent to the
  resolution/rejection of the promise returned by the handler. Also, the resolved value
  of the promise returned by `then` will be the same as the resolved value of
  the promise returned by the handler.

Following, an example to demonstrate the asynchronicity of the `then`
method.

```js
// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

const thenProm = resolvedProm.then((value) => {
  console.log(
    "this gets called after the end of the main stack. the value received and returned is: ",
    value,
  );
  return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log(thenProm);
});

// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
```

## Description

As the `then` and {{jsxref("Promise.prototype.catch()")}} methods return promises,
they [can be chained](/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
— an operation called _composition_.

## Examples

### Using the `then` method

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
Promise.resolve(1).then(2).then(console.log); // prints 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // prints 1
```

### Chaining

The `then` method returns a `Promise` which allows for method
chaining.

If the function passed as handler to `then` returns a `Promise`,
an equivalent `Promise` will be exposed to the subsequent `then`
in the method chain. The below snippet simulates asynchronous code with the
`setTimeout` function.

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

// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

When a value is returned from within a `then` handler, it will effectively
return
`Promise.resolve(<value returned by whichever handler was called>)`.

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

A `then` call will return a rejected promise if the function throws an error
or returns a rejected Promise.

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

In all other cases, a resolving Promise is returned. In the following example, the
first `then()` will return `42` wrapped in a resolving Promise
even though the previous Promise in the chain was rejected.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a resolving Promise
  .then((solution) => console.log(`Resolved with ${solution}`)); // Resolved with 42
```

In practice, it is often desirable to catch rejected promises rather than use
`then`'s two case syntax, as demonstrated below.

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

You can also use chaining to implement one function with a Promise-based API on top of
another such function.

```js
function fetchCurrentData() {
  // The fetch() API returns a Promise.  This function
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
    // fetch_current_data().then()
    return j; 
  });
}
```

If `onFulfilled` returns a promise, the return value of `then`
will be resolved/rejected by the promise.

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

### window.setImmediate style promise-based polyfill

Using a {{jsxref("Function.prototype.bind()")}} `Reflect.apply`
({{jsxref("Reflect.apply()")}}) method to create a (non-cancellable)
{{domxref("window.setImmediate")}}-style function.

```js
const nextTick = (() => {
  const noop = () => {}; // literally
  const nextTickPromise = () => Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) => (
    fn !== undefined
      ? Promise.resolve(args).then(rfab(null, fn, null))
      : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
