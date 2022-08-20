---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
tags:
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.AsyncFunction
---
{{JSRef}}

The **`AsyncFunction` constructor** creates a new
{{jsxref("Statements/async_function", "async function", "", 1)}} object. In JavaScript,
every asynchronous function is actually an `AsyncFunction` object.

Note that `AsyncFunction` is _not_ a global object. It can be
obtained with the following code:

```js
const AsyncFunction = (async function () {}).constructor;
```

## Syntax

```js
new AsyncFunction(functionBody)
new AsyncFunction(arg0, functionBody)
new AsyncFunction(arg0, arg1, functionBody)
new AsyncFunction(arg0, arg1, /* … ,*/ argN, functionBody)

AsyncFunction(functionBody)
AsyncFunction(arg0, functionBody)
AsyncFunction(arg0, arg1, functionBody)
AsyncFunction(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **Note:** `AsyncFunction()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `AsyncFunction` instance.

### Parameters

- `argN` {{optional_inline}}

  - : Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript parameter (any of plain [identifier](/en-US/docs/Glossary/Identifier), [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameter, optionally with a default), or a list of such strings separated with commas.

    As the parameters are parsed in the same way as function declarations, whitespace and comments are accepted. For example: `"x", "theValue = 42", "[a, b] /* numbers */"` — or `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` is also correct, though very confusing to read.)

- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

## Description

{{jsxref("Statements/async_function", "async function")}} objects created with the
`AsyncFunction` constructor are parsed when the function is created. This is
less efficient than declaring an async function with an
{{jsxref("Statements/async_function", "async function expression")}} and calling it
within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function, except the last, are treated as the names of the identifiers of the
parameters in the function to be created, in the order in which they are passed.

> **Note:** {{jsxref("Statements/async_function", "async functions", "",
    1)}} created with the `AsyncFunction` constructor do not create closures to
> their creation contexts; they are always created in the global scope.
>
> When running them, they will only be able to access their own local variables and
> global ones, not the ones from the scope in which the `AsyncFunction`
> constructor was called.
>
> This is different from using {{jsxref("Global_Objects/eval", "eval")}} with code for
> an async function expression.

Invoking the `AsyncFunction` constructor as a function (without using the
`new` operator) has the same effect as invoking it as a constructor.

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

const AsyncFunction = (async function () {}).constructor;

const fn = new AsyncFunction(
  'a',
  'b',
  'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);',
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

- {{jsxref("Statements/async_function", "async function function", "", 1)}}
- {{jsxref("Operators/async_function", "async function expression", "", 1)}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement", "", 1)}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
