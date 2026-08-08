---
title: Iterator.prototype.windows()
short-title: windows()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/windows
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.windows
sidebar: jsref
---

The **`windows()`** method of {{jsxref("Iterator")}} instances returns a new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) that yields overlapping element sequences as arrays. A sliding window sweeps across the input iterator; each time, a new element is added to the right while the leftmost element is removed.

For yielding non-overlapping sequences (i.e., chunking), see {{jsxref("Iterator.prototype.chunks()")}}.

## Syntax

```js-nolint
windows(windowSize)
windows(windowSize, underSized)
```

### Parameters

- `windowSize`
  - : The number of elements in the sliding window. Must be a positive integer less than 2<sup>32</sup> (the maximum array length).
- `underSized` {{optional_inline}}
  - : A string specifying what to do when the number of elements in the iterator is less than `windowSize` but greater than 0. It can be one of the following:
    - `"only-full"` (default)
      - : Ignore the partial window. The returned iterator immediately completes as if the input is empty.
    - `"allow-partial"`
      - : Yield all elements in the partial window as an array (with length less than `windowSize`).

    Note that when the input is empty, the returned iterator always immediately completes without yielding an empty array.

### Return value

A new [iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). The first time the returned iterator helper's `next()` method is called, the current iterator is immediately advanced by `windowSize` elements. If that many elements are available, they are yielded together as an array. Otherwise, the behavior depends on the `underSized` argument: the iterator either immediately completes without yielding anything (with `"only-full"` or with a fully empty input), or an array of length less than `windowSize` is yielded.

Afterwards, each time, the yielded array consists of the previous array, the leftmost element removed, a new element retrieved from the input iterable appended. When the input iterable is exhausted, the iterator helper also completes.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `limit` is not an integer, or if `underSized` is not one of the allowed values.
- {{jsxref("RangeError")}}
  - : Thrown if `limit` is less than 1 or greater than 2<sup>32</sup>－1.

## Examples

### Moving average

The following example creates an iterator that yields terms in the Fibonacci sequence. Then, a new iterator is created, each time yielding the average of two adjacent elements.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const averaged = fibonacci()
  .windows(2)
  .map((window) => (window[0] + window[1]) / 2);

console.log(averaged.next().value); // 1 (1, 1)
console.log(averaged.next().value); // 1.5 (1, 2)
console.log(averaged.next().value); // 2.5 (2, 3)
console.log(averaged.next().value); // 4 (3, 5)
```

This process, known as a moving average, is very useful in signal processing.

### Enumerating substrings

The following example enumerates all substrings of a given length in a string. The `windows()` method is used to create a sliding window of characters, which are then joined together to form substrings.

> [!NOTE]
> This is probably much less efficient than manually iterating a number index and calling the {{jsxref("String.prototype.substring()")}} method.

```js
const chars = Iterator.from("MASSACHUSETTS");

const substrings = chars.windows(3).map((window) => window.join(""));

for (const substring of substrings) {
  console.log(substring);
}
// MAS
// ASS
// SSA
// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.prototype.windows` in `core-js`](https://github.com/zloirock/core-js#iterator-chunking)
- [es-shims polyfill of `Iterator.prototype.windows`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.chunks()")}}
