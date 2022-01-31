---
title: Deep copy
slug: Glossary/Deep_copy
tags:
  - Glossary
  - Deep copy
---
{{MDNSidebar}}

A **deep copy** of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made — in contrast with a [shallow copy](/en-US/docs/Glossary/Shallow_copy). In JavaScript, standard built-in object-copy operations ([`Object.assign()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), and [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) do not create deep copies (instead, they create shallow copies).

To make a deep copy of a JavaScript object, you may be able to use {{jsxref("JSON.stringify()")}} to serialize the object to a JSON string, and then {{jsxref("JSON.parse()")}} to convert the string to a JavaScript object:

```js
let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_copy.
ingredients_list_deepcopy[1].list = ["rice flour","water"]
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

As can be seen from the code above, because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.

However, many JavaScript objects are not serializable at all and calling `JSON.stringify()` to serialize them will fail. So there’s no way to make deep copies of such objects.

For objects that _are_ serializable, you can alternatively use the [`structuredClone()`](/en-US/docs/Web/API/structuredClone) method to create deep copies. But note that `structuredClone()` isn’t a feature of the JavaScript language itself — instead it’s a feature of browsers and any other JavaScript runtimes that implement a global object like [`window`](/en-US/docs/Web/API/Window). And calling `structuredClone()` to clone a non-serializable object will fail in the same way that calling `JSON.stringify()` to serialize it will fail.

## See also

- [Shallow copy](/en-US/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/en-US/docs/Web/API/structuredClone)
