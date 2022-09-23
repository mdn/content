---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.keys
---

{{JSRef}}

The **`keys()`** method returns a new **Array
Iterator** object that contains the keys for each index in the array.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## Syntax

```js-nolint
keys()
```

### Return value

A new {{jsxref("Array")}} iterator object.

## Description

The `keys()` method does not special case [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Empty slots are visited as if they have value `undefined`.

## Examples

### Using keys() on sparse arrays

Unlike {{jsxref("Object.keys()")}}, which only includes keys that actually exist in the array, the `keys()` iterator doesn't ignore holes representing missing properties.

```js
const arr = ['a', , 'c'];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
