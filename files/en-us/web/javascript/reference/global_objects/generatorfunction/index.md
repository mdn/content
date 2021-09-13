---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
tags:
  - Constructor
  - ECMAScript 2015
  - GeneratorFunction
  - Iterator
  - JavaScript
  - Reference
browser-compat: javascript.builtins.GeneratorFunction
---
{{JSRef}}

The **`GeneratorFunction` constructor** creates a new
{{jsxref("Statements/function*", "generator function", "", 1)}} object. In JavaScript,
every generator function is actually a `GeneratorFunction` object.

Note that `GeneratorFunction` is not a global object. It could be obtained
by evaluating the following code.

```js
Object.getPrototypeOf(function*(){}).constructor
```

## Syntax

```js
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, ... , argN, functionBody)
```

### Parameters

- `arg1, arg2, ... argN`

  - : Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript parameter (any of plain [identifier](/en-US/docs/Glossary/Identifier), [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameter, optionally with a default), or a list of such strings separated with commas.

    As the parameters are parsed in the same way as function declarations, whitespace and comments are accepted. For example: `"x", "theValue = 42", "[a, b] /* numbers */"` — or `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` is also correct, though very confusing to read.)

- `functionBody`
  - : A string containing the JavaScript statements comprising the function definition.

## Description

{{jsxref("Statements/function*", "generator function")}} objects created with the
`GeneratorFunction` constructor are parsed when the function is created. This
is less efficient than declaring a generator function with a
{{jsxref("Statements/function*", "function* expression")}} and calling it within your
code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the
parameters in the function to be created, in the order in which they are passed.

> **Note:** {{jsxref("Statements/function*", "generator function")}}
> created with the `GeneratorFunction` constructor do not create closures to
> their creation contexts; they are always created in the global scope.
>
> When running them, they will only be able to access their own local variables and
> global ones, not the ones from the scope in which the `GeneratorFunction`
> constructor was called.
>
> This is different from using {{jsxref("Global_Objects/eval", "eval")}} with code for
> a generator function expression.

Invoking the `GeneratorFunction` constructor as a function (without using
the `new` operator) has the same effect as invoking it as a constructor.

## Examples

### Creating a generator function from a GeneratorFunction() constructor

```js
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction('a', 'yield a * 2');
var iterator = g(10);
console.log(iterator.next().value); // 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function* function", "", 1)}}
- {{jsxref("Operators/function*", "function* expression", "", 1)}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement", "", 1)}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
