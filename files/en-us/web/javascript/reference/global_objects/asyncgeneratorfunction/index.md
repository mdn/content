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
const AsyncGeneratorFunction = (async function* () {}).constructor;
```

## Syntax

```js
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg0, functionBody)
new AsyncGeneratorFunction(arg0, arg1, functionBody)
new AsyncGeneratorFunction(arg0, arg1, /* … ,*/ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg0, functionBody)
AsyncGeneratorFunction(arg0, arg1, functionBody)
AsyncGeneratorFunction(arg0, arg1, /* … ,*/ argN, functionBody)
```

> **Note:** `AsyncGeneratorFunction()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `AsyncGeneratorFunction` instance.

### Parameters

- `argN` {{optional_inline}}

  - : Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript parameter (any of plain [identifier](/en-US/docs/Glossary/Identifier), [rest parameter](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameter, optionally with a default), or a list of such strings separated with commas.

    As the parameters are parsed in the same way as function declarations, whitespace and comments are accepted. For example: `"x", "theValue = 42", "[a, b] /* numbers */"` — or `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` is also correct, though very confusing to read.)

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
const AsyncGeneratorFunction = (async function* () {}).constructor;
const createAsyncGenerator = new AsyncGeneratorFunction('a', 'yield a * 2');
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
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
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- {{jsxref("Functions", "Functions", "", 1)}}
