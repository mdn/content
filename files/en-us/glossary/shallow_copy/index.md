---
title: Shallow copy
slug: Glossary/Shallow_copy
tags:
  - Glossary
  - Shallow copy
---
{{MDNSidebar}}

A **shallow copy** of an object is a copy whose members share the same references as those of the object from which the copy was made — in contrast with a [deep copy](/en-US/docs/Glossary/Deep_copy). All standard built-in object-copy operations in JavaScript create shallow copies rather than deep copies.

Because a shallow copy shares references with the object from which it was copied, the following hold true:

- When you change a property of an existing member value in a shallow copy, the property also changes in the object from which the shallow copy was made.

- When you assign a completely new value to a member in a shallow copy, the value of the member in the object from which the shallow copy was made does not change.

Those same statements hold true for the behavior of the shallow copy when changes are made in the other direction: that is, when you make any changes to the object from which the shallow copy was made.

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

// Assign a completely new value to the first member of ingredients_list_copy.
ingredients_list_copy[0] = "rice noodles"
// The value of the first member of ingredients_list has *not* changed.
console.log(ingredients_list[0])
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

## See also

- [Deep copy](/en-US/docs/Glossary/Deep_copy)
