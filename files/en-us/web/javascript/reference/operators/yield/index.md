---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
page-type: javascript-operator
browser-compat: javascript.operators.yield
---

{{jsSidebar("Operators")}}

The **`yield`** operator is used to pause and resume a [generator function](/en-US/docs/Web/JavaScript/Reference/Statements/function*).

{{EmbedInteractiveExample("pages/js/expressions-yield.html", "taller")}}

## Syntax

```js-nolint
yield
yield expression
```

### Parameters

- `expression` {{optional_inline}}
  - : The value to yield from the generator function via [the iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol). If omitted, `undefined` is yielded.

### Return value

Returns the optional value passed to the generator's `next()` method to resume its execution.

> **Note:** This means `next()` is asymmetric: it always sends a value to the currently suspended `yield`, but returns the operand of the next `yield`. The argument passed to the first `next()` call cannot be retrieved because there's no currently suspended `yield`.

## Description

The `yield` keyword pauses generator function execution and the value of the expression following the `yield` keyword is returned to the generator's caller. It can be thought of as a generator-based version of the `return` keyword.

`yield` can only be used directly within the generator function that contains it. It cannot be used within nested functions.

Calling a generator function constructs a {{jsxref("Generator")}} object. Each time the generator's {{jsxref("Generator/next", "next()")}} method is called, the generator resumes execution, and runs until it reaches one of the following:

- A `yield` expression. In this case, the generator pauses, and the `next()` method return an [iterator result](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) object with two properties: `value` and `done`. The `value` property is the value of the expression after the `yield` operator, and `done` is `false`, indicating that the generator function has not fully completed.
- The end of the generator function. In this case, execution of the generator ends, and the `next()` method returns an iterator result object where the `value` is {{jsxref("undefined")}} and `done` is `true`.
- A {{jsxref("Statements/return", "return")}} statement. In this case, execution of the generator ends, and the `next()` method returns an iterator result object where the `value` is the specified return value and `done` is `true`.
- A {{jsxref("Statements/throw", "throw")}} statement. In this case, execution of the generator halts entirely, and the `next()` method throws the specified exception.

Once paused on a `yield` expression, the generator's code execution remains paused until the generator's `next()` method is called again. If an optional value is passed to the generator's `next()` method, that value becomes the value returned by the generator's current `yield` operation. The first `next()` call does not have a corresponding suspended `yield` operation, so there's no way to get the argument passed to the first `next()` call.

If the generator's {{jsxref("Generator/return", "return()")}} or {{jsxref("Generator/throw", "throw()")}} method is called, it acts as if a {{jsxref("Statements/return", "return")}} or {{jsxref("Statements/throw", "throw")}} statement was executed at the paused `yield` expression. You can use {{jsxref("Statements/try...catch", "try...catch...finally")}} within the generator function body to handle these early completions. If the `return()` or `throw()` method is called but there's no suspended `yield` expression (because `next()` has not been called yet, or because the generator has already completed), then the early completions cannot be handled and always terminate the generator.

## Examples

### Using yield

The following code is the declaration of an example generator function.

```js
function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

Once a generator function is defined, it can be used by constructing an iterator as shown.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

You can also send a value with `next(value)` into the generator. `step` evaluates as a return value of the `yield` expression — although the value passed to the generator's `next()` method the first time `next()` is called is ignored.

```js
function* counter(value) {
  while (true) {
    const step = yield value++;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 0
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield*", "yield*")}}
