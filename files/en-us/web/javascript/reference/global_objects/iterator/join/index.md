---
title: Iterator.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/join
page-type: javascript-instance-method
browser-compat: javascript.builtins.Iterator.join
sidebar: jsref
---

The **`join()`** method of {{jsxref("Iterator")}} instances is similar to {{jsxref("Array.prototype.join()")}}: it returns a string that is the concatenation of all elements produced by the iterator, separated by commas or a specified separator string.

## Syntax

```js-nolint
join()
join(separator)
```

### Parameters

- `separator` {{optional_inline}}
  - : A string to separate each pair of adjacent elements of the iterator. If omitted, the elements are separated with a comma (",").

### Return value

A string joining all yielded elements. The elements are [converted to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). If an element is `undefined` or `null`, it is converted to an empty string instead of the string `"null"` or `"undefined"`. If the iterator is empty, the empty string is returned.

## Description

See {{jsxref("Array.prototype.join()")}} for details about how `join()` works. Unlike most other iterator helper methods, it does not work well with infinite iterators, because it is not lazy.

## Examples

### Using join()

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().take(5).join()); // "1,1,2,3,5"
console.log(fibonacci().take(5).join(" - ")); // "1 - 1 - 2 - 3 - 5"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Iterator.prototype.join` in `core-js`](https://github.com/zloirock/core-js#iterator-join)
- [es-shims polyfill of `Iterator.prototype.join`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.join()")}}
