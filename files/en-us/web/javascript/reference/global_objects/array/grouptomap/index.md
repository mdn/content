---
title: Array.prototype.groupToMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/groupToMap
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Array.groupToMap
---

{{JSRef}} {{SeeCompatTable}}

The **`groupToMap()`** method groups the elements of the calling array using the values returned by a provided testing function.
The final returned {{jsxref("Map")}} uses the unique values from the test function as keys, which can be used to get the array of elements in each group.

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

The method is primarily useful when grouping elements that are associated with an object, and in particular when that object might change over time.
If the object is invariant, you might instead represent it using a string, and group elements with {{jsxref("Array.prototype.group()")}}.

## Syntax

```js-nolint
groupToMap(callbackFn)
groupToMap(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the array. It should return a value ({{Glossary("object")}} or {{Glossary("primitive")}}) indicating the group of the current element. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `groupToMap()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

A {{jsxref("Map")}} object with keys for each group, each assigned to an array containing the elements of the associated group.

## Description

The `groupToMap()` method is an [iterative method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). It calls a provided `callbackFn` function once for each element in an array.
The callback function returns a value indicating the group of the associated element.
The values returned by `callbackFn` are used as keys for the {{jsxref("Map")}} returned by `groupToMap()`.
Each key has an associated array containing all the elements for which the callback returned the same value.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
Empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behave the same as `undefined`.

The `groupToMap()` method is a [copying method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter `this` but instead returns a map of arrays that contains the same elements as the ones from the original array. However, the function provided as `callbackFn` can mutate the array. Note, however, that the length of the array is saved _before_ the first invocation of `callbackFn`. Therefore:

- `callbackFn` will not visit any elements added beyond the array's initial length when the call to `groupToMap()` began.
- Changes to already-visited indexes do not cause `callbackFn` to be invoked on them again.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time that element gets visited. [Deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete) elements are visited as if they were `undefined`.

> **Warning:** Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The elements in the returned {{jsxref("Map")}} and the original array are the same (not {{glossary("deep copy","deep copies")}}). Changing the internal structure of the elements will be reflected in both the original array and the returned {{jsxref("Map")}}.

The `groupToMap()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

This method is useful when you need to group information that is related to a particular object that might potentially change over time.
This is because even if the object is modified, it will continue to work as a key to the returned `Map`.
If you instead create a string representation for the object and use that as a grouping key in {{jsxref("Array.prototype.group()")}}, you must maintain the mapping between the original object and its representation as the object changes.

> **Note:** To access the groups in the returned `Map`, you must use the same object that was originally used as a key in the `Map` (although you may modify its properties).
> You can't use another object that just happens to have the same name and properties.

## Examples

### Using groupToMap()

First we define an array containing objects representing an inventory of different foodstuffs.
Each food has a `type` and a `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

The code below uses `groupToMap()` with an arrow function that returns the object keys named `restock` or `sufficient`, depending on whether the element has `quantity < 6`.
The returned `result` object is a `Map` so we need to call `get()` with the key to obtain the array.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = inventory.groupToMap(({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Note that the function argument `{ quantity }` is a basic example of [object destructuring syntax for function arguments](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter).
This unpacks the `quantity` property of an object passed as a parameter, and assigns it to a variable named `quantity` in the body of the function.
This is a very succinct way to access the relevant values of elements within a function.

The key to a `Map` can be modified and still used.
However you can't recreate the key and still use it.
For this reason it is important that anything that needs to use the map keeps a reference to its keys.

```js
// The key can be modified and still used
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// A new key can't be used, even if it has the same structure!
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

### Using groupToMap() on sparse arrays

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `groupToMap()` method iterates empty slots as if they have the value `undefined`.

```js
console.log([1, , 3].groupToMap((x) => x));
// Map { 1 => [1], undefined => [undefined], 3 => [3] }
```

### Calling groupToMap() on non-array objects

The `groupToMap()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by groupToMap() since length is 3
};
console.log(Array.prototype.groupToMap.call(arrayLike, (x) => x % 2));
// Map { 0 => [2, 4], 1 => [3] }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.groupToMap` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.group()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
