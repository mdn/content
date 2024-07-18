---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.splice
---

{{JSRef}}

The **`splice()`** method of {{jsxref("Array")}} instances changes the contents of an array by
removing or replacing existing elements and/or adding new elements [in place](https://en.wikipedia.org/wiki/In-place_algorithm).

To create a new array with a segment removed and/or replaced without mutating the original array, use {{jsxref("Array/toSpliced", "toSpliced()")}}. To access part of an array without modifying it, see {{jsxref("Array/slice", "slice()")}}.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Syntax

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

### Parameters

- `start`

  - : Zero-based index at which to start changing the array, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the array — if `-array.length <= start < 0`, `start + array.length` is used.
    - If `start < -array.length`, `0` is used.
    - If `start >= array.length`, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
    - If `start` is omitted (and `splice()` is called with no arguments), nothing is deleted. This is different from passing `undefined`, which is converted to `0`.

- `deleteCount` {{optional_inline}}

  - : An integer indicating the number of elements in the array to remove from `start`.

    If `deleteCount` is omitted, or if its value is greater than or equal to the number of elements after the position specified by `start`, then all the elements from `start` to the end of the array will be deleted. However, if you wish to pass any `itemN` parameter, you should pass `Infinity` as `deleteCount` to delete all elements after `start`, because an explicit `undefined` gets [converted](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) to `0`.

    If `deleteCount` is `0` or negative, no elements are removed.
    In this case, you should specify at least one new element (see below).

- `item1`, …, `itemN` {{optional_inline}}

  - : The elements to add to the array, beginning from `start`.

    If you do not specify any elements, `splice()` will only remove elements from the array.

### Return value

An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.

## Description

The `splice()` method is a [mutating method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It may change the content of `this`. If the specified number of elements to insert differs from the number of elements being removed, the array's `length` will be changed as well. At the same time, it uses [`[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) to create a new array instance to be returned.

If the deleted portion is [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the array returned by `splice()` is sparse as well, with those corresponding indices being empty slots.

The `splice()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

## Examples

### Remove 0 (zero) elements before index 2, and insert "drum"

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Remove 0 (zero) elements at index 0, and insert "angel"

`splice(0, 0, ...elements)` inserts elements at the start of the array like {{jsxref("Array/unshift", "unshift()")}}.

```js
const myFish = ["clown", "mandarin", "sturgeon"];
const removed = myFish.splice(0, 0, "angel");

// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
```

### Remove 0 (zero) elements at last index, and insert "sturgeon"

`splice(array.length, 0, ...elements)` inserts elements at the end of the array like {{jsxref("Array/push", "push()")}}.

```js
const myFish = ["angel", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "sturgeon");

// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
```

### Remove 1 element at index 3

```js
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
```

### Remove 1 element at index 2, and insert "trumpet"

```js
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

### Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

```js
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

### Remove 2 elements, starting from index 2

```js
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

### Remove 1 element from index -2

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

### Remove all elements, starting from index 2

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

### Using splice() on sparse arrays

The `splice()` method preserves the array's sparseness.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]
```

### Calling splice() on non-array objects

The `splice()` method reads the `length` property of `this`. It then updates the integer-keyed properties and the `length` property as needed.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.unshift()")}}
