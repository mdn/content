---
title: AsyncFunction() constructor
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction
page-type: javascript-constructor
browser-compat: javascript.builtins.AsyncFunction.AsyncFunction
---

{{JSRef}}

The **`AsyncFunction()`** constructor creates {{jsxref("AsyncFunction")}} objects.

Note that `AsyncFunction` is _not_ a global object. It can be obtained with the following code:

```js
const AsyncFunction = async function () {}.constructor;
```

The `AsyncFunction()` constructor is not intended to be used directly, and all caveats mentioned in the {{jsxref("Function/Function", "Function()")}} description apply to `AsyncFunction()`.

## Syntax

```js-nolint
new AsyncFunction(functionBody)
new AsyncFunction(arg1, functionBody)
new AsyncFunction(arg1, arg2, functionBody)
new AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg1, functionBody)
AsyncFunction(arg1, arg2, functionBody)
AsyncFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> **Note:** `AsyncFunction()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `AsyncFunction` instance.

### Parameters

See {{jsxref("Function/Function", "Function()")}}.

## Examples

### Creating an async function from an AsyncFunction() constructor

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const AsyncFunction = async function () {}.constructor;

const fn = new AsyncFunction(
  "a",
  "b",
  "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);",
);

fn(10, 20).then((v) => {
  console.log(v); // prints 30 after 4 seconds
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`async function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
- [`Function()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
