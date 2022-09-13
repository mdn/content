---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Array.entries
---

{{JSRef}}

The **`entries()`** method returns a new **Array
Iterator** object that contains the key/value pairs for each index in the
array.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## Syntax

```js
entries();
```

### Return value

A new {{jsxref("Array")}} iterator object.

## Examples

### Iterating with index and element

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### Using a for...of loop

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
