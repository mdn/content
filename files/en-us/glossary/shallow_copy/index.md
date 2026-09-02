---
title: Shallow copy
slug: Glossary/Shallow_copy
page-type: glossary-definition
sidebar: glossarysidebar
---

A **shallow copy** of an object is a copy whose properties share the same {{Glossary("object reference", "references")}} (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a {{Glossary("deep copy")}}, in which the source and copy are completely independent.

Shallow copying is usually implemented as such:

1. A new object of the same type is created. The prototype chain is nearly always preserved. For example deep copying a {{jsxref("Map")}} should result in a {{jsxref("Map")}} and not something else.
2. For each own property of the original object, a property with the same key is defined on the new object.
3. Each new property's value is set to the same reference as the original property's value. If the property's value is a primitive, no copying is done.
4. Any data that's not exposed as properties, such as {{jsxref("Map")}}, is ported over, but without copying any object references inside the data, provided that the implementation recognizes the object type and knows how to retrieve and set the data.

Note that because JavaScript has no built-in mechanism that performs a generic shallow copy (the existing ones only assume specific object types like plain objects or array), library implementations often diverge on technical details, such as:

- Are non-enumerable or symbol properties copied
- Are property descriptors copied
- Are accessor properties copied as accessors
- What data structures support copying non-property data

The copy of an object whose properties all have primitive values fits the definition of both a {{Glossary("deep copy")}} and a shallow copy. It is somewhat useless to talk about the depth of such a copy, though, because it has no nested properties and we usually talk about deep copying in the context of mutating nested properties.

For shallow copies, only the top-level properties are copied, not the values of nested objects. Therefore:

- Re-assigning top-level properties of the copy does not affect the source object.
- Re-assigning nested object properties of the copy does affect the source object.

In JavaScript, all standard built-in object-copy operations ([spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), and [`Object.assign()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) create shallow copies rather than deep copies.

Consider the following example, in which an `ingredientsList` array object is created, and then an `ingredientsListCopy` object is created by copying that `ingredientsList` object.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```

Re-assigning the value of a nested property will be visible in both objects.

```js
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```

Re-assigning the value of a top-level property (the `0` index in this case) will only be visible in the changed object.

```js
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]
```

## See also

- Related glossary terms:
  - {{Glossary("Deep equality")}}
  - {{Glossary("Deep copy")}}
