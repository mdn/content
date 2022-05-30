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

The **`Function` constructor** creates
a new `Function` **object**. Calling the constructor directly
can create functions dynamically, but suffers from security and similar (but far less
significant) performance issues to {{jsxref("Global_Objects/eval")}}. However, unlike eval, the
`Function` constructor creates functions which execute in the global scope
only.

{{EmbedInteractiveExample("pages/js/function-constructor.html","shorter")}}

## Syntax

```js
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, ... argN, functionBody)
```

### Parameters

- `arg1, ... argN`

  - : Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript parameter (any of plain [identifier](/en-US/docs/Glossary/Identifier), [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameter, optionally with a default), or a list of such strings separated with commas.

    As the parameters are parsed in the same way as function declarations, whitespace and comments are accepted. For example: `"x", "theValue = 42", "[a, b] /* numbers */"` — or `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` is also correct, though very confusing to read.)

- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

## Description

`Function` objects created with the `Function` constructor are
parsed when the function is created. This is less efficient than declaring a function
with a {{jsxref("Operators/function", "function expression", "", 1)}} or
{{jsxref("Statements/function", "function statement", "", 1)}} and calling it within
your code because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the
parameters in the function to be created, in the order in which they are passed.
Omitting an argument will result in the value of that parameter being
`undefined`.

Invoking the `Function` constructor as a function (without using the
`new` operator) has the same effect as invoking it as a constructor.

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

The arguments "`a`" and "`b`" are formal argument names that are
used in the function body, "`return a + b`".

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
