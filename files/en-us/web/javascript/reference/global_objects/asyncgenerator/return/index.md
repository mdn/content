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

The **`return()`** method returns the given value and finishes the generator.

## Syntax

```js
asyncGen.return(value)
```

### Parameters

- `value`
  - : The value to return.

### Return value

Returns a {{jsxref("Promise")}} which resolves with the value that is given as an argument.

## Examples

### Using return()

The following example shows a simple async generator and the `return` method.

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then(res => console.log(res));        // { value: 1, done: false }
asyncGen.return('foo').then(res => console.log(res)); // { value: "foo", done: true }
asyncGen.next().then(res => console.log(res));        // { value: undefined, done: true }
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
asyncGen.next().then(res => console.log(res));    // { value: 1, done: false }
asyncGen.next().then(res => console.log(res));    // { value: 2, done: false }
asyncGen.next().then(res => console.log(res));    // { value: 3, done: false }
// value is returned undefined, as no value is passed and generator is 'done'
asyncGen.return().then(res => console.log(res));  // { value: undefined, done: true }
// we can still return a value once the generator is complete
asyncGen.return(1).then(res => console.log(res)); // { value: 1, done: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
