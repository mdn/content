---
title: Iterator.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.filter
---

{{JSRef}}

The **`filter()`** method of {{jsxref("Iterator")}} instances returns a new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) that yields only those elements of the iterator for which the provided callback function returns `true`.

## Syntax

```js-nolint
filter(callbackFn)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element produced by the iterator. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to make the element yielded by the iterator helper, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed.
    - `index`
      - : The index of the current element being processed.

### Return value

A new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Each time the iterator helper's `next()` method is called, it returns the next element in the iterator for which the callback function returns `true`. When the underlying iterator is completed, the iterator helper object is also completed (the `next()` method produces `{ value: undefined, done: true }`).

## Description

The main advantage of iterator helpers over array methods is that they are lazy, meaning that they only produce the next value when requested. This avoids unnecessary computation and also allows them to be used with infinite iterators.

## Examples

### Using filter()

The following example creates an iterator that yields terms in the Fibonacci sequence, and then reads the first few terms that are even:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```

### Using filter() with a for...of loop

`filter()` is most convenient when you are not hand-rolling the iterator. Because iterators are also iterable, you can iterate the returned helper with a {{jsxref("Statements/for...of", "for...of")}} loop:

```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 8
// 34
```

This is equivalent to:

```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.forEach()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
