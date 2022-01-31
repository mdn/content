---
title: Shallow copy
slug: Glossary/Shallow_copy
tags:
  - Glossary
  - Shallow copy
---
{{MDNSidebar}}

  A **shallow copy** of an object is a copy whose properties share the same references as those of the source object from which the copy was made — in contrast with a [deep copy](/en-US/docs/Glossary/Deep_copy). In JavaScript, all standard built-in object-copy operations ([`Object.assign()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), and [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) create shallow copies rather than deep copies.

Because a shallow copy shares references with its source object, the following hold true:

- When you change a property of an existing property value in a shallow copy, the property also changes in the source object.
- When you assign a completely new value to a property in a shallow copy, the value of the property in the source object does not change.

Those same statements hold true for the behavior of the shallow copy when changes are made in the other direction: that is, when you make any changes to the source object of a shallow copy.

## Example

Consider the following example, in which an `ingredients_list` array object is created, and then an `ingredients_list_copy` object is created by copying that `ingredients_list` object.

```js
let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]

// Change the value of the 'list' property in ingredients_list_copy.
ingredients_list_copy[1].list = ["rice flour","water"]
// The 'list' property has also changed in ingredients_list.
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]

// Assign a completely new value to the first item in ingredients_list_copy.
ingredients_list_copy[0] = "rice noodles"
// The value of the first item in ingredients_list has *not* changed.
console.log(ingredients_list[0])
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

## See also

- [Deep copy](/en-US/docs/Glossary/Deep_copy)
