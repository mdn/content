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
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then(res => console.log(res));    // "Object { value: 1, done: false }"
asyncGen.next().then(res => console.log(res));    // "Object { value: 2, done: false }"
asyncGen.next().then(res => console.log(res));    // "Object { value: 3, done: false }"
asyncGen.next().then(res => console.log(res));    // "Object { value: undefined, done: true }"
```

### Sending values to the generator

In this example, `next` is called with a value.

> **Note:** The first call does not log anything, because the generator was not yielding anything initially.
```js
async function* createAsyncGenerator() {
  while (true) {
    const value = yield await Promise.resolve(null);
    console.log(value);
  }
}
const asyncGen = createAsyncGenerator();
asyncGen.next(1).then(res => console.log(res));    // { value: null, done: false }
asyncGen.next(2).then(res => console.log(res));    // { value: null, done: false }
```

### Using next() with a list

```js
async function* getPage(pageSize = 1, list) {
  let output = [];
  let index = 0;
  while (index < list.length) {
    output = [];
    for (let i = index; i < index + pageSize; i++) {
      if (list[i]) {
        output.push(list[i]);
      }
    }
    yield await Promise.resolve(output);
    index += pageSize;
  }
}
const list = [1, 2, 3, 4, 5, 6, 7, 8];
const page = getPage(3, list);             // AsyncGenerator { }
page.next().then(res => console.log(res)); // Object { value: [1, 2, 3], done: false }
page.next().then(res => console.log(res)); // Object { value: [4, 5, 6], done: false }
page.next().then(res => console.log(res)); // Object { value: [7, 8], done: false }
page.next().then(res => console.log(res)); // Object { value: undefined, done: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
