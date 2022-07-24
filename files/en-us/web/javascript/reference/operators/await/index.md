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

The `await` operator is used to wait for a {{jsxref("Promise")}}. It can only be used inside an {{jsxref("Statements/async_function", "async function")}} within regular JavaScript code; however it can be used on its own with [JavaScript modules.](/en-US/docs/Web/JavaScript/Guide/Modules)

## Syntax

```js
[rv] = await expression
```

- `expression`
  - : A {{jsxref("Promise")}} or any value to wait for.
- `rv`
  - : Returns the fulfilled value of the promise, or the value itself if it's not a
    `Promise`.

## Description

The `await` expression causes `async` function execution to pause
until a `Promise` is settled (that is, fulfilled or rejected), and to resume
execution of the `async` function after fulfillment. When resumed, the value
of the `await` expression is that of the fulfilled `Promise`.

If the `Promise` is rejected, the `await` expression throws the
rejected value.

If the value of the _expression_ following the `await` operator is
not a `Promise`, it's converted to a
[resolved Promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve).

An `await` splits execution flow, allowing the caller of the async function
to resume execution. After the `await` defers the continuation of the async
function, execution of subsequent statements ensues. If this `await` is the
last expression executed by its function, execution continues by returning to the
function's caller a pending `Promise` for completion of the
`await`'s function and resuming execution of that caller.

## Examples

### Awaiting a promise to be fulfilled

If a `Promise` is passed to an `await` expression, it waits for
the `Promise` to be fulfilled and returns the fulfilled value.

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

{{jsxref("Global_Objects/Promise/then", "Thenable objects")}} will be fulfilled just
the same.

```js
async function f2() {
  const thenable = {
    then(resolve, _reject) {
      resolve('resolved!')
    }
  };
  console.log(await thenable); // resolved!
}

f2();
```

### Conversion to promise

If the value is not a `Promise`, it converts the value to a resolved
`Promise`, and waits for it.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20
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

Handle rejected `Promise` without try block.

```js
const response = await promisedFunction()
  .catch((err) => { console.error(err); });
// response will be undefined if the promise is rejected
```

### Top level await

You can use the `await` keyword on its own (outside of an async function) within a [JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules). This means modules, with child modules that use `await`, wait for the child module to execute before they themselves run. All while not blocking other child modules from loading.

Here is an example of a simple module using the [Fetch API](/en-US/docs/Web/API/Fetch_API) and specifying await within the [`export statement`](/en-US/docs/Web/JavaScript/Reference/Statements/export). Any modules that include this will wait for the fetch to resolve before running any code.

```js
// fetch request
const colors = fetch('../data/colors.json')
  .then((response) => response.json());

export default await colors;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
- [Top level await](https://v8.dev/features/top-level-await) on v8.dev
