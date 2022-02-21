---
title: Array.prototype.groupByToMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/groupByToMap
tags:
  - Array
  - groupByToMap
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Experimental
browser-compat: javascript.builtins.Array.groupByToMap
---
{{JSRef}} {{SeeCompatTable}}

The **`groupByToMap()`** method groups the elements of the calling array using the _objects_ returned by a provided testing function.
The final returned {{jsxref("Map")}} uses the unique objects from the test function as keys, which can be used to get the array of elements in each group.

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

The elements in the {{jsxref("Map")}} and the original array are the same (not {{glossary("deep copy","deep copies")}}).
Changing the internal structure of the elements will be reflected in both the original array and the returned object.

An object that needs to access the groups must keep a reference to the original key; the properties of a key can be modified, but you can't use another object that just happens to have the same name and properties.

This method is useful when mapping related information to a specific object that might change over time.
If the mapping object is invariant then you could instead use {{jsxref("Array.prototype.groupBy()")}} to group the elements, representing the object with a string.


## Syntax

```js
// Arrow function
groupByToMap((element) => { /* ... */ } )
groupByToMap((element, index) => { /* ... */ } )
groupByToMap((element, index, array) => { /* ... */ } )

// Callback function
groupByToMap(callbackFn)
groupByToMap(callbackFn, thisArg)

// Inline callback function
groupByToMap(function(element) { /* ... */ })
groupByToMap(function(element, index) { /* ... */ })
groupByToMap(function(element, index, array){ /* ... */ })
groupByToMap(function(element, index, array) { /* ... */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function to execute on each element in the array, taking 3 arguments:

    - `element`
      - : The value of the current element in the array.
    - `index` {{optional_inline}}
      - : The index (position) of the current element in the array.
    - `array` {{optional_inline}}
      - : The array that `groupBy()` was called on.

    The object returned from the callback indicates the group of the current element.

- `thisArg` {{optional_inline}}
  - : Object to use as {{jsxref("Operators/this", "this")}} inside `callbackFn`.
      If not specified, `undefined` will be used.

### Return value

A {{jsxref("Map")}} object with keys for each group, each assigned to an array containing the elements of the associated group.

### Exceptions

- `TypeError`
  - : The specified callback function is not callable.

## Description

The `groupByToMap()` method executes the `callbackFn` function once for each index of the array, returning an object indicating the group of the associated element.
The objects returned by the callback are used as keys for a {{jsxref("Map")}} (later returned by `groupByToMap()`), where the associated value is an array containing all the elements for which the callback returned the same object.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `groupByToMap()`, it will be used as the `this` value inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The `groupByToMap()` method does not mutate the array on which it is called, but the function provided to `callbackFn` can.
Note however that the elements processed by `groupByToMap()` are set _before_ the first invocation of `callbackFn`.
Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `groupByToMap()` begins.
- Elements that are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `groupByToMap()` visits that element's index.
- Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.

> **Warning:** Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

## Examples

First we define an array containing objects representing an inventory of different foodstuffs.
Each food has a `type`, which might need to be stored differently, and a `quantity` that can be used to determine when we need to reorder each item.

```js
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 9 },
  { name: 'bananas',  type: 'fruit', quantity: 5 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 12 },
  { name: 'fish', type: 'meat', quantity: 22 }
];
```

The code below uses `groupByToMap()` with an arrow function that returns the object key named `reorder` or `sufficient`, depending on whether the element has `quantity < 6`.
The returned `result` object is a `Map` so we need to call `get()` with the key to obtain the array.

```js
let reorder  = { reorder: true };
const sufficient = { reorder: false };
const result = inventory.groupByToMap( ({ quantity }) => quantity < 6 ? reorder : sufficient );
console.log(result.get(reorder));
// expected output: Array [Object { name: "bananas", type: "fruit", quantity: 5 }]
```

Note that the function argument `{ quantity }` is a basic example of [object destructuring syntax for function arguments](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_fields_from_objects_passed_as_a_function_parameter).
This unpacks the `quantity` property of an object passed as a parameter, and assigns it to a variable named `quantity` in the body of the function.
This is a very succinct way to access the relevant values of elements within a function.


The object key can be modified and still used.
However you can't recreate the key and still use it.
For this reason it is important that anything that needs to use the map keeps a reference to its keys.

```js
// A modified key can still be used in a Map
reorder['fast']  = true ;
console.log(result.get(reorder));
// expected output: Array [Object { name: "bananas", type: "fruit", quantity: 5 }]

// But you can't use a different key, even if it has the same structure!
const reorder2  = { reorder: true };
console.log(result.get(reorder2));
// expected output: undefined
```

The callback syntax provides access to the array and current index, so it is possible to implement grouping strategies based on the values of other elements in the array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.groupBy()")}}
- [Polyfill of `Array.prototype.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
