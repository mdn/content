---
title: Array.prototype.group()
slug: Web/JavaScript/Reference/Global_Objects/Array/group
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Experimental
browser-compat: javascript.builtins.Array.group
---
{{JSRef}} {{SeeCompatTable}}

The **`group()`** method groups the elements of the calling array according to the string values returned by a provided testing function.
The returned object has separate properties for each group, containing arrays with the elements in the group.

<!-- {{EmbedInteractiveExample("pages/js/array-groupby.html")}} -->

This method should be used when group names can be represented by strings.
If you need to group elements using a key that is some arbitrary value, use {{jsxref("Array.prototype.groupToMap()")}} instead.

## Syntax

```js
// Arrow function
group((element) => { /* … */ } )
group((element, index) => { /* … */ } )
group((element, index, array) => { /* … */ } )

// Callback function
group(callbackFn)
group(callbackFn, thisArg)

// Inline callback function
group(function(element) { /* … */ })
group(function(element, index) { /* … */ })
group(function(element, index, array){ /* … */ })
group(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function to execute on each element in the array

    The function is called with the following arguments:

    - `element`
      - : The value of the current element in the array.
    - `index`
      - : The index (position) of the current element in the array.
    - `array`
      - : The array that `group()` was called on.

    The object returned from the callback indicates the group of the current element.
    It must be possible to coerce this returned callback value into a string (which will then be used as a property name in the final returned object).

- `thisArg` {{optional_inline}}
  - : Object to use as {{jsxref("Operators/this", "this")}} inside `callbackFn`.

     The argument is ignored in arrow functions, as they have their own lexical scope that will be used instead.
     Otherwise, if `thisArg` not specified, then either the `this` of the executing scope is used, or `undefined` if the function is called in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

### Return value

An [`Object`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with properties for all groups, each assigned to an array containing the elements of the associated group.
The value is an object that does not inherit from `Object.prototype`.

### Exceptions

- `TypeError`
  - : The specified callback function is not callable.

## Description

The `group()` method executes the `callbackFn` function once for each index of the array, returning a string (or value that can be coerced to a string) indicating the group of the element.
A new property and array is created in the result object for each unique group name that is returned by the callback.
Each element is added to the array in the property that corresponds to its group.

Note that the returned object references the _same_ elements as the original array (not {{glossary("deep copy","deep copies")}}).
Changing the internal structure of these elements will be reflected in both the original array and the returned object.

`callbackFn` is called with the value of the current element, the current index, and the array itself.
While groups often depend only on the current element, it is possible to implement grouping strategies based on the values of other elements in the array.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `group()`, it will be used as the `this` value inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

### Mutating the array in the callback

The `group()` method does not mutate the array on which it is called, but the function provided to `callbackFn` can.
Note however that the elements processed by `group()` are set _before_ the first invocation of `callbackFn`.
Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `group()` begins.
- Elements that are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `group()` visits that element's index.
- Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.

> **Warning:** Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

## Examples

First we define an array containing objects representing an inventory of different foodstuffs.
Each food has a `type` and a `quantity`.

```js
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas',  type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];
```

The code below groups the elements by the value of their `type` property.

```js
const result = inventory.group(({ type }) => type);

/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

The arrow function just returns the `type` of each array element each time it is called.
Note that the function argument `{ type }` is a basic example of [object destructuring syntax for function arguments](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_fields_from_objects_passed_as_a_function_parameter).
This unpacks the `type` property of an object passed as a parameter, and assigns it to a variable named `type` in the body of the function.
This is a very succinct way to access the relevant values of elements within a function.

We can also create groups inferred from values in one or more properties of the elements.
Below is a very similar example that puts the items into `ok` or `restock` groups based on the value of the `quantity` field.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? 'ok' : 'restock';
}

result = inventory.group(myCallback);

/* Result is:
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.groupToMap()")}} – Group an array into a map, using any kind of object as a key or value.
- [Polyfill of `Array.prototype.group` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
