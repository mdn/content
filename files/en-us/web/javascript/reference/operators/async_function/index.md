---
title: async function expression
slug: Web/JavaScript/Reference/Operators/async_function
page-type: javascript-operator
tags:
  - Function
  - JavaScript
  - Language feature
  - Operator
  - Primary Expression
browser-compat: javascript.operators.async_function
---

{{jsSidebar("Operators")}}

The **`async function`** keywords can be used to define an async function inside an expression.

You can also define async functions using an [async function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

## Syntax

```js-nolint
async function (param0) {
  statements
}
async function (param0, param1) {
  statements
}
async function (param0, param1, /* … ,*/ paramN) {
  statements
}

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

Async functions can also be defined with the [arrow syntax](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is _anonymous_.
    The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of an argument to be passed to the function.
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

An `async function` expression is very similar to, and has almost the same syntax as, an {{jsxref('Statements/async_function', 'async function statement')}}. The main difference between an async `function` expression and an async `function` statement is the _function name_, which can be omitted in `async function` expressions to create _anonymous_ functions. An `async function` expression can be used as an [IIFE](/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about [functions](/en-US/docs/Web/JavaScript/Reference/Functions) for more information.

## Examples

### Simple example

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// async function expression assigned to a variable
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

// async function expression used as an IIFE
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
