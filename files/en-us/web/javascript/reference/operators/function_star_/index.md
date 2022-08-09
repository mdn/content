---
title: function* expression
slug: Web/JavaScript/Reference/Operators/function*
tags:
  - ECMAScript 2015
  - Function
  - Iterator
  - JavaScript
  - Language feature
  - Operator
  - Primary Expression
browser-compat: javascript.operators.generator_function
---
{{jsSidebar("Operators")}}

The **`function*`** keyword can be used to define a generator
function inside an expression.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html", "taller")}}

## Syntax

```js
function* (param0) {
  statements
}
function* (param0, param1) {
  statements
}
function* (param0, param1, /* … ,*/ paramN) {
  statements
}

function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is
    _anonymous_. The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of an argument to be passed to the function. A function can have up to 255
    arguments.
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

A `function*` expression is very similar to and has almost the same syntax
as a {{jsxref('Statements/function*', 'function* statement', "", 1)}}. The main
difference between a `function*` expression and a `function*`
statement is the _function name_, which can be omitted in `function*`
expressions to create *anonymous* generator functions. See also the chapter
about {{jsxref("Functions", "functions")}} for more information.

## Examples

### Using function\*

The following example defines an unnamed generator function and assigns it to
`x`. The function yields the square of its argument:

```js
const x = function* (y) {
  yield y * y;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*")}} statement
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function")}} statement
- {{jsxref("Operators/function", "function")}} expression
