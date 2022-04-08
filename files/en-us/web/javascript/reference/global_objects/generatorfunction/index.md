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

In JavaScript, every generator function is actually a `GeneratorFunction` object. There is no global object with the name `GeneratorFunction`, but you can create a `GeneratorFunction()` constructor using the following code:

```js
const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
```

## Description

{{jsxref("Statements/function*", "Generator function", "", "1")}} objects created with a
constructor are parsed when the function is created. That
is less efficient than declaring a generator function with a
{{jsxref("Statements/function*", "function* expression")}} and calling it within your
code, because such functions are parsed with the rest of the code.

All arguments passed to the function are treated as the names of the identifiers of the
parameters in the function to be created, in the order in which they are passed.

> **Note:** {{jsxref("Statements/function*", "generator functions", "", "1")}}
> created with a constructor do not create closures to
> their creation contexts; they are always created in the global scope.
>
> When running them, they will only be able to access their own local variables and
> global ones, not the ones from the scope in which the `GeneratorFunction`
> constructor was called.
>
> This is different from using {{jsxref("Global_Objects/eval", "eval")}} with code for
> a generator function expression.

Invoking a generator function constructor as a function (without using
the `new` operator) has the same effect as invoking it as a constructor.

## Examples

### Creating and using a GeneratorFunction() constructor

```js
const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
const g = new GeneratorFunction('a', 'yield a * 2');
const iterator = g(10);
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
