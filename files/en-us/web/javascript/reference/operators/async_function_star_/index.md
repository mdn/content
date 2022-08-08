---
title: async function* expression
slug: Web/JavaScript/Reference/Operators/async_function*
tags:
  - Function
  - Iterator
  - JavaScript
  - Language feature
  - Operator
  - Primary Expression
browser-compat: javascript.operators.async_generator_function
---
{{jsSidebar("Operators")}}

The **`async function*`** keywords can be used to define an asynchronous generator function inside an expression.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Syntax

```js
async function* (param0) {
  statements
}
async function* (param0, param1) {
  statements
}
async function* (param0, param1, /* … ,*/ paramN) {
  statements
}

async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of an argument to be passed to the function. A function can have up to 255 arguments.
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

An `async function*` expression is very similar to and has almost the same syntax as a {{jsxref('Statements/async_function*', 'async function* statement', "", 1)}}. The main difference between an `async function*` expression and an `async function*` statement is the _function name_, which can be omitted in `async function*` expressions to create _anonymous_ asynchronous generator functions. See also the chapter about {{jsxref("Functions", "functions")}} for more information.

## Examples

### Using async function*

The following example defines an unnamed asynchronous generator function and assigns it to `x`. The function yields the square of its argument:

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6).next().then((res) => console.log(res.value)); // logs 36
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function*", "async function*")}} statement
- {{jsxref("AsyncGeneratorFunction")}} object
- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("GeneratorFunction")}} object
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Functions", "Functions", "", 1)}}
