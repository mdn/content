---
title: Iterator.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Iterator.some
---

{{JSRef}}{{SeeCompatTable}}

The **`some()`** method of {{jsxref("Iterator")}} instances is similar to {{jsxref("Array.prototype.some()")}}: it tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.

## Syntax

```js-nolint
some(callbackFn)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element produced by the iterator. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate the element passes the test, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed.
    - `index`
      - : The index of the current element being processed.

### Return value

`true` if the callback function returns a {{Glossary("truthy")}} value for at least one element. Otherwise, `false`.

## Description

`some()` iterates the iterator and invokes the `callbackFn` function once for each element. It returns `true` immediately if the callback function returns a truthy value. Otherwise, it iterates until the end of the iterator and returns `false`. If `some()` returns `true`, the underlying iterator is closed by calling its `return()` method.

The main advantage of iterator helpers over array methods is their ability to work with infinite iterators. With infinite iterators, `some()` returns `true` as soon as the first truthy value is found. If the `callbackFn` always returns a falsy value, the method never returns.

## Examples

### Using some()

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().some(isEven)); // true

const isNegative = (x) => x < 0;
const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).some(isPositive)); // false
console.log(fibonacci().some(isNegative)); // Never completes
```

Calling `some()` always closes the underlying iterator, even if the method early-returns. The iterator is never left in a half-way state.

```js
const seq = fibonacci();
console.log(seq.some(isEven)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.prototype.some` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Array.prototype.some()")}}
