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

The **`Promise`** constructor is primarily used to wrap functions that do not
already support promises.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntax

```js
new Promise(executor)
```

### Parameters

- `executor`

  - : A {{jsxref("function")}} to be executed by the constructor, during
    the process of constructing the new `Promise` object. The `executor` is
    custom code that ties an outcome to a promise. You, the programmer, write
    the `executor`. The signature of this function is expected to be:
    ```js
        function(resolutionFunc, rejectionFunc){
            // typically, some asynchronous operation.
        }
        ```

    At the time when the constructor generates the new `Promise` object, it also
    generates a corresponding pair of functions for `resolutionFunc` and
    `rejectionFunc`; these are "tethered" to the `Promise` object. Therefore,
    the code within the `executor` has the opportunity to perform some operation
    and then reflect the operation's outcome (If the value is not another
    Promise object) as either "fulfilled" or "rejected" by terminating with an
    invocation of either the `resolutionFunc` or the `rejectionFunc`,
    respectively.

    The `executor` has no meaningful return value. It communicates via the
    side-effect caused by `resolutionFunc` or `rejectionFunc`. The side-effect
    is that the `Promise` object becomes "resolved."

    Typically, it works like this: The operation within `executor` is
    asynchronous and provides a callback. The callback is defined within the
    `executor` code. The callback terminates by invoking `resolutionFunc`. The
    invocation of `resolutionFunc` includes a `value` parameter. The `value` is
    passed back to the tethered `Promise` object. The `Promise` object
    (asynchronously) invokes any `.then()` associated with it. The `value`
    received by `.then()` is passed to the invocation of `handleFulfilled` as an
    input parameter (See "Chained Promises" section).

    The `executor` might also include a `try{} catch()` block that invokes
    `rejectionFunc` upon error.

    The signatures of these two functions are simple, they accept a single
    parameter of any type. Of course, the actual names of these functions can be
    whatever is desired, i.e. they are named as the parameters of `executor`.
    Each function is used by calling it when appropriate.
    <!-- prettier-ignore -->
    ```js
        resolutionFunc(value) // call on fulfilled
        rejectionFunc(reason) // call on rejected
        ```

    The returned `value` can be another promise object, in which case the
    promise gets dynamically inserted into the chain.

### Return value

When called via `new`, the `Promise` constructor returns a promise object. The
promise object will become "resolved" when either of the functions
`resolutionFunc` or `rejectionFunc` are invoked. Note that if you call
`resolutionFunc` or `rejectionFunc` and pass another Promise object as an
argument, you can say that it is "resolved", but still cannot be said to be
"settled".

## Examples

### Creating a new Promise

A `Promise` object is created using the `new` keyword and its constructor. This
constructor takes a function, called the "executor function", as its parameter.
This function should take two functions as parameters. The first of these
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

- A polyfill of `Promise` is available in
  [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Using Promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
