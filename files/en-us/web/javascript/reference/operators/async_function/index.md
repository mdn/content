---
title: async function expression
slug: Web/JavaScript/Reference/Operators/async_function
page-type: javascript-operator
browser-compat: javascript.operators.async_function
---

{{jsSidebar("Operators")}}

The **`async function`** keywords can be used to define an async function inside an expression.

You can also define async functions using the [`async function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or the [arrow syntax](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Syntax

```js-nolint
async function (param0) {
  statements
}
async function (param0, param1) {
  statements
}
async function (param0, param1, /* …, */ paramN) {
  statements
}

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> **Note:** An [expression statement](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement) cannot begin with the keywords `async function` to avoid ambiguity with an [`async function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function). The `async function` keywords only begin an expression when they appear in a context that cannot accept statements.

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of a formal parameter for the function. For the parameters' syntax, see the [Functions reference](/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

An `async function` expression is very similar to, and has almost the same syntax as, an [`async function` declaration](/en-US/docs/Web/JavaScript/Reference/Statements/async_function). The main difference between an `async function` expression and an `async function` declaration is the _function name_, which can be omitted in `async function` expressions to create _anonymous_ functions. An `async function` expression can be used as an [IIFE](/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression) which runs as soon as it is defined, allowing you to mimic [top-level await](/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await). See also the chapter about [functions](/en-US/docs/Web/JavaScript/Reference/Functions) for more information.

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
