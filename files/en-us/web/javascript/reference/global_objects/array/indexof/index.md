---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - indexof
  - Polyfill
browser-compat: javascript.builtins.Array.indexOf
---
{{JSRef}}

The **`indexOf()`** method returns the first index at which a
given element can be found in the array, or -1 if it is not present.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## Syntax

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : Element to locate in the array.
- `fromIndex` {{optional_inline}}
  - : The index to start the search at. If the index is greater than or equal to the
    array's length, -1 is returned, which means the array will not be searched. If the
    provided index value is a negative number, it is taken as the offset from the end of
    the array. Note: if the provided index is negative, the array is still searched from
    front to back. If the provided index is 0, then the whole array will be searched.
    Default: 0 (entire array is searched).

### Return value

The first index of the element in the array; **-1** if not found.

## Description

`indexOf()` compares `searchElement` to elements of
the Array using [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
(the same method used by the `===` or triple-equals operator).

> **Note:** For the String method, see
> {{jsxref("String.prototype.indexOf()")}}.

## Examples

### Using indexOf()

The following example uses `indexOf()` to locate values in an array.

```js
const array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Finding all the occurrences of an element

```js
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
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
function updateVegetablesCollection (veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.indexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
