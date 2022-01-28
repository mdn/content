---
title: Deep copy
slug: Glossary/Deep_copy
tags:
  - Glossary
  - Deep copy
---
{{MDNSidebar}}

A **deep copy** of an object is a copy whose members do not share the same references as those of the object from which the copy was made — in contrast with a [shallow copy](/en-US/docs/Glossary/Shallow_copy). Standard built-in object-copy operations in JavaScript do not create deep copies (instead, they create shallow copies).

When you want a deep copy of a JavaScript object, you can make one by using {{jsxref("JSON.stringify()")}} to convert the object to a JSON string, and then {{jsxref("JSON.parse()")}} to convert the string to a JavaScript object:

```js
let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_copy.
ingredients_list_deepcopy[1].list = ["rice flour","water"]
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

As can be seen from the code above, because a deep copy shares no references with the object from which it was copied, any changes made to the deep copy do not affect the object from which it was copied.

You can also use the [`window.structuredClone()`](/en-US/docs/Web/API/structuredClone) method to create deep copies. But note that `window.structuredClone()` isn’t a feature of the JavaScript language itself — instead it’s a feature of browsers and any other JavaScript runtimes that implement the global [`window`](/en-US/docs/Web/API/Window) object.

## See also

- [Shallow copy](/en-US/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/en-US/docs/Web/API/structuredClone)
