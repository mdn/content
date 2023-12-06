---
title: Iterator.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Iterator.forEach
---

{{JSRef}}{{SeeCompatTable}}

The **`forEach()`** method of {{jsxref("Iterator")}} instances is similar to {{jsxref("Array.prototype.forEach()")}}: it executes a provided function once for each element produced by the iterator.

## Syntax

```js-nolint
forEach(callbackFn)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element produced by the iterator. Its return value is discarded. The function is called with the following arguments:
    - `element`
      - : The current element being processed.
    - `index`
      - : The index of the current element being processed.

### Return value

{{jsxref("undefined")}}.

## Description

`forEach()` iterates the iterator and invokes the `callbackFn` function once for each element. Unlike most other iterator helper methods, it does not work well with infinite iterators, because it is not lazy.

## Examples

### Using forEach()

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Logs:
// 1
// 2
// 3
```

This is equivalent to:

```js
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.filter()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
