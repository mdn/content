---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
page-type: javascript-instance-method
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

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `keys()` method iterates empty slots as if they have the value `undefined`.

The `keys()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Using keys() on sparse arrays

Unlike {{jsxref("Object.keys()")}}, which only includes keys that actually exist in the array, the `keys()` iterator doesn't ignore holes representing missing properties.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Calling keys() on non-array objects

The `keys()` method reads the `length` property of `this` and then yields all integer indices between 0 and `length - 1`. No index access actually happens.

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
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
