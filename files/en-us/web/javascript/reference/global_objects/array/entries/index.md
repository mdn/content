---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.entries
---

{{JSRef}}

The **`entries()`** method returns a new **Array
Iterator** object that contains the key/value pairs for each index in the
array.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## Syntax

```js-nolint
entries()
```

### Return value

A new {{jsxref("Array")}} iterator object.

## Description

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `entries()` method iterates empty slots as if they have the value `undefined`.

The `entries()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

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

### Iterating sparse arrays

`entries()` will visit empty slots as if they are `undefined`.

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### Calling entries() on non-array objects

The `entries()` method reads the `length` property of `this` and then accesses each integer index.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
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
