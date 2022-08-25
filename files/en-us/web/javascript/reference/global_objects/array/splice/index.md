---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - remove
  - replace
  - splice
browser-compat: javascript.builtins.Array.splice
---
{{JSRef}}

The **`splice()`** method changes the contents of an array by
removing or replacing existing elements and/or adding new elements [in place](https://en.wikipedia.org/wiki/In-place_algorithm). To access part of an array without modifying it, see {{jsxref("Array.prototype.slice()", "slice()")}}.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Syntax

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

### Parameters

- `start`

  - : The index at which to start changing the array.

    If greater than the length of the array, `start` will be set to the length of the array.
    In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided.

    If negative, it will begin that many elements from the end of the array.
    (In this case, the origin `-1`, meaning `-n` is the index of the `n`th last element, and is therefore equivalent to the index of `array.length - n`.)
    If `start` is `-Infinity`, it will begin from index `0`.

- `deleteCount` {{optional_inline}}

  - : An integer indicating the number of elements in the array to remove from `start`.

    If `deleteCount` is omitted, or if its value is equal to or larger than `array.length - start` (that is, if it is equal to or greater than the number of elements left in the array, starting at `start`), then all the elements from `start` to the end of the array will be deleted. However, it must not be omitted if there is any `item1` parameter.

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

If the specified number of elements to insert differs from the number of elements being removed, the array's `length` will be changed.

## Examples

### Remove 0 (zero) elements before index 2, and insert "drum"

```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2, 0, 'drum', 'guitar');

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Remove 1 element at index 3

```js
const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
```

### Remove 1 element at index 2, and insert "trumpet"

```js
const myFish = ['angel', 'clown', 'drum', 'sturgeon'];
const removed = myFish.splice(2, 1, 'trumpet');

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

### Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

```js
const myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
const removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

### Remove 2 elements, starting from index 2

```js
const myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
const removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

### Remove 1 element from index -2

```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

### Remove all elements, starting from index 2

```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()", "pop()")}}— add/remove elements from the end of the array
- {{jsxref("Array.prototype.unshift()", "unshift()")}} / {{jsxref("Array.prototype.shift()", "shift()")}}— add/remove elements from the beginning of the array
- {{jsxref("Array.prototype.concat()", "concat()")}}— returns a new array comprised of this array joined with other array(s) and/or value(s)
