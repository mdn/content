---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.groupBy
---

{{JSRef}}

> [!NOTE]
> In some versions of some browsers, this method was implemented as the method `Array.prototype.group()`. Due to web compatibility issues, it is now implemented as a static method. Check the [browser compatibility table](#browser_compatibility) for details.

The **`Object.groupBy()`** static method groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group.

This method should be used when group names can be represented by strings. If you need to group elements using a key that is some arbitrary value, use {{jsxref("Map.groupBy()")}} instead.

<!-- {{EmbedInteractiveExample("pages/js/object-groupby.html")}} -->

## Syntax

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parameters

- `items`
  - : An [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an {{jsxref("Array")}}) whose elements will be grouped.
- `callbackFn`
  - : A function to execute for each element in the iterable. It should return a value that can get coerced into a property key (string or [symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) indicating the group of the current element. The function is called with the following arguments:
    - `element`
      - : The current element being processed.
    - `index`
      - : The index of the current element being processed.

### Return value

A [`null`-prototype object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) with properties for all groups, each assigned to an array containing the elements of the associated group.

## Description

`Object.groupBy()` calls a provided `callbackFn` function once for each element in an iterable. The callback function should return a string or symbol (values that are neither type are [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)) indicating the group of the associated element. The values returned by `callbackFn` are used as keys for the object returned by `Object.groupBy()`. Each key has an associated array containing all the elements for which the callback returned the same value.

The elements in the returned object and the original iterable are the same (not {{Glossary("deep copy", "deep copies")}}). Changing the internal structure of the elements will be reflected in both the original iterable and the returned object.

## Examples

### Using Object.groupBy()

First we define an array containing objects representing an inventory of different foodstuffs. Each food has a `type` and a `quantity`.

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
const result = Object.groupBy(inventory, ({ type }) => type);

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

The arrow function just returns the `type` of each array element each time it is called. Note that the function argument `{ type }` is a basic example of [object destructuring syntax for function arguments](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter). This unpacks the `type` property of an object passed as a parameter, and assigns it to a variable named `type` in the body of the function.
This is a very succinct way to access the relevant values of elements within a function.

We can also create groups inferred from values in one or more properties of the elements. Below is a very similar example that puts the items into `ok` or `restock` groups based on the value of the `quantity` field.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

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

- [Polyfill of `Object.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
