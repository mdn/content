---
title: Iterator.prototype.chunks()
short-title: chunks()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/chunks
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Iterator.chunks
sidebar: jsref
---

{{SeeCompatTable}}

The **`chunks()`** method of {{jsxref("Iterator")}} instances returns a new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) that splits the elements from the original iterator into consecutive array chunks. Each time the helper is iterated, it gets the specified number of elements from the underlying iterator and yields them together.

To yield overlapping sequences (i.e., sliding window), see {{jsxref("Iterator.prototype.windows()")}}.

## Syntax

```js-nolint
chunks(chunkSize)
```

### Parameters

- `chunkSize`
  - : The number of elements in each chunk. Must be a positive integer less than 2<sup>32</sup> (the maximum array length).

### Return value

A new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Each time the returned iterator helper's `next()` method is called, the original iterator is advanced by `chunkSize` elements, and those elements are yielded together as an array.

If the original iterator has some but fewer than `chunkSize` elements remaining, those elements are still yielded as an array (so the length is less than `chunkSize`), and the iterator helper will be immediately completed the next time `next()` is called.

If the original iterator has no elements remaining, the iterator helper is immediately completed without yielding an empty array.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `chunkSize` is not an integer.
- {{jsxref("RangeError")}}
  - : Thrown if `chunkSize` is less than 1 or greater than 2<sup>32</sup>－1.

## Examples

### Printing elements in a grid

The following example creates an iterator that yields terms in the Fibonacci sequence. Then, they are printed in a grid layout by retrieving 5 elements each time.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const rows = fibonacci().chunks(5);

for (const row of rows.take(5)) {
  console.log(row.join("\t"));
}
```

Output:

```plain
1       1       2       3       5
8       13      21      34      55
89      144     233     377     610
987     1597    2584    4181    6765
10946   17711   28657   46368   75025
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.prototype.chunks` in `core-js`](https://github.com/zloirock/core-js#iterator-chunking)
- [es-shims polyfill of `Iterator.prototype.chunks`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.windows()")}}
