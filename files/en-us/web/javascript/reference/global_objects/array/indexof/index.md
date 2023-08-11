---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.indexOf
---

{{JSRef}}

The **`indexOf()`** method of {{jsxref("Array")}} instances returns the first index at which a
given element can be found in the array, or -1 if it is not present.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## Syntax

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : Element to locate in the array.
- `fromIndex` {{optional_inline}}
  - : Zero-based index at which to start searching, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the array — if `fromIndex < 0`, `fromIndex + array.length` is used. Note, the array is still searched from front to back in this case.
    - If `fromIndex < -array.length` or `fromIndex` is omitted, `0` is used, causing the entire array to be searched.
    - If `fromIndex >= array.length`, the array is not searched and `-1` is returned.

### Return value

The first index of the element in the array; `-1` if not found.

## Description

The `indexOf()` method compares `searchElement` to elements of the array using [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (the same algorithm used by the `===` operator). [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) values are never compared as equal, so `indexOf()` always returns `-1` when `searchElement` is `NaN`.

The `indexOf()` method skips empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

The `indexOf()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Using indexOf()

The following example uses `indexOf()` to locate values in an array.

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

You cannot use `indexOf()` to search for `NaN`.

```js
const array = [NaN];
array.indexOf(NaN); // -1
```

### Finding all the occurrences of an element

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Finding if an element exists in the array or not and updating the array

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.
```

### Using indexOf() on sparse arrays

You cannot use `indexOf()` to search for empty slots in sparse arrays.

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### Calling indexOf() on non-array objects

The `indexOf()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by indexOf() since length is 3
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.indexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
