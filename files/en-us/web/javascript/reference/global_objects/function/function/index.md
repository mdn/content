---
title: Function() constructor
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
tags:
  - Constructor
  - Function
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Function.Function
---
{{JSRef}}

The **`Function()`** constructor creates a new [`Function`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) object. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues as {{jsxref("Global_Objects/eval", "eval()")}}. However, unlike `eval` (which may have access to the local scope), the `Function` constructor creates functions which execute in the global scope only.

{{EmbedInteractiveExample("pages/js/function-constructor.html", "shorter")}}

## Syntax

```js
new Function(functionBody)
new Function(arg0, functionBody)
new Function(arg0, arg1, functionBody)
new Function(arg0, arg1, /* … ,*/ argN, functionBody)

Function(functionBody)
Function(arg0, functionBody)
Function(arg0, arg1, functionBody)
Function(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **Note:** `Function()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `Function` instance.

### Parameters

- `argN` {{optional_inline}}

  - : Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript parameter (any of plain [identifier](/en-US/docs/Glossary/Identifier), [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameter, optionally with a [default](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)), or a list of such strings separated with commas.

    As the parameters are parsed in the same way as function expressions, whitespace and comments are accepted. For example: `"x", "theValue = 42", "[a, b] /* numbers */"` — or `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` is also correct, though very confusing to read.)

- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

## Description

`Function` objects created with the `Function` constructor are parsed when the function is created. This is less efficient than creating a function with a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function) or [function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function) and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function, except the last, are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed. The function will be dynamically compiled as a function expression, with the source assembled in the following fashion:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`
```

This is observable by calling the function's [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) method.

However, unlike normal [function expressions](/en-US/docs/Web/JavaScript/Reference/Operators/function), the name `anonymous` is not added to the `functionBody`'s scope, since `functionBody` only has access the global scope. If `functionBody` is not in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) (the body itself needs to have the `"use strict"` directive since it doesn't inherit the strictness from the context), you may use [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee) to refer to the function itself. Alternatively, you can define the recursive part as an inner function:

```js
const recursiveFn = new Function("count", `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`);
```

Note that the two dynamic parts of the assembled source — the parameters list `args.join(",")` and `functionBody` — will first be parsed separately to ensure they are each syntactically valid. This prevents injection-like attempts.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

## Examples

### Specifying arguments with the Function constructor

The following code creates a `Function` object that takes two arguments.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// 8
```

The arguments `a` and `b` are formal argument names that are used in the function body, `return a + b`.

### Creating a function object from a function declaration or function expression

```js
// The function constructor can take in multiple statements separated by a semi-colon. Function expressions require a return statement with the function's name

// Observe that new Function is called. This is so we can call the function we created directly afterwards
const sumOfArray = new Function('const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray')();

// call the function
sumOfArray([1, 2, 3, 4]);
// 10

// If you don't call new Function at the point of creation, you can use the Function.call() method to call it
const findLargestNumber = new Function('function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber');

// call the function
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Function declarations do not require a return statement
const sayHello = new Function('return function (name) { return `Hello, ${name}` }')();

// call the function
sayHello('world');
// Hello, world
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Functions", "Functions and function scope", "", 1)}}
- {{jsxref("Statements/function", "function")}} statement
- {{jsxref("Operators/function", "function")}} expression
- {{jsxref("Statements/function*", "function*")}} statement
- {{jsxref("Operators/function*", "function*")}} expression
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
