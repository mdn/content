---
title: Array.prototype.groupToMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/groupToMap
tags:
  - Array
  - groupToMap
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Experimental
browser-compat: javascript.builtins.Array.groupToMap
---
{{JSRef}} {{SeeCompatTable}}

The **`groupToMap()`** method groups the elements of the calling array using the values returned by a provided testing function.
The final returned {{jsxref("Map")}} uses the unique values from the test function as keys, which can be used to get the array of elements in each group.

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

The method is primarily useful when grouping elements that are associated with an object, and in particular when that object might change over time.
If the object is invariant, you might instead represent it using a string, and group elements with {{jsxref("Array.prototype.group()")}}.

## Syntax

```js
// Arrow function
groupToMap((element) => { /* … */ } )
groupToMap((element, index) => { /* … */ } )
groupToMap((element, index, array) => { /* … */ } )

// Callback function
groupToMap(callbackFn)
groupToMap(callbackFn, thisArg)

// Inline callback function
groupToMap(function(element) { /* … */ })
groupToMap(function(element, index) { /* … */ })
groupToMap(function(element, index, array){ /* … */ })
groupToMap(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function to execute on each element in the array.

    The function is called with the following arguments:

    - `element`
      - : The current element in the array.
    - `index`
      - : The index (position) of the current element in the array.
    - `array`
      - : The array that `groupToMap()` was called on.

    The value ({{Glossary("object")}} or {{Glossary("primitive")}}) returned from the callback indicates the group of the current element.

- `thisArg` {{optional_inline}}
  - : Object to use as {{jsxref("Operators/this", "this")}} inside `callbackFn`.

     The argument is ignored in arrow functions, as they have their own lexical scope that will be used instead.
     Otherwise, if `thisArg` not specified, then either the `this` of the executing scope is used, or `undefined` if the function is called in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

### Return value

A {{jsxref("Map")}} object with keys for each group, each assigned to an array containing the elements of the associated group.

### Exceptions

- `TypeError`
  - : The specified callback function is not callable.

## Description

The `groupToMap()` method executes `callbackFn` once for each index of the array.
The callback function returns a value indicating the group of the associated element.
The values returned by `callbackFn` are used as keys for the {{jsxref("Map")}} returned by `groupToMap()`.
Each key has an associated array containing all the elements for which the callback returned the same value.

The elements in the returned {{jsxref("Map")}} and the original array are the same (not {{glossary("deep copy","deep copies")}}).
Changing the internal structure of the elements will be reflected in both the original array and the returned {{jsxref("Map")}}.

This method is useful when you need to group information that is related to a particular object that might potentially change over time.
This is because even if the object is modified, it will continue to work as a key to the returned `Map`.
If you instead create a string representation for the object and use that as a grouping key in {{jsxref("Array.prototype.group()")}}, you must maintain the mapping between the original object and its representation as the object changes.

> **Note:** To access the groups in the returned `Map`, you must use the same object that was originally used as a key in the `Map` (although you may modify its properties).
> You can't use another object that just happens to have the same name and properties.

`callbackFn` is called with the value of the current element, the current index, and the array itself.
While groups often depend only on the current element, it is possible to implement grouping strategies based on the values of other elements in the array.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `groupToMap()`, it will be used as the `this` value inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

### Mutating the array in the callback

The `groupToMap()` method does not mutate the array on which it is called, but the function provided to `callbackFn` can.
Note however that the elements processed by `groupToMap()` are set _before_ the first invocation of `callbackFn`.
Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `groupToMap()` begins.
- Elements that are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `groupToMap()` visits that element's index.
- Elements that are [deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete#deleting_array_elements) are still visited.

> **Warning:** Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

## Examples

First we define an array containing objects representing an inventory of different foodstuffs.
Each food has a `type` and a `quantity`.

```js
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 9 },
  { name: 'bananas',  type: 'fruit', quantity: 5 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 12 },
  { name: 'fish', type: 'meat', quantity: 22 }
];
```

The code below uses `groupToMap()` with an arrow function that returns the object keys named `restock` or `sufficient`, depending on whether the element has `quantity < 6`.
The returned `result` object is a `Map` so we need to call `get()` with the key to obtain the array.

```js
const restock  = { restock: true };
const sufficient = { restock: false };
const result = inventory.groupToMap(({ quantity }) => quantity < 6 ? restock : sufficient);
console.log(result.get(restock));
// expected output: Array [Object { name: "bananas", type: "fruit", quantity: 5 }]
```

Note that the function argument `{ quantity }` is a basic example of [object destructuring syntax for function arguments](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_fields_from_objects_passed_as_a_function_parameter).
This unpacks the `quantity` property of an object passed as a parameter, and assigns it to a variable named `quantity` in the body of the function.
This is a very succinct way to access the relevant values of elements within a function.

The key to a `Map` can be modified and still used.
However you can't recreate the key and still use it.
For this reason it is important that anything that needs to use the map keeps a reference to its keys.

```js
// The key can be modified and still used
restock['fast']  = true ;
console.log(result.get(restock));
// expected output: Array [Object { name: "bananas", type: "fruit", quantity: 5 }]

// A new key can't be used, even if it has the same structure!
const restock2  = { restock: true };
console.log(result.get(restock2));
// expected output: undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.group()")}}
- [Polyfill of `Array.prototype.group` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
