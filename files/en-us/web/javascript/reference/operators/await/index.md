---
title: await
slug: Web/JavaScript/Reference/Operators/await
tags:
  - Function
  - JavaScript
  - Language feature
  - Operator
  - Primary Expression
browser-compat: javascript.operators.await
---

{{jsSidebar("Operators")}}

The `await` operator is used to wait for a {{jsxref("Promise")}} and get its fulfillment value. It can only be used inside an [async function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or a [JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules).

## Syntax

```js-nolint
await expression
```

### Parameters

- `expression`
  - : A {{jsxref("Promise")}}, a [thenable object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), or any value to wait for.

### Return value

The fulfillment value of the promise or thenable object, or the expression itself's value if it's not thenable.

### Exceptions

Throws the rejection reason if the promise or thenable object is rejected.

## Description

The `await` expression causes async function execution to pause until a promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the `await` expression is that of the fulfilled promise.

The `expression` is resolved in the same way as {{jsxref("Promise.resolve()")}}, which means [thenable objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) are supported, and if `expression` is not a promise, it's implicitly wrapped in a `Promise` and then resolved.

If the promise is rejected, the `await` expression throws the rejected value. The function containing the `await` expression will [appear in the stack trace](#improving_stack_trace) of the error. Otherwise, if the rejected promise is not awaited or is immediately returned, the caller function will not appear in the stack trace.

An `await` splits execution flow, allowing the caller of the async function to resume execution. After the `await` defers the continuation of the async function, execution of subsequent statements ensues. If this `await` is the last expression executed by its function, execution continues by returning to the function's caller a pending `Promise` for completion of the `await`'s function and resuming execution of that caller.

Because `await` is only valid inside async functions and modules, which themselves are asynchronous and return promises, the `await` expression never blocks the main thread and only defers execution of code that actually depends on the result, i.e. anything after the `await` expression.

## Examples

### Awaiting a promise to be fulfilled

If a `Promise` is passed to an `await` expression, it waits for the `Promise` to be fulfilled and returns the fulfilled value.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

### Thenable objects

[Thenable objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) are resolved just the same as actual `Promise` objects.

```js
async function f() {
  const thenable = {
    then(resolve, _reject) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // "resolved!"
}

f();
```

They can also be rejected:

```js
async function f() {
  const thenable = {
    then(resolve, reject) {
      reject(new Error("rejected!"));
    },
  };
  await thenable; // Throws Error: rejected!
}

f();
```

### Conversion to promise

If the value is not a `Promise`, it converts the value to a resolved `Promise`, and waits for it. The awaited value's identity doesn't change as long as it doesn't have a `then` property that's callable.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log(await obj === obj); // true
}

f3();
```

### Promise rejection

If the `Promise` is rejected, the rejected value is thrown.

```js
async function f4() {
  try {
    const z = await Promise.reject(30);
  } catch (e) {
    console.error(e); // 30
  }
}

f4();
```

### Handling rejected promises

You can handle rejected promises without a `try` block by chaining a [`catch()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) handler before awaiting the promise.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
});
// response will be undefined if the promise is rejected
```

### Top level await

You can use the `await` keyword on its own (outside of an async function) within a [JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules). This means modules, with child modules that use `await`, wait for the child module to execute before they themselves run, all while not blocking other child modules from loading.

Here is an example of a simple module using the [Fetch API](/en-US/docs/Web/API/Fetch_API) and specifying await within the [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export) statement. Any modules that include this will wait for the fetch to resolve before running any code.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Control flow effects of await

When an `await` is encountered in code (either in an async function or in a module), the awaited expression is executed, while all code that depends on the expression's value is paused and pushed into the [microtask queue](/en-US/docs/Web/JavaScript/EventLoop). The main thread is then freed for the next task in the event loop. This happens even if the awaited value is an already-resolved promise or not a promise. For example, consider the following code:

```js
async function foo(name) {
  console.log(name, "start");
  console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// First end
// Second start
// Second middle
// Second end
```

In this case, the two async functions are synchronous in effect, because they don't contain any `await` expression. The three statements happen in the same tick. In promise terms, the function corresponds to:

```js
function foo(name) {
  return Promise.resolve().then(() => {
    console.log(name, "start");
    console.log(name, "middle");
    console.log(name, "end");
  });
}
```

However, as soon as there's one `await`, the function becomes asynchronous, and execution of following statements is deferred to the next tick.

```js
async function foo(name) {
  console.log(name, "start");
  await console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// Second start
// Second middle
// First end
// Second end
```

This corresponds to:

```js
function foo(name) {
  return Promise.resolve()
    .then(() => {
      console.log(name, "start");
      console.log(name, "middle");
    })
    .then(() => {
      console.log(name, "end");
    });
}
```

While the extra `then()` handler is not necessary and can be merged with the previous one, its existence means the code will take one extra tick to complete. The same happens for `await`. Therefore, make sure to use `await` only when necessary (to unwrap promises into their values).

### Improving stack trace

Sometimes, the `await` is omitted when a promise is directly returned from an async function.

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

However, consider the case where `someAsyncTask` asynchronously throws an error.

```js
async function lastAsyncTask() {
  await setTimeout(() => {}, 100);
  throw new Error("failed");
}

async function noAwait() {
  return lastAsyncTask();
}

noAwait();

// Error: failed
//    at lastAsyncTask
```

Only `lastAsyncTask` appears in the stack trace, because the promise is rejected after it has already been returned from `noAwait` — in some sense, the promise is unrelated to `noAwait`. To improve the stack trace, you can use `await` to unwrap the promise, so that the exception gets thrown into the current function. The exception will then be immediately wrapped into a new rejected promise, but during error creation, the caller will appear in the stack trace.

```js
async function lastAsyncTask() {
  await setTimeout(() => {}, 100);
  throw new Error("failed");
}

async function withAwait() {
  return await lastAsyncTask();
}

withAwait();

// Error: failed
//    at lastAsyncTask
//    at async withAwait
```

However, there's a little performance penalty coming with `return await` because the promise has to be unwrapped and wrapped again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}} object
- [Top level await](https://v8.dev/features/top-level-await) on v8.dev
