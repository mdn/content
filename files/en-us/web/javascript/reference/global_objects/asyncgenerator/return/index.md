---
title: AsyncGenerator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
tags:
  - ECMAScript 2018
  - AsyncGenerator
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.AsyncGenerator.return
---
{{JSRef}}

The **`return()`** method of an async generator acts as if a `return` statement is inserted in the generator's body at the current suspended position, which finishes the generator and allows the generator to perform any cleanup tasks when combined with a [`try...finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) block.

## Syntax

```js
asyncGeneratorObject.return(value)
```

### Parameters

- `value`
  - : The value to return.

### Return value

A {{jsxref("Promise")}} which resolves with an {{jsxref("Global_Objects/Object", "Object")}} with two properties:

- `done`
  - : A boolean value:
    - `true` if the generator function's control flow has reached the end.
    - `false` if the generator function's control flow hasn't reached the end and can produce more values. This can only happen if the `return` is captured in a [`try...finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) and there are more `yield` expressions in the `finally` block.
- `value`
  - : The value that is given as an argument, or, if the `yield` expression is wrapped in a [`try...finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block), the value yielded/returned from the `finally` block.

## Description

The `return()` method, when called, can be seen as if a `return value;` statement is inserted in the generator's body at the current suspended position, where `value` is the value passed to the `return()` method. Therefore, in a typical flow, calling `return(value)` will return `{ done: true, value: value }`. However, if the `yield` expression is wrapped in a `try...finally` block, the control flow doesn't exit the function body, but proceeds to the `finally` block instead. In this case, the value returned may be different, and `done` may even be `false`, if there are more `yield` expressions within the `finally` block.

## Examples

### Using return()

The following example shows a simple async generator and the `return` method.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* createAsyncGenerator() {
  yield delayedValue(500, 1);
  yield delayedValue(500, 2);
  yield delayedValue(500, 3);
}

const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res));        // { value: 1, done: false }
asyncGen.return('foo').then((res) => console.log(res)); // { value: "foo", done: true }
asyncGen.next().then((res) => console.log(res));        // { value: undefined, done: true }
```

### Using return() once a generator is complete

If no `value` argument is passed into the `return()` method, the promise will resolve as if the [next()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next) method has been called. In this example the generator has completed, so the value returned is `undefined`.

`return()` can still be called after the generator is in a "completed" state, however the generator will stay in this state.

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res));    // { value: 1, done: false }
asyncGen.next().then((res) => console.log(res));    // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res));    // { value: 3, done: false }
// value is returned undefined, as no value is passed and generator is 'done'
asyncGen.return().then((res) => console.log(res));  // { value: undefined, done: true }
// we can still return a value once the generator is complete
asyncGen.return(1).then((res) => console.log(res)); // { value: 1, done: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
