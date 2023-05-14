---
title: Array.prototype.group()
slug: Web/JavaScript/Reference/Global_Objects/Array/group
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Array.group
---

{{JSRef}} {{SeeCompatTable}}

The **`group()`** method groups the elements of the calling array according to the string values returned by a provided testing function.
The returned object has separate properties for each group, containing arrays with the elements in the group.

<!-- {{EmbedInteractiveExample("pages/js/array-groupby.html")}} -->

This method should be used when group names can be represented by strings.
If you need to group elements using a key that is some arbitrary value, use {{jsxref("Array.prototype.groupToMap()")}} instead.

## Syntax

```js-nolint
group(callbackFn)
group(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the array. It should return a value that can get coerced into a property key (string or [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) indicating the group of the current element. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `group()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

A [`null`-prototype object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) with properties for all groups, each assigned to an array containing the elements of the associated group.

## Description

The `group()` method is an [iterative method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). It calls a provided `callbackFn` function once for each element in an array, returning a string or symbol (values that are neither type are [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)) indicating the group of the element.
A new property and array is created in the result object for each unique group name that is returned by the callback.
Each element is added to the array in the property that corresponds to its group.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values. Empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behave the same as `undefined`.

The `group()` method is a [copying method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter `this` but instead returns an object of arrays that contains the same elements as the ones from the original array. However, the function provided as `callbackFn` can mutate the array. Note, however, that the length of the array is saved _before_ the first invocation of `callbackFn`. Therefore:

- `callbackFn` will not visit any elements added beyond the array's initial length when the call to `group()` began.
- Changes to already-visited indexes do not cause `callbackFn` to be invoked on them again.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time that element gets visited. [Deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete) elements are visited as if they were `undefined`.

> **Warning:** Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The returned object references the _same_ elements as the original array (not {{glossary("deep copy","deep copies")}}). Changing the internal structure of these elements will be reflected in both the original array and the returned object.

The `group()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Using group()

First we define an array containing objects representing an inventory of different foodstuffs.
Each food has a `type` and a `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
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
Note that the function argument `{ type }` is a basic example of [object destructuring syntax for function arguments](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter).
This unpacks the `type` property of an object passed as a parameter, and assigns it to a variable named `type` in the body of the function.
This is a very succinct way to access the relevant values of elements within a function.

We can also create groups inferred from values in one or more properties of the elements.
Below is a very similar example that puts the items into `ok` or `restock` groups based on the value of the `quantity` field.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = inventory.group(myCallback);

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

### Using group() on sparse arrays

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `group()` method iterates empty slots as if they have the value `undefined`.

```js
console.log([1, , 3].group((x) => x)); // { 1: [1], undefined: [undefined], 3: [3] }
```

### Calling group() on non-array objects

The `group()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by group() since length is 3
};
console.log(Array.prototype.group.call(arrayLike, (x) => x % 2));
// { 0: [2, 4], 1: [3] }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.group` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.groupToMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
