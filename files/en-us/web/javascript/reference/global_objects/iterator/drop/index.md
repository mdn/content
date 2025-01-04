---
title: Iterator.prototype.drop()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/drop
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.drop
---

{{JSRef}}

The **`drop()`** method of {{jsxref("Iterator")}} instances returns a new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) that skips the given number of elements at the start of this iterator.

## Syntax

```js-nolint
drop(limit)
```

### Parameters

- `limit`
  - : The number of elements to drop from the start of the iteration.

### Return value

A new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). The first time the returned iterator helper's `next()` method is called, the current iterator is immediately advanced by `limit` elements, and then the next element (the `limit+1`-th element) is yielded. The iterator helper then yields the remaining elements one-by-one. If the current iterator has fewer than `limit` elements, the new iterator helper will be immediately completed the first time `next()` is called.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `limit` becomes {{jsxref("NaN")}} or negative when [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

## Examples

### Using drop()

The following example creates an iterator that yields terms in the Fibonacci sequence, starting from the 3rd term by dropping the first two terms:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().drop(2);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
```

This is equivalent to:

```js
const seq = fibonacci();
seq.next();
seq.next();
```

### Using drop() with a for...of loop

`drop()` is most convenient when you are not hand-rolling the iterator. Because iterators are also iterable, you can iterate the returned helper with a {{jsxref("Statements/for...of", "for...of")}} loop:

```js
for (const n of fibonacci().drop(2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### Combining drop() with take()

You can combine `drop()` with {{jsxref("Iterator.prototype.take()")}} to get a slice of an iterator:

```js
for (const n of fibonacci().drop(2).take(5)) {
  // Drops the first two elements, then takes the next five
  console.log(n);
}
// Logs:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // Takes the first five elements, then drops the first two
  console.log(n);
}
// Logs:
// 2
// 3
// 5
```

### Lower and upper bounds of drop count

When the `limit` is negative or {{jsxref("NaN")}}, a {{jsxref("RangeError")}} is thrown:

```js
fibonacci().drop(-1); // RangeError: -1 must be positive
fibonacci().drop(undefined); // RangeError: undefined must be positive
```

When the `limit` is larger than the total number of elements the iterator can produce (such as {{jsxref("Infinity")}}), the returned iterator helper will instantly drop all elements and then be completed the first time `next()` is called. If the current iterator is infinite, the returned iterator helper will never complete.

```js
fibonacci().drop(Infinity).next(); // Never ends
new Set([1, 2, 3]).values().drop(Infinity).next(); // { value: undefined, done: true }
new Set([1, 2, 3]).values().drop(4).next(); // { value: undefined, done: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.prototype.drop` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.take()")}}
