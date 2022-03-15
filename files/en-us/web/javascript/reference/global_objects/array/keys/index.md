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

```js
keys()
```

### Return value

A new {{jsxref("Array")}} iterator object.

## Examples

### Key iterator doesn't ignore holes

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
