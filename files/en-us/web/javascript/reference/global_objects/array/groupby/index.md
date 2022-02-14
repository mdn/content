---
title: Array.prototype.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Array/groupBy
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.groupBy
---
{{JSRef}}

The `groupBy()` method groups the elements of the provided array according to the "category" values returned by a provided testing function.
All elements with the same category are added to their own array, and each array is assigned to a property named with the associated category string.

{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}

Note original and grouped arrays reference the same elements;
If you modify an element that is an object, this will be reflected in both arrays. 

This method requires that every group is a string (or can be coerced to a string).
If you need to group elements using a key that is some arbitrary object, use {{jsxref("Array.prototype.groupByToMap()")}} instead.

## Syntax

```js
// Arrow function
groupBy((element) => { /* ... */ } )
groupBy((element, index) => { /* ... */ } )
groupBy((element, index, array) => { /* ... */ } )

// Callback function
groupBy(callbackFn)
groupBy(callbackFn, thisArg)

// Inline callback function
groupBy(function(element) { /* ... */ })
groupBy(function(element, index) { /* ... */ })
groupBy(function(element, index, array){ /* ... */ })
groupBy(function(element, index, array) { /* ... */ }, thisArg)
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
    It must be possible to coerce this returned callback value into a string (which will then be used as a property name in the final returned object).

- `thisArg` {{optional_inline}}
  - : Object to use as {{jsxref("Operators/this", "this")}} inside `callbackFn`.
      If not specified, `undefined` will be used.

### Return value

An [`Object`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with properties for all groups, each assigned to an array with the elements of the associated group. 
The value is an object that does not inherit from `Object.prototype`.

## Exceptions

- `TypeError`
  - : The specified callback function is not callable.

## Description

The `groupBy()` method executes the `callbackFn` function once for each index of the array, returning a string (or value that can be coerced to a string) indicating the group of the element.
A new property and array is created in the result object corresponding to each unique group name that is returned by the callback.
Each element is added to the array in the property that corresponds to its group.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `groupBy()`, it will be used as the `this` value inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The `groupBy()` method does not mutate the array on which it is called, but the function provided to `callbackFn` can.
Note however that the elements processed by `groupBy()` are set _before_ the first invocation of `callbackFn`.
Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `groupBy()` begins.
- Elements that are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `groupBy()` visits that element's index.
- Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.

> **Warning:** Concurrent modifications of the kind described in the previous paragraph frequently lead to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

This example shows how we might group objects using different approaches.

First we define the array of different types of food that we would like to group by type, and also by whether it needs to be reordered.

```js
const inventory = [
  {name: 'apples', type: 'vegetables', quantity: 5},
  {name: 'bananas',  type: 'fruit', quantity: 0},
  {name: 'goat', type: 'meat', quantity: 23},
  {name: 'cherries', type: 'fruit', quantity: 5},
  {name: 'fish', type: 'meat', quantity: 22}
];
```

In the simplest case we can just sort on the value of one of the keys in the object.
Here we pass in the element and return the value of that element 

```js
let result = inventory.groupBy( ({ type }) => type );
/* result is:
{ 
  vegetables:  [ { name: "apples", type: "vegetables", quantity: 5 } ],
  fruit: [ { name: "bananas", type: "fruit", quantity: 0 },  { name: "cherries", type: "fruit", quantity: 5 } ], 
  meat: [ { name: "goat", type: "meat", quantity: 23 },  { name: "fish", type: "meat", quantity: 22 } ] 
}
*/
```

Here we pass in the `quantity, and then use it to group on whether or not we need to reorder:
```js
result = inventory.groupBy( ({ quantity }) => quantity > 5 ? 'ok' : 'reorder' );
console.log(result);
/* Result is:
{ 
  reorder: [ { name: "apples", type: "vegetables", quantity: 5 },  { name: "bananas", type: "fruit", quantity: 0 },  { name: "cherries", type: "fruit", quantity: 5 }], 
  ok: [ { name: "goat", type: "meat", quantity: 23 },  { name: "fish", type: "meat", quantity: 22 }] }
```

The following example uses the callback function syntax: .... NOT DONE YET - perhaps do the case above.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.groupByToMap()")}} – Group an array into a map, using any kind of object as a key or value.
- [Polyfill of `Array.prototype.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
