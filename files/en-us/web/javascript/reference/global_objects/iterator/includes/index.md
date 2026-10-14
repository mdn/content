---
title: Iterator.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/includes
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.includes
sidebar: jsref
---

The **`includes()`** method of {{jsxref("Iterator")}} instances is similar to {{jsxref("Array.prototype.includes()")}}: it returns `true` if it finds an element that is equal to the given value. Otherwise, if the iterator is exhausted without finding such an element, it returns `false`.

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : The value to search for.
- `fromIndex` {{optional_inline}}
  - : Zero-based index at which to start searching. Must be a non-negative integer, `Infinity`, or `undefined`. If `fromIndex` is greater than or equal to the number of elements produced by the iterator (including when `fromIndex` is `Infinity`), the method always returns `false` after exhausting the iterator. If `fromIndex` is `undefined`, it defaults to `0`.

### Return value

A boolean value which is `true` if the value `searchElement` is found within the iterator (or the part of the iterator starting at `fromIndex`, if specified).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `fromIndex` is not one of: an integer, `Infinity`, `-Infinity`, or `undefined`.
- {{jsxref("RangeError")}}
  - : Thrown if `fromIndex` is negative.

## Description

The `includes()` method compares `searchElement` to elements of the array using the [SameValueZero algorithm](/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). This algorithm works like strict equality `===` (where `-0` and `+0` are considered equal), with the exception that {{jsxref("NaN")}} is considered equal to itself.

Unlike `Array.prototype.includes()`, the `fromIndex` parameter of `Iterator.prototype.includes()` is not allowed to be negative, because the iterator does not have a known length. The type validation is also stricter: non-integer values are not truncated to integers.

The main advantage of iterator helpers over array methods is that they are lazy, meaning that they only produce the next value when requested. This avoids unnecessary computation and also allows them to be used with infinite iterators. With infinite iterators, `includes()` returns `true` as soon as the first match is found. If the value is never encountered, the method never returns.

Calling `includes()` always closes the underlying iterator, even if the method early-returns. The iterator is never left in a half-way state.

## Examples

### Using includes()

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8)); // true
console.log(fibonacci().take(10).includes(7)); // false
console.log(fibonacci().includes(7)); // Never completes
```

The method closes the iterator after returning.

```js
const seq = fibonacci();
console.log(seq.includes(8)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

### Using fromIndex

`fromIndex` specifies the number of elements to be skipped from the beginning. It is equivalent to calling `drop(fromIndex).includes(searchElement)`.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8, 3)); // true
console.log(fibonacci().includes(8, 10)); // false
```

If `fromIndex` is greater than or equal to the elements available, `false` is returned.

```js
["a", "b", "c"].values().includes("a", 3); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [es-shims polyfill of `Iterator.prototype.includes`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.includes()")}}
