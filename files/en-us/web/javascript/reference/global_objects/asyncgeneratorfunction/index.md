---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
tags:
- Constructor
- ECMAScript 2018
- AsyncGeneratorFunction
- Iterator
- JavaScript
- Reference
browser-compat: javascript.builtins.AsyncGeneratorFunction
---
{{JSRef}}

The **`AsyncGeneratorFunction` constructor** creates a new {{jsxref("Statements/async_function*", "async generator function", "", 1)}} object. In JavaScript, every async generator function is actually an `AsyncGeneratorFunction` object.

Note that `AsyncGeneratorFunction` is not a global object. It could be obtained by evaluating the following code.

```js
const AsyncGeneratorFunction = Object.getPrototypeOf(async function*() {}).constructor;
```

## Syntax

```js
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg1, functionBody)
new AsyncGeneratorFunction(arg1, arg2, functionBody)
```

### Parameters

- `arg1`, `arg2`, ... `argN`
  - : Names to be used by the function as formal argument names. Each argument parameter must be a {{jsxref("String")}} that is a valid JavaScript identifier or a comma-separated list of such strings. For example: `"x"`, `"theValue"`, or `"a, b"`.
- `functionBody`
  - : A {{jsxref("String")}} containing the JavaScript statements comprising the function definition.

## Description

Async generator function objects created with the `AsyncGeneratorFunction` constructor are parsed when the function is created. This is less efficient than declaring a generator function with an {{jsxref("Operators/async_function*", "async function* expression")}} and calling it within your code, because such functions are parsed with the rest of the code.

All arguments passed to the function, except the last, are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.

> **Note:** Async generator functions created with the `AsyncGeneratorFunction` constructor do not create closures to their creation contexts; they are always created in the global scope.
> 
> When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the `AsyncGeneratorFunction` constructor was called.
>
> This is different from using {{jsxref("Global_Objects/eval", "eval")}} with code for an async generator function expression.
Invoking the `AsyncGeneratorFunction` constructor as a function (without using the `new` operator) has the same effect as invoking it as a constructor.

## Examples

### Using the constructor

The following example uses the `AsyncGeneratorFunction` constructor to create an async generator function.

```js
const AsyncGeneratorFunction = Object.getPrototypeOf(async function*() {}).constructor;
const createAsyncGenerator = new AsyncGeneratorFunction('a', 'yield a * 2');
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then(res => console.log(res.value)); // 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/function*", '<code>function*</code> expression', "", 1)}}
- {{jsxref("Global_Objects/AsyncGenerator", "AsyncGenerator")}}
- {{jsxref("Global_Objects/Generator", "Generator")}}
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}}
- {{jsxref("Global_Objects/AsyncFunction", "AsyncFunction")}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Functions", "Functions", "", 1)}}
