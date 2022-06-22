---
title: AsyncGenerator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
tags:
  - ECMAScript 2018
  - AsyncGenerator
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.AsyncGenerator.throw
---
{{JSRef}}

The **`throw()`** method forces a generator to throw an exception.

## Syntax

```js
asyncGen.throw(exception)
```

### Parameters

- `exception`
  - : The exception to throw. For debugging purposes, it is useful to make it an `instanceof` {{jsxref("Error")}}.

### Return value

A {{jsxref("Promise")}} which when resolved returns an {{jsxref("Object")}} with two properties:

- `done`
  - : A {{jsxref("Boolean")}} value: `true` if the iterator is past the end of the iterated sequence. In this case `value` optionally specifies the _return value_ of the iterator. `false` if the iterator was able to produce the next value in the sequence.
- `value`
  - : Any JavaScript value returned by the iterator. Can be omitted when `done` is `true`.

## Examples

### Using throw()

The following example shows a simple generator and an error that is thrown using the `throw` method. An error can be caught by a {{jsxref("Statements/try...catch", "try...catch")}} block as usual.

```js
async function* createAsyncGenerator() {
  while (true) {
    try {
       yield 42;
    } catch (e) {
      console.log(new Error(e));
    }
  }
}
const asyncGen = createAsyncGenerator();
asyncGen.next(1).then(res => console.log(res));    // { value: 42, done: false }
asyncGen.throw(new Error('Something went wrong'))  // Error: 'Error: Something went wrong
  .then(res => console.log(res));                  // { value: 42, done: false }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
