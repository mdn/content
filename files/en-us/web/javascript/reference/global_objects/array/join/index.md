---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.join
---

{{JSRef}}

The **`join()`** method of {{jsxref("Array")}} instances creates and
returns a new string by concatenating all of the elements in this array,
separated by commas or a specified separator string. If the array has
only one item, then that item will be returned without using the separator.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Syntax

```js-nolint
join()
join(separator)
```

### Parameters

- `separator` {{optional_inline}}
  - : A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").

### Return value

A string with all array elements joined. If `arr.length` is
`0`, the empty string is returned.

## Description

The string conversions of all array elements are joined into one string. If an element is `undefined`, `null`, it is converted to an empty string instead of the string `"null"` or `"undefined"`.

The `join` method is accessed internally by [`Array.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) with no arguments. Overriding `join` of an array instance will override its `toString` behavior as well.

`Array.prototype.join` recursively converts each element, including other arrays, to strings. Because the string returned by `Array.prototype.toString` (which is the same as calling `join()`) does not have delimiters, nested arrays look like they are flattened. You can only control the separator of the first level, while deeper levels always use the default comma.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

When an array is cyclic (it contains an element that is itself), browsers avoid infinite recursion by ignoring the cyclic reference.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `join()` method iterates empty slots as if they have the value `undefined`.

The `join()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Joining an array four different ways

The following example creates an array, `a`, with three elements, then joins
the array four times: using the default separator, then a comma and a space, then a plus
and an empty string.

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### Using join() on sparse arrays

`join()` treats empty slots the same as `undefined` and produces an extra separator:

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### Calling join() on non-array objects

The `join()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by join() since length is 3
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.join` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
