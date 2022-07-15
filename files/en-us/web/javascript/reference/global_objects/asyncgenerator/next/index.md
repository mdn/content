---
title: AsyncGenerator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next
tags:
  - ECMAScript 2018
  - AsyncGenerator
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.AsyncGenerator.next
---
{{JSRef}}

The **`next()`** method returns the next value in the sequence.

## Syntax

```js
asyncGeneratorObject.next()
asyncGeneratorObject.next(value)
```

### Parameters

- `value` {{optional_inline}}
  - : An optional value used to modify the internal state of the generator. A value passed to the `next()` method will be received by `yield`

### Return value

A {{jsxref("Promise")}} which when resolved returns an {{jsxref("Object")}} with two properties:

- `done`
  - : A boolean value:
    - `true` if the generator is past the end of its control flow. In this case `value` specifies the _return value_ of the generator (which may be undefined).
    - `false` if the generator is able to produce more values.
- `value`
  - : Any JavaScript value yielded or returned by the generator.

## Examples

### Using next()

The following example shows a simple generator and the object that the `next` method returns:

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
asyncGen.next().then((res) => console.log(res));    // { value: 1, done: false }
asyncGen.next().then((res) => console.log(res));    // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res));    // { value: 3, done: false }
asyncGen.next().then((res) => console.log(res));    // { value: undefined, done: true }
```

### Sending values to the generator

In this example, `next` is called with a value.

> **Note:** The first call does not log anything, because the generator was not yielding anything initially.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    await sleep(500);
    const value = yield;
    console.log(value);
  }
}

async function main() {
  const asyncGen = createAsyncGenerator();
  // No log at this step: the first value sent through `next` is lost
  console.log(await asyncGen.next(1));    // { value: undefined, done: false }
  // Logs 2: the value sent through `next`
  console.log(await asyncGen.next(2));    // { value: undefined, done: false }
}

main();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
