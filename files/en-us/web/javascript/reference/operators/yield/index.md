---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
tags:
  - ECMAScript 2015
  - Generators
  - Iterator
  - JavaScript
  - Language feature
  - Operator
browser-compat: javascript.operators.yield
---
{{jsSidebar("Operators")}}

The `yield` keyword is used to pause and resume a [generator function](/en-US/docs/Web/JavaScript/Reference/Statements/function*).

{{EmbedInteractiveExample("pages/js/expressions-yield.html", "taller")}}

## Syntax

```js
[rv] = yield [expression]
```

- `expression` {{optional_inline}}
  - : Defines the value to return from the generator function via
    [the iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).
    If omitted, `undefined` is returned instead.
- `rv` {{optional_inline}}
  - : Retrieves the optional value passed to the generator's `next()` method
    to resume its execution.

## Description

The `yield` keyword pauses generator function execution and the value of the
expression following the `yield` keyword is returned to the generator's
caller. It can be thought of as a generator-based version of the `return`
keyword.

`yield` can only be called directly from the generator function that
contains it. It cannot be called from nested functions or from callbacks.

The `yield` keyword causes the call to the generator's `next()`
method to return an `IteratorResult` object with two properties:
`value` and `done`. The `value` property is the result
of evaluating the `yield` expression, and `done` is
`false`, indicating that the generator function has not fully completed.

Once paused on a `yield` expression, the generator's code execution remains
paused until the generator's `next()` method is called. Each time the
generator's `next()` method is called, the generator resumes execution, and
runs until it reaches one of the following:

- A `yield`, which causes the generator to once again pause and return the
  generator's new value. The next time `next()` is called, execution resumes
  with the statement immediately after the `yield`.
- {{jsxref("Statements/throw", "throw")}} is used to throw an exception from the
  generator. This halts execution of the generator entirely, and execution resumes in
  the caller (as is normally the case when an exception is thrown).
- The end of the generator function is reached. In this case, execution of the
  generator ends and an `IteratorResult` is returned to the caller in which
  the `value` is {{jsxref("undefined")}} and `done` is
  `true`.
- A {{jsxref("Statements/return", "return")}} statement is reached. In this case,
  execution of the generator ends and an `IteratorResult` is returned to the
  caller in which the `value` is the value specified by the
  `return` statement and `done` is `true`.

If an optional value is passed to the generator's `next()` method, that
value becomes the value returned by the generator's current `yield`
operation.

Between the generator's code path, its `yield` operators, and the ability to
specify a new starting value by passing it to {{jsxref("Generator.prototype.next()")}},
generators offer enormous power and control.

> **Warning:** Unfortunately, `next()` is asymmetric, but that can't be helped: It always
> sends a value to the currently suspended `yield`, but returns the operand
> of the following `yield`.

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

Once a generator function is defined, it can be used by constructing an iterator as
shown.

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

You can also send a value with `next(value)` into the generator. `step` evaluates as a
return value in this syntax `rv = yield expression` — although a value passed
to the generator's `next()` method is ignored the first time `next()` is called.

```js
function* counter(value) {
  let step;

  while (true) {
    step = yield value++;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value);   // 0
console.log(generatorFunc.next().value);   // 1
console.log(generatorFunc.next().value);   // 2
console.log(generatorFunc.next().value);   // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value);   // 15
console.log(generatorFunc.next(10).value); // 26
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}
